

class PainelSolar {
    constructor(modelo, potPico, voc, vmpp, correnteNominal, isc, tempVoc, tempPmax, tempIsc, noct, comprimento, largura, area, areaInstalacao) {
        this.modelo = modelo;
        /*** Potência pico do módulo fotovoltáico(W) */
        this.potPico = potPico;
        /*** Tensão em circuito aberto do módulo Fotovoltáico(A) */
        this.voc = voc;
        /*** Tensão em máxima potência do módulo fotovoltáico(A) */
        this.vmpp = vmpp;
        /*** Corrente nominal(A) */
        this.correnteNominal = correnteNominal;
        /*** Corrente de Curto Circuito do módulo fotovoltáico(A) */
        this.isc = isc;
        /*** Coeficiente de temperatura de Voc ( %/grau Celsius ) */
        this.tempVoc = tempVoc;
        /*** Coeficiente de temperatura de Pmax ( %/grau Celsius ) */
        this.tempPmax = tempPmax;
        /*** Coeficiente de temperatura de Isc ( %/grau Celsius ) */
        this.tempIsc = tempIsc;
        /*** NOCT */
        this.noct = noct;
        /*** Comprimento(m) */
        this.comprimento = comprimento;
        /*** largura(m) */
        this.largura = largura;
        /*** Area(m²) */
        this.area = area;
        /*** Area de Instalação(m²) */
        this.areaInstalacao = areaInstalacao;
    }

    calcularPotenciaCorrigida(temperatura) {        
        const radiacaoSolar = 1000;
        const tempCelula = temperatura + radiacaoSolar  * ((this.noct - 20) / 800 * 0.9);
        console.log(tempCelula)
        const potCorrigida = this.potPico * (1 - (this.tempPmax/100*(-1)) * (tempCelula - 25));
        return potCorrigida;
    }
}


const painel1 = new PainelSolar("Canadian Risen 270w", 270, 38.2, 31.2, 8.67, 9.2, -0.33, -0.39, 0.033,45, 1.64, 0.99, 1.63, 1.79);
const painel2 = new PainelSolar("Canadian Risen 330w", 330, 46.3, 38.1, 8.7, 9.25, -0.32, -0.40, 0.034, 45, 1.96, 0.99, 1.94, 2.13);
const painel3 = new PainelSolar("Canadian Risen 325w", 325, 45.5, 37, 8.78, 9.34, -0.31, -0.41, 0.053, 45, 1.96, 0.99, 1.94, 2.13);


console.log(painel1.tempPmax);
console.log(painel1.calcularPotenciaCorrigida(26));