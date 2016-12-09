function calculator(operator, left, right){
	
	var intLeft = parseInt(left);
	var intRight = parseInt(right);

	// 더하기 
	if(operator === '+'){
		return intLeft + intRight;
	}

	// 빼기
	if(operator === '-')
		return intLeft - intRight;

	// 나눗셈
	if(operator === '/')
		return intLeft/intRight;

	// 곱하기
	if(operator === '*')
		return intLeft*intRight;
}