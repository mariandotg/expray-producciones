import * as S from "./styles";

const Button = ({type, text}: {type?: string, text: string}) => {
  return <S.Button>{text}</S.Button>;
};

export default Button;
