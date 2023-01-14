import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  ActivityIndicator,
  SafeAreaView
} from 'react-native'
import studentData from '../../data/mock-student-data.json'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function StudentList () {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedStudent, setSelectedStudent] = useState({})

  const navigation = useNavigation()

  useEffect(() => {
    // console.log('data', studentData[0])
    setIsLoading(false)
  }, [])

  const renderItem = ({ item, index }) => (
    <Pressable onPress={() => onPress(item, index)}>
      <View style={styles.item}>
        <View>
          <Image
            style={styles.imageStyle}
            source={{
              uri: item.picture
            }}
          />
        </View>
        <View style={styles.dataContainer}>
          <View>
            <Text style={styles.heading}>First Name</Text>
            <Text style={styles.data}>{item.firstName}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.heading}>Class</Text>
            <Text style={styles.data}>{item.class}</Text>
          </View>
        </View>
        <View style={styles.dataContainer}>
          <View>
            <Text style={styles.heading}>Last Name</Text>
            <Text style={styles.data}>{item.lastName}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.heading}>Roll Number</Text>
            <Text style={styles.data}>{item.rollNumber}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )

  const onPress = (item, index) => {
    setSelectedStudent(item)
    // console.log('Selected', selectedStudent)

    navigation.navigate('StudentProfile', {studentData: item})
  }

  return isLoading ? (
    <ActivityIndicator></ActivityIndicator>
  ) : (
    <SafeAreaView style={styles.MainContainer}>
      <FlatList
        data={studentData}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      ></FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'lightgrey',
    width: '100%',
    paddingVertical: 8
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  dataContainer: {
    color: 'green',
    width: '40%'
  },
  heading: {
    marginLeft: 10,
    color: 'green',
    fontWeight: 'bold'
  },
  data: {
    marginLeft: 10,
    color: '#665A48',
    fontSize: 13
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey'
  }
})
