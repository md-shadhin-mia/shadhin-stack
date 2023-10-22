// @flow
import * as React from 'react';
import {Text} from "@react-pdf/renderer";

type Props = {
    children: React.ReactNode
};

function Paragraph(props: Props) {
    return (
        <Text style={{fontSize: 11, marginBottom: 2, fontFamily: "Open Sans",paddingRight:"5", textAlign:"justify"}} wrap>{props.children}</Text>
    );
}

export default  Paragraph