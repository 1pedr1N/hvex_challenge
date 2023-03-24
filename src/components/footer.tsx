import * as S from "../styles/footer";
import Logo from "../assets/logo.svg";
import { SocialMedia } from "../utils/socialMedia";
const Footer = () => {
    return (
        <S.FooterContainer>
            <img src={Logo} />
            <S.Collumn>
                <S.SubTitle>Endereço</S.SubTitle>
                <S.Address>
                    R. Ismael Pinto de Noronha, 86 - Nossa Sra. de Fatima, Itajubá - MG,
                    37502-508
                </S.Address>
            </S.Collumn>
            <S.Collumn>
                <S.SubTitle>Contato</S.SubTitle>
                <S.ContactText>(35) 3622-2699 </S.ContactText>
                <S.ContactText>contato@hvex.com.br </S.ContactText>
            </S.Collumn>
            <S.Collumn>
                <S.SubTitle>Confira nossa redes</S.SubTitle>
                <S.SocialMedia>
                    {SocialMedia.map((item, index) => (

                        <img
                            key={index}
                            src={item.img}
                            width="75px"

                        />
                    ))}
                </S.SocialMedia>
            </S.Collumn>
        </S.FooterContainer>
    );
};

export default Footer;
