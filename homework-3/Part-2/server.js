#!/usr/bin/env node



const http = require('http');
const program = require('commander');
const axios = require('axios');



program
  .version('0.0.1')
  .option(
    '-c, --concurrency <n>',
    'number of parallel requests to perform at a time',
    1
  )
  .option(
    '-r, --requests <n>',
    'number of requests to perform for the benchmarking session',
    2
  )
  .option(
    '-b, --body [type]',
    'if specified, should sent a random generated body with request'
  )
  .option(
    'url',
    'url which should be used for requests',
    'https://nodejs.org/en/'
  );


program.parse(process.argv);
const { concurrency, requests, body, url } = program.opts();
const postTheData = JSON.stringify({
  msg: 'Hello 👽!',
});
const timeArray = [];
async function createRequests() {
  for (let i = 0; i < requests; i++) {
    const begin = Date.now();
    try {
      if (body) {
        await axios.post(url, postTheData);
      } else {
        await axios.get(url);
      }
    } catch (err) {
      timeArray.push(false);
    }
    const end = Date.now();
    timeArray.push(end - begin);
  }
}
createRequests().then(() => {
  failedRequestsIndex = [];
  let add = 0;
  for (let content of timeArray) {
    if (content === false) {
      continue;
    } else {
      add += content;
    }
  }
  
  let av = add / timeArray.length;
  console.log(`bombared ${url}`);
  console.log(`${requests} requests in ${add} minutes!`);
  console.log(
    `${timeArray.length - failedRequestsIndex.length} are successfull!!`
  );
  console.log(`${failedRequestsIndex.length} failed!!`);
  for (let x = 0; x < timeArray.length; x++) {
    if (timeArray[x] === false) {
      console.log(`${x} failed request!` );
    } else {
      console.log(`the request ${x} was for ${timeArray[x]} minutes!`);
    }
  }
  console.log(`the average time was ${av} minutes!`);
});









