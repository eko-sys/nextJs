
const privateMembers = new WeakMap();
class A {
    firstMethod() {
      console.log('This is the First Method');
      return this;
    }
    
    secondMethod() {
      console.log('This is the Second Method');
      return this;
    }
    
    thirdMethod() {
      console.log('This is the Third Method');
      return this;
    }
}

class B extends A {
    constructor(){
        super();
        const a = {}
        privateMembers.set(this, {setAge : (val) => {
          return val
        }});
    }

    extendsFirst(){
        console.log('This is the first extends Method');
        return this;
    }

    setAge(val){
      return privateMembers.get(this).setAge(val);
    }

}

let data = {
      your_name: "jimmy",
      your_msg: "hello world",
      s:'s'
}

let dataKey = [];
let set = 'SET';

let z;
function a(){
  let ss;
  for(key in data){
    ss += `${set} ${key} = ${data[key]}, `;
    let p = ss.replace('undefined', '');
    let l = p.length;
    z = p.slice(0, l - 2);
  }
}
a()
console.log(z);
