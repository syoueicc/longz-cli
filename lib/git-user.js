const exec = require('child_process').execSync;
let name;
let email;

try{
    name = exec('git config --get user.name');
    email = exec('git config --get user.email');
}catch(err) {}


name = !!name && name.toString().trim() || 'author';
emil = (!!email && `<${email.toString().trim()}>`) || 'author@mail.com';
module.exports = {
    name, email
}