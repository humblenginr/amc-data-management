export type Plane = {
  name: string;
  id: string | number;
};

export type Detail = {
  name: string;
  values?: {
    [key: string]: string;
  };
  unit: string;
  description?: string;
};

/** Data structure in the database
 * {
 *  planes: {
 *    plane1: {id, name},
 *    plane1: {id, name},
 *    .......
 *    },
 *  details: {
 *
 *    mtow: {
 *            values:{
 *                [planeId] : 23
 *                [planeId] : 24,
 *                [planeId] : 21,
 *                  ...
 *             }
 *            description: "asdf",
 *            unit: "m/s"
 *          },
 *    cruise_speed: {...},
 *    weight: {...},
 *    ........
 *    }
 * }
 */
