const minute = document.getElementById('minute');
const second = document.getElementById('second');
minute.value = 0;
second.value = 0;
const dM = document.getElementById('dM');
const dS = document.getElementById('dS');
let IntervalID;
let mIntervalID;
let sIntervalID;
let s;
let count = 0;
let pM;
let pS;

const convert = () => {
    pM = parseInt(minute.value, 10);
    pS = parseInt(second.value, 10);
    if(-1 < pM 
        && pM < 1000 
        && -1 < pS
        && pS < 60
        && !isNaN(pM)
        && !isNaN(pS)){
          s = pM * 60 + pS;
          // console.log('convert');

    }else {
        alert('mukou');
        throw new Error('無効な数字です');
    }
    
};
const start = () => {
    if(count === 0) {
        try {
          convert();
        }catch (error) {
          console.error('条件を満たしてない: ' , error.message)
          return;
        }
    }
    count++;
    originDp();
    interval();
};
const stop = () => {
    clearTimeout(IntervalID);
};
const originDp = () => {
  if(s >= 60) {
    dM.value = Math.floor(s / 60);
  }else {
    dM.value = 0;
  }
  dS.value = s % 60;
  
}
const interval = () => {
  IntervalID = setInterval(function() {
      if(s === 0) {
          stop();
          count = 0;
          alert('時間です');
      }else if (s % 60 === 0) {
          dM.value = (s / 60) - 1;
      }
      s--;
      if(s !== -1) {
        dS.value = s % 60;
        // console.log(s);
      }
      
    }, 1000 );
};
const reset = () => {
    stop();
    convert();
}
