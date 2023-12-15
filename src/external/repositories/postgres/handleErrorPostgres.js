function handleErrorPostgres(error) {

    const messageError = {
        code: error.code,
        message: error.message
    }

    const responseError = {
        code: error.code,
        message: JSON.stringify(messageError)
    }

    return responseError;
}

export { handleErrorPostgres };