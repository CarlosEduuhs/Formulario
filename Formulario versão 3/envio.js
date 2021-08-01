function enviodedados() {

    if (document.dados.nome.value == "" || document.dados.nome.value.length < 2) {
        alert("Por favor, preencha o NOME corretamente!");
        document.dados.nome.focus();
        return false;
    }
    if (document.dados.sobrenome.value == "" || document.dados.sobrenome.value.length < 2) {
        alert("Por favor preencha o SOBRENOME corretamente!");
        document.dados.sobrenome.focus();
        return false;
    }

        function calculaIdade(dataNasc) {
            var dataAtual = new Date();
            var anoAtual = dataAtual.getFullYear();
            var anoNascParts = dataNasc.split('/');
           //vetor;
            var diaNasc = anoNascParts[0];
            var mesNasc = anoNascParts[1];
            var anoNasc = anoNascParts[2];
            var idade = anoAtual - anoNasc;
            var mesAtual = dataAtual.getMonth() + 1;
            //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
            if (mesAtual < mesNasc) {
                idade--;
            } 
            else 
            {
                //Se estiver no mes do nascimento, verificar o dia
                if (mesAtual == mesNasc) {
                    if (new Date().getDate() < diaNasc) {
                        //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                        idade--;
                    }
                }
            }
            return idade;
            
            
            if (document.dados.idade.value == "" || document.dados.idade.value.length < 18) {
                alert("Por favor, Insira a data de Nascimento Obs: Você deve ter pelo menos 18 anos");
        }
    }
    


    if (document.dados.email.value == "" || document.dados.email.value.indexOf('@') == -1 || document.dados.email.value.indexOf('.') == -1) {
        alert("Por favor, preencha o E-MAIL corretamente!");
        document.dados.email.focus();
        return false;
    }



    if (document.dados.cpf.value.length < 14) {
        alert("Por favor, preencha o CPF corretamente!");
        document.dados.cpf.focus();
        return false;
    }


    if (document.dados.txt_ddd.value.length < 1) {
        alert("Por favor, preencha o DDD corretamente!");
        document.dados.txt_ddd.focus();
        return false;
    }

    if (document.dados.txt_telefone.value.length < 8) {
        alert("Por favor, preencha o Telefone corretamente!");
        document.dados.txt_telefone.focus();
        return false;
    }

    return true;
}