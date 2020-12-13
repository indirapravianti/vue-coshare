<template>
  <div class="home ma-0 pa-0">
    <Header/>
    <WhyLearn/>
    <Finale/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/homepage/Header.vue';
import WhyLearn from '@/components/homepage/WhyLearn.vue';
import Finale from '@/components/homepage/Finale.vue';

export default {
  components: {
    Header,
    WhyLearn,
    Finale
  }
}
</script>
