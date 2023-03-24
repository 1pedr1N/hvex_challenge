import Product from "../assets/product.svg";
import * as S from "../styles/productView";
import DescriptionBox from "./descriptionBox";
import { ProductDetails } from "../utils/productDetails";


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

                <S.Grid>
                    {ProductDetails.map((item) => (
                        <DescriptionBox description={item.title} img={item.img} />
                    ))}</S.Grid>

            </S.Content>
        </S.ProductViewContainer>
    );
};
export default ProductView;
