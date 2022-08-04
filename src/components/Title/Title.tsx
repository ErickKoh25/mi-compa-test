import React from 'react'
import { TitleProps } from '../../interfaces/components/TitleProps';

const Title = ({className,title}:TitleProps) => {
  return (
    <h2 className={className}>{title}</h2>
  )
}

export default Title;
