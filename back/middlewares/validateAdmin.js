const { verifyAccessToken, decodeAccessToken, checkRefreshToken } = require('../controllers/ctrl_jwt');

const validateAdmin = async (req, res, next) => {
  const { accessToken, refreshToken } = req.cookies;
  const isValid = accessToken ? await verifyAccessToken(accessToken) : null;
  if(isValid) {
    const decodeToken = decodeAccessToken(accessToken);
    const parsePayload = JSON.parse(decodeToken.payload);
    decodeToken.payload = parsePayload;
    const checkedToken = await checkRefreshToken(refreshToken);

    if(checkedToken && parsePayload.role === 'admin') {
      req.params.auth =  parsePayload;
      next();
      return;
    } else {
      res.status(404);
    }

  } else {
    res.status(404)
  };
};

module.exports = validateAdmin;