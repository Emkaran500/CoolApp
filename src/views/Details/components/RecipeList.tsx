import React from "react";
import { Recipe } from "../../../utils/types";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../utils/colors";

interface Props {
    recipes: Recipe[];
}

export const RecipeList: React.FC<Props> = ({recipes}) => {
    const difficulty = recipes.length <= 6 ? "Easy" : "Hard"
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Ingredients({recipes.length})</Text>
            <Text style={[styles.difficulty, {color: difficulty == "Hard" ? Colors.red : Colors.lightGreen}]}>{difficulty}</Text>
            {recipes.map((item, index) => {
                return (
                <View style={styles.recipes}>
                    <Text style={styles.recipesText}>{index + 1}. {item.ingredient}</Text>
                    <View style={styles.dashLine}/>
                    <Text style={[styles.recipesText, {fontWeight: '600', color: Colors.silver}]}>{item.measure}</Text>
                </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 10,
    },

    recipes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 6,
        alignItems: 'center',
    },

    recipesText: {
        color: Colors.white,
        fontSize: 16,
    },

    header: {
        color: Colors.white,
        fontSize: 24,
    },

    difficulty: {
        fontSize: 18
    },

    dashLine: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        borderStyle: 'dashed',
        height: 16,
    }
})