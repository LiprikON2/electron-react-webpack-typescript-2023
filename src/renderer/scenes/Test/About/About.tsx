import React from "react";

import { Versions } from "./components/Versions";

export const About = () => {
    return (
        <Versions>
            <Versions.Item type="bookord" />
            <Versions.Item type="electron" />
            <Versions.Item type="chrome" />
            <Versions.Item type="license" />
        </Versions>
    );
};
