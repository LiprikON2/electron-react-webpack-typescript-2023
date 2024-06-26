import React, { useEffect } from "react";
import { Button, Center, Container, Skeleton, Space } from "@mantine/core";

import { useColorScheme } from "~/renderer/hooks";
import { About } from "./About";

export const Test = () => {
    const { dark, setColorScheme } = useColorScheme();
    /**
     * Toggle Theme
     */
    const toggleTheme = () => {
        setColorScheme(dark ? "light" : "dark");
    };

    return (
        <Container p="xl">
            <Center>
                <Button onClick={() => toggleTheme()}>Toggle Theme</Button>
            </Center>
            <Space h="md" />
            <About />

            {/* {Array(20)
                .fill(0)
                .map((_, index) => (
                    <Skeleton key={index} h={28} mt="sm" animate={false} />
                ))} */}
        </Container>
    );
};
