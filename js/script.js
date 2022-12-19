let timerAudio = new Audio("/sound/timer expired.mp3");

// CLOCK

let a, mydate, mytime;

setInterval(() => {
    a = new Date();
    mydate = a.toLocaleDateString();
    mytime = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById("date").innerText = mydate;
    document.getElementById("time").innerHTML = mytime;
}, 1000);

// STOP WATCH

let sw_hours = 0, sw_minutes = 0, sw_seconds = 0, sw_time, clr;
sw_time = sw_hours + ":" + sw_minutes + ":" + sw_seconds;
document.getElementById("sw_time_display").innerHTML = sw_time;

function start_stop_watch() {
    sw_start.classList.add("disabled");
    sw_pause.classList.remove("disabled");
    sw_reset.classList.remove("disabled");
    clr = setInterval(() => {
        sw_seconds = sw_seconds + 1;
        if (sw_seconds == 60) {
            sw_seconds = 0;
            sw_minutes = sw_minutes + 1;
        }
        if (sw_minutes == 60) {
            sw_minutes = 0;
            sw_hours = sw_hours + 1;
        }
        sw_time = sw_hours + ":" + sw_minutes + ":" + sw_seconds;
        document.getElementById("sw_time_display").innerHTML = sw_time;
    }, 1000);
}

function pause_stop_watch() {
    sw_pause.classList.add("disabled");
    sw_start.classList.remove("disabled");
    clearInterval(clr);
}

// Code for working with a toggle switch for play and pause
// function sw_toggle_play_pause() {
//     if (sw_toggle.checked) {
//         clr = setInterval(() => {
//             sw_seconds = sw_seconds + 1;
//             if (sw_seconds == 60) {
//                 sw_seconds = 0;
//                 sw_minutes = sw_minutes + 1;
//             }
//             if (sw_minutes == 60) {
//                 sw_minutes = 0;
//                 sw_hours = sw_hours + 1;
//             }
//             sw_time = sw_hours + ":" + sw_minutes + ":" + sw_seconds;
//             document.getElementById("sw_time_display").innerHTML = sw_time;
//         }, 1000);
//     } else {
//         clearInterval(clr);
//     }
// }

function reset_stop_watch() {
    sw_start.classList.remove("disabled");
    sw_pause.classList.add("disabled");
    sw_reset.classList.add("disabled");
    clearInterval(clr);
    sw_hours = sw_minutes = sw_seconds = 0;
    sw_time = sw_hours + ":" + sw_minutes + ":" + sw_seconds;
    document.getElementById("sw_time_display").innerHTML = sw_time;
}

// TIMER

let Hours = 0, Minutes = 0, Seconds = 0, clr2, timer_time;
timer_time = Hours + ":" + Minutes + ":" + Seconds;
document.getElementById("timerDisplay").innerHTML = timer_time;

function PlayTimer() {
    timerPlay.classList.add("disabled");
    timerPause.classList.remove("disabled");
    timerReset.classList.remove("disabled");
    Hours = document.getElementById("timerHours").value;
    Minutes = document.getElementById("timerMinutes").value;
    Seconds = document.getElementById("timerSeconds").value;

    clr2 = setInterval(() => {
        Seconds = Seconds - 1;
        if (Seconds < 0 && Minutes >= 1) {
            Seconds = 59;
            Minutes = Minutes - 1;
        }
        if (Minutes < 0 && Hours >= 1) {
            Minutes = 59;
            Hours = Hours - 1;
        }
        if (Hours == 0 && Minutes == 0 && Seconds < 0) {
            ResetTimer();
        }
        timer_time = Hours + ":" + Minutes + ":" + Seconds;
        document.getElementById("timerDisplay").innerHTML = timer_time;
    }, 1000);
}

function PauseTimer() {
    timerPause.classList.add("disabled");
    timerPlay.classList.remove("disabled");
    clearInterval(clr2);
}

function ResetTimer() {
    timerAudio.play();
    timerPlay.classList.remove("disabled");
    timerPause.classList.add("disabled");
    timerReset.classList.add("disabled");
    clearInterval(clr2);
    Hours = Minutes = Seconds = 0;
    timer_time = Hours + ":" + Minutes + ":" + Seconds;
    document.getElementById("timerDisplay").innerHTML = timer_time;
}

// ALARM

let h = 0, m = 0, s = 0, alarmTime, nowTime;
alarmTime = h + ":" + m + ":" + s;
document.getElementById("alarmDisplay").innerHTML = alarmTime;

function setAlarm() {
    alarmSet.classList.add("disabled");
    alarmReset.classList.remove("disabled");
    h = document.getElementById("alarmHours").value;
    m = document.getElementById("alarmMinutes").value;
    s = document.getElementById("alarmSeconds").value;
    alarmTime = h + ":" + m + ":" + s;
    document.getElementById("alarmDisplay").innerHTML = alarmTime;

    setInterval(() => {
        b = new Date();
        // nowTime = b.getHours() + ":" + b.getMinutes() + ":" + b.getSeconds();
        // document.getElementById("nowDisplay").innerHTML = nowTime;
        if (h == b.getHours() && m == b.getMinutes() && s == b.getSeconds()) {
            timerAudio.play();
        }
    }, 1000);
}

function resetAlarm() {
    alarmSet.classList.remove("disabled");
    alarmReset.classList.add("disabled");
    h = m = s = 0;
    alarmTime = h + ":" + m + ":" + s;
    document.getElementById("alarmDisplay").innerHTML = alarmTime;
}