const fs = require('fs')

/**
 * Add user to database.
 * @param {String} userId 
 * @param {String} name 
 * @param {String} age 
 * @param {String} time 
 * @param {String} serial 
 * @param {Object} _dir 
 */
const addRegisteredUser = (userId, name, age, time, serial, _dir) => {
    const obj = { id: userId, name: name, age: age, time: time, serial: serial }
    _dir.push(obj)
    fs.writeFileSync('./src/registered.json', JSON.stringify(_dir))
}

/**
 * Check user from database.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkRegisteredUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

/**
 * Check user from serial.
 * @param {String} serial 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkRegisteredUserFromSerial = (serial, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].serial === serial) {
            status = true
        }
    })
    return status
}

/**
 * Get ID.
 * @param {String} userId
 * @param {Object} _dir
 * @returns {String}
 */
const getRegisteredUserId = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}

/**
 * Check user name from serial.
 * @param {String} serial 
 * @param {Object} _dir 
 * @returns {String}
 */
 
 const getRegisteredPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getRegisteredNameFromSerial = (serial, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].serial === serial) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].name
    }
}

/**
 * Check user age from serial.
 * @param {String} serial 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getRegisteredAgeFromSerial = (serial, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].serial === serial) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].age
    }
}

/**
 * Check user time registration from serial.
 * @param {String} serial 
 * @param {Object} _dir 
 * @returns {String}
 */
const getRegisteredTimeFromSerial = (serial, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].serial === serial) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].time
    }
}

/**
 * Check user ID from serial.
 * @param {String} serial 
 * @param {Object} _dir 
 * @returns {String}
 */
const getRegisteredIdFromSerial = (serial, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].serial === serial) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}

const getRegisteredSerialFromId = (id, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].serial
    }
}
/**
 * Get random ID.
 * @param {Object} _dir 
 * @returns {String}
 */
const getRegisteredRandomId = (_dir) => {
    return _dir[Math.floor(Math.random() * _dir.length)].id
}

module.exports = {
	getRegisteredPosition,
    addRegisteredUser,
    checkRegisteredUser,
    checkRegisteredUserFromSerial,
    getRegisteredNameFromSerial,
    getRegisteredAgeFromSerial,
    getRegisteredSerialFromId,
    getRegisteredTimeFromSerial,
    getRegisteredIdFromSerial,
    getRegisteredRandomId,
    getRegisteredUserId
}
