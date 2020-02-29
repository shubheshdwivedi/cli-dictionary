#!/usr/bin/env node

require = require('esm')(module);
require('./app/App').default(process.argv);