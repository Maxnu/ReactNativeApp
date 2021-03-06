import React, { Component } from 'react';
import PlayersInfo from '../Components/PlayersInfo';
import {View,Button} from 'react-native';
import NavigationDrawerStructure from '../Components/DrawerMenu';
import AsyncStorage from '@react-native-community/async-storage';



class MainScreen extends Component {
    static navigationOptions =({navigation})=> {
        return{
        title:'Main screen',
        headerStyle:{
            backgroundColor:'black',
            borderBottomColor: "#0D2454",
            borderBottomWidth:2
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'white'
          },
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,  
        headerRight: (
            <Button
              onPress={navigation.getParam("cerrarSesion")}
              title="Cerrar sesion"
              color="#38B1AE"
            />
          ),
      }};
    componentDidMount(){
        this.props.navigation.setParams({ cerrarSesion: this.cerrarSesion });
    }  
    cerrarSesion=async()=>{
        await AsyncStorage.removeItem("token");
        this.props.navigation.navigate("login");
    }
    render() {
        return (
            <View>
                <PlayersInfo/>
            </View>
        );
    }
}


export default MainScreen;