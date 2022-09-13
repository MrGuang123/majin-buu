import React from "react";
import { useBuuTheme, BuuThemeOverride } from "@buu/theme";
import { TagPickerTag } from "../types";
import isBrightColor from './is-bright-color'

interface TagBadgeProps {
  className?: string;
  data: TagPickerTag;
  themeOverride?: BuuThemeOverride;
}

const TagBadge = ({ className, data, themeOverride }: TagBadgeProps) => {
  const theme = useBuuTheme(themeOverride)
  return (
    <div
      className="tagBadge"
      style={{
        color: isBrightColor(data.color) ? theme.colors['black'] : theme.colors['white'],
        backgroundColor: data.color
      }}
    >
      {data.name}
    </div>
  )
}

TagBadge.displayName = '@buu/tag-picker/TagBadge'

export default TagBadge