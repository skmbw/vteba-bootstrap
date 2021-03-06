function theCityThatAlwaysSleeps() {
  let getCity;

  if (true) {
    const city = 'Seattle';
    getCity = function() {
      return city;
    };
  }

  return getCity();
}
theCityThatAlwaysSleeps();
console.log(1);

interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: 'Size 10 Object'};
printLabel(myObj);

interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  // name: string;       // 错误，`name`的类型与索引类型返回值的类型不匹配
  // age: number;
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log('beep beep');
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log('tick tock');
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

function identity<T>(arg: T): T {
  return arg;
}
// 这个是函数类型 签名 <U>(arg: U) => U
let myIdentity: <U>(arg: U) => U = identity;

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a'); // okay
// getProperty(x, 'm'); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
