class User {

    constructor(id, address) {
        this.id = id;
        this.address = address;
    }

    getLat() {
        return this.address.geo.lat;
    }

    getLng() {
        return this.address.geo.lng;
    }
}

module.exports = User;