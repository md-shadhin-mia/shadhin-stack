import React from "react";
import {
    Canvg,
    presets
} from 'canvg'

const preset = presets.offscreen()
// react server import
import {renderToString} from "react-dom/server";
import {svgToPng} from "../admin/pages/utils/addSvgToDoc.ts";
import {backgroundColor} from "html2canvas/dist/types/css/property-descriptors/background-color";

// A function that takes a react icon component, height and width as parameters and returns a base64 PNG string
async function GetPNGBlob(ReactIcon: React.ElementType, height: number, width: number, color?: string, backgroundColor?: string): Promise<string> {
    // // Create a Canvas element
    // const canvas = document.createElement("canvas");
    // canvas.width = width;
    // canvas.height = height;
    //
    // // Get the SVG string from the icon component
    const svg = renderToString(<ReactIcon style={color?{fill:color, stroke:color}:undefined}/>);
    //
    // // Render the SVG on the Canvas using Canvg
    // Canvg.fromString(canvas, svg);
    //
    // // Get the base64 PNG string from the Canvas
    // const png = canvas.toDataURL("image/png");
    //
    // // Return the base64 PNG string
    // return png;

    // const canvas = new OffscreenCanvas(1000, 1000)
    // const ctx = canvas.getContext('2d')
    // const v = Canvg.fromString(ctx!, svg, {
    //     scaleHeight: 2,
    //     scaleWidth: 2
    // })
    //
    // // Render only first frame, ignoring animations and mouse.
    // await v.render()
    //
    // const blob = await canvas.toDataURL("image/png");
    // // const pngUrl = URL.createObjectURL(blob)
    //
    // return blob
    return await svgToPng(svg, height*5, width*5, backgroundColor);
}


export default GetPNGBlob;