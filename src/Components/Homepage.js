import { React, useState } from "react";
import './Homepage.css'
export const Homepage = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setToggleBtn(!toggleBtn)}>company info</button>
      </div>

      {toggleBtn ? (
        <p id="company-info">
          <b>Company:</b> GeekSynergy Technologies <br />
          <b>Address:</b> Sanjayanagar Bengaluru-56 <br />
          <b>phone:</b> xxxxxxx09 <br />
          <b>email:</b> xxxxx@gmail.com
        </p>
      ) : (
        <div>
          <h2>Movie data</h2>
        </div>
      )}
    </>
  );
};
