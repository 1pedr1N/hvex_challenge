import * as S from "../styles/descriptionBox";
import { DescriptionBoxProps } from "../interfaces/descriptionprops.interface";

const DescriptionBox = ({ description, img }: DescriptionBoxProps) => {
    return (
        <S.DescriptionBoxContainer>
            <S.ImageBox>
                <img src={img} />
            </S.ImageBox>
            <S.Text> {description} </S.Text>
        </S.DescriptionBoxContainer>
    );
};
export default DescriptionBox;