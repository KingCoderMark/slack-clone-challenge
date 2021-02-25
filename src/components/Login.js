import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SendIcon from '@material-ui/icons/Send';
import StarBorderIcon from '@material-ui/icons/StarBorder';
function Login() {
    return (
        <MainContainer>
            <Container>
                < ChatPostContainer>
                    <Name>
                        #clever <StarBorderIcon />
                    </Name>
                    <Details>
                        Details <InfoOutlinedIcon />
                    </Details>
                </ChatPostContainer>  
                <SubContainer>
                Company Wide-announcements and Work-based matters
                </SubContainer>
                
             </Container>

             <Container2>
                < ChatPostContainer>
                    <Name>
                    <img src="https://i.imgur.com/6VBx3io.png" width="23px"/>
                 &nbsp; Mark Amada  02/23/2021 15:12:229 
                    </Name>
            
                </ChatPostContainer>  
                <SubContainer2>
               Hi everyone!
                </SubContainer2>
                
             </Container2>
             <SendMessage>
                < ChatPostContainer>
                    <input type="text" placeholder="Message"></input>
            
                </ChatPostContainer>  
                <SubContainer>
                <SendIcon />
                </SubContainer>
                
             </SendMessage>
        </MainContainer>

   
    )
}

export default Login
const MainContainer = styled.div`
color: white;
background:rgb(239,249,244);
display:flex;
justify-content:space-between;
flex-direction:column;
`
const Container = styled.div`
color: white;

border-radius:1px;
width:100%;
background:white;

`
const ChatPostContainer = styled.div`
display:flex;
align-items:row;
justify-content:space-between;
padding:5px;

`
const Name = styled.div`

padding-top:5px;
padding-left:10px;
font-weight:bold;
display:flex;
align-items:flex-end;
justify-content:start;
color:black;


`
const Details = styled.div`
color:black;
padding-right:10px;
font-weight:bold;
display:flex;
align-items:center;
justify-content:start;
`
const SubContainer = styled.div`
color:black;
padding-left:30px;

display:flex;
align-items:center;
justify-content:start;
margin-top:-10px;
font-size:13px;
`
const SubContainer2 = styled.div`
color:black;
padding-left:30px;


margin-top:0px;

`
const Container2 = styled.div`
color: white;
background:white;
border-radius:6px;
width:79%;
margin-top:-325px;
margin-left:20px;
`
const SendMessage = styled.div`
padding:5px;
color: white;
background:white;
border-radius:2px;
width:93%;
margin-top:15px;
margin-left:10px;
margin-bottom:30px;
border: 1px dashed whitesmoke;
display:flex;
align-items:center;
justify-content:space-between;
input{
    width: 800px;
    background:whitesmoke;
border:none;
padding-left:18px;

color:black;
padding-top:10px;
padding-bottom:10px;
border-radius:13px;

}
input:focus{
    outline:none;
}
`