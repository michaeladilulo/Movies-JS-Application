const fetchData = async (searchTerm) => {
    const response = await axios.get(`http://www.omdbapi.com/`, {
        params: {
            apikey: '74aeddd9',
            s: searchTerm
        }
    });

    console.log(response.data);
};

const debounce = (func, delay = 1000) => {
    let timeoutId;
return (...args) => {
    if(timeoutId) {
        clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
        func.apply(null, args);
    }, delay)

 };
};

const input = document.querySelector('input');
const onInput = event => {
    fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 500));