$(function() {
    var nomes = ['Aaron', 'Adriano', 'Alan', 'Alexandre', 'Alonso', 'Anderson', 'Andres', 'Ant%C3%B4nio', 'Benjamin', 'Bruno', 'Camilo', 'Carlos', 'Christian', 'Christopher', 'Crist%C3%B3v%C3%A3o', 'Daniel', 'Dante', 'David', 'Diego', 'Eduardo', 'Elias', 'Emanuel', 'Emiliano', 'Em%C3%ADlio', 'Est%C3%AAv%C3%A3o', 'Evandro', 'Everton', 'Felipe', 'Fernando', 'Francisco', 'Franco', 'F%C3%A1bio', 'Gabriel', 'Gian', 'Guilherme', 'Gustavo', 'Henrique', 'Hernani', 'Hor%C3%A1cio', 'Hugo', 'Ian', 'In%C3%A1cio', 'Isaac', 'Ivan', 'Jer%C3%B4nimo', 'Joaquin', 'Jorge', 'Josu%C3%A9', 'Jos%C3%A9', 'Jo%C3%A3o', 'Kevin', 'Leandro', 'Leonardo', 'Lucas', 'Luciano', 'Luis', 'Manuel', 'Mateus', 'Matias', 'Miguel', 'M%C3%A1rio', 'M%C3%A1ximo', 'Noel', 'Pablo', 'Paulo', 'Pedro', 'Rafael', 'Ricardo', 'Rodrigo', 'Samuel', 'Santiago', 'Simon', 'S%C3%A9rgio', 'Thales', 'Thiago', 'Tom%C3%A1s', 'Valentin', 'Vicente', 'Agostinho', 'Demian', 'Giovane', 'J%C3%A1como', 'Martinho', 'Maximiano', 'Natal', 'Sebasti%C3%A3o', 'Sim%C3%A3o', 'Teobaldo', 'Ziraldo'],
        sobrenomes = ['Abreu', 'Azevedo', 'Aguiar', 'Arag%C3%A3o', 'Assun%C3%A7%C3%A3o', 'Aranda', '%C3%81vila', 'Balestero', 'Barreto', 'Barros', 'Batista', 'Bezerra', 'Beltr%C3%A3o', 'Benites', 'Bittencourt', 'Branco', 'Bonilha', 'Brito', 'Burgos', 'Caldeira', 'Camacho', 'Campos', 'Carmona', 'Carrara', 'Casanova', 'Chaves', 'Cervantes', 'Cola%C3%A7o', 'Cordeiro', 'Corona', 'Correia', 'Cort%C3%AAs', 'Cruz', 'D\'%C3%A1vila', 'Delatorre', 'Delgado', 'Delvalle', 'Dias', 'Domingues', 'Dominato', 'Duarte', 'Escobar', 'Espinoza', 'Esteves', 'Estrada', 'Faria', 'Faro', 'Feliciano', 'Ferminiano', 'Fernandes', 'Ferraz', 'Ferreira', 'Fidalgo', 'Furtado', 'Ferreira', 'Flores', 'Fonseca', 'Franco', 'Fontes', 'Galindo', 'Galhardo', 'Galv%C3%A3o', 'Garcia', 'Gil', 'God%C3%B3i', 'Gomes', 'Gon%C3%A7alves', 'Grego', 'Guerra', 'Gusm%C3%A3o', 'Jimenes', 'Leal', 'Leon', 'Lira', 'Lovato', 'Lozano', 'Lutero', 'Madeira', 'Maldonado', 'Mar%C3%A9s', 'Marin', 'Marinho', 'Marques', 'Martines', 'Mascarenhas', 'Matias', 'Matos', 'Maia', 'Medina', 'Meireles', 'Mendes', 'Mendon%C3%A7a', 'Molina', 'Montenegro', 'Neves', 'Oliveira', 'Ortega', 'Ortiz', 'Quintana', 'Queir%C3%B3s', 'Pacheco', 'Padilha', 'Padr%C3%A3o', 'Paes', 'Paz', 'Pedrosa', 'Pena', 'Pereira', 'Perez', 'Prado', 'Pontes', 'Quintana', 'Queir%C3%B3s', 'Ramires', 'Ramos', 'Rangel', 'Rezende', 'Reis', 'Rico', 'Rios', 'Rivera', 'Rocha', 'Rodrigues', 'Romero', 'Roque', 'Rosa', 'Salas', 'Salazar', 'Sales', 'Salgado', 'Sanches', 'Sandoval', 'Santacruz', 'Santana', 'Santiago', 'Saraiva', 'Sep%C3%BAlveda', 'Serna', 'Serra', 'Serrano', 'Soares', 'Solano', 'Soto', 'Tamoio', 'Teles', 'Toledo', 'Torres', 'Uchoa', 'Urias', 'Valdez', 'Val%C3%AAncia', 'Valentin', 'Vale', 'Vasques', 'Vega', 'Velasques', 'Verdugo', 'Verdara', 'Vieira', 'Vila', 'Zamana', 'Zambrano', 'Zarago%C3%A7a', 'da Cruz', 'da Rosa', 'da Silva', 'das Dores', 'das Neves', 'de Aguiar', 'de Oliveira', 'de Souza'],
        ddds = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22', '24', '27', '28', '31', '32', '33', '34', '35', '37', '38', '41', '42', '43', '44', '45', '46', '47', '48', '49', '51', '53', '54', '55', '61', '62', '63', '64', '65', '66', '67', '68', '69', '71', '73', '74', '75', '77', '79', '81', '82', '83', '84', '85', '86', '87', '88', '89', '91', '92', '93', '94', '95', '96', '97', '98', '99'],
        companies = ['Dinosaur Coms', 'Crux Networks', 'Sunshine Industries', 'Pixystems', 'Griffindustries', 'Cruisertainment', 'Asco', 'Thunderhive', 'Iceaid', 'Blueking', 'Thor Intelligence', 'Wave Industries', 'Root Arts', 'Amazystems', 'Odinetworks', 'Tuliproductions', 'Odinetworks', 'Heartbeat', 'Marblecast', 'Lionmart', 'Champion Lighting', 'Aura Electronics', 'Grotto Softwares', 'Herolutions', 'Fluxystems', 'Goldustries', 'Whirlwindustries', 'Luckyshadow', 'Starbit', 'Apexaid'];

    function randomiza(n) {
        return Math.round(Math.random() * n);
    }

    function mod(dividendo, divisor) {
        return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
    }

    function gerarCPF() {
        var cpf;
        var comPontos = true;
        var n = 9;
        var n1 = randomiza(n);
        var n2 = randomiza(n);
        var n3 = randomiza(n);
        var n4 = randomiza(n);
        var n5 = randomiza(n);
        var n6 = randomiza(n);
        var n7 = randomiza(n);
        var n8 = randomiza(n);
        var n9 = randomiza(n);
        var d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
        d1 = 11 - (mod(d1, 11));
        if (d1 >= 10) {
            d1 = 0;
        }
        var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
        d2 = 11 - (mod(d2, 11));
        if (d2 >= 10) {
            d2 = 0;
        }
        cpf = comPontos ? '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + d1 + d2 : '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
        return cpf;
    }

    function removeAcento(text) {
        text = text.toLowerCase();
        text = text.replace(new RegExp('[%C3%81%C3%80%C3%82%C3%83]', 'gi'), 'a');
        text = text.replace(new RegExp('[%C3%89%C3%88%C3%8A]', 'gi'), 'e');
        text = text.replace(new RegExp('[%C3%8D%C3%8C%C3%8E]', 'gi'), 'i');
        text = text.replace(new RegExp('[%C3%93%C3%92%C3%94%C3%95]', 'gi'), 'o');
        text = text.replace(new RegExp('[%C3%9A%C3%99%C3%9B]', 'gi'), 'u');
        text = text.replace(new RegExp('[%C3%87]', 'gi'), 'c');
        return text;
    }

    function gerarCEP() {
        return randomiza(9).toString() + randomiza(9) + randomiza(9) + randomiza(9) + randomiza(9) + randomiza(9) + randomiza(9) + randomiza(9);
    }

    var fname = nomes[Math.floor(Math.random() * nomes.length)], lname = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    var $registerFormNome = $('#register-form-nome');
    $registerFormNome.val(fname + ' ' + lname);
    $('#register-form-cpf').val(gerarCPF());
    $('#perfilusuario-cpf').val(gerarCPF());
    $('#cliente-endcep').val(gerarCEP());
    $('#register-form-celular').val('52' + 9 + Math.random().toString(10).substring(2, 10));
    $('#register-form-empresa').val(companies[Math.floor(Math.random() * companies.length)]);
    if ($registerFormNome.length > 0) {
        $('#register-form-email').val(removeAcento('mirele' + $registerFormNome.val().replace(' ', '.')) + '@mercadolead.com');
    }
    $('#register-form-password').val(123456);
    $('#cliente-iccomonosconheceu').val((randomiza(4) + 1).toString());
    $('#register-form-isaceitotermos').prop('checked', true);
});
