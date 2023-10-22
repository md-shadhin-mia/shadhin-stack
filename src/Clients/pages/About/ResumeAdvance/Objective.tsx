import {StyleSheet, Text, View} from "@react-pdf/renderer";
import {ReactIcon} from "./index.tsx";
import {FaCode, FaHome} from "react-icons/fa";
import Heading from "./components/Heading.tsx";
import data from "../../data.tsx";
import Paragraph from "./components/Paragraph.tsx";


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
               <Heading size={"h4"} icon={FaHome}> Objective</Heading>
            </View>
            <Paragraph>{data.objective}</Paragraph>
        </View>
    )
}

export default Objective;