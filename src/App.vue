<template>
  <div class="app-wrapper">
    <div class="atm-frame">
      <div class="atm-top-bar">
        <div :class="{'no-background': !showCardNumber}" class="card-number-field">
          {{showCardNumber || "no-card"}}
        </div>
      </div>
      <div class="atm-bottom-bar">

        <div class="left-actions actions">

          <button @click="$router.push({name:'Options'})" class="action-btn home">Home</button>
          <button class="action-btn"></button>
          <button class="action-btn"></button>

        </div>
        <div class="atm-content">
          <router-view />
        </div>
        <div class="left-actions actions">

          <button @click="cancel" class="action-btn cancel">Cancel</button>
          <button class="action-btn"></button>
          <button class="action-btn"></button>

        </div>
        </ div>
      </div>
    </div>
</template>

<script>

import atm_frame from "@/assets/atm_frame.svg"

export default {
  name: 'App',
  data() {
    return {
      atmFrame: atm_frame    }
  },
  methods: {
    checkToken() {
      const token = sessionStorage.getItem("token")
      if (!token) {
        this.$router.replace({ name: "Auth" })
      }
    },
    cancel() {
      console.log("caled");
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("card")
      this.$router.replace({ name: "Auth" })
    },
  },
  computed: { 
    showCardNumber() {
      if (this.$route.name !== "Auth") {
        return sessionStorage.getItem("card")
      }
      return ""
    }
  },  
  beforeMount() {
    this.checkToken()
  }
}
</script>


<style scoped>
.app-wrapper {
  height: 100vh;
  height: 100svh;
  overflow: hidden;
  background: #E8F5FF;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -9999;
}

.atm-frame {
  width: min(50em);
  height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 0 5em;
  background: #3c3f45;
  clip-path: ellipse(100% 55% at 48% 44%);
  border-top-left-radius: .25em;
  border-top-right-radius: .25em;
}

.atm-top-bar {
  display: flex;
  justify-content: center;
  padding: 1em 0;
}

.card-number-field {
  background: white;
  padding: .25em 1em;
  border-radius: .25em;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.no-background {
  opacity: 0;
}

.atm-bottom-bar {
  display: flex;
  flex: 1;
  height: 100%;
  overflow: hidden;
}

.actions {
  width: 13em;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
}

.action-btn {
  width: 75%;
  min-width: 100px;
  margin-inline: auto;
  background: white;
  height: 3em;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: .125em;
  font-weight: 600;
}

.action-btn.home {
  color: #008B48;
}

.action-btn.cancel {
  color: red;
}

.atm-content {
  width: 100%;
  height: 100%;
  background: white;
  z-index: 999;
  box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.5);
  border-radius: .25em;

}
</style>