import p from 'puppeteer';

export async function getJadwalKelas(kelas: string) {
  const bsr = await p.launch({ headless: true });
  const page = (await bsr.pages())[0];

  await page.goto('https://baak.gunadarma.ac.id/jadwal/cariJadKul');

  const inputKelas = await page.$(
    'body > div > main > section.offset-top-10 > div > div > div > form > div > input'
  );

  await inputKelas?.type(kelas);

  const submitInputKelas = await page.$(
    'body > div > main > section.offset-top-10 > div > div > div > form > button'
  );

  await submitInputKelas?.click();

  await page.waitForNavigation();

  const content = await page.$(
    'body > div > main > section:nth-child(3) > div > div'
  );

  const ss = (await content?.screenshot()) as Buffer;
  return ss;
}
