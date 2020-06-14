  //number one
  var answerSpan = document.getElementById('answer1');
  var answerMathField = MQ.MathField(answerSpan, {
    handlers: {
      edit: function() {
        var enteredMath = answerMathField.latex(); // Get entered math in LaTeX format
        checka(enteredMath,"1","a","\\alpha","alpha");
      }
    }
  });

    //number two
      var answerSpan2 = document.getElementById('answer2');
  var answerMathField2 = MQ.MathField(answerSpan2, {
    handlers: {
      edit: function() {
        var enteredMath2 = answerMathField2.latex(); // Get entered math in LaTeX format
        checka(enteredMath2,"2","a+b","b+a","a+B","B+a");
      }
    }
  });
    //number three
      var answerSpan3 = document.getElementById('answer3');
  var answerMathField3 = MQ.MathField(answerSpan3, {
    handlers: {
      edit: function() {
        var enteredMath3 = answerMathField3.latex(); // Get entered math in LaTeX format
        checka(enteredMath3,"3","\\sin a+B","\\sin a+b","\\sin B+a","\\sin b+a");
      }
    }
  });
      //number four
      var answerSpan4 = document.getElementById('answer4');
  var answerMathField4 = MQ.MathField(answerSpan4, {
    handlers: {
      edit: function() {
        var enteredMath4 = answerMathField4.latex(); // Get entered math in LaTeX format
        checka(enteredMath4,"4","\\cos a+B","\\cos a+b","\\cos B+a","\\cos b+a");
      }
    }
  });

  //number five
      var answerSpan5 = document.getElementById('answer5');
  var answerMathField5 = MQ.MathField(answerSpan5, {
    handlers: {
      edit: function() {
        var enteredMath5 = answerMathField5.latex(); // Get entered math in LaTeX format
        checka(enteredMath5,"5","\\sin B","\\sin b",null);
      }
    }
  });

  //number six
      var answerSpan6 = document.getElementById('answer6');
  var answerMathField6 = MQ.MathField(answerSpan6, {
    handlers: {
      edit: function() {
        var enteredMath6 = answerMathField6.latex(); // Get entered math in LaTeX format
        checka(enteredMath6,"6","\\cos B","\\cos b",null);
      }
    }
  });
  
    //number seven
      var answerSpan7 = document.getElementById('answer7');
  var answerMathField7 = MQ.MathField(answerSpan7, {
    handlers: {
      edit: function() {
        var enteredMath7 = answerMathField7.latex(); // Get entered math in LaTeX format
        checka(enteredMath7,"7","\\sin a\\sin B","\\sin B\\sin a","\\sin a\\sin b","\\sin b\\sin a");
      }
    }
  });
  
  //number eight
      var answerSpan8 = document.getElementById('answer8');
  var answerMathField8 = MQ.MathField(answerSpan8, {
    handlers: {
      edit: function() {
        var enteredMath8 = answerMathField8.latex(); // Get entered math in LaTeX format
        checka(enteredMath8,"8","\\cos a\\sin B","\\sin B\\cos a","\\cos a\\sin b","\\sin b\\cos a");
      }
    }
  });

//number nine
      var answerSpan9 = document.getElementById('answer9');
  var answerMathField9 = MQ.MathField(answerSpan9, {
    handlers: {
      edit: function() {
        var enteredMath9 = answerMathField9.latex(); // Get entered math in LaTeX format
        checka(enteredMath9,"9","\\sin a\\cos B","\\cos B\\sin a","\\sin a\\cos b","\\cos b\\sin a");
      }
    }
  });
  
  //number ten
      var answerSpan10 = document.getElementById('answer10');
  var answerMathField10 = MQ.MathField(answerSpan10, {
    handlers: {
      edit: function() {
        var enteredMath10 = answerMathField10.latex(); // Get entered math in LaTeX format
        checka(enteredMath10,"10","\\cos a\\cos B","\\cos B\\cos a","\\cos a\\cos b","\\cos b\\cos a");
      }
    }
  });

//to check the answers!
    function checka(l,n, a1,a2,a3=null,a4=null,a5=null,a6=null,a7=null,a8=null){
    if (l==a1 || l==a2 || l==a3 || l==a4 || l==a5 || l==a6 || l==a7 || l==a8){
    document.getElementById("answer"+n).style.color="var(--success)";
    document.getElementById("tu"+n).style.display="inline";
    }
else{document.getElementById("answer"+n).style.color="var(--dark)";
    document.getElementById("tu"+n).style.display="none";
    }
    }