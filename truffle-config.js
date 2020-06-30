require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth predict unusual gesture basket flat gasp'; 
let testAccounts = [
"0x8278637a8c33b978759e5e63d8f8f5f6b31d4401f700f5f7865f1e0df0eb707f",
"0x1e1bb173b03fb5611ec8412ada2cc6440c836ddd2c1b1d51ded52974afa864fa",
"0x9727ccfd2ebab85de6e52d825ed06ef4e2a78a3b5956cd97f768af70dd00b90f",
"0x371173a5a1e174e0c6a7c2ea8a172a410e72e52ca21f149fd8ad4b0ccbbbcce6",
"0x0eca562f039a048441506553cb816fedc71bdec4f00192d8fe60b4c0603b72ea",
"0xff43d535e67b0766ebdeb9d1019d80c85d1d5c39888f7502de598d40831842dd",
"0x52279593d72645177869a57a7a406c9adeec5debd61aa76360cffdec0ad7b627",
"0x8a7adc17ff35cb4db962db3b5d838751042e610c80f4981291f6f4732a0320f0",
"0x66544bb6a2bff38a42001bbe9dab6ca8b4b288e5b1289d9436f0de42f71b6aea",
"0x1ce877a7f035c510cf86ed778341d69bf0b65ec4a9a0e4c7422c19462f09551a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
