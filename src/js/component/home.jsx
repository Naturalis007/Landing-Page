import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	const datos = [
		{
			titulo: "Profesor",
			descripcion: "El jefe y cerebro de la banda",
			img: "https://as01.epimg.net/epik/imagenes/2019/06/21/portada/1561112448_057510_1561112598_noticia_normal.jpg",
		},
		{
			titulo: "Tokio",
			descripcion: "La primera reclutada y la más rebelde",
			img: "https://fueradeseries.com/wp-content/uploads/2021/09/tokio-la-casa-de-papel-poster-2.jpg",
		},
		{
			titulo: "Nairobi",
			descripcion: "Llena de estilo, ella es la encargada de la fabricación de los billetes",
			img: "https://static.mujerhoy.com/www/multimedia/202004/07/media/cortadas/la-casa-de-papel-temporada-4-nairobi-kgTB-U100827296373u0-624x468@MujerHoy.jpg",
		},
		{
			titulo: "Berlin",
			descripcion: "Hermano mayor del profesor; un ladrón elegante",
			img: "https://estaticos-cdn.epe.es/clip/7c0f66d2-efd1-4404-9577-40321fc4406d_alta-libre-aspect-ratio_default_0.jpg",
		}
	];
	
	
	return (
		<div className="container-fluid"> 
			<Navbar/>
			<div className="container my-5">
				<Jumbotron/>

				<div className="row my-5">
					{datos.map((objeto,posicion)=>{
						return <Card titulo={objeto.titulo} 
						descripcion={objeto.descripcion} 
						img={objeto.img } 
						color={objeto.color} />
					}  )}
				</div>
			</div>
		</div>
	);	
};

export default Home;
