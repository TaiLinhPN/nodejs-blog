const createError = (errCode, massage) => {
    return {status: errCode, massage}
}
module.exports = {createError}