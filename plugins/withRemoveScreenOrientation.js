const { withAndroidManifest } = require("@expo/config-plugins");

function removeScreenOrientationFromActivity(app, activityName) {
  const mainApp = app?.manifest?.application?.[0];
  if (!mainApp?.activity) return;

  for (const a of mainApp.activity) {
    const name = a?.$?.["android:name"];
    if (name !== activityName) continue;

    if (a.$["android:screenOrientation"]) {
      delete a.$["android:screenOrientation"];
    }
  }
}

module.exports = function withRemoveScreenOrientation(config) {
  return withAndroidManifest(config, (config) => {
    const app = config.modResults;

    // Your app main activity
    removeScreenOrientationFromActivity(app, ".MainActivity");
    removeScreenOrientationFromActivity(app, "com.aurelian2025.discipol.MainActivity");

    // ML Kit Code Scanner activity flagged by Play Console
    removeScreenOrientationFromActivity(
      app,
      "com.google.mlkit.vision.codescanner.internal.GmsBarcodeScanningDelegateActivity"
    );

    return config;
  });
};
