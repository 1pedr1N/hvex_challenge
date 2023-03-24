import * as S from "../styles/product";
import WhatsAppIcon from "../assets/whatsapp.svg";
const Product = () => {
    function handleWhatsApp() {
        window.open("https://api.whatsapp.com/send?phone=5511974710705&text=Ol%C3%A1,%20adorei%20seu%20trabalho%20Pedro,%20quero%20te%20contratar!");
    }
    return (
        <S.Background>
            <S.Title>
                Tenha Informações em tempo real das condições dos ativos e com o
                monitoramento inteligente
            </S.Title>
            <S.Subtitle>
                Tenha acesso a informações em tempo real, administração remota de dados
                importantes da rede elétrica como: tensão, corrente, potência passante,
                energia, temperatura, sobrecarga entre outros, mapeando seu
                funcionamento, prevendo a vida útil dos ativos e aferindo perdas
                técnicas e não técnicas.
            </S.Subtitle>
            <S.Button>
                Quero mais informações
            </S.Button>
            <S.WhatsApp onClick={handleWhatsApp}>
                <img src={WhatsAppIcon} alt="whatsapp" />
            </S.WhatsApp>
        </S.Background>
    );
};
export default Product;
