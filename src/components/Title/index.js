import React from "react";
import { H1 } from "./styles"

function Title(props){  // o props, que traz o que tem dentro do H1.

    return <H1>{props.children}</H1>
}

export default Title