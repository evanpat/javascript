const fs = require('fs');

let stdin = fs.openSync("/dev/stdin", "rs");

const read = function (message) {
    fs.writeSync(process.stdout.fd, message + " ");
    let s = '';
    let buf = Buffer.alloc(1);
    fs.readSync(stdin, buf, 0, 1, null);
    while ((buf[0] != 10) && (buf[0] != 13)) {
        s += buf;
        fs.readSync(stdin, buf, 0, 1, null);
    }
    return s;
}

const w = read()
const h = read()
