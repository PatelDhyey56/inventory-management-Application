const { logError } = require('../../logs');
const logger = require('../../logs.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const connection = require('../../config/connection');
const forgotPassService = async (body) => {
	try {
		const hash = await bcrypt.hash(body.new_pass, saltRounds);
		const sql0 = `update users set expiry=?, status=?,password=? where email=?`;
		const [ans] = await connection.execute(sql0, [new Date(),6, hash, body.email]);
		return ans;

	} catch (error) {
		logger.logError(error);
		throw error;
	}
};
module.exports = { forgotPassService };
