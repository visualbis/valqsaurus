const fs = require("fs");
fs.writeFileSync("./static/CNAME", "staging.docs.valq.com");
console.log("cname removed")