<template>
	<div style="width: 100%;">
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/projects_parallax.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">PROJECTS</h1>
        </div>
      </div>             
    </div>

    <div class="container mt-5" v-if="showAll">
      <div v-for="projects_group in $options.projects">
        <div class="row">
          <h1 class="title text-uppercase mx-auto text-center" style="text-align: center!important;">{{ projects_group.group_title }}</h1> 
        </div>
        <div v-for="project in projects_group.projects" class="row">    
            <project class="row" :id="project.id" :name="project.name" :site="project.site" :logo="project.logo" :description="project.description"></project>        
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
import PROJECTS from '../../data/Projects.json';
import Project from '../components/Project.vue';
export default {
  name: 'projects',
  bodyClass: 'projects-page',
  projects: PROJECTS,
  data() {
    return {
      showAll: true,
    };
  },
  methods: {
    showOne() {
      this.showAll = false;
    }
  },
  components: {
    Project
  }
};
</script>

<style type="text/css" scoped="">
	
</style>