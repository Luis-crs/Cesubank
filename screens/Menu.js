import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Logo from "../components/Logo";
import { useState } from 'react';
import Banco from "../model/banco.js";

const Menu = ({navigation}) => {

    let banco = new Banco();

    const[saldo, setSaldo] = useState(0);
    const [extrato, setExtrato] = useState("");
    const [extratoCreditos, setExtratoCreditos] = useState([]);
    const [extratoDebitos, setExtratoDebitos] = useState([]);
    const [cheque, setCheque] = useState(2640);
    const [porcentagemPoupanca, setPorcentagemPoupanca] = useState(0);
    const [poupanca, setPoupanca] = useState(0);

    function LancarCredito() {
        navigation.navigate('LancarCredito', { saldo, setSaldo, extrato, setExtrato, extratoCreditos, setExtratoCreditos, cheque, setCheque, porcentagemPoupanca, poupanca, setPoupanca });
    }
    function LancarDebito() {
        navigation.navigate('LancarDebito', { saldo, setSaldo, extrato, setExtrato, extratoDebitos, setExtratoDebitos, cheque, setCheque });
    }
    function Extrato() {
        navigation.navigate('Extrato', { extrato, setExtrato });
    }
    function ExtratoEspecial() {
        navigation.navigate('ExtratoEspecial', { extratoCreditos, setExtratoCreditos, extratoDebitos, setExtratoDebitos });
    }
    function ChequeEspecial() {
        navigation.navigate('ChequeEspecial', { cheque });
    }
    function ConsultarChequeEspecial() {
        navigation.navigate('ConsultarChequeEspecial', { cheque });
    }
    function ConfigurarPoupanca() {
        navigation.navigate('ConfigurarPoupanca', {porcentagemPoupanca, setPorcentagemPoupanca });
    }
    function VerSaldoPoupanca() {
        navigation.navigate('VerSaldoPoupanca', {poupanca});
    }
    function cliquesLogo(){
        banco.cliquesLogo();
    }
    function cliquesFundo(){
        let aux = banco.cliquesFundo();
        if (aux) {
            navigation.navigate('Marcopolo');
        }
    }

    return (
        <TouchableOpacity onPress={cliquesFundo}>
            <View style={styles.container}>
                <TouchableOpacity onPress={cliquesLogo}>
                    <Logo />
                </TouchableOpacity>
                <Text> </Text>
                <Text style={styles.texto}>{"SALDO: R$" + saldo}</Text>
                <Text> </Text>
                <View style={styles.funcionalidades}>
                    <Button onPress={LancarCredito} title="Lançar crédito"/>
                    <Text> </Text>
                    <Button onPress={LancarDebito} title="Lançar débito"/>
                    <Text> </Text>
                    <Button onPress={Extrato} title="Extrato "/>
                    <Text> </Text>
                    <Button onPress={ExtratoEspecial} title="Extrato especial"/>
                    <Text> </Text>
                    <Button onPress={ChequeEspecial} title="Cheque especial"/>
                    <Text> </Text>
                    <Button onPress={ConsultarChequeEspecial} title="Consultar cheque especial"/>
                    <Text> </Text>
                    <Button onPress={ConfigurarPoupanca} title="Configurar poupança"/>
                    <Text> </Text>
                    <Button onPress={VerSaldoPoupanca} title="Ver saldo da poupança"/>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    texto: {
        fontSize:15,
        fontWeight: "bold",
    },
    funcionalidades: {
        width: 200,
    }
});
export default Menu;