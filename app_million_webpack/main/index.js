import { Componente } from './componentes/retorna_string'

document.getElementById("content").innerHTML = `
	<h1>Projeto million alunos - ${Componente.mostra("teste")}</h1>
`