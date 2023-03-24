import React from "react";
import styled from "styled-components";

export default function Section({ title, subTitle }) {
    return (
        <SectionContainer>
            <SectionTitle>{ title }</SectionTitle>
            <SectionSubTitle>{ subTitle }</SectionSubTitle>
        </SectionContainer>
    );
}

const SectionContainer = styled.div`
    padding: 6rem 0 2rem;
`;

const SectionTitle = styled.h1`
    font-size: var(--h1-font-size);
    text-align: center;
`;

const SectionSubTitle = styled(SectionTitle)`
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: 4rem;
`;