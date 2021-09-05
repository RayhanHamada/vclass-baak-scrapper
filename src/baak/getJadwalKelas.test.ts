import { getJadwalKelas } from './getJadwalKelas';

getJadwalKelas('3IA12').then((buffer) => {
  console.log(buffer.toString('base64'));
  process.exit(0);
});
