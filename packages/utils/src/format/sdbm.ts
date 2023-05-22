// 将输入字符串哈希为整数
const sdbm = (str: string) => {
  let arr = str.split("");
  return arr.reduce(
    (hashCode: number, currentVal: string) =>
      (hashCode =
        currentVal.charCodeAt(0) +
        (hashCode << 6) +
        (hashCode << 16) -
        hashCode),
    0
  );
};

sdbm("name"); // -3521204949
console.log("🚀 ~ file: sdbm.js:15 ~ ", sdbm("hgfgfgfhgf"));

// 输入 uuid 是否可以得到 number 类型的 uuid
