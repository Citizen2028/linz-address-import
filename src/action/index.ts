import { promises as fs } from 'fs';
import { join } from 'path';
import { HandlerReturn, Status, StatusReport } from '../types';
import { outFolder, mock, suburbsFolder } from './util';
import { generateStats } from './generateStats';
import { handlers } from './handlers';
import { createIndex } from './createIndex';
import { sectorize } from './sectorize';

export async function main(): Promise<void> {
  console.log('Reading status file into memory...');
  const status: StatusReport = JSON.parse(
    await fs.readFile(
      join(__dirname, `../../data/status${mock}.json`),
      'utf-8',
    ),
  );

  console.log('Clearing output folder...');
  await fs.rmdir(outFolder, { recursive: true });
  await fs.mkdir(suburbsFolder, { recursive: true });

  console.log('generating stats...');
  await generateStats(status);

  const features: HandlerReturn = {};

  for (const $state in handlers) {
    const state = +$state as Status;
    console.log(`handling status ${Status[state]} ...`);
    // always pass in NEEDS_DELETE data for handlers that need it
    const res = await handlers[+state as Status](
      status[state],
      status[Status.NEEDS_DELETE],
    );
    if (res) {
      for (const k in res) {
        features[k] ||= [];
        features[k].push(...res[k]);
      }
    }
  }

  const mass = 'Address Update';
  features[mass] = [];
  for (const k in features) {
    if (features[k].length < 50 && !mock) {
      features[mass].push(...features[k]);
      delete features[k];
    }
  }
  if (!features[mass]?.length) delete features[mass];

  // we do this after generating the 'small places' layer, beacuse we only want to include addresses
  try {
    const specialLayers = JSON.parse(
      await fs.readFile(
        join(__dirname, '../../data/special-layers.geo.json'),
        'utf-8',
      ),
    );
    Object.assign(features, specialLayers);
  } catch {
    console.log('(!) Failed to include special layers');
  }

  await createIndex(sectorize(features));
}

if (process.env.NODE_ENV !== 'test') main();
