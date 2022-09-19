import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    TodoListContainer: {
        flex: 1,
        marginTop: 32,
        paddingHorizontal: 24
    },
    CreatedAndCompletedContainer: {
        width: '100%',
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    CreatedOrCompletedContainer: {
        flexDirection: 'row'
    },
    CreatedOrCompletedText: {
        fontSize: 14,
        fontWeight: '700',
    },
    CreatedOrCompletedNumber: {
        width: 25,
        height: 19,
        borderRadius: 999,
        backgroundColor: '#333333',
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    DivisionRule: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#464646',
        marginTop: 20 
    },
    EmptyView: {
        alignItems: 'center',
        marginTop: 48
    },
    EmptyTitle: {
        marginTop: 16,
        fontWeight: '700',
        color: '#fff'
    }
})