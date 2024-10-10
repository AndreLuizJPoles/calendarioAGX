const cancelAdd = document.getElementById('cancelAdd');
const cancelDelete = document.getElementById('cancelDelete');
const addPopup = document.getElementById('addPopup');
const deletePopup = document.getElementById('deletePopup');

cancelAdd.addEventListener('click', closeAdd);
cancelDelete.addEventListener('click', closeDelete);

function closeAdd() {
    addPopup.style.display = 'none';
};

function popupAddEvent() {
    addPopup.style.display = 'block';
};

async function addEvent() {
    const title = document.getElementById('titleInputAdd');
    const date = document.getElementById('dateInputAdd');

    if (title.value == "" || date.value == "") {
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
        location.reload();
    } catch (error) {
        console.log(error);
    }
}

function popupdeleteEvent() {
    deletePopup.style.display = 'block';
};

function closeDelete() {
    deletePopup.style.display = 'none';
}

async function deleteEvent() {
    const idEvent = document.getElementById('eventsInputDelete').value;
    if(idEvent == 0){
        alert("Please select an event");
        return;
    }
    const LOCAL_API_URL_DELETE= `http://localhost:3000/events/${idEvent}`;

    try {
        const response = await axios.delete(LOCAL_API_URL_DELETE);
        closeDelete();
        location.reload();
    }catch(error){
        console.log(error);
    }
}

function popupupdateEvent() {
    alert("Event updated");//TODO: Alterar para atualizar evento
};

window.onload = async function() {
    const LOCAL_API_URL = 'http://localhost:3000/events';
    try{
        const response = await axios.get(LOCAL_API_URL);
        const dataList = document.getElementById('eventsInputDelete');

        response.data.forEach(event => {
            const option = document.createElement('option');
            option.value = event._id;
            option.text = event.title;
            dataList.appendChild(option);
        });
    }catch(error){
        console.log(error);
    }
}