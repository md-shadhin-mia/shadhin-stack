import jsPDF from "jspdf";
export function svgToPng(svg: string, width: number, height: number, backgroundColor?: string):Promise<string> {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement("canvas");
        // canvas.style.position = "fixed";
        // canvas.style.top = "0";
        //
        // canvas.style.left = "0";
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if(ctx){
            ctx.fillStyle = backgroundColor??"#fff0"; // set white fill style
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const img = new Image();
            img.onload = function () {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                const b64 = canvas.toDataURL("image/png");
                resolve(b64);
            }
            img.src= `data:image/svg+xml;base64,${btoa(svg)}`
        }else{
            reject();
        }
    })

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

export default addSvgToDoc;