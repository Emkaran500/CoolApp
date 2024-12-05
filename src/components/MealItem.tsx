import React from "react";
import { Meal } from "../utils/types";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Colors } from "../utils/colors";
import { convertToFlags, makeHashtags } from "../utils/helpers";
import CountryFlag from "react-native-country-flag";
import { useNavigation } from "@react-navigation/native";
import InfoIcon from '../assets/icons/info.svg'


interface Props extends Meal {
    borderColor: string
}

export const MealItem: React.FC<Props> = (props) => {
    const navigation = useNavigation();
    //@ts-ignore
    const onNavigate = (idMeal) => navigation.navigate('Details', {idMeal});
    
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={styles.containerMainInfo}>
                    <View style={styles.itemHeader}>
                        <Pressable onPress={() => onNavigate(props.idMeal)}>
                            <View style={styles.containerFlag}>
                                <Text numberOfLines={1} style={styles.textMeal}>{props.strMeal} </Text>
                                <CountryFlag isoCode={convertToFlags(props)} size={24} />
                            </View>
                        </Pressable>
                    </View>
                    <Text style={styles.textCategory} >{props.strCategory}</Text>
                </View>
                <Text style={styles.textTags} >{makeHashtags(props)}</Text>
            </View>
            <Image style={[styles.image, {borderColor: props.borderColor}] } source={{ uri: props.strMealThumb}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grayDark,
        gap: 16
    },

    image: {
        height: 100,
        width: 100,
        borderRadius: 10,
        borderWidth: 4
    },

    containerMainInfo: {
        gap: 10,
    },

    containerFlag : {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flex: 1,
    },

    textContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },

    textMeal: {
        color: Colors.purple,
        fontSize: 20,
        fontWeight: '600',
    },

    iconMeal: {
        backgroundColor: Colors.yellow,
        borderRadius: 20
    },

    textCategory: {
        color: Colors.blueYonder,
    },

    textTags: {
        color: Colors.blue,
    },

    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        flex: 1,
        alignItems: 'center',
    }

})