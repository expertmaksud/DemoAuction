/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add: function(req, res) {
        var data = (req.body) ? req.body : undefined
        UserService.addUser(data, function(success) {
            res.json(success);
        });
    }
};

