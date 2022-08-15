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

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const foundUser = await UserProvider.CheckUser(email);
    if (foundUser === 'User not found') return res.status(400).send({ message: foundUser });
    const passwordMatchs = await bcrypt.compare(password, foundUser.password);
    if (!passwordMatchs) {
      return res.status(400).send({ message: 'Password do not match' });
    }
    res.send({ user: foundUser });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
