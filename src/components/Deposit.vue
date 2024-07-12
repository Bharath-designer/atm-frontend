<template>
    <div class="deposit-wrapper">
        <div class="form-container">
            <h3>Enter Amount to Deposit</h3>
            <v-form ref="form" class="form" @submit.prevent="processTransaction">
                <v-text-field placeholder="Enter Amount to Deposit" v-model="amount" variant="outlined"
                    density="compact" :rules="amountRules">
                </v-text-field>
                <v-btn :disabled="loading" class="proceed-btn" type="submit" color="primary">
                    {{ loading ? "Processing...." : "Proceed" }}
                </v-btn>
            </v-form>
        </div>
    </div>
</template>

<script>
import axiosInstance from '@/axiosInterceptor';


export default {
    name: "Deposit",
    data() {
        return {
            amount: '',
            loading: false,
            amountRules: [
                v => !!v || 'Amount is required',
                v => !isNaN(parseFloat(v)) && isFinite(v) || 'Amount must be a number',
                v => (v <= 20000) || 'Cannot deposit more than 20000 at one go'
            ]
        };
    },
    methods: {
        async processTransaction() {
            const { valid } = await this.$refs.form.validate()

            if (valid) {
                try {
                    this.loading = true;
                    const result = await axiosInstance.post(`/api/Atm/DepositMoney?amount=${this.amount}`)

                    setTimeout(() => {
                        this.loading = false
                        this.$refs.form.reset()
                        this.$toast.open({
                            message: "Amount is Deposited",
                            type: "success",
                            duration: 1500,
                            position: "top-left"
                        })
                    }, 500);

                } catch (error) {
                    alert(error.response?.data.message || error.message)
                }
            }
        }
    }
};
</script>

<style scoped>
.deposit-wrapper {
    height: 100%;
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}

.form-container {
    display: flex;
    flex-direction: column;
    width: min(20em);
}

.form-container h3 {
    color: #5D5D5D;
    text-align: center;
    margin-bottom: 1em;
}


.form-container .form {
    display: flex;
    flex-direction: column;
    align-items: center
}

.form-container .form>* {
    width: 100%
}

.proceed-btn {
    text-transform: capitalize;
    margin: auto;
    width: min(10em, 90%) !important;
    margin-top: 1em
}
</style>
