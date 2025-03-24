import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TextInput,ScrollView ,FlatList}from 'react-native';

export default function App() {
  const [enteredGoalText,setEnteredGoalText]=useState();
  const [courseGoals,setCourseGoals]=useState([])

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    setCourseGoals((currentCourseGoals)=>[...currentCourseGoals,{text: enteredGoalText,id:Math.random().toString()}]);

  }



  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Add your Goal here!' onChangeText={goalInputHandler} /> 
        <Button title='Add Goal' onPress={addGoalHandler} /></View>
    <View style={styles.goalsContainer}>
      {/* <ScrollView >
      {courseGoals.map((goal)=>(
      <View key={goal} style={styles.goalItem}>
        <Text style={styles.goalText}>{goal}</Text>
          </View>))}
        </ScrollView> */}

        <FlatList data={courseGoals} renderItem={(itemData)=>{
          return(
            <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
          </View>

          );
        }} keyExtractor={(item,index)=>{
          return item.id;
        }}/>
    </View></View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBlockColor:'#cccccc',
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    marginRight:7,
    padding:8,
  },
  goalsContainer:{
    flex:7,
  },
  goalItem:{
    margin:7,
    padding: 7,
    borderRadius:6,
    backgroundColor:'#5e0acc',
  },
  goalText:{
    color:'white',
  }
});
