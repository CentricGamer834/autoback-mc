const {
    WORLD_PATH,
    BACKUP_PATH,
    BACKUP_INTERVAL_MINUTES,
} = require("./config.json");
const fs = require("fs");

function backupWorld() {
    const date = new Date();
    const timestamp =
        date.getMonth() +
        "_" +
        date.getDay() +
        "_" +
        date.getFullYear().toString().slice(-2) +
        "@" +
        date.getHours() +
        "_0" +
        date.getMinutes();

    const createdBackup = BACKUP_PATH + "/" + timestamp;

    fs.mkdir(createdBackup, (err) => {
        if (err)
            return console.error(
                `[BACKUP.FAIL] FAILED TO CREATE BACKUP FOLDER!\n${err}`
            );
    });

    fs.cp(WORLD_PATH, createdBackup, { recursive: true }, (err) => {
        if (err) {
            return console.error(
                `[BACKUP.FAIL] FAILED TO COPY FILES TO BACKUP FOLDER\n${err}`
            );
        }

        console.log(`[BACKUP.SUCCESS] Backed Up: file:///${createdBackup}`);
    });
}

function startBackup() {
    setInterval(backupWorld, BACKUP_INTERVAL_MINUTES * 60000);
}

module.exports = startBackup;
