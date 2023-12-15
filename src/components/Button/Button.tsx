import './Button.css';

interface IButtonParams {
  texto: string;
  acao?: () => void;
}

function Button({ texto, acao }: IButtonParams) {
  return (
    <button className='botao' onClick={acao}>
      { texto }
    </button>
  );
}

export default Button;