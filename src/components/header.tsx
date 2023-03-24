import * as S from '../styles/header';
import Logo from '../assets/logo.svg';
import Hamburger from 'hamburger-react'
import { useState } from 'react';
const Header = () => {
    const breakpoint = 768;
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [open, setOpen] = useState(false);
    window.addEventListener('resize', () => {
        setWindowSize(window.innerWidth);
    });
    function toggle() {
        setOpen(!open);
    }
    if (windowSize < breakpoint) {
        return (

            <S.Header>
                <img src={Logo} alt="logo" />
                <Hamburger toggled={false} toggle={toggle} />

                {open && (
                    <S.Sidebar>
                        <S.CloseButton onClick={toggle}>
                            X
                        </S.CloseButton>
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
                    </S.Sidebar>
                )}
            </S.Header>
        )
    }

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