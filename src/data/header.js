import React from 'react'


import { AiFillGithub } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { ImCodepen } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { SiCoffeescript } from "react-icons/si";
import { MdCoffeeMaker } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";
import { MdOutlineBakeryDining } from "react-icons/md";
import { LuBird } from "react-icons/lu";
import { GiCoffeePot } from "react-icons/gi";

export const headerMenus = [
    {
        title: "추천영상",
        icon: <SiCoffeescript />,
        src: "/commend"
    },
    {
        title: "핸드드립",
        icon: <MdCoffeeMaker />,
        src: "/handdrip"
    },
    {
        title: "개인카페",
        icon: <GiCoffeePot />,
        src: "/caffe"
    },
    {
        title: "체인점",
        icon: <SiBuymeacoffee />,
        src: "/chain"
    },
    {
        title: "베이커리카페",
        icon: <MdOutlineBakeryDining />,
        src: "/bakery"
    },
    {
        title: "이색카페",
        icon: <LuBird />,
        src: "/special"
    },
    {
        title: "커피원두종류",
        icon: <BsYoutube />,
        src: "/beans"
    }
]

export const searchKeywords = [
    {
        title: "espresso",
        src: "/search/espresso"
    },
    {
        title: "americano",
        src: "/search/americano"
    },
    {
        title: "cappuccino",
        src: "/search/cappuccino"
    },
    {
        title: "latte",
        src: "/search/latte"
    },
    {
        title: "mocha",
        src: "/search/mocha"
    },
    {
        title: "affogato",
        src: "/search/affogato"
    }
]

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/gnlgk",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://github.com/gnlgk",
        icon: <BsYoutube />
    },
    {
        title: "react",
        url: "https://github.com/gnlgk",
        icon: <ImCodepen />
    },
    {
        title: "insta",
        url: "https://github.com/gnlgk",
        icon: <FiInstagram />
    }
]