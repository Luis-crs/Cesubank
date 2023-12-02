import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Banco from '../model/banco.js';

export default function LancarCredito({route, navigation}){
    const {saldo, setSaldo, extrato, setExtrato, extratoCreditos, setExtratoCreditos} = route.params;
    const [credito, setCredito] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [data, setData] = useState("");

    let banco = new Banco(saldo, credito, data, extrato, null, extratoCreditos, null);

    function LancarCredito(params) {
        let creditar = banco.LancarCredito();
        setFeedback(creditar);
        setSaldo(banco.saldo);
        setExtrato(banco.extrato);
        setExtratoCreditos(banco.extratoCreditos);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Lançar crédito</Text>
            <Text style={styles.texto}>Insira o valor do crédito</Text>
            <TextInput onChangeText = {setCredito} style={styles.entrada}/>
            <Text style={styles.texto}>Insira a data</Text>
            <TextInput onChangeText = {setData} style={styles.entrada}/>
            <Text style={styles.texto}>{feedback}</Text>
            <Button onPress={LancarCredito} title='Lançar'/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10
    },
    entrada: {
        padding: 4,
        borderWidth: 2,
        marginBottom: 10,
        marginTop: 10,
    },
    titulo: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 50,
    },
});