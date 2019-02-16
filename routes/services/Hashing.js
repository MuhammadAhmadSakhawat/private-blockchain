const SHA256 = require('crypto-js/sha256');

class Hashing{
    constructor() {

    }

    async generateHash(data) {
        return new Promise((resolve, reject) => {
            let hash = SHA256(JSON.stringify(data)).toString();
            console.log('Generated hash : ' + hash);
            resolve(hash);
        });
    }
}

module.exports = Hashing