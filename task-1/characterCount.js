const stringLength=(string) =>{

    return string.length > 0 && string.length<10 ? string.length : 'invalid characters'
}
module.exports = stringLength