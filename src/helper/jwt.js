const jwt  = require("jsonwebtoken");

const createToken = (data) => {
const signature = "954gnkg5";
const payload = {
    id:data[0].id,
    email: data[0].email
}
const token = jwt.sign(payload, signature);
return token;
}

module.exports = {createToken}; 
