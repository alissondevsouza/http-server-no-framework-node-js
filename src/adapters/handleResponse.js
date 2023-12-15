function handleResponse(response) {

    const productsResponse = JSON.stringify(response);

    const responseAllProducts = {
        code: response.code,
        message: productsResponse
    }

    return responseAllProducts;
}

export { 
    handleResponse 
}