/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry-schematics/LICENSE
 */
import 'source-map-support/register';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import {Schema as Options} from './schema';


const collectionPath = path.join(__dirname, '../collection.json');
const schematicName = 'license';

describe(schematicName, () => {
  const schematicRunner = new SchematicTestRunner('schematics', collectionPath);
  const defaultOptions: Options = {
    author: 'John-test Doe-test, Marc-test Dupond-test, Magic Company LTD',
    year: '2018',
  };

  it('should throw unknown license', () => {
    const options = {...defaultOptions};
    options.type = 'non-existing';
    try {
      schematicRunner.runSchematic(schematicName, options);
      expect(1).toBe(0, 'Unknown license error should be raised.');
    } catch (e) {
      expect(e.message).toBe('Unknown license: non-existing')
    }
  });

  it('should create mit license', () => {
    const options = {...defaultOptions};
    options.type = 'MIT';

    const tree = schematicRunner.runSchematic(schematicName, options);
    const files = tree.files;
    expect(files.indexOf('/LICENSE.md')).toBeGreaterThanOrEqual(0);
  });

  it('should create private license', () => {
    const options = {...defaultOptions};
    options.type = 'Private';

    const tree = schematicRunner.runSchematic(schematicName, options);
    const files = tree.files;
    expect(files.indexOf('/LICENSE.md')).toBeLessThan(0);
  });

});
