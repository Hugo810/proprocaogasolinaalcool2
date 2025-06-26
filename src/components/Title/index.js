import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

// Componente simples para exibir o título do aplicativo
export default function Title(){
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>
                Proporção Gasolina/Álcool
            </Text>
        </View>
    );
}
