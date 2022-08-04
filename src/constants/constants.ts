import { GiPirateGrave, GiSpy } from "react-icons/gi";
import { TbCarCrane } from "react-icons/tb";
import { FaCarCrash, FaAmbulance, FaBalanceScale } from "react-icons/fa";
import elFinanciero from "../assets/img/elfinanciero.webp";
import elUniversal from "../assets/img/universal.webp";
import elEconomista from "../assets/img/eleconomista.webp";
import elSoldeMexico from "../assets/img/elsoldemexico.png";
import insignia from "../assets/img/insignia.webp";
import milenio from "../assets/img/milenio.webp";
import markerLogo from "../assets/img/logo.png"
/* FOOTER ICONS */
import { BsFillTelephoneInboundFill, BsFillHouseDoorFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi"
import { FaMapMarkerAlt, FaLock, FaCity, FaRoad, FaTrash, FaEdit } from "react-icons/fa";
import {
    AiFillInstagram,
    AiFillFacebook,
    AiFillLinkedin,
    AiOutlineNumber,
} from "react-icons/ai";
import { MdWarning, MdNaturePeople, MdEmail, MdPassword } from "react-icons/md";
import { RiCommunityFill, RiArrowDownSLine } from "react-icons/ri";
import { GiModernCity } from "react-icons/gi";
import { TbNumbers } from "react-icons/tb"

export const BENEFITS_ICONS = [
    {
        icon: TbCarCrane,
        title: "Asistencia vial",
        description: "3 grúas al año, 5 litros de gasolina, cambio de refacción y paso de corriente"
    },
    {
        icon: FaCarCrash,
        title: "Daños a otros autos",
        description: "Hasta $2 Millones"
    },
    {
        icon: FaAmbulance,
        title: "Servicio médico a ti y a otros",
        description: "Hasta $200,000 mil"
    },
    {
        icon: FaBalanceScale,
        title: "Ayuda de abogados",
        description: "Hasta $2 Millones"
    },
    {
        icon: GiPirateGrave,
        title: "Muerte de otros en accidente",
        description: "Hasta $1.5 millones"
    },
    {
        icon: GiSpy,
        title: "Apoyo en caso de robo",
        description: "Hasta 70% del total"
    }
]

export const NEWS_PAPERS = [
    {
        image: elFinanciero,
        alt: "el-financiero"
    },
    {
        image: elUniversal,
        alt: "el-universal"
    },
    {
        image: milenio,
        alt: "milenio"
    },
    {
        image: insignia,
        alt: "insignia"
    },
    {
        image: elEconomista,
        alt: "el-economista"
    },
    {
        image: elSoldeMexico,
        alt: "el-sol-de-mexico"
    }
]

export const FOOTER_CONSTANTS = {
    numberPhone: "(477) 206 8741",
    address: "Av Paseo del Moral 221-3, Jardines del Moral, 37160. León, Gto., México",
    privacy: "AVISO DE PRIVACIDAD",
    copy: "© 2021 by Mi Compa",
    phone: BsFillTelephoneInboundFill,
    marker: FaMapMarkerAlt,
    fb: AiFillFacebook,
    in: AiFillLinkedin,
    insta: AiFillInstagram,
}

export const HIRE_HERE = {
    countrys: [
        {
            name: "México",
            value: "México"
        },
    ],
    img: {
        iconCompa: markerLogo
    },
    icons: {
        error: MdWarning,
        lock: FaLock,
        street: FaRoad,
        zipcode: AiOutlineNumber,
        country: BiWorld,
        external: BsFillHouseDoorFill,
        internal: TbNumbers,
        city: FaCity,
        state: GiModernCity,
        municipality: RiCommunityFill,
        settlement: MdNaturePeople,
        arrowDown: RiArrowDownSLine,
    }

}

export const PANEL = {
    icons: {
        trash: FaTrash,
        edit: FaEdit
    }
}

export const LOGIN = {
    icons: {
        email: MdEmail,
        password: MdPassword,
        error: MdWarning,
    }
}