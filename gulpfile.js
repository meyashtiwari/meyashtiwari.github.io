const { series } = require('gulp');
var exec = require('child_process').exec;


function buildSite(cb) {
    exec('npm run build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
}

// function createRelease(cb) {
//     src(['public/*.html', 'public/*.js'])
//         .pipe(dest('dist'));
//     cb();
// }
  
exports.default = series(buildSite);