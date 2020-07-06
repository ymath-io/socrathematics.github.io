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




/*Paste Inline JS here, or include this file from root
(that means <script src="/check.js"></script> in HTML) and paste the above lines in a separate script tag.
*/


initfield(1,"",["38"]);

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