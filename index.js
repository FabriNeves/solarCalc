const OpenMeteo = require("./mediaIrradianciaMensal");
const inversores = require('./inversorFoto');
//const OpenMeteoTemperature  = require("./mediaTempMensal");



const openMeteo = new OpenMeteo(-22.87, -43.36);

(async () => {
  try {
    await openMeteo.addMediaIrradiacao();
    await openMeteo.addMediaTemperatura();
    console.table(OpenMeteo.meses);
  } catch (error) {
    console.log(error);
  }
})();
//console.log(inversores.inversor1.modelo);
