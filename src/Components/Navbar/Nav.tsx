"use client"
import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button
} from "@nextui-org/react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from './Logo';
import DarkAndLightButton from "../Dark$Light/DarkAndLightButton";
import CustomButton from "../CustomButton/CustomButton";

export default function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentRoute = ""; // Set the current route or page here

    const menuItems = [
        { name: "Profile", route: "/profile" },
        { name: "Dashboard", route: "/dashboard" },
        { name: "Activity", route: "/activity" },
        { name: "Analytics", route: "/analytics" },
        { name: "My Settings", route: "/settings" },
        { name: "Help & Feedback", route: "/help" },
        { name: "Log Out", route: "/logout" }
    ];

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="my-4">
            <Navbar isBordered >
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        onClick={handleMenuToggle}
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </NavbarMenuToggle>
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <Logo />
                        <p className="font-bold text-inherit">BMW</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarBrand>
                        <Logo />
                        <p className="font-bold text-inherit">BMW</p>
                    </NavbarBrand>
                    {menuItems.map((item, index) => (
                        <NavbarItem key={`${item.name}-${index}`} isActive={currentRoute === item.route}>
                            <Link color="foreground" href={item.route}>
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem className=" lg:flex">
                        <DarkAndLightButton />
                    </NavbarItem>

                    <NavbarItem>
                        <CustomButton
                            title="Sing Up"
                            btnType="button"
                            buttonStyle="dark:bg-[#301050] bg-[#052814] text-white px-4  py-1.5 rounded-full  "

                        />
                    </NavbarItem>
                </NavbarContent>

                {isMenuOpen && (
                    <NavbarMenu className="block sm:hidden">
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item.name}-${index}`}>
                                <Link
                                    className="w-full"
                                    color={
                                        index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                    }
                                    href={item.route}
                                    size="lg"
                                >
                                    {item.name}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>
                )}
            </Navbar>
        </div>
    );
}
