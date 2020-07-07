function initfield(num,numname,answers){
  //number num
var answerSpan = document.getElementById('answer'+num);// get the box

var answerMathField = MQ.MathField(answerSpan, {
  handlers: {
    edit: function() {
      var enteredMath = answerMathField.latex(); // Get entered math in LaTeX format
      correct = checka(enteredMath,num,answers); //display green check if correct
    }
  }
});
return answerMathField;
}


initfield(1,"",["2^7", "2^{3+4}", "2^{4+3}"]);
initfield(2,"",["2^4", "2^{7-3}"]);
initfield(3,"",["6^4", "\\left(2\\cdot3\\right)^4", "\\left(3\\cdot2\\right)^4"]);
initfield(4,"",["2^4", "\\left(\\frac{6}{3}\\right)^4"]);
initfield(5,"",["5^8", "5^{2\\cdot4}", "5^{4\\cdot2}"]);
initfield(6,"",["100"]);
initfield(7,"",["1000"]);
initfield(8,"",["10000"]);
initfield(9,"",["10"]);
initfield(10,"",["1"]);



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