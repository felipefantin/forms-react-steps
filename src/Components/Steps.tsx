type StepsProps = {
  steps: { nome: string; ordem: number }[];
};

function Steps(props: StepsProps) {
  return (
    <div
      style={{
        display: "flex",
        width:"100%",
        gap:24,
      }}
    >
      {props.steps.map((step) => {
        return (
          <div style={{display: "flex"}}>

            <p>{step.nome}</p>
            <p>{step.ordem}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Steps;