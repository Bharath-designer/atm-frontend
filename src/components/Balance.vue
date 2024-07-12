<template>

    <div class="check-balance-wrapper">
        <div class="title">Your Balance</div>
        <div class="message-container">
            <p v-if="loading" class="loader">Loading....</p>
            <p v-else><span>{{ balance }}</span></p>
        </div>
    </div>
</template>


<script>
import axiosInstance from '@/axiosInterceptor';


export default {
    name: "Withdrawal",
    data() {
        return {
            loading: true,
            balance: ""
        }
    },
    async beforeMount() {
        try {
            const result = await axiosInstance.post("/api/Atm/CheckBalance")
            setTimeout(() => {
                this.balance = result.data.balance
                this.loading = false
            }, 500);
        } catch (error) {
            this.loading = false
            alert(error.response?.data.message || "Internal server error")
        } 
        
    }
}

</script>


<style scoped>
.check-balance-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em;
    align-items: center;
}

 .title {
    color: #5D5D5D;
    font-weight: 500;
    font-size: 1.1em;
}

.message-container {
    font-weight: 800;
    font-size: 2.5em;
    color: #929292;
}
</style>