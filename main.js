const hour = document.getElementById("hr");
const minute = document.getElementById("mn");
const second = document.getElementById("sc");

// Use Setinterval in buit function
setInterval(() => {
  // Load the date function to get hours, minutes, seconds and date & day

  let day = new Date();
  //   lets separate hour, minute and second
  let hh = day.getHours() * 30;
  //   Get the hour and multiply it with 30 deg pop while minute and second with 6 deg pop
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  //   lets change the style according to the value we have
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minute.style.transform = `rotateZ(${mm}deg)`;
  second.style.transform = `rotateZ(${ss}deg)`;
});
