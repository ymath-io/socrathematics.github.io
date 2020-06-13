  //number one
  var answerSpan = document.getElementById('answer1');
  var answerMathField = MQ.MathField(answerSpan, {
    handlers: {
      edit: function() {
        var enteredMath = answerMathField.latex(); // Get entered math in LaTeX format
        checka(enteredMath,"1","\\cos x","\\cos\\ x");
      }
    }
  });

    //number two
      var answerSpan2 = document.getElementById('answer2');
  var answerMathField2 = MQ.MathField(answerSpan2, {
    handlers: {
      edit: function() {
        var enteredMath2 = answerMathField2.latex(); // Get entered math in LaTeX format
        checka(enteredMath2,"2","-\\sin x","-\\sin\\ x");
      }
    }
  });
    //number three
      var answerSpan3 = document.getElementById('answer3');
  var answerMathField3 = MQ.MathField(answerSpan3, {
    handlers: {
      edit: function() {
        var enteredMath3 = answerMathField3.latex(); // Get entered math in LaTeX format
        checka(enteredMath3,"3","\\frac{1}{x}",null);
      }
    }
  });

//to check the answers!
    function checka(l,n, a1,a2){
    if (l==a1 || l==a2){
    document.getElementById("answer"+n).style.color="var(--success)";
    document.getElementById("tu"+n).style.display="inline";
    }
else{document.getElementById("answer"+n).style.color="var(--dark)";
    document.getElementById("tu"+n).style.display="none";
    }
    }