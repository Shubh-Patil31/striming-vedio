const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promoise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
