import {existsSync, mkdirSync} from "fs";
import {Extract} from "unzipper";
import http from "https";

const destination = "./public/map/tiles",
    url = "https://tile.osm.ch/Zuerich.zip";

if (existsSync(destination)) {
    console.log(`Tiles already exists. Delete ${destination} to re-download.`);
    process.exit(0);
}

http.get(url, (response) =>
    response.pipe(Extract({"path": destination}))
        .on("close", () => console.log('Tiles downloaded and unzipped successfully'))
        .on("error", (err) => console.error('Error downloading or unzipping tiles', err)))
    .on('error', (err) => console.error('Error downloading tiles', err));