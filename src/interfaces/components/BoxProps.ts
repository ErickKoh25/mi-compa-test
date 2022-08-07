interface Images {
    src: string
    alt: string
}
export interface BoxProps {
    className: string
    title: string
    text?: string
    titleButton?: string
    action?: Function
    images?: Array<Images>
}