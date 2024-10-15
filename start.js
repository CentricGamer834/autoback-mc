const startUpdates = require("./update.js");

async function startAutoBackMC() {
    await startUpdates();

    const startBackup = require("./back.js");
    startBackup();
}

startAutoBackMC();
