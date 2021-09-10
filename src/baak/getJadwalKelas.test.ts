import { getJadwalKelasBase64 } from './getJadwalKelas';

getJadwalKelasBase64('3IA12').then((str) => {
  console.log(str);
  process.exit(0);
});
