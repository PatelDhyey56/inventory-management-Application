const connection = require('../config/connection');
const logError = require('../logs.js').logError;

async function getCombos(name) {
  try {
    const [results] = await connection.execute(
      `
        SELECT
            s.id, o.id as opt_id, o.value ,o.is_delete
        FROM
            select_master AS s
                INNER JOIN
            option_master AS o ON s.id = o.select_id
        WHERE
            s.key LIKE ? AND o.is_delete = 0
    `,
      [name]
    );
    // console.log(results);
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

module.exports = { getCombos };
