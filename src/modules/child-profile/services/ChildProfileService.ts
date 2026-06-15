import { childProfileRepository } from "../repositories/childProfileRepository";
import type { ChildProfile } from "../types";

export class ChildProfileService {
  static async getAll(): Promise<ChildProfile[]> {
    return childProfileRepository.getAll();
  }

  static async getAllByUserId(userId: string): Promise<ChildProfile[]> {
    return childProfileRepository.getAllByUserId(userId);
  }

  static async getById(id: string): Promise<ChildProfile | null> {
    return childProfileRepository.getById(id);
  }

  static async create(profile: Omit<ChildProfile, "id">): Promise<ChildProfile> {
    return childProfileRepository.create(profile);
  }

  static async update(id: string, patch: Partial<ChildProfile>): Promise<void> {
    return childProfileRepository.update(id, patch);
  }
}
