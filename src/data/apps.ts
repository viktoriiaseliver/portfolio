// App Store links, one place for the whole site.
// Empty = still with Apple → "In App Store review". Paste the App Store URL once Apple approves → "Download on the App Store".
export const appStore: Record<string, string> = {
  Gamut: '',
  Togo: '',
  Timer: ''
};
export const inReview = (name: string) => !appStore[name];
export const allInReview = Object.keys(appStore).every(inReview);
