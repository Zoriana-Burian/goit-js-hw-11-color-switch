const refs = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body')
}


const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


  const timer = {
      intervalId: null,
      isActive: false,
      start() {
          
        if(this.isActive){
              return;
          };

          this.isActive = true;
          



          this.intervalId = setInterval(() => {    
          const max = colors.length - 1;
          const bgColors = randomIntegerFromInterval(0, max);
          refs.body.style.backgroundColor = colors[bgColors];
          }, 1000);
          
      },

      stop() {
          clearInterval(this.intervalId);
          this.isActive = false;
      },
  };



  refs.btnStart.addEventListener('click', timer.start.bind(timer));
  

  refs.btnStop.addEventListener('click', timer.stop.bind(timer));

  