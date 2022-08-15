const router = require('express').Router();
const ActivityProvider = require('../activity/Activity.provider');

router.post('/create', async (req, res, next) => {
  try {
    const { type, amount, description } = req.body;
    const activityProvider = new ActivityProvider();
    const results = await activityProvider.createActivity({ type, amount, description });
    res.send(results);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
