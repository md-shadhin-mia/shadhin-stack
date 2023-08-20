import { Spin } from "antd";
type Props={
    fullScreen?:boolean
}
function LoadingPage(props:Props={fullScreen:false}) {
    return <div style={{
        height:props.fullScreen?"100vh":undefined,
        width:props.fullScreen? "100vw":"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }} >
        <Spin size="large" tip="Loading"/>
    </div>
}

export default LoadingPage;

//default props