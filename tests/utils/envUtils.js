const users = require('../data/users.json');

function getUserCredentials(env) {
  return users[env] || users['dev'];
}

module.exports = { getUserCredentials };
