import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url
} from "@angular-devkit/schematics";

export function schematicStarter(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const rules: Rule[] = [];

    // todo: use the url() function to retrieve the source from the './files' directory
    const source = url("./files");

    // todo: use the apply() function to apply rules (empty for now) and invoke it with the context
    return apply(source, rules)(context);

    //  Context Testing
    // context.logger.debug("debug");
    // context.logger.info("info");
    // context.logger.warn("warn");
    // context.logger.error("error");
    // return tree;
  };
}
