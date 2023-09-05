const fetchData = async () => {
    const response = await axios.get(`http://www.omdbapi.com/`, {
        params: {
            apikey: '74aeddd9',
            s: 'avengers'
        }
    });

    console.log(response.data);
}

fetchData();