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
  codeOfConduct?: boolean;

  /**
   * Contact email for code of conduct. Empty by default.
   */
  email?: string;

  /**
   * Repository url to be included in code of conduct and pull request template. Empty by default.
   */
  repositoryUrl?: string;

  /**
   * Do generate contributing. By default true.
   */
  contributing?: boolean;

  /**
   * Do generate pull request template. By default true
   */
  pullRequest?: boolean;

  /**
   * Do generate bug report template. By default true.
   */
  bugReport?: boolean;

  /**
   * Do generate feature request. By default true
   */
  featureRequest?: boolean;

  /**
   * Do generate custm template. By default true
   */
  custom?: boolean;

}
