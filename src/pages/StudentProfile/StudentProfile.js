import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  Button
} from 'react-native'

import { useEffect, useState } from 'react'

export default function StudentProfile ({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(true)

  const { studentData } = route?.params

  useEffect(() => {
    // console.log('Profile data', studentData)
    setIsLoading(false)
  }, [])

  return isLoading ? (
    <ActivityIndicator></ActivityIndicator>
  ) : (
    <SafeAreaView style={styles.MainContainer}>
      <View style={styles.mainView}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: studentData.picture
            }}
          />
          <Text style={styles.name}>
            {studentData.firstName} {studentData.lastName}{' '}
          </Text>
        </View>
        <View style={styles.dataContainer}>
          <View>
            <Text style={styles.heading}>Roll Number</Text>
            <Text style={styles.data}>{studentData.rollNumber}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.heading}>Class</Text>
            <Text style={styles.data}>{studentData.class}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.heading}>Email</Text>
            <Text style={styles.data}>{studentData.email}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.heading}>Country</Text>
            <Text style={styles.data}>{studentData.country}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.chatButton}
              onPress={() => {
                alert(
                  'Chat with ' + studentData.firstName + ' started'
                )
              }}
            >
              <Text style={styles.buttonText}>
                Chat with {studentData.firstName}
              </Text>
            </Pressable>

            <Pressable
              style={styles.disableButton}
              onPress={() => {
                alert(studentData.firstName + ' has been disabled')
              }}
            >
              <Text style={styles.buttonText}> Disable</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainView: {
    width: '100%'
  },
  imageContainer: {
    height: '40%',
    alignItems: 'center',
    paddingTop: 10
  },
  dataContainer: {
    paddingTop: 30,
    height: '60%',
    paddingHorizontal: 15
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  heading: {
    marginLeft: 10,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 17
  },
  data: {
    marginLeft: 10,
    color: '#665A48',
    fontSize: 13,
    fontWeight: 'bold'
  },
  name: {
    paddingTop: 10,
    color: '#665A48',
    fontSize: 25,
    fontWeight: 'bold'
  },
  chatButton: {
    backgroundColor: 'darkgreen',
    width: 180,
    height: '40%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disableButton: {
    backgroundColor: 'brown',
    width: 180,
    height: '40%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
