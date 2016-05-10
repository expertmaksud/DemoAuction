module.exports = {

    addUser: function (data, next) {
        User.create(
            {
                UserName: data.UserName,
                CompanyName: data.CompanyName,
                Email: data.Email,
                PhoneNo: data.PhoneNo
            }).exec(function (err, user) {
                if (err) {
                    throw err;
                }
                next(user);
            })
    }
};