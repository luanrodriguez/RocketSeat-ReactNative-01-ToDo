import { useState } from 'react'
import {View, Image, TextInput, TouchableOpacity} from 'react-native'

import { TodoCardProps } from '../../components/TodoCard'
import { TodoList } from '../../components/TodoList'

import PlusImage from '../../../assets/plus.png'
import HeaderImage from '../../../assets/HeaderImage.png'
import { styles } from './styles'

export function Home() {
    const [inputTaskDescription, setInputTaskDescription] = useState('')
    const [tasks, setTasks] = useState<TodoCardProps[]>([])

    function handleAddTaskButton() {
        setTasks(prevState => [
            ...prevState,
            {
                description: inputTaskDescription,
                completed: false,
                handleCompleteTaskButton: handleCompleteTaskButton,
                handleRemoveTaskButton: handleRemoveTaskButton
            }
        ])
        setInputTaskDescription('')
    }

    function handleCompleteTaskButton(description: string) {
        setTasks(prevState => {
            const selectedTask = prevState.filter(task => task.description === description)
            const selectedTaskComplete = selectedTask[0].completed
            const arrayWithSelectedTaskRemoved = prevState.filter(task => task.description !== description)

            return [
                ...arrayWithSelectedTaskRemoved,
                {
                    description: description,
                    completed: !selectedTaskComplete,
                    handleCompleteTaskButton: handleCompleteTaskButton,
                    handleRemoveTaskButton: handleRemoveTaskButton
                }
            ]
        })
    }

    function handleRemoveTaskButton(description: string) {
        setTasks(prevState => prevState.filter(task => task.description !== description))
    }


    return (
        <>
            <View style={{backgroundColor: '#000', paddingHorizontal: 24}}>
                <View style={styles.headerContainer}>
                    <Image
                        source={HeaderImage}
                        />
                </View>

                <View style={styles.addTaskContainer}>
                    <TextInput style={styles.addTaskInput}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor='#808080'
                        onChangeText={setInputTaskDescription}
                        value={inputTaskDescription}
                    />

                    <TouchableOpacity style={styles.addTaskButton}
                        onPress={handleAddTaskButton}
                    >
                        <Image
                            source={PlusImage}
                            />
                    </TouchableOpacity>
                </View>
            </View>

            <TodoList 
                tasks={tasks}
            />
        </>
    )
}