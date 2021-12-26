const db = require("../models");
const Emp = db.empStruct;
const Op = db.Sequelize.Op;

// Create and Save a new Emp
exports.create = (req, res) => {
  console.log("creating")
  // Validate request
  if (!req.body.id && !req.body.name && !req.body.mail && !req.body.mobile && !req.body.role && !req.body.presence) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Emp
  const emp = {
    id,name,role,mail,mobile,presence
  }=req.body;

  // Save Emp in the database
  Emp.create(emp)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee."
      });
    });
};

// Retrieve all Present Employees from the database.
exports.findAllPresentEmp = (req, res) => {


  Emp.findAll({ where: {presence: 1}, attributes: ['id', 'name']},)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


// Retrieve all Absent Employees from the database.
exports.findAllAbsentEmp = (req, res) => {


  Emp.findAll({ where: {presence: 0}, attributes: ['id', 'name']},)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


// Find a single Employee with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Emp.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Employee with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Employee with id=" + id
      });
    });
};

// Update a Employee Not Present by the id in the request
exports.updatePresentOut = (req, res) => {
  const id = req.params.id;

  Emp.update({presence: 0}, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Employee with id=${id}. Maybe Employee was not found`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Employee with id=" + id
      });
    });
};


// Update a Employee Present by the id in the request
exports.updatePresentIn = (req, res) => {
  const id = req.params.id;

  Emp.update({presence: 1}, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Employee with id=${id}. Maybe Employee was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Employee with id=" + id
      });
    });
};


// Delete a Employee with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Emp.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Employee with id=" + id
      });
    });
};

// Delete all Employees from the database.
exports.deleteAll = (req, res) => {
  Emp.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Employees were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// find all published Employee
exports.findAllPublished = (req, res) => {
  Emp.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
