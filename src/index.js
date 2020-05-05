
class StarService {

    apiBase = 'https://swapi.dev/api';

    async getResourse(url) {
        const res = await fetch(`${this.apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${this.apiBase}${url}` + `, received ${res.status}`)}
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResourse(`/people/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResourse(`/people/${id}/`);
    }

    async getAllPlanet() {
        const res = await this.getResourse(`/planets/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResourse(`/planets/${id}/`);
    }

    async getAllStarships() {
        const res = await this.getResourse(`/starships/`);
        return res.results;
    }

    getStarship(id) {
        return this.getResourse(`/starships/${id}/`);
    }
}

const star = new StarService();
star.getAllPeople()
    .then((people) => {
        people.forEach((person) => {
            console.log(person.name)
        });
});

