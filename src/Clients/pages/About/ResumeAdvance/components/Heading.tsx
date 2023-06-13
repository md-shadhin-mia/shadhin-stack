// @flow
import {ElementType, ReactNode} from "react";
import {Text, StyleSheet} from "@react-pdf/renderer";
import {ReactIcon} from "../index.tsx";

type Props = {
    children: ReactNode;
    size:'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'d1'|'d2'|'d3'|'d4'|'d5'|'d6';
    icon?:ElementType;
};
//font size for h1, h2, h3, h4, h5, h6, d1, d2, d3, d4, d5, d6
const fontSizes: Record<string, number> = {
    '1': 30,
    '2': 24,
    '3': 20,
    '4': 16,
    '5': 14,
    '6': 12,
}
const  iconSizes: Record<string, number> = {
    '1': 30,
    '2': 24,
    '3': 20,
    '4': 16,
    '5': 14,
    '6': 12
}
function Heading(props: Props) {
    const styles = StyleSheet.create({
        header: {
            fontSize: fontSizes[props.size.charAt(1)],
            fontFamily: props.size.charAt(0)=="h"?"Open Sans Bold":"Open Sans",
            marginBottom: 10,
        }
    })
    return (
        <Text style={styles.header}>
            {props.icon&&
                <ReactIcon
                    height={iconSizes[props.size.charAt(1)]}
                    width={iconSizes[props.size.charAt(1)]}
                    icon={props.icon} color="#61dbfb"/>
            }
            {props.children}
        </Text>
    );
}

export default Heading;