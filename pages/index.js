import Clarifai from 'clarifai';
import React, { useState } from 'react';
import DisplayImg from '../components/DisplayImg';
import InputImageURL from '../components/InputImageURL';
import MainStyle from '../styles/Home.module.css';

const app = new Clarifai.App({
  apiKey: "c6b8b498babd4112ae5512af3f539e27"
});




export default function Home() {
  const [searchInput, setSearchInput] = useState();
  const [imgSrc, setImgSrc] = useState("");
  const [colorData, setColorData] = useState([]);

  const buttonDetect = () => {
    setImgSrc(searchInput)
    app.models.predict(
      Clarifai.COLOR_MODEL,
      searchInput)
      .then(res => setColorData(res.outputs[0].data.colors))
      .catch(err => console.error("Clarifai error", err));
    setColorData([]);
  }

  function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  }

  return (
    <>
      <InputImageURL setSearchInput={setSearchInput} buttonDetect={buttonDetect} />

      <div className={MainStyle.result}>
        <DisplayImg imgSrc={imgSrc} />
        {
          validURL(searchInput) &&
          colorData.map((val, idx) => {
            const { raw_hex, value } = val;
            const { hex, name } = val.w3c;
            return (
              <div key={idx} className={MainStyle.values}>
                <div className={MainStyle.hex}>
                  <div style={{ width: "40px", height: "40px", backgroundColor: `${raw_hex}` }} />
                  <h3 >{raw_hex}</h3>
                </div>

                <h4>{(value * 100).toPrecision(4)}%</h4>
                <h4>{hex}</h4>
                <h4>{name}</h4>
              </div>
            )
          })}
      </div>

    </>
  )
}
