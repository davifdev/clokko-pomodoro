let isRunning = false;

self.onmessage = function (e) {
  if (isRunning) return;
  isRunning = true;

  const taskState = e.data;
  const { activeTask, secondsRemaining } = taskState;

  const endDate = activeTask.startDate + secondsRemaining * 1000;
  const now = Date.now();
  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  function tick() {
    self.postMessage(countDownSeconds);

    const now = Date.now();
    countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000);
  }

  tick();
};
