const { Logger } = require('./index');

const logger = new Logger('TEST');

logger.debug('This is a debug message');
logger.info('This is an info message');
logger.warn('This is a warning');
logger.error('This is an error');
