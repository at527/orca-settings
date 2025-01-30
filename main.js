// Read the JSON file
const neptune3pro = [
  "neptune3pro/fdm_process_common-elegoo.json",
  "neptune3pro/fdm_process_elegoo_common.json",
  "neptune3pro/0.20mm Standard @Elegoo Neptune3.json",
];

const marlin = [
  "marlin/fdm_process_common-marlin.json",
  "marlin/fdm_process_marlin_common.json",
  "marlin/0.20mm Standard @MyMarlin.json",
];

// const filePaths = [
//   "tests/a.json",
//   "tests/b.json",
//   "tests/c.json"
// ]

async function mergeFiles(filePaths) {
  const read_files = await Promise.all(
    filePaths.map((path) => Deno.readTextFile(path)),
  );
  const json_settings = read_files.map((file) => JSON.parse(file));
  return json_settings.reduce((acc, settings) => {
    return {
      ...acc,
      ...settings,
    };
  }, {});
}

const mergedMarlin = JSON.stringify(await (mergeFiles(marlin)), null, 2);
const mergedNeptune3Pro = JSON.stringify(await (mergeFiles(neptune3pro)), null, 2);

await Deno.writeTextFile("marlin-merged.json", mergedMarlin);
await Deno.writeTextFile("neptune3pro-merged.json", mergedNeptune3Pro);
