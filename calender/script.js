const currentDate = document.querySelector(".current-date");
   daysTag = document.querySelector(".days");
   prevNextIcon = document.querySelectorAll(".icons span");

   // Getting new date, current year and month
   let date = new Date(),
       currYear = date.getFullYear(),
       currMonth = date.getMonth();
   console.log(date, currYear, currMonth);

   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December'];

   const renderCalendar = () => {
       //getting the First date of month
       let firsetDayOfMonth = new Date(currYear, currMonth, 1).getDay();
       console.log("firsetDayOfMonth = " + firsetDayOfMonth);


       //getting the last date of month
       let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
       console.log("lastDateofMonth = " + lastDateofMonth);

       //getting the last Day of month
       let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
       console.log("lastDayofMonth = " + lastDayofMonth);

       //getting the last date of last month
       let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
       console.log("lastDateofLastMonth = " + lastDateofLastMonth);

       let liTag = '';

       //creating li of prevoius month last days
       for (let i = firsetDayOfMonth; i > 0; i--) {
           console.log(lastDateofLastMonth - i + 1);
           liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
       }

       // creating li of all days of current month
       for (let i = 1; i <= lastDateofMonth; i++) {
           // console.log(i);

           // adding active class to li if the current day ,month , year matched.

           let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";

           liTag += `<li class="${isToday}">${i}</li>`;
       }

       // creating li of next month first days
       for (let i = lastDayofMonth; i < 6; i++) {
           // console.log(i);

           liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
       }

       currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
       daysTag.innerHTML = liTag;
   }

   renderCalendar();


   prevNextIcon.forEach(icon => {
       //adding click event on both icons
       icon.addEventListener("click", () => {
           console.log(icon);

           //if clicked icon is previous icon then decrement current month by 1 else increment it by 1 
           currMonth = icon.id == "prev" ? currMonth - 1 : currMonth + 1;


           // if current month is less than 0 or greater than 11
           if (currMonth < 0 || currMonth > 11) {
               //creating a new date of current year & month and pass it as date value
               date = new Date(currYear, currMonth);
               currYear = date.getFullYear();
               currMonth = date.getMonth();
           } else {
               //else pass new Date as date value
               date = new Date();
           }
           renderCalendar();
       });


   });