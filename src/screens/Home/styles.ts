import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
        marginBottom: 40
    },
    addTaskContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 52
    },
    addTaskInput: {
        flex: 1,
        backgroundColor: '#262626',
        borderRadius: 6,
        marginRight: 8,
        padding: 18,
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
        borderWidth: 1,
        borderColor: '#5E60CE'
    },
    addTaskButton: {
        backgroundColor: '#1E6F9F',
        width: 52,
        height: 52,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }
})