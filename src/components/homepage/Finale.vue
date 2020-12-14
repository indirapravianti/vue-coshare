<template>
    <div class="darkBg">
        <v-container class="pa-10">
            <div align="center" justify="center">
                <h1 class="giant-text primary--text mb-6" >Don't miss out!</h1>
            <p class="third--text">Join a community of over 50 million language lovers who are already learning 
                fast and having fun with Coshare.</p>
            <v-btn to="/courses" depressed color="primary" class="float-on-hover pa-6 mt-6 font-weight-bold secondary--text" 
                        >Start learning now</v-btn> 
            </div>
        </v-container>  
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.float-on-hover {
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.float-on-hover:hover, .float-on-hover:focus, .float-on-hover:active {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}
.giant-text {
    font-size: 56px;
    font-weight: 800;
    transform: rotate(-3deg);
}
.darkBg{
    background-color: #2b3648;
}
</style>