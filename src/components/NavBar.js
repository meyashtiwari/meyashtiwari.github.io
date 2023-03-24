import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { Link } from "gatsby";

import logoImage from "../images/logo.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import separatorImage from "../images/separator.svg";


export default function NavBar() {
    return (
        <Header>
            <Nav>
                <NavContainer>
                    <NavLinks>
                        <NavLink>
                            <LinkI to="#home">
                                <Logo src={logoImage} />
                            </LinkI>
                        </NavLink>
                        <NavLinkExternal>
                            <LinkI to="#about">
                                <IconContainer>
                                    <Icon icon={faCircleUser} size="lg" />
                                        About
                                </IconContainer>
                            </LinkI>
                        </NavLinkExternal>
                        <NavLinkExternal>
                            <LinkI activeClassName="active" to="#work">
                                <IconContainer>
                                    <Icon icon={faBriefcase} size="lg" />
                                        Works
                                </IconContainer>
                            </LinkI>
                        </NavLinkExternal>

                        <Separator src={separatorImage} />

                        <NavLinkExternal>
                            <LinkE href="https://github.com/meyashtiwari" target="_blank">
                                <IconContainer>
                                    <Icon icon={faGithub} size="lg" />
                                    Github
                                </IconContainer>
                            </LinkE>
                        </NavLinkExternal>
                        <NavLinkExternal>
                            <LinkE href="https://www.linkedin.com/in/meyashtiwari/" target="_blank">
                                <IconContainer>
                                    <Icon icon={faLinkedin} size="lg" />
                                    Linkedin
                                </IconContainer>
                            </LinkE>
                        </NavLinkExternal>
                        <NavLinkExternal>
                            <LinkE href="https://discordapp.com/users/731508457978724354" target="_blank">
                                <IconContainer>
                                    <Icon icon={faDiscord} size="lg" />
                                    Discord
                                </IconContainer>
                            </LinkE>
                        </NavLinkExternal>
                        <NavLinkExternal>
                            <LinkE href="https://join.skype.com/invite/p7qT1zhqQSUC" target="_blank">
                                <IconContainer>
                                    <Icon icon={faSkype} size="lg" />
                                    Skype
                                </IconContainer>
                            </LinkE>
                        </NavLinkExternal>
                    </NavLinks>
                    <PrimaryButton onClick={() => window.location.href = 'mailto:me.yashtiwari@gmail.com'}>Get in touch!</PrimaryButton>
                </NavContainer>
            </Nav>
        </Header>
    );
}

const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
`;

const NavContainer = styled.div`
    display: flex;
    width: 70%;
    height: 4rem;
    border-radius: 10rem;
    background-color: #fff;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

    @media (max-width: 1470px) {
        width: 100%;
    }
`;

const Logo = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--primary-color);
    margin: 0 1rem;
`;

const NavLinks = styled.ul`
    display: flex;
    align-items: center;
`;

const Separator = styled.img`
    width: 2rem;
    margin: 0 2rem 0 0;
    opacity: 0.5;

    @media (max-width: 1029px) {
        margin: 0 1rem 0 0;   
    }
`;

const NavLink = styled.li`
    margin: 0 2rem 0 0;
    font-weight: var(--font-bold);
    cursor: pointer;

    @media (max-width: 1029px) {
        margin: 0 1rem 0 0;   
    }
`;

const Icon = styled(FontAwesomeIcon)`
    padding: 0 0.2rem 0.1rem 0;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
`;

const NavLinkExternal = styled(NavLink)`
    display: inline-block;
    position: relative;
    color: #000;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 4px;
        bottom:-5px;
        left: 0;
        background-color: var(--primary-color);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

const LinkE = styled.a`
    color: #000;
`;

const LinkI = styled(Link)`
    color: #000;
`;
