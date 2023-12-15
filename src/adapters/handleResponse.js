function handleResponse(response) {
  
    if (Array.isArray(response) && response.length === 0) {

        const messageNoProducts = {
            code: 200,
            message: 'No products were found in the database'
        }

        const responseNoProducts = {
            code: 200,
            message: JSON.stringify(messageNoProducts)
        }
      
        return responseNoProducts;
    }

    if (response === undefined) {
        const messageNoProducts = {
            code: 200,
            message: 'Product not found in the database'
        }

        const responseNoProducts = {
            code: 200,
            message: JSON.stringify(messageNoProducts)
        }
      
        return responseNoProducts;

    }

    const productsResponse = JSON.stringify(response);

    const responseAllProducts = {
        code: 200,
        message: productsResponse
    }

    return responseAllProducts;
}

export { 
    handleResponse 
}