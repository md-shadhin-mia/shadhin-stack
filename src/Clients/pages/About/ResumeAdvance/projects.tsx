import {StyleSheet, Text, View} from "@react-pdf/renderer";
import {ReactIcon} from "./index.tsx";
import {IoBriefcase} from "react-icons/io5";
import {FaCode} from "react-icons/fa";


const projectData = [
    {
        icon: FaCode ,
        title: 'Project 1',
        date: 'January 20XX - March 20XX',
        description: 'Description of Project 1.',
    },
    {
        icon: FaCode ,
        title: 'Project 2',
        date: 'April 20XX - June 20XX',
        description: 'Description of Project 2.',
    },
];



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
function Projects(){
   return <View style={{width:"100%", }}>
        <View style={styles.subheader}>
            <Text ><ReactIcon height={16} width={16} icon={FaCode} color="#61dbfb" /> Project:</Text>
        </View>

        <View >
            {projectData.map((experience, index) => (
                <View style={styles.timelineContainer} key={index}>
                    <Text style={styles.timelineIcon}>
                        <ReactIcon height={10} width={10} icon={experience.icon} color="#000000" backgroundColor="#fff" />
                    </Text>
                    <View style={styles.timelineContent}>
                        <Text style={styles.text}>
                            {experience.title}
                        </Text>
                        <Text style={styles.text}>{experience.date}</Text>
                        <Text style={styles.text}>{experience.description}</Text>
                    </View>
                </View>
            ))}</View>
    </View>
}

export default Projects;
