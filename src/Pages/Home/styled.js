import styled from 'styled-components';

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`

export const Content = styled.div`
width: 100vw;
display: flex; 
align-items: center; 
justify-content: center;
`

export const Input = styled.input`
border: 1px solid #ddd;
height: 1.5rem;
padding: 0 .5rem;
border-radius: 25rem 0 0 25rem;
border-color: purple;

&:focus, 
&:active {
    outline:none;
    box-shadow: none;
}
`;

export const Button = styled.button`
background-color: #8403ea;
border: none;
border-radius: 0 25rem 25rem 0;
height: 1.6rem;

&:hover {
    background-color: #a103ea;
    cursor: pointer;
    color: #fff;
}
`

export const OutroTeste = styled.h1`
font-size: 18px;
color: blue;
`

export const ErrorMsg = styled.span`
display: block;
font-size: 0.80rem;
color: red; 
margin-top: 1rem;
`

