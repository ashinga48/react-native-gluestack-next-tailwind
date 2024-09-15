const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require("path");


// Find the project and workspace directories
const projectRoot = __dirname;
// This can be replaced with `find-yarn-workspace-root`
const monorepoRoot = path.resolve(projectRoot, "../..");

const config = getDefaultConfig(projectRoot, {
  isCSSEnabled: true,
});

// 1. Watch all files within the monorepo
config.watchFolders = [monorepoRoot];
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(monorepoRoot, "node_modules"),
];

// config.resolver.extraNodeModules = {
//   // Map the module alias to the actual path
//   '@screens': path.resolve(__dirname, '../../packages/screens'),
// };
config.resolver.disableHierarchicalLookup = true;
  
module.exports = withNativeWind(config, { 
  input: './global.css',
});
  