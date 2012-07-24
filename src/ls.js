/*
levenshtein distance
a is compared to b
 */
function ls(str_a, str_b){
	var i = 0, j = 0,
		a_length = str_a.length, b_length = str_b.length,
		cost = 0,
		insert_weight = 0, delete_weight = 0, transpose_weight = 1, sub_weight = 0, // The weights are temporary
		col = [], prev_col = [], // stored this way to save memory versus a 2D array
		del = 0, sub = 0, ins = 0, trans = 0;

	// Fill initial values
	for(i = 0; i < b_length; i++){
		prev_col[i] = i;
	}

	for(i = 0; i < a_length; i++){
		col[0] = i;
		for(j = 0; j < b_length; j++){
			// calc something here


			// advance
			prev_col = col;
		}
	}
}