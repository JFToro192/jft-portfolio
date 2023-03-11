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
        <li>
          <div class="list-item">
            <div class="item-logo"><a href="https://www.progetti.interreg-italiasvizzera.eu/it/b/78/sistemainformativoperilmonitoraggiointegratodeilaghiinsubriciedeiloroe" class="link"><img class="project-logo" src="../assets/img/simile.png" alt="SIMILE"></a></div>
            <div class="item-title">
              Research Fellow @ Politecnico di Milano [2021 - 2022]: SIMILE Project
            </div>
            <popUp></popUp>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="item-logo"><a href="https://www.progetti.interreg-italiasvizzera.eu/it/b/78/gestioneintegrataeolisticadelciclodivitadegliopendata" class="link"><img class="project-logo" src="../assets/img/gioconda.png" alt="GIOCOnDA"></a></div>
            <div class="item-title">
              Research Fellow @ Politecnico di Milano [2019 - 2021]: GIOCOnDA Project
            </div>
            <popUp></popUp>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="item-logo"><a href="https://www.progetti.interreg-italiasvizzera.eu/it/b/78/gestioneintegrataeolisticadelciclodivitadegliopendata" class="link"><img class="project-logo" src="../assets/img/gioconda.png" alt="GIOCOnDA"></a></div>
            <div class="item-title">
              Internship @ Politecnico di Milano [Feb 2019 - Aug 2019]: GIOCOnDA Project
            </div>
            <popUp></popUp>
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
        <li>
          <div class="list-item">
            <div class="item-logo"><a href="http://www.cidma.eu/" class="link"><img class="project-logo" src="../assets/img/cidma.png" alt="CIDMA"></a></div>
            <div class="item-title">
              CIDMA - Climate Change Induced Disaster Management in Africa
            </div>
            <popUp></popUp>
          </div>

        </li>
        <li>
          <div class="list-item">
            <div class="item-logo"><a href="https://gis4schools.eu/#/home" class="link"><img class="project-logo" src="../assets/img/G4S.svg" alt="GIS4SCHOOLS"></a></div>
            <div class="item-title">
              GIS4Schools - GIS4SCHOOLS - Improving STEAM Education in Secondary Schools through the development and co-creation of new methodologies for teaching to and exploitation by pupils of GIS products related to climate impact on the environment
            </div>
            <popUp
              :title="Activities"
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
        <li>Teaching Assistant Fundamentals of GIS @ M.Sc. Civil Engineering for Risk Mitigation [Feb 2020 - Feb 2022]</li>
        <li>Teaching Assistant Geographic Information Systems @ M.Sc. Geoinformatics [Oct 2020 - Feb 2022]</li>
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
        <li>PhD Candidate in the Program of Infrastructure and Environmental Engineering @ Politecnico di Milano, Italy</li>
        <li>M.Sc. Civil Engineering for Risk Mitigation @ Politecnico di Milano, Italy</li>
        <li>B.Sc. Economics @ Universidad de los Andes, Colombia</li>
        <li>B.Sc. Civil Engineering @ Universidad de los Andes, Colombia</li>
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
        <li>OS: Linux, Windows</li>
        <li>Desktop/WebGIS GIS: ArcGIS, QGIS, ESA Sentinel Application Platform (SNAP), ENVI, Google Earth Engine</li>
        <li>Programming Languages: Python, JavaScript, R, C++ (Basics), Java (Basics)</li>
        <li>Geospatial Libraries (Python): geopandas, rasterio, xarray, snappy-api, gdal</li>
        <li>ML (libraries): pytorch, scikit-learn, tensorflow</li>
        <li>Databases: PostgreSQL/PostGIS, mongoDB</li>
        <li>Web Mapping: OpenLayers, Leaflet</li>
        <li>Map Server: GeoServer</li>
        <li><p title="Content Management System" style="display:inline">CMS</p>: GeoNode, Drupal(Basics)</li>
        <li>Web Frameworks: Django, Flask, VueJS</li>
        <li>DevOps: git, docker, GitLab, Gitlab CI/CD, GitHub</li>
        <li>Software: MS Office, Matlab, STATA, AutoDesk (Civil3D)</li>
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
        <li>ISPRS Best Young Author Award - Commision V @ XXIV ISPRS Congress 2022</li>
        <li>Merit Based "Gold Scolarship" - M.Sc. Civil Engineering for Risk Mitigation @ Politecnico di Milano</li>
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
  height: 50px;
}

.list-item{
  display:flex;
}

.item-title{
  padding: 5px;
  width: 100%;
  text-align: justify;
}

.item-logo {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

