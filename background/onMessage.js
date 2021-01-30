chrome.runtime.onMessage.addListener(onMessage);

async function init(request, response) {
    console.log("Initializing content module");
    const newdata = {
        extensionId: chrome.runtime.id,
    };
    const newRequest = { ...request, ...newdata };
    let result = await tabSendMessage(newRequest);
    response(result);
}

async function getInfo(request, response) {
    console.log("Get to the getInfo function");
    const userId = await getFromSyncStorage("userId");
    const sessionId = await getFromSyncStorage("sessionId");
    const sessionUrl = await getFromSyncStorage("sessionUrl");
    const extensionId = chrome.runtime.id;
    const newdata = {
        userId: userId,
        sessionId: sessionId,
        extensionId: extensionId,
        sessionUrl: sessionUrl,
    };
    const newRequest = { ...request, ...newdata };
    let result = await tabSendMessage(newRequest);
    response(result);
}

async function finishCreate(request, response) {
    let userId = await getFromSyncStorage("userId");
    let sessionId = await getFromSyncStorage("sessionId");
    const newdata = {
        userId: userId,
        extensionId: chrome.runtime.id,
        sessionId: sessionId,
    };
    const newRequest = { ...request, ...newdata };
    let result = await tabSendMessage(newRequest);
    response(result);
}

async function startConnect(request, response) {
    let userId = await getFromSyncStorage("userId");
    const newdata = {
        userId: userId,
        extensionId: chrome.runtime.id,
    };
    const newRequest = { ...request, ...newdata };
    let result = await tabSendMessage(newRequest);
    response(result);
}

async function finishConnect(request, response) {
    let userId = await getFromSyncStorage("userId");
    const newdata = {
        userId: userId,
        extensionId: chrome.runtime.id,
    };
    const newRequest = { ...request, ...newdata };
    let result = await tabSendMessage(newRequest);
    response(result);
}

async function disconnect(request, response) {
    let userId = await getFromSyncStorage("userId");
    const newdata = {
        userId: userId,
        extensionId: chrome.runtime.id,
    };
    const newRequest = { ...request, ...newdata };
    let result = await tabSendMessage(newRequest);
    response(result);
}

function onMessage(request, sender, response) {
    const type = request.type;
    const typeOptions = {
        init: init.bind(this, request, response),
        getInfo: getInfo.bind(this, request, response),
        finishCreate: finishCreate.bind(this, request, response),
        startConnect: startConnect.bind(this, request, response),
        finishConnect: finishConnect.bind(this, request, response),
        disconnect: disconnect.bind(this, request, response),
    };
    typeOptions[type]();
    return true;
}
