export type Args = {
  watch: boolean;
  entry?: string;
  outfile?: string;
};

const getArgsFromProcess = () => process.argv.slice(2);

const flagList = ["--watch"];

export async function loadArgs(
  args: string[] = getArgsFromProcess(),
): Promise<Args> {
  const rawArgsList = args;
  const restArgsList = rawArgsList.filter((item) => !flagList.includes(item));

  const watch = rawArgsList.includes("--watch");
  const entry = restArgsList[0];
  const outfile = restArgsList[1];

  return {
    watch,
    entry,
    outfile,
  };
}
