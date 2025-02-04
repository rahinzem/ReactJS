import { useState } from "react"

function Bases() {
  const [message, setMessage] = useState("Olá Mundo"); // () valor padrão da variavem message
  //hook usado para atualizar estados dentro do react (re-renderizar um componente apenas)


  return (
    <>
      <h1>{message}</h1>
      <button onClick={() => {setMessage("Olá, fui Clicado!");}}>Mudar Mensagem</button>
    </>
  )
}

export default App;
