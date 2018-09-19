/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry-schematics/LICENSE
 */
export interface Schema {
  
  /**
   * Type of the license (mit,private)
   */
  type?: string;
  /**
   * Year to set in the license. Current year by default
   */
  year?: string;
  /**
   * Author in the license. By default taken from the cliberry.json or empty
   */
  author?: string;
  
}
