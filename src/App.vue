<script setup>
import { reactive } from 'vue';
import Resultado from './components/Resultado.vue';
import Formulario from './components/Formulario.vue';

  const estado = reactive({
    resultado: null,
    numero1:null,
    numero2:null,
    operacaoAritimetica:'semOperacao',
  })

  const trocaNumero1 = (numero) => {
    estado.numero1 = parseInt(numero);

    calculoAritimetico();
  }

  const trocaNumero2 = (numero) => {
    estado.numero2 = parseInt(numero);

    calculoAritimetico();
  }

  const trocaOperacao = (operacao) => {
    estado.operacaoAritimetica = operacao;

    calculoAritimetico();
  }

  const calculoAritimetico = () => {
    
    if (!estado.numero1 || !estado.numero2) {
      estado.operacaoAritimetica = 'semOperacao';
    }    

    switch (estado.operacaoAritimetica) {
      case 'adicao':
        estado.resultado = estado.numero1 + estado.numero2;
        break;
      case 'subtracao':
        estado.resultado = estado.numero1 - estado.numero2;
        break;
      case 'multiplicacao':
        estado.resultado = estado.numero1 * estado.numero2;
        break;
      case 'divisao':
        estado.resultado = estado.numero1 / estado.numero2;
        break;
      default:
        estado.resultado = null;
        break;
    }
  }
</script>

<template>
  <div class="container">
    <Resultado :resultado-operacao="estado.resultado"/>

    <Formulario :num1="estado.numero1" :num2="estado.numero2" :trocar-operacao="evento => trocaOperacao(evento.target.value)" :troca-num1="evento => trocaNumero1(evento.target.value)" :troca-num2="evento => trocaNumero2(evento.target.value)"/>
  </div>
</template>

<style scoped>

</style>
