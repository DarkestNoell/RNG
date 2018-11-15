<script>
    var quizStarted = false;
    var promoShown = false;
    var currQuestion = 0;
    var correctAnswers = 0;
    var opts1 = ["Cronos","Lt. Data","Dyson","Dolly","As a Trojan Bull","Munich","Forbidden Planet"];
    var opts2 = ["Talos","WALL-E","Sony","Polly","For religious ceremonies","Rome","THX 1138"];
    var opts3 = ["Minos","C-3PO","Boston Dynamics","Baarbara","For target practice","Vienna","Metropolis"];
    var answers = ["B. Talos", "C. C-3PO", "C. Boston Dynamics", "A. Dolly", "A. As a Trojan Bull", "A. Munich", "C. Metropolis"];
    var captLeft = ["I’ll be back. Again & Again", "The stone giant of Mont’e Prama", "Robot Horse on an Etruscan Bronze Mirror made in the 4th Century BC", "", "", "The Theater of Heron of Alexandria - Everything ran like clockwork!", "Heaphaestus  creating Pandora – note the hammer and anvil!From the Beazley Collection, photo courtesy of ClaudiaWagner."];
    var captRight = ["Talos model from Jason & The Argonauts", "", "", "", "", "", "False Maria"];

    var img1Paths = [
        "GodsAndRobots_QuizAssets/Images/Alamy/TerminatorRobot.jpg",
        "GodsAndRobots_QuizAssets/Images/WikimediaCommons/StoneGiant-Mont'ePrama.jpg",
        "GodsAndRobots_QuizAssets/Images/Book/EtruscanBronzeMirror.jpg",
        "GodsAndRobots_QuizAssets/Images/Book/BronzeRam.jpg",
        "GodsAndRobots_QuizAssets/Images/Library of Congress/WallStreetBull.jpg",
        "GodsAndRobots_QuizAssets/Images/Book/TheaterofHeron/TheaterOfHeron_4.JPG",
        "GodsAndRobots_QuizAssets/Images/Book/Pandora.jpg"
    ];

    var img2Paths = [
        "",
        "GodsAndRobots_QuizAssets/Images/Flickr/C-3PO.png",
        "GodsAndRobots_QuizAssets/Images/Alamy/BostonDynamics-SpotMini.jpg",
        "GodsAndRobots_QuizAssets/Images/Flickr/Dolly.jpg",
        "GodsAndRobots_QuizAssets/Images/Book/Daedalus-Cow.jpg",
        "GodsAndRobots_QuizAssets/Images/WikimediaCommons/RathausGlockenspiel.jpg",
        "GodsAndRobots_QuizAssets/Images/Book/Maria.jpg"
    ];

    var questionsP1 = [
        "Q1: The Terminator movies depicted a metallic nemesis who Absolutely. Would. Not. Stop.  ",
        "Q2: This ancient stone giant was found in Sardinia and is more than 2,700 years old.  ",
        "Q3: In ancient stories, Haephaestus was a master craftsman who created robot horses, and animated gold and silver dogs.  ",
        "Q4: This bronze ram from the 3rd century BC was one of many “living statues,” extremely lifelike copies of real animals and people.  ",
        "Q5: The Wall Street Bull is 7,000 pounds of charging bronze in front of the stock exchange in NYC.  ",
        "Q6: Moving statues were actually invented in ancient times and improved upon across the millenia. In ancient Alexandria, the automatic Theater of Heron featured moving “animatronic-like” statues of players.  ",
        "Q7: In the ancient myth, the craftsman-god Hephaestus manufactured Pandora, who was designed to be “perfect, beautiful, and evil.”"
    ];

    var questionsP2 = [
        "But who was the oldest known mythic robot, who protected ancient Crete?",
        "And yet, it bears an uncanny resemblance to what robot, played by Anthony Daniels in a long series of sci-fi movies?",
        "What modern company created this robot dog, which can fetch small objects?",
        "What was the name of the first living cloned sheep, created by scientists in Edinburgh in 1996?",
        "In antiquity, how was the remarkably lifelike sculpture of a bull created by genius inventor Daedalus used?",
        "A similar idea animates many medieval clocks, like this famous example in what European city?",
        "Many believe Pandora inspired the robot False Maria in what landmark sci-fi film by Fritz Lang?"
    ];

    var answersP1 = [
        "The answer is B!",
        "The answer is C...3PO!",
        "The answer is C!",
        "The answer is A!",
        "The answer is A!",
        "The answer is A!",
        "The answer is C!"
    ];

    var starWars = "Star Wars";
    var answersP2 = [
        "The metallic behemoth Talos was created by Haephaestus to protect Crete, by circling it three times a day, hurling rocks at any enemy ships.",
        "The 44 stone giants of Mont’e Prama, Sardinia stood 6 \u00BD feet tall, and were discovered in 1974. The original Star Wars debuted 3 years later. Coincidence?",
        "The Boston Dynamics robot pictured is the SpotMini, who will be purchasable starting in 2019.",
        "The ancient Greeks believed that techne – or craft - could create life that was “made, not born”.  Dolly was actually made (by cloning cells) and then implanted in a surrogate sheep mother and then born.",
        "Pasiphae was the mother of the famed and ferocious Minotaur, and she lured a bull to mate with her by hiding inside Daedalus’s realistic statue bull.",
        "The famous Munich Rathaus  Glockenspiel clock strikes twice a day, and the 32 moving figures enact a 12–15 minute story.",
        "This silent classic made in 1927 features the evil inventor Frederesen’s robot unleashing a box of chaos upon the city"
    ];

    var questionRight = [
        "7 out of 7   Perfect score! You are a ROBOT GENIUS",
        "6 out of 7   Great Score! DOES COMPUTE",
        "5 out of 7   Good Work! NO UPGRADE REQUIRED",
        "4 out of 7   Better than chance!",
        "3 out of 7   Don’t fret. Automate!",
        "2 out of 7   Leave perfection to the robots.",
        "1 out of 7   Brave try, human!",
        "0 out of 7   Don’t feel bad. All robots worship the number zero."
    ];

    jquery(window).resize(function(){
        console.log(jquery(window).width());
        if(quizStarted && jquery(window).width() <= 633)
        {
            jquery(".quiz-container-mobile").show();
            jquery(".quiz-container").hide();
        }else if(quizStarted){
            jquery(".quiz-container").show();
            jquery(".quiz-container-mobile").hide();
        }else if(promoShown && jquery(window).width() <= 633)
        {
            jquery(".promo-container-mobile").show();
            jquery(".promo-container").hide();
        }else if(promoShown){
            jquery(".promo-container").show();
            jquery(".promo-container-mobile").hide();
        }
    });

    var btns = jquery('.options button');
    for(var i = 0; i < btns.length; i++)
    {
        jquery(btns[i]).click(function(){
            if(jquery(this).find('h4').text() == answers[currQuestion])
            {
                correctAnswers++;
            }
        });
    }

    function nextQuestion(){
        currQuestion++;
        changeImgs();
        changeCaps();
        changeQuestions();
        changeAnswerText();

        if(currQuestion >= 7) {showResultContainer(); quizStarted = false; return;}
        jquery(".opt-1 h4").text("A. " + opts1[currQuestion]);
        jquery(".opt-2 h4").text("B. " + opts2[currQuestion]);
        jquery(".opt-3 h4").text("C. " + opts3[currQuestion]);

        if(currQuestion == 2 || currQuestion == 4)
        {
            jquery(".dolly-p2").hide();
            jquery(".star-wars-p2").hide();
            jquery(".answer-p2").show();
        }

        if(currQuestion == 2 || currQuestion == 5)
        {
            var test = jquery(".img-2").show();
            test.show();
        }

        if(currQuestion == 1 || currQuestion == 3)
        {
            if(currQuestion == 1){
                jquery(".star-wars-p2").show();
            }else if(currQuestion == 3)
            {
                jquery(".dolly-p2").show();
            }
            jquery(".answer-p2").hide();
        }

        hideAnswers();
    }


    function showResultContainer()
    {
        jquery(".quiz-container-mobile").hide();
        jquery(".quiz-container").hide();
        jquery(".results-container").show();
    }


    function changeImgs()
    {
        var imageLeft = jquery(".img-1 img");
        var imageRight = jquery(".img-2 img");
        jquery(imageLeft).attr("src", img1Paths[currQuestion]);
        jquery(imageRight).attr("src", img2Paths[currQuestion])
    }

    function changeCaps()
    {
        jquery(".capt-left").text(captLeft[currQuestion]);
        jquery(".capt-right").text(captRight[currQuestion]);
    }

    function changeQuestions()
    {
        jquery(".q-p1").text(questionsP1[currQuestion]);
        jquery(".q-p2").text(questionsP2[currQuestion]);
    }

    function changeAnswerText()
    {
        jquery(".answer-p1").text(answersP1[currQuestion]);
        jquery(".answer-p2").text(answersP2[currQuestion]);
    }

    function hideAnswers()
    {
        jquery(".next-question-btn").hide();
        jquery(".answer-container").hide();
        if(currQuestion != 2 && currQuestion != 5){
            jquery(".img-2").hide();
        }
    }

    function showAnswers()
    {
        if(currQuestion == 6)
        {
            jquery(".see-score-button").show();
        }else{
            jquery(".next-question-btn").show();
        }
        jquery(".img-2").show();
        jquery(".answer-container").show();
    }

    function showInstructions()
    {
        jquery(".welcome-container").hide();
        jquery(".instruction-container").show();
    }

    function startQuiz()
    {
        quizStarted = true;
        jquery(".instruction-container").hide();
        if(jquery(window).width() <= 992) {jquery(".quiz-container-mobile").show();}
        else{jquery(".quiz-container").show();}
        hideAnswers();
    }

    function showLastContainers()
    {
        jquery(".quiz-container").hide();
        jquery(".quiz-container-mobile").hide();
        jquery(".score").text(questionRight[7-correctAnswers]);
        promoShown = true;
        quizStarted = false;
        jquery(".results-container").hide();
        jquery(".result-share-container").show();
        if(jquery(window).width() > 992){
            jquery(".promo-container").show();
        }else{
            jquery(".promo-container-mobile").show();
        }
    }
</script>