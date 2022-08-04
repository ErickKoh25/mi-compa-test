import {IconType} from 'react-icons';
export interface OfferBoxProps {
    icon: IconType
    title: string
    description:string
}

export interface ArrayOfferProps {
    objectIcons: Array<OfferBoxProps>
}