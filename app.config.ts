import 'tsx/cjs';

module.exports = {
    "name": "bug-rn-wallet",
    "slug": "bug-rn-wallet",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "bugrnwallet",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.wcastand.bugrnwallet",
      "infoPlist": {
        "CFBundleAllowMixedLocalizations": true,
        "CFBundleLocalizations": ["fr"]
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true,
      "package": "com.wcastand.bugrnwallet"
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ],
      [
        "@stripe/stripe-react-native",
        {
          "merchantIdentifier": "merchant",
          "enableGooglePay": true
        }
      ],
      ["./android.plugin.ts", { "googleTapAndPaySdkPath": "./libs/tapandpay-v18.3.3.zip" }],
    ],
    "experiments": {
      "typedRoutes": true
    }
}
