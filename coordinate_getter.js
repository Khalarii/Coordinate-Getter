var full = 20000;

var current_url = document.URL;

if (current_url.includes('tribalwars') && current_url.includes('village=') && current_url.includes('mode=units')){

	var output_coordinates = [];

	var output = [];

	var units_table = document.getElementById('units_table').getElementsByTagName("tr");

	if (units_table != null){

        var village_info_offset = 1;
        var id_cell = 0;
        if (units_table[1].cells[1].firstChild.data == 'Na Aldeia'){
		village_info_offset = 0;
		id_cell = 1;
	}
        for (var i = 1; i < units_table.length; i++){

            var row = units_table[i];

            if (row.cells[id_cell].firstChild.data == 'Na Aldeia'){

                var village_units = [];

		var village_info = units_table[i-village_info_offset].cells[0].childNodes[1].childNodes[1].childNodes[1].innerText;
                village_units.push(village_info.substr(village_info.indexOf('(')+1, (village_info.indexOf(')') - village_info.indexOf('(') - 1)));

                for (var j = 1; j < row.cells.length; j++){

                    village_units.push(units_table[i].cells[j].firstChild.data);

                }

                output.push(village_units);

            }

        }


        for (var i = 0; i < output.length; i++){

			var village = output[i];

			//is full

			var total_population = parseInt(village[1]) + parseInt(village[2]) + parseInt(village[3]) + parseInt(village[4]) + parseInt(village[5]) * 2 + parseInt(village[6]) * 4 + parseInt(village[7]) * 5 + parseInt(village[8]) * 6 + parseInt(village[9]) * 5 + parseInt(village[10]) * 8 + parseInt(village[11]) * 10 + parseInt(village[12]) * 100;

			if (total_population >= full){

				//is offensive

				var offensive_population = parseInt(village[3]) + parseInt(village[6]) * 4 + parseInt(village[7]) * 5 + parseInt(village[9]) * 5 + parseInt(village[10]) * 8 + parseInt(village[11]) * 10;

				if (offensive_population >= (full * 0.9)){

					output_coordinates.push(village[0]);

				}

			}

		}


		alert(output_coordinates);

    }

    else{

        alert('Erro ao encontrar tabela de unidades');

    }

}

else{
	alert('Voce deve estar na visualizacao de tropas para rodar o script');
}
