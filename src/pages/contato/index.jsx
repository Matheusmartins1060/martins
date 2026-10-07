import { useState } from "react";
import "./index.scss";

function Contato() {
  const [descricao1, setDescricao1] = useState("rob");
  const [descricao2, setDescricao2] = useState("my goat");
  const [textoH2, setTextoH2] = useState("");
  const [cor, setCor] = useState("#8b1e2d");
  const [var1, setVar1] = useState("true");
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [resp, setresp] = useState("");
  const [num1m, setnum1m] = useState("");
  const [num2m, setnum2m] = useState("");
  const [respm, setrespm] = useState("");
  const [num1d, setnum1d] = useState("");
  const [num2d, setnum2d] = useState("");
  const [respd, setrespd] = useState("");
  const [num1s, setnum1s] = useState("");
  const [num2s, setnum2s] = useState("");
  const [resps, setresps] = useState("");

  function mudarCheck(e) {
    setVar1(e.target.checked ? "sim" : "não");
  }

  function mudarH1(e) {
    setDescricao1(e.target.value);
  }

  function mudarH2(e) {
    setTextoH2(e.target.value);
  }

  function alterarH2() {
    setDescricao2(textoH2);
  }

  function mudarCor(e) {
    setCor(e.target.value);
  }
   function capnum1(e) {

        let novovalor = e.target.value;
        setnum1(novovalor);

    }
    function capnum2(e) {

        let novovalor = e.target.value;
        setnum2(novovalor);

    }

    function somar() {
        let soma = Number(num1) + Number(num2)
        setresp(soma);

    }

    function subtrair(){
      let subtração = Number(num1s) - Number(num2s)
      setresps(subtração)
    }
    function dividir(){
      let divisão = Number(num1d) / Number(num2d)
      setrespd(divisão)
    }
    function multiplicar(){
      let multiplicação = Number(num1m) * Number(num2m)
      setrespm(multiplicação)
    }


  return (
    <div
      className="contador"
      style={{ background: cor }}
    >
      <h1>{descricao1}</h1>

      <input
        type="text"
        value={descricao1}
        onChange={mudarH1}
      />

      <h2>{descricao2}</h2>

      <input
        type="text"
        value={textoH2}
        onChange={mudarH2}
        placeholder="Digite algo para o H2"
      />

      <button onClick={alterarH2}>
        Mudar H2
      </button>

      <h3>Escolha a cor</h3>

      <input
        type="color"
        value={cor}
        onChange={mudarCor}
      />

      <h1>Gosta de programar?</h1>

      <input
        type="checkbox"
        onChange={mudarCheck}
      />

      <h2>{var1}</h2>
      
     <section className="section">
                <div className="c">

                    <h2>Calculadora</h2>

                    <div className="inputs">

                       <input type="text" value={num1} onChange={(e)=>setnum1(e.target.value)} />
                       <input type="text" value={num2} onChange={(e)=>setnum2(e.target.value)} />
                       <div>=</div>
                       
                       <div>{resp}</div>
                         
                       <button onClick={somar}>Somar</button>
                       
                </div>
                </div>
               

            </section>
     <section className="section">
                <div className="c">

                    <h2>Calculadora 2</h2>

                    <div className="inputs">

                       <input type="text" value={num1s} onChange={(e)=>setnum1s(e.target.value)} />
                       <input type="text" value={num2s} onChange={(e)=>setnum2s(e.target.value)} />
                       <div>=</div>
                       
                       <div>{resps}</div>
                         
                       <button onClick={subtrair}>Subtrair</button>
                       
                </div>
                </div>
               

            </section>
     <section className="section">
                <div className="c">

                    <h2>Calculadora 3</h2>

                    <div className="inputs">

                       <input type="text" value={num1d} onChange={(e)=>setnum1d(e.target.value)} />
                       <input type="text" value={num2d} onChange={(e)=>setnum2d(e.target.value)} />
                       <div>=</div>
                       
                       <div>{respd}</div>
                         
                       <button onClick={dividir}>dividir</button>
                       
                </div>
                </div>
               

            </section>
     <section className="section">
                <div className="c">

                    <h2>Calculadora 4</h2>

                    <div className="inputs">

                       <input type="text" value={num1m} onChange={(e)=>setnum1m(e.target.value)} />
                       <input type="text" value={num2m} onChange={(e)=>setnum2m(e.target.value)} />
                       <div>=</div>
                       
                       <div>{respm}</div>
                         
                       <button onClick={multiplicar}>multiplicar</button>
                       
                </div>
                </div>
               

            </section>

            
    </div>

    
  );
}

export default Contato;