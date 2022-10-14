import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import ExpenseItem from './CustomComponents/ExpenseItem'


/* SQLite Package */
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({
    name: 'JkBudgetApp',
    location: 'default'
  },
  ()=>{console.log('Successful Connection')},
  error => {console.log(error)}
);


const App: () => Node = () => {

  return (
    <View style={mainBody.appContainer}>
      <ExpenseItem></ExpenseItem>
    </View>
  );
};

const mainBody = StyleSheet.create({
  appContainer:{
    flex: 1,
    flexDirection: 'column',

    marginTop: 50,
    width: '100%',
    backgroundColor: 'white'
  }
});

export default App;
