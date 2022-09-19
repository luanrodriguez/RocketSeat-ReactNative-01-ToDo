import { View, Text, FlatList, Image} from 'react-native'

import { TodoCardProps } from '../TodoCard'
import { TodoCard } from '../TodoCard'

import ClipboardImage from '../../../assets/clipboard.png'
import { styles } from './styles'

export interface TodoListProps {
    tasks: TodoCardProps[]
}

export function TodoList({tasks}: TodoListProps) {  
    return (
        <View style={styles.TodoListContainer}>
            <View style={styles.CreatedAndCompletedContainer}>
                <View style={styles.CreatedOrCompletedContainer}>
                    <Text style={{...styles.CreatedOrCompletedText, color: '#4EA8DE'}}>
                        Criadas 
                    </Text>


                    <View style={styles.CreatedOrCompletedNumber}>
                        <Text>
                            {tasks.length}
                        </Text>
                    </View>
                </View>

                <View style={styles.CreatedOrCompletedContainer}>
                    <Text style={{...styles.CreatedOrCompletedText, color: '#8284FA'}}>
                           Concluídas 
                    </Text>

                    <View style={styles.CreatedOrCompletedNumber}>
                        <Text>
                            {tasks.filter(task => task.completed).length}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.DivisionRule}/>
            
            <FlatList
                data={tasks}
                keyExtractor={task => task.description}
                renderItem={({item})=> (
                    <TodoCard
                        key={item.description}
                        description={item.description}
                        completed={item.completed}
                        handleCompleteTaskButton={item.handleCompleteTaskButton}
                        handleRemoveTaskButton={item.handleRemoveTaskButton}
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={styles.EmptyView}>
                        <Image source={ClipboardImage} />

                        <Text style={styles.EmptyTitle}>
                            Você ainda não tem tarefas cadastradas
                        </Text>

                        <Text>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}