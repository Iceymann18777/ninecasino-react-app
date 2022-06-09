module.exports = function apg(args) {
  const fs = require('fs');
  const ApiCtor = require('../apg-api/api');
  const getConfig = require('./command-line');
  const thisFileName = 'apg.js: ';
  const util = require('util');
  function logErrors(api, header) {
    console.log('\nORIGINAL GRAMMAR:');
    console.log(api.linesToAscii());
    console.log(`\n${header}:`);
    console.log(api.errorsToAscii());
  }
  try {
    /* Get command line parameters and set up the configuration accordingly. */
    const config = getConfig(args);
    if (config.error) {
      console.log(config.error);
      console.log(config.help);
      return;
    }
    if (config.help) {
      console.log(config.help);
      return;
    }
    if (config.version) {
      console.log(config.version);
      return;
    }

    /* Get and validate the input SABNF grammar. */
    const api = new ApiCtor(config.src);

    api.scan(config.strict);
    if (api.errors.length) {
      logErrors(api, 'GRAMMAR CHARACTER ERRORS');
      throw new Error(`${thisFileName}invalid input grammar`);
    }

    /* parse the grammar - the syntax phase */
    api.parse(config.strict);
    if (api.errors.length) {
      logErrors(api, 'GRAMMAR SYNTAX ERRORS');
      throw new Error(`${thisFileName}grammar has syntax errors`);
    }

    /* translate the AST - the semantic phase */
    api.translate();
    if (api.errors.length) {
      logErrors(api, 'GRAMMAR SEMANTIC ERRORS');
      throw new Error(`${thisFileName}grammar has semantic errors`);
    }

    if (config.displayRules) {
      console.log(api.displayRules('alpha'));
      console.log();
    }

    /* attribute generation */
    const errorCount = api.attributes();
    if (errorCount > 0) {
      console.log('GRAMMAR ATTRIBUTE ERRORS');
      console.log(api.displayAttributeErrors());
      console.log();
      if (config.displayAttributes) {
        console.log(api.displayAttributes('type'));
        console.log();
      }
      throw new Error(`${thisFileName}grammar has attribute errors`);
    }
    if (config.displayRuleDependencies) {
      console.log(api.displayRuleDependencies('type'));
      console.log();
    }
    if (config.displayAttributes) {
      console.log(api.displayAttributes('type'));
      console.log();
    }

    /* generate a JavaScript parser, if requested */
    if (config.outfd) {
      fs.writeSync(config.outfd, api.toSource(config.funcName));
      console.log(`\nJavaScript parser generated: ${config.outFilename}`);
    }
  } catch (e) {
    let msg = 'EXCEPTION THROWN: ';
    if (e instanceof Error) {
      msg += `${e.name}: ${e.message}`;
    } else if (typeof e === 'string') {
      msg += e;
    } else {
      msg += '\n';
      msg += util.inspect(e, {
        showHidden: true,
        depth: null,
        colors: true,
      });
    }
    console.log(msg);
  }
};
