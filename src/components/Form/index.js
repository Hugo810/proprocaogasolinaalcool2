import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import ResultProporcao from "./ResultProporcao";

export default function Form() {
    // Estados para armazenar os valores digitados
    const [gasolina, setGasolina] = useState(null);
    const [alcool, setAlcool] = useState(null);

    // Mensagem exibida com a recomendação e o valor da proporção
    const [msgProporcao, setProporcao] = useState('Digite os valores');
    const [vlrProporcao, setVlrProporcao] = useState(null);

    // Texto do botão de cálculo
    const [textButton, setTextButton] = useState('Calcular');

    // Função que calcula a proporção entre álcool e gasolina
    const calculaProporcao = () => {
        // Converte texto para número, tratando vírgula como ponto decimal
        const alcoolNum = parseFloat(alcool.replace(',', '.'));
        const gasolinaNum = parseFloat(gasolina.replace(',', '.'));

        // Valida se os valores são válidos e maiores que zero
        if (!isNaN(alcoolNum) && !isNaN(gasolinaNum) && alcoolNum > 0 && gasolinaNum > 0) {
            const proporcao = (alcoolNum / gasolinaNum).toFixed(2);
            setVlrProporcao(proporcao.replace('.', ',')); // exibe com vírgula para padrão BR

            // Verifica qual combustível é mais vantajoso
            if (proporcao <= 0.7) {
                setProporcao('Compensa usar Álcool!');
            } else {
                setProporcao('Compensa usar Gasolina!');
            }

            // Limpa os campos após o cálculo
            setAlcool(null);
            setGasolina(null);
            setTextButton('Calcular Novamente');
        } else {
            // Mensagem de erro se os valores forem inválidos
            setVlrProporcao(null);
            setTextButton('Calcular');
            setProporcao('Digite os valores corretamente');
        }
    };

    // Função para formatar entrada do valor como moeda
    const formatCurrency = (text, setValue) => {
        const cleaned = text.replace(/\D/g, ''); // remove tudo que não for número
        const value = (parseInt(cleaned || '0') / 100).toFixed(2); // converte para número com 2 casas
        setValue(value.replace('.', ',')); // substitui ponto por vírgula
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
                    placeholder="Ex: 5.00"
                    keyboardType="decimal-pad"
                    onChangeText={(text) => formatCurrency(text, setGasolina)}
                    value={gasolina}
                />

                <Text style={styles.formLabel}>Proporção</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0,00"
                    keyboardType="decimal-pad"
                    value={vlrProporcao}
                    editable={false} // campo apenas leitura
                />

                <TouchableOpacity style={styles.button} onPress={calculaProporcao}>
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            {/* Componente que exibe a mensagem de resultado */}
            <ResultProporcao msgResultProporcao={msgProporcao} vlrResultProporcao={vlrProporcao} />
        </View>
    );
}
