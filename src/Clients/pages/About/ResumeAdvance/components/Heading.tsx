// @flow
import {ElementType, ReactNode} from "react";
import ReactPDF, {Text, StyleSheet, View} from "@react-pdf/renderer";
import {ReactIcon} from "../index.tsx";
import Styles = ReactPDF.Styles;

type Props = {
    style?: Styles;
    children: ReactNode;
    size:'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'d1'|'d2'|'d3'|'d4'|'d5'|'d6';
    icon?:ElementType;

};
//font size for h1, h2, h3, h4, h5, h6, d1, d2, d3, d4, d5, d6
const fontSizes: Record<string, number> = {
    '1': 30,
    '2': 22,
    '3': 16,
    '4': 12,
    '5': 11,
    '6': 8.25,
}
const  iconSizes: Record<string, number> = {
    '1': 28,
    '2': 20,
    '3': 14,
    '4': 10,
    '5': 10,
    '6': 8,
}
function Heading(props: Props) {
    const styles = StyleSheet.create({
        header: {
            fontSize: fontSizes[props.size.charAt(1)],
            fontFamily: props.size.charAt(0)=="h"?"Open Sans Bold":"Open Sans",
            marginBottom: fontSizes[props.size.charAt(1)]/6,
        },
        iconContainer:{
            backgroundColor:"#61dbfb",
            padding:3,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:5,
        },
        ...props.style
    })
    return (
        <View style={{flexDirection:"row", alignItems:"center"}}>
            {props.icon&&
                <View style={styles.iconContainer}><ReactIcon
                    height={iconSizes[props.size.charAt(1)]}
                    width={iconSizes[props.size.charAt(1)]}
                    icon={props.icon} color="#000000"/></View>
            }
        <Text style={styles.header}>
            {props.children}
        </Text></View>
    );
}

export default Heading;