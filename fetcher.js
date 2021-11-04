const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const file = process.argv[3];


request(url,(error, response, body) => {
  if (error) {
    console.log(error);
  }
  fs.writeFile(file, url, err => {
  
    if (err) {
      console.error(err);
    }
    //file written successfully
    console.log('Downloaded and saved ' + getFilesizeInBytes(file) + ' bytes to ' + file);
  });
});

function getFilesizeInBytes(file) {
  var stats = fs.statSync(file);
  var fileSizeInBytes = stats.size;
  return fileSizeInBytes;
};

