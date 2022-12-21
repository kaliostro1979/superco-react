import {Link} from "@shopify/hydrogen";
import Logo from "../../icons/Logo";
import IconSearch from "../../icons/IconSearch";
import IconBag from "../../icons/IconBag";
import IconBurgerMenu from "../../icons/IconBurgerMenu";
import {useEffect, useState} from "react";
import Style from "./header.module.scss"
import AnnouncementBar from "../AnnouncementBar";

const Header = ({menu, announcementMenu, text}) => {
    const [isScrolled, setIsScrolled] = useState(false)

    const transformLogo = () => {
        setIsScrolled(window.scrollY > 0)
    }

    useEffect(() => {
        window.addEventListener('scroll', transformLogo)
        document.body.style.backgroundColor = isScrolled ? "#E5E5E5" : "#85ABBD"
        return () => window.removeEventListener("scroll", transformLogo);
    }, [isScrolled])

    return (
        <>
            <AnnouncementBar announcementMenu={announcementMenu}/>
            <header className="custom-header pt-[24px] pb-[24px] sticky z-40 top-0 w-full leading-none" style={{backgroundColor: isScrolled ? "#E5E5E5" : "#85ABBD"}}>
                <div className="header-inner max-w-[1440px] mx-auto my-0 px-[42px] py-0">
                    <div
                        className="header-nav__wrapper flex md:flex-row flex-col-reverse justify-between md:items-center">
                        <div className={!isScrolled ? Style.Header + " " : "header-logo"}>
                            <Link to={"/"}
                                  className={!isScrolled ? "inline-block shrink-0 transition duration-300 block 2xl:scale-[5.5] 2xl:translate-x-[405px] " +
                                      "xl:scale-[4.5] xl:translate-x-[315px] lg:scale-[3] lg:translate-x-[180px] lg:translate-y-[200px] " +
                                      "md:scale-[1.9] md:translate-x-[82px] md:translate-y-[180px] md:w-auto w-full" :
                                      "transition duration-300 scale-[1] translate-x-0 translate-y-0"}>
                                <Logo/>
                            </Link>
                        </div>

                        <nav className="header-nav flex justify-end py-6">
                            <ul className="md:flex hidden mr-[35px]">
                                {
                                    menu?.items.map(item => {
                                        return <li key={item.id} className="uppercase mr-[35px] last:mr-0 font-[Platform] font-medium">
                                            <Link to={item.url}
                                                  className={`uppercase text-[14px] font-medium`}>{item.title}</Link>
                                        </li>
                                    })
                                }
                            </ul>
                            <div className="header-icons">
                                <ul className="flex align-middle">
                                    <li className="cursor-pointer mr-[25px]">
                                        <IconSearch/>
                                    </li>
                                    <li className="cursor-pointer mr-[25px]">
                                        <IconBag/>
                                    </li>

                                    <li className="cursor-pointer header__mobile-menu-icon md:hidden block">
                                        <IconBurgerMenu/>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div
                            className="header-nav-mobile block md:hidden h-screen md:w-[350px] w-full fixed top-0 left-[-100%] bg-[#BF91C4] duration-200 ease-linear">
                            <div className="w-full p-[30px] relative">
                                <div className="header-nav-mobile__close absolute top-[30px] right-[30px] w-[20px]">
                                </div>
                                <div className="pt-[50px]">
                                    <ul>
                                        <li className="uppercase">
                                            <Link to={"/"} className="text-[24px] font-bold"></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={!isScrolled ? "header-text text-[18px] text-black max-w-[329px] " +
                        "ml-auto py-[60px] lg:py-[120px] duration-200 transition-all ease-linear" : "p-0 duration-200 transition-all ease-linear hidden max-h-0"}>
                        {text}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
