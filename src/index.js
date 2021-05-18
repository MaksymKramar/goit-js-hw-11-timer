// const refs = {
//   timer:document.querySelector('#timer-1'),
//   // days: document.querySelector('[data-value="days"]'),
//   // hours: document.querySelector('[data-value="hours"]'),
//   // mins: document.querySelector('[data-value="mins"]'),
//   // secs: document.querySelector('[data-value="secs"]'), 
// }

class CountdownTimer{

  constructor({selector,targetDate}) {
    this.selector = selector;    
    this.targetDate = targetDate;
    this.referens =  document.querySelector(this.selector);
    this.days = document.querySelector(`${this.selector} [data-value="days"]`);
    this.hours = document.querySelector(`${this.selector} [data-value="hours"]`)
    this.mins = document.querySelector(`${this.selector} [data-value="mins"]`)
    this.secs = document.querySelector(`${this.selector} [data-value="secs"]`)

  };
    
  start() {
    this.referens.style.display = 'inline-flex';
    setInterval(() => {
      const currentTime = Date.now();
    console.log(this.targetDate.getTime());
      const deltaTime = this.targetDate.getTime() - currentTime;
      const time = this.getTimeComponents(deltaTime);
    console.log(time)
      this.updateTime(time);
    }, 1000);
  };

   updateTime({ days, hours, mins, secs }) {
    this.days.textContent = `${days}`;
    this.hours.textContent = `${hours}`;
    this.mins.textContent = `${mins}`;
    this.secs.textContent = `${secs}`; 
  };
  
  getTimeComponents(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  return {days, hours, mins, secs}
  };
  
  pad(value) {
    return String(value).padStart(2, '0');
  }
};

const countdownTimer = new CountdownTimer({
selector: '#timer-1',
targetDate: new Date('Jun 18, 2021'),
});

countdownTimer.start()




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