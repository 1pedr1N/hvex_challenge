import Product from "../assets/product.svg";
import * as S from "../styles/productView";

const ProductDetails = [
    {
        title: "Monitoramento de  tensão, corrente e carga;",
        img: "https://media.discordapp.net/attachments/750522537938518131/1088855341955022908/rpm.png",
    },
    {
        title: "Análise de perda de vida útil do transformador;",
        img: "https://media.discordapp.net/attachments/750522537938518131/1088855341955022908/rpm.png",
    },
    {
        title: "Medição do balanço energético de Perdas",
        img: "https://media.discordapp.net/attachments/750522537938518131/1088855341955022908/rpm.png",
    },
    {
        title: "",
        img: "https://media.discordapp.net/attachments/750522537938518131/1088855341955022908/rpm.png",
    },
    {
        title: "Análise de Fator de potência",
        img: "https://media.discordapp.net/attachments/750522537938518131/1088855341955022908/rpm.png",
    },
    {
        title: "Harmônicas de corrente e tensão",
        img: "https://media.discordapp.net/attachments/750522537938518131/1088855341955022908/rpm.png",
    },
    {
        title: "Medição de temperatura interna",
        img: "https://media.discordapp.net/attachments/750522537938518131/1088855341955022908/rpm.png",
    },
    {
        title: "Supervisão de  baixa tensão",
        img: "https://media.discordapp.net/attachments/750522537938518131/1088855341955022908/rpm.png",
    },
]


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
