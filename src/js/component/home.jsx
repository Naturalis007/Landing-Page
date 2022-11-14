import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";

//create your first component
const Home = () => {
	const datos = [
		{
			título: "profesor",
			descripción: "el jefe de la banda",
			img: "https://as01.epimg.net/epik/imagenes/2019/06/21/portada/1561112448_057510_1561112598_noticia_normal.jpg",
			color: "$red-800"
		}
		{
			título: "tokio",
			descripción: "la primera reclutada y la más rebelde",
			img: "https://.com/wp-content/uploads/2021/09/tokio-la-casa-de-papel-poster-2.jpg",
			color: "$red-800"
		}
		{
			título: "nairobi",
			descripción: "encargada de la fabricación de los billetes",
			img: "https://static.mujerhoy.com/www/multimedia/202004/07/media/cortadas/la-casa-de-papel-temporada-4-nairobi-kgTB-U100827296373u0-624x468@MujerHoy.jpg",
			color: "$red-800"
		}
		{
			título: "berlin",
			descripción: "hermano del profesor",
			img: "https://vader.news/__export/1599561189471/sites/gadgets/img/2020/09/08/4a_berlin_la_casa_de_papel.jpg_1809110536.jpg",
			color: "$red-800"
		}
	]
	return (
		<div className="container-fluid"> 
			<Navbar/>
			<div className="container my-5">
				<Jumbotron/>

				<div className="row my-5">
					{datos.map()(objeto,posicion)=>{
						return <Card/>
					}
					 }
				</div>
			</div>
		</div>
	);	
};

export default Home;
