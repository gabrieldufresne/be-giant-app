// Port begiant.ca writer profiles from Sanity into bg-app-data.js (Round 11, author profiles).
// Usage: node docs/round-11/port-authors.js > /tmp/out.js
// Reads the public Sanity API (no token). For every writer named on a story in bg-app-data.js it writes:
//   AUTH['First Last'] = {slug, bio, img, grad, web, webL, n, ids}  (ids: their latest stories, newest first)
//   stub stories (head + first paragraph, as port-article.py does) for any of those stories not already in the app.
// Paste the output over the "Round 11 author profiles" block in bg-app-data.js.
const fs = require('fs'), path = require('path');
const API = 'https://l3tzmu37.apicdn.sanity.io/v2023-01-01/data/query/production';
const SAN = 'https://cdn.sanity.io/images/l3tzmu37/production/';
const TOPIC = {Environment:'Climate', Climate:'Climate', Energy:'Energy', Technology:'Science & tech', Science:'Science & tech', Innovation:'Science & tech',
  Health:'Health', Housing:'Housing', Economy:'Economy', Business:'Economy', 'Small business':'Small business', Cities:'Cities', Education:'Education',
  Transportation:'Transportation', Food:'Food & farming', Agriculture:'Food & farming', Arts:'Arts & culture', Culture:'Arts & culture', History:'Arts & culture',
  Wildfire:'Wildfire', Wildfires:'Wildfire', Immigration:'Immigration', Indigenous:'Indigenous futures', Work:'Work', Sovereignty:'Economy', Defence:'Science & tech',
  Nature:'Climate', Wildlife:'Climate', Oceans:'Climate', Trade:'Economy', Entrepreneurship:'Small business', 'Artificial Intelligence':'Science & tech', Weather:'Climate'};
const PER = 8;

const window = {}; eval(fs.readFileSync(path.join(__dirname, '../../bg-app-data.js'), 'utf8').replace(/\/\/ Round 11 author profiles[\s\S]*?\/\/ \/Round 11 author profiles\n/, ''));
const D = window.BGD, all = D.ST.concat(D.MST);
const norm = t => (t || '').toLowerCase().replace(/[^a-z0-9]/g, '');
const bySlug = {}, byTitle = {}; all.forEach(x => { if (x.slug) bySlug[x.slug] = x.id; byTitle[norm(x.t)] = x.id; });
const ids = new Set(all.map(x => x.id));
const names = [...new Set(all.flatMap(x => (x.a || '').split(/, | & /)).map(n => n.trim()).filter(n => /^[A-Z][\w'’-]+ [A-Z]/.test(n)))];

const q = async (query, params) => {
  const u = new URL(API); u.searchParams.set('query', query);
  Object.entries(params || {}).forEach(([k, v]) => u.searchParams.set('$' + k, JSON.stringify(v)));
  return (await (await fetch(u)).json()).result;
};
const img = (ref, w) => { const m = /^image-(.+)-(\d+x\d+)-(\w+)$/.exec(ref || ''); return m ? SAN + m[1] + '-' + m[2] + '.' + m[3] + '?auto=format&fit=max&w=' + (w || 1000) + '&q=70' : null; };
const date = s => new Date(s).toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric', timeZone:'America/Toronto'});
const tags = ts => { const o = []; (ts || []).forEach(t => { const m = TOPIC[t]; if (m && !o.includes(m)) o.push(m); }); return o.length ? o.slice(0, 3) : ['Science & tech']; };
const byline = as => { const n = (as || []).filter(Boolean).map(a => (a.f + ' ' + a.l).trim()); return n.length === 1 ? n[0] : n.length ? n.slice(0, -1).join(', ') + ' & ' + n[n.length - 1] : 'Be Giant'; };
const sid = slug => { let b = slug.split('-')[0].replace(/[^a-z]/g, '').slice(0, 10) || 'story', i = b, n = 2; while (ids.has(i)) i = b + n++; ids.add(i); return i; };

(async () => {
  const AUTH = {}, stubs = [];
  for (const name of names) {
    const a = await q(`*[_type=="author" && firstName + " " + lastName == $n][0]{"slug": slug.current, "bio": pt::text(bio), "img": headshot.asset._ref, gradient, website, "social": socialLinks[]{platform, url},
      "n": count(*[_type=="article" && references(^._id) && defined(publishedAt)]),
      "arts": *[_type=="article" && references(^._id) && defined(publishedAt)] | order(publishedAt desc)[0...${PER}]{"slug": slug.current, "pillarSlug": primaryPillar->slug.current, title, dek, publishedAt, readTime,
        "authors": authors[]->{"f": firstName, "l": lastName}, "hero": coalesce(cardImage.asset._ref, heroImage.asset._ref), "topics": topics[]->title, "pillar": primaryPillar->title,
        "p1": pt::text(body[_type=="block" && style=="normal" && length(pt::text(@)) > 40][0])}}`, {n: name});
    if (!a) { console.error('no author', name); continue; }
    const web = a.website || ((a.social || []).find(x => x.platform === 'website') || (a.social || [])[0] || {}).url || null;
    const list = (a.arts || []).map(x => {
      const slug = (x.pillarSlug || 'ideas') + '/' + x.slug, hit = bySlug[slug] || byTitle[norm(x.title)];
      if (hit) return hit;
      const st = {id: sid(x.slug), slug, t: x.title.trim(), d: (x.dek || '').trim(), img: img(x.hero), p: x.pillar || 'Ideas', s: '', tags: tags(x.topics), a: byline(x.authors), date: date(x.publishedAt), m: x.readTime || 5, body: x.p1 ? [x.p1.trim()] : []};
      stubs.push(st); bySlug[slug] = st.id; return st.id;
    });
    AUTH[name] = {slug: a.slug, bio: (a.bio || '').trim(), img: img(a.img, 400), grad: a.gradient || null, web, webL: web ? new URL(web).hostname.replace(/^www\./, '') : null, n: a.n, ids: list};
  }
  const js = o => JSON.stringify(o).replace(/[\u007f-￿]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
  process.stdout.write('// Round 11 author profiles: ported by docs/round-11/port-authors.js from Sanity (' + new Date().toISOString().slice(0, 10) + '). Writer profile data, and stubs for their latest stories not already in the app.\n'
    + 'var MST4 = [\n' + stubs.map(s => ' ' + js(s)).join(',\n') + '\n];\nMST4.forEach(function(x,i){ x.av = AV[(i + 1) % 4]; MST.push(x); });\n'
    + 'var AUTH = {\n' + Object.entries(AUTH).map(([k, v]) => ' ' + js(k) + ': ' + js(v)).join(',\n') + '\n};\n// /Round 11 author profiles\n');
  console.error(Object.keys(AUTH).length + ' writers, ' + stubs.length + ' stubs');
})();
