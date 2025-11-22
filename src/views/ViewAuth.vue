<script setup>
import { computed, reactive, ref } from "vue";
import { useStoreAuth } from "@/stores/storeAuth";

const storeAuth = useStoreAuth();

const register = ref(false);

const formTitle = computed(() => {
  return register.value ? "註冊" : "登入";
});

const credentials = reactive({
  email: "",
  password: "",
});

const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert("請輸入電子郵件或是密碼");
  } else if (register.value && credentials.password.length < 6) {
    alert("密碼請輸入至少6位數字或英文字母");
    return;
  } else {
    if (register.value) {
      storeAuth.registerUser(credentials);
    } else {
      storeAuth.loginUser(credentials);
    }
  }
};
</script>
<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': !register }">
          <a @click.prevent="register = false">登入</a>
        </li>
        <li :class="{ 'is-active': register }">
          <a @click.prevent="register = true">註冊</a>
        </li>
      </ul>
    </div>
    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">{{ formTitle }}</div>

        <form @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">電子郵件</label>
            <div class="control">
              <input
                v-model="credentials.email"
                class="input"
                type="email"
                placeholder="例如：alexsmith@gmail.com"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">密碼</label>
            <div class="control">
              <input
                v-model="credentials.password"
                class="input"
                type="password"
                placeholder="至少輸入6位數字或英文字母"
              />
            </div>
          </div>

          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button class="button is-primary">{{ formTitle }}</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scope>
.card.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
