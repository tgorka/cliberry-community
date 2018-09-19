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
  Tree,
  SchematicContext,
  apply,
  mergeWith,
  template,
  url,
  SchematicsException,
} from '@angular-devkit/schematics';
import {dasherize, classify, camelize} from '@angular-devkit/core/src/utils/strings';
import {Schema as Options} from './schema';
import * as fs from "fs";
import * as path from "path";


const stringUtils = {dasherize, classify, camelize};

const getAuthor = (): string => {
  return '';
};

const getType = (): string => {
  return 'mit';
};

const removeExistingLicense = (tree: Tree): void => {
  if (tree.exists('/LICENSE')) tree.delete('/LICENSE');
  if (tree.exists('/LICENSE.txt')) tree.delete('/LICENSE.txt');
  if (tree.exists('/LICENSE.md')) tree.delete('/LICENSE.md');
};

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function license(options: Options): Rule {
  options.type = (options.type || getType()).toLocaleLowerCase();
  options.year = options.year || new Date().getFullYear().toString();
  options.author = options.author || getAuthor();

  return (tree: Tree, _context: SchematicContext): Rule | Tree => {
    removeExistingLicense(tree);
    if (options.type === 'private') {
      return tree;
    }
    if (!fs.existsSync(path.join(__dirname, `./files/${options.type}/LICENSE.md`))) {
      throw new SchematicsException(`Unknown license: ${options.type}`);
    }
    return mergeWith(apply(url(`./files/${options.type}`), [
      template({
        utils: strings,
        ...stringUtils,
        ...options,
        'dot': '.',
        //latestVersions,
      }),
    ]));
  };
}
