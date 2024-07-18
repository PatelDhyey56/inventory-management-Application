const connection = require('../../config/connection');
const logError = require('../../logs.js').logError;

async function getAllNotifications() {
  try {
    const [results] = await connection.execute(
      `
      SELECT 
          \`logs\`.*,
          pm.product_name,
          pm.id as product_id,
          ss.id as storage_id,
          ss.\`name\` as storage_name
      FROM
          \`logs\`
              INNER JOIN
          product_master AS pm ON SUBSTR(\`logs\`.\`description\` FROM 1 FOR INSTR(\`logs\`.\`description\`, '-') - 1) = pm.id
          INNER JOIN
        storage_space_master AS ss ON SUBSTR(\`logs\`.\`description\`, INSTR(\`logs\`.\`description\`, '-') + 1) = ss.id
      WHERE
          notify = 1
      ORDER BY created_at DESC
      `
    );
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

async function getUnseenNotifications() {
  try {
    const [results] = await connection.execute(
      'SELECT * FROM logs WHERE notify = 1 AND seen = 0'
    );
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

async function readNotifications() {
  try {
    const [results] = await connection.execute(
      'UPDATE logs SET seen = 1 WHERE notify = 1 AND seen = 0'
    );
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

module.exports = {
  getAllNotifications,
  getUnseenNotifications,
  readNotifications,
};
