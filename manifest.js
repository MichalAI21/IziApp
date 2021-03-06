module.exports = {
  name: 'Izi',
  description: 'A special surprise inside',
  version: '1.0',
  manifest_version: 3,
  permissions: ['storage', 'activeTab', 'scripting'],
  icons: {
    16: 'images/get_started16.png',
    32: 'images/get_started32.png',
    48: 'images/get_started48.png',
    128: 'images/get_started128.png',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      css: [],
      js: ['bundles/content.js'],
      exclude_matches: ['https://docs.google.com/*'],
      run_at: 'document_end',
    },
  ],
  web_accessible_resources: [{ resources: ['*.png'], matches: ['<all_urls>'] }],
};
