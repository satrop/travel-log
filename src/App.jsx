import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

import locationData from "./assets/data";

function App() {
	const cardsList = locationData.map((item) => {
		return <Card key={item.id} {...item} />;
	});

	return (
		<div className="app">
			<main className="main">
				<Header />
				<section className="cards-list">{cardsList}</section>
			</main>
		</div>
	);
}

export default App;
