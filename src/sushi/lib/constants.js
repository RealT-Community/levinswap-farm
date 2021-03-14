import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0x965769C9CeA8A7667246058504dcdcDb1E2975A5',
  uniswapFactoryV2: '0x965769C9CeA8A7667246058504dcdcDb1E2975A5',
  XDAI: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
  UNIRouter: '0xb18d4f69627F8320619A696202Ad2C430CeF7C53',
}

export const contractAddresses = {
  sushi: {
    100: '0xFe148DDbFA0AB7b099D2054138Bb96219e59875F',
  },
  masterChef: {
    100: '0x77A44dF6Fb2Be7D33f648C550Af949A9327B82d7',
  },
  weth: {
    100: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
  },
}

/*
UNI-V2 LP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
  // {
  //   pid: 0,
  //   lpAddresses: {
  //     100: '0x90AAef6443942730fBAe414961735Af9C8568Cfb',
  //   },
  //   tokenAddresses: {
  //     100: '0x90AAef6443942730fBAe414961735Af9C8568Cfb',
  //   },
  //   name: 'Aave Token from Ethereum',
  //   symbol: 'LPTA-AAVE-WXDAI UNI-V2 LP',
  //   tokenSymbol: 'LPTA-AAVE',
  //   icon: '🍣',
  // },
  {
    pid: 0,
    lpAddresses: {
      100: '0x75e75647cb13c168901a5923d8e3f69c14274a58',
    },
    tokenAddresses: {
      100: '0xb7d311e2eb55f2f68a9440da38e7989210b9a05e',
    },
    name: 'STAKE Token from Ethereum',
    symbol: 'STAKE-WXDAI UNI-V2 LP',
    tokenSymbol: 'STAKE',
    icon: '🍣',
  }, 
  // {
  //   pid: 2,
  //   lpAddresses: {
  //     100: '0xe2eC0F6A6a664cd00B0c51A3db529E1c8a69a620',
  //   },
  //   tokenAddresses: {
  //     100: '0xe2eC0F6A6a664cd00B0c51A3db529E1c8a69a620',
  //   },
  //   name: 'LP_Test_C',
  //   symbol: 'LPTC',
  //   tokenSymbol: 'LPTC',
  //   icon: '🍣',
  // }, {
  //   pid: 3,
  //   lpAddresses: {
  //     100: '0xc13721582de2D5b75B4B12e77f8688eA07Fd468A',
  //   },
  //   tokenAddresses: {
  //     100: '0xc13721582de2D5b75B4B12e77f8688eA07Fd468A',
  //   },
  //   name: 'LP_Test_D',
  //   symbol: 'LPTD',
  //   tokenSymbol: 'LPTD',
  //   icon: '🍣',
  // },

]
