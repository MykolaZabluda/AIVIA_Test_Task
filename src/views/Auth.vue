<template>
  <SignIn />
</template>

<script>
import SignIn from "@/components/SignIn.vue";

export default {
  components: {
    SignIn,
  }
}
</script>

<style scoped lang="scss">
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  &-card {
    width: 35%;
    height: 400px;
    background-color: #42b983;
    border-radius: 25px;

    &-title {
      text-align: center;
      padding: 15px 0;
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>