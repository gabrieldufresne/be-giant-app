"""Port begiant.ca articles from Sanity into bg-app-data.js story objects.
Usage: python3 -I docs/round-9/port-article.py out.js existing_ids.txt id:slug [id:slug ...]
existing_ids.txt: the ids already in BGD.ST and BGD.MST, space-separated (so stubs are not duplicated).
Reads the public Sanity API (no token). Paste the ST lines into ST2 and the MST lines into MST2 in bg-app-data.js.
Writes ST entries for the named stories, then stub entries for related-read targets not already in the app."""
import json, re, sys, urllib.parse, urllib.request, datetime

API = 'https://l3tzmu37.apicdn.sanity.io/v2023-01-01/data/query/production'
SAN = 'https://cdn.sanity.io/images/l3tzmu37/production/'
BG = 'https://www.begiant.ca/stories/'
TOPIC = {'Environment': 'Climate', 'Climate': 'Climate', 'Energy': 'Energy', 'Technology': 'Science & tech', 'Science': 'Science & tech',
         'Innovation': 'Science & tech', 'Health': 'Health', 'Housing': 'Housing', 'Economy': 'Economy', 'Business': 'Economy',
         'Small business': 'Small business', 'Cities': 'Cities', 'Education': 'Education', 'Transportation': 'Transportation',
         'Food': 'Food & farming', 'Agriculture': 'Food & farming', 'Arts': 'Arts & culture', 'Culture': 'Arts & culture', 'History': 'Arts & culture',
         'Wildfire': 'Wildfire', 'Wildfires': 'Wildfire', 'Immigration': 'Immigration', 'Indigenous': 'Indigenous futures', 'Work': 'Work',
         'Sovereignty': 'Economy', 'Defence': 'Science & tech', 'Nature': 'Climate', 'Wildlife': 'Climate', 'Oceans': 'Climate'}

def q(query):
    url = API + '?' + urllib.parse.urlencode({'query': query})
    with urllib.request.urlopen(url) as r:
        return json.load(r)['result']

def img(ref, w=1000):
    if not ref: return None
    m = re.match(r'image-(.+)-(\d+x\d+)-(\w+)$', ref)
    return SAN + m.group(1) + '-' + m.group(2) + '.' + m.group(3) + '?auto=format&fit=max&w=%d&q=70' % w

def date(s):
    d = datetime.datetime.fromisoformat(s.replace('Z', '+00:00'))
    return d.strftime('%B ') + str(d.day) + d.strftime(', %Y')

def yt(u):
    m = re.search(r'(?:shorts/|watch\?v=|youtu\.be/|embed/)([\w-]{6,})', u or '')
    return m.group(1) if m else None

LINK = '{_key, linkType, href, "art": article->{"s": slug.current, "p": primaryPillar->slug.current}, "top": topic->slug.current}'
IMGF = '"img": image.asset._ref, "cap": coalesce(caption, image.asset->description), "cr": coalesce(credit, image.asset->creditLine)'
REL = '{"s": slug.current}'
BODY = '''body[]{_type, style, listItem, "sp": children[]{text, marks}, "lk": markDefs[]%s, size,
  %s, "l": imageLeft.asset._ref, "r": imageRight.asset._ref, "lc": imageLeft.caption, "rc": imageRight.caption, "lcr": imageLeft.credit, "rcr": imageRight.credit,
  caption, credit, quote, attribution, style, heading, "rel": article->%s, "rels": articles[]->%s,
  "items": items[]{"img": asset._ref, "cap": coalesce(caption, asset->description), "cr": coalesce(credit, asset->creditLine)}, width,
  sourceType, url, "file": videoFile.asset->url, title, durationSeconds, "poster": posterImage.asset._ref,
  overline, body, "btn": button.buttonText, "btnHref": coalesce(button.link.href, button.link.article->slug.current),
  "bg": backgroundImage{"img": asset._ref, "cap": coalesce(caption, asset->description), "cr": coalesce(credit, asset->creditLine)}, textColor, gradientIntensity,
  "blocks": contentBlocks[]{eyebrow, "paras": body[_type=="block"]{style, "t": pt::text(@)}, textStyle, alignment, "img": image.asset._ref, "icap": coalesce(image.caption, image.asset->description), "icr": coalesce(image.credit, image.asset->creditLine), imagePosition},
  "nlHead": heading, "nlBody": body, "nlName": newsletter->title,
  "ann": annotations[]{label, description, dotX, dotY, dotXMobile, dotYMobile}, "aimg": image.asset._ref}''' % (LINK, IMGF, REL, REL)
HEAD = '''{"slug": slug.current, "pillarSlug": primaryPillar->slug.current, title, dek, publishedAt, readTime, "authors": authors[]->{name, "s": slug.current},
  "hero": heroImage.asset._ref, "heroCap": coalesce(heroImage.caption, heroImage.asset->description), "heroCredit": coalesce(heroImage.credit, heroImage.asset->creditLine),
  photosCredit, "topics": topics[]->title, "pillar": primaryPillar->title'''

def byline(authors):
    names = [a.get('name') or ' '.join(w.capitalize() for w in (a.get('s') or '').split('-')) for a in (authors or []) if a]
    names = [n for n in names if n.strip()]
    return names[0] if len(names) == 1 else ', '.join(names[:-1]) + ' & ' + names[-1] if names else 'Be Giant'

def tags(topics):
    out = []
    for t in topics or []:
        m = TOPIC.get(t)
        if m and m not in out: out.append(m)
    return out[:3] or ['Science & tech']

def head(a, sid):
    return {'id': sid, 'slug': a['pillarSlug'] + '/' + a['slug'], 't': a['title'].strip(), 'd': (a.get('dek') or '').strip(), 'img': img(a['hero']),
            'p': a.get('pillar') or 'Ideas', 's': '', 'tags': tags(a.get('topics')), 'a': byline(a.get('authors')),
            'date': date(a['publishedAt']), 'm': a.get('readTime') or 5}

def runs(b):
    links = {d['_key']: d for d in (b.get('lk') or [])}
    out = []
    for sp in b.get('sp') or []:
        t = sp.get('text') or ''
        if not t: continue
        marks = sp.get('marks') or []
        ln = next((links[m] for m in marks if m in links), None)
        href = None
        if ln:
            if ln.get('art'): href = BG + (ln['art'].get('p') or 'ideas') + '/' + ln['art']['s']
            elif ln.get('top'): href = BG + '?topic=' + ln['top']
            else: href = ln.get('href')
        if href or 'em' in marks:
            r = {'t': t}
            if href: r['href'] = href
            if 'em' in marks: r['em'] = True
            out.append(r)
        elif out and isinstance(out[-1], str): out[-1] += t
        else: out.append(t)
    return out

def body(blocks, ids):
    out, rels = [], []
    for b in blocks or []:
        ty = b['_type']
        if ty == 'block':
            r = runs(b)
            text = ''.join(x if isinstance(x, str) else x['t'] for x in r).strip()
            if not text: continue
            if b.get('listItem'):
                if out and isinstance(out[-1], dict) and out[-1].get('k') == 'ul': out[-1]['items'].append(text)
                else: out.append({'k': 'ul', 'items': [text]})
            elif (b.get('style') or 'normal') in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
                out.append({'k': 'h', 'text': re.sub(r'\s+', ' ', text)})
            elif all(isinstance(x, str) for x in r):
                out.append(text)
            else:
                r[0] = r[0].lstrip() if isinstance(r[0], str) else r[0]
                out.append({'k': 'p', 'r': r})
        elif ty == 'inlineImage' and b.get('img'):
            out.append({'k': 'img', 'size': b.get('size') or 'medium', 'img': img(b['img'], 1400 if b.get('size') == 'full' else 1000), 'cap': (b.get('cap') or '').strip(), 'credit': (b.get('cr') or '').strip()})
        elif ty == 'imagePair' and b.get('l') and b.get('r'):
            o = {'k': 'pair', 'l': img(b['l']), 'r': img(b['r']), 'cap': (b.get('caption') or '').strip(), 'credit': (b.get('credit') or '').strip()}
            for k in ('lc', 'rc', 'lcr', 'rcr'):
                if b.get(k): o[k] = b[k].strip()
            out.append(o)
        elif ty == 'imageGallery' and b.get('items'):
            out.append({'k': 'gallery', 'width': b.get('width') or 'default', 'cap': (b.get('caption') or '').strip(),
                        'items': [{'img': img(i['img'], 1400), 'cap': (i.get('cap') or '').strip(), 'credit': (i.get('cr') or '').strip()} for i in b['items'] if i.get('img')]})
        elif ty == 'videoEmbed':
            o = {'k': 'video', 'width': b.get('width') or 'fullBleed', 'title': (b.get('title') or '').strip(), 'cap': (b.get('caption') or '').strip()}
            if b.get('durationSeconds'): o['dur'] = b['durationSeconds']
            if b.get('poster'): o['poster'] = img(b['poster'])
            if b.get('sourceType') == 'upload' and b.get('file'): o['src'] = b['file']
            elif yt(b.get('url')): o['yt'] = yt(b['url'])
            elif b.get('url'): o['href'] = b['url']
            else: continue
            out.append(o)
        elif ty == 'pullQuote' and b.get('quote'):
            out.append({'isQ': True, 'text': b['quote'].strip(), 'by': (b.get('attribution') or '').strip()})
        elif ty == 'divider':
            out.append({'k': 'rule', 'style': b.get('style') or 'line'})
        elif ty == 'relatedRead' and b.get('rel'):
            sid = ids(b['rel']['s']); rels.append(b['rel']['s']); out.append({'k': 'rel', 'id': sid})
        elif ty == 'relatedStories':
            ss = [x['s'] for x in (b.get('rels') or []) if x]
            rels += ss; out.append({'k': 'rels', 'head': (b.get('heading') or 'Related stories').strip(), 'ids': [ids(s) for s in ss]})
        elif ty == 'newsletterCTA':
            o = {'k': 'news'}
            if b.get('nlHead'): o['head'] = b['nlHead'].strip()
            if isinstance(b.get('nlBody'), str) and b['nlBody'].strip(): o['line'] = b['nlBody'].strip()
            out.append(o)
        elif ty == 'annotatedImage' and b.get('aimg'):
            out.append({'k': 'annot', 'img': img(b['aimg'], 1200), 'cap': (b.get('caption') or '').strip(), 'credit': (b.get('credit') or '').strip(),
                        'pins': [{k: v for k, v in {'label': (a.get('label') or '').strip(), 'text': (a.get('description') or '').strip(),
                                  'x': a.get('dotXMobile') if a.get('dotXMobile') is not None else a.get('dotX'), 'y': a.get('dotYMobile') if a.get('dotYMobile') is not None else a.get('dotY')}.items() if v not in (None, '')}
                                 for a in (b.get('ann') or [])]})
        elif ty == 'callout':
            out.append({'k': 'callout', 'over': b.get('overline') or '', 'title': b.get('title') or '', 'body': b.get('body') if isinstance(b.get('body'), str) else '', 'btn': b.get('btn') or '', 'href': b.get('btnHref') or ''})
        elif ty == 'articleParallax' and b.get('bg'):
            out.append({'k': 'parallax', 'bg': img(b['bg']['img'], 1400), 'cap': (b['bg'].get('cap') or '').strip(), 'credit': (b['bg'].get('cr') or '').strip(),
                        'tone': b.get('textColor') or 'light', 'tint': b.get('gradientIntensity') or 'normal',
                        'blocks': [{k: v for k, v in {'eyebrow': (c.get('eyebrow') or '').strip(), 'paras': [p['t'].strip() for p in (c.get('paras') or []) if (p.get('t') or '').strip()],
                                    'style': c.get('textStyle') or 'display', 'img': img(c.get('img')), 'icap': (c.get('icap') or '').strip(), 'icr': (c.get('icr') or '').strip()}.items() if v} for c in (b.get('blocks') or [])]})
    return out, rels

def main():
    outp, existing = sys.argv[1], set(open(sys.argv[2]).read().split())
    pairs = [a.split(':', 1) for a in sys.argv[3:]]
    slug2id = {s: i for i, s in pairs}
    def ids(s):
        if s not in slug2id:
            base = re.sub(r'[^a-z]', '', s.split('-')[0])[:10] or 'story'
            i, n = base, 2
            while i in existing or i in slug2id.values(): i, n = base + str(n), n + 1
            slug2id[s] = i
        return slug2id[s]
    stories, stubs, want = [], [], []
    for sid, slug in pairs:
        a = q('*[_type=="article" && slug.current==%s][0]%s, %s}' % (json.dumps(slug), HEAD, BODY))
        st = head(a, sid)
        if a.get('heroCap'): st['cap'] = a['heroCap'].strip()
        if a.get('heroCredit'): st['credit'] = a['heroCredit'].strip()
        st['body'], rels = body(a.get('body'), ids)
        stories.append(st); want += [r for r in rels if r not in want]
    for s in want:
        sid = slug2id[s]
        if sid in existing or any(x['id'] == sid for x in stories): continue
        a = q('*[_type=="article" && slug.current==%s][0]%s, "p1": pt::text(body[_type=="block" && style=="normal" && length(pt::text(@)) > 40][0])}' % (json.dumps(s), HEAD))
        if not a: continue
        st = head(a, sid); st['body'] = [a['p1'].strip()] if a.get('p1') else []
        stubs.append(st)
    js = lambda o: json.dumps(o, ensure_ascii=True).replace('\\u200b', '').replace('\\ufeff', '')  # editors' zero-width spaces
    with open(outp, 'w') as f:
        f.write('// ST\n' + ',\n'.join(' ' + js(s) for s in stories) + '\n// MST\n' + ',\n'.join(' ' + js(s) for s in stubs) + '\n')
    for s in stories: print(s['id'], s['t'], len(s['body']), 'blocks', sorted({b.get('k') or ('q' if isinstance(b, dict) else 'p') for b in s['body'] if isinstance(b, dict)}))
    for s in stubs: print('stub', s['id'], s['t'])

main()
