var scores,roundScores,activePlayer,dice,gamePlaying;
init();



document.querySelector('.btn-roll').addEventListener('click',function(){
    // 1. Random number   
    if(gamePlaying){
        dice = Math.floor(Math.random()*6) +1;


        // 2.Display the number
          var diceDOM = document.querySelector('.dice');
          diceDOM.style.display = 'block';
          diceDOM.src='dice-' + dice + '.png';
    
        //3.Update the score only if the number was not 1
        if (dice!==1){
            //Add Score
            roundScores+=dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;
        }else{
            //Change the Active Player
            nextPlayer();
    
        }
    }
 
});
document.querySelector('.btn-hold').addEventListener('click',function(){
       if(gamePlaying){
  //Add current score to the global score
  scores[activePlayer]+=roundScores;
  //Update the UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 

//Check if the player won the game
    if(scores[activePlayer]>=100){
        document.querySelector('#name-'+ activePlayer).textContent= 'Winner';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }else{
        //next player
        nextPlayer();
    }

       }



});
   var nextPlayer = function(){
    activePlayer===0 ? activePlayer=1 : activePlayer=0;
    roundScores = 0;

    document.getElementById('current-0').textContent = '0';  //to add  the score of the active player from 0
    document.getElementById('current-1').textContent = '0';  //to add  the score of the active player from 0


   // document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    document.querySelector('.dice').style.display = 'none';


   }
   document.querySelector('.btn-new').addEventListener('click',init);

  


     function init(){
    scores = [0,0];
    roundScores = 0;
    activePlayer = 0;
    gamePlaying=true;
    document.querySelector('.dice').style.display='none'; 
    
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player-1';
    document.getElementById('name-1').textContent = 'Player-2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
   }