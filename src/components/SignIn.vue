<template>
  <div class="login">
    <div class="login-card">
      <p class="login-card-title">
        Sign In
      </p>
      <div class="form">
        <div class="form-input">
          <p class="form-name">
            Email
          </p>
          <input
              type="email"
              v-model="person.email"
              :class="{ 'text-fields-error': v$.person.email.$error }"
          />
          <p
              class="error"
              v-for="error of v$.person.email.$errors"
              :key="error.$uid"
          >
            {{ error.$message }}
          </p>
        </div>
        <div class="form-input">
          <p class="form-name">
            Password
          </p>
          <input
              type="password"
              v-model="person.password"
              :class="{ 'text-fields-error': v$.person.password.$error }"
          />
          <p
              class="error"
              v-for="error of v$.person.password.$errors"
              :key="error.$uid"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>
      <div class="bottom-field">
        <button
            class="button"
            @click="submit"
            :disabled="!isValidForm"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  name: "VuelidateDemo",
  data() {
    return {
      v$: useVuelidate(),
      person: {
        email: '',
        password: '',
      },
    };
  },
  validations() {
    return {
      person: {
        email: {
          required,
          email,
          $autoDirty: true
        },
        password: {
          required,
          minLength: minLength(6),
          $autoDirty: true
        },
      },
    };
  },
  computed: {
    isValidForm() {
      return this.v$.person.email.$dirty
          && this.v$.person.password.$dirty
          && this.v$.person.email.$error === false
          && this.v$.person.password.$error === false;
    }
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (this.v$.$error) return;

      if (this.isValidForm) {
        this.$router.push("/game");
      }
    },
  },
};
</script>

<style lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  &-card {
    width: 25%;
    height: auto;
    padding: 25px;
    border-radius: 25px;
    background: #42b983;

    &-title {
      padding-bottom: 15px;
      font-size: 26px;
      font-weight: 600;
    }

    .form {
      width: 60%;
      margin: auto;

      &-input {
        padding-bottom: 15px;

        input {
          width: 100%;
          height: 20px;
        }
      }
    }
  }

  .button {
    border-radius: 25px;
    padding: 10px 15px;
    background: #2c3e50;
    color: #fff;
    border: none;
    font-size: 16px;
  }
}
.error {
  color: red;
}
.text-fields-error {
  border: 1px solid red;
}
</style>
