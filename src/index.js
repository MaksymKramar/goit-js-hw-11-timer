const refs = {
  timer:document.querySelector('#timer-1'),
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'), 
}

class CountdownTimer{

  constructor(selector,targetDate,days,hours,mins,secs) {
    this.selector = selector;
    this.days = refs.days;
    this.hours = refs.hours;
    this.mins = refs.mins;
    this.secs = refs.secs;
    this.targetDate = targetDate;
  };
    
  startTimer() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);
    
      updateTime(time);
    }, 1000);
  }

   updateTime({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`; 
  };
  
  getTimeComponents(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return {days, hours, mins, secs}
  };
  
};

CountdownTimer = new CountdownTimer({
selector: '#timer-1',
targetDate: new Date('Jun 17, 2021'),
});
  




// const targetDate = new Date('May 21, 2021')

// console.log(targetDate)
  


// function getTimeComponents(time) {
// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const secs = Math.floor((time % (1000 * 60)) / 1000);

// return {days, hours, mins, secs}
// };

// console.log(getTimeComponents(targetDate))