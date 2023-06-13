
import React, {ElementType} from 'react';
import {Document, Page, Text, View, StyleSheet, Image, Font} from '@react-pdf/renderer';
import logo from './../../../assets/react.svg';
import {FaHome} from "react-icons/fa";
import getPNGBlob from "../../../../Utils/GetPNGBlob.tsx";
import Header from "./header.tsx";
import Body from "./body.tsx";
import ArianaVioleta from "../../../../assets/fonts/ArianaVioleta-dz2K.ttf";
import OpenSansRegular from "../../../../assets/fonts/open-sans/OpenSans-Regular.ttf";
import OpenSansBold from "../../../../assets/fonts/open-sans/OpenSans-Bold.ttf";
import OpenSansSemiBold from "../../../../assets/fonts/open-sans/OpenSans-SemiBold.ttf";



// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding:5,
        fontSize:"11px",
        fontFamily: "Open Sans",
    }
});


type SvgImageProps = {
    height: number;
    width: number;
    icon: ElementType;
    color?: string
    backgroundColor?: string
}
export function ReactIcon(props: SvgImageProps) {
    return <Image src={getPNGBlob(props.icon, props.height, props.width, props.color, props.backgroundColor)} {...props} style={{height: props.height, width: props.width, padding:500 }}  />
}
//register font

Font.register({
    family: 'Ariana Violeta',
    src: ArianaVioleta,
})
Font.register({
    family: 'Open Sans',
    src: OpenSansRegular,
});

Font.register({
    family: 'Open Sans Bold',
    src: OpenSansBold,
})

Font.register({
    family: 'Open Sans SemiBold',
    src: OpenSansSemiBold,
})


Font.register({
    family: 'Lato',
    src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
    family: 'Lato Italic',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
    family: 'Lato Bold',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});
// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View fixed render={(page)=>{
                return page.pageNumber ==1?<Text></Text>:<Text style={{marginBottom:30}}></Text>
            }} />

            {/* You can add more sections as you need */}
            <Header />
            <Body/>
        </Page>
    </Document>
);

export default MyDocument;