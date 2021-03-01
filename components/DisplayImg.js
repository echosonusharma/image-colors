const srcImg = ({ imgSrc, col }) => {

    return (
        <div className="p-6 rounded-xl mr-6" style={{ backgroundColor: `${col}` }}>
            <img
                className="min-w-4/12 h-auto rounded-xl"
                src={imgSrc}
                alt=""
            />
        </div>
    )
};

export default srcImg;