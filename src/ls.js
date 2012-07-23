function ls(str_a, str_b){
	var i = 0, j = 0,
		a_length = str_a.length, b_length = str_b.length,
		cost = 0,
		insert_weight = 0, delete_weight = 0, transpose_weight = 1, sub_weight = 0,
		data = [[]];

	// The weights are temporary

	// Fill initial values
	for(i = 0; i < a_length; i++){
		console.log(data);
		data[i][0] = str_a[i];
		data[0][i] = str_b[i];
	}

	console.log(data);

	for(i = 0; i < a_length; i++){
		for(j = 0; j < b_length; j++){

		}
	}
}