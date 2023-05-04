import { loadArgs, loadOptions } from "./core";
import { nodemonAdapterPlugin } from "./plugins";

import esbuild from "esbuild";

async function cliMode() {
  const args = await loadArgs();
  const buildOptions = await loadOptions();

  if (args.entry) {
    buildOptions.entryPoints = [args.entry];
  }

  if (args.outfile) {
    buildOptions.outfile = args.outfile;
  }

  if (args.watch) {
    const buildOptionsForWatchMode = {
      ...buildOptions,
      plugins: [nodemonAdapterPlugin(), ...(buildOptions.plugins || [])],
    };
    const ctx = await esbuild.context(buildOptionsForWatchMode);

    await ctx.watch();

    return;
  }

  await esbuild.build(buildOptions);
}

cliMode();
