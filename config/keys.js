//Figure out what set of cred's we need to return.

if(process.env.NODE_ENV === 'production'){
    //return PROD set of keys
    module.exports = require('./prod');
} else{
    //we are in DEV - return DEV keys.
  module.exports =  require('./dev');
} 