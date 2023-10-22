import {FileTextOutlined} from "@ant-design/icons";
import ReactPDF, {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import {Button, ButtonProps, Modal} from "antd";
import React, {ReactElement, useState} from "react";
import DocumentProps = ReactPDF.DocumentProps;

interface Props {
    label?:React.ReactNode,
    children: ReactElement<DocumentProps>
    button?: ButtonProps,
    defaultOpen?: boolean
}
function ResumeViewer(props: Props) {
    const [open, setOpen] = useState<boolean>(!!props.defaultOpen);
    return (
        <>

            <Button type="default" icon={<FileTextOutlined />} {...props.button} onClick={()=>setOpen(true)}>
                {props.label}
            </Button>
                <Modal
                    title="Modal 1000px width"
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={"100%"}
                    zIndex={10000}
                    footer={[
                        <Button key="back" onClick={() => setOpen(false)} style={{margin:"10px"}}>Close</Button>,
                        <PDFDownloadLink document={props.children} fileName="md-shadhin-mia.pdf">
                            {({ blob, url, loading, error }) =>
                                 <Button type="primary" loading={loading} onClick={() => setOpen(false)}>
                                    Download
                                </Button>
                            }
                        </PDFDownloadLink>
                    ]}
                >
                    <div style={{height:"80vh"}}>
                        <PDFViewer style={{width:"100%", height:"100%"}} >
                            {props.children}
                        </PDFViewer>
                    </div>

                </Modal>
        </>
    )
}

export default ResumeViewer;