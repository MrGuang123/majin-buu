import React from "react";

interface TagPickerProps {
    query: string;
    hovered: number;
    dropdownOpened: boolean;
    controlRef: React.RefObject<HTMLButtonElement>;
}

const TagPicker = ({ query, hovered, dropdownOpened, controlRef }: TagPickerProps) => {
    return (
        <div>
            <button type="button" ref={controlRef}>Control</button>
        </div>
    )
}

export default TagPicker