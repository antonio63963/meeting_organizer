const { verifyAccessToken, decodeAccessToken, checkRefreshToken } = require('../controllers/ctrl_jwt');
const { refreshTime } = require('../config/refreshTime');

const validateAccessToken = async (req, res, next) => {
  const { accessToken, refreshToken } = req.cookies;
  if(!accessToken || !refreshToken) {
    res.json({ status:403});
    return;
  };
  const isValid = accessToken ? await verifyAccessToken(accessToken) : null;
  console.log('VALIDATE ACCESS TOKEN: ', isValid);
  if(isValid) {
    const decodeToken = decodeAccessToken(accessToken);
    const parsePayload = JSON.parse(decodeToken.payload);
    const userExp = parsePayload.exp;
    const now = new Date().valueOf();
    const diff = now - userExp;
    decodeToken.payload = parsePayload;
    if(diff > refreshTime) {
      const checkedToken = await checkRefreshToken(refreshToken);
      checkedToken ? 
        req.params.auth =  parsePayload  : 
        req.params.auth = null ;
      console.log("VALIDATE MIDwARE: ", req.params.auth);
    }else{
      req.params.auth = parsePayload;
    };
  } else {
    res.redirect('/')
  };
  next();
};

module.exports = validateAccessToken;