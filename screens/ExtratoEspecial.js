import { StyleSheet, Text, View } from 'react-native';
import Banco from '../model/banco.js';

export default function ExtratoEspecial({route}){
    const {extratoCreditos, extratoDebitos} = route.params;
    
    let banco = new Banco(null, null, null, null, null, extratoCreditos, extratoDebitos);
    let creditos = banco.ordenarCreditos();
    let debitos = banco.ordenarDebitos();

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Extrato especial</Text>
            <Text style={styles.texto}>{creditos}</Text>
            <Text>--------------------------------</Text>
            <Text style={styles.texto}>{debitos}</Text>
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
    titulo: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 50,
    },
});