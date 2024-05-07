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
			starships: [],
			CharacterDescription: {},
			planetDetail: {},
			StarshipDetail: {},
			Favorites: [],
			
		},
		actions: {

			getCharacters: function() {
				const store = getStore()
				fetch("https://www.swapi.tech/api/people")
				.then(response => response.json())
				.then(data => {
					setStore({ characters: data.results }); 
				})
				.catch(error => console.error(error));
			},

			getPlanets: function() {
				const store = getStore()
				fetch("https://www.swapi.tech/api/planets")
				.then(response => response.json())
				.then(data => {
					setStore({ planets: data.results }); 
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

			getCharacterDescription: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
				.then(response => response.json())
				.then(data => { setStore({ CharacterDescription: data.result.properties }) })
				.catch(error => { error })
			},
			

			getPlanetDetail: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(response => response.json())
					.then(data => { setStore({ planetDetail: data.result.properties }) })
					.catch(error => { error })
			},

			AddFavorites: (name) => {
				const store = getStore();
				if (store) {
					let storeFavorites = store.Favorites;
					setStore({ Favorites: [...storeFavorites, name] });
				}
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
