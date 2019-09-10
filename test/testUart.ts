import { logger } from '../src/index';
import { serialport } from '@passoa/serialport';
import { createWriteStream } from 'fs';
let s = new serialport('COM1');
let l = new logger();
let f = createWriteStream('log.txt');
s.pipe(l).pipe(f);
setTimeout(() => {
	console.log(l.cur());
}, 3000);
