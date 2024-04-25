const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

// Store something
// TODO - will fail due to bucket name being wrong
const save = async (favNumber) => {
  console.log("saving");
  await s3
    .putObject({
      Body: JSON.stringify(favNumber, null, 2),
      Bucket: "cyclic-amused-bikini-bee-eu-north-1",
      Key: "number.json"
    })
    .promise();
};

module.exports = { save };
