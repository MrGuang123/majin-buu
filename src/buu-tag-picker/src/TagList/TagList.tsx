import React, { useRef } from "react";
import useFocusTrap from '@charlietango/use-focus-trap'
import { Input, Text, useBuuTheme, BuuThemeOverride } from "@buu/core";
import TagItem from "../TagItem/TagItem";
import { TagPickerColor, TagPickerTag } from "../types";
import TagBadge from "../TagBadge/TagBadge";

export interface TagsListProps {
  description?: string;
  searchPlaceholder?: string;
  searchQuery: string;
  onSearchChange(query: string): void;
  hovered: number;
  value: TagPickerTag;
  data: TagPickerTag[];
  canCreate: boolean;
  createLabel?: string;
  deleteLabel?: string;
  colors: TagPickerColor[];
  createColor: string;
  onSearchChange(query: string): void;
  onCreate(): void;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
  onTagDelete(id: string): void;
  onChange(value: TagPickerTag): void;
  onHoveredChange(index: number): void;
  onEventsCaptureChange(shouldCaptureEvents: boolean): void;
  onArrowsCaptureChange(shouldCaptureArrowEvents: boolean): void;
  themeOverride?: BuuThemeOverride;
}

const TagList = ({
  searchQuery,
  searchPlaceholder,
  description,
  hovered,
  data,
  canCreate,
  createLabel,
  deleteLabel,
  colors,
  createColor,
  onSearchChange,
  onCreate,
  onTagDelete,
  onTagUpdate,
  onChange,
  onHoveredChange,
  onEventsCaptureChange,
  onArrowsCaptureChange,
  themeOverride
}: TagsListProps) => {
  const focusTrapRef = useFocusTrap()

  const tags = data.map((tag, index) => (
    <TagItem
      key={tag.id}
      index={index}
      hovered={hovered}
      data={tag}
      onSelect={onChange}
      onTagUpdate={onTagUpdate}
      onHover={onHoveredChange}
      colors={colors}
      deleteLabel={deleteLabel}
      onTagDelete={onTagDelete}
      onEventsCaptureChange={onEventsCaptureChange}
    />
  ))

  return (
    <div className="tagsList" ref={focusTrapRef}>
      <Input
        className="searchInput"
        placeholder={searchPlaceholder}
        value={searchQuery}
        onChange={event => onSearchChange(event.currentTarget.value)}
        onFocus={() => onArrowsCaptureChange(true)}
        onBlur={() => {
          onHoveredChange(-1)
          onArrowsCaptureChange(false)
        }}
        icon={`icon`}
      />
      {description && (
        <Text color="gray" size="sm" className="description">
          {description}
        </Text>
      )}
      <div className="tags">
        {tags}
        {canCreate && (
          <button
            className="createControl"
            type="button"
            onClick={onCreate}
            onMouseEnter={() => onHoveredChange(data.length)}
          >
            <span className="createControlLabel">{createLabel || '+'}</span>
            <TagBadge data={{ id: 'create-placeholder', color: createColor, name: searchQuery }} />
          </button>
        )}
      </div>
    </div>
  )
}

TagItem.displayName = '@buu/tag-picker/TagItem'

export default TagList