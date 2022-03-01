const { saveDb } = require("./saveDb");
const { generateLogFile } = require("./generateLogFile");

// Save DB every 24hour
const saveEveryDay = () => {
  let oneDay = 24 * 60 * 60; // 24 hours in seconds
  let buckupDate = new Date(); // Date of backup

  saveDb(); // Save backup

  // Run the save function after one day
  setInterval(async () => {
    // Save backup
    saveDb();
    // Fill log content
    let logContent = `Mediexperts DB backup is done on: ${buckupDate.toUTCString()}, \n`;
    // Generate the log file
    generateLogFile(logContent);
  }, oneDay);
};

module.exports = { saveEveryDay };
