import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function LancarCredito({route, navigation}){
    const {saldo, setSaldo} = route.params;
    const [credito, setCredito] = useState(0);
    const [feedback, setFeedback] = useState("");

    

    function LancarCredito(params) {
        let novoSaldo = saldo + Number(credito);
        setSaldo(novoSaldo);
        setFeedback("Crédito lançado | Saldo: " + novoSaldo);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Lançar crédito</Text>
            <Text style={styles.texto}>Insira o valor do crédito</Text>
            <TextInput onChangeText = {setCredito} style={styles.entrada}/>
            <Text>{feedback}</Text>
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
        fontSize:20,
        fontWeight: "bold",
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