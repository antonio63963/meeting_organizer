const UserModel = require('../models/user');

const createUser = async (userData) => {
  const user = new UserModel;
  user.name = userData.name;
  user.role = 'user';
  user.auth.login = userData.email;
  user.auth.pwd = userData.password;
  user.avatar = userData.avatar;
  user.timezone = userData.timezone;
  user.country = userData.country;
  const doc = await user.save();
  console.log(doc._id);
  return doc;
};
const checkUserByEmail = async(data) => {
  console.log("DATA in checkUser: ", data);
  const user = await UserModel.findOne({ "auth.login": data.email });
  console.log("CHECK USER BY EMAIL", user);
  return user;
}; 
const findUserById = async(id) => {
  const user = await UserModel.findOne({id}, {});
  const { id: uid, name, timezone, country, role, auth, avatar } = user;
  console.log("CTRL USER: ", uid);
  return user;
}

const loginUser = async (email, password) => {
  const user = await UserModel.findOne({"auth.login": email});
  if(!user) {
    return {login: false, message: 'unknown user'};
  }else {
    const check = user.checkPwd(password);
    return {
      login: check, 
      message: check ? 'login successful' : 'login failed, unknown user or password', 
      uid: check ? user.id : null,
      role: check ? user.role : null,
      name: check ? user.name : null,
    };
  }
};
const changePwd = async (id, newPwd) => {
  const doc = await UserModel.findOne({_id: id});
  doc.auth.pwd = newPwd;
  const newDoc = await doc.save()
  return newDoc;
}

const changeUserAvatar = async(id, avatar) => {
  const doc = await UserModel.findOneAndUpdate({_id: id}, {avatar: avatar});
  doc.avatar = avatar;
  const newDoc = await doc.save();
  return newDoc;
}
const changeUserProfile = async(id, userData) => {
  const newDoc = await UserModel.findOneAndUpdate({_id: id}, userData, {new: true});
  return newDoc;
};

module.exports = {
  createUser,
  loginUser,
  checkUserByEmail,
  findUserById,
  changePwd,
  changeUserProfile
};
