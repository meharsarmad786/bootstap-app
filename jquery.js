$(document).ready(function(){
  $("#cal").on("click", function(){
  //calculate carbohydrate
  
  var a = parseInt($("#op1 option:selected").val());
  var b = parseInt($("#op2 option:selected").val());
  var c = parseInt($("#op3 option:selected").val());
  var d = parseInt($("#op4 option:selected").val());
  var e = parseInt($("#op5 option:selected").val());

  var carbohydrate = a+b+c+d+e;
  
  //calculate calories
  var mi = $("#op1 option:selected").data("cal");
  var be = $("#op2 option:selected").data("cal");
  var fr = $("#op3 option:selected").data("cal");
  var vg = $("#op4 option:selected").data("cal");
  var gr = $("#op5 option:selected").data("cal");

  var calorie = mi+be+fr+vg+gr;

  $("#display").removeClass("d-none");
  $("#re1").html(carbohydrate);
  $("#re2").html(calorie);
  });
});