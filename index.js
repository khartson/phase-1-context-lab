/* Your Code Here */
// Employee class declaration
class Employee {
    constructor(arr) {
        this.firstName     = arr[0];
        this.familyName    = arr[1]; 
        this.title         = arr[2];
        this.payPerHour    = arr[3]; 
        this.timeInEvents  = []; 
        this.timeOutEvents = [];
    }
}

// create employee from array of personal info 
function createEmployeeRecord(arr) {
    return new Employee(arr); 
}

// for an array of info, create employee records 
function createEmployeeRecords(dir) {
    return dir.map(createEmployeeRecord); 
}

// add time out to employee record
function createTimeInEvent(time) {
    let info = {
        type: "TimeIn",
        hour: parseInt(time.split(' ')[1]),
        date: time.split(' ')[0], 
    }
    this.timeInEvents.push(info); 
    return this; 
}

// add time out to employee record
function createTimeOutEvent(time) {
    let info = {
        type: 'TimeOut',
        hour: parseInt(time.split(' ')[1]),  
        date: time.split(' ')[0],
    }
    this.timeOutEvents.push(info);
    return this; 
}

// find hours worked on date 
function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents
    .filter((day) => day.date === date)
    .map((date) => date.hour);

    let timeOut = this.timeOutEvents
    .filter((day) => day.date === date)
    .map((date) => date.hour);

    return (timeOut - timeIn) / 100; 
}

// calculate wages earned on a given date
function wagesEarnedOnDate(date) {
    return (hoursWorkedOnDate.call(this, date) * this.payPerHour);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// given a first name, find employee in directory 
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find((emp) => emp.firstName === firstName); 
}

// calculates payroll for employee directory 
function calculatePayroll(dir) {
    return dir.map((emp) => allWagesFor.call(emp))
    .reduce((x, y) => (x + y), 0);  
}