const cancelAdd = document.getElementById('cancelAdd');
const addPopup = document.getElementById('addPopup');

cancelAdd.addEventListener('click', closeAdd);

function closeAdd(){
    addPopup.style.display = 'none';
};



function addEvent(){
    addPopup.style.display = 'block';
};

function deleteEvent(){
    alert("Event deleted");//TODO: Alterar para deletar evento
};

function updateEvent(){
    alert("Event updated");//TODO: Alterar para atualizar evento
};