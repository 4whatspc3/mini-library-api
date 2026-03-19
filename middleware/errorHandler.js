const errorHandler = ((err, req, res, next) => {
    console.error(err.stack);

    const status = err.statusCode || 500;

    res.status(status).json({
        error: err.name || "InternalServerError",
        message: err.message || "An unexpected error occurred on the server",
    });
});

export default errorHandler;