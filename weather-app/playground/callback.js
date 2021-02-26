var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Stalin'
    }
    setTimeout(() => callback(user), 3000);
}

getUser(7, (user) => {
    console.log(user);
});