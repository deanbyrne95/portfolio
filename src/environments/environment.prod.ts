import { version, dependencies, devDependencies } from '../../package.json';
export const environment = {
  production: true,
  appVersion: version,
  devDependency: devDependencies,
  dependency: dependencies
};
