'use strict';

module.exports = function(req, res, next) {
	if (req.protocol === 'http') {
		return res.redirect(301, `https://${req.hostname}${req.originalUrl}`);
	} else {
		return next();
	}
};
