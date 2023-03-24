
interface DescriptionBoxProps {
    description: string;
    img: string;
}

const DescriptionBox = ({ description, img }: DescriptionBoxProps) => {
    return (
        <div className="description-box">
            <img src={img} alt="description" />
            <p>{description}</p>
        </div>
    );
};
export default DescriptionBox;