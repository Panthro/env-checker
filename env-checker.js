'use strict';
/**
 * Checks for required environment variables
 * Receives an array of variables with the following options
 * {name:'VariableName',
  * required: true|false,
  * default:'Default value when required is false and variable is not set'
  * }
 * @type {function()}
 */
module.exports = ((variables, shouldExit)=> {
    if (!Array.isArray(variables)) {
        throw new Error('An array should be passed');
    }
    const tag = '[Env checker]:';
    let missing = [];

    variables.forEach((variable)=> {
        if (!process.env[variable.name]) {
            console.warn(`${tag} Variable ${variable.name} not defined`);
            if (variable.required) {
                missing.push(variable);
            } else {
                if (variable.default) {
                    console.info(`${tag} Using default value`);
                    process.env[variable.name] = variable.default;
                }
            }
        }
    });
    if (missing.length > 0) {
        console.log(`${tag}: Exiting`);
        if (shouldExit === true) {
            process.exit(1);
        } else {
            throw new Error(`${tag} Missing required environment variables ${missing}`);
        }
    } else {
        console.log(`${tag} Environment is clean and set`);
    }
});