$(function() {
    var nomes = ['Aaron', 'Adriano', 'Alan', 'Alexandre', 'Alonso', 'Anderson', 'Andres', 'Antônio', 'Benjamin', 'Bruno', 'Camilo', 'Carlos', 'Christian', 'Christopher', 'Cristóvão', 'Daniel', 'Dante', 'David', 'Diego', 'Eduardo', 'Elias', 'Emanuel', 'Emiliano', 'Emílio', 'Estêvão', 'Evandro', 'Everton', 'Felipe', 'Fernando', 'Francisco', 'Franco', 'Fábio', 'Gabriel', 'Gian', 'Guilherme', 'Gustavo', 'Henrique', 'Hernani', 'Horácio', 'Hugo', 'Ian', 'Inácio', 'Isaac', 'Ivan', 'Jerônimo', 'Joaquin', 'Jorge', 'Josué', 'José', 'João', 'Kevin', 'Leandro', 'Leonardo', 'Lucas', 'Luciano', 'Luis', 'Manuel', 'Mateus', 'Matias', 'Miguel', 'Mário', 'Máximo', 'Noel', 'Pablo', 'Paulo', 'Pedro', 'Rafael', 'Ricardo', 'Rodrigo', 'Samuel', 'Santiago', 'Simon', 'Sérgio', 'Thales', 'Thiago', 'Tomás', 'Valentin', 'Vicente', 'Agostinho', 'Demian', 'Giovane', 'Jácomo', 'Martinho', 'Maximiano', 'Natal', 'Sebastião', 'Simão', 'Teobaldo', 'Ziraldo', 'Adriana', 'Agustina', 'Alessandra', 'Alexa', 'Allison', 'Alma', 'Amanda', 'Amélia', 'Ana', 'Andrea', 'Antonieta', 'Ariadna', 'Ariana', 'Ashley', 'Beatriz', 'Bianca', 'Camila', 'Carla', 'Carolina', 'Catarina', 'Clara', 'Daniela', 'Elizabeth', 'Emília', 'Fabiana', 'Fátima', 'Gabriela', 'Giovana', 'Helena', 'Irene', 'Isabel', 'Isabella', 'Isadora', 'Ivana', 'Jasmin', 'Joana', 'Josefina', 'Juliana', 'Julieta', 'Júlia', 'Ketlin', 'Laura', 'Luana', 'Luara', 'Luciana', 'Luna', 'Luzia', 'Madalena', 'Maitê', 'Malena', 'Manuela', 'Mariana', 'Mel', 'Melissa', 'Mia', 'Micaela', 'Michele', 'Miranda', 'Natália', 'Nicole', 'Noelí', 'Norma', 'Nádia', 'Olívia', 'Ornela', 'Paula', 'Paulina', 'Pâmela', 'Rafaela', 'Rebeca', 'Regina', 'Renata', 'Sabrina', 'Salomé', 'Samanta', 'Sara', 'Silvana', 'Sofia', 'Sophie', 'Suzana', 'Taís', 'Tábata', 'Valentina', 'Valéria', 'Violeta', 'Vitória', 'Abgail', 'Constância', 'Hortência', 'Tessália', 'Thalissa'],
        sobrenomes = ['Abreu', 'Azevedo', 'Aguiar', 'Aragão', 'Assunção', 'Aranda', 'Ávila', 'Balestero', 'Barreto', 'Barros', 'Batista', 'Bezerra', 'Beltrão', 'Benites', 'Bittencourt', 'Branco', 'Bonilha', 'Brito', 'Burgos', 'Caldeira', 'Camacho', 'Campos', 'Carmona', 'Carrara', 'Casanova', 'Chaves', 'Cervantes', 'Colaço', 'Cordeiro', 'Corona', 'Correia', 'Cortês', 'Cruz', 'D\'ávila', 'Delatorre', 'Delgado', 'Delvalle', 'Dias', 'Domingues', 'Dominato', 'Duarte', 'Escobar', 'Espinoza', 'Esteves', 'Estrada', 'Faria', 'Faro', 'Feliciano', 'Ferminiano', 'Fernandes', 'Ferraz', 'Ferreira', 'Fidalgo', 'Furtado', 'Ferreira', 'Flores', 'Fonseca', 'Franco', 'Fontes', 'Galindo', 'Galhardo', 'Galvão', 'Garcia', 'Gil', 'Godói', 'Gomes', 'Gonçalves', 'Grego', 'Guerra', 'Gusmão', 'Jimenes', 'Leal', 'Leon', 'Lira', 'Lovato', 'Lozano', 'Lutero', 'Madeira', 'Maldonado', 'Marés', 'Marin', 'Marinho', 'Marques', 'Martines', 'Mascarenhas', 'Matias', 'Matos', 'Maia', 'Medina', 'Meireles', 'Mendes', 'Mendonça', 'Molina', 'Montenegro', 'Neves', 'Oliveira', 'Ortega', 'Ortiz', 'Quintana', 'Queirós', 'Pacheco', 'Padilha', 'Padrão', 'Paes', 'Paz', 'Pedrosa', 'Pena', 'Pereira', 'Perez', 'Prado', 'Pontes', 'Quintana', 'Queirós', 'Ramires', 'Ramos', 'Rangel', 'Rezende', 'Reis', 'Rico', 'Rios', 'Rivera', 'Rocha', 'Rodrigues', 'Romero', 'Roque', 'Rosa', 'Salas', 'Salazar', 'Sales', 'Salgado', 'Sanches', 'Sandoval', 'Santacruz', 'Santana', 'Santiago', 'Saraiva', 'Sepúlveda', 'Serna', 'Serra', 'Serrano', 'Soares', 'Solano', 'Soto', 'Tamoio', 'Teles', 'Toledo', 'Torres', 'Uchoa', 'Urias', 'Valdez', 'Valência', 'Valentin', 'Vale', 'Vasques', 'Vega', 'Velasques', 'Verdugo', 'Verdara', 'Vieira', 'Vila', 'Zamana', 'Zambrano', 'Zaragoça', 'da Cruz', 'da Rosa', 'da Silva', 'das Dores', 'das Neves', 'de Aguiar', 'de Oliveira', 'de Souza'],
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
