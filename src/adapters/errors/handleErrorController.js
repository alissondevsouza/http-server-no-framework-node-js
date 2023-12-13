function handleErrorController(error) {

    return { code: error.code, message: error.message}

}

export { handleErrorController };