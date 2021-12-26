module.exports = app => {
  const emp = require("../controllers/employee.controller.js");

  var router = require("express").Router();

  // Create a new Employee
  router.post("/cb", emp.create);

  // Retrieve all Employees
  router.get("/cbPrs", emp.findAllPresentEmp);

  // Retrieve all Employees
  router.get("/cbAbs", emp.findAllAbsentEmp);

  // Retrieve a single Employee with id
  router.get("/cb/:id", emp.findOne);

  // Update a Employee Present with id
  router.put("/cbPrs/:id", emp.updatePresentIn);

  // Update a Employee Not Present with id
  router.put("/cbAbs/:id", emp.updatePresentOut);


  // Delete a Employee with id
  router.delete("/cb/:id", emp.delete);

  // Delete all Employees
  router.delete("/cb", emp.deleteAll);

  app.use('', router);
};
