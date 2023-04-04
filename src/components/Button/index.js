import React from "react";

import { Button as ContainerButton} from './styles'

function Button ({children, ...props}){ // poderia por o onClick que esta nop outro arquivo , ou entao por ...props // que ele vai por tudo os comandos ja

    return <ContainerButton {...props} >{children}</ContainerButton>

}

export default Button;