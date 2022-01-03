
var student1 = {
    name: "MOIZ",
    fathername: "shakeel",
    age: 18,
    result: "pass",
    gender: "male",
  };
  var student2 = {
    name: "MOIZ",
    fathername: "anonymus",
    age: 81,
    result: "pass",
    gender: "male",
  };
  var student3 = {
    name: "MOIZ",
    fathername: "anonymus",
    age: 28,
    result: "fail",
    gender: "male",
  };
  var student4 = {
    name: "MOIZ",
    fathername: "anonymus",
    age: 88,
    result: "pass",
    gender: "male",
  };
  var student5 = {
    name: "MOIZ",
    fathername: "shakeel",
    age: 83,
    result: "fail",
    gender: "male",
  };
  
  var b = [student1, student2, student3, student4, student5];
  
  var studentdata = document.getElementById("student-data");
  
  for (var i = 0; i < b.length; i++) {
    var obj = b[i];
    studentdata.innerHTML +=
      "<tr><td>" +
      obj.name +
      "</td><td>" +
      obj.fathername +
      "</td><td>" +
      obj.age +
      "</td><td>" +
      obj.result +
      "</td><td>" +
      obj.gender +
      "</td> </tr>";
  }
  
  
  function searchStd (){
      var inpval = document.getElementById("inpval");
      var showname = document.getElementById("showname");
      var showfathername = document.getElementById("showfathername");
      var showageval = document.getElementById("showage");
      var pvshowresult = document.getElementById("showresult");
      var pvshowgender = document.getElementById("showgender");
  }
  
  
  
  for (var i = 0; i<studentlist.length; );