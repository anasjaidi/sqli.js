const exp = {};

function defineStyles(idenitifier: string, cb: Function | Object) {
  Object.defineProperty(exp, `_${idenitifier}`, {
    enumerable: false,
    writable: false,
    configurable: false,
    value: cb,
  });
}

export default exp;

// module js
