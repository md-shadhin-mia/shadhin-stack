import {PDFViewer} from "@react-pdf/renderer";
import Doc from "./Doc.tsx";
import ResumeAdvance from "../About/ResumeAdvance";

function TestDocument() {
    return (
        <div>
            <h1>Test Document</h1>
            <PDFViewer style={{ flex: 1, width:"100%", height:"100vh" }}>
                {/*<Doc />*/}
                <ResumeAdvance />
            </PDFViewer>
        </div>
    );
}

export default TestDocument;