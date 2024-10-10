let eventsData;

function drawCalendar(data) {
    document.addEventListener('DOMContentLoaded', function () {
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
        getData();
        calendar.render();
    });
};

async function getData() {
    const LOCAL_API_URL = 'http://localhost:3000/events';
    const response = await axios.get(LOCAL_API_URL);
    console.log(responde.data);
}

document.addEventListener('DOMContentLoaded', drawCalendar(eventsData));