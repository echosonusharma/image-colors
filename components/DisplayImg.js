import ImgStyle from "../styles/Input.module.css";

const srcImg = ({ imgSrc }) => {

    return (
        <div className={ImgStyle.ImageContainer}>
            <img
                className={ImgStyle.mainImage}
                src={imgSrc}
                alt=""
            />
        </div>
    )
};

export default srcImg;