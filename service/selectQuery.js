
const connection = require('../config/connection');

async function selectQuery(table,columns){
  sql = `select ${columns} as value from ${table} where is_delete =0;`;
  return await connection.execute(sql);
}

async function selectWhere(name,col,value){
  let sql = `select * from ${name} where ${col}=${value}`;
  // let input = [name,col,value]
	return await connection.execute(sql);
}

module.exports = {selectQuery,selectWhere};