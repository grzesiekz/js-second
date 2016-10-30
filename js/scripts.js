var a, h, triangle1Area;

function getTriangleArea(a,h) {
		return (a*h)/2;
}
// Podobnie jak we wcześniejszych zadaniach, bez żadnej kontroli czy użytkownik bzdetów nie wpisał
a = prompt('Podaj długość przyprostokątnej');
h = prompt('Podaj wysokość trójkąta');
if ((a > 0) && (h > 0)) {
	triangle1Area = getTriangleArea(a,h);
	console.log('Pole trójkąta to', triangle1Area);
} else {
	console.log('Nieprawidłowe dane');
}
