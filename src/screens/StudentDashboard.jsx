import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useContext} from 'react'
import { MyContext } from '../utils/Context'
import Slider from '@react-native-community/slider';

export default function StudentDashboard({navigation}) {
    const {studentCourses}=useContext(MyContext)

  return (
    <View>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:5,alignItems:'center'}}>
      <Text style={styles.header}>Student Dashboard</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('CourseList')}>
      <Text>CourseList</Text>
      </TouchableOpacity>

    </View>
      <Text style={{backgroundColor:'white',margin:10,padding:8,fontSize:20}}>Enlored courses</Text>
      {studentCourses.length>0? <FlatList
      data={studentCourses}
      keyExtractor={it=>it.id}
      renderItem={({item,index})=>(
        <View style={{backgroundColor:'white',margin:10,padding:10,borderRadius:15}}>
        <View style={{flexDirection:'row',gap:10,marginVertical:10}}>
<Image source={{uri:item.thumbnail}} height={100} width={100}/>

        <View>
              <Text style={{fontSize:18,color:'blue'}}>{item.name}</Text>
                        <Text style={{fontSize:18,color:'black'}}>Duration {item.duration}</Text>
                        <Text style={{fontSize:20,color:'red',marginTop:5}}>{item.instructor}</Text>
        </View>
        </View>
        <Text>{item.schedule}</Text>
        <Slider
  style={{borderWidth:5,borderColor:'pink',marginVertical:10}}
  minimumValue={0}
  value={40}
  maximumValue={100}
  minimumTrackTintColor="green"
  maximumTrackTintColor="red"
  
/>
        </View>
      )}
      />:
      <View>
        <Text style={styles.text}>Enrolled in 0 courses</Text>
      </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize:20,
    textAlign:'center',
    color:'black'
  },
  header:{
    fontSize:20,
    color:'black'
  }
})