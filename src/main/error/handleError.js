function handleError() {

    return { code: 400, message: 'An internal server error occurred while processing the request' };
}

export { handleError };