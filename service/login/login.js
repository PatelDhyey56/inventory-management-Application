const connection = require('../../config/connection');
const logger = require('../../logs');
const { logError } = require('../../logs');

const userLoginService = async (body) => {
  try {
    const sql0 = `SELECT 
    users.id, email, password, created_at, status, role_id, expiry,storage_id,manager_details.is_delete, users.img_path as \`dp\`
FROM
    users
       LEFT JOIN
    manager_details ON users.id = manager_details.user_id
WHERE
    email =?`;
    const [result] = await connection.execute(sql0, [body.email]);

    return result;
  } catch (error) {
    logger.logError(`Error`, error);
    throw error;
  }
};

const getDp = async (id) => {
  try {
    const sql0 = `SELECT 
        users.img_path as \`dp\`
    FROM
        users
    WHERE
        id =?`;
    const [result] = await connection.execute(sql0, [id]);

    return result;
  } catch (error) {
    logger.logError(`Error`, error);
    throw error;
  }
};

const logsService = async (id) => {
  try {
    const sql1 = `insert into logs(user_id,type_id)
    values (?,?)`;

    const [result1] = await connection.execute(sql1, [id, 12]);
  } catch (error) {
    logger.logError(`Error`, error);
    throw error;
  }
};

const logUnsuccessService = async (id) => {
  try {
    const sql2 = `insert into logs(user_id,type_id)
    values (?,?)`;

    const [result1] = await connection.execute(sql2, [id, 13]);
  } catch (error) {
    logger.logError(`Error`, error);
    throw error;
  }
};

const checkUserService = async (body) => {
  try {
    if (body?.email) {
      const sql4 = `select email,id from users where email=?`;
      const [result4] = await connection.execute(sql4, [body.email]);
      return result4;
    } else {
      const sql4 = `select email from users where unique_code=? and id=?`;
      const [result4] = await connection.execute(sql4, [
        body?.link,
        body?.userId,
      ]);

      await connection.execute(
        `update users set unique_code = NULL where id = ?`,
        [body?.userId]
      );
      return result4;
    }
  } catch (error) {
    logger.logError(`Error`, error);
    throw error;
  }
};
const userService = async (otp, body) => {
  try {
    const sql5 = `update users set unique_code=? where email=?`;
    const [result5] = await connection.execute(sql5, [otp, body.email]);
    return result5;
  } catch (error) {
    logger.logError(`Error`, error);
    throw error;
  }
};

const expireService = async (data) => {
  try {
    const sql6 = `select updated_at from users where unique_code=? and id = ?`;
    const result6 = await connection.execute(sql6, [data.link, data.id]);
    return result6;
  } catch (error) {
    logger.logError(`Error`, error);
    throw error;
  }
};
const checkExpireService = async (otp, id) => {
  try {
    const sql = `update users set unique_code=? where id=?`;
    const [result] = await connection.execute(sql, [otp, id]);
  } catch (error) {
    logger.logError(`Error`, error);
    throw error;
  }
};

module.exports = {
  checkExpireService,
  expireService,
  userService,
  checkUserService,
  userLoginService,
  logsService,
  logUnsuccessService,
  getDp,
};
