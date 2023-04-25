//https://eth-sepolia.g.alchemy.com/v2/oMeyDa0Au6izqkihZUNOtPlwJppaLuGw

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/oMeyDa0Au6izqkihZUNOtPlwJppaLuGw',
      accounts: ['52f02f32011b553d32415c8ba466e27d5c465c43598a0a8b50032e29a9d9ef82'],
    },
  },
};