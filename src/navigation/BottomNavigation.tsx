import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Loans from '../screens/Loans';
import Profile from '../screens/Profile';
import Account from '../screens/Account';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false,
       tabBarIcon: ({color, size}) => (
        <AntDesign name="home" size={24} color="black" />
       )  
    }} 
      />
      <Tab.Screen name="Account" component={Account}  options={{headerShown:false,
       tabBarIcon: ({color, size}) => (
        <Fontisto name="wallet" size={24} color="black" />
       )  
    }} />
     <Tab.Screen name="Loans" component={Loans}   options={{headerShown:false,
       tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="wallet-plus-outline" size={24} color="black" />
       )  
    }} />
  
      <Tab.Screen name="Profile" component={Account}  options={{headerShown:false,
       tabBarIcon: ({color, size}) => (
      
        <FontAwesome name="user-o" size={24} color="black" />
       )  
    }}  />
     
    
    </Tab.Navigator>
  );
}
export default MyTabs;

