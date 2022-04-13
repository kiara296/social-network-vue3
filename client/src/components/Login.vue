<template>
  <main>
    <section class="full flex">
      <div class="column image">
        <img src="../assets/img/social-media.jpg" alt="social media" />
      </div>
      <div class="column flex text">
        <div class="content">
          <h1 class="text-center">Welcome back</h1>
          <form >
              <input type="email" placeholder="E-mail" />
              <input type="password" placeholder="Password"  />
            <button type="submit">Login</button>
          </form>
          <p class="text-center">Or</p>
          <a class="text-center" href="a">Create a free account</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
   
};
</script>

<style lang="stylus" scoped>
.image
    width: 60%
    flex-basis: 60%
    img
        width: 100%
        height: 100%
        object-fit: cover

.content
    width: 320px
    display: flex
    flex-direction: column
.text
    flex-basis: 40%
    align-items: center
    justify-content: center
</style>
