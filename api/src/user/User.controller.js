const router = require('express').Router();
const UserProvider = require('./User.provider');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res, next) => {
  try {
    const { username, email } = req.body;
    let { password } = req.body;
    password = await bcrypt.hash(password, 10);
    const createdUser = await UserProvider.CreateUser({ password, username, email });
    res.send(createdUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
