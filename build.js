const esbuild = require('esbuild');
const copyStaticFiles = require('esbuild-copy-static-files');

try {
  const dev = process.argv.indexOf('--dev', 1) !== -1;

  esbuild.build({
    entryPoints: ['src/background.ts', 'src/contentScript.ts'],
    minify: true,
    sourcemap: dev,
    outdir: 'build',
    // target: 'chrome',
    loader: { '.ts': 'ts' },
    tsconfig: 'tsconfig.json',
    logLevel: 'debug',
    plugins: [
      copyStaticFiles({
        src: './static',
        dest: './build',
        dereference: true,
        errorOnExist: false,
        preserveTimestamps: true,
        recursive: true
      })
    ],
    watch: dev,
  })
} catch (e) {
  console.error(e);
  process.exit(1);
}
