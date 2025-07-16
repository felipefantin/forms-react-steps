import Box from './Components/Box';
import Divider from './Components/Divider'; 
import Steps from './Components/Steps';
import styles from './App.module.css';

function App() {
  return (
    <div style={{ font: "serif", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>

    <Box>
      <Steps steps={[
        {nome: "Contato", ordem:1},
        {nome: "Empresa", ordem:2},
        {nome: "Projeto", ordem:3}, 
      ]} />
      <Divider />

      <form style={{display:"flex", flexDirection:"column", gap:24,marginTop:"24px"}}>
        <input/>
        <input/>
        <input/>
      </form>
      <button className='button-enviar'>Enviar</button>
    </Box>

    <div className={styles.modules}>
      Meu componente
    </div>
  </div>
  );
}
export default App
