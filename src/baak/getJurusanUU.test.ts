import { getJurusanUU } from './getJurusanUU';

getJurusanUU().then((js) => {
  console.log(JSON.stringify(js));
  process.exit(0);
});
