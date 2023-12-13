function handleErrorRoute() {

    return { code: 400, message: 'The requested route was not found on the server' };
}

export {
    handleErrorRoute
}