const fs = require('fs');
const { resolve } = require('path');
let employees = [];
let departments = [];

module.exports.initialize = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/employees.json', (err, data) => {
      if (err) {
        reject(err);
      }
      employees = JSON.parse(data);
      resolve();
    });
    fs.readFile('./data/departments.json', (err, data) => {
      if (err) {
        reject(err);
      }
      departments = JSON.parse(data);
      resolve();
    });
  });
};

module.exports.getAllEmployees = function () {
  return new Promise((resolve, reject) => {
    if (employees.length == 0) {
      reject('No Results Returned');
    }
    resolve(employees);
  });
};

module.exports.getManagers = function () {
  return new Promise((resolve, reject) => {
    var managers = [];
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].isManager == true) {
        managers.push(employees[i]);
      }
    }
    if (managers.length == 0) {
      reject('No Results Returned');
    }
    resolve(employees);
  });
};

module.exports.getDepartments = function () {
  return new Promise((resolve, reject) => {
    if (departments.length == 0) {
      reject('No Results Returned');
    }
    resolve(departments);
  });
};
