const fs = require("fs");

// Write on log file
const generateLogFile = (content) => {
  try {
    // Write on log file
    fs.writeFileSync(
      "C:/Users/anasm/Documents/Projects/Work/Boot/save_db/log.txt",
      content,
      {
        flag: "a+",
      }
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = { generateLogFile };
