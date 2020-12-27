import isMobileBrowser from "is-mobile";

export default function isMobile(): boolean {
  // Returns true if browser is mobile or tablet, false otherwise.
  // Note: featureDetect is necessary to detect iPads running
  // Safari on iOS 13+ (I know, random)
  return isMobileBrowser({ tablet: true, featureDetect: true });
}
