import { mat2x3AffIdentity, mat2x3Reset } from "../../functions/mat2x3Functions";
import { expectMat2x3EqualsApprox } from "../helpers";

describe("mat2x3AffIdentity", () => {
  it("returns [1 0 0 1 0 0]", () => {
    expectMat2x3EqualsApprox(mat2x3AffIdentity(), mat2x3Reset(1, 0, 0, 1, 0, 0));
  });
});