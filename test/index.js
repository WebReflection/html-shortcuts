const {qualify, namespace} = require('../cjs');

for (const key in namespace)
  console.log(key, key.length < 7 ? '\t\t' : '\t', qualify(key));
