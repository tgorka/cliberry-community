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
  url, filter,
  //chain,
} from '@angular-devkit/schematics';
import {dasherize, classify, camelize} from '@angular-devkit/core/src/utils/strings';
import {Schema as Options} from './schema';
import * as path from "path";


const stringUtils = {dasherize, classify, camelize};

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function readme(options: Options): Rule {
  options.changelog = (options.changelog) ? true : false;
  return mergeWith(apply(url('file://' + path.join(__dirname, `./files`)), [
    filter(path => !(path.endsWith('CHANGELOG.md') && options.changelog)),
    template({
      utils: strings,
      ...stringUtils,
      ...options,
      'date': new Date(),
      'dot': '.',
      //latestVersions,
    }),
  ]));
}
