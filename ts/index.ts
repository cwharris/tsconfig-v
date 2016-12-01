#! /usr/bin/env node
import * as minimist from "minimist";
import * as path from "path";
import * as shelljs from "shelljs";

const args = minimist(process.argv.slice(2));

const tsConfigVersionArgument: string = args["-v"] || "default";
const tsConfigVersion = tsConfigVersionArgument.replace(/\W/g, '');

shelljs.config.fatal = true;

const pwd = shelljs.pwd().toString();

const tsConfigFile = path.join(__dirname, `../tsconfig-versions/${tsConfigVersion}/tsconfig.json`);
const dest = path.join(pwd, "tsconfig.json");

if (!shelljs.test("-f", tsConfigFile)) {
    throw new Error(`Invalid tsconfig version: ${tsConfigVersion}`);    
}

shelljs.cp(tsConfigFile, dest);
