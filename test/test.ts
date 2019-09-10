import { logger } from '../src/index';
import { exec } from 'child_process';
import { createWriteStream } from 'fs';
let s = exec('adb logcat');
let l = new logger();
let f = createWriteStream('log.txt');
if (s.stdout) {
	s.stdout.pipe(l).pipe(f);
}
setTimeout(() => {
	console.log(l.cur());
}, 3000);
