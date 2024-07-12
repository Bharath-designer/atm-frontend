<template>
    <div class="actions-container-buttons">
        <v-btn color="#1D7968" class="option-btn" @click="$router.push('withdrawal')">Withdrawal</v-btn>
        <v-btn color="#1D7968" class="option-btn" @click="$router.push('deposit')">Deposit</v-btn>
        <v-btn color="#1D7968" class="option-btn" @click="$router.push('balance')">Check Balance</v-btn>
        <v-btn color="#1D7968" class="option-btn" @click="$router.push('history')">History</v-btn>
    </div>
</template>

<script>

export default {
    name: "Options"
}


</script>


<style scoped>
.actions-container-buttons {
    width: 100%;
    height: 100%;
    padding: 3em;
    gap: 1em;
    justify-content: center;
    align-content: center;
    display: grid;
    grid-template-columns: repeat(2, auto)
}

.option-btn {
    width: 10em;
    text-transform: capitalize
}



</style>