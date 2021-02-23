const fs = require('fs')
module.exports = {
  devServer: {
    overlay: false,
    https: true,
    https: {
      key: fs.readFileSync('./path/private.key'),
      cert: fs.readFileSync('./path/private.crt'),
      ca: fs.readFileSync('./path/rootCA.pem'),
    }
  },
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'default',
      overrideEndpoint: true,
      endpoint: 'index.html',
      region: 'ap-northeast-2',
      bucket: 'cincout',
      createBucket: true,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: false,
      pluginVersion: '4.0.0-rc3',
      uploadConcurrency: 5
    }
  }
};
