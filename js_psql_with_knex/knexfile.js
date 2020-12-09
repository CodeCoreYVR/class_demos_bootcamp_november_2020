// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_demo',
      // if you're on linux/ubuntu you need to provide the username and password
      username: 'your_username',
      password: '' // if you don't know your password it can be reset
      // Follow these steps to reset your password:
      // 1) in terminal connect to postgresl using psql
      // 2) inside of psql use the command \password
      // 3) enter your new password
    },
    // configuration options to tell knex where our migration files live
    migrations: {
      tableName: 'migrations',
      directory: 'db'
    },
    seeds: {
      directory: 'seeds'
    }
  }

};
