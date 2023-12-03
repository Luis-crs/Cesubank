import { Linking } from "react-native";

export default class Banco {
    constructor(saldo, credito, data, extrato, debito, extratoCreditos, extratoDebitos, cheque, porcentagem, poupanca){
        this.saldo = saldo;
        this.credito = credito;
        this.data = data;
        this.extrato = extrato;
        this.debito = debito;
        this.extratoCreditos = extratoCreditos;
        this.extratoDebitos = extratoDebitos;
        this.cheque = cheque;
        this.porcentagem = porcentagem;
        this.poupanca = poupanca;
        this.nCliquesFundo = 0;
        this.nCliquesLogo = 0;
    }
    LancarCredito() {
        if (this.data == "" || this.credito == "") {
            return "Preencha os campos corretamente";
        } else {
            this.credito = Number(this.credito);
            if (isNaN(this.credito) || this.credito <= 0) {
                return "Insira um valor adequado";
            } else {
                if (this.porcentagem > 0) {
                    this.poupanca += this.credito * this.porcentagem / 100;
                    this.credito *= (100-this.porcentagem)/100;
                }
                if (this.cheque < 2640) {
                    this.cheque += this.credito;
                    if (this.cheque > 2640) {
                        this.saldo += this.cheque - 2640;
                        this.cheque = 2640;
                    }
                    this.saldo += this.credito;
                    this.extrato = this.extrato + "+R$" + this.credito + " | Data: " + this.data + "\n";
                    this.extratoCreditos.push(this.credito);
                    return "Crédito lançado";
                }else {
                    let novoSaldo = this.saldo + this.credito;
                    this.saldo = novoSaldo;
                    this.extrato = this.extrato + "+R$" + this.credito + " | Data: " + this.data + "\n";
                    this.extratoCreditos.push(this.credito);
                    return "Crédito lançado";
                }
            }
        }
    }
    LancarDebito() {
        if (this.data == "" || this.debito == "") {
            return "Preencha os campos corretamente";
        } else {
            this.debito = Number(this.debito);
            if (isNaN(this.debito) || this.debito <= 0) {
                return "Insira um valor adequado";
            } else {
                if (this.debito > this.saldo) {
                    let verificar = this.saldo - this.debito;
                    if (verificar < -this.cheque) {
                        return "Valor limite ultrapassado";
                    } else {
                        this.cheque = this.cheque - (this.saldo - this.debito) * -1;
                        let novoSaldo = this.saldo - this.debito;
                        this.saldo = novoSaldo;
                        this.extrato = this.extrato + "-R$" + this.debito + " | Data: " + this.data + "\n";
                        this.extratoDebitos.push(this.debito);
                        return "Débito lançado";
                    }
                } else {
                    let novoSaldo = this.saldo - this.debito;
                    this.saldo = novoSaldo;
                    this.extrato = this.extrato + "-R$" + this.debito + " | Data: " + this.data + "\n";
                    this.extratoDebitos.push(this.debito);
                    return "Débito lançado";
                }
            }
        }
    }
    verificarExtrato(){
        if (this.extrato == "") {
            return "Não há extrato disponível";
        } else {
            return this.extrato;
        }
    }
    verificarExtratoEspecial(){
        if (this.extratoCreditos == "" && this.extratoDebitos == "") {
            return "Não há extrato especial disponível";
        } else {
            return this.ordenarCreditos() + "-----------------------\n" + this.ordenarDebitos();
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
            imprimirCreditos += "+R$" + creditos[i] + "\n";
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
    verificarUsoCheque(){
        if (this.cheque < 2640) {
            return "O cheque está em uso. Dívida: R$" + (2640 - this.cheque);
        } else {
            return "O cheque não está em uso";
        }
    }
    configurarPorcentagem(entrada) {
        entrada = Number(entrada);
        if (isNaN(entrada) || entrada > 100 || entrada < 0 || entrada == "") {
            return "Insira um valor adequado.";
        } else {
            this.porcentagem = entrada;
            return "Poupança configurada";
        }
    }
    cliquesLogo(){
        this.nCliquesLogo += 1;
        if (this.nCliquesLogo == 3) {
            Linking.openURL("https://www.cesupa.br/");
            this.nCliquesLogo = 0;
        }
    }
    cliquesFundo(){
        this.nCliquesFundo += 1;
        if (this.nCliquesFundo == 13) {
            this.nCliquesFundo = 0;
            return true;
        } else {
            return false;
        }
    }
}