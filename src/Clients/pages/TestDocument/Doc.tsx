import {Document, Page, Text, View, Font} from "@react-pdf/renderer";


Font.register({
    family: 'Open Sans',
    src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

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

function Doc() {
    return <Document
        author="MD Shadhin"
        creator="MD Shadhin"
        keywords="awesome, resume, start wars"
        subject="The resume of Shadhin mia"
        title="Resume"
    >
        <Page size="A4">
            <View style={{flexDirection: "column", fontFamily: "Lato"}}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae eius enim, hic nihil qui
                    quod recusandae temporibus ut veritatis. Ad blanditiis dignissimos dolorem excepturi fuga harum,
                    nesciunt omnis voluptatibus.</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <View style={{flex: 1}}>
                    <View style={{backgroundColor: "red"}}>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur cupiditate
                            deleniti dicta et fugiat harum, iusto maiores nihil nisi officia pariatur praesentium
                            provident quo reprehenderit sunt ullam, voluptatem voluptatum!</Text>


                    </View>
                </View>
                <View style={{width: 500}}>
                    <Text>Hello World</Text>
                </View>
            </View>
        </Page>
    </Document>
}

export default Doc;