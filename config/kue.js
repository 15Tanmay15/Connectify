const kue = require('kue');

const queue = kue.createQueue({
    redis: {
        port: 14763,
        host: 'redis-14763.c273.us-east-1-2.ec2.cloud.redislabs.com:14763',
        auth: 'Tanmay@9590' // if provided select a non-default redis db
      }
    }
);

module.exports = queue;