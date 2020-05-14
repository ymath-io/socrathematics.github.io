
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){

		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="text" class="form-control form-control-sm" name="question'+i+'" value="">'
					//+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			//'<div class="question">' + questions[i].question + '</div>'
			/*+*/ '<pre></pre><div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
	quizContainer.className = "form-group";
	submitButton.className = "btn btn-success form-group";
}

    showQuestions(questions, quizContainer);

	function showResults(questions, quizContainer, resultsContainer){

	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');

	// keep track of user's answers
	var userAnswer = '';
	var correct = false;

	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']')||{}).value;


		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			correct=true;}
	}

	// show number of correct answers out of total
	if (correct){
	var message = "Correct!";
	var type = "alert alert-success"}
	else {
	var message = "Try Again.";
	var type = "alert alert-danger"}
	resultsContainer.innerHTML = message;
	resultsContainer.className = type;
	resultsContainer.setAttribute("role","alert")
}

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
