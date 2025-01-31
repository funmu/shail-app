 // app.config.js - add EXPO and Clerk keys
export default {
    expo: {
      // ... other config options ...
      name: "Shail",
      scheme: "shail", // Add this line
      "slug": "shail",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/images/fishbowl.icon.png",
      "userInterfaceStyle": "automatic",
      "newArchEnabled": true,
      "splash": {
        "image": "./assets/images/splash.png",
        "resizeMode": "cover",
        "backgroundColor": "#000000"
      },
      "assetBundlePatterns": ["**/*"],

      web: {
        bundler: "metro"
      },

      extra: {
        clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
      },

      ios: {
        "supportsTablet": false,
        "bundleIdentifier": "com.shail.app",
        "config": {
          "usesNonExemptEncryption": false
        },
      }
    }  
  };

  
  