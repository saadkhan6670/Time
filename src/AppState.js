import { observable } from 'mobx';

class AppState {
@observable timeinHr = 0;
@observable timeinMin = 0;
@observable timeinSec = 0;
@observable intervalID;
@observable intervalID2;
@observable intervalID3;
@observable count = 0;


  startTimer() {
    if(this.count === 0) {
    this.count = 1;

    this.intervalID = setInterval(() => {
        if(this.timeinHr >= 24) {
        this.timeinHr =0;
       }
      this.timeinHr += 1}, 3600000);

      this.intervalID2 = setInterval(() => {
      if(this.timeinMin >= 60) {
        this.timeinMin =0;
             } this.timeinMin += 1; }, 60000 );

      this.intervalID3 = setInterval(() => {
      if(this.timeinSec >= 60) {
        this.timeinSec =0;
        }
       this.timeinSec += 1;
        }, 1000 );
    }
  }
  

  resetTimer() {
this.count= 0;
    this.timeinHr , this.timeinMin , this.timeinSec = 0;
   clearInterval(this.intervalID)
  clearInterval(this.intervalID2)
    clearInterval(this.intervalID3)

  }

  stopTimer(){
    this.count= 0;
clearInterval(this.intervalID)
  clearInterval(this.intervalID2)
    clearInterval(this.intervalID3)
}
}

export default AppState;
