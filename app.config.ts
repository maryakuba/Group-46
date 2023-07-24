import { ExpoConfig } from "expo/config";

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: "BMICalculator",
  slug: "BMICalculator",
  extra: {
    eas: {
      projectId: "9b6c9b3e-9467-4ea9-8d3e-7581de077b93",
    },
  },
  owner: "manueldev04",
  updates: {
    url: "https://u.expo.dev/9b6c9b3e-9467-4ea9-8d3e-7581de077b93",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
};

export default config;
