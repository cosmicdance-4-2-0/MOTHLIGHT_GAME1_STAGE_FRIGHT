import assert from "node:assert/strict";
import test from "node:test";

import { CORE_PACKAGE_ID } from "../dist/index.js";

test("core package loads in Node without a rendering host", () => {
  assert.equal(CORE_PACKAGE_ID, "@stage-fright/core");
});
