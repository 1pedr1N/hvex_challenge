import * as S from "../styles/boxFaq";
import ArrowDown from "../assets/arrowdown.svg";
import { BoxFaqProps } from "../interfaces/boxFaq.interface";
const BoxFaq = ({ title, description }: BoxFaqProps) => {
    return (
        <S.BoxFaqContainer>
            <S.TitleDiv>
                <S.Title>
                    {title}
                </S.Title>
                <img src={ArrowDown} />
            </S.TitleDiv>
            <S.Divider />
            <S.Description>
                {description}
            </S.Description>
        </S.BoxFaqContainer>
    );
};
export default BoxFaq;
