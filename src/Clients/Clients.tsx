// @flow
import * as React from 'react';
import {ClientLayout} from "./ClientLayout.tsx";
import {Route, Routes} from "react-router-dom";
import {ContentNotFound} from "./ContentNotFound.tsx";
import {About} from "./pages/About";
import Home from "./pages/Home";

type Props = {

};
export const Clients = (props: Props) => {
    return (
        <Routes >
            <Route element={<ClientLayout />} >
                <Route index element={<About />} />
                <Route path="home" element={<Home/>}/>
                <Route path="*" element={<ContentNotFound/>} />
            </Route>
        </Routes>
    );
};