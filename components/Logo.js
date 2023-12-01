import { Component } from "react";
import { Text, Image, StyleSheet } from 'react-native';

export default class Logo extends Component {
    render(){

        const styles = StyleSheet.create({
            logo: {
              width:100,
              height: 100,
            },
            texto: {
                fontSize: 14,
                fontWeight: "bold",
            }
          });

        return(
            <>
                <Image style={styles.logo} source ={require("../assets/logo.png")}/>
                <Text style={styles.texto}>CESUBANK</Text>
            </>
        )
    }
}