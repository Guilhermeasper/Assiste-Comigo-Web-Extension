import {
    setUserId,
    clearInfo,
} from "./../utils/utils.js";

chrome.runtime.onInstalled.addListener(onInstalled);

/** Fired when the extension is installed
 * @param {string} details - Details of installation
 */
function onInstalled(details) {
    clearInfo();
    let tmpSocket = io.connect("http://192.168.0.18:80", {
        transports: ["websocket"],
    });
    tmpSocket.on("newId", (data) => {
        console.log(`The user created by server is ${data.newId}`);
        setUserId(data.newId);
        tmpSocket.disconnect();
    });
    tmpSocket.emit("getId", {});
}