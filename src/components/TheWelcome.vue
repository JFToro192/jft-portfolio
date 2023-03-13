<script created>
import { reactive } from 'vue'
import axios from 'axios'
import api from 'zotero-api-client';

const USER_ID = import.meta.env.VITE_USER_ID;
const AUTH_KEY = import.meta.env.VITE_AUTH_KEY;
const COLLECTION_ID = import.meta.env.VITE_COLLECTION_ID;

let data = reactive({
  publication : [],
})

const myapi = api(AUTH_KEY).library('user', USER_ID);

const collectionItemsResponse = await myapi.collections(COLLECTION_ID).items().get();

const getPublication = () => {
  let pubs = []
  collectionItemsResponse.getData().forEach
  (element => {
    if (element.title!="Full Text PDF"){
        pubs.push({
          title : element.title,
          url : element.url,
          doi : element.DOI,
          proceedingsTitle : element.proceedingsTitle,
          date : element.date 
        })
      }
    }
  );
  return pubs
} 

data.publication = getPublication()

export default {
  props:{
    contents: {
            type: Object,
            required: true,
            default: null
    },
  },
  data() {
    return {
      title: 'Title',
      info: {},
    }
  },
}
</script>

<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import Showcase from './icons/IconShowcase.vue'
import popUp from './popUp.vue'
</script>



<template>
  <WelcomeItem>
    <template #icon>
      <div class="icon"><EcosystemIcon /></div>
    </template>
    <template #heading>Experience</template>
    <template #list>
      <ul class="list-items" style="list-style-type:none;">
        <li v-for="experience in contents.experience">
          <div class="list-item">
            <div class="item-logo"><a :href="experience.project.url" class="link"><img class="project-logo" :src="experience.project_logo" alt="SIMILE"></a></div>
            <div class="item-title">
              <span class="item-main-info">{{ experience.position }}</span> @ {{ experience.company }} [{{ experience.start_date }} - {{ experience.end_date }}]: {{ experience.project }}
            </div>
            <popUp
              :title="Activities"
              :info=experience
            ></popUp>
          </div>
        </li>
      </ul>
    </template>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <div class="icon"><EcosystemIcon /></div>
    </template>
    <template #heading>Projects Collaboration</template>
    <template #list>    
      <ul class="list-items" style="list-style-type:none;">
        <li v-for="project in contents.projects">
          <div class="list-item">
            <div class="item-logo"><a :href="project.project_url" class="link"><img class="project-logo" :src="project.project_logo" :alt="project.project"></a></div>
            <div class="item-title">
              <span class="item-main-info">{{ project.project }}</span> - {{ project.full_name }}
            </div>
            <popUp
              :title="Activities"
              :info=project
            ></popUp>
          </div>

        </li>
      </ul>
    </template>

    <br />

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <div class="icon"><EcosystemIcon /></div>
    </template>
    <template #heading>Teaching Activities @ Politecnico di Milano</template>
    <template #list>
      <ul class="list-items">
        <li v-for="teaching in contents.teaching"><span class="item-main-info">{{ teaching.position }}</span>- {{ teaching.course }} @ {{ teaching.program }} [{{ teaching.start_date }} - {{ teaching.end_date }}]</li>
      </ul>
    </template>

    <br />

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <div class="icon"><ToolingIcon /></div>
    </template>
    <template #heading>Education</template>
    <template #list>
      <ul class="list-items">
        <li v-for="education in contents.education">
          <span class="item-main-info">{{ education.study }}</span>@ {{ education.institution }}, {{ education.location }} [{{ education.start_date}} - {{ education.end_date }}]
        </li>
      </ul>
    </template>    
    <br />

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
        <div class="icon"><ToolingIcon /></div>
    </template>
    <template #heading>Digital Skills</template>
    <template #list>
      <ul class="list-items">
        <li v-for="skill in contents.skills">
          {{ skill.category }}:     
            <span v-for="tech in skill.list">
              | {{ tech.tool }}
            </span>
        </li>
      </ul>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <div class="icon"><CommunityIcon /></div>
    </template>
    <template #heading>Honours and Awards</template>
    <template #list>
      <ul class="list-items">
        <li v-for="award in contents.awards">
          <span class="item-main-info">{{ award.award }}</span> @ {{ award.awarded_by }}
        </li>
      </ul>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <div class="icon"><DocumentationIcon /></div>
    </template>
    <template #heading>Publications</template>
    <template #list>
      <ul class="list-items">
        <li v-for="publication in data.publication">{{ publication.title }}. Publication date: {{ publication.date }}. <span class="proceeding-title">{{ publication.proceedingsTitle }}</span>. {{ publication.doi }}. <a v-bind:href='publication.url'>[pdf]</a>.</li>    
      </ul>
    </template>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <div class="icon"><Showcase /></div>
    </template>
    <template #heading>Showcase</template>
    <template #list>
      <div class="list-items">
        <div class="wrap-project-web" v-for="showcase in contents.showcase">
          <div class="project-website-image">
            <img v-if="showcase.project_image != ''" :src="showcase.project_image" :alt="showcase.project" class="project-image">
            <p v-else><fa :icon="['fas','person-digging']" /></p>
          </div>
          <div class="project-web-description">
            <div>
              <h3>{{ showcase.project }}</h3>
              <li>Description: {{ showcase.project_description }}</li>
              <li v-if="showcase.project_website != ''"><a :href="showcase.project_website" class="project-web-link">[Website]</a></li>
              <li v-if="showcase.project_source != ''"><a :href="showcase.project_source" class="project-web-source">[Source]</a></li>
              <li>Technologies: <span v-for="tech in showcase.project_technologies"> {{ tech }} |</span></li>
            </div> 
          </div>
        </div>
      </div>
    </template>

  </WelcomeItem>
</template>

<style>

.icon{
  padding-top: 5px;
  margin: 0;
}

.icon.active{
  color:purple;
}

span.proceeding-title{
  font-style: italic;
}

.project-logo{
  /* height: 50px; */
  width:120px
}

.list-item{
  display:flex;
}

.item-title{
  padding: 15px;
  width: 100%;
  text-align: justify;
}

.item-logo {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-main-info{
  font-weight: bold;
}

.project-image{
  height: 150px;
}


.wrap-project-web{
  display: flex;
  padding-top:10px;
  width: auto;
  margin: 5px;
  background-color: rgba(118, 118, 118, 0.5);
  border-radius: 10px;
}

.project-website-image{
  display:flex;
  min-width:40%;
  align-content: center;
  justify-content: center;
}

.project-website-image > p{
  display: flex;
  font-size: 30px;
  align-items: center;
}

</style>

