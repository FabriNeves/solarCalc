
# Projeto de Dimensionamento de Sistemas Fotovoltaicos API

Este projeto tem como objetivo construir uma API para o dimensionamento de um sistema fotovoltaico com base na localização geográfica, consumo energético e características dos equipamentos utilizados.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- JavaScript
- Node.js
- OpenMeteo API
- TypeScript
  
## Como Utilizar

O projeto é um módulo JavaScript que pode ser importado e utilizado em outro projeto. Para utilizá-lo, é necessário passar como parâmetros a latitude e longitude da localização desejada e o consumo energético mensal.



```javascript
import getData from './index.js';
const latitude = -23.5489;
const longitude = -46.6388;
const consumo = 500;

getData(latitude, longitude, consumo)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```


## Resultado

O resultado da função será um objeto com diversas informações relevantes para o dimensionamento do sistema, como a quantidade de painéis necessários, a potência do sistema e a energia gerada mensalmente.

## Deploy 
Deploy
Este projeto foi desenvolvido em parceria com [Eduardo Queiroz](https://github.com/eduardoqsilva/) e é parte do projeto [SolarCalc](https://github.com/eduardoqsilva/solarCalc).

Você pode conferir o front-end do sistema em [SolarCalc](https://github.com/eduardoqsilva/solarCalc) , que utiliza esse projeto como back-end.

O projeto foi deployado no serviço de hospedagem de aplicações Vercel e pode ser acessado através do seguinte link: https://solar-calc-lilac.vercel.app/

## Bibliografia

Leitura para a base de cálculo da API 

FADIGAS, E. A. F. A. Energia solar fotovoltaica: fundamentos, conversão e viabilidade técnico-econômica. PEA – 2420 Produção de energia. São Paulo: Escola Politécnica, Universidade de São Paulo, 2021.

https://www.canadiansolar.com/

https://www.mosopower.com/en/approducts/

http://www.cresesb.cepel.br/index.php?section=sundata
