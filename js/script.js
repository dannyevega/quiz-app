var userSelection;
var correct;
var incorrect;
var page = 0;

var questions = [{
	question: "What Nike sneaker was specifically created for use in Back to the Future Part II?",
	qNum: 1,
	choices: ["Nike Air Pegasus", "Nike MAG", "Nike Waffle Racer", "Nike Foamposite"],
	answer: "Nike MAG",
	image: "images/air-mag.png",
	desc: "In 2011, Nike Inc. released the Nike MAG as a result of public demand. The highly-sought after shoe was initially featured in the movie Back to the Future Part II. Famed Nike Designer, Tinker Hatfield, was asked to create the futuristic shoe for the second installment of the movie series in 1989. Stand out features included light-up panels and self-fastening shoe laces. Over 15 years later, an online petition for an official release of the shoe made it's way on sneaker forums and caught the attention of Tinker. He and footwear innovator, Tiffany Beers, began working on the shoe and in 2011, 1,500 pairs were released on eBay with all proceeds going to the Michael J. Fox Foundation for Parkinson's Disease. A total of  US $9.4 million was raised in donations with shoe prices up to US $10,000 per pair."
},
{
	question: "What shoe did Michael Jordan wear against the Utah Jazz in the 1997 NBA Finals when he played with the flu?",
	qNum: 2,
	choices: ["Air Jordan XII", "Air Jordan XI", "Air Jordan XIV", "Air Jordan IX"],
	answer: "Air Jordan XII",
	image: "images/jumpman-logo.png",
	desc: "Game 5 of the 1997 NBA finals with the Chicago Bulls and Utah Jazz will forever be known as the Michael Jordan Flu Game. While his stats for the game were pretty impressive with 38 points, 7 rebounds, 5 assists, and 3 steals, it was his ability to play through the game with the flu. Jordan was barely able to sit up before the game and fought to stand up after. He endured the hardwood for 44 minutes and scored a definitive game-clinching three-pointer that ultimately led to the Bulls 3-2 upper hand in the series with a Game 6 closeout. MJ wore the Air Jordan XII in the Black/Red colorway in Game 5 which were later nicknamed the \"Flu Games\" and will always be a reminder of his amazing performance that night. In recent years, the shoes have sold for US $104,765."
},
{
	question: "Which classic sneaker was made popular in the 1980's by Hip-Hop group Run-DMC?",
	qNum: 3,
	choices: ["adidas Superstar shell toe", "Nike Cortez", "Converse All Star", "Nike Air Max 1"],
	answer: "adidas Superstar shell toe",
	image: "images/shell-toe.png",
	desc: "The iconic Superstar sneaker was first introduced in 1969. It's unique design offered all leather uppers and the infamous rubber \"shell toe\" as a protective toe piece. The shoe was initially marketed towards NBA players with Kareem Abdul-Jabaar being the most notable player. By the mid 1970's, over 75% of the NBA were rocking these sneakers on the hardwood. In the mid 1980's, hip-hop group Run-DMC out of Queens, New York made these shoes noticeable across the country. They wore their shell toes with the tongues pushed out and the laces undone. The shell toe sneaker is still an iconic silhouette to this day."
},
{
	question: "What was the nickname of the Air Yeezy II that Nike surprise released without any warning?",
	qNum: 4,
	choices: ["Solar Red's", "Wolf Grey's", "Magma's", "Red October's"],
	answer: "Red October's",
	image: "images/red-october.png",
	desc: "On June 9, 2012, the Air Yeezy II was released in two premier color ways in Solar Red and Pure Platinum. The shoes were a limited release with only 5,000 pairs of each color way and had a price tag of US $245. The shoes were the most talked about sneakers in the game and were extremely sought after by sneakerheads. Prices skyrocketed up to US $4,000 per pair. Anticipation built for a third color way dubbed the \"Red October's\" and were surprised released on February 9, 2014 via a Nike Twitter link and sold out within seconds. Prices for the shoes were seen on eBay up to US $10,000."	
},
{
	question: "What was the first Vans model ever created?",
	qNum: 5,
	choices: ["Old Skool", "Slip-On", "Era", "Authentic"],
	answer: "Authentic",
	image: "images/authentic.png",
	desc: "The Vans dream was born in Anaheim, California on March 16, 1966. Paul Van Doren and three business partners opened up their first shop on 704 E. Broadway where customers had the unique experience of purchasing shoes that were made that day and ready for pick-up in the afternoon. The first shoe offered was the Vans #44 deck shoes, now known as the Authentic. Vans has created a huge and lasting presence in all cultures and sub-cultures from skateboarding, surf, bmx, music, and everyday casual wear. Other popular models were later introduced such as the Old Skool, Slip-On, and Era."		
}]



// hides the game area which displays the questions and the overlay which displays the feedback to the user
// once the user clicks on the 'Start' button, the game area will be displayed
$('.game-area').hide();
$('.overlay').hide();
$('#start').click(startGame);

function startGame(){
	correct = 0;
	incorrect = 0;
	$('.introduction').fadeOut();
	$('.game-area').fadeIn(3000);
	displayQuestion();
}

// gets the users selection as what they think is the correct answer and displays their selection in a div
$('.button').click(getUserSelection);

function getUserSelection(){
	userSelection = $(this).text();		
	setUserChoice(userSelection);
}

var setUserChoice = (function(){
	var $userChoice = $('#user-choice');

	return function(stringToSet){
		$userChoice.text(stringToSet);
	}

})();

// hides the game area and displays the overlay showing the user if they got the answer correct or incorrect
$('.user-submit').submit(instead(submitSelection));

function submitSelection(){
	$('.game-area').hide();
	$('.overlay').fadeIn(1500);
	checkUserSelection(userSelection);
}

function instead(fn){
	return function(e){
		e.preventDefault();
		fn.apply(this);
	};
}

$('#next').click(displayNextQuestion);

function displayNextQuestion(){
	page++;
	$('.overlay').hide();
	$('.game-area').fadeIn(3000);
	setUserChoice("");
	displayQuestion();
}

var checkUserSelection = (function(){
	var $currentQuestionFeedback = $('#current-question-feedback');

	return function(userInput){
		if (userInput === questions[page].answer) {
			$currentQuestionFeedback.text("Correct!");
			$currentQuestionFeedback.css("color", "green");
			correct++;
		} else {
			$currentQuestionFeedback.text("Incorrect");
			$currentQuestionFeedback.css("color", "red");
			incorrect++			
		}		
	}

})();

var displayQuestion = (function(){	
	var $current = $('#current-question');
	var $description = $('#description');
	var $currentQNum = $('#current-question-number');
	var $shoeImage = $("#shoe-image");

	return function(){
		var currentQuestion = questions[page];
		var choices = currentQuestion.choices;
		for(var i = 0; i < choices.length; i++){
			$('#option-' + (i + 1)).text(choices[i]);	
		}			
		$shoeImage.attr('src', currentQuestion.image);
		$current.text(currentQuestion.question);
		$description.text(currentQuestion.desc);
		$currentQNum.text(currentQuestion.qNum)
	}

})();

// NEED TO DO:
// IMPLEMENT CORRECT ANSWER COUNTER TO DISPLAY HOW MANY QUESTIONS USER GOT RIGHT
// var showUserScore = (function(){
// 	var $currentQuestionFeedback = $('#current-question-feedback');

// 	return function(){
// 		if(questions[page].qNum === 5){
// 			$currentQuestionFeedback.text("You got " + correct + " out of 5");
// 		}
// 	}

// })();

// ONCE THE LAST QUESTION IS REACHED, DISPLAY TOTAL CORRECT
// IMPLEMENT 'PLAY AGAIN' BUTTON THAT RESTARTS THE APP


// QUESTIONS FOR DANIEL
// WHY DOES TEXT SHIFT A LITTLE TO LEFT WHEN I CLICK START






