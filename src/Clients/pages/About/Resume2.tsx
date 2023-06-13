import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { FaHome, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoIosBriefcase, IoIosSchool, IoIosConstruct, IoIosPerson } from 'react-icons/io';
import {ReactIcon} from "./Resume.tsx";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
    },
    sidebar: {
        width: 80,
        backgroundColor: '#f2f2f2',
        padding: 10,
    },
    content: {
        flexGrow: 1,
        padding: 20,
    },
    header: {
        fontSize: 18,
        marginBottom: 10,
    },
    subheader: {
        fontSize: 14,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
    },
    icon: {
        fontSize: 10, // Adjust the size as needed
        marginRight: 5,
    },
    footer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 10,
        color: 'gray',
    },
});

const Resume = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.sidebar}>
                    <Text style={styles.header}>John Doe</Text>
                    <Text style={styles.icon}>
                        <IoIosPerson />
                    </Text>
                    <Text style={styles.icon}>
                        <IoIosBriefcase />
                    </Text>
                    <Text style={styles.icon}>
                        <IoIosConstruct />
                    </Text>
                    <Text style={styles.icon}>
                        <IoIosSchool />
                    </Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.header}>John Doe</Text>
                    <Text style={styles.subheader}>Profession: Software Developer</Text>
                    <Text style={styles.subheader}>Contacts:</Text>
                    <Text style={styles.text}>
                        <ReactIcon height={10} width={10} icon={FaHome} /> 123 Main Street
                    </Text>
                    <Text style={styles.text}>
                        <ReactIcon height={10} width={10} icon={FaEnvelope} /> john.doe@email.com
                    </Text>
                    <Text style={styles.text}>
                        <ReactIcon height={10} width={10} icon={FaPhone} /> (123) 456-7890
                    </Text>
                    <Text style={styles.text}>
                        <ReactIcon height={10} width={10} icon={FaLinkedin} />{' '}
                        <a href="https://www.linkedin.com/in/johndoe">LinkedIn</a>
                    </Text>

                    {/* Main Body */}
                    <Text style={styles.subheader}>Experience:</Text>
                    <Text style={styles.text}>Your experience details go here.</Text>

                    <Text style={styles.subheader}>Projects:</Text>
                    <Text style={styles.text}>Your project details go here.</Text>

                    <Text style={styles.subheader}>Education:</Text>
                    <Text style={styles.text}>Your education details go here.</Text>
                </View>
                <View style={styles.footer}>
                    <Text>
                        <ReactIcon icon={FaLinkedin} height={10} width={10} />{' '}
                        <a href="https://www.linkedin.com/in/johndoe">LinkedIn</a>
                    </Text>
                    <Text>
                        <ReactIcon icon={FaGithub} height={10} width={10} /> <a href="https://github.com/johndoe">GitHub</a>
                    </Text>
                </View>
            </Page>
        </Document>
    );
};

export default Resume;
