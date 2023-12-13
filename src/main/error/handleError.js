function handleError(response, DEFAULT_HEADER) {

    return { code: 400, message: 'An internal server error occurred while processing the request' };
}

export { handleError };