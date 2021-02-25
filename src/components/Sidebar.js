import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItemsData} from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'

function Sidebar(props) {
    const addChannel=()=>{
        const promptName=prompt("Enter channel name");
        if(promptName){
            db.collection('rooms').add({
                name:promptName
            })
        }
    }
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Clever Programmer
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                        
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                
              {
                  sidebarItemsData.map(item =>(
                    <MainChannelItem>
                        {item.icon}
                        
                        {item.text}
                    </MainChannelItem>  
                  ))
              }
       
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={addChannel}/>
                </NewChannelContainer>
       <ChannelsList>
       {
       props.rooms.map(item => (
<Channel>
    #{item.name}
</Channel>
       ))  
            }
       </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar
const Container = styled.div`
background:rgb(245,245,245);
color:black;
`
const WorkspaceContainer= styled.div`
color:gray;

height:64px;
display:flex;
align-items:center;
pdding-left:19px;
justify-content:space-between;
border-bottom:1px solid white;
`
const Name= styled.div`
padding-left:15px;
font-size:25px;
color:rgb(115,189,236);
`
const NewMessage= styled.div`
font-size:45px;
width:36px;
height:36px;
background:white;
color:#3F0E40;
fill:#3F0E40;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:20px;
cursor:pointer;

`
const MainChannels= styled.div`
padding-top:20px;
`
const MainChannelItem= styled.div`
color: gray;
display:grid;
grid-template-columns:15% auto;
height:48px;
align-items:center;
padding-left:19px;
cursor:pointer;
font-size:25px;
:hover{
    background:rgba(222,218,219,0.3);
}
`
const ChannelsContainer= styled.div`
color:white;
margin-top:10px;
background:rgba(222,218,219,0.3);
`
const NewChannelContainer= styled.div`
display:flex;
justify-content:space-between;
align-items:center;
font-size:35px;
padding-left:19px;
padding-right:12px;
color:rgb(146,207,173);
cursor:pointer;
font-weight:bold;

`
const ChannelsList= styled.div`
color:rgb(40,53,83);
`

const Channel= styled.div`
height:28px;
display:flex;
align-items:center;
padding-left:19px;
cursor:pointer;
:hover{
    background:rgba(149,206,173,0.3);
}
`