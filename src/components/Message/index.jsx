import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { MessageContainer } from './style';

function Message() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        const templateParams = {
            email: email,
            message: message
        }

        emailjs.send("service_dhftnhf", "template_vu8a5nr", templateParams, "b-M1bCZqP2Z9N8Qdx")
        .then(response => {
            console.log('EMAIL ENVIADO', response.status, response.text);
            alert('EMAIL ENVIADO');
            setEmail('');
            setMessage('');
        }, err => {
            console.log('ERRO ', err);
        })
    }

    return (
        <MessageContainer id="message">
            <h1>Contate-me</h1>
            <p>Entre em contato diretamente por 
                <a href="mailto:maxsuel.dev@gmail.com"> maxsuel.dev@gmail.com</a> ou através deste formulário</p>
            <form onSubmit={sendEmail}>
                <input type="mail" placeholder='Email:' onChange={(e) => setEmail(e.target.value)} value={email} required />
                <textarea placeholder='Mensagem:' onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </MessageContainer>
    );
}

export default Message;