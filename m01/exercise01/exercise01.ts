/*
    QUESSTION 1
    Find area of rectangle
*/

//Define variable and assign the value
let _width: number = 3;
let _length: number = 5;
let _output: number = 0;

//Process calculation
_output = _width * _length;
console.log(_output);

/*
    QUESTION 2
    Find perimeter of rectangle
*/

//Process calculation
_output = (2 * _length) + (2 * _width);
console.log(_output);

/* 
    QUESTION 3
    Find diameter, circumference and area of a circle
*/

//Define variable and assign the value
let _radius: number = 5;
let _phi: number = Math.PI;
let _diameter: number = 0;
let _circumference: number = 0;
let _area: number = 0;

//Process Calculation
_diameter = _radius * 2;
_circumference = _phi * _diameter;
_area = _phi * (_radius ** 2);

console.log(`Diameter: ${_diameter}\nCircumference: ${_circumference.toFixed(4)}\nArea: ${_area.toFixed(4)}`)
/*
    QUESTION 4
    Find angles of triangle if two angles are given.
 */

// Define variable and assign the value
let _a: number = 80;
let _b: number = 65;

//Process calculation
_output = 180 - _a - _b;
console.log(_output);

/*
    QUESTION 5
    Convert days to years, months and days
    (Notes: 1 year : 365 days, 1 month : 30 days).
 */

//Define variable and assign the value
const daysInYear: number = 365;
const daysInMonth: number = 30;

let _year: number = 0;
let _month: number = 0;
let _day: number = 0;
let remainingDaysAfterYears = 0;

let _exampleDays1: number = 400;
let _exampleDays2: number = 366;

//Process calculation
_year = Math.round(_exampleDays1 / daysInYear);
remainingDaysAfterYears = _exampleDays1 % daysInYear;
_month = Math.round(remainingDaysAfterYears / daysInMonth);
_day = remainingDaysAfterYears % daysInMonth;
console.log(`${_year} tahun ${_month} bulan ${_day} hari`);

_year = Math.round(_exampleDays2 / daysInYear);
remainingDaysAfterYears = _exampleDays2 % daysInYear;
_month = Math.round(remainingDaysAfterYears / daysInMonth);
_day = remainingDaysAfterYears % daysInMonth;
console.log(`${_year} tahun ${_month} bulan ${_day} hari`);

/*
    QUESTION 6
    Get difference between dates in days.
 */

//Define variable and assign the value
const startDate: Date = new Date('2022-01-20');
const endDate: Date = new Date('2022-01-22');
const differenceInMills: number = endDate.getTime() - startDate.getTime();
console.log(differenceInMills);

//Process calculation
const millisInDay: number = 24 * 60 * 60 * 1000;
console.log(millisInDay);
const differenceInDays: number = Math.round(differenceInMills / millisInDay);
console.log(`The difference between the date is ${differenceInDays} days`);