import {StyleSheet, Text, View} from "@react-pdf/renderer";
import {ReactIcon} from "./index.tsx";
import {FaCode, FaHome} from "react-icons/fa";
import Heading from "./components/Heading.tsx";


const styles = StyleSheet.create({
    subheader: {
        fontSize: 13,
        padding: 4,
        marginBottom: 5,
        fontFamily:'Open Sans Bold',
        borderBottom:"1 solid #61dbfb",
        marginRight:"5"
    },
    timelineContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    timelineIcon: {
        fontSize: 11,
        marginRight: 18,
        marginLeft:-5,
    },
    timelineContent: {
        flex: 1,
    },
    text: {
        fontSize: 11,
        marginBottom: 5,
        marginRight:"5",
        flexWrap:"wrap",
        flexDirection:"column"
    },
});

function Objective(){

    return (
        <View style={{width:"100%"}}>
            <View style={styles.subheader}>
               <Heading size={"h1"} icon={FaHome}>Objective</Heading>
               <Heading size={"h3"}  icon={FaHome}>Objective</Heading>
               <Heading size={"h6"}  icon={FaHome}>Objective</Heading>
                <Heading size={"d1"}  icon={FaHome}>Objective</Heading>
                <Heading size={"d3"}  icon={FaHome}>Objective</Heading>
                <Heading size={"d6"}  icon={FaHome}>Objective</Heading>
            </View>
            <Text style={styles.text}>
                Dedicated and highly skilled Backend Developer with [X] years of experience in Java development. Adept at designing, implementing, and maintaining robust and scalable server-side applications. Seeking an opportunity to contribute my expertise in Java and backend development to a dynamic and innovative team.
            </Text>
        </View>
    )
}

export default Objective;