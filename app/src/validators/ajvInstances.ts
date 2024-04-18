const Ajv = require('ajv');
const addFormats = require('ajv-formats');

export const ajv = new Ajv({ allErrors: true });
addFormats(ajv);