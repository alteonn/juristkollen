// Logging service
const LOG_LEVELS = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug'
} as const;

export const logger = {
  error: (message: string, error?: unknown) => {
    console.error(message, error);
    // Implement error reporting service
  },
  
  warn: (message: string, data?: unknown) => {
    console.warn(message, data);
  },
  
  info: (message: string, data?: unknown) => {
    console.info(message, data);
  },
  
  debug: (message: string, data?: unknown) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(message, data);
    }
  }
};