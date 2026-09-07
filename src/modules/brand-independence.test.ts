import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? files(path) : [path];
  });
}

describe("identidade própria do NeuroBrilha", () => {
  it("não menciona a marca concorrente no aplicativo", () => {
    const forbidden = ["duo", "lingo"].join("");
    const root = resolve(process.cwd(), "src");
    const offending = files(root)
      .filter((file) => /\.(ts|tsx|js|jsx|css|html|json)$/i.test(file))
      .filter((file) => !file.endsWith("brand-independence.test.ts"))
      .filter((file) => readFileSync(file, "utf8").toLowerCase().includes(forbidden));
    expect(offending).toEqual([]);
  });
});
