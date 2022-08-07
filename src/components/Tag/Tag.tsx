import React from 'react'
import { TagProps } from '../../interfaces/components/TagProps';

const Tag = ({title, className}:TagProps) => {
  return (
    <div className={className}>{title}</div>
  )
}

export default Tag;
