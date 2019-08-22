module.exports = function (app) {
	// Our model controllers (rather than routes)
	// const users = require('./routes/users');
	// const trips = require('./routes/trips');
	const users = require('./routes/users');
	const towers = require('./routes/towers');
	const levels = require('./routes/levels');
	const surveyRiskAssessments = require('./routes/surveyRiskAssessments');
	const application = require('./routes/application');

	// const authCheckMiddleware = require('./config/middleware/authCheck');
	// app.use('/apis/trips', authCheckMiddleware);
	// app.use('/apis/pricing', authCheckMiddleware);

	const authCheckMiddleware = require('./config/middleware/authCheck');
	// app.use('/apis/towers', authCheckMiddleware);
	// app.use('/apis/levels', authCheckMiddleware);
	// app.use('/apis/surveyRiskAssessments', authCheckMiddleware);
	// app.use('/assessment', authCheckMiddleware);
	// app.use('/', authCheckMiddleware);

	// app.use('/apis/users', users);
	// app.use('/apis/trips', trips);
	//other routes..

	app.use('/apis/users', users);
	app.use('/apis/towers', towers);
	app.use('/apis/levels', levels);
	app.use('/apis/surveyRiskAssessments', surveyRiskAssessments);
	app.use('/assessment', surveyRiskAssessments);
	// app.use('/', application);
}