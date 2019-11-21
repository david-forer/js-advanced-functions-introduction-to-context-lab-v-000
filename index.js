// Your code here
function createEmployeeRecord(employeeData) {
  let newEmployee = {};
  
  newEmployee.firstName = employeeData[0];
  newEmployee.familyName = employeeData[1];
  newEmployee.title = employeeData[2];
  newEmployee.payPerHour = employeeData[3];
  newEmployee.timeInEvents = [];
  newEmployee.timeOutEvents = [];
  
  return newEmployee;
}

function createEmployeeRecords(employeesArray) {
  return employeesArray.map(createEmployeeRecord);
}

function createTimeInEvent(employeeRecord, dateStamp) {
  let timeInObj = {
    type: "TimeIn",
    hour: parseInt(dateStamp.slice(11, 16),10),
    date:dateStamp.slice(0,10)
  };
  employeeRecord.timeInEvents.push(timeInObj);
  return employeeRecord;
}

function createTimeOutEvent(employeeRecord, dateStamp) {
  let timeOutObj = {
    type: "TimeOut",
    hour: parseInt(dateStamp.slice(11, 16),10),
    date:dateStamp.slice(0,10)
  };
  employeeRecord.timeOutEvents.push(timeOutObj);
  return employeeRecord;
}

function hoursWorkedOnDate(employeeRecord, date) {
  let timeIn = employeeRecord.timeInEvents.find(e => e.date === date);
  let timeOut = employeerecord.timeOutEvents.find(e => e.date === date);
  let hoursWorked = (timeOut.hour - timeIn.hour)/100;
  
  return hoursWorked;
}




