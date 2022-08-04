
export interface ActionButtonProps {
    className: string
    title?: string
    action?: Function
    type: 'submit' | 'reset' | 'button'
    disabled?: boolean
}