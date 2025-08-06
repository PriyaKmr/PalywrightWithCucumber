const { Before } = require('@cucumber/cucumber');
require('dotenv').config({ path: `./config/environments/${process.env.ENV || 'dev'}.env` });

Before(() => {
  console.log("Running tests on environment:", process.env.ENV);
});
