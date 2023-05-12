
import './App.css';
import Login from '../src/assets/img/PERFIS/login_resized 1.png'
function App() {
  return (
    <div className="App">
     <div className="row  border tela-de-login">
      <div className="col-md-7"><img width={'100%'} src={Login} alt="foto-login"/></div>
      <div className="col-md-4 d-flex align-items-center border flex-column">
        <div className='divlogin'>
        <div className='login text-center'>LOGIN</div>
        <div className='titulo-imput'>E-mail</div>
        <input className='mb-3' type="text" placeholder='E-mail'/>
        <div className='titulo-imput'>Senha</div>
        <input className='mb-3' type="text" placeholder='Senha'/>
        <button className='btn btn-primary mb-2' style={{marginTop:50}}>ENTRAR</button>
        <button className='btn btn-secondary'>Fazer cadastro?</button>
        
        </div>
      </div>
     </div>


    </div>
  );
}

export default App;
