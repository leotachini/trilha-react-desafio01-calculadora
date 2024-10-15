import { Container, Content, Row, Column } from './styles'
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';


function App() {

  const [numeroAtual, setNumeroAtual] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operator, setOperator] = useState('');
  // const [ultimoNumero, setUltimoNumero] = useState('');

  const handleAddNumber = (number) => {
    setNumeroAtual(prev => `${prev === '0' ? '' : prev}${number}`)
    // setUltimoNumero(number)
  }

  const handleClearNumber = () => {
    setNumeroAtual('0')
    setFirstNumber('0')
  }

  const handleSoma = () => {
    // setNumeroAtual(eval(numeroAtual))
    setOperator('+')
    if (firstNumber === '0') {
      setFirstNumber(String(numeroAtual))
      setNumeroAtual('0')
    } else {
      const sum = Number(firstNumber) + Number(numeroAtual)
      setNumeroAtual(String(sum))
    }
  }

  const handleSubtracao = () => {
    // setNumeroAtual(eval(numeroAtual))
    setOperator('-')
    if (firstNumber === '0') {
      setFirstNumber(String(numeroAtual))
      setNumeroAtual('0')
    } else {
      const subtract = Number(firstNumber) - Number(numeroAtual)
      setNumeroAtual(String(subtract))
    }
  }

  const handleMultiplicacao = () => {
    // setNumeroAtual(eval(numeroAtual))
    setOperator('*')
    if (firstNumber === '0') {
      setFirstNumber(String(numeroAtual))
      setNumeroAtual('0')
    } else {
      const multiplication = Number(firstNumber) * Number(numeroAtual)
      setNumeroAtual(String(multiplication))
    }
  }

  const handleDivisao = () => {
    // setNumeroAtual(eval(numeroAtual))
    setOperator('/')
    if (firstNumber === '0') {
      setFirstNumber(String(numeroAtual))
      setNumeroAtual('0')
    } else {
      const division = Number(firstNumber) / Number(numeroAtual)
      setNumeroAtual(String(division))
    }
  }

  const handleSqrt = () => {
    // setNumeroAtual(eval(numeroAtual))
    setOperator('√')
    const sqrt = Math.sqrt(Number(numeroAtual))
    setNumeroAtual(String(sqrt))
  }

  const handlePow = () => {
    // setNumeroAtual(eval(numeroAtual))
    setOperator('xʸ')
    if (firstNumber === '0') {
      setFirstNumber(String(numeroAtual))
      setNumeroAtual('0')
    } else {
      const pow = Math.pow(Number(firstNumber), Number(numeroAtual))
      setNumeroAtual(String(pow))
    }
  }


  const handleResolve = () => {
    switch (operator) {
      case '+':
        handleSoma();
        break;
      case '-':
        handleSubtracao();
        break;
      case '*':
        handleMultiplicacao();
        break;
      case '/':
        handleDivisao();
        break;
      case 'xʸ':
        handlePow();
        break;
      default:
        break;
    }
    setOperator('')
    setFirstNumber('0')
  }

  return (
    <Container>
      <Content>
        <Input value={numeroAtual} />

        <Row>
          <Button label={'C'} onClick={() => handleClearNumber()} />
          <Button label={'xʸ'} onClick={handlePow} />
          <Button label={'√'} onClick={handleSqrt} />
        </Row>

        <Row>
          <Button label={9} onClick={() => handleAddNumber('9')} />
          <Button label={8} onClick={() => handleAddNumber('8')} />
          <Button label={7} onClick={() => handleAddNumber('7')} />
          <Button label='-' onClick={handleSubtracao} />
          <Button label='/' onClick={handleDivisao} />
        </Row>

        <Row>
          <Button label={6} onClick={() => handleAddNumber('6')} />
          <Button label={5} onClick={() => handleAddNumber('5')} />
          <Button label={4} onClick={() => handleAddNumber('4')} />
          <Button label='+' onClick={handleSoma} />
          <Button label='*' onClick={handleMultiplicacao} />
        </Row>

        <Row>
          <Button label={3} onClick={() => handleAddNumber('3')} />
          <Button label={2} onClick={() => handleAddNumber('2')} />
          <Button label={1} onClick={() => handleAddNumber('1')} />
          <Button label={0} onClick={() => handleAddNumber('0')} />
          <Button label='=' onClick={handleResolve} />
        </Row>

      </Content>
    </Container>
  );
}

export default App;
