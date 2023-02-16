const modalDiv = document.querySelector('#myModal')

const showModalAlert = (isOnline) => {
    let timer = 10, intervalId;
    console.log({isOnline})
    if(isOnline) {

    } else {
        modalDiv.querySelector('.modal-title').innerText = 'Disconnected';
        setInterval(() => {
            timer--;
            if(timer === 0) checkConnection();
            else modalDiv.querySelector('.modal-body span').innerText = `${timer}`;
        }, 1000);
        if(!$('#myModal').is(':visible')) {
            $('#myModal').show('true');
        }
    }
};

const checkConnection = async () => {
    let isOnline = true;
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: "GET"
        });

        isOnline = response.status >= 200 && response.status <=300;

        showModalAlert(isOnline);
        
    } catch(error) {
        isOnline = false;
        showModalAlert(isOnline);
    }
};

modalDiv.querySelector('.modal-footer button').addEventListener('click', checkConnection());

setInterval(() => checkConnection(), 3000);