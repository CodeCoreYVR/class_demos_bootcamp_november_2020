const config = {
  development: {
    database: 'chatr_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
    // if  you're getting a permission denied to create database error:
    // add username and password
    // username: '',
    // password: '',
  },
  test: {
    database: 'chatr_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};

if (process.env.DATABASE_URL) {
  const [
    ,
    username,
    password,
    host,
    port,
    database
  ] = process.env.DATABASE_URL
    .match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);

  Object.assign(config, {
    production: {
      username,
      password,
      host,
      port,
      database,
      dialect: 'postgres'
    }
  });
}

module.exports = config;
