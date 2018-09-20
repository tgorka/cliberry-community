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
}
