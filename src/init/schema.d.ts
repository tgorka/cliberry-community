export interface Schema {
  /**
   * The name of the project.
   */
  name: string;
  /**
   * Short description of the project.
   */
  description: string;
  /**
   * Type of the license (mit,private)
   */
  license?: string;
  /**
   * Year to set in the license. Current year by default
   */
  year?: number;
  /**
   * Author in the license. By default taken from the cliberry.json or empty
   */
  author?: string;
  /**
   * Contact email for code of conduct. Empty by default.
   */
  email?: string;

  /**
   * Repository url to be included in code of conduct and pull request template. Empty by default.
   */
  repositoryUrl?: string;
}
