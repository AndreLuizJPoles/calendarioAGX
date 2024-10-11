const cancelAdd = document.getElementById('cancelAdd');
const cancelDelete = document.getElementById('cancelDelete');
const cancelUpdate = document.getElementById('cancelUpdate');
const addPopup = document.getElementById('addPopup');
const deletePopup = document.getElementById('deletePopup');
const updatePopup = document.getElementById('updatePopup');
const selectEventUpdate = document.getElementById('eventsInputUpdateList');

cancelAdd.addEventListener('click', closeAdd);
cancelDelete.addEventListener('click', closeDelete);
cancelUpdate.addEventListener('click', closeUpdate);

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
    updatePopup.style.display = 'block';
};

function closeUpdate() {
    updatePopup.style.display = 'none';
};

async function onChangeUpdate(){
    const title = document.getElementById('titleInputUpdate');
    const date = document.getElementById('dateInputUpdate');

    if(selectEventUpdate.value == 0){
        title.value = '';
        date.value = '';
        return;
    }

    const LOCAL_API_URL_EVENT = `http://localhost:3000/events/${selectEventUpdate.value}`;

    try{
        const response = await axios.get(LOCAL_API_URL_EVENT);
        title.value = response.data.title;
        const dateValue = new Date(response.data.date);
        date.value = dateValue.toISOString().split('T')[0];
    }catch(error){
        console.log(error);
    }
}

window.onload = async function() {
    const LOCAL_API_URL = 'http://localhost:3000/events';
    try{
        const response = await axios.get(LOCAL_API_URL);
        const dataList = document.getElementById('eventsInputDelete');

        response.data.forEach(event => {
            const option = document.createElement('option');
            option.value = event._id;
            const eventDate = new Date(event.date).toISOString().split('T')[0];
            option.text = `${event.title} (${eventDate})`;
            dataList.appendChild(option);
            selectEventUpdate.appendChild(option);
        });
    }catch(error){
        console.log(error);
    }
}