const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

function displayCalendar(year, month) {
  const date = new Date(year, month);
  date.setDate(1);

  const monthDays = document.querySelector('.days');
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayIndex = date.getDay();
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex - 1;

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  document.querySelector('.date h1').innerHTML = months[date.getMonth()];
  if (date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
    document.querySelector('.date p').innerHTML = currentDate.toDateString();
  } else {
    document.querySelector('.date p').innerHTML = date.toDateString();
  }
  
  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }
  
  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let i = 1; i <= nextDays; i++) {
    days += `<div class="next-date">${i}</div>`;
  }
  
  monthDays.innerHTML = days;
}

document.querySelector('.prev').addEventListener('click', () => {
  if (currentMonth === 0) {
    currentYear--;
    currentMonth = 11;
  } else {
    currentMonth--;
  }
  displayCalendar(currentYear, currentMonth);
});

document.querySelector('.next').addEventListener('click', () => {
  if (currentMonth === 11) {
    currentYear++;
    currentMonth = 0;
  } else {
    currentMonth++;
  }
  displayCalendar(currentYear, currentMonth);
});

displayCalendar(currentYear, currentMonth);