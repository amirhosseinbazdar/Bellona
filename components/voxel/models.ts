/**
 * Voxel models built from small Bellona cubes (about twice the resolution of a simple icon, so the
 * cubes stay small and the shapes keep their detail). Coordinates: x → right-down, y → left-down,
 * z → up. Faces that point at the viewer are the +x (right) and +y (left) sides.
 * Tones: "o" brand orange (logo faces), "k" ink, "w" white, "g" grey.
 */

export type Tone = "o" | "k" | "w" | "g";
export type Vox = [number, number, number, Tone?];

type Box = (x: number, y: number, z: number, dx: number, dy: number, dz: number, t: Tone) => void;
type At = (x: number, y: number, z: number, t: Tone) => void;
type Clear = (x: number, y: number, z: number, dx?: number, dy?: number, dz?: number) => void;

/** Collects voxels; later writes to the same cell replace earlier ones, `clear` carves holes. */
function build(fn: (box: Box, at: At, clear: Clear) => void): Vox[] {
  const cells = new Map<string, Vox>();
  const at: At = (x, y, z, t) => cells.set(`${x},${y},${z}`, [x, y, z, t]);
  const box: Box = (x, y, z, dx, dy, dz, t) => {
    for (let i = 0; i < dx; i++) for (let j = 0; j < dy; j++) for (let k = 0; k < dz; k++) at(x + i, y + j, z + k, t);
  };
  const clear: Clear = (x, y, z, dx = 1, dy = 1, dz = 1) => {
    for (let i = 0; i < dx; i++) for (let j = 0; j < dy; j++) for (let k = 0; k < dz; k++) cells.delete(`${x + i},${y + j},${z + k}`);
  };
  fn(box, at, clear);
  return [...cells.values()];
}

export const MODELS = {
  // Industries ---------------------------------------------------------------
  /** Real estate: a gabled house with door, windows, chimney and a small tree. */
  house: build((box, at) => {
    box(0, 0, 0, 10, 8, 1, "g"); // plot
    box(1, 1, 1, 8, 6, 5, "o"); // walls
    // gable roof, ridge along x, eaves overhanging by one cube
    for (let k = 0; k < 4; k++) box(0, k, 6 + k, 10, 8 - 2 * k, 1, "k");
    box(3, 6, 1, 2, 1, 3, "k"); // door on the left face
    at(4, 6, 2, "o"); // handle
    box(6, 6, 3, 2, 1, 2, "w"); // window, left face
    box(8, 2, 3, 1, 2, 2, "w"); // windows, right face
    box(8, 5, 3, 1, 1, 2, "w");
    box(6, 1, 9, 2, 2, 3, "g"); // chimney
    // tree
    box(11, 6, 1, 1, 1, 3, "k");
    box(10, 5, 4, 3, 3, 3, "o");
    at(11, 6, 7, "o");
  }),
  /** Finance: a classical bank with steps, columns and a pediment. */
  bank: build((box) => {
    box(0, 0, 0, 14, 9, 1, "g"); // steps
    box(1, 0, 1, 12, 8, 1, "g");
    box(2, 0, 2, 10, 5, 6, "k"); // hall
    for (let x = 2; x <= 11; x += 3) box(x, 6, 2, 1, 1, 6, "w"); // columns
    box(1, 0, 8, 12, 8, 1, "w"); // entablature
    box(2, 1, 9, 10, 6, 1, "o"); // pediment
    box(4, 2, 10, 6, 4, 1, "o");
    box(6, 3, 11, 2, 2, 1, "o");
  }),
  /** Healthcare: a medical cross on a plinth, with a heart beat line. */
  health: build((box, at) => {
    box(0, 0, 0, 11, 6, 1, "g");
    box(4, 1, 1, 3, 3, 9, "o"); // vertical bar
    box(1, 1, 4, 9, 3, 3, "o"); // horizontal bar
    // pulse line on the plinth's front edge
    for (const [x, z] of [[0, 1], [1, 1], [2, 1], [3, 2], [3, 3], [4, 1], [5, 1]] as const) at(x, 5, z, "k");
  }),
  /** E-commerce: a shopping bag with handles next to a taped parcel. */
  shop: build((box, at) => {
    box(0, 0, 0, 8, 5, 9, "o"); // bag
    box(0, 0, 9, 8, 5, 1, "k"); // folded top
    for (const x of [2, 5]) {
      at(x, 2, 10, "k");
      at(x, 2, 11, "k");
    }
    box(2, 2, 12, 4, 1, 1, "k"); // handle bar
    box(9, 1, 0, 5, 5, 5, "g"); // parcel
    box(11, 1, 0, 1, 5, 5, "w"); // tape
    box(9, 3, 5, 5, 1, 0, "w");
  }),
  /** Consulting: a briefcase with a band, clasp and handle. */
  briefcase: build((box, at) => {
    box(0, 0, 0, 12, 5, 8, "k");
    box(0, 0, 3, 12, 5, 1, "o"); // band
    box(5, 4, 3, 2, 1, 2, "w"); // clasp
    box(3, 2, 8, 1, 1, 2, "o"); // handle
    box(8, 2, 8, 1, 1, 2, "o");
    box(3, 2, 10, 6, 1, 1, "o");
    at(0, 4, 0, "g"); // feet
    at(11, 4, 0, "g");
  }),
  /** Education: a graduation cap on a stack of books. */
  cap: build((box, at) => {
    box(0, 0, 0, 10, 7, 2, "o"); // book 1
    box(1, 0, 2, 9, 6, 2, "w"); // book 2
    box(0, 0, 4, 8, 6, 2, "k"); // book 3
    box(2, 1, 6, 4, 4, 2, "o"); // cap base
    box(0, -1, 8, 8, 8, 1, "k"); // board
    at(3, 2, 9, "o"); // button
    for (let x = 4; x <= 7; x++) at(x, 6, 8, "o"); // tassel cord
    at(7, 6, 7, "o");
    at(7, 6, 6, "o");
  }),

  // Pillars ------------------------------------------------------------------
  /** Website design: a monitor with a page layout on screen. */
  monitor: build((box, at) => {
    box(0, 0, 3, 14, 2, 10, "k"); // screen
    box(1, 1, 11, 12, 1, 1, "w"); // browser bar
    for (const x of [1, 2, 3]) at(x, 1, 11, "o");
    box(1, 1, 7, 7, 1, 3, "o"); // hero block
    box(9, 1, 8, 4, 1, 2, "w");
    for (const z of [4, 5]) box(1, 1, z, 9, 1, 1, "g"); // text lines
    box(11, 1, 4, 2, 1, 2, "o"); // button
    box(6, 0, 1, 2, 2, 2, "g"); // neck
    box(3, -1, 0, 8, 4, 1, "g"); // base
  }),
  /** Full-stack & product: </> brackets with a slash. */
  code: build((box, at) => {
    const lt = [[3, 0], [2, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 6]];
    for (const [x, z] of lt) {
      at(x, 0, z, "o");
      at(x, 1, z, "o");
    }
    for (const [x, z] of lt) {
      at(15 - x, 0, z, "o");
      at(15 - x, 1, z, "o");
    }
    for (let z = 0; z <= 6; z++) {
      const x = 6 + Math.floor(z / 2);
      at(x, 0, z, "k");
      at(x, 1, z, "k");
    }
    box(-1, -1, -1, 18, 3, 1, "g"); // shelf
  }),
  /** AI agents & automation: a friendly robot. */
  robot: build((box, at) => {
    box(1, 1, 0, 6, 5, 6, "g"); // body
    box(3, 5, 2, 2, 1, 2, "o"); // chest light (left face)
    box(2, 1, 6, 4, 4, 1, "k"); // neck
    box(0, 0, 7, 8, 7, 6, "k"); // head
    box(1, 6, 9, 2, 1, 2, "o"); // eyes on the left face
    box(5, 6, 9, 2, 1, 2, "o");
    box(2, 6, 8, 4, 1, 1, "w"); // mouth
    box(-1, 2, 9, 1, 3, 2, "g"); // ears
    box(8, 2, 9, 1, 3, 2, "g");
    at(4, 3, 13, "w"); // antenna
    at(4, 3, 14, "w");
    at(4, 3, 15, "o");
  }),
  /** Marketing & growth: a rising bar chart with a trend line. */
  chart: build((box, at) => {
    box(0, 0, 0, 15, 5, 1, "g"); // base
    const bars = [3, 5, 8, 13];
    bars.forEach((h, i) => box(1 + i * 4, 1, 1, 2, 3, h, i === bars.length - 1 ? "o" : "k"));
    // trend line above the bars
    for (const [x, z] of [[1, 6], [3, 8], [5, 9], [7, 11], [9, 12], [11, 15], [12, 16]] as const) at(x, 4, z, "o");
  }),
  /** Business development: stairs up to a flag. */
  stairs: build((box) => {
    for (let s = 0; s < 5; s++) box(s * 2, 0, 0, 2, 5, (s + 1) * 2, "g"); // steps
    box(9, 2, 10, 1, 1, 7, "k"); // pole
    box(5, 2, 13, 4, 1, 4, "o"); // flag
  }),

  // Brand --------------------------------------------------------------------
  /** The logo's stack (two cubes and the wedge), rebuilt from small cubes. */
  stack: build((box) => {
    box(0, 0, 0, 6, 6, 6, "o"); // bottom cube
    box(0, 0, 7, 6, 6, 6, "o"); // top cube, one-cube gap like the mark
    box(0, 4, 6, 1, 2, 1, "o"); // wedge in the gap
  }),
  /** Loose cluster for empty project slots. */
  cluster: build((box, at) => {
    box(0, 0, 0, 6, 6, 1, "g");
    box(0, 0, 1, 4, 4, 3, "o");
    box(0, 0, 4, 2, 2, 2, "o");
    box(4, 4, 1, 2, 2, 2, "k");
    at(6, 0, 0, "k");
    at(6, 1, 0, "k");
  }),
} satisfies Record<string, Vox[]>;

export type ModelName = keyof typeof MODELS;

export const PILLAR_MODEL = { web: "monitor", product: "code", ai: "robot", growth: "chart", bizdev: "stairs" } as const;

export const INDUSTRY_MODEL: Record<string, ModelName> = {
  "real-estate": "house",
  finance: "bank",
  healthcare: "health",
  ecommerce: "shop",
  consulting: "briefcase",
  education: "cap",
};
