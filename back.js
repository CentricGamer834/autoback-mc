const {
    WORLD_PATH,
    BACKUP_PATH,
} = require("./config.json");

const fs = require("fs");

function backupWorld() {
    const timeNow = new Date();
    const dateString =
        timeNow.getMonth() +
        "-" +
        timeNow.getDay() +
        "-" +
        timeNow.getFullYear() +
        " --  " +
        timeNow.getHours() +
        " " +
        timeNow.getMinutes();

    const backedUpDir = BACKUP_PATH + "/" + dateString;

    fs.mkdir(backedUpDir, (err) => {
        if (err) {
            console.error(
                "Error creating folder in backup directory || Error: " + err
            );
        } else {
            console.log("Created folder in backup directory");
        }
    });

    fs.cp(WORLD_PATH, backedUpDir, { recursive: true }, (err) => {
        if (err) {
            console.error(
                "fatal error tryna copy. Please contact centrifag for support :) <3\nerror:\n" +
                    err
            );
        } else {
            console.log(
                "Your faggot ass world has successfuly been schmoppied (ask centric for sloppy toppy) \n@" +
                    BACKUP_PATH +
                    "/" +
                    dateString
            );
        }
    });
}

module.exports = backupWorld;
