import {Text, View, StyleSheet} from "@react-pdf/renderer";

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
        marginRight:"5",
        flexWrap:"wrap",
        flexDirection:"column",
        fontFamily: "Lato",
    }
})
function Sidebar(){

    return <View style={{padding:4}}>
        <View style={style.title}>
            <Text style={style.text}>Sidebar Experiences & Skill</Text>
        </View>
        <View style={style.bulletPoint}>
            <Text style={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur cupiditate
                deleniti dicta et fugiat harum, iusto maiores nihil nisi officia pariatur praesentium
                provident quo reprehenderit sunt ullam, voluptatem voluptatum!</Text>
        </View>
    </View>
}

export default Sidebar;