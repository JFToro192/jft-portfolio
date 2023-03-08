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

</script>

<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>



<template>
  <WelcomeItem>
    <template #icon>
      <div class="icon"><EcosystemIcon /></div>
    </template>
    <template #heading>Experience</template>

    <ul class="list-items">
      <li>Research Fellow @ Politecnico di Milano [2021 - 2022]: SIMILE Project</li>
      <li>Research Fellow @ Politecnico di Milano [2019 - 2021]: GIOCOnDA Project</li>
      <li>Internship @ Politecnico di Milano [Feb 2019 - Aug 2019]: GIOCOnDA Project</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <div class="icon"><EcosystemIcon /></div>
    </template>
    <template #heading>Projects Collaboration</template>

    <ul class="list-items">
      <li>CIDMA</li>
      <li>GIS4Schools</li>
    </ul>
    <br />

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <div class="icon"><EcosystemIcon /></div>
    </template>
    <template #heading>Teaching Activities @ Politecnico di Milano</template>
    <ul class="list-items">
      <li>Teaching Assistant Fundamentals of GIS @ M.Sc. Civil Engineering for Risk Mitigation [Feb 2020 - Feb 2022]</li>
      <li>Teaching Assistant Geographic Information Systems @ M.Sc. Geoinformatics [Oct 2020 - Feb 2022]</li>
    </ul>
    <br />

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <div class="icon"><ToolingIcon /></div>
    </template>
    <template #heading>Education</template>
    <ul class="list-items">
      <li>PhD Candidate in the Program of Infrastructure and Environmental Engineering @ Politecnico di Milano, Italy</li>
      <li>M.Sc. Civil Engineering for Risk Mitigation @ Politecnico di Milano, Italy</li>
      <li>B.Sc. Economics @ Universidad de los Andes, Colombia</li>
      <li>B.Sc. Civil Engineering @ Universidad de los Andes, Colombia</li>
    </ul>
    
    <br />

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
        <div class="icon"><ToolingIcon /></div>
    </template>
    <template #heading>Digital Skills</template>

    <ul class="list-items">
      <li>OS: Linux, Windows</li>
      <li>Desktop/WebGIS GIS: ArcGIS, QGIS, ESA Sentinel Application Platform (SNAP), ENVI, Google Earth Engine</li>
      <li>Programming Languages: Python, JavaScript, R, C++ (Basics), Java (Basics)</li>
      <li>Geospatial Libraries (Python): rasterio, xarray, snappy-api, gdal</li>
      <li>ML (libraries): pytorch, scikit-learn, tensorflow</li>
      <li>Databases: PostgreSQL/PostGIS, mongoDB</li>
      <li>Web Mapping: OpenLayers, Leaflet</li>
      <li>Map Server: GeoServer</li>
      <li><p title="Content Management System" style="display:inline">CMS</p>: GeoNode, Drupal(Basics)</li>
      <li>Web Frameworks: Django, Flask, VueJS</li>
      <li>DevOps: git, docker, GitLab, Gitlab CI/CD, GitHub</li>
      <li>Software: MS Office, Matlab, STATA, AutoDesk (Civil3D)</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <div class="icon"><CommunityIcon /></div>
    </template>
    <template #heading>Honours and Awards</template>

    <ul class="list-items">
      <li>ISPRS Best Young Author Award - Commision V @ XXIV ISPRS Congress 2022</li>
      <li>Merit Based "Gold Scolarship" - M.Sc. Civil Engineering for Risk Mitigation @ Politecnico di Milano</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <div class="icon"><DocumentationIcon /></div>
    </template>
    <template #heading>Publications</template>

    <ul class="list-items">
      <li v-for="publication in data.publication">{{ publication.title }}. Publication date: {{ publication.date }}. <span class="proceeding-title">{{ publication.proceedingsTitle }}</span>. {{ publication.doi }}. <a v-bind:href='publication.url'>[pdf]</a>.</li>
    </ul>

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

.item ul{
  display:none;
  transition: opacity 1s ease-out;
  opacity: 0;
}


.item.active ul{
  opacity: 1;
  display:block;
}

.item.active h3{
  color: purple;
}

.item:hover ul{
  opacity: 1;
  display:block;
}

.item.active i{
  color:purple;
}

span.proceeding-title{
  font-style: italic;
}
</style>

