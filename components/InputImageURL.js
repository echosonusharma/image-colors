const InputImage = ({ setSearchInput, buttonDetect }) => {

    return (
        <div className="flex justify-center p-24 ">
            <input
                type="image"
                placeholder="Enter image Link"
                className="w-2/4 border-2 border-black p-1 mr-4 px-6 placeholder-gray-700 placeholder-opacity-75 "
                onChange={e => setSearchInput(e.target.value)} />
            <button
                className="border-2 border-black p-2 w-40 text-lg font-medium text-white  bg-gray-700 shadow-sm"
                onClick={() => buttonDetect()}>Detect</button>

        </div>
    )
};

export default InputImage;