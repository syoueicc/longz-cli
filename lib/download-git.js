const home = require('user-home');
const chalk = require('chalk');
const ora = require('ora');
const { join } = require('path');
const download = require('download-git-repo');
const exists = require('fs').existsSync;
const shelljs = require('shelljs');

module.exports = function (isproject = false, cb=null) {
    let is_project = typeof isproject == 'boolean' ? isproject : false;
    if(typeof isproject == 'function') cb = isproject;
    const snipper = ora('downloading template...');
    snipper.start();
    const tmp = join(home, '.longz-templates');
    console.log()
    if (exists(tmp)) {
        if(is_project) {
            shelljs.rm('-rf', tmp);
        }else {
            return typeof cb == 'function' && cb(snipper, tmp);
        }
    }

    shelljs.mkdir('-p', tmp);

    download('cancelv5/mobx-react-ts-startkit', tmp, { clone: true }, function (err) {
        if (err) return console.log(chalk.red(err));
        if(typeof cb == 'function') cb(snipper, tmp);
    })
}