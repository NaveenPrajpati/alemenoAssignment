import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { courses } from '../utils/constansts'
import { MyContext } from '../utils/Context'

export default function CourseList({ navigation }) {
    const {setSelectedData}=useContext(MyContext)

    return (
        <View style={{backgroundColor:'white'}}>
            <FlatList
                data={courses}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() =>{
                        setSelectedData(item)
                         navigation.navigate('CourseDetail',{data:item})}} style={{backgroundColor:'#e5e5e5',margin:10,padding:8,borderRadius:15}}>
                        <Text style={{fontSize:18,color:'blue'}}>{item.name}</Text>
                        <Text style={{fontSize:18,color:'black'}}>Duration {item.duration}</Text>
                        <Text style={{fontSize:20,color:'red',marginTop:5}}>{item.instructor}</Text>
                    </Pressable>
                )} />
        </View>
    )
}

const styles = StyleSheet.create({})