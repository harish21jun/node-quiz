module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Quiz', {
      question: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Missing question'
          }
        }
      },

      options: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Missing options'
          }
        }
      },

      answer: {
        type: DataTypes.STRING,//[DataTypes.STRING],
        validate: {
          notEmpty: {
            msg: 'Missing answer'
          }
        }
      },
      image: {
        type: DataTypes.STRING
      },
	  thematic: {
		  type : DataTypes.STRING
	  }
    }
  );
}
