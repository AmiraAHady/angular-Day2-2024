// loosly couple

class A {
  constructor(public aItem: B) {}
}

class B {
  constructor(public bItem: C,private data:string[]) {}
}
class C {
  constructor(public cItem1: E, public cItem2: D,public cItem3:string) {}
}

class E {}
class D {}

let r: E = new E();
let n: D = new D();
let w: C = new C(r,n,'');
let x: B = new B(w,['']);

let element: A = new A(x);

// strongle couple
// class A {
//   propertA: B;
//   propert1: E;
//   propert2: D;
//   constructor(p1: E, p2: D) {
//     this.propert1 = p1;
//     this.propert2 = p2;
//     this.propertA = new B(this.propert1,this.propert2);
//   }
// }

// class B {
//   propertB: C;
//   propert1: E;
//   propert2: D;
//   constructor(p1: E, p2: D) {
//     this.propert1 = p1;
//     this.propert2 = p2;
//     this.propertB = new C(p1,p2);
//   }
// }
// class C {
//   item1: E;
//   item2: D;
//   constructor(para1: E, para2: D,para3:string) {
//     this.item1 = E;
//     this.item2 = D;
//   }
// }

// class E {}
// class D {}
