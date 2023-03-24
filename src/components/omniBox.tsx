import { ReactElement } from "react";
import * as S from "../styles/omniBox";
interface OmniBoxProps {
    name: string;
    img: any;
}

const OmniBox = ({ name, img }: OmniBoxProps) => {
    return (
        <S.Container>
            <img src={img} width={115} />
            <S.Text>{name} </S.Text>
        </S.Container>
    )
}
export default OmniBox