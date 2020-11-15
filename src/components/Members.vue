<template>
	<div style="width: 100%;">
    <!--<img src="img/wave.svg" style="z-index: 0; width: 100%"> -->
    <!--<div class="section section-about-us" style="z-index: 10; position: relative; top: 0;  background: none; padding-bottom: 40px; background-image: url('img/wave.png'); background-size: 100% 100%; width: 100%">-->
      

        <div v-if="allMembers" class="container my-5 py-5">
          <div class="md-flex d-flex flex-wrap justify-content-sm-center align-items-sm-center">
            <member 
              v-for="member in $options.teamLeaders" 
              :name="member.name" 
              :role="member.role" 
              :photo="member.photo" 
              :linkedin="member.linkedin"
              class="p-2 justify-content-center mx-auto"
              >              
            </member>

          </div>

          <div class="row justify-content-center">
            <button v-if="!allMembers" class="btn btn-info btn-round btn-lg btn-change" style=" font-weight: bold;z-index: 10;" @click="showAll">
              Full Roster
            </button>
          </div>
        </div>
        <div v-else class="container my-5 py-5 mx-2">
          <div v-for="team in $options.currentMembers" class="row d-flex">
              <div class="col-md-3 justify-content-center align-self-center text-center pb-2">
                <span class="h3" style="color: white;">{{team.team_title}}</span>  
              </div>
              <div class="col-md-9">
                <carousel :nav="false" :loop="true" :dots="true" :margin="20" :autoplay="true" :animateOut="fadeOut" :responsive="{0:{items:2,nav:false},400:{items:3,nav:false}}">
                  <member 
                    v-for="member in team.members" 
                    :name="member.name" 
                    :role="member.role" 
                    :photo="member.photo" 
                    :linkedin="member.linkedin"
                    class="justify-content-center mx-auto">              
                  </member>
                </carousel>
              </div>
          </div>
        </div>
   </div> 
</template>

<script type="text/javascript">  
import Member from './Member.vue';
import MEMBERS from '../../data/Members.json';
import LEADERS from '../../data/Leaders.json';
import carousel from 'vue-owl-carousel';

export default {
  name: 'members',
  bodyClass: 'members-component',
  components: {
    Member,
    carousel
  },
  currentMembers: MEMBERS,
  teamLeaders: LEADERS,
  data() {
    return {
      allMembers: false,
    };
  },
  methods: {
    showAll() {
      this.allMembers = true;
    }
  },
};
</script>
<style scoped>
  
</style>