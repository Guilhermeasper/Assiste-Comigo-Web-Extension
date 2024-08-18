let injectRetryCount = 0;

async function reloadContentScript(): Promise<void> {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  if (!tab?.id) return;

  try {
    await chrome.tabs.sendMessage(tab.id as number, {});
  } catch (error) {
    console.error('Content script not found. Injecting it again...');
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js'],
    });
    if (injectRetryCount < 3) {
      injectRetryCount++;
      await reloadContentScript();
    } else {
      console.error('Failed to inject content script');
    }
  }
}

export default reloadContentScript;
