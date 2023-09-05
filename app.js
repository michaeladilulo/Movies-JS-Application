const fetchData = async (searchTerm) => {
    const response = await axios.get(`http://www.omdbapi.com/`, {
        params: {
            apikey: '74aeddd9',
            s: searchTerm
        }
    });

    return response.data.Search; // returns Search portion of the response
};

const input = document.querySelector('input');
const onInput = event => {
    fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 500));