function handleResponseRunApplications() {

    const runApplication = {
        code: 200,
        message: 'Running application...'
    }

    const responseRunApplications = {
        code: 200,
        message:JSON.stringify(runApplication) 
    }

    return responseRunApplications;
}

export { 
    handleResponseRunApplications 
}