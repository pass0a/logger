import { Duplex } from 'stream';
export class logger extends Duplex {
	private cur_pos = 0;
	constructor() {
		super({ objectMode: true });
	}
	_read() {}
	_write(chunk: any, encoding: string, callback: (error?: Error | null) => void) {
		this.cur_pos += chunk.length;
		this.push(chunk);
		callback();
	}
	cur() {
		return this.cur_pos;
	}
}
