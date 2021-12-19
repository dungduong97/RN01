import { StyleSheet } from 'react-native'
import color from '../../contains/color'
const styles = StyleSheet.create({
    items: {
        flexDirection: 'row',
        backgroundColor: color.white,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    square: {
        width: 48,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    even: {
        backgroundColor: color.primary,
    },
    odd: {
        backgroundColor: color.secondary,
    },
    number: {
        color: color.white,
        fontSize: 16,
        fontWeight: 'bold'
    },
    content: {
        width: '80%',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
export default styles