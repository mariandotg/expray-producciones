import * as S from "./styles"

const Form = ({children, onSubmit, reference}: {children: any, onSubmit: any, reference: any}) => {
return (
    <S.Form onSubmit={onSubmit} ref={reference}>
        {children}
    </S.Form>
)
}

export default Form;