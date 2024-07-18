const connection = require('../../config/connection.js');
const logger = require('../../logs.js');

//async function always return promise
async function getStateQuery() {
  try {
    const getStateQuery = `SELECT * FROM state_master;`

    //array destructuring
    /**If does not want to write [result] then in this return result[0]
     * because in this response we get array that have two nested array element
     * first one is data
     * second one is schema of that table 
     */

    const [result] = await connection.execute(getStateQuery);
    // logger.info(result);
    return result;
  } catch (error) {
    logger.logError("Get State: " + error);
    throw error;
    // return [];
  }
}


async function getCityQuery(stateName) {
  try {
    const getStateQuery = `SELECT * FROM city_master as c 
    LEFT JOIN state_master as s ON c.state_id=s.state_id 
    WHERE state_name=?`;

    const [result] = await connection.execute(getStateQuery, [stateName]);
    return result;
  } catch (error) {
    logger.logError("Get City: " + error);
    throw error;
    // return [];
  }
}

async function getCityStateId(stateName, cityName) {
  try {
    const getCityStateIdQuery = `SELECT s.state_id as state_id,c.city_id as city_id FROM state_master as s
    LEFT JOIN city_master as c ON s.state_id = c.state_id
    WHERE s.state_name=? AND c.city_name=?`;

    const [result] = await connection.execute(getCityStateIdQuery, [stateName, cityName]);
    // logger.info(result);
    return result;
  } catch (error) {
    logger.logError("Get State and City Id: " + error);
    throw error;  //rethrow
    // return [];
  }
}

async function getAllCityState() {
  try {
    const getAllCityStateIdQuery = `SELECT s.state_id as state_id,s.state_name as state_name,c.city_id as city_id, c.city_name as city_name FROM state_master as s
    LEFT JOIN city_master as c ON s.state_id = c.state_id`;

    const [result] = await connection.execute(getAllCityStateIdQuery);
    // logger.info(result);
    return result;
  } catch (error) {
    logger.logError("Get All State and City: " + error);
    throw error;  //rethrow
    // return [];
  }
}

module.exports = { getStateQuery, getCityQuery, getCityStateId, getAllCityState }