export const Componente = {
  mostra: function(dado){
  	return dado + " ---- ";
  },
  mostra2: dado => {
  	return dado + " --[]-- ";
  },
  mostra3: dado => (
  	`
  		${dado} --[3]--
  	`
  ),
}