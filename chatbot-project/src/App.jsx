import { useState  } from 'react'
import { ChatInput } from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';

import './App.css'


 function App() {

             const [chatMessages, setChatMessages] = useState( [{
                message: "hello chatbot!",
                sender: "user",
                id: 'id1'
            }, {
                message: "Hello! How can I help you?",
                sender: "robot",
                id: 'id2' 
                }, { 
                message: "can you get me todays date?", 
                sender: "user", 
                id: 'id3' 
                }, { 
                message: "Today is September 10th", 
                sender: "robot", 
                id: 'id4' 
                }]);
           // const [chatMessages, setChatMessages] = array; // destructuring
            /*const chatMessages = array[0]; // estado actual
            const setChatMessages = array[1]; // función para actualizar el estado*/
            return (
                <div className="app-container">
                    <ChatMessages 
                    chatMessages={chatMessages}
                    />
                     <ChatInput 
                    chatMessages={chatMessages}
                    setChatMessages={setChatMessages}
                    />
                </div>
            );
        }

export default App
