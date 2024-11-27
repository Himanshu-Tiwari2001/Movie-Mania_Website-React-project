import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTdhNzdiMmIwNTMzNWJhYTdlNTY0NTg3YzQ4Y2IxOCIsIm5iZiI6MTczMDU1ODkxOC44ODEwNDI1LCJzdWIiOiI2NzI2MTU4ZmFmZGQzNGNhYWZlNmM1MzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4DgrwfO1LBK1kdfKEXbikSnR-JLmT0fN5Xex0GpecZc",
  },
});

export default instance;
