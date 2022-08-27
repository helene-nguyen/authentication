import { errorLoggerHandling } from '../../app/services/errorLoggerHandling.js';

class ErrorApi extends Error {
  constructor(message,page, option, req, res, statusCode = 500) {
    
    super(message);
    
    statusCode === (400 || 500) ?  res.status(statusCode).redirect(page) : res.status(statusCode).render(page, option);

    //~ Log errors
    errorLoggerHandling(message, req);
  }
}

export { ErrorApi };
