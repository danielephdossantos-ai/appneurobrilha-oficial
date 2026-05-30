import { describe, it, expect } from 'vitest';
import { TrailService } from './TrailService';

describe('TrailService', () => {
  it('should return all trails', () => {
    const trails = TrailService.getAllTrails();
    expect(trails.length).toBeGreaterThan(0);
  });

  it('should filter trails by area', () => {
    const mathTrails = TrailService.getTrailsByArea('matematica');
    expect(mathTrails.every(t => t.area === 'matematica')).toBe(true);
  });

  it('should have structured missions for each trail', () => {
    const trails = TrailService.getAllTrails();
    const firstTrail = trails[0];
    expect(firstTrail.missions.length).toBe(6);
    expect(firstTrail.phases.inicio.length).toBeGreaterThan(0);
    expect(firstTrail.missions[0].activities.length).toBeGreaterThan(0);
  });
});
