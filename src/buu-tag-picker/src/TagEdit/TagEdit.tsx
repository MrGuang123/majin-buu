import React, { useEffect, useState } from "react";
import { useClickOutside } from '@buu/hooks'
import { DropdownBody, Input, ActionIcon, ColorSwatch } from "@buu/core";
import { useBuuTheme, BuuThemeOverride } from "@buu/theme";
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
  themeOverride?: BuuThemeOverride;
}

const TagEdit = ({
  opened,
  onClose,
  initialValues,
  deleteLabel,
  colors,
  onTagUpdate,
  onTagDelete,
  id,
  themeOverride
}: TagEditProps) => {
  const dropdownRef = useClickOutside(onClose)
  const [values, setValues] = useState<Omit<TagPickerTag, 'id'>>()
  const handleNameChange = (value: string) => setValues(current => ({ ...current, name: value }))
  const handleColorChange = (value: string) => setValues(current => ({ ...current, color: value }))

  const handleSubmit = () => {
    onTagUpdate(id, { name: values.name, color: values.color })
    onClose()
  }

  const handleKeyDownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.nativeEvent.code === 'Escape') {
      onClose()
    }
  }

  const handleDelete = () => {
    onTagDelete(id)
    onClose()
  }

  useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

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
    <DropdownBody
      className="tagEdit"
      ref={dropdownRef}
      noPadding
      onKeyDownCapture={handleKeyDownCapture}
    >
      <div className="header">
        <Input
          className="input"
          value={values.name}
          onChange={event => handleNameChange(event.currentTarget.value)}
          onKeyDown={event => event.nativeEvent.code === 'Enter' && handleSubmit()}
          autoFocus
        />
        <ActionIcon color="teal" onClick={handleSubmit}>
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