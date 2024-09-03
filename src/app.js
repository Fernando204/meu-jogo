import React, { useContext, useState } from "react";
import "./app.css";
import Loja from './loja';
import TelaDeLogin from "./telaDeLogin";
import io from 'socket.io-client';

const socket = io('http://localhost:5021');


function App(){
    const [storeVisible, setStoreVisible] = useState([false,false,false, false])

    const openStore = (ind) =>{
        setStoreVisible(storeVisible.map((visible, index)=> index === ind ? true : visible))
    }
    const closeStore = (ind) =>{
        setStoreVisible(storeVisible.map((visible, index)=> index === ind ? false : visible))
    }

    const openLoginArea =()=>{
        var logA = document.getElementById('loginArea');
        logA.style.display = 'block'
    }

    const storecontent = [
        <div>
            <h1 className="tituloLj">Barcos Adquiridos</h1>
        </div>,
        <div>
            <h1 className="tituloLj">Varas Adiquiridas</h1>
        </div>,
        <div>
            <Loja/>
        </div>,
        <div>
            <h1 className="tituloLj">Peixes pescados</h1>
        </div>
    ]
    
    const handlePlayClick = () => {
        window.location.href = 'jogo.html';
      };
    return(
    <div>
    <header>
        <h1 className="cabeçalho"><strong>MEL'S FISHING SIMULATOR</strong></h1>
        <footer className="hf">
            <div className="hfdiv">
              <button onClick={openLoginArea} className="loginButton"><strong>Login</strong></button>
              <div className="jogadorLogado">
                <h2 id="JogadorLogado">conectado como convidado</h2>
              </div>
            </div>
        </footer>
    </header>
    <section>
        {
            storeVisible.map((visible, index)=>(
                <div className="Aloja" key={index} style={{display: visible ? 'block' : 'none'}}>
                    <button className="bt" onClick={()=>closeStore(index)}>X</button>
                    {storecontent[index]}
                </div>
            ))
        }
        <div className="moedas">
            <strong>Moedas:</strong> <p></p>
        </div>
        <button onClick={()=>openStore(0)} className="bt escBarco">Escolher Barco</button>
        <button onClick={()=>openStore(1)} className="bt escVara">Escolher Vara</button>
        <button onClick={()=>openStore(2)} className="bt aLoja">Loja</button>
        <button onClick={()=>openStore(3)} className="bt aquario">aquario</button>
        <img src="../peixes/carpa.png" alt="peixe" className="img1"/>
        <img src="../peixes/carpa.png" alt="outro peixe" className="img2"/>
        <div className="frente">
             <button onClick={handlePlayClick} className="jogar bt">Jogar</button>
        </div>
        <div id="loginArea">
            <TelaDeLogin/>
        </div>
    </section>    
    </div>
    );
}

export default App;