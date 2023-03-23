import * as S from '../styles/header';
import Logo from '../assets/logo.svg';
const Header = () => {
    return (
        <S.Header>
            <img src={Logo} alt="logo" />
            <S.ListHeader>
                <S.Text>
                    Omni trafo
                </S.Text>
                <S.Text>
                    Sinalizador de faltas
                </S.Text>
                <S.Text>
                    Acoplador DP
                </S.Text>
                <S.Button>
                    COMPRAR AGORA
                </S.Button>
            </S.ListHeader>
        </S.Header>
    );
};
export default Header;