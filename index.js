const refs = {
    btnStart: document.querySelector('button[data-action="start]'),
    btnStop: document.querySelector('button[data-action="stop]')
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

  refs.btnStart.addEventListener('click', () => {
      timer.start();
  })

  refs.btnStop/addEventListener('click', () => {
      timer.stop();
  })

  const timer = {
      intervalId: null,
      isActive: false,
      start() {
          
        if(this.isActive){
              return;
          };

          this.isActive = true;
          const max = colors.length - 1;

          this.intervalId = setInterval(() => {

          }, 1000)
          
      },

      stop() {
          clearInterval(this.intervalId);
          this.isActive = false;
      }
  }