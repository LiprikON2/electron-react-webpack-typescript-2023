import React from "react";
import { ActionIcon, rem } from "@mantine/core";
import { IconRotate } from "@tabler/icons-react";

import classes from "./ResetButton.module.css";

export const ResetButton = ({ onClick = () => {}, hidden = false }) => {
    const sectionIconSize = rem(56);
    return (
        <ActionIcon
            variant="transparent"
            aria-label="Reset"
            color="gray"
            size="lg"
            mx={`calc((${sectionIconSize} - var(--ai-size)) / 2)`}
            className={classes.actionIcon}
            style={{
                visibility: hidden ? "hidden" : "visible",
                cursor: hidden ? "auto" : "pointer",
            }}
            disabled={hidden}
            onClick={onClick}
        >
            <IconRotate style={{ width: "70%", height: "70%" }} />
        </ActionIcon>
    );
};
