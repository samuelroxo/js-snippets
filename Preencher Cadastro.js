$(function() {
    var nomes = ['Aaron', 'Adriano', 'Alan', 'Alexandre', 'Alonso', 'Anderson', 'Andres', 'Antônio', 'Benjamin', 'Bruno', 'Camilo', 'Carlos', 'Christian', 'Christopher', 'Cristóvão', 'Daniel', 'Dante', 'David', 'Diego', 'Eduardo', 'Elias', 'Emanuel', 'Emiliano', 'Emílio', 'Estêvão', 'Evandro', 'Everton', 'Felipe', 'Fernando', 'Francisco', 'Franco', 'Fábio', 'Gabriel', 'Gian', 'Guilherme', 'Gustavo', 'Henrique', 'Hernani', 'Horácio', 'Hugo', 'Ian', 'Inácio', 'Isaac', 'Ivan', 'Jerônimo', 'Joaquin', 'Jorge', 'Josué', 'José', 'João', 'Kevin', 'Leandro', 'Leonardo', 'Lucas', 'Luciano', 'Luis', 'Manuel', 'Mateus', 'Matias', 'Miguel', 'Mário', 'Máximo', 'Noel', 'Pablo', 'Paulo', 'Pedro', 'Rafael', 'Ricardo', 'Rodrigo', 'Samuel', 'Santiago', 'Simon', 'Sérgio', 'Thales', 'Thiago', 'Tomás', 'Valentin', 'Vicente', 'Agostinho', 'Demian', 'Giovane', 'Jácomo', 'Martinho', 'Maximiano', 'Natal', 'Sebastião', 'Simão', 'Teobaldo', 'Ziraldo'],
        sobrenomes = ['Abreu', 'Azevedo', 'Aguiar', 'Aragão', 'Assunção', 'Aranda', 'Ávila', 'Balestero', 'Barreto', 'Barros', 'Batista', 'Bezerra', 'Beltrão', 'Benites', 'Bittencourt', 'Branco', 'Bonilha', 'Brito', 'Burgos', 'Caldeira', 'Camacho', 'Campos', 'Carmona', 'Carrara', 'Casanova', 'Chaves', 'Cervantes', 'Colaço', 'Cordeiro', 'Corona', 'Correia', 'Cortês', 'Cruz', 'D\'ávila', 'Delatorre', 'Delgado', 'Delvalle', 'Dias', 'Domingues', 'Dominato', 'Duarte', 'Escobar', 'Espinoza', 'Esteves', 'Estrada', 'Faria', 'Faro', 'Feliciano', 'Ferminiano', 'Fernandes', 'Ferraz', 'Ferreira', 'Fidalgo', 'Furtado', 'Ferreira', 'Flores', 'Fonseca', 'Franco', 'Fontes', 'Galindo', 'Galhardo', 'Galvão', 'Garcia', 'Gil', 'Godói', 'Gomes', 'Gonçalves', 'Grego', 'Guerra', 'Gusmão', 'Jimenes', 'Leal', 'Leon', 'Lira', 'Lovato', 'Lozano', 'Lutero', 'Madeira', 'Maldonado', 'Marés', 'Marin', 'Marinho', 'Marques', 'Martines', 'Mascarenhas', 'Matias', 'Matos', 'Maia', 'Medina', 'Meireles', 'Mendes', 'Mendonça', 'Molina', 'Montenegro', 'Neves', 'Oliveira', 'Ortega', 'Ortiz', 'Quintana', 'Queirós', 'Pacheco', 'Padilha', 'Padrão', 'Paes', 'Paz', 'Pedrosa', 'Pena', 'Pereira', 'Perez', 'Prado', 'Pontes', 'Quintana', 'Queirós', 'Ramires', 'Ramos', 'Rangel', 'Rezende', 'Reis', 'Rico', 'Rios', 'Rivera', 'Rocha', 'Rodrigues', 'Romero', 'Roque', 'Rosa', 'Salas', 'Salazar', 'Sales', 'Salgado', 'Sanches', 'Sandoval', 'Santacruz', 'Santana', 'Santiago', 'Saraiva', 'Sepúlveda', 'Serna', 'Serra', 'Serrano', 'Soares', 'Solano', 'Soto', 'Tamoio', 'Teles', 'Toledo', 'Torres', 'Uchoa', 'Urias', 'Valdez', 'Valência', 'Valentin', 'Vale', 'Vasques', 'Vega', 'Velasques', 'Verdugo', 'Verdara', 'Vieira', 'Vila', 'Zamana', 'Zambrano', 'Zaragoça', 'da Cruz', 'da Rosa', 'da Silva', 'das Dores', 'das Neves', 'de Aguiar', 'de Oliveira', 'de Souza'],
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
        /* TRUE para ativar e FALSE para desativar a pontuação.*/
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

    var fname = nomes[Math.floor(Math.random() * nomes.length)], lname = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    $('#register-form-nome').val(fname + ' ' + lname);
    $('#register-form-cpf').val(gerarCPF());
    $('#register-form-celular').val(ddds[Math.floor(Math.random() * ddds.length)] + 9 + Math.random().toString(10).substring(2, 10));
    $('#register-form-empresa').val(companies[Math.floor(Math.random() * companies.length)]);
    $('#register-form-email').val('samuel+' + fname.toLowerCase() + '.' + lname.toLowerCase() + '@mercadolead.com');
    $('#register-form-password').val(123456);
    $('#register-form-isaceitotermos').prop('checked', true);
});
