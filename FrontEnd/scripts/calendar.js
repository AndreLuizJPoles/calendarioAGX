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
        let dateString = `${eventDate.getFullYear()}-`;
        if(eventDate.getMonth() < 9) {
            dateString += `0${eventDate.getMonth() + 1}-`;
        }else{
            dateString += `${eventDate.getMonth() + 1}-`;
        }
        if(eventDate.getDate() < 9) {
            dateString += `0${eventDate.getDate() + 1}`;
        }else{
            dateString += `${eventDate.getDate() + 1}`;
        }
        aux.push({
            title: event.title,
            start: dateString,
            id: event._id
        });
    });
    console.log(aux);
    return aux;
}

document.addEventListener('DOMContentLoaded',drawCalendar());