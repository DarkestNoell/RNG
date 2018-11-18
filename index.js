//Variables/elements
    var quizStarted = false;
    var promoShown = false;
    var currQuestion = 0;
    var correctAnswers = 0;
    
    var quiz = $(".all-quiz");
    
    function findEle(searchTerm)
    {
        return $(quiz).find(searchTerm);
    }
    
    var pcl = findEle(".photo-credit-left");
    var pcr = findEle(".photo-credit-right");
    var opt1H4 = findEle(".opt-1 h4");
    var opt2H4 = findEle(".opt-2 h4");
    var opt3H4 = findEle(".opt-3 h4");
    var dollyp2 = findEle(".dolly-p2");
    var img1 = findEle(".img-1 img");
    var starWarsp2 = findEle(".star-wars-p2");
    var answerP2 = findEle(".answer-p2");
    var qcm = findEle(".quiz-container-mobile");
    var resultsContainer = findEle(".results-container");
    var qp1 = findEle(".q-p1");
    var qp2 = findEle(".q-p2");
    var captLeftText = findEle(".capt-left");
    var captRightText = findEle(".capt-right");
    var answerP1 =$(".answer-p1");
    var nqb = findEle("next-question-btn");
    var ac = findEle(".answer-container");
    var ssb = findEle(".see-score-button");
    var nqb = findEle(".next-question-btn");
    var wc = findEle(".welcome-container");
    var bcmrq = findEle(".border-container .mrq ");
    var ic = findEle(".instruction-container");
    var qb = findEle(".quiz-border");
    var score = findEle(".score");
    var scorep2 = findEle(".score-p2");
    var resultShareContainer = findEle(".result-share-container");
    var pcm = findEle(".promo-container-mobile");
    var tbm = findEle(".twitter-mention-button");
    
    
    // Quiz Data
    var opts1 = ["Cronos","Lt. Data","Dyson","Dolly","As a Trojan Bull","Munich","Forbidden Planet"]; 
    var opts2 = ["Talos","WALL-E","Sony","Polly","For religious ceremonies","Rome","THX 1138"]; 
    var opts3 = ["Minos","C-3PO","Boston Dynamics","Baarbara","For target practice","Vienna","Metropolis"]; 
    var answers = ["B. Talos", "C. C-3PO", "C. Boston Dynamics", "A. Dolly", "A. As a Trojan Bull", "A. Munich", "C. Metropolis"];
    var captLeft = ["I’ll be back. Again & Again", "The stone giant of Mont’e Prama", "Robot Horse on an Etruscan Bronze Mirror made in the 4th Century BC", "", "", "The Theater of Heron of Alexandria - Everything ran like clockwork!", "Heaphaestus  creating Pandora – note the hammer and anvil!From the Beazley Collection, photo courtesy of ClaudiaWagner."];
    var captRight = ["Talos model from Jason & The Argonauts", "", "", "", "", "", "False Maria"];
    var creditIndex = 2;
    var credits = [
        "Photo courtesy of Atman Victor / Alamy Stock Photo",
        "Photo courtesy of Ray Harryhausen/Jason and the Argonauts (1963)",
        "Photo courtesy of Prc90",
        "Photo courtesy of: Darryl W. Moran Photography",
        "Photo courtesy of:  Benjay2345 - http://starwars.wikia.com/wiki/C-3PO",
        "Robot horse on a bronze mirror,4th century BC Photo courtesy of Serge Oboukhoff © BnF/CNRS-Maison Archéologie & Ethnologie, 2011.",
        "Photo courtesy of PACIFIC PRESS / Alamy Stock Photo",
        "Photo courtesy of Scala / Art Resource, NY.",
        "Image credit: Toni Barros",
        "Photo courtesy of  Carol M. Highsmith",
        "Daedalus, making a realistic cow for Pasiphae, 5th century Photo courtesy of Alinari",
        "Model of the Theatre of HeronPhoto courtesy of Kotsanas Museum of Ancient Greek Technology",
        "Photo courtesy of Jebulon",  
        "Hephaestus creating Pandora, by PoniatowskiPhoto courtesy of Claudia Wagner.",
        "Image credit: The evil Maschinenmensch (machine-human) Maria Photo courtesy of Adoc-photos / Art Resource, NY."
    ];
    
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
        "And yet, it bears an uncanny resemblance to what robot, played by Anthony Daniels in a long series of sci-fi movies?",
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

    var questionRightP2 = [
        "Perfect score! You are a ROBOT GENIUS",
        "Great Score! DOES COMPUTE",
        "Good Work! NO UPGRADE REQUIRED",
        "Better than chance!",
        "Don’t fret. Automate!",
        "Leave perfection to the robots.",
        "Brave try, human!",
        "Don’t feel bad. All robots worship the number zero."
    ]
    
       var btns = $('.options button');
    for(var i = 0; i < btns.length; i++)
    {
        $(btns[i]).click(function(){
            if($(this).find('h4').text() == answers[currQuestion])
            {
                correctAnswers++;
            }
        });
    }

    function nextQuestion(){
        window.scrollTo(0, 0);
        currQuestion++;
        changeImgs();
        changeCaps();
        changeQuestions();
        changeAnswerText();
        $(pcl).text(credits[creditIndex]);
        creditIndex++;
        var test = $(pcr);
        console.log(test);
        $(test).text(credits[creditIndex]);
        creditIndex++;

        if(currQuestion >= 7) {showResultContainer(); quizStarted = false; return;}
        $(opt1H4).text("A. " + opts1[currQuestion]);
        $(opt2H4).text("B. " + opts2[currQuestion]);
        $(opt3H4).text("C. " + opts3[currQuestion]);

        if(currQuestion == 2 || currQuestion == 4)
        {
            $(dollyp2).hide();
            $(starWarsp2).hide();
            $(answerP2).show();
        }

        if(currQuestion == 2 || currQuestion == 5)
        {
            $(".img-2").show();
            $(".img-2 img").show();
        }

        if(currQuestion == 1 || currQuestion == 3)
        {
            if(currQuestion == 1){
                $(starWarsp2).show();
            }else if(currQuestion == 3)
            {
                $(dollyp2).show();
            }
            $(answerP2).hide();
        }

        hideAnswers();
    }


    function showResultContainer()
    {
        $(qcm).hide();
        $(resultsContainer).show();
    }


    function changeImgs()
    {
        var imageLeft = $(".img-1 img");
        var imageRight = $(".img-2 img");
        $(imageLeft).attr("src", img1Paths[currQuestion]);
        $(imageRight).attr("src", img2Paths[currQuestion])
    }

    function changeCaps()
    {
        $(captLeftText).text(captLeft[currQuestion]);
        $(captRightText).text(captRight[currQuestion]);
    }

    function changeQuestions()
    {
        $(qp1).text(questionsP1[currQuestion]);
        $(qp2).text(questionsP2[currQuestion]);
    }

    function changeAnswerText()
    {
        $(answerP1).text(answersP1[currQuestion]);
        $(answerP2).text(answersP2[currQuestion]);
    }

    function hideAnswers()
    {
        $(nqb).hide();
        $(ac).hide();
        if(currQuestion != 2 && currQuestion != 5){
            $(".img-2").hide();
        }
    }

    function showAnswers()
    {
        if(currQuestion == 6)
        {
            $(ssb).show();
        }else{
            $(nqb).show();
        }
        $(".img-2").show();
        $(ac).show();
    }

    function showInstructions()
    {
        $(wc).hide();
        $(ic).show();
    }

    function startQuiz()
    {
        quizStarted = true;
        $(bcmrq).hide();
        $(qb).show();
        $(ic).hide();
        $(qcm).show();
        $(".border-container").css("height","50px");
        $('.border-container').css('background-image', 'url(' + 'Border.svg' + ')');
        var ele = $(".border-container-1");
        $(ele).removeClass("border-container-1");
        $(ele).addClass("border-container");
        window.scrollTo(0, 0);
        hideAnswers();
    }

    function showLastContainers()
    {
        $(qcm).hide();
        $(score).text(correctAnswers + " out of 7");
        $(scorep2).text(questionRightP2[7-correctAnswers]);
        promoShown = true;
        quizStarted = false;
        $(resultsContainer).hide();
        $(resultShareContainer).show();
        $(pcm).show();
        $(tbm).attr("data-text", "I took the Robots and Gods quiz and got a " + correctAnswers + "/7!");
        window.scrollTo(0, 0);
    }