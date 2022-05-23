const pino = require('pino');
const logger = pino({
  transport: {
    target: 'pino-pretty'
  },
})

module.exports = {
  database:  {
    addr: 'mongodb://localhost',
    port: '37017',
    name: 'user-mgm'
  },
  port: 3000,
  logger,
};
