import * as S from "../styles/engine";
import Engine from "../assets/engine.svg";
import BlueCheck from "../assets/blueCheck.svg";
import { EngineText } from "../utils/engineText";
const ShowEngine = () => {

    return (
        <S.Container>
            <S.Content>
                <S.Title>
                    Desenvolvido para melhorar a performance dos ativos de distribuição
                </S.Title>
                <S.Divivder />
                <S.TextDiv>
                    {EngineText.map((text) => {

                        return (
                            <S.Text>
                                <img src={BlueCheck} width={30} />
                                <S.TextContent>

                                    {text}
                                </S.TextContent>
                            </S.Text>
                        );
                    })
                    }
                </S.TextDiv>
            </S.Content>
            <img src={Engine} />
        </S.Container>
    );
};

export default ShowEngine;