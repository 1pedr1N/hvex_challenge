import * as S from "../styles/faq";
import BoxFaq from "./boxFaq";
import { FaqQuestions } from "../utils/faq";
const Faq = () => {
    return (
        <S.Container>
            <S.Title>Perguntas Frequentes</S.Title>
            {FaqQuestions.map((question, index) => (
                <BoxFaq
                    key={index}
                    title={question.title}
                    description={question.description}
                />
            ))}
        </S.Container>
    )
}

export default Faq