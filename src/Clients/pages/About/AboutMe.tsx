// Import React and Ant Design components
import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { Html5Outlined,  } from '@ant-design/icons';
import {IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoNodejs, IoLogoPython} from "react-icons/io5"
import {SiPython, SiDjango, SiMysql, SiAmazonaws, SiRedis,
    SiSpringboot, SiNginx, SiApachemaven,
    SiGit, SiJenkins, SiDocker,SiKubernetes,
    SiElasticsearch, SiJirasoftware, SiCloudways, SiBandrautomation,
} from "react-icons/Si";
import {Content} from "antd/lib/layout/layout";
type Skill = {name: string, icon: JSX.Element, description: string};
// Define an array of frameworks and technologies with name, icon and description properties
const skills: Skill[] = [
    { name: 'HTML & CSS', icon: <><Html5Outlined style={{fontSize:"24px"}}/><IoLogoCss3 style={{fontSize:"24px"}}/></>, description: 'I have a solid foundation in HTML and CSS, the building blocks of web development. I can create semantic and responsive web pages using modern techniques such as flexbox and grid layout.' },
    { name: 'JavaScript', icon: <IoLogoJavascript style={{fontSize:"24px"}} />, description: 'I have a strong proficiency in JavaScript, the most popular programming language for web development. I can write clean and efficient code using ES6+ features and best practices.' },
    { name: 'React', icon: <IoLogoReact style={{fontSize:"24px"}} />, description: 'I have extensive experience in using React, the most popular front-end library for building user interfaces. I can create dynamic and interactive web applications using hooks, custom components, state management, routing, and more.' },
    { name: 'Node.js', icon: <IoLogoNodejs style={{fontSize:"24px"}} />, description: 'I have a good knowledge of Node.js, the leading runtime environment for server-side development. I can create scalable and performant web servers using Express, MongoDB, GraphQL, and other technologies.' },
    { name: "Python", icon: <SiPython style={{fontSize:"24px"}} />, description: "I have a good knowledge of Python, a versatile and powerful programming language that is widely used for web development, data science, machine learning, and more. I can write clean and readable code using Python\"s syntax and features." },
    { name: "Django", icon: <SiDjango style={{fontSize:"24px"}} />, description: "I have experience in using Django, a high-level web framework for Python that follows the model-view-template (MVT) pattern. I can create robust and secure web applications using Django\"s features such as authentication, forms, ORM, admin interface, and more." },
    { name: "MySQL", icon: <SiMysql style={{fontSize:"24px"}} />, description: "I have a solid understanding of MySQL, a popular relational database management system that is widely used for storing and querying data. I can design and manipulate database schemas, tables, indexes, and queries using SQL language." },
    { name: "Redis", icon: <SiRedis style={{fontSize:"24px"}} />, description: "I have familiarity with Redis, an open-source in-memory data structure store that can be used as a database, cache, message broker, and more. I can use Redis to store and retrieve data in various formats such as strings, lists, sets, hashes, and more." },
    { name: "AWS", icon: <SiAmazonaws style={{fontSize:"24px"}} />, description: "I have exposure to AWS, the leading cloud computing platform that provides a variety of services for web development, such as EC2, S3, Lambda, DynamoDB, and more. I can use AWS to deploy and scale web applications using its features and tools." },
    { name: "Spring Boot", icon: <SiSpringboot style={{fontSize:"24px"}} />, description: "I have experience in using Spring Boot, a framework for building microservices based applications using Java. I can create and configure RESTful and GraphQL web APIs, integrate with streaming technologies like Apache Kafka, and use NoSQL databases like Cassandra." },
    { name: "Maven", icon: <SiApachemaven style={{fontSize:"24px"}} />, description: "I have familiarity with Maven, a software project management and comprehension tool that automates the build process and dependency management. I can use Maven to compile, test, package, and deploy application software using plugins and commands." },
    { name: "Git", icon: <SiGit style={{fontSize:"24px"}} />, description: "I have a good knowledge of Git, a distributed version control system that enables collaboration and code management. I can use Git to create and manage repositories, branches, commits, merges, pull requests, and more." },
    { name: "Jenkins", icon: <SiJenkins style={{fontSize:"24px"}} />, description: "I have exposure to Jenkins, a continuous integration and continuous delivery (CI/CD) tool that automates the software development lifecycle. I can use Jenkins to create and run pipelines, jobs, stages, steps, and more." },
    { name: "Docker", icon: <SiDocker style={{fontSize:"24px"}} />, description: "I have proficiency in Docker, a platform that enables the creation and deployment of applications using containers. I can use Docker to build, run, and manage containerized applications using images, containers, volumes, networks, and more." },
    { name: "Kubernetes", icon: <SiKubernetes style={{fontSize:"24px"}} />, description: "I have familiarity with Kubernetes, an open-source system for automating the deployment, scaling, and management of containerized applications. I can use Kubernetes to create and manage clusters, pods, services, deployments, and more." },
    { name: "ELK Stack", icon: <SiElasticsearch style={{fontSize:"24px"}} />, description: "I have experience in using ELK Stack, a collection of three open-source products - Elasticsearch, Logstash, and Kibana - that enable the ingestion, analysis, and visualization of data. I can use ELK Stack to collect, process, store, search, and display data from various sources." },
    { name: "Agile Software Development", icon: <SiJirasoftware style={{fontSize:"24px"}} />, description: "I have exposure to Agile Software Development, a set of principles and practices that promote adaptive planning, evolutionary development, early delivery, and continuous improvement. I can use Agile methodologies such as Scrum, Kanban, SAFe to deliver high-quality software products in an iterative and incremental manner." },
    { name: "DevOps", icon: <> <SiBandrautomation style={{fontSize:"24px"}} /> <SiCloudways style={{fontSize:"24px"}} /></>, description: "I have familiarity with DevOps, a culture and practice that aims to unify software development and operations. I can use DevOps tools and techniques such as containers, cloud, automation, security, configuration management, CI/CD to deliver software faster and more reliably." }
];

// Define a functional component named SkillCard that takes a skill object as props
const SkillCard = ({ skill }: { skill: Skill }) => {
    // Return a JSX element that renders a card component with the skill icon, name and description
    return (
        <Card className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <Typography.Title level={4} className="skill-title">{skill.name}</Typography.Title>
            <Typography.Paragraph className="skill-desc">{skill.description}</Typography.Paragraph>
        </Card>
    );
};

// Define a functional component named SkillGrid that takes an array of skills as props
const SkillGrid = ({ skills }: { skills: Skill[] }) => {
    // Return a JSX element that renders a row component with four columns for each skill
    return (
        <Content style={{width:"100%", overflow:"hidden"}}>
            <Row gutter={[16, 16]} style={{margin:"0"}}>
                {skills.map((skill, index) => (
                    <Col xs={24} md={12} lg={6} key={index}>
                        <SkillCard skill={skill} />
                    </Col>
                ))}
            </Row>

        </Content>
    );
};

// Define a functional component named AboutMe
const AboutMe = () => {
    // Define some constants for the heading and description
    const heading = 'About Me';
    const description = `I'm a fullstack developer with experience in building scalable and responsive web applications using modern technologies. I enjoy learning new things and solving challenging problems. I'm passionate about creating beautiful and user-friendly interfaces with React and Ant Design. I also have strong skills in backend development using Node.js, MongoDB, Express, and GraphQL.`;

    // Return a JSX element that renders an about me section
    return (

            <Content style={{ padding: 24, minHeight: 280}}>
                        <Typography.Title level={2} className="name font-weight-bold mb-1">{heading}</Typography.Title>
                        <Typography.Paragraph className="bio mb-4">{description}</Typography.Paragraph>
                        <Typography.Title level={3} className="name font-weight-bold mb-1">Frameworks and Technologies</Typography.Title>
                        {/* Render the SkillGrid component with the skills array as props */}
                        <SkillGrid skills={skills} />
            </Content>
    );
};

// Export the component
export default AboutMe;
