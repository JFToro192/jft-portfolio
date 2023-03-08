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
      <DocumentationIcon />
    </template>
    <template #heading>Experience</template>

    <ul class="active">
      <li>Research Fellow @ Politecnico di Milano [2021 - 2022]: SIMILE Project</li>
      <li>Research Fellow @ Politecnico di Milano [2019 - 2021]: GIOCOnDA Project</li>
      <li>Internship @ Politecnico di Milano [Feb 2019 - Aug 2019]: GIOCOnDA Project</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Education</template>
    <ul>
      <li>PhD Candidate in the Program of Infrastructure and Environmental Engineering @ Politecnico di Milano, Italy</li>
      <li>M.Sc. Civil Engineering for Risk Mitigation @ Politecnico di Milano, Italy</li>
      <li>B.Sc. Economics @ Universidad de los Andes, Colombia</li>
      <li>B.Sc. Civil Engineering @ Universidad de los Andes, Colombia</li>
    </ul>
    
    <br />

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Projects Collaboration</template>

    <ul>
      <li>CIDMA</li>
      <li>GIS4Schools</li>
    </ul>
    <br />

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Digital Skills</template>

    <ul>
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
      <CommunityIcon />
    </template>
    <template #heading>Honours and Awards</template>

    <ul>
      <li>ISPRS Best Young Author Award - Commision V @ XXIV ISPRS Congress 2022</li>
      <li>Merit Based "Gold Scolarship" - M.Sc. Civil Engineering for Risk Mitigation @ Politecnico di Milano</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Publications</template>

    <ul>
      <li v-for="publication in data.publication">{{ publication.title }}. Publication date: {{ publication.date }}. <i>{{ publication.proceedingsTitle }}</i>. {{ publication.doi }}. <a v-bind:href='publication.url'>[pdf]</a>.</li>
    </ul>

  </WelcomeItem>

</template>

<style>
/* ul{
  display:none;
}

ul.active{
  display:block;
} */
</style>

