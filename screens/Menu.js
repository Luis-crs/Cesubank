import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import Logo from "../components/Logo";
import { useState } from 'react';

const Menu = ({navigation}) => {

    const[saldo, setSaldo] = useState(0);
    const [extrato, setExtrato] = useState("");
    const [extratoCreditos, setExtratoCreditos] = useState([]);
    const [extratoDebitos, setExtratoDebitos] = useState([]);

    function LancarCredito() {
        // Passa o saldo atualizado automaticamente
        navigation.navigate('LancarCredito', { saldo, setSaldo, extrato, setExtrato, extratoCreditos, setExtratoCreditos });
    }
    function LancarDebito() {
        // Passa o saldo atualizado automaticamente
        navigation.navigate('LancarDebito', { saldo, setSaldo, extrato, setExtrato, extratoDebitos, setExtratoDebitos });
    }
    function Extrato() {
        // Passa o saldo atualizado automaticamente
        navigation.navigate('Extrato', { extrato, setExtrato });
    }
    function ExtratoEspecial() {
        // Passa o saldo atualizado automaticamente
        navigation.navigate('ExtratoEspecial', { extratoCreditos, setExtratoCreditos, extratoDebitos, setExtratoDebitos });
    }

    return (
        <View style={styles.container}>
            <Logo />
            <Text> </Text>
            <Text style={styles.texto}>{"SALDO: " + saldo}</Text>
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
                <Button title="Cheque especial"/>
                <Text> </Text>
                <Button title="Consultar cheque especial"/>
                <Text> </Text>
                <Button title="Configurar poupança"/>
                <Text> </Text>
                <Button title="Ver saldo da poupança"/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize:20,
        fontWeight: "bold",
    },
    funcionalidades: {
        width: 200,
    }
});
export default Menu;