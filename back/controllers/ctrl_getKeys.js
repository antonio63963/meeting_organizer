const path = require('path');
const { promises: FS } = require('fs');

let privKey = null;
const getPrivKey = async () => {
  if(!privKey) {
    const keyPath = path.resolve('keys/priv.key');
    privKey =  await FS.readFile(keyPath, 'utf8');
  }
  return privKey;
};

let pubKey = null;
const getPublicKey = async () => {
  if(!pubKey) {
    const keyPath = path.resolve('keys/pub.key');
    pubKey =  await FS.readFile(keyPath, 'utf8');
  }
  return pubKey;
};

module.exports = {
  getPrivKey,
  getPublicKey
}