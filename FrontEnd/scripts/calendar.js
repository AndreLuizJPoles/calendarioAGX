let eventsData = [];

function drawCalendar() {
    document.addEventListener('DOMContentLoaded', function () {
        let data = getData;
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

async function getData() {
    const LOCAL_API_URL = 'http://localhost:3000/events';
    const response = await axios.get(LOCAL_API_URL);
    let aux = [];
    response.data.forEach(event => {
        let eventDate = new Date(event.date);
        console.log(eventDate);
        let dateString = `${eventDate.getFullYear()}-${eventDate.getMonth() + 1}-`;
        if(eventDate.getDate() < 10) {
            dateString += `0${eventDate.getDate()}`;
        }else{
            dateString += `${eventDate.getDate()}`;
        }
        console.log(dateString);
        aux.push({
            title: event.title,
            start: dateString,
        });
    });
    console.log(aux);
    return aux;
}

document.addEventListener('DOMContentLoaded',drawCalendar());