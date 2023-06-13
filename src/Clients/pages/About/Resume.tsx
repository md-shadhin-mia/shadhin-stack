
import React, {ElementType} from 'react';
import {Document, Page, Text, View, StyleSheet, Image} from '@react-pdf/renderer';
import logo from './../../../assets/react.svg';
import GetPNGBlob from "../../../Utils/GetPNGBlob.tsx";
import {FaHome} from "react-icons/fa";
import getPNGBlob from "../../../Utils/GetPNGBlob.tsx";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        fontFamily: "Open Sans",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    subheader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    text: {
        fontSize: 12,
        marginBottom: 5
    },
    list: {
        fontSize: 12,
        marginLeft: 20,
        marginBottom: 5
    },
    icon: {
        fontSize: 12,
        marginRight: 5,
    }
});


type SvgImageProps = {
    height: number;
    width: number;
    icon: ElementType;
}
export function ReactIcon(props: SvgImageProps) {
    return <Image src={getPNGBlob(props.icon, props.height, props.width)} {...props}/>
}

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>

                <Text style={styles.header}>[Your Name]</Text>
                <Text style={styles.text}><ReactIcon height={10} width={10} icon={FaHome}/> [Your Address]</Text>
                <Text style={styles.text}>[City, State, ZIP Code]</Text>
                <Text style={styles.text}>[Your Email Address]</Text>
                <Text style={styles.text}>[Your Phone Number]</Text>
                <Text style={styles.text}>[LinkedIn Profile URL, if applicable]</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subheader}>Objective:</Text>
                <Text style={styles.text}>Dedicated and highly skilled Backend Developer with [X] years of experience in Java development. Adept at designing, implementing, and maintaining robust and scalable server-side applications. Seeking an opportunity to contribute my expertise in Java and backend development to a dynamic and innovative team.</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subheader}>Professional Experience:</Text>
                <Text style={styles.text}>Backend Developer</Text>
                <Text style={styles.text}>[Company Name]</Text>
                <Text style={styles.text}>[Location]</Text>
                <Text style={styles.text}>[Date Started] - Present</Text>
                <Text style={styles.list}>- Collaborated with a cross-functional team to design and implement backend systems using Java, Spring Boot, and other relevant technologies.</Text>
                <Text style={styles.list}>- Developed and maintained RESTful APIs to support front-end applications, ensuring high performance and reliability.</Text>
                <Text style={styles.list}>- Optimized database queries and schema designs to enhance application speed and efficiency.</Text>
                <Text style={styles.list}>- Implemented security best practices to protect sensitive data and prevent unauthorized access.</Text>
                <Text style={styles.list}>- Participated in code reviews and provided constructive feedback to team members.</Text>
                <Text style={styles.list}>- Troubleshooted and resolved complex issues, ensuring minimal system downtime.</Text>
                <Text style={styles.list}>- Worked closely with DevOps and QA teams to streamline the deployment and testing processes.</Text>

                <Text style={styles.text}>Java Developer Intern</Text>
                <Text style={styles.text}>[Company Name]</Text>
                <Text style={styles.text}>[Location]</Text>
                <Text style={styles.text}>[Date Started] - [Date Ended]</Text>
                <Text style={styles.list}>- Assisted in the development and enhancement of Java applications under the guidance of senior developers.</Text>
                <Text style={styles.list}>- Wrote clean, efficient, and maintainable code following best practices and coding standards.</Text>
                <Text style={styles.list}>- Collaborated with team members to understand project requirements and deliver solutions on time.</Text>
                <Text style={styles.list}>- Conducted unit testing and resolved bugs to improve software quality.</Text>
                <Text style={styles.list}>- Gained hands-on experience with version control systems such as Git.</Text>
                <br/>
            </View>

            {/*<View style={styles.section}>*/}
            {/*    <Text style={styles.subheader}>Technical Skills:</Text>*/}
            {/*    <View style={{flexDirection: "row"}}>*/}
            {/*        <View style={{flexWrap:"wrap", width: "50%"}}>*/}
            {/*            <View style={{flexDirection: "row"}}>*/}
            {/*                <View style={{ width:"40%"}}>*/}
            {/*                    <Text>Programming Languages:</Text>*/}
            {/*                </View>*/}
            {/*                <View style={{width:"60%"}}>*/}
            {/*                    <Text>Java</Text>*/}
            {/*                </View>*/}
            {/*            </View>*/}

            {/*            <View style={{flexDirection:"row"}}>*/}
            {/*                <View style={{width:"40%"}}>*/}
            {/*                    <Text>Web Frameworks:</Text>*/}
            {/*                </View>*/}
            {/*                <View style={{width:"60%"}}>*/}
            {/*                    <Text>Spring Boot</Text>*/}
            {/*                </View>*/}
            {/*            </View>*/}

            {/*            <View style={{flexDirection:"row"}}>*/}
            {/*                <View style={{width:"40%"}}>*/}
            {/*                    <Text>Database Systems:</Text>*/}
            {/*                </View>*/}
            {/*                <View style={{width:"60%"}}>*/}
            {/*                    <Text>MySQL, PostgreSQL</Text>*/}
            {/*                </View>*/}
            {/*            </View>*/}

            {/*            <View style={{flexDirection:"row"}}>*/}
            {/*                <View style={{width:"40%"}}>*/}
            {/*                    <Text>RESTful API Development</Text>*/}
            {/*                </View>*/}
            {/*                <View style={{width:"60%"}}>*/}
            {/*                    <Text></Text>*/}
            {/*                </View>*/}
            {/*            </View>*/}

            {/*        </View>*/}

            {/*        <View style={{flexWrap : "wrap", width : "50%"}}>*/}
            {/*            <View style={{flexDirection:"row"}}>*/}
            {/*                <View style={{width:"40%"}}>*/}
            {/*                    <Text>Version Control:</Text>*/}
            {/*                </View>*/}
            {/*                <View style={{width:"60%"}}>*/}
            {/*                    <Text>Git</Text>*/}
            {/*                </View>*/}
            {/*            </View>*/}

            {/*            <View style={{flexDirection:"row"}}>*/}
            {/*                <View style={{width:"40%"}}>*/}
            {/*                    <Text>Unit Testing:</Text>*/}
            {/*                </View>*/}
            {/*                <View style={{width:"60%"}}>*/}
            {/*                    <Text>JUnit</Text>*/}
            {/*                </View>*/}
            {/*            </View>*/}

            {/*            <View style={{flexDirection:"row"}}>*/}
            {/*                <View style={{width:"40%"}}>*/}
            {/*                    <Text>IDEs:</Text>*/}
            {/*                </View>*/}
            {/*                <View style={{width:"60%"}}>*/}
            {/*                    <Text>IntelliJ IDEA, Eclipse</Text>*/}
            {/*                </View>*/}
            {/*            </View>*/}

            {/*            <View style={{flexDirection:"row"}}>*/}
            {/*                <View style={{width:"40%"}}>*/}
            {/*                    <Text>Agile Development Methodologies</Text>*/}
            {/*                </View>*/}
            {/*                <View style={{width:"60%"}}>*/}
            {/*                    <Text></Text>*/}
            {/*                </View>*/}
            {/*            </View>*/}

            {/*        </View>*/}

            {/*    </View>*/}

            {/*</View>*/}

            <View style={styles.section}>
                {/*<Text style={styles.subheader}><FontAwesomeIcon icon={faCode} style={styles.icon} />Education:</Text>*/}
                <Image src={logo} style={{ width: 200, height: 200 }} />
                <Text style={styles.text}>Bachelor of Science in Computer Science</Text>
                <Text style={styles.text}>[University Name]</Text>
                <Text style={styles.text}>[Location]</Text>
                <Text style={styles.text}>[Graduation Date]</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subheader}>Certifications:</Text>
                <Text style={styles.text}>[Certification Name], [Issuing Organization], [Date]</Text>
                <Text style={styles.text}>[Certification Name], [Issuing Organization], [Date]</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subheader}>Projects:</Text>
                <Text style={styles.text}>Project Name 1</Text>
                <Text style={styles.list}>Description: Briefly describe the project, including its purpose, your role, and the technologies used.</Text>
                <Text style={styles.list}>Technologies: Java, Spring Boot, MySQL, RESTful APIs</Text>

                <Text style={styles.text}>Project Name 2</Text>
                <Text style={styles.list}>Description: Briefly describe the project, including its purpose, your role, and the technologies used.</Text>
                <Text style={styles.list}>Technologies: Java, Spring Boot, PostgreSQL, RESTful APIs</Text>

                <Text style={styles.text}>Project Name 3</Text>
                <Text style={styles.list}>Description: Briefly describe the project, including its purpose, your role, and the technologies used.</Text>
                <Text style={styles.list}>Technologies: Java, Spring Boot, MySQL, RESTful APIs</Text>

            </View>

            <View style={styles.section}>
                <Text style={styles.subheader}>Languages:</Text>
                <Text style={styles.text}>English (Fluent)</Text>
                <Text style={styles.text}>[Any other languages you may speak]</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subheader}>Professional Memberships:</Text>
                <Text style={styles.text}>Member, [Professional Organization Name]</Text>
            </View>

            {/* You can add more sections as you need */}

        </Page>
    </Document>
);

export default MyDocument;

