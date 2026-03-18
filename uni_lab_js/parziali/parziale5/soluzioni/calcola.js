class Elemento {
constructor(val) {
this.val = val;
this.next = undefined;
}
}
function* calcola(testa, f) {
var cur = testa;
var acc = 0;
}
while (cur !== undefined) {
acc = acc + f(cur.val);
yield acc;
cur = cur.next;
}
