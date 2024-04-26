export const DEX_OP_CODES = {
  ADD_LIQUIDITY: 0x7362d09c,
  SWAP: 0x25938561,
  PROVIDE_LIQUIDITY: 0xfcf9e58f,
  DIRECT_ADD_LIQUIDITY: 0x4cf82803,
  REFUND: 0x0bf3f447,
  RESET_GAS: 0x42a0fb43,
  COLLECT_FEES: 0x1fcb7d3d,
  REQUEST_BURN: 0x595f07bc,
} as const;

export const DEX_VERSION = {
  v1: "v1",
} as const;

export type DEX_VERSION = (typeof DEX_VERSION)[keyof typeof DEX_VERSION];
