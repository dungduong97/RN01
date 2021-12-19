import { StyleSheet } from 'react-native'
import color from './contains/color';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
    },
    body: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 10,
    },
    header: {
        fontSize: 22,
        color: color.primary,
        fontWeight: 'bold',
    },
    itemView: {
        marginTop: 20
    },

})
export default styles