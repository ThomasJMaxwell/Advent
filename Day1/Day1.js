var list1 = [3, 4, 2, 1, 3, 3];
var list2 = [4, 3, 5, 3, 9, 3];
list1 = list1.sort();
list2 = list2.sort();
var c = 0;
var distance = 0;
while (c < list1.length && c < list2.length) {
    console.log(list1[c] + " - " + list2[c] + " = " + Math.abs(list1[c] - list2[c]));
    distance += Math.abs(list1[c] - list2[c]);
    c++;
}
console.log(distance);
