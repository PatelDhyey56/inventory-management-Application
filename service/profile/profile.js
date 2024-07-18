const connection = require('../../config/connection.js');
const logger = require('../../logs.js');

async function viewProfileQuery(id) {
  try {
    const getUser = `
    select
    firstname,
    lastname,
    dob,
    email,
    option_master.value as role,
    img_path
  from
    users
      inner join
    option_master
      on
    users.role_id = option_master.id
  where
    users.id = ?;

    `;
    const [result] = await connection.execute(getUser, [id]);
    return [result];
  } catch (error) {
    logger.logError(error);
    return [];
  }
}

async function updateProfileQuery(data) {
  try {
    const updateUser = `
      update
        users
      set
        firstname = ?,
        lastname = ?,
        dob = ?
        ${data?.filename ? `,img_path = '${data.filename}'` : ''}
      where
        id = ?
    `;
    const [result] = await connection.execute(updateUser, [
      data.firstname,
      data.lastname,
      data.dob,
      data.id,
    ]);
    return result;
  } catch (error) {
    logger.logError(error);
    return [];
  }
}

module.exports = { viewProfileQuery, updateProfileQuery };
