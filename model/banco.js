export default class Banco {
    constructor(saldo, credito, data, extrato, debito, extratoCreditos, extratoDebitos){
        this.saldo = saldo;
        this.credito = credito;
        this.data = data;
        this.extrato = extrato;
        this.debito = debito
        this.extratoCreditos = extratoCreditos;
        this.extratoDebitos = extratoDebitos;
    }
    LancarCredito() {
        if (this.data=="") {
            return "Insira a data";
        } else {
            if (isNaN(Number(this.credito)) || this.credito <= 0) {
                return "Insira um valor adequado";
            } else {
                let novoSaldo = this.saldo + Number(this.credito);
                this.saldo = novoSaldo
                this.extrato = this.extrato + "+R$" + this.credito + " | Data: " + this.data + "\n";
                this.extratoCreditos.push(this.credito);
                return "Crédito lançado";
            }
        }
    }
    LancarDebito() {
        if (this.data=="") {
            return "Insira a data";
        } else {
            if (isNaN(Number(this.debito)) || this.debito <= 0) {
                return "Insira um valor adequado";
            } else {
                let novoSaldo = this.saldo - Number(this.debito);
                this.saldo = novoSaldo
                this.extrato = this.extrato + "-R$" + this.debito + " | Data: " + this.data + "\n"
                this.extratoDebitos.push(this.debito);
                return "Débito lançado"
            }
        }
    }
    ordenarCreditos(){
        let creditos = this.extratoCreditos;
        let aux;

        for (let i = 0; i < creditos.length; i++) {
            for (let j = i+1; j < creditos.length; j++) {
                if (creditos[i] < creditos[j]) {
                    aux = creditos[i];
                    creditos[i] = creditos[j];
                    creditos[j] = aux;
                }
            }
        }

        let imprimirCreditos = "";

        for (let i = 0; i < creditos.length; i++) {
            imprimirCreditos += "+R$" + creditos[i] + "\n"
        }
        return imprimirCreditos;
    }
    ordenarDebitos(){
        let debitos = this.extratoDebitos;
        let aux;

        for (let i = 0; i < debitos.length; i++) {
            for (let j = i+1; j < debitos.length; j++) {
                if (debitos[i] > debitos[j]) {
                    aux = debitos[i];
                    debitos[i] = debitos[j];
                    debitos[j] = aux;
                }
            }
        }

        let imprimirDebitos = "";

        for (let i = 0; i < debitos.length; i++) {
            imprimirDebitos += "-R$" + debitos[i] + "\n";
        }
        return imprimirDebitos;
    }
}