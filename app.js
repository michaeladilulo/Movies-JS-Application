const fetchData = async (searchTerm) => {
    const response = await axios.get(`http://www.omdbapi.com/`, {
        params: {
            apikey: '74aeddd9',
            s: searchTerm
        }
    });

    console.log(response.data);
};

const debounce = (func) => {
    let timeoutId;
return (...args) => { // might need to receive arguments, args need to be forwarded on to 'func'
    if(timeoutId) {
        clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
        func.apply(null, args); // apply: call function as normally would, take arguments, pass in as separate arguments to the function
        // apply will automatically keep track of arguments being passed through
    }, 1000)

 };
};

const input = document.querySelector('input');
const onInput = debounce(event => {
    fetchData(event.target.value);
});

input.addEventListener('input', onInput);