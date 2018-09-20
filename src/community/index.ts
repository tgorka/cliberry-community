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
  url, filter, Tree, SchematicContext,
  //chain,
} from '@angular-devkit/schematics';
import {dasherize, classify, camelize} from '@angular-devkit/core/src/utils/strings';
import {Schema as Options} from './schema';
import * as path from "path";


const stringUtils = {dasherize, classify, camelize};

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function community(options: Options): Rule {
  options.bugReport = (options.bugReport) ? true : false;
  options.codeOfConduct = (options.codeOfConduct) ? true : false;
  options.contributing = (options.contributing) ? true : false;
  options.custom = (options.custom) ? true : false;
  options.featureRequest = (options.featureRequest) ? true : false;
  options.pullRequest = (options.pullRequest) ? true : false;
  options.repositoryUrl = options.repositoryUrl || "";
  options.email = options.email || "";
  console.log(`Creating community files of ${JSON.stringify(options)}`);

  return (tree: Tree, _context: SchematicContext): Rule | Tree => {
    if (tree.exists('/CONTRIBUTING.md') && options.contributing) tree.delete('/CONTRIBUTING.md');
    if (tree.exists('/CODE_OF_CONDUCT.md') && options.codeOfConduct) tree.delete('/CODE_OF_CONDUCT.md');
    if (tree.exists('/PULL_REQUEST_TEMPLATE.md') && options.pullRequest) tree.delete('/PULL_REQUEST_TEMPLATE.md');
    if (tree.exists('/.github/bug_report.md') && options.bugReport) tree.delete('/.github/bug_report.md');
    if (tree.exists('/.github/custom.md') && options.custom) tree.delete('/.github/custom.md');
    if (tree.exists('/.github/feature_request.md') && options.featureRequest) tree.delete('/.github/feature_request.md');

    return mergeWith(apply(url('file://' + path.join(__dirname, `./files`)), [
      filter(path => !(path.endsWith('CONTRIBUTING.md') && options.contributing)),
      filter(path => !(path.endsWith('CODE_OF_CONDUCT.md') && options.codeOfConduct)),
      filter(path => !(path.endsWith('PULL_REQUEST_TEMPLATE.md') && options.pullRequest)),
      filter(path => !(path.endsWith('bug_report.md') && options.bugReport)),
      filter(path => !(path.endsWith('custom.md') && options.custom)),
      filter(path => !(path.endsWith('feature_request.md') && options.featureRequest)),
      template({
        utils: strings,
        ...stringUtils,
        ...options,
        'dot': '.',
        //latestVersions,
      }),
    ]));
  }
}
