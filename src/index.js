
const getResourse = async(url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Could not fetch')
    }
    const body = await res.json();
    return body;
};

getResourse('https://swapi.dev/api/people/1/')
    .then((body) => console.log(body))
    .catch((err) => {
        console.log('Could not fetch', err)
    });

/*
fetch('https://swapi.dev/api/people/1/')
    .then((res) => {
        return res.json();
    })
    .then((body) => {
        console.log(body);
    });
 */