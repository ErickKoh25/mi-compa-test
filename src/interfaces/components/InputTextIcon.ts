import { IconType } from "react-icons"

interface FieldProps {
    label: string
    name: string
    type: string
    placeholder: string
    value: number | string
    hasError: boolean
}
export interface InputTextIconProps {
    field: FieldProps
    iconLeft?: IconType
    iconRight?: IconType
    error?: string
    iconError: IconType
    disabled: boolean
    onChange?: Function
    setFunction?: Function
}

export interface typeRef {
    ref: React.RefObject<HTMLDivElement>
}