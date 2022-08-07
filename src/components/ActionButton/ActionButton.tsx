import React from 'react'
import { Button } from 'react-bootstrap';
import { ActionButtonProps } from '../../interfaces/components/ActionButtonProps';

const ActionButton = ({type, className, title, action, disabled}:ActionButtonProps) => {
    const handleClick = () => {
        if(action) {
            action()
        }
    }
  return (
    <Button className={className} type={type} onClick={handleClick} disabled={disabled}>{title}</Button>
  )
}

export default ActionButton;
