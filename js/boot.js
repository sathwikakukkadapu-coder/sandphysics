/**
 * sandphysics - Initial scene boot sequence
 * Spawns foundational elements (terrain, water reservoir, flora) on simulation start.
 */
import { Species } from "../crate/pkg";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function boot(width, height) {
  // 1. Build a bedrock terrain foundation with stone and sand
  for (let x = 0; x < width; x += 6) {
    if (window.stopboot) return;
    const groundY = Math.floor(height - 25 + 8 * Math.sin(x / 35));
    window.u.paint(x, groundY, 8, Species.Stone);
    window.u.paint(x, groundY - 6, 6, Species.Sand);
    await sleep(8);
  }

  // 2. Sprinkle seeds across the terrain
  for (let x = 20; x < width - 20; x += 45) {
    if (window.stopboot) return;
    const seedY = Math.floor(height - 40 + 8 * Math.sin(x / 35));
    window.u.paint(x, seedY, 4, Species.Seed);
    await sleep(60);
  }

  // 3. Drop water showers to nourish the plants
  for (let x = 30; x < width - 30; x += 55) {
    if (window.stopboot) return;
    window.u.paint(x, 40, 7, Species.Water);
    await sleep(100);
  }
}

export { sleep, boot };
