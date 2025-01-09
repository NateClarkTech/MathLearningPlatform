const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'math-learning-platform',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

