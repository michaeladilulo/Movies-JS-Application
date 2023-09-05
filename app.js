const fetchData = async (searchTerm) => {
    const response = await axios.get(`http://www.omdbapi.com/`, {
        params: {
            apikey: '74aeddd9',
            s: searchTerm
        }
    });

    console.log(response.data);
};

let timeoutId;
const input = document.querySelector('input');
const onInput = event => {
    if(timeoutId) {
        clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 1000);
}

input.addEventListener('input', onInput);