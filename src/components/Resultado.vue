<script setup>
const props = defineProps(['resultadoOperacao'])
</script>

<template>
    <header class="p-2 mb-4 mt-4 bg-dark rounded-5 text-center text-light">
        <h1>Resultado</h1>
        <p v-if="!props.resultadoOperacao && props.resultadoOperacao !== 0" class="alert alert-danger" role="alert">
            Operação inválida ou não iniciada
        </p>
        <p v-else class="alert alert-success" role="alert">
            {{props.resultadoOperacao}}
        </p>
    </header>
</template>