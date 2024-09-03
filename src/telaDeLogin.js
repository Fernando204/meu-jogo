import React, {useContext, useState, useRef} from "react";
import "./app.css";
import io from 'socket.io-client';

const socket = io('http://localhost:5021');

function TelaDeLogin(){
    const [areaDeCadastro, setAreaDeCadastro] = useState([true])
    const [senhaLvisible, setSenhaLvisible] = useState([false]);
    const cPassword = useRef(null);
    const cNickName = useRef(null);
    const LPassword = useRef(null);
    const LnickName = useRef(null);

    const closeLoginArea =()=>{
        document.getElementById('loginArea').style.display = 'none';
        setAreaDeCadastro(true);
    }
    const AreaDeCadastro =()=>{
        setAreaDeCadastro(false); 
    }
    const cadastrarUsuario = ()=>{
        var nickname = cNickName.current.value
        var userPassword = cPassword.current.value

        document.getElementById('JogadorLogado').innerText = 'conectado como: '+nickname;
        closeLoginArea();

        var usuarioCadastrado = {login: nickname, senha: userPassword};
        socket.emit('cadastro', usuarioCadastrado)
    }
    const LoginUser = ()=>{
        var nickName = LnickName.current.value;
        var userPassword = LPassword.current.value;

        document.getElementById('JogadorLogado').innerText = 'conectado como: '+nickName;
        closeLoginArea();

        var UsuarioLogado = {login: nickName, senha: userPassword};
        socket.emit('login', UsuarioLogado);
    }
    socket.on('conectPlayer',(msg)=>{
        alert('conectado como: '+msg);
    })

    return(
        <div className="logArea">
            {areaDeCadastro ? (
            <div id="logarDiv">
                <button onClick={closeLoginArea} className="bt">X</button>
                <div className="logHead"><h1>Fazer login</h1></div>
                <h4>usuario:</h4>
                <input ref={LnickName} placeholder="digite seu nickName"/>
                <h4>senha:</h4>
                <input ref={LPassword} id="LPassword" type={senhaLvisible ? 'password': 'text'} placeholder="digite sua senha"/>
                <div style={{display: "flex"}}><h3>mostrar senha?</h3>
                <input onChange={()=>setSenhaLvisible(!senhaLvisible)} id="mostrarSenha" type='checkbox'/></div>
                <br/>
                <button onClick={AreaDeCadastro}>Criar Login</button><br/>
                <button onClick={LoginUser} id="logarButton">Logar</button>
            </div>) : (
            <div id="cadastro">
                <button onClick={closeLoginArea} className="bt">X</button>
                <div className="logHead"><h1>Fazer cadastro</h1></div>
                <h4> cadastrar usuario:</h4>
                <input ref={cNickName} placeholder="digite seu nickName"/>
                <h4>cadastrar senha:</h4>
                <input ref={cPassword} type={senhaLvisible ? 'password': 'text'} placeholder="digite sua senha"/>
                <div style={{display: "flex"}}><h3>mostrar senha?</h3>
                <input onChange={()=>setSenhaLvisible(!senhaLvisible)} id="mostrarSenha2" type='checkbox'/></div>
                <br/>
                <button onClick={cadastrarUsuario}>Criar Login</button><br/>
            </div>
        )}
           
        </div>
    )
}

export default TelaDeLogin;