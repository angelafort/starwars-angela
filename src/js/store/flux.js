const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			starships: []
			
		},
		actions: {

			getCharacters: function() {
				const store = getStore()
				fetch("https://www.swapi.tech/api/people")
				.then(response => response.json())
				.then(data => {
					setStore({ characters: data.results }); // Almacenamos los personajes en el estado global
				})
				.catch(error => console.error(error));
			},

			getPlanets: function() {
				const store = getStore()
				fetch("https://www.swapi.tech/api/planets")
				.then(response => response.json())
				.then(data => {
					console.log("Planets data:", data); 
					setStore({ planets: data.results }); // Almacenamos los personajes en el estado global
				})
				.catch(error => console.error(error));
			},

			getStarships: function() {
				const store = getStore()
				fetch("https://www.swapi.tech/api/starships")
				.then(response => response.json())
				.then(data => {
					setStore({ starships: data.results });
				})
				.catch(error => console.error(error));
			},


			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
