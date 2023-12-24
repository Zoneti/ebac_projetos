import { useEffect, useState } from "react";

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setIMC] = useState(0);
    const [classificacaoIMC, setClassificacaoIMC] = useState('');
    const [obesidade, setObesidade] = useState('');
    const [retornoIMC, setRetornoIMC] = useState('');
    
    useEffect(() => {
        {calculaIMC()}
        console.log(`peso: ${peso}`);
        console.log(`altura: ${altura}`);
        console.log(`imc: ${imc}`);
    },[altura,peso]);
    
    const calculaIMC = () => {
        let imcTemp = 0;
        if (!(altura == 0 || !altura || peso == 0 || !peso)) {
            imcTemp = (peso / (altura*altura));
        }
        setIMC(imcTemp);
        renderizaIMC();
    }

    const renderizaIMC = () => {
        let imcShow = imc.toFixed(2);
        let returnP = `O seu IMC é ${imcShow}, com uma Classificação de ${classificacaoIMC} e um grau de Obesidade igual a ${obesidade}`;
        switch (true) {
            case imc == 0.00:
                returnP = 'Por favor, insira os dados de Altura e Peso corretamente';
                break;
            case imc <= 18.5:
                setClassificacaoIMC('Magreza');
                setObesidade('0');
                break;
            case imc <= 24.9:
                setClassificacaoIMC('Normal');
                setObesidade('0');
                break;
            case imc <= 29.9:
                setClassificacaoIMC('Sobrepeso');
                setObesidade('I');
                break;
            case imc <= 39.9:
                setClassificacaoIMC('Obesidade');
                setObesidade('II');
                break;        
            default:
                setClassificacaoIMC('Obesidade Grave');
                setObesidade('III');
                break;
        }
        setRetornoIMC(returnP);
    }

    return (
        <>
            <form>
                <label htmlFor="alturaInput">Altura: </label>
                <input id="alturaInput" type="number" placeholder="Sua Altura" onChange={evento => setAltura(parseFloat(evento.target.value))}/> <br /> <br />
                <label htmlFor="pesoInput">Peso: </label>
                <input id="pesoInput" type="number" placeholder="Seu Peso" onChange={evento => setPeso(parseFloat(evento.target.value))}/> <br />
                
                {retornoIMC}
            </form>
        </>
    )
}

export default Formulario;