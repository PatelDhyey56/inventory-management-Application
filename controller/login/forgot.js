const { logError } = require('../../logs');
const logger = require('../../logs');
const { forgotPassService } = require('../../service/login/forgot');
const { checkUserService } = require('../../service/login/login');
const getForgot = async (req, res) => {
  res.render('login/forgot');
};

const forgotPass = async (req, res) => {
  try {
    const link = req?.params?.link;
    const userId = req?.params?.id;
    const result4 = await checkUserService({ ...req.body, link, userId });
    if (result4.length > 0) {
      const result = await forgotPassService({
        ...req.body,
        email: result4[0].email,
      });
      if (!result == 0) {
        res.status(200).send('You are successfully registerd');
      }
    } else if (result4.length === 0) {
      const error = 'user not valid';
      res.status(404).send('User not valid');
    }
  } catch (error) {
    logger.logError(error);
    res.status(500).json({ message: 'can`t fetch user controller' });
  }
};

module.exports = { getForgot, forgotPass };
