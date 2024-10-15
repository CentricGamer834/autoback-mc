const fs = require("fs");
const { UPDATE_URL } = require("./config.json");

async function startUpdater() {
    console.log("Updating AutoBackMC...");
    let status = true;

    const response = await fetch(UPDATE_URL);
    if (!response.ok) {
        status = false;
        return console.error(
            `Could not contact update server!\nError: ${response.statusText}`
        );
    }

    const upData = await response.text();

    fs.writeFile("./back.js", String(upData), {}, (err) => {
        if (err) {
            status = false;
            return console.error(
                "Writing the update to disk failed!\nError: " + err
            );
        }
    });

    if (status === true) {
        console.log("Update successful! Enjoy!");
    } else {
        console.error(
            `[UPDATE.FAIL] Update failed! Please try to re-run the script or download the latest release from our GitHub(, or contact the owner)!\n----------- You could be using an older version of autoback-mc, please download the latest release ------`
        );
    }

    return await new Promise((resolve) => setTimeout(resolve, 1000));
}

module.exports = startUpdater;
