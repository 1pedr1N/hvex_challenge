import * as S from "../styles/energy";
import EnergyImage from "../assets/energy.svg";
import Check from "../assets/check.svg";
const textArray = [
    "Monitoramento inteligente de ativos",
    "Melhoria dos indicadores de continuidade",
    "Comunicação Modular",
    "Business Inteligence",
    "Redução de Perdas técnicas e Não técnicas",

];
const Energy = () => {
    return (
        <S.Container>
            <S.Container2>
                <img src={EnergyImage} />
                <S.TextDiv>
                    <S.Title>Seja bem-vindo a era da energia inteligente</S.Title>
                    <S.Subtitle>
                        As redes inteligentes são um caminho sem volta, o desenvolvimento e
                        disceminação de dispositivos de medição e monitoramento são as
                        ferramentas para redução de custos, perdas e trazem mais
                        previsibilidade para as utilities de energia.
                    </S.Subtitle>

                    {textArray.map((text) => {
                        return (
                            <S.Topic>
                                <img src={Check} />
                                <S.TopicText> {text} </S.TopicText>
                            </S.Topic>
                        )
                    })}
                </S.TextDiv>
            </S.Container2>
        </S.Container>
    );
};
export default Energy;
