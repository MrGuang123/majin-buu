import React, { useState } from "react";
import { ActionIcon } from '@buu/core'
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
  onEventsCaptureChange
}: TagItemProps) => {
  const [editDropdownOpened, setEditDropdownOpened] = useState(false)

  const openEditDropdown = () => {
    setEditDropdownOpened(true)
    onEventsCaptureChange(false)
  }

  const closeEditDropdown = () => {
    setEditDropdownOpened(false)
    onEventsCaptureChange(true)
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
        <ActionIcon onClick={openEditDropdown}>
          dots horizontal icon
        </ActionIcon>
      </div>

    </div>
  )
}

TagItem.displayName = '@buu/tag-picker/TagItem'

export default TagItem