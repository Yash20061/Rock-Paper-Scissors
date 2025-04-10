
      let score =  JSON.parse(localStorage.getItem('score')) || {
        wins: 0, 
        loses: 0, 
        Tie: 0
      }
      updateScoreElement();

    
       
    
      console.log();

      function pickcomputerMove(){
          const randomNumber = Math.random();
          let computerMove = '';
          if(randomNumber >= 0 && randomNumber< 1/3)
          {
          computerMove = 'Rock';
        
    
          }
          else if(randomNumber >= 1/3 && randomNumber < 2/3)
          {
            computerMove = 'Paper';
          
    
          }
          else {
          
            computerMove = 'Scissors'
    
          }
          return computerMove;
        }


      function playGame(playerMove){
          const computerMove =  pickcomputerMove();
      
          let result = '';

          if(playerMove === 'Paper'){
              if(computerMove === 'Rock'){
              result = 'you win';
            }
            else if(computerMove === 'Paper'){
              result =  'tie';

            }
            else{
              result = 'you lose';
            }
          }

          else if(playerMove === 'Rock'){
           
            if(computerMove === 'Rock'){
              result = 'tie';
            }
            else if(computerMove === 'Paper'){
              result = 'you lose';

            }
            else{
              result = 'you win';
          }
          }

          else if(playerMove ==='Scissors'){
            
            if(computerMove === 'Rock'){
              result = 'you lose';
            }
            else if(computerMove === 'Paper'){
              result = 'you win';

            }
            else{
              result = 'tie';
            }
          }

          if(result === 'you win'){
            score.wins += 1;
            
          }
          else if(result === 'you lose'){
            score.loses += 1;
          }
          else if( result === 'tie'){
            score.Tie += 1;
          }
          localStorage.setItem('score' , JSON.stringify(score));
          document.querySelector('.js-result').innerHTML = result;
          document.querySelector('.js-moves').innerHTML = `  you     <img src="${playerMove}-emoji.png" class="move-png">  <img src="${computerMove}-emoji.png" class="move-png"> computer`;

          
          updateScoreElement();



        


         
          }
          function updateScoreElement(){
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} loses: ${score.loses} Tie: ${score.Tie}`;

          }
   
      let flag = false;
      let id;

      function AutoPlay(){

        if(!flag){
          document.querySelector('.auto-button').innerHTML = 'Stop';

          id = setInterval(function(){

         const playerMove =  pickcomputerMove();
          playGame(playerMove);

           } , 1000);
        flag = true;

         }
        else{
          document.querySelector('.auto-button').innerHTML = 'Autoplay';
          clearInterval(id);
          flag = false;
          score.wins = 0;
          score.loses = 0;
          score.Tie = 0;
          localStorage.removeItem('score');
          updateScoreElement();
      }


      }

      document.querySelector('.rock-button').addEventListener('click' , () => {
        playGame('Rock');});

      document.querySelector('.paper-button').addEventListener('click' , () => {
        playGame('Paper');});

      document.querySelector('.scissors-button').addEventListener('click' , () => {
         playGame('Scissors');
      });

      document.body.addEventListener('keydown' , (event) => {
        let key = event.key;
        if(event.key === 'r'){
          playGame('Rock');
        }


        else if(event.key === 'p')
        {
          playGame('Paper');
        }
      

        else if(event.key === 's')
        {
          playGame('Scissors');
        }
      



   
      });
      
       
        
          
        
    