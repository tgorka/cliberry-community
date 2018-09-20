/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry-schematics/LICENSE
 */
import 'source-map-support/register';
//import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import {Schema as Options} from './schema';


const collectionPath = path.join(__dirname, '../collection.json');
const schematicName = 'community';

describe(schematicName, () => {
  const schematicRunner = new SchematicTestRunner('schematics', collectionPath);
  const defaultOptions: Options = {
    email: 'test@test.com',
  };

  it('should create all files of a project', () => {
    const options = {...defaultOptions};

    const tree = schematicRunner.runSchematic(schematicName, options);
    const files = tree.files;
    expect(files.indexOf('/CODE_OF_CONDUCT.md')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/CONTRIBUTING.md')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/PULL_REQUEST_TEMPLATE.md')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/.github/bug_report.md')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/.github/custom.md')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/.github/feature_request.md')).toBeGreaterThanOrEqual(0);
  });

});
