import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/globalStyles" 
import Routes from "./routes"



/* no react todo componente eh um SANDUICHE, precisa por o <div></div> // pode explicar o texto div de dentro se quiser */

ReactDOM.render(
    <> 
    <Routes />
    <GlobalStyles /> 
    </>, 
    document.getElementById("root")); 



