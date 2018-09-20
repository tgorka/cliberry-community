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
    const licenseFile = tree.get('/LICENSE.md');
    expect(licenseFile).not.toBeNull();
    if (licenseFile !== null) {
      expect(licenseFile.content.toString()).toBe(LICENSE_TEST);
    }
  });

  it('should create private license', () => {
    const options = {...defaultOptions};
    options.type = 'Private';

    const tree = schematicRunner.runSchematic(schematicName, options);
    const files = tree.files;
    expect(files.indexOf('/LICENSE.md')).toBeLessThan(0);
  });

});

const LICENSE_TEST = `MIT License

Copyright (c) 2018 John-test Doe-test, Marc-test Dupond-test, Magic Company LTD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
