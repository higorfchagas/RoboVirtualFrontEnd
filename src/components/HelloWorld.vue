<template>
  <div>
    <div>
      <h6>Nome: {{ Robo.nome }}</h6>
      <h6>Cabeça Rotação: {{ Robo.cabecaRotacao }}</h6>
      <h6>Cabeca Inclinacao: {{ Robo.cabecaInclinacao }}</h6>
      <h6>Braço Direito Cotovelo:{{ Robo.bracoDireitoCotovelo }}</h6>
      <h6>Braço Direito Pulso: {{ Robo.bracoDireitoPulso }}</h6>
      <h6>Braço Esquerdo Cotovelo: {{ Robo.bracoEsquerdoCotovelo }}</h6>
      <h6>Braço Esquerdo Pulso: {{ Robo.bracoEsquerdoPulso }}</h6>
    </div>
    <div>
      <h3 style="color:red;">Somente as interações de rotação de cabeça foram construídas.</h3>
    </div>
    <div
      v-if="
        Robo.bracoEsquerdoCotovelo == 'Em Repouso' &&
        Robo.bracoDireitoCotovelo == 'Em Repouso' &&
        Robo.cabecaInclinacao == 'Em Repouso' &&
        Robo.cabecaRotacao == 'Em Repouso'
      "
    >
      <img
        src="https://res.cloudinary.com/mco/image/upload/v1617229970/Robo%20Ndd%20Tech/RoboReto_vqaskf.png"
        width="250"
        height="375"
        alt="1"
      />
    </div>

    <div v-if="Robo.cabecaRotacao == 'Rotação -45º'">
      <img
        src="https://res.cloudinary.com/mco/image/upload/v1617229969/Robo%20Ndd%20Tech/RoboCabecaDireita1_hiab42.png"
        width="250"
        height="375"
        alt="1"
      />
    </div>

    <div
      v-if="
        Robo.cabecaRotacao == 'Rotação -90º' ||
        Robo.cabecaRotacao == 'Rotação 90º'
      "
    >
      <img
        src="https://res.cloudinary.com/mco/image/upload/v1617229969/Robo%20Ndd%20Tech/RoboCabecaTras_y7mndh.png"
        width="250"
        height="375"
        alt="1"
      />
    </div>

    <div v-if="Robo.cabecaRotacao == 'Rotação 45º'">
      <img
        src="https://res.cloudinary.com/mco/image/upload/v1617229970/Robo%20Ndd%20Tech/RoboCabecaEsquerda_z8ipnt.png"
        width="250"
        height="375"
        alt="1"
      />
    </div>

    <div>
      <h5>Rotacionar</h5>
      <button
        v-for="item in MovimentoRotacaoCabeça"
        v-on:click="rotacionarCabeca(1, item.id)"
        :key="item.id"
      >
        {{ item.descricao }}
      </button>
    </div>
    <div>
      <h5>Inclinar</h5>
      <button
        v-for="item in MovimentoInclinacaoCabeça"
        :key="item.id"
        v-on:click="inclinarCabeca(1, item.id)"
      >
        {{ item.descricao }}
      </button>
    </div>
    <div>
      <h5>Braço Esquerdo - Cotovelo</h5>
      <button
        v-for="item in MovimentoBracoCotovelo"
        :key="item.id"
        v-on:click="movimentarBracoCotoveloEsquerdo(1, item.id)"
      >
        {{ item.descricao }}
      </button>
    </div>
    <div>
      <h5>Braço Direito - Cotovelo</h5>
      <button
        v-for="item in MovimentoBracoCotovelo"
        :key="item.id"
        v-on:click="movimentarBracoCotoveloDireito(1, item.id)"
      >
        {{ item.descricao }}
      </button>
    </div>
    <div>
      <h5>Braço Esquerdo - Pulso</h5>
      <button v-for="item in MovimentoBracoPulso" :key="item.id"
      v-on:click="movimentarBracoPulsoEsquerdo(1, item.id)">
        {{ item.descricao }}
      </button>
    </div>
        <div>
      <h5>Braço Direito - Pulso</h5>
      <button v-for="item in MovimentoBracoPulso" :key="item.id"
      v-on:click="movimentarBracoPulsoDireito(1, item.id)"
      >
        {{ item.descricao }}
      </button>
    </div>
  </div>
</template>

<script>
import ServicosRobo from "../services/robo";
export default {
  name: "HelloWorld",
  data() {
    return {
      Robo: [],
      MovimentoRotacaoCabeça: [],
      MovimentoInclinacaoCabeça: [],
      MovimentoBracoCotovelo: [],
      MovimentoBracoPulso: [],
    };
  },
  methods: {
    capturarStatusRobo() {
      var self = this;

      ServicosRobo.listRobo(1)
        .then(function (response) {
          self.Robo = response.data;
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    capturarMovimentoRotacaoCabeca() {
      var self = this;

      ServicosRobo.listMovimentoRotacaoCabeca()
        .then(function (response) {
          self.MovimentoRotacaoCabeça = response.data;
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    capturarMovimentoInclinacaoCabeca() {
      var self = this;

      ServicosRobo.listMovimentoInclinacaoCabeca()
        .then(function (response) {
          self.MovimentoInclinacaoCabeça = response.data;
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    capturarMovimentoBracoCotovelo() {
      var self = this;

      ServicosRobo.listMovimentoBracoCotovelo()
        .then(function (response) {
          self.MovimentoBracoCotovelo = response.data;
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    capturarMovimentoBracoPulso() {
      var self = this;

      ServicosRobo.listMovimentoBracoPulso()
        .then(function (response) {
          self.MovimentoBracoPulso = response.data;
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    rotacionarCabeca(idRobo, proximoMovimentoId) {
      var self = this;
      ServicosRobo.acaoRotacionarCabeca(idRobo, proximoMovimentoId)
        .then(function (response) {
          self.capturarStatusRobo();
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    inclinarCabeca(idRobo, proximoMovimentoId) {
      var self = this;
      ServicosRobo.acaoInclinarCabeca(idRobo, proximoMovimentoId)
        .then(function (response) {
          self.capturarStatusRobo();
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    movimentarBracoCotoveloDireito(idRobo, proximoMovimentoId) {
      var self = this;
      ServicosRobo.acaoMovimentarBracoCotoveloDireito(
        idRobo,
        proximoMovimentoId
      )
        .then(function (response) {
          self.capturarStatusRobo();
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    movimentarBracoCotoveloEsquerdo(idRobo, proximoMovimentoId) {
      var self = this;
      ServicosRobo.acaoMovimentarBracoCotoveloEsquerdo(
        idRobo,
        proximoMovimentoId
      )
        .then(function (response) {
          self.capturarStatusRobo();
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    movimentarBracoPulsoEsquerdo(idRobo, proximoMovimentoId) {
      var self = this;
      ServicosRobo.acaoMovimentarBracoPulsoEsquerdo(idRobo, proximoMovimentoId)
        .then(function (response) {
          self.capturarStatusRobo();
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
    movimentarBracoPulsoDireito(idRobo, proximoMovimentoId) {
      var self = this;
      ServicosRobo.acaoMovimentarBracoPulsoDireito(
        idRobo,
        proximoMovimentoId
      )
        .then(function (response) {
          self.capturarStatusRobo();
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    },
  },
  mounted() {
    var self = this;
    self.capturarStatusRobo();
    self.capturarMovimentoRotacaoCabeca();
    self.capturarMovimentoInclinacaoCabeca();
    self.capturarMovimentoBracoCotovelo();
    self.capturarMovimentoBracoPulso();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
