import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    list: {
        flex: 1,
    },

    listContent: {
        flexGrow: 1,
    },

    image: {
        height: Dimensions.get('window').height * 3 / 10,
        width: Dimensions.get('window').width,
        borderWidth: 4,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: Colors.purple
    },

    textMeal: {
        color: Colors.purple,
        fontSize: 40,
        fontWeight: '600',
    },

    textTags: {
        color: Colors.blue,
    },

    textCategory: {
        color: Colors.blueYonder,
    },

    headerInfo: {
        padding: 16,
        alignItems: 'center'
    }
})