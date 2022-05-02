<template>
<div id="home"></div>
<v-home>
    <pageHeader></pageHeader>
    <Stories v-if="$store.state.isUserLoggedIn"></Stories>
    <Images></Images>
</v-home>

</template>

<script>
import PageHeader from "../components/navbar.vue";
import Stories from "../components/stories.vue";
import Images from "../components/images.vue";
export default {
  name: "home",
  components: {
    PageHeader,
    Stories,
    Images
  },
};
</script>