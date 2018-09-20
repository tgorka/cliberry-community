/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry-schematics/LICENSE
 */
import 'source-map-support/register';
import {strings} from '@angular-devkit/core';
import {
  Rule,
  //Tree,
  //SchematicContext
  apply,
  mergeWith,
  template,
  url,
  //chain,
} from '@angular-devkit/schematics';
import {dasherize, classify, camelize} from '@angular-devkit/core/src/utils/strings';
import {Schema as Options} from './schema';
import * as path from "path";


const stringUtils = {dasherize, classify, camelize};

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function community(options: Options): Rule {
  options.bugReport = (options.bugReport !== false) ? true : false;
  options.codeOfConduct = (options.codeOfConduct !== false) ? true : false;
  options.contributing = (options.contributing !== false) ? true : false;
  options.custom = (options.custom !== false) ? true : false;
  options.featureRequest = (options.featureRequest !== false) ? true : false;
  options.pullRequest = (options.pullRequest !== false) ? true : false;
  options.repositoryUrl = options.repositoryUrl || "";
  options.email = options.email || "";
  /*return (tree: Tree, _context: SchematicContext): Rule => {
    return tree;
    // return chain[example({name: options.name})]
  };*/
  return mergeWith(apply(url('file://'+path.join(__dirname, `./files`)), [
    template({
      utils: strings,
      ...stringUtils,
      ...options,
      'dot': '.',
      //latestVersions,
    }),
  ]));
}
