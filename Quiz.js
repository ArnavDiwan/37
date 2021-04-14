class Quiz{
    constructor(){

    }

    getState(){
        var gameStateRef = database1.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database1.ref('/').update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
         var contestant = new Contestant();
            var contestantCountref = await database1.ref('contestantCount').once("value");
            if(contestantCountref.exists()){
                contestantCount = contestantCountref.val();
                contestant.getCount();
            }
           
        }

        
    }

    play(){
        var question = new Question()
        question.display();
        question.hide();
        background("yellow");
        fill(0);
        textSize(30);
        text("RESULT OF THE QUIZ!", 340, 50);
        text("------------------------------", 320, 65);
        Contestant.getPlayerInfo();
        if(allContestants !== undefined){
            debugger;
            var display_Answers = 230;
            fill("Blue")
            textSize(20);
            text("NOTE: Contestants with correct answers are highlighted in green color!", 130, 230);

            for(var plr in allContestants){
                debugger;
                var correctAns = "3";
                if(correctAns === allContestants[plr].answer){
                    fill("green")
                }
                else{
                    fill("red");
                }
                
                display_Answers+=30;
                text(allContestants[plr].name + ":" + allContestants[plr].answer, 250, display_Answers)

            }
        }
    }

        
}
