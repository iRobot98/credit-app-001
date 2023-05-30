
const fs = require("fs");
const path = require("path");

const express = require("express");
const { RequestLog } = require("./Logger");
const router = express.Router();

// router.all("*", (req, res) => res.send({ response: "hello world" }));
router.all("/*", (req, res, callNext) => {
  const { originalUrl, method, ip } = req;
 
  res.on("close", () => {
    const {statusCode} = res
    const tmp = `${statusCode} ${method} ${ip} ${originalUrl}`
    // console.log(tmp)
    
    RequestLog(tmp);
  });

  callNext();
});

module.exports = router