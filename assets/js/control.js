// Timer Central
const minutes = document.querySelector("#min");
const seconds = document.querySelector("#sec");
const timerCenter = document.querySelector("#timer");

const btnStart = document.querySelector("#btnStart");
const btnStop = document.querySelector("#btnStop");

// SetInterval
let timeTask;
let timeStudy;
let pauseTimeStudy = false;

// Control Total Study
const timeStart = document.querySelector("#starting");
const timeEnd = document.querySelector("#curHhMm");
const timeSec = document.querySelector("#curSs");
const btnStartStudy = document.querySelector("#startStudy");
const btnPauseStudy = document.querySelector("#pauseStudy");
const btnStopStudy = document.querySelector("#stopStudy");

btnPauseStudy.disabled = true;
btnStopStudy.disabled = true;
btnStop.disabled = true;

function startStudy() {
  const hora = new Date();
  timeStart.innerHTML = hora.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  let h = 0;
  let m = 0;
  let s = 0;
  pauseTimeStudy = 1000;
  timeEnd.innerHTML = "00:00";
  timeSec.innerHTML = "00";
  timeEnd.style.color = "#00CC6A";
  timeSec.style.color = "#fff";

  // return;

  clearTimeout(timeStudy);

  btnStartStudy.disabled = true;
  btnPauseStudy.disabled = false;
  btnStopStudy.disabled = false;

  timeStudy = setInterval(() => {
    if (pauseTimeStudy) {
      s++;
      if (s == 59) {
        s = 0;
        m++;
      }
      if (m == 59) {
        m = 0;
        h++;
      }

      hh = h.toString().length === 1 ? `0${h}` : h;
      mm = m.toString().length === 1 ? `0${m}` : m;
      ss = s.toString().length === 1 ? `0${s}` : s;

      // console.log(`${hh}:${mm}:${ss}`);
      timeEnd.innerHTML = `${hh}:${mm}`;
      timeSec.innerHTML = `${ss}`;
    }
  }, 1000);
}

function pauseStudy() {
  if (pauseTimeStudy) {
    pauseTimeStudy = false;
  } else {
    pauseTimeStudy = true;
  }
}

function stopStudy() {
  btnStartStudy.disabled = false;
  btnPauseStudy.disabled = true;
  btnStopStudy.disabled = true;

  timeStart.innerHTML = "00:00";
  timeEnd.innerHTML = "00:00";
  timeSec.innerHTML = "00";
  timeEnd.style.color = "#fff";
  timeSec.style.color = "#fff";

  clearTimeout(timeStudy);
}

// Controls Timer Center

function startTimer() {
  // Task #1
  const min = document.querySelector("#task1min").value;
  const sec = document.querySelector("#task1sec").value;

  // Validation of minutes

  if (min === "0" || min === "00" || min === "") {
    if (sec === "0") {
      alert("Informe os minutos ou segundos!");
      return false;
    }
  }

  if (min < 0 || min > 59) {
    alert("Informe um intervalor de 1 a 59 minutos!");
    return false;
  }

  // Validation of seconds

  if (sec === "") {
    alert("Informe os segundos!");
    return false;
  }

  if (sec < 0 || sec > 59) {
    alert("Informe um intervalor de 1 a 59 segundos!");
    return false;
  }

  timerCenter.style.color = "#fff";
  btnStop.disabled = false;
  btnStart.disabled = true;

  let m = 0;
  let s = 0;

  // Start Time Task #1
  timeTask = setInterval(() => {
    s++;
    if (s === 59) {
      m++;
      s = 0;
    }

    minutes.innerHTML = m.toString().length === 1 ? `0${m}` : m;
    seconds.innerHTML = s.toString().length === 1 ? `0${s}` : s;

    if (m === parseInt(min)) {
      if (s === parseInt(sec)) {
        clearTimeout(timeTask);
        // timerCenter.style.color = "#37474F";
        timerCenter.style.color = "#FFB900";

        btnStop.disabled = true;
        btnStart.disabled = false;
      }
    }
  }, 1000);
}

function stopTimer() {
  clearTimeout(timeTask);

  btnStop.disabled = true;
  btnStart.disabled = false;

  timerCenter.style.color = "#000";

  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
}
