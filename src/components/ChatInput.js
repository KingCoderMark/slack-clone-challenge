import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
function ChatInput() {
    return (
   <Container>
        <InputContainer>
        <form>
            <input type="text" placeholder="Message here..." />
            <SendButton>
                <Send />
         
            </SendButton>
        </form>
        </InputContainer>
   </Container>
          
      
    )
}

export default ChatInput
const Container=styled.div`
padding-left:20px;
padding-right:20px;
padding-bottom:14px;
margin-top:-10px;
`
const SendButton=styled.div`
background:rgb(114,198,255);

border-radius:2px;
width:32px;
height:32px;
display:flex;
justify-content:center;
align-items:center;
margin-right:5px;
cursor:pointer;
.MuiSvgIcon-root{
    width:18px;
}
:hover{

    background:rgba(114,198,255,0.3);
}
`
const Send=styled(SendIcon)`
color:#D9D9D9;
`
const InputContainer=styled.div`
border:1px dashed rgb(114,198,255);
border-bottom:0px;
border-radius:4px;
font-family: -apple-system, BlinkMacSystemFont, 'Kiddish';
form{
    display:flex;
    height:42px;
    align-items:center;
    padding-left:10px;
    input{
        font-family: -apple-system, BlinkMacSystemFont, 'Kiddish';
        flex:1;
        border:none;
        font-size:33px;
        
    }
    input:focus{
        font-family: -apple-system, BlinkMacSystemFont, 'Kiddish';
        outline:none;
    }
}
`