const geolib = require('geolib')
var User = require('./models/User')

const getClosestUser = (users, { lat, lng }) => {
    closestUser = new User(users[0].id, users[0].address);
    closestDistance = getDistance({ lat, lng }, { userLat: closestUser.lat, userLng: closestUser.lng })
    users.forEach(element => {
        user = new User(element.id, element.address);
        distance = getDistance({ lat, lng }, { userLat: user.lat, userLng: user.lng })
        if (distance < closestDistance) {
            closestUser = user;
            closestDistance = distance
        }
    });
    return closestUser
}

const getDistance = ({ lat, lng }, { userLat, userLng }) => {
    return geolib.getDistance(
        { latitude: lat, longitude: lng },
        { latitude: userLat, longitude: userLng }
    );
}

module.exports = getClosestUser