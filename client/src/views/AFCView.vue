<template>
  <div class="afc">
      <h1
      v-if="id === '1'"
      >AFC East View </h1>
            <h1
      v-if="id === '2'"
      >AFC South View </h1>
            <h1
      v-if="id === '3'"
      >AFC North View </h1>
            <h1
      v-if="id === '4'"
      >AFC West View </h1>
      <h4>This is a view of the results for AFC division</h4>
  </div>
  <div class="results"
  v-for="(afc,index) in afcResults"
  v-bind:item = "afc"
  v-bind:key = "index"
  >
  <p v-if="afc.division === 'AFC East' && id === '1'" >Team Name: {{afc.teamName}}</p>
  <p v-if="afc.division === 'AFC East' && id === '1'">Wins: {{afc.wins}}</p>
  <p v-if="afc.division === 'AFC East' && id === '1'">Loses: {{afc.loses}}</p>
  <p v-if="afc.division === 'AFC East' && id === '1'">Ties: {{afc.ties}}</p>

  <p v-if="afc.division === 'AFC South' && id === '2'" >Team Name: {{afc.teamName}}</p>
  <p v-if="afc.division === 'AFC South' && id === '2'">Wins: {{afc.wins}}</p>
  <p v-if="afc.division === 'AFC South' && id === '2'">Loses: {{afc.loses}}</p>
  <p v-if="afc.division === 'AFC South' && id === '2'">Ties: {{afc.ties}}</p>

  <p v-if="afc.division === 'AFC North' && id === '3'" >Team Name: {{afc.teamName}}</p>
  <p v-if="afc.division === 'AFC North' && id === '3'">Wins: {{afc.wins}}</p>
  <p v-if="afc.division === 'AFC North' && id === '3'">Loses: {{afc.loses}}</p>
  <p v-if="afc.division === 'AFC North' && id === '3'">Ties: {{afc.ties}}</p>

  <p v-if="afc.division === 'AFC West' && id === '4'" >Team Name: {{afc.teamName}}</p>
  <p v-if="afc.division === 'AFC West' && id === '4'">Wins: {{afc.wins}}</p>
  <p v-if="afc.division === 'AFC West' && id === '4'">Loses: {{afc.loses}}</p>
  <p v-if="afc.division === 'AFC West' && id === '4'">Ties: {{afc.ties}}</p>
  </div>
</template>

<script>
import AFCService from "../AFCService.js"

export default {
  props: [
    'id'
  ],
  mounted(){
    console.log(this.$route.params.id);
  },
  watch: {
    $route(to, from){
      console.log("to", to);
      console.log("from", from);
    }
  },
  data(){
    return{
      afcResults: [],
      json: "",
      error: "",
    };
  },
  async created(){
    try{
      this.afcResults = await AFCService.getAFC();
    } catch(err){
      this.error = err.message;
    }
  },
  methods: {

  }
}
</script>

<style>

</style>