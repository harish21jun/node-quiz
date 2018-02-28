var models = require('../models/models.js');

exports.calculate = function(req, res, next) {
	var with_comments = [];
	var no_comments;
	var userCount;
	models.User.count().then(function(count) {
		userCount=count;
	});
	models.Quiz.count().then(function(quizzes) {
		models.Comment.findAll({
			where: {
				publish: true
			}
		}).then(function(comments) {
			no_comments = quizzes;
			for (var i = 0; i < comments.length; i++) {
				if (with_comments[comments[i].QuizId] === undefined) {
					no_comments--;
				}
				with_comments[comments[i].QuizId] = 1;
			}
			res.render('statistics', {
				page : 'statistics',
				quizzes: quizzes,
				comments: comments.length,
				avg: comments.length / quizzes,
				without_comments: no_comments,
				with_comments: quizzes - no_comments,
				users:userCount,
				questionAttempted:req.session.user.incorrectCount+req.session.user.correctCount,
				score:req.session.user.correctCount/(req.session.user.incorrectCount+req.session.user.correctCount)*100,
				errors: []
			});
		});
	});
}
