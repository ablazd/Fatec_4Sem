import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Switch, Alert, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sexo: "Masculino",
      limite: 500.00,
      casado: false,
    };
  }

  criarConta = () => {
    if (this.state.nome === "") {
      Alert.alert("Erro", "Por favor, informe seu nome");
      return;
    }

    Alert.alert(
      "Alert",
      `Conta Criada com Sucesso:\nNome: ${this.state.nome}\nValor Limite: ${this.state.limite.toFixed(2)}\nSexo: ${this.state.sexo}\nEstado Civil: ${this.state.casado ? "Casado" : "Solteiro"}`,
      [{ text: "OK" }]
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Campo para inserir o nome */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={this.state.nome}
          onChangeText={(texto) => this.setState({ nome: texto })}
        />

        {/* Seleção do sexo */}
        <Text style={styles.label}>Informe seu Sexo:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={this.state.sexo}
            style={styles.picker}
            onValueChange={(itemValue) => this.setState({ sexo: itemValue })}
          >
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
          </Picker>
        </View>

        {/* Slider para definir o limite */}
        <Text style={styles.label}>Escolha seu Limite:</Text>
        <Slider
          style={styles.slider}
          minimumValue={100}
          maximumValue={1000}
          step={0.01}
          onValueChange={(valor) => this.setState({ limite: valor })}
          value={this.state.limite}
          minimumTrackTintColor="#4CAF50"
          maximumTrackTintColor="#CCCCCC"
          thumbTintColor="#4CAF50"
        />
        <Text style={styles.valorSlider}>{this.state.limite.toFixed(2)} R$</Text>

        {/* Switch para estado civil */}
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            {this.state.casado ? "Casado" : "Solteiro"}
          </Text>
          <Switch
            value={this.state.casado}
            onValueChange={(valor) => this.setState({ casado: valor })}
            thumbColor={this.state.casado ? "#4CAF50" : "#f4f3f4"}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </View>

        {/* Botão para criar conta */}
        <TouchableOpacity
          style={styles.button}
          onPress={this.criarConta}
        >
          <Text style={styles.buttonText}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
    paddingTop: 50
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333"
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 20
  },
  picker: {
    height: 50
  },
  slider: {
    height: 40,
    marginBottom: 10
  },
  valorSlider: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
    paddingHorizontal: 10
  },
  switchLabel: {
    fontSize: 18
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default App;