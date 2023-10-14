var CasaHogwarts = document.getElementById('CasaHogwarts');
var CaracterCasa = document.getElementById('CaracterCasa');
var PersonaCasa = document.getElementById('PersonaCasa');
var btnEnviar = document.getElementById('btnEnviar');
var divRecebeInf = document.getElementById('divRecebeInf');

CasaHogwarts.addEventListener('change', function () {
    var casa = CasaHogwarts.value;

    while (CaracterCasa.firstChild) {
        CaracterCasa.removeChild(CaracterCasa.firstChild);
    }

    var op0 = document.createElement('option');
    op0.innerHTML = 'Selecione uma característica';
    CaracterCasa.appendChild(op0);

    switch (casa) {
        case "gry":
            var op1 = document.createElement('option');
            op1.innerHTML = 'Coragem';
            op1.value = 'co';
            CaracterCasa.appendChild(op1);

            var op2 = document.createElement('option');
            op2.innerHTML = 'Lealdade'
            op2.value = 'lea'
            CaracterCasa.appendChild(op2);
            break;

        case "sly":
            var op1 = document.createElement('option');
            op1.innerHTML = 'Ambição';
            op1.value = 'amb';
            CaracterCasa.appendChild(op1);

            var op2 = document.createElement('option');
            op2.innerHTML = 'Inteligência'
            op2.value = 'int'
            CaracterCasa.appendChild(op2);
            break;

        case "rav":
            var op1 = document.createElement('option');
            op1.innerHTML = 'Curioso';
            op1.value = 'cur';
            CaracterCasa.appendChild(op1);

            var op2 = document.createElement('option');
            op2.innerHTML = 'Sábio'
            op2.value = 'sab'
            CaracterCasa.appendChild(op2);
            break;

        case "huf":
            var op1 = document.createElement('option');
            op1.innerHTML = 'Lealdade';
            op1.value = 'lea';
            CaracterCasa.appendChild(op1);

            var op2 = document.createElement('option');
            op2.innerHTML = 'Paciência'
            op2.value = 'pac'
            CaracterCasa.appendChild(op2);
            break;
    }
});

var CasaHogwarts = document.getElementById('CasaHogwarts');
var CaracterCasa = document.getElementById('CaracterCasa');
var PersonaCasa = document.getElementById('PersonaCasa');
var btnEnviar = document.getElementById('btnEnviar');
var divRecebeInf = document.getElementById('divRecebeInf');

var isEditing = false;
var editarItem = null;

CasaHogwarts.addEventListener('change', function () {
});

btnEnviar.addEventListener('click', function () {
    var HouseHogwarts = CasaHogwarts.options[CasaHogwarts.selectedIndex].text;
    var CaracterHouse = CaracterCasa.options[CaracterCasa.selectedIndex].text;
    var persona = PersonaCasa.value;

    if (!HouseHogwarts || !CaracterHouse || !persona) {
        alert("Trouxa! Preencha todos os campos antes de enviar.");
        return;
    }

    if (isEditing) {

        editarItem.innerHTML = `
            <strong>${HouseHogwarts} - ${CaracterHouse} - ${persona}</strong> 
            <button class="btn-editar">Editar</button>
            <button class="btn-deletar">Excluir</button>
        `;

        isEditing = false;
        editarItem = null;
    } else {

        var novoItem = document.createElement('div');
        novoItem.innerHTML = `
            <strong>${HouseHogwarts} - ${CaracterHouse} - ${persona}</strong> 
            <button class="btn-editar">Editar</button>
            <button class="btn-deletar">Excluir</button>
        `;

        novoItem.querySelector('.btn-editar').addEventListener('click', function () {
            isEditing = true;
            editarItem = novoItem;

            CasaHogwarts.value = HouseHogwarts;
            CaracterCasa.value = CaracterHouse;
            PersonaCasa.value = persona;
        });

        novoItem.querySelector('.btn-deletar').addEventListener('click', function () {
            novoItem.remove();
        });

        divRecebeInf.appendChild(novoItem);
    }

    PersonaCasa.value = '';
});
