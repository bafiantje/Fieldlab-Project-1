const endpoint = '';
const apiUrl = `https://652d06a8f9afa8ef4b26a52d.mockapi.io/api/FL-P1/${endpoint}`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });