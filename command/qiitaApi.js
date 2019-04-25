const cron = require('node-cron');

// CRON test
module.exports = () => {
  cron.schedule('* * * * *', () => {
    console.log('running every minute to 1 from 5');
  });
}