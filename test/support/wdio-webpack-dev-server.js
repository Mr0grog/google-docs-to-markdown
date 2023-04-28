import { SevereServiceError } from 'webdriverio';
import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../../webpack.config.cjs';

/**
 * Run the Webpack Dev Server as a service for Webdriver.io. There's actually
 * an NPM package for this (`wdio-webpack-dev-server-service`), but it's not
 * maintained and no longer works with current versions of Webpack/Webdriver.io.
 */
export default class WebpackDevServerService {
  static getWebpackConfig () {
    return webpackConfig;
  }

  static getServerUrl (config = null) {
    const devServer = (config || this.getWebpackConfig())?.devServer;
    
    const serverType = devServer?.server?.type || devServer?.server || 'http';
    const protocol = (serverType === 'https' || serverType === 'spdy')
      ? 'https'
      : 'http';
    const host = devServer?.host || 'localhost';
    const port = devServer?.port || 9000;
    return `${protocol}://${host}:${port}`;
  }

  constructor (_options, _capabilities, _runnerConfig) {
    this.server = null;
  }

  // If a hook returns a promise, WebdriverIO will wait until that promise is resolved to continue.
  async onPrepare(_config, _capabilities) {
    console.log('Starting dev server...');

    const config = WebpackDevServerService.getWebpackConfig();
    const compiler = Webpack(config);
    const devServerOptions = { ...config.devServer };
    this.server = new WebpackDevServer(devServerOptions, compiler);

    try {
      await this.server.start();
    } catch (error) {
      throw new SevereServiceError(`Could not start dev server: ${error}`);
    }
  }

  async onComplete(_exitCode, _config, _capabilities) {
    if (this.server) {
      await this.server.stop();
    }
    else {
      console.warn('A dev server was never started!');
    }
  }
}
