import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

// Componente que recebe props com a mensagem e o valor da proporção
export default function ResultProporcao({ msgResultProporcao, vlrResultProporcao }) {
    return (
        <View style={styles.resultContainer}>
            {/* Exibe a mensagem principal */}
            <Text style={styles.textTitle}>{msgResultProporcao}</Text>

            {/* Exibe a proporção formatada, se existir */}
            {vlrResultProporcao && (
                <Text style={styles.resultText}>Proporção: {vlrResultProporcao}</Text>
            )}
        </View>
    );
}
