import { beforeEach, describe, expect, it } from "vitest";
import { getLegacyCacheKeys, shouldRefreshAppCache } from "./app-cache";

describe("app-cache utilities", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("identifies legacy app storage keys to be cleaned", () => {
    localStorage.setItem("neurobrilha:activeChildId", "child-1");
    localStorage.setItem("pip:state", "demo");
    localStorage.setItem("escola-brilha-aula-1", "value");
    localStorage.setItem("keep-me", "value");

    expect(getLegacyCacheKeys()).toEqual(["neurobrilha:activeChildId", "pip:state", "escola-brilha-aula-1"]);
  });

  it("detects when the cached app version is outdated", () => {
    localStorage.setItem("app_version", "old-version");
    expect(shouldRefreshAppCache()).toBe(true);
  });
});
