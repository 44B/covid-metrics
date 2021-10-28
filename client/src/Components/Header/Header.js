import React from "react";

import Title from "./Title/Title";
import LastUpdated from "./LastUpdated/LastUpdated";

const Header = () => {
   return (
      <div className="container align-center" style={{ height: "20vh" }}>
         <div className="row">
            <div className="col-sm">
               <Title />
            </div>
            <div className="col-sm">
               <LastUpdated />
            </div>
         </div>
      </div>
   );
};

export default Header;
