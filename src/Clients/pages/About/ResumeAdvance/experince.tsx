import {View, Text, StyleSheet} from "@react-pdf/renderer";
import {ReactIcon} from "./index.tsx";
import {RiRadioButtonLine} from "react-icons/ri";
import {IoBriefcase} from "react-icons/io5";


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
    },
    title: {
        fontSize: 11,
        fontWeight: "bold",
    }
});
function Experince(){
    const experienceData = [
        {
            icon: RiRadioButtonLine,
            title: 'Software Developer',
            company: 'Company A',
            date: 'June 20XX - Present',
            description: 'Your experience details go here.',
        },
        {
            icon: RiRadioButtonLine,
            title: 'Frontend Developer',
            company: 'Company B',
            date: 'May 20XX - June 20XX',
            description: 'More experience details go here.',
        },
    ];
    return (
       <View style={{width:"100%", }}>
           <View style={styles.subheader}>
               <Text><ReactIcon height={16} width={16} icon={IoBriefcase} color="#61dbfb" /> Experience:</Text>
           </View>

           <View style={{borderLeft:"1 dotted #000000",}}>
            {experienceData.map((experience, index) => (
                <View style={styles.timelineContainer} key={index}>
                    <Text style={styles.timelineIcon}>
                        <ReactIcon height={10} width={10} icon={experience.icon} color="#000000" backgroundColor="#fff" />
                    </Text>
                    <View style={styles.timelineContent}>
                        <Text style={styles.title}>
                            {experience.title} at {experience.company}
                        </Text>
                        <Text style={styles.text}>{experience.date}</Text>
                        <Text style={styles.text}>{experience.description}</Text>
                    </View>
                </View>
            ))}</View>
        </View>
)
}

export default Experince;