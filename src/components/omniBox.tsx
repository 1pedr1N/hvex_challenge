
import * as S from "../styles/omniBox";
import { OmniBoxProps } from "../interfaces/omniboxprops.interface";
const OmniBox = ({ name, img }: OmniBoxProps) => {
    return (
        <S.Container>
            <img src={img} width={115} />
            <S.Text>{name} </S.Text>
        </S.Container>
    )
}
export default OmniBox