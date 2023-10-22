import {Text, View, StyleSheet} from "@react-pdf/renderer";
import Heading from "./components/Heading";
import data from "../../data";
import {ReactIcon} from "./index.tsx";
import {FaCheck} from "react-icons/fa";
import {FaRadio} from "react-icons/fa6";
import {PiArrowFatLeftBold, PiArrowFatRightBold} from "react-icons/pi";

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
        marginRight:"4",
        // flexDirection:"column",
        // fontFamily: "Lato",
        alignItems:"flex-end",
        // textAlign: 'center',
        // flex:"1"
    }
})
function Sidebar(){

    return <View style={{padding:4}}>
        <View style={style.title}>
            <Heading size="h5">Skills and Expertise</Heading>
        </View>
        <View style={style.bulletPoint}>
            {data.skills.map((skill, index)=>(<Text style={{flexDirection:"row"}}> {skill} <ReactIcon height={8} width={8} icon={PiArrowFatLeftBold} /></Text>))}
        </View>
        <View style={style.title}>
            <Heading size="h5">Activities</Heading>
        </View>
        <View style={{...style.bulletPoint}}>
            <Text style={{textAlign:"justify"}}>{data.activity}</Text>
        </View>
    </View>
}

export default Sidebar;