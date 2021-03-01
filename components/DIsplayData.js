const DisplayData = ({ colorData }) => {

    return (
        <>
            {
                colorData.map((val, idx) => {
                    const { raw_hex, value } = val;
                    const { hex, name } = val.w3c;
                    return (
                        <div key={idx} className="px-4 border-2 p-2">
                            <div className="flex items-center ">
                                <div style={{ width: "40px", height: "40px", backgroundColor: `${raw_hex}`, marginRight: "1rem" }} />
                                <p>hex value : <strong>{raw_hex}</strong></p>
                            </div>
                            <p>Constituting percentage : <strong>{(value * 100).toPrecision(3)}%</strong></p>
                            <div className="pt-2">
                                <h4>Closest w3c color name found</h4>
                                <p>Color name : {name}</p>
                                <p>Color value : {hex}</p>
                            </div>
                        </div>
                    )
                })}
        </>
    )
};

export default DisplayData;