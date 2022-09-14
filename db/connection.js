var driver = {
    mysql: "mysql",
    mongo: "mongo"
}

function connect(driver) {

    console.log('====================================');
    console.log(process.env.PORT);
    console.log('====================================');
    var path = "./" + driver
    require(path)
}

module.exports = { connect, driver }