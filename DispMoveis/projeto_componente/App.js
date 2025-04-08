import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  StyleSheet,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default function App() {
  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState(0);
  const [limite, setLimite] = useState(500);
  const [casado, setCasado] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const sexos = [
    { key: 0, nome: "Masculino" },
    { key: 1, nome: "Feminino" },
  ];

  const abrirConta = () => {
    if (nome.trim() === "") {
      if (Platform.OS === "web") {
        window.alert("Por favor, digite seu nome.");
      }
      return;
    }

    if (Platform.OS === "web") {
      // Para web, usamos um alerta simples ou um estado para mostrar nosso próprio alerta
      setShowAlert(true);
    }
  };

  const fecharAlerta = () => {
    setShowAlert(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Informe seu Sexo:</Text>
      <Picker
        selectedValue={sexo}
        onValueChange={(itemValue) => setSexo(itemValue)}
        style={styles.picker}
      >
        {sexos.map((s) => (
          <Picker.Item key={s.key} value={s.key} label={s.nome} />
        ))}
      </Picker>

      <Text style={styles.label}>
        Escolha seu Limite: {limite.toFixed(2)} R$
      </Text>
      <Slider
        minimumValue={100}
        maximumValue={5000}
        step={100}
        value={limite}
        onValueChange={setLimite}
        style={styles.slider}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Estado Civil:</Text>
        <Text style={styles.estadoCivil}>{casado ? "Casado" : "Solteiro"}</Text>
        <Switch value={casado} onValueChange={setCasado} />
      </View>

      <Button title="CRIAR CONTA" onPress={abrirConta} color="#3498db" />

      {/* Dialog personalizado que funciona na web */}
      {showAlert && (
        <View style={styles.alertOverlay}>
          <View style={styles.alertBox}>
            <Text style={styles.alertTitle}>Alert</Text>
            <Text style={styles.alertMessage}>
              Conta Criada com Sucesso:{"\n"}
              Nome: {nome}
              {"\n"}
              Valor Limite: {limite.toFixed(2)} R${"\n"}
              Sexo: {sexos[sexo].nome}
              {"\n"}
              Estado Civil: {casado ? "Casado" : "Solteiro"}
            </Text>
            <Button title="OK" onPress={fecharAlerta} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 15,
  },
  slider: {
    width: "100%",
    height: 40,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  estadoCivil: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  alertOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxWidth: 400,
    alignItems: "center",
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  alertMessage: {
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 24,
  },
});
