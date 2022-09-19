import { View, TouchableOpacity, Text, Image} from 'react-native'

import TrashImage from '../../../assets/trash.png'
import Unchecked from '../../../assets/unchecked.png'
import Checked from '../../../assets/checked.png'
import { styles } from './styles'

export interface TodoCardProps {
    description: string
    completed: boolean
    handleRemoveTaskButton: (description: string) => void
    handleCompleteTaskButton: (description: string) => void
}

export function TodoCard({description, completed, handleCompleteTaskButton, handleRemoveTaskButton}: TodoCardProps) {
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.completeTaskButton}
                onPress={()=>{handleCompleteTaskButton(description)}}
            >
                {completed? <Image source={Checked} /> : <Image source={Unchecked}/>}
            </TouchableOpacity>

            <Text 
                style={completed? {...styles.taskDescription, textDecorationLine: 'line-through', color: '#999999'} : styles.taskDescription}
            >
                {description}
            </Text>

            <TouchableOpacity style={styles.removeTaskButton}
                onPress={()=>{handleRemoveTaskButton(description)}}
            >
                <Image source={TrashImage}/>
            </TouchableOpacity>

        </View>
    )
}