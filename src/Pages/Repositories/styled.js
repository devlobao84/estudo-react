import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
width: 100%;
max-width: 450px;
margin: 0 auto;
`

export const Title = styled.h1`
text-align: center;
font-size: 2rem;
color: red;
`

export const List = styled.ul`
list-style: none;
padding: 0;
font-family: sans-serif;
`

export const ListItem = styled.li`
width: 50%;
height: 50px;
margin: .5rem 0;
background: #000;
color: #fff;
padding: .5rem;
`

export const LinkHome = styled(Link)`
display: block;
width: 4rem;
text-aling: center; 
margin: 2rem 0; 
background-color: #000;
padding: .5rem 0;
color: #fff;
text-decoration: none;
border-raidus: 5px;
padding-left: 1rem;
`