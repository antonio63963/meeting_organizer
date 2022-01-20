const jws = require('jws');
const { getPrivKey, getPublicKey } = require('./ctrl_getKeys');
const uniqid = require('uniqid');
const TokenModel = require('../models/token');
const { refreshTime } = require('../config/refreshTime');


const removeTokenDok = async(refreshToken) => {
  TokenModel.findOne({refreshToken: refreshToken}).remove().exec(console.log('doc refreshToken has removed'));
};

const createAccessToken = async (payload) => {
  const privKey = await getPrivKey();
  const now = new Date().valueOf();
  if(now > payload.exp) {
    delete payload.exp;
  };
  if(!payload.exp) {
    payload.exp = now + refreshTime;
  }
  const token = jws.sign({
    header: {alg: 'RS256'},
    payload,
    secret: privKey,
  })
  return token;
};

const createRefreshToken = () => {
  const uniq = uniqid();
  return uniq;
};

const checkRefreshToken = async (refreshToken) => {
  const check = await TokenModel.findOne({refreshToken: refreshToken});
  return check;
};

const createTokenDoc = async(uid, refreshToken) => {
  const tokenModel = new TokenModel;
  tokenModel.uid = uid;
  tokenModel.refreshToken = refreshToken;
  const doc = await tokenModel.save();
  console.log("DOOOC: ", doc);
  return doc;
};
const deleteTokenDoc = async (refreshToken) => {
  const deletedToken = await TokenModel.deleteOne({refreshToken: refreshToken});
  console.log('deletedToken: ', deletedToken);
}
const showDocs = async() => {
  const res = await TokenModel.find();
  console.log("RES: ", res);
};
showDocs()

const verifyAccessToken = async (token) => {
  const pubKey = await getPublicKey();
  const isValid = jws.verify(token, 'RS256', pubKey);
  return isValid;
};

const decodeAccessToken = (token) => {
  const decodeToken = jws.decode(token, 'RS256');
  return decodeToken;
};

const updateToken = async (accessToken, refreshToken) => {
  if(!accessToken && !refreshToken) {
    console.log('Update tokens is impossible!!! udateToken() ');
    return false;
  }
  console.log('OLD REFRESH: ', refreshToken);
  const oldPayload = JSON.parse(accessToken.payload);
  console.log('OlD__PayLOAD: ', oldPayload);
  const uid = oldPayload.uid;
  const newAccessToken = await createAccessToken({ uid });
  const newRefreshToken = createRefreshToken();

  const doc = await TokenModel.updateOne({refreshToken: refreshToken}, {refreshToken: newRefreshToken});
  if(doc) {
    return {
      uid, tokens:{
        accessToken: newAccessToken, 
        refreshToken: refreshToken
      }
    }
  }
};

const getRefreshTokenDoc = async(uid) => {
  const refreshToken = createRefreshToken();
  const doc = await createTokenDoc(uid, refreshToken);
  return doc;
};

module.exports = {
  createAccessToken,
  verifyAccessToken,
  decodeAccessToken,
  updateToken,
  removeTokenDok,
  checkRefreshToken,
  getRefreshTokenDoc,
  deleteTokenDoc
}