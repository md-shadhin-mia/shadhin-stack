import {Button} from "antd";
import {Component, createRef, ReactNode} from "react";
import jsPDF from 'jspdf';
import {renderToString} from "react-dom/server";
import {FaAddressBook,  FaPhoneAlt} from "react-icons/fa";
import {Canvg} from "canvg";
import {FcMindMap} from "react-icons/fc";
import html2canvas from "html2canvas";

(window as any).canvg = Canvg;
(window as any).html2canvas = html2canvas;


interface ResumeGenerateProps {
    children?: ReactNode
}

function addSvgToDoc(svg: string, doc: jsPDF,x:number,y:number, width: number, height: number) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement("canvas");
        // canvas.style.position = "fixed";
        // canvas.style.top = "0";
        //
        // canvas.style.left = "0";
        canvas.width = 100;
        canvas.height = 100;
        const ctx = canvas.getContext("2d");
        if(ctx){
            ctx.fillStyle = "#fff0"; // set white fill style
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            const img = new Image();
            img.onload = function () {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                const b64 = canvas.toDataURL("image/png");
                doc.addImage(b64, 'PNG', x, y, width, height);
                resolve(1);
            }
            img.src= `data:image/svg+xml;base64,${btoa(svg)}`
        }else{
            reject();
        }
    })
}


export default class ResumeGenerate extends Component<ResumeGenerateProps> {
    private previewRef: React.RefObject<HTMLIFrameElement>;
    private doc: jsPDF | null = null;

    constructor(props: ResumeGenerateProps) {
        super(props);
        this.previewRef = createRef<HTMLIFrameElement>();
        this.generatePDF = this.generatePDF.bind(this);
        this.doc = new jsPDF({
            unit: 'pt',
            format: 'a4'
        });
        this.generatePDF=this.generatePDF.bind(this);
    }

    async generatePDF() {
        if (this.doc) {
            // Set the fill color to gray
            // this.doc.setFillColor(0,0,0);
            // this.doc.rect(0,0,575,640,'F');
            this.doc.setFillColor(240, 240, 240);


            // Draw a rectangle at position (10, 10) with width 100 and height 50
            this.doc.roundedRect(10, 10, 575, 80, 5, 5, "F");

            // Set the text color to black
            this.doc.setTextColor(0, 0, 0);
            // this.doc.loadFile('https://fonts.googleapis.com/css?family=Roboto', 'Roboto', 'normal')

            // Set the font size to 16
            this.doc.setFontSize(24);


// Write some text inside the rectangle at position (60, 35)
            this.doc.text('MD SHADHIN MIA', 15, 35);
            this.doc.setFontSize(16);
            this.doc.setTextColor("#3e2164")
            this.doc.text(
                'Software Engineer',
                15, 58);

            this.doc.setTextColor("#100f0f")
            this.doc.setFontSize(11);

            this.doc.text(
                '+8801302-591377',
                25, 80);
            const textLen = this.doc.getStringUnitWidth("+8801302-591377");
            this.doc.text("mail:mdshadhinkn@gmail.com",textLen*15, 80);


            await addSvgToDoc(renderToString(<FaPhoneAlt fill="#3e2164" />), this.doc,15,72, 11, 11);
            await addSvgToDoc(renderToString(<FaAddressBook fill="#3e2164" />), this.doc,123,72, 11, 11);
            await addSvgToDoc(renderToString(<FcMindMap fill="#3e2164" />), this.doc,280,72, 11, 11);
            await this.doc.addImage("https://avatars.githubusercontent.com/u/65449833?s=400&u=e9e3be1b2f136732fc6a36c0496b76b0d654576b&v=4", 500,10, 80, 80)

            this.doc.setFillColor(240, 240, 240);
            // Draw a rectangle at position (10, 10) with width 100 and height 50
            this.doc.roundedRect(420, 100, 165, 300, 5, 5, "F");
            this.doc.setFontSize(14);
            // this.doc.loadFile('https://fonts.googleapis.com/css?family=Roboto', 'Roboto', 'normal')
            // this.doc.loadFile('https://fonts.googleapis.com/css?family=Roboto', 'Roboto', 'normal')
            // this.doc.addFont('https://fonts.googleapis.com/css?family=Roboto' );
            this.doc.text("Persional Information", 502.5, 120, {align: "center"});
            await addSvgToDoc(renderToString(<FaPhoneAlt fill="#3e2164" />), this.doc,420+165+10,150, 11, 11);


        }


    }

    componentDidMount() {
        // console.log(this.svgRef.current)
        // if(this.doc){
            this.generatePDF()
                .then(()=>{
                    if(this.previewRef.current && this.doc)
                        this.previewRef.current.src = this.doc.output("datauristring");
                });
        // }
    }

    render(): ReactNode {
        return <div>
            {this.doc && <section>
                <iframe ref={this.previewRef} width={"100%"} height={"400px"}></iframe>
            </section>}
            <Button onClick={ async()=>{
                await this.generatePDF();
                this.doc?.save("Md Shadhin Mia")
            }} id="cv">Create CV</Button>
        </div>
    }
}