/// <reference path="C:/Users/Vera/Desktop/HTML/typings/globals/jquery/index.d.ts"/>
$(document).ready(function () 
{ 
  var questionNumber=Math.floor(Math.random() * 5);
  var questionBank=new Array();
  var stage="#game1";
  var stage2=new Object;
  var questionLock=false;
  var numberOfQuestions;
  var score=0;
  /*m koristi da prvo izaberemo pitanje 0-10, 11-20, itd, count je brojac pitanja*/
  var m=0;
  var count = 0;
$.getJSON('Upitnik_mobile_friendly.json', function(data) 
  {

    for(i=0; i<data.quizlist.length; i++)
    {

      questionBank[i]=new Array;
      questionBank[i][0] = data.quizlist[i].question;
      questionBank[i][1] = data.quizlist[i].option1;
      questionBank[i][2] = data.quizlist[i].option2;
      questionBank[i][3] = data.quizlist[i].option3;
      questionBank[i][4] = data.quizlist[i].option4;

    }

    numberOfQuestions = questionBank.length;
    /*prikazuje broj pitanja
    alert(questionBank.length)*/
    displayQuestion();

  })//getJSON

function displayQuestion()
  {

    var rnd=Math.random()*4; 
    rnd=Math.ceil(rnd);
    var q1;
    var q2;
    var q3;
    var q4;
    /* qr je radnom pitanje
    var qr=Math.random() * 10;
    qr=Math.ceil(qr)*/
    
    
    if(rnd==1){q1=questionBank[questionNumber][1]; q2=questionBank[questionNumber][2]; q3=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];}
    if(rnd==2){q2=questionBank[questionNumber][1]; q3=questionBank[questionNumber][2]; q4=questionBank[questionNumber][3]; q1=questionBank[questionNumber][4];}
    if(rnd==3){q3=questionBank[questionNumber][1];q4=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];q2=questionBank[questionNumber][4];}
    if(rnd==4){q4=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];q3=questionBank[questionNumber][4];}

    $(stage).append('<div class = "questionText">' + questionBank[questionNumber][0] + '</div> <div id= "1" class="option">'+q1+'</div> <div id="2" class="option">'+q2+'</div> <div id="3" class="option">'+q3+'</div> <div id= "4" class="option">'+q4+'</div>');
    $('.option').click(function()
    {

      if(questionLock==false)
      {

        questionLock=true; 
        //correct answer
        if(this.id==rnd)
        { 
          score++;
        }

        setTimeout(function(){changeQuestion()},500);
        //pricekaj 1000 milisekundi i promjeni pitanje
      }

    })

  }   

function changeQuestion()
  {
    m=m+5;
    questionNumber=Math.floor(Math.random() * 5) + m;
    count++;

    if(stage=="#game1"){stage2="#game1";stage="#game2";}
    else{stage2="#game2"; stage="#game1";}
  
    if(count < 12){displayQuestion();}
    else{displayFinalSlide();}
  
    $(stage2).animate({"right": "+=800px"} , "slow" , function() { $(stage2).css('right' , '-800px'); $(stage2).empty(); });
    $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});

  }//change question
    
function displayFinalSlide()
  {

    $(stage).append(" <div class='questionText' >Završio si kviz!<br><br>Ukupni broj bodova: 12"+"<br>Broj točnih odgovora: "+score+"</div>");
    
  }//display final slide

});