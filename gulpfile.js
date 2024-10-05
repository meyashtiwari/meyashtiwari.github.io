import { series } from 'gulp';
import { exec } from 'child_process';

function buildSite(cb) {
    exec('bun run build', function (err, stdout, stderr) {
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

export default series(buildSite);