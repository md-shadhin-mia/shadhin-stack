// @flow
import * as React from 'react';
import HeroSelect from "./HeroSection.tsx";
import AboutMe from "./AboutMe.tsx";

type Props = {

};

export function About(props: Props) {
    return (
        <>
            <HeroSelect />
            <AboutMe />
        </>
    );
}