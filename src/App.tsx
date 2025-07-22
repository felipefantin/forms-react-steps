import Box from "./Components/Box"
import Button from "./Components/Button"
import Divider from "./Components/Divider"
import Input from "./Components/Input";
import Steps from "./Components/Steps"
import Textarea from "./Components/Textarea";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box>
        <Steps
          steps={[
            { nome: "Contato", ordem: 1 },
            { nome: "Empresa", ordem: 2 },
            { nome: "Projeto", ordem: 3 },
          ]}
        />
        <Divider />

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            marginTop: 24,
          }}
        >
          {/* <Input label="Nome" placeholder="Digite seu nome" />
          <Input label="Telefone" placeholder="Digite seu telefone" />
          <Input label="Email" placeholder="Email" /> */}

        {/*
          <Input
            label="Nome da Empresa"
            placeholder="Informe o nome da empresa"
          />
          <Input
            label="Nº de Funcionários"
            placeholder="Informe o número de funcionários"
          />

          <Textarea
            label="Sobre o negócio"
            placeholder="Fale um pouco sobre o negócio"
            ehExpandivel={false}
          />
        */}

        <Textarea
        label="Objetivo de projeto"
        placeholder="Descreva os obejtivos do projeto"
        ehExpandivel={false}
        cursor="text"
        />

          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            {/* <Button textoBtn={"Voltar"} /> */}
            <div style={{ alignSelf: "flex-end", color:"white", padding:"10px", cursor:"pointer",   transition: "all 0.5s ease-out", }}>
              <Button textoBtn={"Voltar"} />
            </div>
            <div style={{ alignSelf: "flex-end",justifyContent:"flex-start",padding:"10px",cursor:"pointer" }}>
              <Button textoBtn={"Continuar"} />
            </div>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default App;
