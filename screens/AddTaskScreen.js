import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function AddTaskScreen({ navigation, adicionarTarefa }) {
  // Estados que guardam os valores introduzidos no formulário
  const [titulo, setTitulo] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");

  // Verifica se a data existe realmente no calendário e segue DD/MM/AAAA
  function dataEstaValida(data) {
    const correspondencia = data.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

    if (!correspondencia) {
      return false;
    }

    const dia = Number(correspondencia[1]);
    const mes = Number(correspondencia[2]);
    const ano = Number(correspondencia[3]);

    if (ano < 1900 || mes < 1 || mes > 12) {
      return false;
    }

    const ultimoDia = new Date(ano, mes, 0).getDate();
    return dia >= 1 && dia <= ultimoDia;
  }

  // Valida os campos antes de guardar a nova tarefa
  function guardarTarefa() {
    if (!titulo.trim() || !disciplina.trim()) {
      Alert.alert(
        "Campos obrigatórios",
        "Preencha o título e a disciplina. Não são aceites apenas espaços.",
      );
      return;
    }

    const dataFormatada = dataEntrega.trim();

    // A data é opcional, mas quando preenchida deve ser válida
    if (dataFormatada && !dataEstaValida(dataFormatada)) {
      Alert.alert(
        "Data inválida",
        "Introduza uma data válida no formato DD/MM/AAAA, por exemplo 30/11/2026.",
      );
      return;
    }

    const novaTarefa = {
      id: Date.now().toString(),
      title: titulo.trim(),
      subject: disciplina.trim(),
      description: descricao.trim(),
      dueDate: dataFormatada || "Não definida",
      completed: false,
    };

    // Envia a nova tarefa para App.js
    adicionarTarefa(novaTarefa);

    // Regressa à lista de tarefas
    navigation.goBack();
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.label}>Título da tarefa *</Text>
      <TextInput
        style={estilos.input}
        placeholder="Introduza o título"
        value={titulo}
        onChangeText={setTitulo}
        maxLength={80}
      />

      <Text style={estilos.label}>Disciplina *</Text>
      <TextInput
        style={estilos.input}
        placeholder="Introduza a disciplina"
        value={disciplina}
        onChangeText={setDisciplina}
        maxLength={60}
      />

      <Text style={estilos.label}>Descrição</Text>
      <TextInput
        style={[estilos.input, estilos.textoGrande]}
        placeholder="Descreva a tarefa (opcional)"
        multiline
        value={descricao}
        onChangeText={setDescricao}
        maxLength={300}
      />

      <Text style={estilos.label}>Data de entrega</Text>
      <TextInput
        style={estilos.input}
        placeholder="DD/MM/AAAA (opcional)"
        value={dataEntrega}
        onChangeText={setDataEntrega}
        keyboardType="numbers-and-punctuation"
        maxLength={10}
      />

      {/* Botão que valida e guarda a tarefa */}
      <TouchableOpacity style={estilos.botao} onPress={guardarTarefa}>
        <Text style={estilos.textoBotao}>Guardar tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 8,
    padding: 13,
    fontSize: 15,
  },
  textoGrande: {
    height: 100,
    textAlignVertical: "top",
  },
  botao: {
    backgroundColor: "#625FEF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 25,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
