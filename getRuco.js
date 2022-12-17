
const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
const config = require("./config");

const file = fs.createWriteStream("Ruco/pris.xls");
const request = http.get(config.rucoUrl, function(response) {
   response.pipe(file);

   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Download Completed");
   });
});