class Contestant {
  constructor(){
      this.index = null;
      this.answer = 0;
      this.name = null;
  }
  
  getCount(){
      var contestantCountRef = database1.ref('contestantCount');
      contestantCountRef.on("value", (data)=>{
          contestantCount = data.val(); 
      })
  }

  updateCount(count){
      database1.ref('/').update({
          contestantCount: count
      });
  }

  update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database1.ref(contestantIndex).set({
          name:this.name,
          answer:this.answer
      });
  }

  static getPlayerInfo(){
      var contestantInfoRef = database1.ref('contestants');
      contestantInfoRef.on("value", (data)=>{
          allContestants = data.val();
      })
  }
}