require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remain upgrade hope clog bottom skate'; 
let testAccounts = [
"0xe5e14def120ef1e4951d0108030d87e06647113c68666c2726316de9771d769d",
"0x62a49cbdb330939b8dfa485da3517896b3f09d126dd32742543be6855f4dfb5f",
"0x7b10027dafbf703d21aba7f80ded12b34b44b318a4e0ff8269b810d32103e83a",
"0x28e972ce45edf0b691661b9fbf256c1701f8d5cd17f4f41a4e4722456c18bd5b",
"0xcf7a48039305239068b28cd8fe95552ade765574e62c7686b39be8a4198bff69",
"0x5b3950562508bb75f61e82812c618bf6025830206f1eaeb4640d1a36264bc061",
"0x855c8bdbad975b949b9142a6b2ce5bdd6682eb453f12b801dac1bc059012de78",
"0x03e217264b965ebc4c4fa15a30faed9954a3e772bb3b766d02c9843ac16c4f55",
"0xe8722f8aa130f434879a98712912b4311b73eac10da38f9ac7def4c04e3ff9c6",
"0xd10ca20e9f8c125214793f4025d0c3ca2fc2742cb53c55234a1953468cfa41df"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
