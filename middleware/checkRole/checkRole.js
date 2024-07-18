const logger = require('../../logs.js');

function checkRole(req, res, next) {
  const roleId = req.user.roleId;
  // console.log(roleId);

  if (roleId === 4) {
    next();
  } else {
    res.redirect('/dashboard');
  }
}

module.exports = { checkRole }