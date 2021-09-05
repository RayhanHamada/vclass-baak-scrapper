import { getJadwalUU } from './getJadwalUU';

getJadwalUU('S1-TEKNIK INFORMATIKA (KAMPUS KELAPA DUA)').then((buffer) => {
  console.log(buffer.toString('base64'));
});
