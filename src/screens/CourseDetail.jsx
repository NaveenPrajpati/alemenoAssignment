import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Pressable, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../utils/Context';

export default function CourseDetail({ navigation, route }) {
    const { data } = route.params
    const [modalVisible, setModalVisible] = useState(false);
    const { setStudentCourses } = useContext(MyContext)

    useEffect(() => {
        // Show the modal
        let timeoutId;
        if (modalVisible)
            timeoutId = setTimeout(() => {
                setModalVisible(false);
                navigation.navigate('StudentDashboard');
            }, 2000);

        // Clear the timeout on component unmount to avoid memory leaks
        return () => clearTimeout(timeoutId);
    }, [modalVisible]);

    return (
        <View style={{ justifyContent: 'space-between', flexDirection: 'column', flex: 1, backgroundColor: 'white' }}>
            <View style={{ backgroundColor: '#f5f5f5', margin: 10, padding: 12, borderRadius: 10,flex:1 }}>
                <View style={{ flexDirection: 'row',gap:4,alignItems:'center',marginVertical:5 }}>
                    <Image source={{ uri: data.thumbnail }} width={50} height={50} style={{borderWidth:1,borderColor:'black',borderRadius:25}}/>
                    <View>
                        <Text style={{ fontSize: 18, color: 'black' }}>{data.name}</Text>
                        <Text style={{ fontSize: 15, color: 'red', }}>{data.schedule}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 18, color: 'grey',marginBottom:10 }}>{data.description}</Text>
                <Text style={styles.text}>Enrollment Status: {data.enrollmentStatus}</Text>
                <Text style={styles.text}>Duration: {data.duration}</Text>
                <Text style={styles.text}>Location: {data.location}</Text>
                <Text style={{ fontSize: 18, color: 'gray', fontWeight: '700', marginTop: 10 }}>Instructor: {data.instructor}</Text>

                <View>
                    <Text style={styles.subheading}>Prerequisites:</Text>
                    {data.prerequisites.map((item)=>(
                        <Text>{item}</Text>
                    ))}
                </View>
                <View>
                    <Text style={styles.subheading}>Syllabus:</Text>
                    {data.syllabus.map((item)=>(
                        <View style={{margin:5}}>
                        <Text>Topic: {item.topic}</Text>
                        <Text>Content: {item.content}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <View>
                {data.enrollmentStatus == 'Open' && <View >
                    <Button title='Enroll Now' onPress={() => {
                        setStudentCourses((pre) => [...pre, data])
                        setModalVisible(true)
                    }}></Button>
                </View>}

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            //   Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Congratulation</Text>
                                <Text style={styles.modalText}>Couser Ecroll success</Text>

                            </View>
                        </View>
                    </Modal>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    subheading:{
        fontSize: 18, color: 'black',marginTop:10,fontWeight:'700'
    },
    text:{
        fontSize: 16, color: 'black'
    }
    ,
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})