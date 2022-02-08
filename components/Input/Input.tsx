import * as S from "./styles";

const Input = ({
  label,
  type,
  name,
  placeholder
}: {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
}) => {
  return (
    <S.InputDiv>
      <S.Label>{label}</S.Label>
      {type === "textarea" ? (
        <S.TextArea name={name} />
      ) : (
        <S.Input type={type} name={name} placeholder={placeholder}/>
      )}
    </S.InputDiv>
  );
};

export default Input;
