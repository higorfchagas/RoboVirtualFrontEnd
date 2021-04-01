import { http } from './config'


export default {
    listRobo: (idRobo) => {
        return http.post('/Status/' + idRobo, 
        )
    },
    listMovimentoRotacaoCabeca: () => {
        return http.get('/Movimento/Rotacao/', 
        )
    },
    listMovimentoInclinacaoCabeca: () => {
        return http.get('/Movimento/Inclinacao/', 
        )
    },
    listMovimentoBracoCotovelo: () => {
        return http.get('/Movimento/Braco/Cotovelo', 
        )
    },
    listMovimentoBracoPulso: () => {
        return http.get('/Movimento/Braco/Pulso', 
        )
    },
    acaoRotacionarCabeca: (idRobo, proximoMovimentoId) => {
        return http.put('MovimentarCabeca/Rotacionar/' + idRobo + "/" + proximoMovimentoId, 
        )
    },
    acaoInclinarCabeca: (idRobo, proximoMovimentoId) => {
        return http.put('MovimentarCabeca/Inclinar/' + idRobo + "/" + proximoMovimentoId, 
        )
    },
    acaoMovimentarBracoCotoveloEsquerdo: (idRobo, proximoMovimentoId) => {
        return http.put('MovimentarBraco/Esquerdo/Cotovelo/' + idRobo + "/" + proximoMovimentoId, 
        )
    },
    acaoMovimentarBracoCotoveloDireito: (idRobo, proximoMovimentoId) => {
        return http.put('MovimentarBraco/Direito/Cotovelo/' + idRobo + "/" + proximoMovimentoId, 
        )
    },
    acaoMovimentarBracoPulsoEsquerdo: (idRobo, proximoMovimentoId) => {
        return http.put('MovimentarBraco/Esquerdo/Pulso/' + idRobo + "/" + proximoMovimentoId, 
        )
    },
    acaoMovimentarBracoPulsoDireito: (idRobo, proximoMovimentoId) => {
        return http.put('MovimentarBraco/Direito/Pulso/' + idRobo + "/" + proximoMovimentoId, 
        )
    },
}