import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultProporcao({ msgResultProporcao, vlrResultProporcao }) {
    return (
        <View style={styles.resultContainer}>
            <Text style={styles.textTitle}>{msgResultProporcao}</Text>
            {vlrResultProporcao && (
                <Text style={styles.resultText}>Proporção: {vlrResultProporcao}</Text>
            )}
        </View>
    );
}