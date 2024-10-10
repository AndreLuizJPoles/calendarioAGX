const cancelAdd = document.getElementById('cancelAdd');
const addPopup = document.getElementById('addPopup');

cancelAdd.addEventListener('click', closeAdd);

function closeAdd() {
    addPopup.style.display = 'none';
};

function popupAddEvent() {
    addPopup.style.display = 'block';
};

async function addEvent() {
    const title = document.getElementById('titleInputAdd');
    const date = document.getElementById('dateInputAdd');

    if (title == "" || date == "") {
        alert("Please fill all fields");
        return;
    }

    const LOCAL_API_URL_ADD = 'http://localhost:3000/events';
    try {
        const response = await axios.post(LOCAL_API_URL_ADD, 
            {
                title: title.value,
                date: date.value
            }
        );

        title.value = '';
        date.value = '';
        closeAdd();
        alert(response.data);
        location.reload();
    } catch (error) {
        console.log(error);
    }
}

function deleteEvent() {
    alert("Event deleted");//TODO: Alterar para deletar evento
};

function updateEvent() {
    alert("Event updated");//TODO: Alterar para atualizar evento
};