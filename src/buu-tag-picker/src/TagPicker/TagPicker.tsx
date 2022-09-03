import React, { useRef } from "react";
import { DropdownBody } from '@buu/core'
import TagsList, { TagsListProps } from '../TagList/TagList'
import TagBadge from '../TagBadge/TagBadge'

interface TagPickerProps extends TagsListProps {
    dropdownOpened: boolean;
    controlRef: React.RefObject<HTMLButtonElement>;
    openDropdown(): void;
    closeDropdown(): void;
    noValueLabel: string;
}

const TagPicker = ({
    dropdownOpened,
    openDropdown,
    closeDropdown,
    controlRef,
    value,
    noValueLabel,
    ...others
}: TagPickerProps) => {
    const dropdownRef = useRef<HTMLDivElement>()

    return (
        <div className="tagPicker">
            <button className="control" type="button" ref={controlRef} onClick={openDropdown}>
                <TagBadge data={value || { id: 'no-value', color: 'grey', name: noValueLabel }} />
            </button>

            {
                dropdownOpened && (
                    <DropdownBody className="dropdown" elementRef={dropdownRef} noPadding>
                        <TagsList value={value} {...others} />
                    </DropdownBody>
                )
            }
        </div>
    )
}

export default TagPicker