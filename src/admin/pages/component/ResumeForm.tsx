import React from "react";
import {Form, Input, InputNumber, Button, Divider, Space, Switch} from "antd";
// import "antd/dist/antd.css";
import {PlusOutlined} from "@ant-design/icons";
import {FaTrash} from "react-icons/fa"; // Import Ant Design CSS

type Props = {
    data: any;
    onSubmit: (values: any) => void;
}

const styles : { [key:string]: React.CSSProperties }={
    listForm:{ display: "grid",
        gridTemplateColumns:"1fr 1fr",
        margin: 16,
        gridGap:"20px",
        alignItems: "center",
        borderRadius: 4,
        border: "1px dashed #808080",
        padding: 8,
    },

}
const ResumeForm = ({ data, onSubmit }: Props) => {
    const [form] = Form.useForm();

    const onFinish = (values:any) => {
        onSubmit(values);
    };

    return (
        <Form form={form} name="resume-form" onFinish={onFinish} initialValues={data} layout="vertical">
            <Divider>Personal Information</Divider>
            <Form.Item label="Name" name="name">
                <Input />
            </Form.Item>

            <Form.Item label="Title" name="title">
                <Input />
            </Form.Item>

            <Form.Item label="Email" name={["contact", "email"]}>
                <Input />
            </Form.Item>

            <Form.Item label="Phone" name={["contact", "phone"]}>
                <Input />
            </Form.Item>

            <Form.Item label="LinkedIn" name={["contact", "linkedin"]}>
                <Input />
            </Form.Item>

            <Divider>Summary</Divider>
            <Form.Item label="Summary" name="summary">
                <Input.TextArea rows={4} />
            </Form.Item>

            <Divider>Skills</Divider>
            <Form.Item label="Skills" name="skills">
                <Input.TextArea rows={4} />
            </Form.Item>

            <Divider>Projects</Divider>
            <Form.List name="projects">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space key={key} style={styles.listForm} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, "name"]}
                                    label="Project Name"
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "links"]}
                                    label="Links"
                                >
                                    <Input.TextArea rows={2} />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "description"]}
                                    label="Description"
                                >
                                    <Input.TextArea rows={4} />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "features"]}
                                    label="Features"
                                >
                                    <Input.TextArea rows={4} />
                                </Form.Item>
                                <Button onClick={() => remove(name)} icon={<FaTrash />} danger>Remove</Button>
                                <Form.Item {...restField} name={[name, "isactive"]} label="Active">
                                    <Switch />
                                </Form.Item>
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                                Add Project
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>

            <Divider>Experience</Divider>
            <Form.List name="experience">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space key={key} style={styles.listForm} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, "position"]}
                                    label="Position"
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "company"]}
                                    label="Company"
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "duration"]}
                                    label="Duration"
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "responsibilities"]}
                                    label="Responsibilities"
                                >
                                    <Input.TextArea rows={4} />
                                </Form.Item>
                                <Button onClick={() => remove(name)} icon={<FaTrash />} danger>Remove</Button>
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                                Add Experience
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>

            <Divider>Education</Divider>
            <Form.Item label="Degree" name={["education", 0, "degree"]}>
                <Input />
            </Form.Item>
            <Form.Item label="Institution" name={["education", 0, "institution"]}>
                <Input />
            </Form.Item>
            <Form.Item label="Duration" name={["education", 0, "duration"]}>
                <Input />
            </Form.Item>
            <Form.Item label="GPA" name={["education", 0, "gpa"]}>
                <InputNumber />
            </Form.Item>
            <Form.Item label="Courses" name={["education", 0, "courses"]}>
                <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ResumeForm;
