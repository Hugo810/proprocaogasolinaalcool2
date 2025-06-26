import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import ResultProporcao from "./ResultProporcao";

export default function Form() {
    const [gasolina, setGasolina] = useState(null);
    const [alcool, setAlcool] = useState(null);
    const [msgProporcao, setProporcao] = useState('Digite os valores');
    const [vlrProporcao, setVlrProporcao] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');

 

    const calculaProporcao = () => {
    const alcoolNum = parseFloat(alcool.replace(',', '.'));
    const gasolinaNum = parseFloat(gasolina.replace(',', '.'));

    if (!isNaN(alcoolNum) && !isNaN(gasolinaNum) && alcoolNum > 0 && gasolinaNum > 0) {
        const proporcao = (alcoolNum / gasolinaNum).toFixed(2);
        setVlrProporcao(proporcao.replace('.', ',')); // mostra com vírgula

        if (proporcao <= 0.7) {
            setProporcao('Compensa usar Álcool!');
        } else {
            setProporcao('Compensa usar Gasolina!');
        }

        setAlcool(null);
        setGasolina(null);
        setTextButton('Calcular Novamente');
    } else {
        setVlrProporcao(null);
        setTextButton('Calcular');
        setProporcao('Digite os valores corretamente');
    }
};


    const formatCurrency = (text, setValue) => {
  const cleaned = text.replace(/\D/g, ''); // remove não dígitos
  const value = (parseInt(cleaned || '0') / 100).toFixed(2);
  setValue(value.replace('.', ',')); // troca ponto por vírgula
};


    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Digite os valores</Text>
                <Text style={styles.formLabel}>Álcool</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 3.50"
                    keyboardType="decimal-pad"
                    onChangeText={(text) => formatCurrency(text, setAlcool)}
                    value={alcool}
                />
                <Text style={styles.formLabel}>Gasolina</Text>
                

                <TextInput
                    style={styles.input}
                    placeholder="Ex: 3.50"
                    keyboardType="decimal-pad"
                    onChangeText={(text) => formatCurrency(text, setGasolina)}
                    value={gasolina}
                />

<Text style={styles.formLabel}>Proporção</Text>
                

                <TextInput
                    style={styles.input}
                    placeholder="Ex: 3.50"
                    keyboardType="decimal-pad"
                    //onChangeText={(text) => handleInputChange(text, setGasolina)}
                    value={vlrProporcao}
                />

                <TouchableOpacity style={styles.button} onPress={calculaProporcao}>
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultProporcao msgResultProporcao={msgProporcao} vlrResultProporcao={vlrProporcao} />
        </View>
    );
}