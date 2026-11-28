import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import ts from "typescript";

const source = await readFile(new URL("../lib/content.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { copy, routes, languages } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);

test("all four languages cover the same public content and navigation", () => {
  for (const language of ["ht", "en", "fr", "ar"]) {
    assert.deepEqual(Object.keys(copy[language]).sort(), Object.keys(copy.en).sort());
    assert.deepEqual(Object.keys(copy[language].pages).sort(), Object.keys(copy.en.pages).sort());
    assert.equal(copy[language].nav.length, routes.length);
    assert.equal(copy[language].factions.length, 9);
    assert.equal(copy[language].features.length, copy.en.features.length);
    assert.equal(copy[language].discordCommunities.length, 4);
    assert.ok(copy[language].communitySectionTitle);
    assert.ok(copy[language].developmentText);
    assert.ok(copy[language].followUs);
    assert.ok(copy[language].followTitle);
    assert.ok(copy[language].followText);
  }
  assert.equal(Object.keys(languages).length, 4);
});

test("main navigation maps to the requested public pages", () => {
  assert.deepEqual(routes, ["/", "/about", "/news", "/gallery", "/factions", "/team", "/rules", "/download", "/community", "/store"]);
});

test("regional community cards use the official Discord invites and open safely in a new tab", async () => {
  const component = await readFile(new URL("../components/site.tsx", import.meta.url), "utf8");
  const expected = [
    "https://discord.gg/nw7PWS4grJ",
    "https://discord.gg/vYhbuZVmTG",
    "https://discord.gg/WEzAZvc3aU",
    "https://discord.gg/v2JFTjGHc8",
  ];
  assert.deepEqual([...component.matchAll(/"https:\/\/discord\.gg\/[^"]+"/g)].map(([link]) => link.slice(1, -1)), expected);
  assert.match(component, /target="_blank" rel="noopener noreferrer"/);
  for (const community of copy.en.discordCommunities) assert.ok(community.every(Boolean));
});

test("official social accounts are linked in the navigation, footer, and translated homepage section", async () => {
  const component = await readFile(new URL("../components/site.tsx", import.meta.url), "utf8");
  const socialUrls = [
    "https://www.tiktok.com/@themooo5?_r=1&_t=ZP-9BlWoFDvEY3",
    "https://www.instagram.com/okapcityrp509?fqnt=MWc0aWJwMHNubDd3Zg%3D%3D&utm_source=qr",
    "https://x.com/woobensplug?s=11",
    "https://youtube.com/@okapcityrp?si=KQy-T5c1XXvZ5O-9",
  ];
  assert.deepEqual([...component.matchAll(/"https:\/\/[^"]+"/g)].map(([link]) => link.slice(1, -1)).filter(link => /tiktok|instagram|x\.com|youtube/.test(link)), socialUrls);
  assert.ok(component.includes('className="header-socials"'));
  assert.ok(component.includes('className="footer-socials"'));
  assert.ok(component.includes('className="section social-section wrap"'));
  assert.ok(component.includes('target="_blank" rel="noopener noreferrer"'));
  assert.equal(copy.en.followTitle, "STAY CONNECTED WITH OKAP CITY RP");
});

test("Arabic toggles the document into right-to-left layout", async () => {
  const component = await readFile(new URL("../components/site.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(component, /document\.documentElement\.dir = language === "ar" \? "rtl" : "ltr"/);
  assert.match(css, /html\[dir=rtl\]/);
});

test("website has no authentication, administration, or database dependencies", async () => {
  const manifest = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
  const files = await readFile(new URL("../app/robots.ts", import.meta.url), "utf8");
  assert.equal(Object.keys(manifest.dependencies).some(name => name.includes("supabase")), false);
  assert.doesNotMatch(files, /admin|supabase/i);
  await assert.rejects(access(new URL("../app/admin/page.tsx", import.meta.url)));
  await assert.rejects(access(new URL("../lib/supabase.ts", import.meta.url)));
});

test("store shows six OKAP Coins packages as coming soon with no purchase flow", async () => {
  assert.ok(routes.includes("/store"));
  for (const language of ["ht", "en", "fr", "ar"]) {
    assert.ok(copy[language].pages.store);
    assert.ok(copy[language].storeSoon && copy[language].storePrice);
  }
  const page = await readFile(new URL("../components/site.tsx", import.meta.url), "utf8");
  assert.match(page, /coinPackages/);
  assert.doesNotMatch(page, /checkout|stripe|paypal/i);
});
