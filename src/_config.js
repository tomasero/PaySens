var config = {};

// mongo uri
config.mongoURI = {
  //development: "mongodb://localhost/node-stripe-charge",
  development: "mongodb://admin:admin@ds019101.mlab.com:19101/heroku_3p84852t",
  test: "mongodb://localhost/node-stripe-charge-test",
  //test: "mongodb://admin:admin@ds019101.mlab.com:19101/heroku_3p84852t",
  stage: process.env.MONGOLAB_URI
};

module.exports = config;
