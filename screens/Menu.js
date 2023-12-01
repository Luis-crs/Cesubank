import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import Logo from "../components/Logo";
import { useState } from 'react';

const Menu = ({navigation, route}) => {

    const[saldo, setSaldo] = useState(0);

    function LancarCredito() {
        // Passa o saldo atualizado automaticamente
        navigation.navigate('LancarCredito', { saldo, setSaldo });
    }
    function LancarDebito() {
        // Passa o saldo atualizado automaticamente
        navigation.navigate('LancarDebito', { saldo, setSaldo });
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
                <Button title="Extrato "/>
                <Text> </Text>
                <Button title="Extrato especial"/>
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