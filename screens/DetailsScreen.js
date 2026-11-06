import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  // Recupera a tarefa enviada pelo ecra principal
  const { task } = route.params;

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>{task.title}</Text>

      <Text style={estilos.campo}>Disciplina:</Text>
      <Text style={estilos.valor}>{task.subject} </Text>

      <Text style={estilos.campo}>Descrição:</Text>
      <Text style={estilos.valor}>{task.description}</Text>

      <Text style={estilos.campo}>Data de entrega:</Text>
      <Text style={estilos.valor}>{task.dueDate}</Text>

      <Text style={estilos.campo}>Estado:</Text>
      <Text
        style={[
          estilos.estado,
          task.completed ? estilos.concluida : estilos.pendente,
        ]}
      >
        {task.completed ? "Concluída" : "Pendente"}
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#25243A",
    marginBottom: 25,
  },
  campo: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#625FEF",
    marginTop: 15,
  },
  valor: {
    fontSize: 16,
    color: "#444444",
    marginTop: 5,
  },
  estado: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  concluida: {
    color: "#239B56",
  },
  pendente: {
    color: "#D68910",
  },
});
