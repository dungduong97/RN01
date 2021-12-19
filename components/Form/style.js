import { StyleSheet } from 'react-native'
import color from '../../contains/color'
const styles = StyleSheet.create({
    addTask: {
        bottom: 30,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    input: {
        height: 45,
        width: '80%',
        backgroundColor: color.white,
        borderWidth: 2,
        borderColor: color.primary,
        borderRadius: 20,
        paddingHorizontal: 10
    },
    iconWrapper: {
        width: 40,
        height: 40,
        backgroundColor: color.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    icon: {
        fontSize: 30,
        fontWeight: 'bold',
        color: color.white
    },

})
export default styles