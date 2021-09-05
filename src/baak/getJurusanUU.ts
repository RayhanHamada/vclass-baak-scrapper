import p from 'puppeteer';

export async function getJurusanUU() {
  const bsr = await p.launch({ headless: true });
  const page = (await bsr.pages())[0];

  await page.goto('https://baak.gunadarma.ac.id/jadwal/cariUtama');

  await page.click('#formCari > div > span > span.selection > span');

  const jurusans = await page.evaluate(() => {
    const els = document.querySelectorAll('li.select2-results__option');

    let j: string[] = [];
    els.forEach((e) => {
      j.push(e.textContent as string);
    });

    return j.splice(1);
  });

  return jurusans;
}
