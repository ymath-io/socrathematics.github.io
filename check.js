function initfield(num,numname,answers){
    //number x
  var answerSpan = document.getElementById('answer'+num);
  var answerMathField = MQ.MathField(answerSpan, {
    handlers: {
      edit: function() {
        var enteredMath = answerMathField.latex(); // Get entered math in LaTeX format
        correct = checka(enteredMath,num,answers);

     
/*
     */
      }
    }
  });

  
return answerMathField;
}



//to check the answers!
    function checka(l,n, answers){
    if (answers.includes(l)){
    document.getElementById("answer"+n).style.color="var(--success)";
    document.getElementById("tu"+n).style.display="inline";
    return true
    }
else{document.getElementById("answer"+n).style.color="var(--dark)";
    document.getElementById("tu"+n).style.display="none";
    return false
    }
    }
