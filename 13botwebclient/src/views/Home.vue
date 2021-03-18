  <template>
  <div>
  <v-row class="home">
    <v-col xs="12" sm="12" md="12">
    <h1>Nuovo pronostico</h1>
    </v-col>
  </v-row>
  <v-row>
    <v-col xs="12" sm="12" md="12">
    <v-textarea
    class="textarea"
      name="input-7-1"
      filled
      label="Label"
      auto-grow
      v-model="text"
    ></v-textarea>

    </v-col>
    </v-row>
    
    <v-row>
    <v-col xs="2" md="2">
    <v-spacer></v-spacer>
    <v-btn class="btn" @click="setPronostico()" color="#2a9d8f">Salva</v-btn>

    <v-btn class="btn" color="#e76f51">Annulla</v-btn>

    </v-col>
    
    
  </v-row>
  </div>
</template>

<script>
import "axios";
import axios from 'axios';
// @ is an alias to /src

export default {


  data() {
    return {
      text: "Inserisci testo"
    }
  },

  methods:{
    setPronostico(){
      axios.post("http://localhost:3000/",{
        text: this.text
      }).then(response => console.log(response))
        .catch(err => console.log(err));
    }
  }
}
</script>

<style>
.editor{
  padding: 10px;
  background-color: antiquewhite;
  height: 100%;
  width: 80%;
  }
  .danger{
  background-color: #e76f51;
}
.btn{
  margin-right: 20px;
}



</style>