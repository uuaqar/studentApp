import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StudentList from '../pages/StudentList/StudentList'
import StudentProfile from '../pages/StudentProfile/StudentProfile'

const Stack = createNativeStackNavigator();

export default function Routes () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='List' component={StudentList} />
                <Stack.Screen name='StudentProfile' component={StudentProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}