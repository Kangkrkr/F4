function calculator(operator, left, right){
	
	// 더하기 
	if(operator === '+')
		return left + right;

	// 빼기
	if(operator === '-')
		return left - right;

	// 나눗셈
	if(operator === '/')
		return left/right;

	// 곱하기
	if(operator === '*')
		return left*right;
}