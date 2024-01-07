"use strict";

function task1() {
  var r = prompt("Enter radius");

  if (r === NaN) {
    alert('Invalid value');
  } else {
    alert(Math.PI * r * r);
  }

  console.log(r);
}

function task2() {
  var s = prompt("Enter length");
  var t = prompt("Enter time");

  if (s <= 0) {
    alert('Invalid length value');
  }

  if (t <= 0) {
    alert('Invalid time value');
  } else {
    alert(s / t);
  }
}

function task3() {
  var d = prompt("Enter money");
  var e = 0.91;

  if (d <= 0) {
    alert("Invalid value");
  } else {
    alert(d * e);
  }

  Math.floor(d * e);
}