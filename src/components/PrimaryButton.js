import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function PrimaryButton({ children, ...props }) {
    return (
        <ButtonContainer>
            <Button {...props}>
                {children}
                <Icon icon={faArrowRight} size="lg"/>
            </Button>
        </ButtonContainer>
    );
}

const ButtonContainer = styled.div`
    margin: 0 1rem;
`;

const Button = styled.button`
    border-radius: 10rem;
    padding: 0.7rem 1.6rem;
    background-color: var(--primary-color);
    font-weight: var(--font-bold);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Icon = styled(FontAwesomeIcon)`
    padding: 0 0 0 0.3rem;
    transition: all 0.2s ease-in-out;

    ${ButtonContainer}:hover & {
        transform: translateX(0.3rem);
    }
`;