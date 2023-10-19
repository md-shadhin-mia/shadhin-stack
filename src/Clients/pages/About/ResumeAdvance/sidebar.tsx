import {Text, View, StyleSheet} from "@react-pdf/renderer";
import Heading from "./components/Heading";
import data from "../../data";

const style = StyleSheet.create({
    text: {
        fontSize: 11,
        marginBottom: 5,
        marginRight:"5",
        flexWrap:"wrap",
        flexDirection:"column",
    },
    title: {
        fontSize: 13,
        padding: 2,
        marginBottom: 5,
        fontWeight: "bold",
        borderBottom:"1 solid #61dbfb",
        marginRight:"5"
    },
    bulletPoint: {
        fontSize: 11,
        marginBottom: 5,
        marginRight:"2",
        flexWrap:"wrap",
        flexDirection:"column",
        fontFamily: "Lato",
        alignItems:"flex-end",
        paddingLeft:"18"
    }
})
function Sidebar(){

    return <View style={{padding:4}}>
        <View style={style.title}>
            <Heading size="h6">Sidebar Experiences & Skill</Heading>
        </View>
        <View style={style.bulletPoint}>
            {data.skills.map((skill, index)=>(<Text>{skill}</Text>))}
        </View>
    </View>
}

export default Sidebar;