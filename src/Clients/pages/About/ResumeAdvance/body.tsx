import {View, StyleSheet, Text} from "@react-pdf/renderer";
import Sidebar from "./sidebar.tsx";
import Main from "./main.tsx";


const body=StyleSheet.create({
        body:{
            flexDirection: 'row',
            marginTop:5
        } ,
        sidebar:{
            maxWidth: 140,
            flexDirection: 'column',
            backgroundColor:"#F7F7F7",
        },
        main:{
            flexDirection: 'column',
            flex:1,
            // padding:10
        }
    });
function Body(){
    return <View style={body.body}>
        <View style={body.main}>
            <Main/>
        </View>
        <View style={body.sidebar}>
            <Sidebar />
            {/*<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eligendi esse nam non omnis, placeat totam? Ad consequuntur cumque dicta expedita labore maxime minus porro provident sunt vel vitae, voluptatum!</Text>*/}
        </View>
    </View>
}

export default Body;