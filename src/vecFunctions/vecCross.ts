import { IVec } from "../types";

/**
 * Computes the two-dimensional cross product of the two vectors.
 *
 * The two-dimensional cross product is defined to be the scalar value:
 *
 * ```
 * u × v = u.x * v.y - u.y * v.x
 * ```
 *
 * Note that the cross product is antisymmetric, i.e. `u × v = -v × u`.
 *
 * @param u the first vector
 * @param v the vector to cross with the first
 * @see {@link vecDot}
 */
export function vecCross(u: IVec, v: IVec) {
  return u.x * v.y - u.y * v.x;
}
