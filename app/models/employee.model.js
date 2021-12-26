module.exports = (sequelize, Sequelize) => {
  const emp = sequelize.define("employees", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    },
    mail: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.BIGINT
    },
    presence: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  },);

  return emp;
};
