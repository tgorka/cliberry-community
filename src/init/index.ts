import 'source-map-support/register';
import {
  Rule,
  chain,
  Tree,
  SchematicContext
} from '@angular-devkit/schematics';
import {Schema as Options} from './schema';
import {license} from "../license/index";
import {community} from "../community/index";
import {readme} from "../readme/index";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function init(options: Options): Rule {
  return (tree: Tree, context: SchematicContext) => {
    return chain([
      license({type: options.license, author: options.author, year: options.year}),
      community({email: options.email, repositoryUrl: options.repositoryUrl}),
      readme({author: options.author, repositoryUrl: options.repositoryUrl, description: options.description, name: options.name}),
    ])(tree, context);
  }
}
