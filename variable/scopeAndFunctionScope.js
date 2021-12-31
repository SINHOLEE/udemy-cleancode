var global = '전역'

if(global==='전역'){
	var global = '지역'
	
	console.log(global)
}
console.log(global)

const cons = '전역'

{
	const cons = '지역';
	console.log(cons)
}
console.log(cons)
