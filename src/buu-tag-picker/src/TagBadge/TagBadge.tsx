import React from "react";
import { TagPickerTag } from "../types";
import isBrightColor from './is-bright-color'

interface TagBadgeProps {
  className?: string;
  data: TagPickerTag;
}

const TagBadge = ({ className, data }: TagBadgeProps) => {
  return (
    <div
      className="tagBadge"
      style={{
        color: isBrightColor(data.color) ? 'black' : 'white',
        backgroundColor: data.color
      }}
    >
      {data.name}
    </div>
  )
}

TagBadge.displayName = '@buu/tag-picker/TagBadge'

export default TagBadge