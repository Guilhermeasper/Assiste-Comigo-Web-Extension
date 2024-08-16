export class SessionStorage {
  public static async set(key: string, value: any): Promise<void> {
    await chrome.storage.session.set({ [key]: JSON.stringify(value) });
  }

  public static async get<T>(key: string): Promise<T | null> {
    const value = await chrome.storage.session.get(key);
    console.log(value);
    if (!value) return null;
    try {
      return JSON.parse(value[key]);
    } catch (error) {
      return null;
    }
  }

  public static async remove(key: string): Promise<void> {
    await chrome.storage.session.remove(key);
  }

  public static async clear(): Promise<void> {
    await chrome.storage.session.clear();
  }
}
