/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry-schematics/LICENSE
 */
export interface Schema {
  
  /**
   * Name of the package/project
   */
  name: string;
  
  /**
   * Description of the project. Empty by default.
   */
  description: string;
  
  /**
   * Do NOT generate changelog. By default false
   */
  changelog: string;
  
  /**
   * Url of the repository. By default empty.
   */
  repositoryUrl: string;
  
  /**
   * Name of the company/user for the repository/services. By default empty.
   */
  company: string;
  
}
