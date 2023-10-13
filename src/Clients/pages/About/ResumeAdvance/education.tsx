import {StyleSheet, Text, View} from "@react-pdf/renderer";
import {ReactIcon} from "./index.tsx";
import {FaCode} from "react-icons/fa";
import {IoIosSchool} from "react-icons/io";
import Heading from "./components/Heading.tsx";


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
});


const educationData = [
    {
        icon: IoIosSchool,
        degree: 'Bachelor of Science in Computer Science',
        school: 'University A',
        date: 'June 20XX - May 20XX',
        description: 'Your education details go here.',
    },
    {
        icon: IoIosSchool,
        degree: 'Master of Science in Software Engineering',
        school: 'University B',
        date: 'September 20XX - August 20XX',
        description: 'More education details go here.',
    },
];
function Education(){

    return (<View style={{width:"100%", }}>
            <View style={styles.subheader}>
                <Heading size={"h4"}>Education</Heading>
            </View>

            <View >
                {educationData.map((education, index) => (
                    <View style={styles.timelineContainer} key={index}>
                        <Text style={styles.timelineIcon}>
                            <ReactIcon height={10} width={10} icon={education.icon} color="#000000" backgroundColor="#fff" />
                        </Text>
                        <View style={styles.timelineContent}>
                            <Text style={styles.text}>
                                {education.degree} at {education.school}
                            </Text>
                            <Text style={styles.text}>{education.date}</Text>
                            <Text style={styles.text}>{education.description}</Text>
                        </View>
                    </View>
                ))}</View>
        </View>

    )
}

export  default  Education;