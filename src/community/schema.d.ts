/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry-schematics/LICENSE
 */
export interface Schema {
  
  /**
   * Do generate code of conduct. By default true.
   */
  code-of-conduct: string;
  
  /**
   * Con
tact email for code of conduct. Empty by default.
   */
  email: string;
  
  /**
   * Do generate contributing. By default true.
   */
  contributing: string;
  
  /**
   * Do generate pull request template. By default tru
e
   */
  pull-request: string;
  
  /**
   * Do generate bug report template. By default true.
   */
  bug-report: string;
  
  /**
   * Do generate feature request. By default true
   */
  feature-request: string;
  
  /**
   * Do generate custm t
emplate. By default true
   */
  custom: string;
  
}
