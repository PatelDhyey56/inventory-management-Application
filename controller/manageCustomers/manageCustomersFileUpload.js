const logger = require('../../logs.js');

const fs = require("fs");
const csv = require("fast-csv");
const path = require("path");

const { getAllCityState } = require("../../service/commonFunctions/commonFunctions.js");
const { insertCustomerFromFileQuery } = require('../../service/manageCustomers/manageCustomers.js');

const manageCustomerValidation = require('./manageCustomerFileValidation.js');

async function uploadFile(req, res) {
  try {
    let customerDetails = [];
    let dataErrorStatus = false;
    if (req.fileError) {
      return res.status(400).json({ message: "Please Upload CSV File" });
    }
    // logger.info(req.file.filename);
    let filePath = path.join(__dirname, `../../public/uploads/csvFiles/${req.file.filename}`);

    /**first check file exist in folder or not it is extra handle if file upload in folder then this execute
     * second we read csv file each row we got object with csv file first line is key
     */

    if (fs.existsSync(filePath)) {
      const allCityState = await getAllCityState(); //array contain object
      fs.createReadStream(filePath)
        .pipe(csv.parse({ headers: true }))
        .on("error", (err) => {
          logger.logError(err);
          return res.status(500).json({ message: "Something Went Wrong.." });
        })
        .on("data", async (row) => {
          const dataValidationStatus = manageCustomerValidation(row);
          if (!dataValidationStatus && !dataErrorStatus) {
            let eachCustomerDetails = [];
            for (let key in row) {
              switch (key) {
                case "city":
                  for (let element of allCityState) {
                    let cityNameInDb = element.city_name;
                    let fileCity = row.city;
                    let stateNameInDb = element.state_name;
                    let fileState = row.state;
                    if (cityNameInDb.toLowerCase() === fileCity.toLowerCase() && stateNameInDb.includes(fileState)) {
                      eachCustomerDetails.push(Number(element.city_id));
                      eachCustomerDetails.push(Number(element.state_id));
                    }
                  }
                  break;

                case "state":
                  break;
                default:
                  eachCustomerDetails.push(row[key]);
              }
            }
            customerDetails.push(eachCustomerDetails);
            // logger.info(eachCustomerDetails);
          } else {
            dataErrorStatus = true;
          }
        })
        .on("end", async () => {
          try {
            if (dataErrorStatus) {
              return res.status(400).json({ message: "Invalid Data In CSV File" });
            } else {
              const customerInsert = await insertCustomerFromFileQuery(customerDetails);
              return res.status(200).json({ message: "Inserted", filePath: req.file.filename });
            }
          } catch (err) {
            return res.status(500).json({ message: "Something Went Wrong.." });
          }
        });
    } else {
      throw new Error("Something Went Wrong..")
    }
  } catch (error) {
    logger.info("Customer File Upload:" + error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { uploadFile };