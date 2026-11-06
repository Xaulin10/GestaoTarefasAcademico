import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation, tarefas, alterarEstado }) {
  // Apresenta cada tarefa individualmente
  function apresentarTarefa({ item }) {
    return (
      <View style={estilos.cartao}>
        {/* Tocar no título ou na disciplina abre os detalhes */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Details", { task: item })}
        >
          <Text style={estilos.titulo}>{item.title}</Text>
          <Text style={estilos.disciplina}>Disciplina: {item.subject}</Text>
        </TouchableOpacity>

        <View style={estilos.linha}>
          <Text
            style={[
              estilos.estado,
              item.completed ? estilos.concluida : estilos.pendente,
            ]}
          >
            {item.completed ? "Concluída" : "Pendente"}
          </Text>

          {/* Permite alterar o estado da tarefa */}
          <TouchableOpacity
            style={estilos.botaoEstado}
            onPress={() => alterarEstado(item.id)}
          >
            <Text style={estilos.textoBotao}>
              {item.completed ? "Reabrir" : "Concluir"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    // Respeita a área segura do Android
    <SafeAreaView style={estilos.container} edges={["bottom"]}>
      <Text style={estilos.subtitulo}>
        Organize as suas atividades académicas.
      </Text>

      {/* FlatList ocupa o espaço disponível e pode deslizar */}
      <FlatList
        style={estilos.lista}
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={apresentarTarefa}
        contentContainerStyle={estilos.conteudoLista}
        ListEmptyComponent={
          <Text style={estilos.vazio}>Ainda não existem tarefas.</Text>
        }
      />

      <TouchableOpacity
        style={estilos.botaoAdicionar}
        onPress={() => navigation.navigate("AddTask")}
      >
        <Text style={estilos.textoAdicionar}>Adicionar nota tarefa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8,
  },
  subtitulo: {
    fontSize: 15,
    color: "#666666",
    marginBottom: 20,
  },
  lista: {
    flex: 1,
  },
  conteudoLista: {
    paddingBottom: 8,
  },
  cartao: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#25243A",
    marginBottom: 8,
  },
  disciplina: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 15,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  estado: {
    fontSize: 13,
    fontWeight: "bold",
  },
  concluida: {
    color: "#239B56",
  },
  pendente: {
    color: "#D68910",
  },
  botaoEstado: {
    backgroundColor: "#EEEDFF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  textoBotao: {
    color: "#625FEF",
    fontWeight: "bold",
  },
  botaoAdicionar: {
    backgroundColor: "#625FEF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  textoAdicionar: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  vazio: {
    textAlign: "center",
    marginTop: 30,
    color: "#777777",
  },
});
