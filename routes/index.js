const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.index);

router.get('/success/:username', (req, res) => {
  const { username } = req.params;


  res.render('success', {
    title: 'Payment Successful',
    message: 'Thank you for your payment! Your transaction was completed successfully.',
    details: 'A confirmation email has been sent to your inbox.',
    username: username
  });
});
router.get('/cancel/:username', (req, res) => {
  const { username } = req.params;

  res.render('cancel', {
    title: 'Payment Cancelled',
    message: 'Your payment was not completed.',
    details: 'If you need help, please contact support or try again.',
    username: username
  });
});

module.exports = router;
