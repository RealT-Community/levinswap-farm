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
    100: '0x1698cD22278ef6E7c0DF45a8dEA72EDbeA9E42aa',
  },
  masterChef: {
    100: '0x0f2B0e9DB46C6b538e9276D2cF0C6CE8d515Eca1',
  },
  weth: {
    100: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
  },
  levin: {
    100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa',
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
12 LEVIN 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      100: '0x4eeb519888b027b50d3d221abdb47d9072e2e838', // pool address
    },
    tokenAddresses: {
      100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa', // token address
    },
    name: 'LEVIN/WXDAI',
    symbol: 'LEVIN-WXDAI LP',
    tokenSymbol: 'LEVIN',
    icon: '⚡',
  },
  {
    pid: 12,
    lpAddresses: {
      100: '0x8773f4bc44382b32a43623dad7a3b4849169da6f',
    },
    tokenAddresses: {
      100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa',
    },
    name: 'LEVIN/USDC',
    symbol: 'LEVIN-USDC LP',
    tokenSymbol: 'LEVIN',
    icon: '⚡',
  },
  {
    pid: 3,
    lpAddresses: {
      100: '0xf711393ceae2a7343297558f41adac96107c28b7',
    },
    tokenAddresses: {
      100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa',
    },
    name: 'LEVIN/STAKE',
    symbol: 'LEVIN-STAKE LP',
    tokenSymbol: 'LEVIN',
    icon: '⚡',
  },
  {
    pid: 8,
    lpAddresses: {
      100: '0xde9a79f84b3ecdb6ffe08187e4fd8fcff23e4104',
    },
    tokenAddresses: {
      100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa',
    },
    name: 'LEVIN/WETH',
    symbol: 'LEVIN-WETH LP',
    tokenSymbol: 'LEVIN',
    icon: '⚡',
  },
  {
    pid: 1,
    lpAddresses: {
      100: '0x75e75647cb13c168901a5923d8e3f69c14274a58',
    },
    tokenAddresses: {
      100: '0xb7d311e2eb55f2f68a9440da38e7989210b9a05e',
    },
    name: 'STAKE/WXDAI',
    symbol: 'STAKE-WXDAI LP',
    tokenSymbol: 'STAKE',
    icon: '⚡',
  },
  {
    pid: 17,
    lpAddresses: {
      100: '0xf2578329d269730b13743d5cf775bb1cfaa49351',
    },
    tokenAddresses: {
      100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa',
    },
    name: 'LEVIN/XMOON',
    symbol: 'LEVIN-XMOON LP',
    tokenSymbol: 'LEVIN',
    icon: '⚡',
  },
  {
    pid: 15,
    lpAddresses: {
      100: '0x27983d7e6245ab109b0a6bf07960dda71b1098c0',
    },
    tokenAddresses: {
      100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa',
    },
    name: 'LEVIN/REALT 10700',
    symbol: 'LEVIN-REALT 10700 LP',
    tokenSymbol: 'LEVIN',
    icon: '⚡',
  },
  {
    pid: 16,
    lpAddresses: {
      100: '0xf9b721143043ad43c0029b2c7fab10761ad22b31',
    },
    tokenAddresses: {
      100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa',
    },
    name: 'LEVIN/REALT 11201',
    symbol: 'LEVIN-REALT 11201 LP',
    tokenSymbol: 'LEVIN',
    icon: '⚡',
  },
  // Inactive Pools
  {
    pid: 13,
    lpAddresses: {
      100: '0x70ee52348edc032a3b111edcbf529680133f4b4a',
    },
    tokenAddresses: {
      100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa',
    },
    name: 'REALT 10639 (Ended)',
    symbol: 'LEVIN-REALT 10639 LP',
    tokenSymbol: 'LEVIN',
    icon: '⚡',
  },
  {
    pid: 14,
    lpAddresses: {
      100: '0xe7c240012be8dd57d73a4542a76b9a7e78a5f009',
    },
    tokenAddresses: {
      100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa',
    },
    name: 'REALT 15753 (Ended)',
    symbol: 'LEVIN-REALT 15753 LP',
    tokenSymbol: 'LEVIN',
    icon: '⚡',
  },
  {
    pid: 10,
    lpAddresses: {
      100: '0x4a1b8b79842a3832e5f458ffbebc43fca44e15cd',
    },
    tokenAddresses: {
      100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa',
    },
    name: 'REALT 14494 (Ended)',
    symbol: 'LEVIN-REALT-14494 LP',
    tokenSymbol: 'LEVIN',
    icon: '⚡',
  },
  {
    pid: 11,
    lpAddresses: {
      100: '0x75afd656f22b3a9584dafc23b89aafe94fdcbc57',
    },
    tokenAddresses: {
      100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa',
    },
    name: 'REALT 19020 (Ended)',
    symbol: 'LEVIN-REALT-19020 LP',
    tokenSymbol: 'LEVIN',
    icon: '⚡',
  },
  {
    pid: 6,
    lpAddresses: {
      100: '0x5ae7b6aef6ad086f2e36f4bd9eaac6023d5bac61',
    },
    tokenAddresses: {
      100: '0x1e001730a23c7ebaff35bc8bc90da5a9b20804a4',
    },
    name: 'REALT 9481 (Ended)',
    symbol: 'REALT-9481-LEVIN LP',
    tokenSymbol: 'REALT 19481',
    icon: '⚡',
  },
  {
    pid: 7,
    lpAddresses: {
      100: '0xa55b4fbf4c3f343f373c5aac1ce17883c3868b7c',
    },
    tokenAddresses: {
      100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa',
    },
    name: 'REALT 1115 (Ended)',
    symbol: 'REALT-1115-LEVIN LP',
    tokenSymbol: 'REALT 1115',
    icon: '⚡',
  },
  {
    pid: 4,
    lpAddresses: {
      100: '0x287a653a41a67018ee97442c820bcdf40d114da2',
    },
    tokenAddresses: {
      100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa',
    },
    name: 'REALT 19596 (Ended)',
    symbol: 'REALT-19596-LEVIN LP',
    tokenSymbol: 'REALT s 19596',
    icon: '⚡',
  },
  {
    pid: 5,
    lpAddresses: {
      100: '0x98042ec99c9a6f28ee8e95a9c2bbc62ddcbe7884',
    },
    tokenAddresses: {
      100: '0x1698cd22278ef6e7c0df45a8dea72edbea9e42aa',
    },
    name: 'REALT 5601 (Ended)',
    symbol: 'REALT 5601-LEVIN LP',
    tokenSymbol: 'REALT S 5601',
    icon: '⚡',
  },
  {
    pid: 2,
    lpAddresses: {
      100: '0x40a24eca4bbc224acde928230d14cd729f81f3cf',
    },
    tokenAddresses: {
      100: '0xda47bd33e8f5d17bb81b8752784bfb46c1c44b2a',
    },
    name: 'RealT 15350 (Ended)',
    symbol: 'RealT S 15350-LEVIN LP',
    tokenSymbol: 'REALTOKEN-S-15350-GREYDALE-ST-DETROIT-MI',
    icon: '⚡',
  },
]
