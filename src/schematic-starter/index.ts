import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  template,
  move
} from "@angular-devkit/schematics";
import { strings } from "@angular-devkit/core";

export function schematicStarter(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const rules: Rule[] = [
      template({ ...strings, ..._options }),
      move("sandbox/src/components")
    ];

    // todo: use the url() function to retrieve the source from the './files' directory
    const source = url("./files");

    // todo: use the apply() function to apply rules (empty for now) and invoke it with the context
    return apply(source, rules)(context);
  };
}
