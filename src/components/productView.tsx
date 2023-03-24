import Product from "../assets/product.svg";
import * as S from "../styles/productView";
const ProductView = () => {
    return (
        <S.ProductViewContainer>
            <img src={Product} />
            <S.Content>
                <S.Title>Omni trafo</S.Title>
                <S.Divider />
                <S.Subtitle>
                    Monitoramento inteligente de transformadores de distribuição
                </S.Subtitle>
                <S.Desc>
                    O Omni trafo é uma solução consolidada para monitoramento de ativos.
                    Através deste equipamento, informações importantes da rede são
                    enviadas em tempo real , permitindo, assim, a administração remota de
                    dados como:
                </S.Desc>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, facere!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, facere!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, facere!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, facere!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, facere!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, facere!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, facere!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, facere!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, facere!
                </p>
            </S.Content>
        </S.ProductViewContainer>
    );
};
export default ProductView;
