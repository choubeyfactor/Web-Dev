const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true ;
console.log(one , two ,three);

for (let i = 1; i < 5; i++) {
    if (i === 3) continue
        console.log(i);
    }
    
for (let i = 1 ; i < 5 ; i++ ) {
    if (i==3) {
        console.log(i);
        
    }
}
