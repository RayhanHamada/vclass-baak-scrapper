import p from 'puppeteer';

export async function getJadwalUU(jurusan: string) {
  const bsr = await p.launch({ headless: true });
  const page = (await bsr.pages())[0];

  await page.goto(
    `https://baak.gunadarma.ac.id/jadwal/cariUtama?jurusan=${jurusan}`
  );

  const content = await page.$(
    'body > div > main > section:nth-child(3) > div > div'
  );

  const ss = (await content?.screenshot()) as Buffer;
  return ss;
}
