module.exports = (err) => {
    let error = {};
    if (err.name == 'ValidationError' && err.isJoi == true) {
        error.message = err.message.replace(/"/g, "");
    }
    else if(typeof err == 'string'){
        error.message = err;
    }
    else {
        error = err;
        if(error.status == 401) error.message = 'unauthorized';
    }
    error.status = error.status || 400;
    return error;
}