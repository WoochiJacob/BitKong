import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import LogSvg from '@img/BitKong_Logo.svg';

function Footer() {
    return (
        <Container>
            <Section>
                <SiteMap>
                    <Link
                        href="/"
                        passHref
                    >
                        <Logo src={LogSvg.src} />
                    </Link>

                    <Navigarion>
                        <TermBox>
                            <TermText>
                                <Link href="/company/terms">TERMS OF SERVICE</Link>
                            </TermText>
                            <TermText>
                                <Link href="/company/policy">
                                    PRIVACY POLICY
                                </Link>
                            </TermText>
                        </TermBox>
                        <InfoBox>
                            <CopyRight>COPYRIGHT ⓒ 2022 BitKong All Rights Reserved.</CopyRight>

                        </InfoBox>
                    </Navigarion>
                </SiteMap>
            </Section>
        </Container>
    );
}

const Container = styled.footer`
    width: 100%;
    margin-top: auto;
    padding: 40px 20px 60px 20px;
    box-shadow: rgb(51 61 72 / 10%) 0px 4px 12px 0px;
    border-top: 1px solid #C8CDD2;
    background-color: rgb(4, 0, 0);
`;

const Section = styled.footer`
    width: 1280px;
    margin: 0 auto;
`;

const Logo = styled('img')`
    width: 120px;
    cursor: pointer;
`;

const Navigarion = styled.div``;

const InfoBox = styled.span`
    color: rgb(255, 214, 0, 0.8);
    margin-left: 80px;
`;

const CopyRight = styled.div`
    margin-left: 80px;
`;

const SiteMap = styled.div`
    display: flex;
    align-items: flex-start;
    flex: 1;
`;

const TermBox = styled.div`
    flex-basis: 130px;
    display: flex;
    margin-left: 80px;
`;

const TermText = styled.span`
    cursor: pointer;
    margin-right: 10px;
    width: 130px;
    
    a {
        color: rgb(255, 214, 0, 0.8);
    }

    &:hover {
        text-decoration: underline;
    }
`;

export default Footer;
