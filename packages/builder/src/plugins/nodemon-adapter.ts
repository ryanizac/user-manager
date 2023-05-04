import { Plugin } from "esbuild";
import nodemon from "nodemon";

export function nodemonAdapterPlugin(): Plugin {
  let started = false;

  return {
    name: "nodemon-adapter-plugin",
    setup(build) {
      const outfile = build.initialOptions.outfile;

      if (!outfile) {
        throw new Error(
          "Could not run nodemon because the output file was not found",
        );
      }

      build.onEnd(() => {
        if (started) {
          return;
        }

        started = true;
        nodemon({
          exec: `node ${outfile}`,
          watch: [outfile],
        });
      });
    },
  };
}
