// Plain-JS build of ios-frame.jsx (IOSDevice, IOSStatusBar, IOSKeyboard) so it loads as a global script.
(function(){
  function h(){ return window.React.createElement.apply(null, arguments); }
  function IOSStatusBar(p){
    var c = p.dark ? '#fff' : '#000', time = p.time || '9:41';
    return h('div', {style:{display:'flex', gap:154, alignItems:'center', justifyContent:'center', padding:'21px 24px 19px', boxSizing:'border-box', position:'relative', zIndex:20, width:'100%'}},
      h('div', {style:{flex:1, height:22, display:'flex', alignItems:'center', justifyContent:'center', paddingTop:1.5}},
        h('span', {style:{fontFamily:'-apple-system, "SF Pro", system-ui', fontWeight:590, fontSize:17, lineHeight:'22px', color:c}}, time)),
      h('div', {style:{flex:1, height:22, display:'flex', alignItems:'center', justifyContent:'center', gap:7, paddingTop:1, paddingRight:1}},
        h('svg', {width:19, height:12, viewBox:'0 0 19 12'},
          h('rect', {x:0, y:7.5, width:3.2, height:4.5, rx:0.7, fill:c}), h('rect', {x:4.8, y:5, width:3.2, height:7, rx:0.7, fill:c}),
          h('rect', {x:9.6, y:2.5, width:3.2, height:9.5, rx:0.7, fill:c}), h('rect', {x:14.4, y:0, width:3.2, height:12, rx:0.7, fill:c})),
        h('svg', {width:17, height:12, viewBox:'0 0 17 12'},
          h('path', {d:'M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z', fill:c}),
          h('path', {d:'M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z', fill:c}),
          h('circle', {cx:8.5, cy:10.5, r:1.5, fill:c})),
        h('svg', {width:27, height:13, viewBox:'0 0 27 13'},
          h('rect', {x:0.5, y:0.5, width:23, height:12, rx:3.5, stroke:c, strokeOpacity:0.35, fill:'none'}),
          h('rect', {x:2, y:2, width:20, height:9, rx:2, fill:c}),
          h('path', {d:'M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z', fill:c, fillOpacity:0.4}))));
  }
  function IOSKeyboard(p){
    var dark = !!p.dark, glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959', sugg = dark ? 'rgba(255,255,255,0.6)' : '#333', keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';
    var icons = {
      shift: h('svg', {width:19, height:17, viewBox:'0 0 19 17'}, h('path', {d:'M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z', fill:glyph})),
      del: h('svg', {width:23, height:17, viewBox:'0 0 23 17'}, h('path', {d:'M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z', fill:'none', stroke:glyph, strokeWidth:1.6, strokeLinejoin:'round'}), h('path', {d:'M10 5l7 7M17 5l-7 7', stroke:glyph, strokeWidth:1.6, strokeLinecap:'round'})),
      ret: h('svg', {width:20, height:14, viewBox:'0 0 20 14'}, h('path', {d:'M18 1v6H4m0 0l4-4M4 7l4 4', fill:'none', stroke:'#fff', strokeWidth:1.8, strokeLinecap:'round', strokeLinejoin:'round'}))
    };
    function key(content, o){ o = o || {}; return h('div', {key:o.k, style:{height:42, borderRadius:8.5, flex:o.flex ? 1 : undefined, width:o.w, minWidth:0, background:o.ret ? '#08f' : keyBg, boxShadow:'0 1px 0 rgba(0,0,0,0.075)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'-apple-system, "SF Compact", system-ui', fontSize:o.fs || 25, fontWeight:458, color:o.ret ? '#fff' : glyph}}, content); }
    function row(keys, pad){ return h('div', {style:{display:'flex', gap:6.5, justifyContent:'center', padding:'0 ' + (pad || 0) + 'px'}}, keys.map(function(l){ return key(l, {flex:true, k:l}); })); }
    var words = ['"The"', 'the', 'to'], bar = [];
    words.forEach(function(w, i){ if (i > 0) bar.push(h('div', {key:'s' + i, style:{width:1, height:25, background:'#ccc', opacity:0.3}})); bar.push(h('div', {key:'w' + i, style:{flex:1, textAlign:'center', fontFamily:'-apple-system, system-ui', fontSize:17, color:sugg, letterSpacing:-0.43, lineHeight:'22px'}}, w)); });
    return h('div', {style:{position:'relative', zIndex:15, borderRadius:27, overflow:'hidden', padding:'11px 0 2px', display:'flex', flexDirection:'column', alignItems:'center', boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'}},
      h('div', {style:{position:'absolute', inset:0, borderRadius:27, backdropFilter:'blur(12px) saturate(180%)', WebkitBackdropFilter:'blur(12px) saturate(180%)', background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'}}),
      h('div', {style:{position:'absolute', inset:0, borderRadius:27, boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)', border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)', pointerEvents:'none'}}),
      h('div', {style:{display:'flex', gap:20, alignItems:'center', padding:'8px 22px 13px', width:'100%', boxSizing:'border-box', position:'relative'}}, bar),
      h('div', {style:{display:'flex', flexDirection:'column', gap:13, padding:'0 6.5px', width:'100%', boxSizing:'border-box', position:'relative'}},
        row(['q','w','e','r','t','y','u','i','o','p']),
        row(['a','s','d','f','g','h','j','k','l'], 20),
        h('div', {style:{display:'flex', gap:14.25, alignItems:'center'}}, key(icons.shift, {w:45, k:'shift'}), h('div', {style:{display:'flex', gap:6.5, flex:1}}, ['z','x','c','v','b','n','m'].map(function(l){ return key(l, {flex:true, k:l}); })), key(icons.del, {w:45, k:'del'})),
        h('div', {style:{display:'flex', gap:6, alignItems:'center'}}, key('ABC', {w:92.25, fs:18, k:'abc'}), key('', {flex:true, k:'space'}), key(icons.ret, {w:92.25, ret:true, k:'ret'}))),
      h('div', {style:{height:56, width:'100%', position:'relative'}}));
  }
  function IOSDevice(p){
    var width = p.width || 402, height = p.height || 874, dark = !!p.dark;
    if (p.bare) return h('div', {'data-om-starter':'ios-frame', style:{width:width, height:height, position:'relative', overflow:'hidden', background: dark ? '#000' : '#fff', WebkitFontSmoothing:'antialiased'}}, p.children);
    return h('div', {'data-om-starter':'ios-frame', style:{width:width, height:height, borderRadius:48, overflow:'hidden', position:'relative', background: dark ? '#000' : '#F2F2F7', boxShadow:'0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)', fontFamily:'-apple-system, system-ui, sans-serif', WebkitFontSmoothing:'antialiased'}},
      h('div', {style:{position:'absolute', top:11, left:'50%', transform:'translateX(-50%)', width:126, height:37, borderRadius:24, background:'#000', zIndex:50}}),
      h('div', {style:{position:'absolute', top:0, left:0, right:0, zIndex:10}}, h(IOSStatusBar, {dark:dark})),
      h('div', {style:{height:'100%', display:'flex', flexDirection:'column'}},
        h('div', {style:{flex:1, overflow:'auto'}}, p.children),
        p.keyboard ? h(IOSKeyboard, {dark:dark}) : null),
      h('div', {style:{position:'absolute', bottom:0, left:0, right:0, zIndex:60, height:34, display:'flex', justifyContent:'center', alignItems:'flex-end', paddingBottom:8, pointerEvents:'none'}},
        h('div', {style:{width:139, height:5, borderRadius:100, background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'}})));
  }
  window.IOSDevice = IOSDevice; window.IOSStatusBar = IOSStatusBar; window.IOSKeyboard = IOSKeyboard;
})();
