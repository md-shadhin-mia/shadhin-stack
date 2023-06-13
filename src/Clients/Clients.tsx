// @flow
import * as React from 'react';
import {ClientLayout} from "./ClientLayout.tsx";
import {Route, Routes} from "react-router-dom";
import {ContentNotFound} from "./ContentNotFound.tsx";
import {About} from "./pages/About";
import Home from "./pages/Home";
import TestDocument from "./pages/TestDocument";

type Props = object;
export const Clients = (props: Props) => {
    return (
        <Routes>
            <Route element={<ClientLayout />} >
                <Route index element={<About />} />
                <Route path="home" element={<Home/>}/>
                <Route path="test-docuement" element={<TestDocument/>}/>
                <Route path="*" element={<ContentNotFound/>} />
            </Route>
        </Routes>
    );
};