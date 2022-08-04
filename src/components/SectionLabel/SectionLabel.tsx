import React from 'react'
import { SectionLabelProps } from '../../interfaces/components/SectionLabel';

const SectionLabel = ({name, label}:SectionLabelProps) => {
  return (
    <label className="section-label" htmlFor={name}>{label}</label>
  )
}

export default SectionLabel;
