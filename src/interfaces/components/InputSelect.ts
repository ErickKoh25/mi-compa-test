import { IconType } from "react-icons"

interface FieldProps {
    label: string
    name: string
    type: string
    placeholder: string
    value: number | string
    hasError: boolean
}
interface OptionsProps {
    name: string
    value: string
} 
export interface InputSelectProps {
    field: FieldProps
    options: Array<OptionsProps>
    iconLeft?: IconType
    iconRight?: IconType
    error?: string
    iconError: IconType
    disabled: boolean
    onChange: Function
}