let eventsData;

function drawCalendar(data) {
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
    
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          initialDate: '2024-10-07',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          },
          events: data,
        });
    
        calendar.render();
      });
};

 document.addEventListener('DOMContentLoaded', drawCalendar(eventsData));