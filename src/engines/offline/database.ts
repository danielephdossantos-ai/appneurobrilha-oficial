import Dexie, { type Table } from "dexie";

export interface OfflineSyncQueue {
  id?: number;
  type: string;
  data: any;
  timestamp: number;
  status: "pending" | "syncing" | "failed";
  attempts: number;
  lastError?: string;
}

export interface OfflineRecord {
  id: string;
  type: string;
  data: any;
  updatedAt: number;
}

export class NeuroOfflineDB extends Dexie {
  syncQueue!: Table<OfflineSyncQueue>;
  records!: Table<OfflineRecord>;

  constructor() {
    super("NeuroBrilhaOffline");
    this.version(1).stores({
      syncQueue: "++id, type, status, timestamp",
      records: "id, type, updatedAt",
    });
  }
}

export const db = new NeuroOfflineDB();
