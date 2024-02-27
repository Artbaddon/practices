<template>
  <div>
    <h1>Login</h1>
    <form action="" @submit.prevent="handleSubmit">
      <input type="text" placeholder="Enter email" v-model.trim="email" />
      <input
        type="password"
        placeholder="Enter password"
        v-model.trim="password"
      />
      <button type="submit" :disabled="userStore.loadingUSer">Login</button>
    </form>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useUserStore } from "../stores/user";
  // import { useRouter } from "vue-router";

  const userStore = useUserStore();
  // const router = useRouter();

  const email = ref("");
  const password = ref("");

  const handleSubmit = async () => {
    if (!email.value || !password.value) {
      return alert("FILL THE FIELDS");
    }
    await userStore.loginUser(email.value, password.value);
    // router.push("/");
  };
</script>
