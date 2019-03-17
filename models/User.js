class User {

    constructor(id, address) {
        this.id = id;
        this.lat = address.geo.lat;
        this.lng = address.geo.lng;
    }
}

module.exports = User;