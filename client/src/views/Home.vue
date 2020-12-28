<template>
  <div class="title">
    <h1>Home View</h1>
    <h4>This page display all the AFC Results</h4>
    
  </div>
  <div class="results"
  v-for="(afc, index ) in afcResults"
  v-bind:item="afc"
  v-bind:key="index"
  style="background-color: #323232; color: white; "
  >
    <p class="text">Division: {{afc.division}}</p>
    <p class="text">Team Name: {{afc.teamName}}</p>
    <p class="text">Wins: {{afc.wins}}</p>
    <p class="text">Loses: {{afc.loses}}</p>
    <p class="text">Ties: {{afc.ties}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import AFCService from "../AFCService.js"

export default {
  name: "Home",
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

  },
};
</script>
