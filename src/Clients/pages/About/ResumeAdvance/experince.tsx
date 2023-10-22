import {View, Text, StyleSheet} from "@react-pdf/renderer";
import {ReactIcon} from "./index.tsx";
import {RiRadioButtonLine} from "react-icons/ri";
import {IoBriefcase} from "react-icons/io5";
import Heading from "./components/Heading.tsx";
import data from "../../data.tsx";
import Paragraph from "./components/Paragraph.tsx";


const styles = StyleSheet.create({
    subheader: {
        fontSize: 13,
        padding: 4,
        marginBottom: 5,
        fontWeight: "bold",
        borderBottom:"1 solid #61dbfb",
        marginRight:"5"
    },
    timelineContainer: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    timelineIcon: {
        fontSize: 11,
        marginRight: 16,
        marginLeft:-5,
    },
    timelineContent: {
        flex: 1,
    },
    text: {
        fontSize: 11,
        marginBottom: 2,
    },
    title: {
        fontSize: 11,
        fontWeight: "bold",
    }
});
function Experince(){
    // const experienceData = [
    //     {
    //         icon: RiRadioButtonLine,
    //         title: 'Software Developer',
    //         company: 'Company A',
    //         date: 'June 20XX - Present',
    //         description: 'Your experience details go here.',
    //     },
    //     {
    //         icon: RiRadioButtonLine,
    //         title: 'Frontend Developer',
    //         company: 'Company B',
    //         date: 'May 20XX - June 20XX',
    //         description: 'More experience details go here.',
    //     },
    // ];
    return (
       <View style={{width:"100%", }}>
           <View style={styles.subheader}>
               <Heading size="h4" icon={IoBriefcase}> Experience</Heading>
           </View>

           <View style={{borderLeft:"1 dotted #000000",}}>
            {data.experience.map((experience, index) => (
                <View style={styles.timelineContainer} key={index}>
                    <Text style={styles.timelineIcon}>
                        <ReactIcon height={10} width={10} icon={RiRadioButtonLine} color="#000000" backgroundColor="#fff" />
                    </Text>
                    <View style={styles.timelineContent}>
                        <View style={{flexDirection:"row"}}>
                            <Heading size="h5" >{experience.title} | </Heading>
                            <Heading size="d5" >{experience.company} </Heading>
                        </View>
                        <Text style={styles.text}>{experience.from} - {experience.to}</Text>
                        <Paragraph >{experience.responsibilities}</Paragraph>
                    </View>
                </View>
            ))}</View>
        </View>
)
}

export default Experince;