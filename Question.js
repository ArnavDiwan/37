class Question{
    constructor(){
        this.title = createElement('h1');
        this.input1 = createInput("Tell others who you are");
        this.input2 = createInput("Enter Correct Option No.");
        this.button = createButton('submit');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
       // this.contestant = contestant;
    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350, 0);

        this.question.html("Which is the fastest animal?")
        this.question.position(150, 80);
        this.option1.html("1: Elephant");
        this.option1.position(150, 100);
        this.option2.html("2: lion"); 
        this.option2.position(150, 120);
        this.option3.html("3: Cheetah");
        this.option3.position(150, 140);
        this.option4.html("4: Deer");
        this.option4.position(150, 160);

        this.input1.position(150, 230);
        this.input2.position(350, 230);
        this.button.position(290, 300);
        
        this.button.mousePressed(()=>{
            //this.contestant = contestant
            var contestant = new Contestant()
            var contesantCount;
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount+=1
            contestant.index = contesantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
            
        });

        
        
    }
}