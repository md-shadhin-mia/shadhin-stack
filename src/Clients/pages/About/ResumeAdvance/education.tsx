import {StyleSheet, Text, View} from "@react-pdf/renderer";
import {ReactIcon} from "./index.tsx";
import {IoIosSchool} from "react-icons/io";
import Heading from "./components/Heading.tsx";
import data from "../../data.tsx";


const styles = StyleSheet.create({
    subheader: {
        fontSize: 13,
        padding: 4,
        marginBottom: 2,
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
                <Heading size={"h4"} icon={IoIosSchool}> Education</Heading>
            </View>

            <View >
                {data.education.map((education, index) => (
                    <View style={styles.timelineContainer} key={index}>
                        <Text style={styles.timelineIcon}>
                            <ReactIcon height={10} width={10} icon={IoIosSchool} color="#000000" backgroundColor="#fff" />
                        </Text>
                        <View style={styles.timelineContent}>
                            <View style={{flexDirection:"row"}}>
                                <Heading size={"h5"}>{education.degree} | </Heading>
                                <Heading size={"d5"}>{education.institution}</Heading>
                            </View>
                            <Text style={styles.text}>{education.from} - {education.to}</Text>
                            <Text style={styles.text}>GPA: {education.gpa}</Text>
                        </View>
                    </View>
                ))}</View>
        </View>

    )
}

export  default  Education;