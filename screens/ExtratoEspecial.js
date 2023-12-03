import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Banco from '../model/banco.js';
import Logo from '../components/Logo.js';

export default function ExtratoEspecial({route}){
    const {extratoCreditos, extratoDebitos, data} = route.params;
    
    let banco = new Banco(null, null, data, null, null, extratoCreditos, extratoDebitos);

    function cliquesLogo(){
        banco.cliquesLogo();
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={cliquesLogo}>
                <Logo />
            </TouchableOpacity>
            <Text style={styles.titulo}>Extrato especial</Text>
            <Text style={styles.texto}>{banco.verificarExtratoEspecial()}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
    },
});