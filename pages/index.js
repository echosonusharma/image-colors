import Clarifai from 'clarifai';
import React, { useState } from 'react';
import DisplayImg from '../components/DisplayImg';
import InputImageURL from '../components/InputImageURL';
import DisplayData from '../components/Response';


const app = new Clarifai.App({
  apiKey: process.env.NEXT_PUBLIC_CLARIFY_API_KEY
});


export default function Home() {
  const [searchInput, setSearchInput] = useState();
  const [imgSrc, setImgSrc] = useState("");
  const [colorData, setColorData] = useState([]);

  const buttonDetect = () => {
    setImgSrc(searchInput);

    app.models.predict(
      Clarifai.COLOR_MODEL,
      searchInput)
      .then(res => setColorData(res.outputs[0].data.colors))
      .catch(err => console.error("Clarifai error", err));
    setColorData([]);
  };

  function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  };

  const findMax = () => {
    let maxC = "";
    var arr = new Array();
    colorData.map((val) => {
      arr.push((val.value * 100).toPrecision(2));
      const max = Math.max(...arr);
      if ((val.value * 100).toPrecision(2) == max) {
        maxC = val.raw_hex;
      }
    })
    return maxC;
  };
  const col = findMax();

  return (
    <>
      <div className="flex justify-center pt-10 ">
        <p className="w-1/2">
          Hello there 🤗, by providing an image link
          below, you will get the most dominating colors with there respective hex color values,
          composition percentage and even the closest possible
        <a href="https://www.w3schools.com/colors/colors_names.asp"
            target="_blank"
            className="text-green-900 hover:text-blue-600 font-semibold"> w3c </a>
         color name found with its hex value. Colors are a really important part
         of any Web-design and this could help you with that.</p>
      </div>
      <div className="flex justify-center pt-10 ">
        <div className="w-2/4">
          <li>Higher the image quality, more data it can process and evaluate.</li>
          <li>Avoid using PNG image format.</li>
        </div>
      </div>
      <InputImageURL setSearchInput={setSearchInput} buttonDetect={buttonDetect} />

      <div className="flex content-center justify-center" >
        <DisplayImg imgSrc={imgSrc} col={col} />
        <div style={{ minHeight: "75vh", maxHeight: "150vh" }} >
          {
            validURL(searchInput) &&
            <div className="grid grid-cols-2 h-52 gap-4"  >
              <DisplayData colorData={colorData} />
            </div>}
        </div>
      </div>
    </>
  )
};
