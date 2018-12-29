// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  walletUrl: 'https://portal.telosgermany.io',
  votingUrl: 'https://telos.eosx.io/tools/vote',
  appName: 'Telos Testnet Explorer',
  logoUrl: '/assets/logo.png',
  blockchainUrl: 'https://testnet.eos.miami',
  chainId: 'e17615decaecd202a365f4c029f206eee98511979de8a5756317e2469f2289e3',
  showAds: false,
  tokensUrl: 'https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/tokens.json',
  tickerUrl: 'https://api.coinmarketcap.com/v2/ticker/1765/',
  token: 'TLOS'
};
