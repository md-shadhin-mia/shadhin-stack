// Import React and Ant Design components
import React from 'react';
import {Row, Col, Typography, Avatar, Button, Space} from 'antd';
import { RightCircleOutlined, FileTextOutlined } from '@ant-design/icons';
import {Content} from "antd/lib/layout/layout";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

// Define a functional component named AboutMe
const HeroSection = () => {
    // Define some constants for the profile data
    const name = 'MD Shadhin Mia';
    const tagline = 'Senior Software Engineer';
    const bio = `I'm a software engineer specialised in frontend and backend development for complex scalable web apps. I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume.`;
    const blogUrl = 'blog-home.html';
    const portfolioUrl = 'portfolio.html';
    const resumeUrl = 'resume.html';
    const imageUrl = 'https://lh3.googleusercontent.com/a/AAcHTtf5j60FSy1Y5orAoxnqUiF0YIcQgf2DrAAQ83F6q-jF1Q=s360-c-no';
    const screen = useBreakpoint();
    // Return a JSX element that renders an about me section
    return (
        <section className="about-me-section p-3 p-lg-5 theme-bg-light">
            <Content style={{ padding: 24, minHeight: 280}}>
                <Row className="profile-teaser" style={{textAlign:screen.md?"left":"center"}}>
                    <Col lg={16} md={12} span={24} style={{padding:"2rem"}}>
                        <Typography.Title level={2} className="name font-weight-bold mb-1">{name}</Typography.Title>
                        <Typography.Text type="secondary" className="tagline mb-3">{tagline}</Typography.Text>
                        <Typography.Paragraph className="bio mb-4">{bio}</Typography.Paragraph>
                        <Space>
                            <Button type="primary" icon={<RightCircleOutlined />} href={portfolioUrl} >View Portfolio</Button>
                            <Button type="default" icon={<FileTextOutlined />} href={resumeUrl} >View Resume</Button>
                        </Space>
                    </Col>
                    <Col lg={8} md={12} span={24} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Space>
                            <Avatar size={200} src={imageUrl} />
                        </Space>
                    </Col>
                </Row>
            </Content>
        </section>
    );
};

// Export the component
export default HeroSection;

