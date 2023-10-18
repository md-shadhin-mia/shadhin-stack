// @flow
import * as React from 'react';
import ResumeForm from "./component/ResumeForm.tsx";

type Props = {};
const ResumeCreator = (props: Props) => {
    const [data, setData] = React.useState({name:"Md Shadhin Mia"});
    const onSubmit = (values: any) => {
        console.log(values);
        setData(values);
    }
    return (
        <div style={{padding:"16px"}}>
            <h2>Create your resume</h2>
            <ResumeForm data={data} onSubmit={onSubmit} />
        </div>
    );
};
export default ResumeCreator;