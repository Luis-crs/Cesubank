import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function LancarDebito({route, navigation}){
    const {saldo, setSaldo} = route.params;
    const [debito, setDebito] = useState(0);
    const [feedback, setFeedback] = useState("");

    

    function LancarDebito(params) {
        let novoSaldo = saldo - Number(debito);
        setSaldo(novoSaldo);
        setFeedback("Débito lançado | Saldo: " + novoSaldo);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Lançar débito</Text>
            <Text style={styles.texto}>Insira o valor do débito</Text>
            <TextInput onChangeText = {setDebito} style={styles.entrada}/>
            <Text>{feedback}</Text>
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