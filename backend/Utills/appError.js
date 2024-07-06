class createError extends Error {
  constructor(message, statuscode) {
    super(message);

    this.statuscode = statuscode;
    this.status = `${statuscode}`.startsWith("4") ? "Fail" : "Error";

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = createError
  