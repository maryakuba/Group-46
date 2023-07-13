import { ExpoConfig } from "expo/config";

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: "BMICalculator",
  slug: "BMICalculator",
  extra: {
    eas: {
      projectId: "50c63429-c96f-4caa-8c06-e93d5aca06b8",
    },
  },
  owner: "manueldev04",
  updates: {
    url: "https://u.expo.dev/50c63429-c96f-4caa-8c06-e93d5aca06b8",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
};

export default config;
