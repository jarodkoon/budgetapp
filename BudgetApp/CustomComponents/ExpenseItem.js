import { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

function ExpenseItem(props){
    /* Variables */

    /* Functions */

    /* Viewable Component */
    return(
        <View style={expenseItemStyle.dateContainer}>
            <View style={expenseItemStyle.itemHeader}>
                <View style={expenseItemStyle.dateHeader}>
                    <Text>10 Oct 2022</Text>
                </View>
                <View>
                    <Text>Total: $101.30</Text>
                </View>
            </View>
            <View>
                <Text>Items for each day here</Text>
            </View>
        </View>
    )
};

export default ExpenseItem;

const expenseItemStyle = StyleSheet.create({
    dateContainer:{
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 2,
        borderColor: 'grey',
        border: 5
        },
    itemHeader:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        
        borderBottom: 1,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    dateHeader:{
        paddingLeft: 5
    },
    dateItem:{
        flex: 1
    }
});