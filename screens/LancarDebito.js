import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Banco from '../model/banco.js';

export default function LancarDebito({route}){
    const {saldo, setSaldo, extrato, setExtrato, extratoDebitos, setExtratoDebitos} = route.params;
    const [debito, setDebito] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [data, setData] = useState("");

    let banco = new Banco(saldo, null, data, extrato, debito, null, extratoDebitos);

    function LancarDebito(params) {
        let debitar = banco.LancarDebito();
        setFeedback(debitar);
        setSaldo(banco.saldo);
        setExtrato(banco.extrato);
        setExtratoDebitos(banco.extratoDebitos);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Lançar débito</Text>
            <Text style={styles.texto}>Insira o valor do débito</Text>
            <TextInput onChangeText = {setDebito} style={styles.entrada}/>
            <Text style={styles.texto}>Insira a data</Text>
            <TextInput onChangeText = {setData} style={styles.entrada}/>
            <Text style={styles.texto}>{feedback}</Text>
            <Button onPress={LancarDebito} title='Lançar'/>
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
        fontSize:20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
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