import * as S from "../styles/omni";

import OmniBox from "./omniBox";
const OmniBoxProps = [
    {
        name: "Sistema de Proteção",
        img: "https://media.discordapp.net/attachments/750522537938518131/1088635166932602971/dwada.png ",
    },
    {
        name: "Integração de dados",
        img: "https://media.discordapp.net/attachments/750522537938518131/1088635537369354320/aaaa.png ",
    },
    {
        name: "Gestão de Ativos Elétricos",
        img: "https://media.discordapp.net/attachments/750522537938518131/1088635560266059816/bbb.png ",
    },
    {
        name: "Comunicação inteligente",
        img: "https://media.discordapp.net/attachments/750522537938518131/1088635569212506202/cccc.png ",
    },
];

const Omni = () => {
    return (
        <S.Container>
            <S.Container2>
                <S.Title>OMNI TRAFO</S.Title>
                <S.Subtitle>
                    É o dispositivo capaz de integrar os transformadores as redes
                    inteligentes
                </S.Subtitle>
                <S.Desc>
                    O Omni Trafo envia informações em tempo real, permitindo a
                    administração remota de dados importantes da rede elétrica, como
                    tensão, corrente, potência passante, energia, temperatura, sobrecarga
                    entre outros, mapeando seu funcionamento, prevendo a vida útil dos
                    ativos e aferindo perdas técnicas e não técnicas.
                </S.Desc>
            </S.Container2>
            <S.Container3>
                <S.Grid>
                    {OmniBoxProps.map((item) => (
                        <OmniBox name={item.name} img={item.img} />

                    ))}
                </S.Grid>
            </S.Container3>

        </S.Container>
    );
};
export default Omni;
