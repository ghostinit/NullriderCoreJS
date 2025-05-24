const fs = require('fs-extra');
const path = require('path');

const levels = ['debug', 'info', 'warn', 'error'];
const logDir = path.join(__dirname, 'logs');
const logFile = path.join(logDir, 'app.log');

fs.ensureDirSync(logDir);

class Logger {
  constructor(prefix = 'CORE') {
    this.prefix = prefix;
  }

  log(level, message) {
    if (!levels.includes(level)) {
      throw new Error(`Invalid log level: ${level}`);
    }
    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] [${this.prefix}] [${level.toUpperCase()}]: ${message}`;

    console[level](formattedMessage);
    fs.appendFileSync(logFile, formattedMessage + '\n');
  }

  debug(msg) { this.log('debug', msg); }
  info(msg) { this.log('info', msg); }
  warn(msg) { this.log('warn', msg); }
  error(msg) { this.log('error', msg); }
}

module.exports = Logger;
