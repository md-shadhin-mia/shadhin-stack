import { Spin } from "antd";

function LoadingPage() {
    return <div style={{
        height:"100vh",
        width:"100vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }} >
        <Spin size="large" tip="Loading"/>
    </div>
}

export default LoadingPage;