const express = require("express")
var app = express();
var path = require('path');

var indexRouter = require('./index');
var usersRouter = require('./users');
var productsRouter = require('./products');
var authRouter = require('./auth');


const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};



// app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', authenticateJWT, usersRouter);
// app.use('/products', authenticateJWT, productsRouter);
app.use('/products', productsRouter);





app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, '../view/index.html'));
});
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });


// error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

module.exports = app