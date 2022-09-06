import React, { useEffect, useRef, useState } from "react";
import { useClickOutside } from '@buu/hooks'
import { DropdownBody, Input, ActionIcon, ColorSwatch } from "@buu/core";
import { TagPickerColor, TagPickerTag } from "../types";

export interface TagEditProps {
  opened: boolean;
  initialValues: TagPickerTag;
  colors: TagPickerColor[];
  deleteLabel: string;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
  onTagDelete(id: string): void;
  onClose(): void;
  id: string;
}

const TagEdit = ({
  opened,
  onClose,
  initialValues,
  deleteLabel,
  colors,
  onTagUpdate,
  onTagDelete,
  id
}: TagEditProps) => {
  const dropdownRef = useRef<HTMLDivElement>()
  const [values, setValues] = useState<Omit<TagPickerTag, 'id'>>()
  const handleNameChange = (value: string) => setValues(current => ({ ...current, name: value }))
  const handleColorChange = (value: string) => setValues(current => ({ ...current, color: value }))

  const handleSubmit = () => {
    onTagUpdate(id, { name: values.name, color: values.color })
    onClose()
  }

  const handleDelete = () => {
    onTagDelete(id)
    onClose()
  }

  useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  useClickOutside(dropdownRef, onClose)

  if (!opened) {
    return null
  }

  const colorsList = colors.map(color => (
    <button
      className="colorControl"
      type="button"
      key={color.color}
      onClick={() => handleColorChange(color.color)}
    >
      <div className="colorControlBody">
        <ColorSwatch color={color.color} />
        <span className="colorLabel">{color.name}</span>
      </div>
      {color.color === values.color && 'checkIcon'}
    </button>
  ))

  return (
    <DropdownBody className="tagEdit" elementRef={dropdownRef} noPadding>
      <div className="header">
        <Input
          value={values.name}
          onChange={event => handleNameChange(event.currentTarget.value)}
          autoFocus
        />
        <ActionIcon theme="success" onClick={handleSubmit}>
          checkIcon
        </ActionIcon>
      </div>

      <button className="deleteControl" type="button" onClick={handleDelete}>
        TrashIcon
        <span className="deleteLabel">{deleteLabel}</span>
      </button>

      <div className="colorsList">{colorsList}</div>
    </DropdownBody>
  )
}

TagEdit.displayName = '@buu/tag-picker/TagEdit'

export default TagEdit