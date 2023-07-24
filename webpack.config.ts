import createExpoWebpackConfigAsync from '@expo/webpack-config/webpack';
import { Arguments, Environment } from '@expo/webpack-config/webpack/types';

// Define the module.exports function. This function will be called by Expo when it builds your app.
module.exports = async function (env: Environment, argv: Arguments) {
  // Call the createExpoWebpackConfigAsync function to get the default Expo webpack config.
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it. 
  return config; 
};
