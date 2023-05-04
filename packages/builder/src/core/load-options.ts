import path from "path";
import { BuildOptions } from "esbuild";
import { isObject } from "../utils";

const DEFAULT_PATH = "build.config.js";

export async function loadOptions(
  pathToModule: string = DEFAULT_PATH,
): Promise<BuildOptions> {
  const resolvedPath: string = path.resolve(pathToModule);
  const module = await import(resolvedPath);

  if (
    !isObject(module) ||
    !("default" in module) ||
    !isObject(module.default)
  ) {
    throw new Error(`${pathToModule} does not export a default object`);
  }

  return module.default as BuildOptions;
}
