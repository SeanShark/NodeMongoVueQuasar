const DataBase = require("../Model/MogonDB");

const validateUser = async (user) => {
  if (!user || user.length > 320) {
    console.log('length false',user);
    return false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(user)) {
    console.log('emailPattern false');
    return false;
  }
  const isAuthUser = await DataBase.User.exists({
    $and: [
      { email: user },
      { banned: 'false' },
    ],
    });
  if (!isAuthUser) {
    console.log('isAuthUser false');
    return false;
  }
  return true;
};

const addPrivilege = async (user) => {
  const legalUser = await DataBase.User.findOne({ email: user })
    .where("userPrivilege.add")
    .equals("true");
  
  if(!legalUser) {
    return false;
  }
  return true;
};
const editPrivilege = async (user) => {
  const legalUser = await DataBase.User.findOne({ email: user })
    .where("userPrivilege.edit")
    .equals("true");
  
  if(!legalUser) {
    return false;
  }
  return true;
};
const deletePrivilege = async (user) => {
  const legalUser = await DataBase.User.findOne({ email: user })
    .where("userPrivilege.delete")
    .equals("true");
  
  if(!legalUser) {
    return false;
  }
  return true;
};

const allowIP = async (user) => {
  const legalUser = await DataBase.User.findOne({ email: user })
    .where("databasePermissions.ip")
    .equals("true");
  
  if(!legalUser) {
    return false;
  }
  return true;
};
const allowsurveillance = async (user) => {
  const legalUser = await DataBase.User.findOne({ email: user })
    .where("databasePermissions.surveillance")
    .equals("true");
  
  if(!legalUser) {
    return false;
  }
  return true;
};
const allowPhone = async (user) => {
  const legalUser = await DataBase.User.findOne({ email: user })
    .where("databasePermissions.phone")
    .equals("true");
  
  if(!legalUser) {
    return false;
  }
  return true;
};
const allowPrinter = async (user) => {
  const legalUser = await DataBase.User.findOne({ email: user })
    .where("databasePermissions.printer")
    .equals("true");
  
  if(!legalUser) {
    return false;
  }
  return true;
};
const allowDatacenter = async (user) => {
  const legalUser = await DataBase.User.findOne({ email: user })
    .where("databasePermissions.datacenter")
    .equals("true");
  
  if(!legalUser) {
    return false;
  }
  return true;
};

module.exports = {
  validateUser,
  addPrivilege,
  editPrivilege,
  deletePrivilege,
  allowIP,
  allowsurveillance,
  allowPhone,
  allowPrinter,
  allowDatacenter,
};
