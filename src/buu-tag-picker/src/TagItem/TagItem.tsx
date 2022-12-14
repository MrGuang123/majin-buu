import React, { useState, useRef } from "react";
import { ActionIcon } from '@buu/core'
import { useBuuTheme, BuuThemeOverride } from "@buu/theme";
import { TagPickerColor, TagPickerTag } from "../types";
import TagEdit from '../TagEdit/TagEdit'
import TagBadge from '../TagBadge/TagBadge'

interface TagItemProps {
  index: number;
  hovered: number;
  data: TagPickerTag;
  colors: TagPickerColor[];
  deleteLabel: string;
  onSelect(value: TagPickerTag): void;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
  onTagDelete(id: string): void;
  onHover(index: number): void;
  onEventsCaptureChange(shouldCaptureEvents: boolean): void;
  themeOverride?: BuuThemeOverride;
}

const TagItem = ({
  index,
  hovered,
  data,
  onSelect,
  onTagUpdate,
  onHover,
  deleteLabel,
  colors,
  onTagDelete,
  onEventsCaptureChange,
  themeOverride
}: TagItemProps) => {
  const controlRef = useRef<HTMLButtonElement>()
  const [editDropdownOpened, setEditDropdownOpened] = useState(false)

  const openEditDropdown = () => {
    setEditDropdownOpened(true)
    onEventsCaptureChange(false)
  }

  const closeEditDropdown = () => {
    setEditDropdownOpened(false)
    onEventsCaptureChange(true)
    setImmediate(() => controlRef.current.focus())
  }

  return (
    <div
      className="className"
      onMouseEnter={() => onHover(index)}
    >
      <TagEdit
        opened={editDropdownOpened}
        onClose={closeEditDropdown}
        initialValues={data}
        deleteLabel={deleteLabel}
        colors={colors}
        onTagUpdate={onTagUpdate}
        onTagDelete={onTagDelete}
        id={data.id}
      />
      <div className="body">
        <button type="button" className="control" onClick={() => onSelect(data)}>
          <TagBadge data={data} />
        </button>
        <ActionIcon onClick={openEditDropdown} ref={controlRef}>
          dots horizontal icon
        </ActionIcon>
      </div>

    </div>
  )
}

TagItem.displayName = '@buu/tag-picker/TagItem'

export default TagItem