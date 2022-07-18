const ofertaDeCreditos = [
    {nombre: 'Plan001',
    capital: 150000,
    plazo: 30,
    tasa: 0.15
    },
    {
    nombre: "Plan002",
    capital: 300000,
    plazo: 180,
	tasa: 0.1
    },
    {
    nombre: "Plan003",
    capital: 485000,
	plazo: 60,
    tasa: 0.23
    }
];

function mejorarInteres(){

    let ofertasConIntereses = [];
    
    for(var i = 0; i < ofertaDeCreditos.length; i++){
        let actualizacion = ofertaDeCreditos[i];
        let interes = ((actualizacion.capital * actualizacion.plazo * actualizacion.tasa) / 100);
        ofertasConIntereses.push({
            nombre: actualizacion.nombre,
            capital: actualizacion.capital,
            plazo: actualizacion.plazo,
            tasa: actualizacion.tasa,
            interes: interes
        });
    };
    
    return ofertasConIntereses;
}

console.log(mejorarInteres());