import React from "react";
import styled from "styled-components";

export default function Home() {
    return (
        <HeroContainer>
            <ContentContainer>
                <HeadLineContainer>
                    <HeadLine>
                        Hey, I'm Yash
                    </HeadLine>
                </HeadLineContainer>
                <SubHeadLine>
                    a full stack developer with
                </SubHeadLine>
                <IntroContainer>
                    <Intro>
                        a passion for building web applications, and a knack for solving problems. I have experience in building applications using <HighLight>LAMP</HighLight> and <HighLight>MERN</HighLight> stack.
                    </Intro>
                </IntroContainer>
            </ContentContainer>
        </HeroContainer>
    );
}

const HeroContainer = styled.div`
    display: flex;
    flex-basis: 100%;
    justify-content: center;
    margin: 6rem 0 0 0;
    padding: 2rem;

    background-color: var(--secondary-color);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23E4E4E4' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const HeadLineContainer = styled.div`
    background-color: var(--primary-color);
    padding: 1.3rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
`;

const HeadLine = styled.h1`
    font-size: var(--big-font-size);
`;

const SubHeadLine = styled.h2`
    font-size: var(--h1-font-size);
`;

const IntroContainer = styled.div`
    width: 50%;
    text-align: center;
    margin: 2rem 0 0 0;
`;

const Intro = styled.p`
    font-size: 1.2rem;
    line-height: 1.8;
    font-weight: var(--font-medium);
`;

const HighLight = styled.span`
    background-color: var(--primary-color);
    padding: 0.2rem;
    border-radius: 0.2rem;
    font-weight: var(--font-bold);
`;