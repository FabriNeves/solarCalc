/*** Media de irradiação Solar Usando a API OpenMeteo para o angulo 0° */


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

class OpenMeteo {
  static meses = meses;

  constructor(latitude, longitude) {
    this.latitude = Number(latitude);
    this.longitude = Number(longitude);
  }
  async getTemperature(startDate, endDate, timezone) {
    try {
      const response = await fetch(
        `https://archive-api.open-meteo.com/v1/archive?latitude=${this.latitude}&longitude=${this.longitude}&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m&timezone=${timezone}`
      );
      const data = await response.json();
      const temperatures = data.hourly.temperature_2m;
      return temperatures;
    } catch (error) {
      console.error(error);
      console.log("Algum erro ocorreu.");
      return null;
    }
  }

  async addMediaTemperatura() {
    for (const mes of OpenMeteo.meses) {
      const startDate = `2022-${String(mes.numero).padStart(2, "0")}-01`;
      const endDate = `2022-${String(mes.numero).padStart(2, "0")}-${mes.dias}`;
      const temperatures = await this.getTemperature(
        startDate,
        endDate,
        "America/Sao_Paulo"
      );
      const length = temperatures.length;

      const soma = temperatures.reduce((acc, cur) => acc + cur, 0);
      const media = soma / length;
      mes.mediaTemperatura = media.toFixed(2);
    }
  }

  async getDirectNormalIrradiance(startDate, endDate, timezone) {
    try {
      const response = await fetch(
        `https://archive-api.open-meteo.com/v1/archive?latitude=${this.latitude}&longitude=${this.longitude}&start_date=${startDate}&end_date=${endDate}&hourly=direct_normal_irradiance&timezone=${timezone}`
      );
      const data = await response.json();
      const dni = data.hourly.direct_normal_irradiance;
      return dni;
    } catch (error) {
      console.error(error);
      console.log("Algum erro ocorreu.");
      return null;
    }
  }

  async addMediaIrradiacao() {
    for (const mes of OpenMeteo.meses) {
      const startDate = `2022-${String(mes.numero).padStart(2, "0")}-01`;
      const endDate = `2022-${String(mes.numero).padStart(2, "0")}-${mes.dias}`;
      const dni = await this.getDirectNormalIrradiance(
        startDate,
        endDate,
        "America/Sao_Paulo"
      );

      const soma = dni.reduce((acc, cur) => acc + cur, 0);
      const media = soma / mes.dias;
      mes.mediaIrradiacao = media.toFixed(2);
    }
  }
}

module.exports = OpenMeteo;








