import { Selector } from "testcafe";

test("Test a test", async (tc) => {
  await tc.click(Selector(".button"));
});
