<template>
  <div class="home">
    <Header/>
    <WhyLearn/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/homepage/Header.vue';
import WhyLearn from '@/components/homepage/WhyLearn.vue';

export default {
  components: {
    Header,
    WhyLearn}
}
</script>
