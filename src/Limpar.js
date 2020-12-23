import React from 'react';
import { GlobalContext } from './GlobalContext'

const Limpar = () => {
    const { limpaProduto } = React.useContext(GlobalContext)
    return <button onClick={limpaProduto}>Limpar</button>
}

export default Limpar
