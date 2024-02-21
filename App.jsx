import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
} from "react-native";

import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const addTask = () => {
        if (task) {
            setTasks([...tasks, {
                id: Math.random().toString(),
                value: task
            }]);
            setTask("");
        }
    };
    const removeTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
      };
    return (
        <View style={styles.container} >
            <View style={styles.form}>
                <TextInput
                    placeholder="Digite uma nova tarefa"
                    style={styles.inputLine}
                    onChangeText={setTask}
                    value={task}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={addTask}
                >
                    <Text style={styles.buttonText} >Adicionar</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
            <View style={styles.listTitle}>
                {tasks.length === 0 ? (
                    <Text style={styles.emptyList}>Nenhuma Tarefa Cadastrada</Text>
                ) : (
                    <Text style={styles.list}>Tarefas Cadastradas</Text>
                )}
            </View>
            {tasks.map((task) => (
  <View
    key={task.id}
   styles={styles.listItem}
  >
    <Text style={styles.valorTarefa}>{task.value}</Text>
    <TouchableOpacity
      onPress={() => removeTask(task.id)}
      style={styles.buttonRemove}
    >
      <Text className={`text-white`}>Remover</Text>
    </TouchableOpacity>
  </View>
))}
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        padding: 50,
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    inputLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    listTitle: {
        marginBottom: 10,
    },
    emptyList: {
        fontSize: 25,
        color: 'green',
        textAlign: 'center',
    },
    list: {
        fontSize: 25,
        color: 'green',
        textAlign: 'center',
    },
    valorTarefa: {
width: '80%',
    },
    listItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    buttonRemove:{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '50%',
        font: 'apple-system',
        fontSize: 20,
    },
    
});

