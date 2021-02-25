import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
function Header() {
    return (
        <Container>
            <Logo>
            <Letters>
                <K>K</K>
                <I>i</I>
                <D>d</D>
                <D2>d</D2>
                <O>o</O>
                <S>s</S>

                <C>C</C>
                <H>h</H>
                <A>a</A>
                <T>t</T>
               <Icon> <FavoriteIcon /></Icon>
         
               
             
            </Letters>
            </Logo>
            <Main>
                <AccessTimeIcon />
                    <SearchContainer>
                        <Search>
                            <input type="text" placeholder="Search..." />
                        </Search>
                    </SearchContainer>
                <HelpOutlineIcon />
            </Main> 
           < UserContainer>
                <Name>
                    Nazariy
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png" />
                </UserImage>
           </UserContainer>  
                
        </Container>
    )
}

export default Header

const Container = styled.div`

background:rgb(245,245,245);
color:rgb(70,92,141);
display:flex;
align-items:center;
justify-content:space-between;
position:relative;
z-index:10;
box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);

`
const Main = styled.div`
display:flex;
margin-right:16px;
margin-left 16px;
color:rgba(246,188,213,0.3);
background:rgba(246,188,213,0.3);
`
const SearchContainer = styled.div`
min-width:400px;
margin-left:16px;
margin-right:16px;
background:white;
border-radius:13px;

`
const Search = styled.div`


width:100%;
border-radius:6px;
display:flex;
align-items:center;font-size:20px;
input{
    background:rgba(246,188,213,0.3);
border:none;
padding-left:88px;
padding-right:8px;
background:rgb(246,188,213);
padding-top:4px;
padding-bottom:4px;
border-radius:13px; 

::placeholder {
    color: white;
    opacity: 1; 
    font-family: -apple-system, BlinkMacSystemFont, 'Kiddish';
    font-size:20px;color:white;
  }
}
input:focus{
    outline:none;
    font-family: -apple-system, BlinkMacSystemFont, 'Kiddish';
    font-size:20px;
    color:white;
}
input:after{
    outline:none;
    font-family: -apple-system, BlinkMacSystemFont, 'Kiddish';
    font-size:20px;
    color:white;
}

`
const UserContainer = styled.div`
display:flex;
align-items:center;
padding-right:16px;
position:absolute;
right:0;
`
const Name = styled.div`
padding-right:16px;
font-size:14px;
color:rgb(40,53,83);
`
const UserImage= styled.div`
width:28px;
height:28px;
background:rgb(40,53,83);
boder:2px solid white;
border-radius:3px;
img{
    width:100%;
}
`
const Logo= styled.div`

padding-left:15px;
font-size:40px;
font-family: -apple-system, BlinkMacSystemFont, 'Kiddish';

`
const Letters= styled.div`
display:flex;
justify-content:column;


`
const K= styled.div`
color:rgb(246,188,213);
font-weight:600;
animation-name: example;
animation-duration: 4s;
animation-delay: -2s;
@keyframes example {
    0% {  
        transform: translateY(0);
    }
    20% {  
        transform: translateY(-1em);
    }
    40% {  
        transform: translateY(0.5em); 
    }
    
   60% {
        transform: translateY(-0.25em);
    }
    80% {  
        transform: translateY(0);
    }
  }
`
const I= styled.div`
color:rgb(114,198,255);
font-weight:600;
animation-name: example;
animation-duration: 5s;
animation-delay: -2s;
@keyframes example {
    0% {  
        transform: translateY(0);
    }
    20% {  
        transform: translateY(-1em);
    }
    40% {  
        transform: translateY(0.5em); 
    }
    
   60% {
        transform: translateY(-0.25em);
    }
    80% {  
        transform: translateY(0);
    }
  }
`
const D= styled.div`
color:rgb(254,236,52);
font-weight:200;
animation-name: example;
animation-duration: 7s;
animation-delay: -2s;
@keyframes example {
    0% {  
        transform: translateY(0);
    }
    20% {  
        transform: translateY(-1em);
    }
    40% {  
        transform: translateY(0.5em); 
    }
    
   60% {
        transform: translateY(-0.25em);
    }
    80% {  
        transform: translateY(0);
    }
  }
`
const D2= styled.div`
color:rgb(146,207,173);
font-weight:900;
animation-name: example;
animation-duration: 6s;
animation-delay: -2s;
@keyframes example {
    0% {  
        transform: translateY(0);
    }
    20% {  
        transform: translateY(-1em);
    }
    40% {  
        transform: translateY(0.5em); 
    }
    
   60% {
        transform: translateY(-0.25em);
    }
    80% {  
        transform: translateY(0);
    }
  }
`
const O= styled.div`
color:rgb(246,188,213);
animation-name: example;
animation-duration: 7s;
animation-delay: -2s;
@keyframes example {
    0% {  
        transform: translateY(0);
    }
    20% {  
        transform: translateY(-1em);
    }
    40% {  
        transform: translateY(0.5em); 
    }
    
   60% {
        transform: translateY(-0.25em);
    }
    80% {  
        transform: translateY(0);
    }
  }
`
const S= styled.div`
font-weight:600;
color:rgb(114,198,255);
animation-name: example;
animation-duration:4s;
animation-delay: -2s;
@keyframes example {
    0% {  
        transform: translateY(0);
    }
    20% {  
        transform: translateY(-1em);
    }
    40% {  
        transform: translateY(0.5em); 
    }
    
   60% {
        transform: translateY(-0.25em);
    }
    80% {  
        transform: translateY(0);
    }
  }
`
const Icon= styled.div`
color:rgba(246,188,213,0.3);
animation-name: example;
animation-duration: 6s;
animation-delay: -2s;
@keyframes example {
    0% {  
        transform: translateY(0);
    }
    20% {  
        transform: translateY(-1em);
    }
    40% {  
        transform: translateY(0.5em); 
    }
    
   60% {
        transform: translateY(-0.25em);
    }
    80% {  
        transform: translateY(0);
    }
  }
`
const C= styled.div`
margin-left:10px;
font-weight:600;
color:rgb(254,236,52);
animation-name: example;
animation-duration: 6s;
animation-delay: -2s;
@keyframes example {
    0% {  
        transform: translateY(0);
    }
    20% {  
        transform: translateY(-1em);
    }
    40% {  
        transform: translateY(0.5em); 
    }
    
   60% {
        transform: translateY(-0.25em);
    }
    80% {  
        transform: translateY(0);
    }
  }
`
const H= styled.div`
font-weight:600;
color:rgb(146,207,173);
animation-name: example;
animation-duration: 5s;
animation-delay: -2s;
@keyframes example {
    0% {  
        transform: translateY(0);
    }
    20% {  
        transform: translateY(-1em);
    }
    40% {  
        transform: translateY(0.5em); 
    }
    
   60% {
        transform: translateY(-0.25em);
    }
    80% {  
        transform: translateY(0);
    }
  }
`
const A= styled.div`
font-weight:600;
color:rgb(246,188,213);
animation-name: example;
animation-duration: 5s;
animation-delay: -2s;
@keyframes example {
    0% {  
        transform: translateY(0);
    }
    20% {  
        transform: translateY(-1em);
    }
    40% {  
        transform: translateY(0.5em); 
    }
    
   60% {
        transform: translateY(-0.25em);
    }
    80% {  
        transform: translateY(0);
    }
  }
`
const T= styled.div`
font-weight:600;
color:rgb(114,198,255);
animation-name: example;
animation-duration: 4s;
animation-delay: -2s;
@keyframes example {
    0% {  
        transform: translateY(0);
    }
    20% {  
        transform: translateY(-1em);
    }
    40% {  
        transform: translateY(0.5em); 
    }
    
   60% {
        transform: translateY(-0.25em);
    }
    80% {  
        transform: translateY(0);
    }
  }
`