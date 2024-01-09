import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import  Cookies  from 'universal-cookie';
import './App.css'
import ChannelListContainer from './components/ChannelListContainer';
import ChannelContainer from './components/ChannelContainer';
const apiKey = 'tqhygffd5zvz';

const client = StreamChat.getInstance(apiKey);

function App() {
 

  return (
    <div className='app_wrapper'>
        <Chat client={client} theme='team light'>
          <ChannelListContainer />
          <ChannelContainer />
        </Chat>

    </div>
  )
}

export default App
