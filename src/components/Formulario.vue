<script setup>
    const props = defineProps(['num1', 'num2','trocarOperacao', 'trocaNum1', 'trocaNum2'])
</script>

<template>
    <form>
        <div class="row">
            <div class="col-md-2">
                <input :value="props.num1" @keyup="trocaNum1" required
                    type="number" placeholder="Digite aqui o primeiro número" class="form-control">
            </div>
            <div class="col-md-2">
                <input :value="props.num2" @keyup="trocaNum2" required
                    type="number" placeholder="Digite aqui o segundo número" class="form-control">
            </div>
            <div class="col-md-2">
                <select @change="props.trocarOperacao" class="form-control">
                    <option selected value="semOperacao">Escolha a Operação</option>
                    <option value="adicao">Adição</option>
                    <option value="subtracao">Subtração</option>
                    <option value="multiplicacao">Multiplicação</option>
                    <option value="divisao">Divisão</option>
                </select>
            </div>
        </div>
    </form>
</template>