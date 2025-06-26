import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        width: "100%",
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },

    form: {
        width: "90%",
        marginTop: 20,
        padding: 20,
        backgroundColor: "#ffffff",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },

    formLabel: {
        color: "#333333",
        fontSize: 30,
        fontWeight: "600",
        marginBottom: 5,
        paddingLeft: 10,
    },

    input: {
        width: "100%",
        borderRadius: 25,
        backgroundColor: "#f6f6f6",
        height: 50,
        marginBottom: 20,
        paddingLeft: 20,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#e0e0e0",
    },

    button: {
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#007BFF",
        paddingVertical: 15,
        marginTop: 20,
        shadowColor: "#007BFF",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },

    textButton: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "bold",
    },

    resultContainer: {
        marginTop: 30,
        alignItems: "center",
    },

    resultText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333333",
        marginBottom: 10,
    },

    resultValue: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#ff0043",
    },
});

export default styles;