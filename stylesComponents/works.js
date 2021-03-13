import styled from 'styled-components';

const Container = styled.section` 
    background-color: #EDF7FA;
`;
const Group = styled.div``;
const Section = styled.div`
    padding-bottom: 150px;
    @media(min-width: 1114px) {
        padding-bottom: 83px;
    }
`;
const SectionContainer = styled.div`
    max-width: 1114px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px; 

    @media(min-width: 1114px) {
        padding-left: 0;
        padding-right: 0;
    }
`;
const SectionHeader = styled.header``;
const Title = styled.h2`
    font-weight: normal;
    font-size: 18px;
    line-height: 60px; 
    color: #21243D;
    margin-top: 0;
    padding-top: 16px;

    @media(min-width: 1114px) {
        font-size: 22px;
        margin-bottom: 0;
        line-height: 40px;
        padding-top: 32px;
    }
`;
const Article = styled.article`
    padding-top: 12px;
    border-bottom: 1px solid #E0E0E0;
    @media(min-width: 1114px) {
        display: grid;
        grid-template-columns: 40% auto; 
        column-gap: 18px;
        padding-top: 32px;
        padding-bottom: 32px; 
    }
`;
const ImageContainer = styled.div``;
const Image = styled.img`
    margin-right: 16px;
    width: 100%;
    border-radius: 5px;
    @media(min-width: 500px) {
        width: 400px;
    }
    @media(min-width: 1114px) {
        width: 100%;
        margin-right: 0;
        box-shadow: rgb(0 0 0 / 50%) 0px 0px 15px 1px; 
        &:hover {
        transition: transform 0.2s ease-out; 
        transform: scale(1.02);
    }
    }
`;
const DescriptionContainer = styled.div`
    position: relative;
`;
const WorkTitle = styled.h3`
    font-weight: bold;
    font-size: 24px;
    line-height: 30px; 
    color: #21243D;
    margin-top: 16px;
    margin-bottom: 16px;

    @media(min-width: 1114px) {
        font-weight: bold;
        font-size: 30px;
        line-height: 44px;
        line-height: unset; 
        color: #21243D;
        margin: 0;
        margin-bottom: 20px;
    }
`;
 
const Link = styled.a``
const WorkDescription = styled.p``;
const ButtonContainer = styled.div`
    width: 90%;
    display: flex; 
    margin-bottom: 16px;
    a:nth-of-type(2) button {
        font-size: 20px;
        font-weight: normal;
        line-height: 29px; 
        color: #8695A4;
        background-color: transparent;
    }
    @media(min-width: 1114px) {
        width: 50%; 
        margin-bottom: 22px;
    }
`;
const Button = styled.button`
    background-color: #142850;
    font-weight: 900;
    font-size: 16px; 
    color: #FFFFFF;
    border-radius: 16px;
    margin-right: 32px;
    padding: 6px;
    padding-left: 16px;
    padding-right: 16px;
    border: transparent;
    outline: none;
    cursor: pointer;
    transition: 0.3s;


    &:hover {
        opacity: 0.5;
        color: red;
    }

`;
export {
    Container,
    Group,
    Section,
    SectionContainer,
    SectionHeader,
    Title,
    Article,
    ImageContainer,
    Image,
    DescriptionContainer,
    WorkTitle,
    WorkDescription,
    Link,
    ButtonContainer,
    Button
}