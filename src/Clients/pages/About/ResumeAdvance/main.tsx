import Experince from "./experince.tsx";
import {View} from "@react-pdf/renderer";
import Projects from "./projects.tsx";
import Education from "./education.tsx";
import Objective from "./Objective.tsx";

function Main(){
    return (
        <View style={{marginLeft:20}}>
            <Objective />
            <Experince />
            <Projects />
            <Education/>
        </View>
    )
}

export default Main;