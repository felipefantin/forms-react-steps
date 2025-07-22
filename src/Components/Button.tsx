type ButtonProps = {
  textoBtn: string;
};

function Button(props: ButtonProps) {
  return <button type="submit">{props.textoBtn}</button>;
}

export default Button;