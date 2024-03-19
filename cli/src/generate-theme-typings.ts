import { writeFileSync } from 'node:fs';

import { themeKeyConfiguration } from './config.js';
import { createThemeTypingsInterface } from './create-theme-typings-interface.js';
import { resolveOutputPath, themeInterfaceDestination } from './resolve-output-path.js';

export async function generateThemeTypings({
  theme,
  out,
  onError,
}: {
  theme: Record<string, any>;
  out?: string;
  onError?: () => void;
}) {
  const { default: ora } = await import('ora');
  const spinner = ora('Generating Theme Typings').start();

  try {
    const start = process.hrtime.bigint();

    const typings = await createThemeTypingsInterface(theme, {
      config: themeKeyConfiguration,
    });

    const outPath = await resolveOutputPath(out);

    spinner.info();
    spinner.text = `Write file "${outPath}"...`;

    writeFileSync(outPath, typings, 'utf8');

    const end = process.hrtime.bigint();
    const duration = (Number(end - start) / 1e9).toFixed(2);

    spinner.succeed(`Done in ${duration}s`);
  } catch (e) {
    spinner.fail('An error occurred');
    if (e instanceof Error) {
      console.error(e.message);
    }

    spinner.stop();
    onError?.();
  } finally {
    spinner.stop();
  }
}

export { themeInterfaceDestination };
