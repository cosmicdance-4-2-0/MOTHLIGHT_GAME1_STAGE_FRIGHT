import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");
const version = JSON.parse(read("version.json"));

assert.equal(version.schema, 1);
for (const key of ["major", "minor", "revision", "build"]) {
  assert.ok(Number.isSafeInteger(version[key]) && version[key] >= 0, "invalid " + key);
}
assert.ok(version.build > 0, "Build starts at 1 and must never reset");
assert.match(version.changeId, /^SF-[0-9]{4,}$/, "invalid ChangeID");
assert.equal(version.status, "development");
const label = [version.major, version.minor, version.revision, version.build].join(".") + "/" + version.changeId;
assert.ok(read("CHANGELOG.md").includes("## [" + label + "]"), "missing changelog entry");
const record = "docs/changes/" + version.changeId + ".md";
assert.ok(existsSync(new URL(record, root)), "missing change record");
assert.ok(read(record).includes("**Version:** `" + label + "`"), "record/version mismatch");
console.log("Stage Fright development version: " + label);
