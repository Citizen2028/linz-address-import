import { promises as fs } from 'fs';
import { join } from 'path';
import {
  Status,
  StatusReport,
  HandlerReturn,
  GeoJsonFeature,
} from '../../types';
import { outFolder, toLink } from '../util';

export async function handleLocationWrong(
  arr: StatusReport[Status.EXISTS_BUT_LOCATION_WRONG],
): Promise<HandlerReturn> {
  const features: GeoJsonFeature[] = [];
  let report = '';

  for (const [linzId, d] of arr) {
    const [metres, osmId, lat, lng, wrongLat, wrongLng] = d;
    report += `${linzId}\t\t${toLink(
      osmId,
    )}\t\tneeds to move ${metres}m to ${lat},${lng}\n`;

    if (osmId[0] === 'n') {
      // RapiD can only move nodes.
      features.push({
        type: 'Feature',
        id: osmId,
        geometry: {
          type: 'LineString',
          coordinates: [
            [wrongLng, wrongLat],
            [lng, lat],
          ],
        },
        properties: {
          __action: 'move',
        },
      });
    }
  }

  await fs.writeFile(join(outFolder, 'location-wrong.txt'), report);

  return { 'Address Update': features };
}
