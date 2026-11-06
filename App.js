import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import AddTaskScreen from "./screens/AddTaskScreen";

const Stack = createNativeStackNavigator();

// Lista inicial de tarefas
const tarefasIniciais = [
  {
    id: "1",
    title: "Trabalho de React Native",
    subject: "Programação em Dispositivos Móveis",
    description: "Desenvolver um app utilizando Expo.",
    dueDate: "15/11/2026",
    completed: false,
  },
  {
    id: "2",
    title: "Relatório de Engenharia de Software",
    subject: "Engenharia de Software",
    description: "Elaborar um relatório sobre metodologias ágeis.",
    dueDate: "20/11/2026",
    completed: false,
  },
  {
    id: "3",
    title: "Protótipo de Interface",
    subject: "Interação Humano-Computador",
    description: "Criar um protótipo de uma aplicação mobile.",
    dueDate: "25/11/2026",
    completed: true,
  },
];

export default function App() {
  // Guarda e atualiza a lista de tarefas
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  // Adiciona uma nova tarefa à lista
  function adicionarTarefa(novaTarefa) {
    setTarefas((listaAtual) => [...listaAtual, novaTarefa]);
  }

  // Altera o estado de uma tarefa (concluída ou pendente)
  function alterarEstado(id) {
    setTarefas((listaAtual) =>
      listaAtual.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, completed: !tarefa.completed } : tarefa,
      ),
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#625FEF" },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontWeight: "bold" },
          contentStyle: { backgroundColor: "#F4F3FF" },
        }}
      >
        <Stack.Screen name="Home" options={{ title: "Minhas Tarefas" }}>
          {(props) => (
            <HomeScreen
              {...props}
              tarefas={tarefas}
              alterarEstado={alterarEstado}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Detalhes da Tarefa" }}
        />

        <Stack.Screen name="AddTask" options={{ title: "Nova Tarefa" }}>
          {(props) => (
            <AddTaskScreen {...props} adicionarTarefa={adicionarTarefa} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
