const fetchData = async () => {
    const response = await axios.get(`http://www.omdbapi.com/`, {
        params: {
            apikey: '74aeddd9',
            i: "tt2455546"
        }
    });

    console.log(response.data);
}

fetchData();