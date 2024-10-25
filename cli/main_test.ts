import { assertEquals } from "@std/assert";
import { add } from "./main.ts";

Deno.test("addTestSimple", () => {
  assertEquals(add(2, 3), 5);
});

Deno.test("addTestComposite", () => {
  assertEquals(add(1, add(2, 3)), 6);
});

Deno.test("addTestNegative", () => {
  assertEquals(add(-1, -1), -2);
});

Deno.test("addTestZero", () => {
  assertEquals(add(0, 0), 0);
});

Deno.test("addTestLargeNumbers", () => {
  assertEquals(add(1000, 2000), 3000);
});

Deno.test("addTestMixed", () => {
  assertEquals(add(-5, 10), 5);
});
