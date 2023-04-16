const meses = [
    { nome: 'jan', dias: 31, numero: 1 },
    { nome: 'fev', dias: 28, numero: 2 },
    { nome: 'mar', dias: 31, numero: 3 },
    { nome: 'abr', dias: 30, numero: 4 },
    { nome: 'mai', dias: 31, numero: 5 },
    { nome: 'jun', dias: 30, numero: 6 },
    { nome: 'jul', dias: 31, numero: 7 },
    { nome: 'ago', dias: 31, numero: 8 },
    { nome: 'set', dias: 30, numero: 9 },
    { nome: 'out', dias: 31, numero: 10 },
    { nome: 'nov', dias: 30, numero: 11 },
    { nome: 'dez', dias: 31, numero: 12 }
];

class OpenMeteoAPI {
    constructor(latitude, longitude) {
        this.latitude = Number(latitude);
        this.longitude = Number(longitude);
    }

    async getDirectNormalIrradiance(startDate, endDate, timezone) {
        try {
            const response = await fetch(`https://archive-api.open-meteo.com/v1/archive?latitude=${this.latitude}&longitude=${this.longitude}&start_date=${startDate}&end_date=${endDate}&hourly=direct_normal_irradiance&timezone=${timezone}`);
            const data = await response.json();
            const dni = data.hourly.direct_normal_irradiance;
            return dni;
        } catch (error) {
            console.error(error);
            console.log("Algum erro ocorreu.")
            return null;
        }
    }
}

async function getMediaMensal(latitude, longitude, mes, dias,ano) {
    const openMeteoAPI = new OpenMeteoAPI(latitude, longitude);
    const startDate = `${String(ano)}-${String(mes).padStart(2, '0')}-01`;
    const endDate = `${String(ano)}-${String(mes).padStart(2, '0')}-${dias}`;
    console.log(startDate, endDate)
    const dni = await openMeteoAPI.getDirectNormalIrradiance(startDate, endDate, 'America/Sao_Paulo');

    const soma = dni.reduce((acc, cur) => acc + cur, 0);
    const media = soma / dias;
    console.log(media);
    return media;
}

async function getMediaAnual(latitude, longitude) {
    const mediaMensal = {};
    for (const mes of meses) {
        console.log(mes.numero, mes.dias);
        const media = await getMediaMensal(latitude, longitude, mes.numero, mes.dias,2022);
        mediaMensal[mes.nome] = media;
    }
    return mediaMensal;
}

getMediaAnual(-22.87, -43.36).then(mediaAnual => {
    console.log(mediaAnual);
});


// async function getDados() {
//     const openMeteoAPI = new OpenMeteoAPI(-22.87, -43.36);
//     const dni = await openMeteoAPI.getDirectNormalIrradiance('2021-02-01', '2021-02-28', 'America/Sao_Paulo');
//     const soma = dni.reduce((acc, cur) => acc + cur, 0);
//     const fev = meses.find(mes => mes.nome === 'fev');
//     const numDiasFev = fev.dias;
//     const media = soma / numDiasFev;
//     console.log(media);
// }

//getDados();

 //getMediaMensal(-22.87,-43.36,2,28) ;

