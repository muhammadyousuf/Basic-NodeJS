setTimeout(() => {
  console.log("Running in two sec.");
}, 2000);

const name = ["yousuf", "raza", "hassaan"];
const shortNames = name.filter(name => {
  return name.length <= 4;
});

const geoCode = (address, callback) => {
  setTimeout(() => {
    const data = { latitude: 0, longitude: 0 };
    callback(data);
  }, 2000);
};

geoCode("karachi", data => {
  console.log("data", data);
});

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};
add(1, 4, sum => {
  console.log(sum);
});
