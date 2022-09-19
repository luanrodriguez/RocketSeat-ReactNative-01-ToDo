import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        backgroundColor: '#464646',
        borderRadius: 8,
        alignItems: 'center',
        padding: 12,
        borderWidth: 1,
        borderColor: '#565656',
        marginBottom: 8
    },
    completeTaskButton: {
        height: 24,
        width: 24
    },
    taskDescription: {
        flex: 1,
        marginHorizontal: 8,
        fontSize: 14,
        color: "#fff"
    },
    removeTaskButton: {
        height: 32,
        width: 32
    }
})