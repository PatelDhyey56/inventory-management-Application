const logger = require('../../logs.js');
const { getStateQuery, getCityQuery } = require('../../service/commonFunctions/commonFunctions.js');
const { getCombos } = require('../../service/helper.js');
const path = require('path');
const fs = require("fs");

async function getState(req, res) {
  try {
    const stateArray = await getStateQuery();
    if (stateArray.length === 0) {
      return res.status(404).json({ message: "Something Went Wrong" });
    } else {
      return res.status(200).json({ stateArray: stateArray });
    }
  } catch (error) {
    logger.logError(error);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
}


async function getCity(req, res) {
  try {
    const stateName = req.body;
    const cityArray = await getCityQuery(stateName.state);
    if (cityArray.length === 0) {
      return res.status(404).json({ message: "Something  Went Wrong" });
    } else {
      return res.status(200).json({ cityArray: cityArray });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
}

async function getCombosDetails(req, res) {
  try {
    const name = req.body.key;
    const comboDetailsArray = await getCombos(name);
    if (comboDetailsArray.length > 0) {
      return res.status(200).json(comboDetailsArray);
    } else {
      return res.status(404).json({ message: "Something Went Wrong" });
    }
  } catch (error) {
    logger.logError(error);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
}

//this function is use ful when user download pdf then pdf unlink
function unlinkProductPdf(pdfNameObject) {
  const pdfPath = path.join(__dirname, `../../public/uploads/${pdfNameObject.folderName}/${pdfNameObject.pdfName}`);  //path of pdf
  if (fs.existsSync(pdfPath)) {
    fs.unlinkSync(pdfPath);
  }
}

module.exports = { getState, getCity, getCombosDetails, unlinkProductPdf }