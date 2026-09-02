const pptx = require('pptxgenjs');
const P = new pptx();
P.layout = 'LAYOUT_WIDE';               // 13.333 x 7.5
P.author = 'Product Director candidate, Core Mexico';
P.title  = 'Where Income Lands - Core Mexico Business Case';

const PURPLE='820AD1', PURPLE_LT='B65CE8', PURPLE_PALE='F3E8FD';
const INK='19102A', INK_SOFT='2A1D3D';
const BODY='2F2740', MUTED='6E6484', LINE='E2DCEC';
const AMBER='B45309', GREEN='0E7A54', RED='B01030';
const W=13.333, H=7.5, M=0.62;
const HEAD='Arial', TEXT='Calibri';

const S=()=>P.addSlide();
function dark(s){ s.background={color:INK}; }
function light(s){ s.background={color:'FFFFFF'}; }

// eyebrow + title block
function head(s,eyebrow,title,onDark,y){
  y=y===undefined?M:y;
  s.addShape(P.ShapeType.ellipse,{x:M,y:y+0.07,w:0.11,h:0.11,fill:{color:onDark?PURPLE_LT:PURPLE}});
  s.addText(eyebrow.toUpperCase(),{x:M+0.22,y:y-0.02,w:11,h:0.26,isTextBox:true,margin:0,
    fontFace:HEAD,fontSize:10.5,bold:true,charSpacing:1.6,color:onDark?PURPLE_LT:PURPLE});
  s.addText(title,{x:M,y:y+0.32,w:W-2*M,h:0.85,isTextBox:true,margin:0,
    fontFace:HEAD,fontSize:31,bold:true,color:onDark?'FFFFFF':INK,lineSpacing:34});
}
// a soft card
function card(s,x,y,w,h,fill){
  s.addShape(P.ShapeType.roundRect,{x,y,w,h,rectRadius:0.06,
    fill:{color:fill||'FAF8FD'},line:{color:LINE,width:1}});
}
function stat(s,x,y,w,val,lab,sub,col){
  s.addText(val,{x,y,w,h:0.62,isTextBox:true,margin:0,fontFace:HEAD,fontSize:34,bold:true,color:col||PURPLE});
  s.addText(lab,{x,y:y+0.62,w,h:0.26,isTextBox:true,margin:0,fontFace:HEAD,fontSize:10,bold:true,charSpacing:1.2,color:MUTED});
  if(sub) s.addText(sub,{x,y:y+0.88,w,h:0.5,isTextBox:true,margin:0,fontFace:TEXT,fontSize:11,color:BODY});
}
function bullets(s,x,y,w,h,items,size,col){
  s.addText(items.map((t,i)=>({text:t,options:{bullet:true,breakLine:i<items.length-1}})),
    {x,y,w,h,isTextBox:true,margin:0,fontFace:TEXT,fontSize:size||13.5,color:col||BODY,paraSpaceAfter:7,lineSpacing:18});
}
function foot(s,t){
  s.addText(t,{x:M,y:H-0.52,w:W-2*M,h:0.3,isTextBox:true,margin:0,fontFace:TEXT,fontSize:9.5,color:MUTED,italic:true});
}

/* ---------- 1 TITLE ---------- */
{ const s=S(); dark(s);
  s.addShape(P.ShapeType.ellipse,{x:M,y:2.42,w:0.15,h:0.15,fill:{color:PURPLE_LT}});
  s.addText('BUSINESS CASE  ·  PRODUCT DIRECTOR, CORE MÉXICO',{x:M+0.28,y:2.32,w:10,h:0.3,isTextBox:true,margin:0,
    fontFace:HEAD,fontSize:11,bold:true,charSpacing:2,color:PURPLE_LT});
  s.addText('Where income lands',{x:M,y:2.78,w:11.4,h:1.25,isTextBox:true,margin:0,
    fontFace:HEAD,fontSize:60,bold:true,color:'FFFFFF'});
  s.addText('Nu México is not deposit-constrained. It is constrained by how much income it can see.',
    {x:M,y:4.08,w:10.4,h:0.85,isTextBox:true,margin:0,fontFace:TEXT,fontSize:19,color:'D8CEE8',lineSpacing:26});
  s.addText([{text:'[Your name]',options:{bold:true,color:'FFFFFF',breakLine:true}},
             {text:'Prepared for Diego Sierra, Oscar Vargas, Amanda Legge, Ana Acosta, and global product',options:{breakLine:true}},
             {text:'4 September 2026'}],
    {x:M,y:5.5,w:9,h:1,isTextBox:true,margin:0,fontFace:TEXT,fontSize:12.5,color:'A599BC',lineSpacing:17});
  s.addNotes('Open: I have built a working pricing model and two clickable product flows rather than only slides. I will demo both, and every assumption in the model is a slider you can move while I am talking.');
}

/* ---------- 2 REFRAME ---------- */
{ const s=S(); dark(s);
  head(s,'Context','We are already past the starting line',true);
  const yy=2.05;
  const items=[['10 JUL 2026','CNBV and SHCP authorise the licence'],
               ['6 AUG 2026','Nu México begins operating as a full bank'],
               ['2 SEP 2026','27 days in. Mercado Pago and Klar still queuing']];
  items.forEach((it,i)=>{
    const x=M+i*4.05;
    s.addShape(P.ShapeType.roundRect,{x,y:yy,w:3.75,h:1.42,rectRadius:0.06,fill:{color:INK_SOFT},line:{color:'473259',width:1}});
    s.addText(it[0],{x:x+0.28,y:yy+0.2,w:3.2,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:11.5,bold:true,charSpacing:1.2,color:PURPLE_LT});
    s.addText(it[1],{x:x+0.28,y:yy+0.55,w:3.25,h:0.75,isTextBox:true,margin:0,fontFace:TEXT,fontSize:13.5,color:'E4DCEF',lineSpacing:18});
  });
  s.addText('The brief asks how I would sequence the transition into a licensed bank. From the public record, that transition is done.',
    {x:M,y:3.72,w:11.9,h:0.52,isTextBox:true,margin:0,fontFace:TEXT,fontSize:14.5,color:'BFB3D2',lineSpacing:19});
  s.addText('So the question is not how to prepare for a licence.\nIt is what to do with a window that is already closing.',
    {x:M,y:4.28,w:11.5,h:1.0,isTextBox:true,margin:0,fontFace:HEAD,fontSize:25,bold:true,color:'FFFFFF',lineSpacing:33});
  s.addText([{text:'What the licence uniquely unlocks:  ',options:{bold:true,color:PURPLE_LT}},
             {text:'payroll hosting  ·  IPAB insurance, up from ~US$12.6K to ~US$201K per person  ·  payroll portability  ·  higher deposit limits  ·  investments  ·  higher-value lending'}],
    {x:M,y:5.62,w:11.9,h:0.6,isTextBox:true,margin:0,fontFace:TEXT,fontSize:13,color:'C9BEDC',lineSpacing:18});
  s.addNotes('Sixty seconds, warmly, then move. This is the credibility opener, not a gotcha. Stori has been a bank since 2023, Revolut since 2024. Every strategy for preparing for a licence is now a strategy for spending an advantage before it is competed away.');
}

/* ---------- 3 DIAGNOSIS ---------- */
{ const s=S(); light(s);
  head(s,'Diagnosis','The number that should be running the roadmap',false);
  const yy=1.92;
  stat(s,M,yy,2.5,'16M','CUSTOMERS','~16.5% of Mexican adults');
  stat(s,M+2.9,yy,2.5,'US$5.7B','DEPOSITS','and deliberately shrinking');
  stat(s,M+5.8,yy,2.5,'35%','LOAN-TO-DEPOSIT','two thirds sits in CETES');
  stat(s,M+8.7,yy,2.6,'Q1 2026','BROKE EVEN','~2 years faster than Brazil',GREEN);

  card(s,M,3.62,6.55,2.45,'FAF8FD');
  s.addText('The marginal peso of deposit',{x:M+0.3,y:3.82,w:6,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:14,bold:true,color:INK});
  s.addText([{text:'At 35% LDR    ',options:{color:MUTED,breakLine:true}},
             {text:'0.35 × 25% + 0.65 × 6.49%  =  13.0% asset yield',options:{color:BODY,breakLine:true}},
             {text:'less 11.5% cost of funds   =  ',options:{color:BODY}},
             {text:'1.5pp',options:{bold:true,color:RED,fontSize:16}}],
    {x:M+0.3,y:4.2,w:6,h:1,isTextBox:true,margin:0,fontFace:TEXT,fontSize:13,lineSpacing:19});
  s.addText([{text:'At 60% LDR the same peso earns  ',options:{color:BODY}},
             {text:'6.1pp',options:{bold:true,color:GREEN,fontSize:16}}],
    {x:M+0.3,y:5.42,w:6,h:0.4,isTextBox:true,margin:0,fontFace:TEXT,fontSize:13});

  s.addChart(P.ChartType.bar,[{name:'Marginal spread',labels:['Today · 35% LDR','With income visibility · 60% LDR'],values:[1.5,6.1]}],
    {x:7.5,y:3.55,w:5.2,h:2.6,barDir:'col',chartColors:[RED,PURPLE],showTitle:true,title:'Marginal spread on the next peso (pp)',
     titleFontFace:HEAD,titleFontSize:12,titleColor:INK,showLegend:false,showValue:true,dataLabelPosition:'outEnd',
     dataLabelFontFace:HEAD,dataLabelFontSize:13,dataLabelColor:INK,dataLabelFormatCode:'0.0"pp"',
     catAxisLabelColor:MUTED,catAxisLabelFontSize:10,catAxisLabelFontFace:TEXT,valAxisHidden:true,
     valGridLine:{color:LINE,size:1},catGridLine:{style:'none'},barGapWidthPct:120});

  s.addText('The peso is not unprofitable. It earns about a quarter of what it should — a deployment problem, not a pricing problem.',
    {x:M,y:6.32,w:11.9,h:0.55,isTextBox:true,margin:0,fontFace:HEAD,fontSize:15,bold:true,color:INK,lineSpacing:20});
  foot(s,'Q2 2026 results. Net credit yield of 25% is my assumption, not company data — it is a slider in the model and the conclusion holds from 15% to 35%.');
  s.addNotes('If challenged on 25%, open the simulator here rather than defending it verbally. Say the word assumption out loud.');
}

/* ---------- 4 VALUE PROPOSITION ---------- */
{ const s=S(); light(s);
  head(s,'2.1.1  Core value proposition','The account your money arrives in',false);
  s.addText('“La cuenta donde llega tu dinero.”',{x:M,y:1.95,w:11.9,h:0.6,isTextBox:true,margin:0,
    fontFace:HEAD,fontSize:27,bold:true,italic:true,color:PURPLE});
  s.addText('Not the account it sits in.',{x:M,y:2.55,w:11.9,h:0.35,isTextBox:true,margin:0,fontFace:TEXT,fontSize:15,color:MUTED});

  const cols=[['ANCHOR','Income lands here','Nómina · remesas · plataformas · recurring deposits','fixes acquisition'],
              ['ENGINE','Relationship-priced yield','Quoted as a spread over CETES, premium attached to income landing','fixes cost of funds'],
              ['MULTIPLIER','Credit and protection','Sized on income we can actually see, not on a thin-file score','fixes the 35% LDR']];
  cols.forEach((c,i)=>{
    const x=M+i*4.05;
    card(s,x,3.12,3.75,2.3,i===0?PURPLE_PALE:'FAF8FD');
    s.addText(c[0],{x:x+0.28,y:3.3,w:3.2,h:0.26,isTextBox:true,margin:0,fontFace:HEAD,fontSize:10,bold:true,charSpacing:1.5,color:PURPLE});
    s.addText(c[1],{x:x+0.28,y:3.6,w:3.25,h:0.34,isTextBox:true,margin:0,fontFace:HEAD,fontSize:15.5,bold:true,color:INK});
    s.addText(c[2],{x:x+0.28,y:4.0,w:3.25,h:0.9,isTextBox:true,margin:0,fontFace:TEXT,fontSize:12.5,color:BODY,lineSpacing:17});
    s.addText(c[3],{x:x+0.28,y:4.98,w:3.25,h:0.28,isTextBox:true,margin:0,fontFace:TEXT,fontSize:11,italic:true,color:AMBER});
  });
  s.addText([{text:'Why not “the best rate in Mexico”?  ',options:{bold:true,color:INK}},
    {text:'Because it is matchable in a week by any licensed competitor, and it selects for exactly the customers we least want. Income landing is a habit. A rate is a price. Habits are defensible.'}],
    {x:M,y:5.75,w:11.9,h:0.7,isTextBox:true,margin:0,fontFace:TEXT,fontSize:14,color:BODY,lineSpacing:19});
}

/* ---------- 5 BUNDLES ---------- */
{ const s=S(); light(s);
  head(s,'2.1.1  Mass-market bundles','Two tiers, earned by behaviour — not by balance',false);
  const rows=[['How you qualify','Any customer','Recurring income lands at Nu — documented or observed'],
              ['Yield','CETES + 1.5%','CETES + 4.0%, up to a balance cap'],
              ['Credit','Score-based, thin','Line sized on observed income'],
              ['Protection','Optional','Micro-cover included'],
              ['What it costs us','Low','Lower per peso of balance']];
  P.defineSlideMaster||0;
  s.addTable([[{text:'',options:{fill:{color:'FFFFFF'}}},
               {text:'Nu Base',options:{bold:true,fontSize:15,color:INK,fontFace:HEAD}},
               {text:'Nu Nómina',options:{bold:true,fontSize:15,color:PURPLE,fontFace:HEAD}}]].concat(
      rows.map(r=>[{text:r[0],options:{bold:true,color:MUTED,fontSize:11.5}},
                   {text:r[1],options:{color:BODY,fontSize:12.5}},
                   {text:r[2],options:{color:INK,fontSize:12.5,bold:true}}])),
    {x:M,y:1.95,w:7.1,colW:[1.9,2.1,3.1],border:{type:'solid',color:LINE,pt:1},
     fontFace:TEXT,rowH:0.44,valign:'middle',margin:0.09,fill:{color:'FFFFFF'}});

  card(s,8.05,1.95,4.68,4.35,'FAF8FD');
  s.addText('Four design decisions',{x:8.33,y:2.15,w:4.2,h:0.32,isTextBox:true,margin:0,fontFace:HEAD,fontSize:15,bold:true,color:INK});
  const dd=[['Two tiers, not five.','Mass market punishes complexity. Every tier is a support call.'],
            ['The premium is a behaviour, not a balance.','We pay up only for money that arrives with data behind it.'],
            ['Cap the premium balance.','We are buying the relationship, not the treasury balance.'],
            ['One tier, two doors.','Documented and observed income reach identical terms.']];
  dd.forEach((d,i)=>{
    const y=2.6+i*0.9;
    s.addText((i+1).toString(),{x:8.33,y,w:0.3,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:13,bold:true,color:PURPLE});
    s.addText(d[0],{x:8.68,y:y-0.02,w:3.9,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:12.5,bold:true,color:INK});
    s.addText(d[1],{x:8.68,y:y+0.28,w:3.9,h:0.5,isTextBox:true,margin:0,fontFace:TEXT,fontSize:11.5,color:BODY,lineSpacing:15});
  });
  foot(s,'“One tier, two doors” is the inclusion argument and the fairness argument at once: if the informal tier is not a lower tier, there is no disparate outcome to explain.');
}

/* ---------- 6 SEQUENCING ---------- */
{ const s=S(); light(s);
  head(s,'2.1.2  Strategy and sequencing','24 months, ordered by what expires first',false);
  s.addText([{text:'Ordering principle:  ',options:{bold:true,color:PURPLE}},
    {text:'the only thing that expires is licence exclusivity. Anything a licensed competitor could also do goes later. Anything only we can do right now goes first.'}],
    {x:M,y:1.88,w:11.9,h:0.55,isTextBox:true,margin:0,fontFace:TEXT,fontSize:14,color:BODY,lineSpacing:19});
  const hz=[['H1 · MONTHS 0–6','Prove the funding thesis',
      ['Re-quote yield as a spread over CETES — no headline cut','Ship portability to the cohort already visible in our data','Instrument β by segment via a geographic holdout'],
      'Metric: completed first salary landings — not sign-ups'],
    ['H2 · MONTHS 7–12','Scale the anchor before the window closes',
      ['Track B: consent flow, income estimator, same tier','Credit lines sized on observed income','Bundle GA and protection attach'],
      'Metric: LDR, and cost of funds against TIIE'],
    ['H3 · MONTHS 13–24','Convert the anchor into ARPAC',
      ['Investments — newly licensable','Crédito de nómina and higher-value lending','Employer-side offer, only now'],
      'Leading with an HR sales motion is how a challenger loses this market']];
  hz.forEach((h,i)=>{
    const x=M+i*4.05;
    card(s,x,2.5,3.75,3.55,i===0?PURPLE_PALE:'FAF8FD');
    s.addText(h[0],{x:x+0.28,y:2.7,w:3.3,h:0.26,isTextBox:true,margin:0,fontFace:HEAD,fontSize:10,bold:true,charSpacing:1.3,color:i===0?PURPLE:MUTED});
    s.addText(h[1],{x:x+0.28,y:3.0,w:3.25,h:0.62,isTextBox:true,margin:0,fontFace:HEAD,fontSize:15,bold:true,color:INK,lineSpacing:20});
    bullets(s,x+0.28,3.72,3.25,1.6,h[2],12);
    s.addText(h[3],{x:x+0.28,y:5.42,w:3.25,h:0.5,isTextBox:true,margin:0,fontFace:TEXT,fontSize:11,italic:true,color:AMBER,lineSpacing:14});
  });
  foot(s,'Employer-side distribution is deliberately last: the incumbents have sold to HR for thirty years, and consumer pull is the only motion where a challenger starts ahead.');
}

/* ---------- 7 PRICING ---------- */
{ const s=S(); light(s);
  head(s,'2.1.3  Pricing and yield','Four moves, and the data behind each',false);
  const mv=[['Quote a spread, not a number.','“CETES + 4.00%”, not “10.49%”. As Banxico cuts, funding cost falls automatically and there is never a “Nu cut your rate” headline — because we did not.'],
    ['Price the relationship, not the balance.','The premium requires income landing and is capped. We pay up only for money that brings data and stickiness with it.'],
    ['Segment β. Never blend it.','The base is two populations: brand-acquired at β near zero, and rate-shoppers. A blended β makes every cut look safe until it suddenly is not.'],
    ['Retire “deposit growth” as a goal.','At 35% LDR it is a cost line wearing a growth metric’s clothes. Replace with deployable deposits and cost of funds against TIIE.']];
  mv.forEach((m,i)=>{
    const x=M+(i%2)*4.3, y=1.95+Math.floor(i/2)*1.62;
    s.addShape(P.ShapeType.ellipse,{x,y:y+0.02,w:0.34,h:0.34,fill:{color:PURPLE_PALE}});
    s.addText((i+1).toString(),{x,y:y+0.06,w:0.34,h:0.26,isTextBox:true,margin:0,align:'center',fontFace:HEAD,fontSize:13,bold:true,color:PURPLE});
    s.addText(m[0],{x:x+0.46,y,w:3.65,h:0.44,isTextBox:true,margin:0,fontFace:HEAD,fontSize:13.5,bold:true,color:INK,lineSpacing:17});
    s.addText(m[1],{x:x+0.46,y:y+0.46,w:3.62,h:1.05,isTextBox:true,margin:0,fontFace:TEXT,fontSize:11.5,color:BODY,lineSpacing:15});
  });
  card(s,9.0,1.95,3.73,4.3,'FAF8FD');
  s.addText('Data I would ask for in week one',{x:9.28,y:2.15,w:3.2,h:0.6,isTextBox:true,margin:0,fontFace:HEAD,fontSize:14,bold:true,color:INK,lineSpacing:19});
  bullets(s,9.28,2.78,3.2,3.2,['β by segment, from a geographic rate holdout — not a blended number',
    'LTV by acquisition source: yield-acquired vs. income-acquired',
    'Balance concentration — does the premium cap even bind?',
    'Attrition elasticity vs. the competitor gap, not vs. our own rate',
    'Marginal risk-adjusted credit yield — is deployment actually accretive?'],11.5);
  s.addText([{text:'The trade-off, said out loud:  ',options:{bold:true,color:INK}},
    {text:'the rate is our biggest acquisition asset and our biggest cost line at the same time. That is exactly why I would not cut the headline — I would change what it is quoted against, and what it is attached to.'}],
    {x:M,y:5.35,w:8.1,h:0.9,isTextBox:true,margin:0,fontFace:TEXT,fontSize:13,color:BODY,lineSpacing:18});
}

/* ---------- 8 DEMO ---------- */
{ const s=S(); dark(s);
  head(s,'2.1.3  Live','The pricing decision, not the pricing principle',true);
  s.addText('“…including the actual trade-offs and data you would use to make a pricing decision, not just the strategic principles behind it.”',
    {x:M,y:1.95,w:11.9,h:0.6,isTextBox:true,margin:0,fontFace:TEXT,fontSize:14,italic:true,color:'A08FB8'});
  const dm=[['1','Today','1.6pp on the next peso. The business as the public numbers describe it.'],
            ['2','Cut the rate only','Spread improves — and we lose about a tenth of the balances. It works once.'],
            ['3','24-month plan','Same rate. Never touched the yield slider. LDR to ~56%, spread to ~6pp.']];
  dm.forEach((d,i)=>{
    const y=2.72+i*1.05;
    s.addShape(P.ShapeType.ellipse,{x:M,y:y+0.04,w:0.4,h:0.4,fill:{color:PURPLE}});
    s.addText(d[0],{x:M,y:y+0.1,w:0.4,h:0.3,isTextBox:true,margin:0,align:'center',fontFace:HEAD,fontSize:15,bold:true,color:'FFFFFF'});
    s.addText(d[1],{x:M+0.6,y,w:2.7,h:0.34,isTextBox:true,margin:0,fontFace:HEAD,fontSize:16,bold:true,color:'FFFFFF'});
    s.addText(d[2],{x:M+3.4,y:y+0.03,w:5.4,h:0.7,isTextBox:true,margin:0,fontFace:TEXT,fontSize:13,color:'C9BEDC',lineSpacing:17});
  });
  card(s,9.3,2.6,3.43,2.9,INK_SOFT);
  s.addShape(P.ShapeType.roundRect,{x:9.3,y:2.6,w:3.43,h:2.9,rectRadius:0.06,fill:{color:INK_SOFT},line:{color:'54397A',width:1}});
  s.addText('Then invite the attack',{x:9.58,y:2.8,w:2.9,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:13,bold:true,color:PURPLE_LT});
  s.addText('“Move any slider. The one I would move first is β — push it to 6 and the rate-cut story stops working. That asymmetry is the argument: a rate cut is a one-time harvest with rising risk. Income visibility compounds.”',
    {x:9.58,y:3.18,w:2.9,h:2.1,isTextBox:true,margin:0,fontFace:TEXT,fontSize:12,color:'D6CCE6',lineSpacing:16.5});
  s.addText('Interactive model and both product flows:  claude.ai/code/artifact/93da0992-7c28-4c92-81cd-f67f16a3cfaa',
    {x:M,y:6.15,w:11.9,h:0.35,isTextBox:true,margin:0,fontFace:TEXT,fontSize:12,color:PURPLE_LT});
  s.addNotes('Forty seconds of clicking, then talk over it. Do not narrate the UI — narrate the number that changes.');
}

/* ---------- 9 TRACK A ---------- */
{ const s=S(); light(s);
  head(s,'2.1.4  Product · Track A','Trae tu nómina — the wedge only a licensed bank has',false);
  const yy=1.95;
  stat(s,M,yy,2.7,'22.76M','FORMAL JOBS (IMSS)','record, July 2026');
  stat(s,M+3.05,yy,2.7,'~36%','OF ADULTS HAVE ONE','a payroll account at all');
  stat(s,M+6.1,yy,2.7,'~90%','OF THOSE AT BIG BANKS','the entire incumbent moat');
  stat(s,M+9.15,yy,2.9,'11 days','TO PORT ONE','free, by law, worker-initiated',GREEN);

  card(s,M,3.62,6.2,2.5,PURPLE_PALE);
  s.addText('The wedge',{x:M+0.3,y:3.82,w:5.5,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:15,bold:true,color:PURPLE});
  s.addText('Portabilidad de nómina is the worker’s legal right. Banks cannot charge for it and cannot refuse it. No employer sale is required.\n\nThe incumbent moat is a corporate contract signed years ago. Portability makes it irrelevant — the decision belongs to the worker.',
    {x:M+0.3,y:4.18,w:5.6,h:1.8,isTextBox:true,margin:0,fontFace:TEXT,fontSize:13,color:BODY,lineSpacing:18});

  card(s,7.1,3.62,5.63,2.5,'FAF8FD');
  s.addText('Three things I would hold the team to',{x:7.38,y:3.82,w:5.1,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:15,bold:true,color:INK});
  bullets(s,7.38,4.2,5.1,1.8,['Sell the credit line, not the rate — the rate attracts the deposits we least want',
    'Measure completed first salary landings, never requests',
    'The 11-day gap is where the funnel leaks: naming a date is the retention mechanic, not polish'],12.5);
  foot(s,'This is the one play that stops working the day Mercado Pago is licensed — which is what makes the next twelve months the whole strategy.');
}

/* ---------- 10 TRACK B ---------- */
{ const s=S(); light(s);
  head(s,'2.1.4  Product · Track B','Ingreso observado — same tier, different proof',false);
  s.addText('55.1%',{x:M,y:1.9,w:2.6,h:0.85,isTextBox:true,margin:0,fontFace:HEAD,fontSize:48,bold:true,color:PURPLE});
  s.addText('of Mexico’s workforce is informal — 33.1 million people with no payslip to port. A formal-only strategy serves 44.6% of workers, in a country where only 37.3% of adults can access formal credit at all.',
    {x:M+2.9,y:1.95,w:9.8,h:0.85,isTextBox:true,margin:0,fontFace:TEXT,fontSize:14.5,color:BODY,lineSpacing:20});

  card(s,M,3.05,3.9,2.55,'FAF8FD');
  s.addText('The signals',{x:M+0.28,y:3.24,w:3.3,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:14,bold:true,color:INK});
  bullets(s,M+0.28,3.6,3.35,1.85,['Inbound rhythm and regularity','Remittances — US$30.76B in H1 2026','Platform and gig payouts','Cash deposit patterns'],12);

  card(s,4.68,3.05,3.9,2.55,'FAF8FD');
  s.addText('Never used — by policy',{x:4.96,y:3.24,w:3.3,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:14,bold:true,color:RED});
  bullets(s,4.96,3.6,3.35,1.28,['Device model','Location trails','Contacts and messages','Social graph'],12);
  s.addText('Every one predicts repayment. Every one is a proxy for class, region and ethnicity.',
    {x:4.96,y:4.98,w:3.35,h:0.55,isTextBox:true,margin:0,fontFace:TEXT,fontSize:10.5,italic:true,color:MUTED,lineSpacing:14});

  card(s,8.83,3.05,3.9,2.55,PURPLE_PALE);
  s.addText('The move nobody else makes',{x:9.11,y:3.24,w:3.3,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:14,bold:true,color:PURPLE});
  s.addText('Show the customer our income estimate — with the reasoning and an appeal path — before we price them on it.\n\nContestability is what makes automated decisioning defensible, to the customer and to a supervisor.',
    {x:9.11,y:3.6,w:3.35,h:1.9,isTextBox:true,margin:0,fontFace:TEXT,fontSize:12,color:BODY,lineSpacing:16.5});
  foot(s,'I have built this underwriting spine before, at Tala, for exactly this customer. The appeal path consistently produced better data than any feature we added.');
}

/* ---------- 11 RESPONSIBLE AI ---------- */
{ const s=S(); dark(s);
  head(s,'2.3  Responsible AI and personalisation','One rule, then the guardrails',true);
  s.addText('Personalisation may only move a price in the customer’s favour.',
    {x:M,y:2.02,w:12.1,h:1.2,isTextBox:true,margin:0,fontFace:HEAD,fontSize:30,bold:true,color:'FFFFFF',lineSpacing:38});
  s.addText('AI decides eligibility, limits, timing and experience. It never decides that this customer will tolerate a worse price.',
    {x:M,y:3.24,w:11.9,h:0.5,isTextBox:true,margin:0,fontFace:TEXT,fontSize:15,color:PURPLE_LT,lineSpacing:20});
  s.addText('The risk in mass-market pricing AI is not a biased model. It is a model working exactly as designed: price elasticity correlates with financial desperation, so a model optimising for willingness-to-pay charges the most to those least able to bear it. That is not a bug you catch in monitoring — it is the objective function. So constrain the objective rather than audit the outcome.',
    {x:M,y:3.78,w:6.5,h:1.9,isTextBox:true,margin:0,fontFace:TEXT,fontSize:13,color:'C4B8D8',lineSpacing:19});
  card(s,7.4,3.72,5.33,2.5,INK_SOFT);
  s.addShape(P.ShapeType.roundRect,{x:7.4,y:3.72,w:5.33,h:2.5,rectRadius:0.06,fill:{color:INK_SOFT},line:{color:'473259',width:1}});
  s.addText('Guardrails',{x:7.68,y:3.9,w:4.8,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:13,bold:true,color:PURPLE_LT});
  bullets(s,7.68,4.26,4.8,1.85,['Excluded features by policy, not by review',
    'Fairness tested on outcomes — approval, limit and price parity by gender and state',
    'Consent that costs nothing to decline. If declining raises your price, it is not consent',
    'Model risk governance under CNBV; reasons explainable to CONDUSEF'],11.5,'D6CCE6');
  foot(s,'ENIF 2024 shows a 10 percentage-point gender gap in formal credit access — 28.2% of men against 18.3% of women. We should be closing that, not encoding it.');
}

/* ---------- 12 TEAM ---------- */
{ const s=S(); light(s);
  head(s,'2.1.5  Team and org design','Designing the pod, not just staffing it',false);
  card(s,M,1.95,6.2,3.9,'FAF8FD');
  s.addText('The pod I would build',{x:M+0.3,y:2.15,w:5.5,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:15,bold:true,color:INK});
  const pod=[['Me','Value proposition, bundles, pricing'],
             ['PM · Income & Onboarding','Tracks A and B acquisition'],
             ['PM/APM · Pricing & Yield','The model, the holdouts, the rate-committee interface'],
             ['Design lead','The other open role — placed on Track B'],
             ['Embedded','2 analysts (pricing, credit-adjacent) + 1 data scientist'],
             ['Dotted','Model risk · legal and regulatory · treasury']];
  pod.forEach((p,i)=>{
    const y=2.58+i*0.53;
    s.addText(p[0],{x:M+0.3,y,w:2.5,h:0.28,isTextBox:true,margin:0,fontFace:HEAD,fontSize:12,bold:true,color:i===0?PURPLE:INK});
    s.addText(p[1],{x:M+2.9,y,w:3.3,h:0.42,isTextBox:true,margin:0,fontFace:TEXT,fontSize:11.5,color:BODY,lineSpacing:15});
  });
  card(s,7.1,1.95,5.63,3.9,PURPLE_PALE);
  s.addText('Three org calls I would defend',{x:7.38,y:2.15,w:5.1,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:15,bold:true,color:PURPLE});
  const oc=[['Hire the pricing analyst before the second PM.','The bottleneck here is decision quality, not shipping throughput.'],
    ['Do not ask to own Card or Account surfaces.','Own the spec and the customer-level P&L. Asking for org control costs six months and the relationship — and you lose anyway.'],
    ['Put the designer on Track B, not Track A.','Track A is a known pattern. Track B’s consent and explanation flows are where craft decides whether it works at all.']];
  oc.forEach((o,i)=>{
    const y=2.62+i*1.08;
    s.addText((i+1).toString(),{x:7.38,y,w:0.3,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:13,bold:true,color:PURPLE});
    s.addText(o[0],{x:7.72,y:y-0.02,w:4.8,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:12.5,bold:true,color:INK});
    s.addText(o[1],{x:7.72,y:y+0.3,w:4.8,h:0.7,isTextBox:true,margin:0,fontFace:TEXT,fontSize:11.5,color:BODY,lineSpacing:15});
  });
  foot(s,'One of two open roles on the team, and the first PM reporting into this structure — how the pod is shaped now is how it scales.');
}

/* ---------- 13 ALIGNMENT ---------- */
{ const s=S(); light(s);
  head(s,'2.2  Cross-functional alignment','Change what we are arguing about',false);
  s.addText([{text:'Scenario: the Credit Card roadmap collides with a mass-market bundle on a regulatory clock.  ',options:{italic:true,color:MUTED}},{text:'I would not try to win that argument on its own terms.',options:{bold:true,color:INK}}],
    {x:M,y:1.98,w:11.9,h:0.45,isTextBox:true,margin:0,fontFace:TEXT,fontSize:14,lineSpacing:19});
  const mv=[['Make it one P&L, not three roadmaps.','Core does not own Card or GBA — so Core should own the currency. “My roadmap versus yours” cannot be won on evidence. “Which sequence makes this customer worth more” can.'],
    ['Trade assets, not favours.','I bring Card verified income: better approval rates, higher limits, lower losses. They give me placement. That is a trade with a number on it.'],
    ['Never let the regulatory date be my deadline.','The moment it is my launch date it is my problem and their favour. It is a shared compliance exposure — agreed with Legal before the conversation with Card, so it arrives as a fact.'],
    ['Pre-agree the escalation path before you need it.','With Diego and the Card/GBA leads: what is mine, what is theirs, what goes up, and a time-box. Escalating without one wins a decision and costs the relationship.'],
    ['Take the smaller ask.','If Card genuinely cannot move, I ship without the card component and add it later. Shipping on time beats winning the argument.']];
  mv.forEach((m,i)=>{
    const x=M+(i%3)*4.05, y=2.55+Math.floor(i/3)*1.85;
    s.addShape(P.ShapeType.ellipse,{x,y:y+0.02,w:0.32,h:0.32,fill:{color:PURPLE_PALE}});
    s.addText((i+1).toString(),{x,y:y+0.05,w:0.32,h:0.26,isTextBox:true,margin:0,align:'center',fontFace:HEAD,fontSize:12.5,bold:true,color:PURPLE});
    s.addText(m[0],{x:x+0.44,y,w:3.4,h:0.55,isTextBox:true,margin:0,fontFace:HEAD,fontSize:12.5,bold:true,color:INK,lineSpacing:16});
    s.addText(m[1],{x:x+0.44,y:y+0.58,w:3.35,h:1.2,isTextBox:true,margin:0,fontFace:TEXT,fontSize:11.5,color:BODY,lineSpacing:15});
  });
}

/* ---------- 14 FIRST 6 MONTHS ---------- */
{ const s=S(); light(s);
  head(s,'2.4  Prioritisation and global alignment','Three priorities, and why in this order',false);
  const pr=[['01','Fix what we measure about deposits','WEEKS 1–6','Segment β via a geographic holdout. Re-quote yield as a spread. Retire deposit growth in favour of deployable deposits and cost of funds against TIIE.','First because it is nearly free, it is fast, and it is the evidence base for everything else. A new person with no credibility balance should spend month one producing evidence, not asking for headcount.'],
    ['02','Ship Track A to the cohort we can already detect','WEEKS 4–16','Portability for customers whose payroll pattern is already in our data. Measure completed first salary landings.','Second because it is the expiring opportunity.'],
    ['03','Stand up Track B’s consent and estimate spine','WEEKS 10–26','Not the whole product — the consent flow, the estimator and the fairness harness, so H2 is an extension rather than a new build.','Third because it has the longest lead time, so it has to start early even though it lands late.']];
  pr.forEach((p,i)=>{
    const y=1.95+i*1.24;
    s.addText(p[0],{x:M,y,w:0.6,h:0.4,isTextBox:true,margin:0,fontFace:HEAD,fontSize:20,bold:true,color:PURPLE});
    s.addText(p[1],{x:M+0.72,y:y-0.02,w:4.0,h:0.6,isTextBox:true,margin:0,fontFace:HEAD,fontSize:14,bold:true,color:INK,lineSpacing:18});
    s.addText(p[2],{x:M+0.72,y:y+0.62,w:2.2,h:0.26,isTextBox:true,margin:0,fontFace:HEAD,fontSize:9.5,bold:true,charSpacing:1.2,color:MUTED});
    s.addText(p[3],{x:M+4.9,y:y-0.02,w:3.5,h:1.1,isTextBox:true,margin:0,fontFace:TEXT,fontSize:11.5,color:BODY,lineSpacing:15});
    s.addText(p[4],{x:M+8.6,y:y-0.02,w:3.55,h:1.1,isTextBox:true,margin:0,fontFace:TEXT,fontSize:11.5,italic:true,color:AMBER,lineSpacing:15});
  });
  card(s,M,5.72,12.11,1.16,PURPLE_PALE);
  s.addText([{text:'Representing México globally:  ',options:{bold:true,color:PURPLE}},
    {text:'the argument is not “México is different”, it is “México is the proving ground”. Every market Nu enters next will arrive newly licensed, with a low LDR and no income visibility — exactly where México is now. Asks framed as local exceptions lose. Asks framed as reusable platform capability win.'}],
    {x:M+0.3,y:5.94,w:11.5,h:0.8,isTextBox:true,margin:0,fontFace:TEXT,fontSize:12.5,color:BODY,lineSpacing:17});
}

/* ---------- 15 ASSUMPTIONS ---------- */
{ const s=S(); light(s);
  head(s,'Rigour','What I assumed, and what I would ask on day one',false);
  card(s,M,1.95,6.0,4.3,'FAF8FD');
  s.addText('Assumptions — all of them sliders in the model',{x:M+0.3,y:2.15,w:5.3,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:14,bold:true,color:AMBER});
  bullets(s,M+0.3,2.58,5.3,3.4,['25% net credit yield after expected losses',
    '28% LDR floor with no income signal; 70% ceiling with it',
    '45% income-landing attach reaches that ceiling',
    '8% income landing today (calibration check: this yields 35.5% LDR against the 35% reported)',
    'Headline yield paid on all balances — deliberately conservative',
    'β constant. It is not: it rises once a licensed competitor advertises against us'],12);
  card(s,6.92,1.95,5.81,4.3,PURPLE_PALE);
  s.addText('Six questions for week one',{x:7.2,y:2.15,w:5.3,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:14,bold:true,color:PURPLE});
  bullets(s,7.2,2.58,5.25,3.4,['Is β blended, or do you have it by segment?',
    'What share of the US$5.7B sits in the top decile of balances?',
    'What is the income-landing rate today? I assumed 8%.',
    'What is the real risk-adjusted marginal credit yield?',
    'What did the 15→11.5 cut do to new acquisition, not just retention?',
    'Why did retention hold — brand, inertia, or switching cost? That answer changes the entire pricing strategy.'],12);
  foot(s,'I would expect at least one of these assumptions to be wrong in a way that changes the plan. Finding out which is the first job.');
}

/* ---------- 16 CLOSE ---------- */
{ const s=S(); dark(s);
  s.addShape(P.ShapeType.ellipse,{x:M,y:2.5,w:0.15,h:0.15,fill:{color:PURPLE_LT}});
  s.addText('IN ONE SENTENCE',{x:M+0.28,y:2.4,w:8,h:0.3,isTextBox:true,margin:0,fontFace:HEAD,fontSize:11,bold:true,charSpacing:2,color:PURPLE_LT});
  s.addText('You are not short of deposits.\nYou are short of visible income —\nand that is a product problem before it is a pricing one.',
    {x:M,y:2.88,w:12.1,h:2.55,isTextBox:true,margin:0,fontFace:HEAD,fontSize:31,bold:true,color:'FFFFFF',lineSpacing:44});
  s.addText('Interactive model and both product flows:  claude.ai/code/artifact/93da0992-7c28-4c92-81cd-f67f16a3cfaa',
    {x:M,y:5.6,w:11.9,h:0.35,isTextBox:true,margin:0,fontFace:TEXT,fontSize:12,color:'9C8CB5'});
  s.addNotes('Then stop talking. Do not add a summary after this line.');
}

/* ---------- APPENDIX ---------- */
{ const s=S(); light(s);
  head(s,'Appendix','Sources',false);
  s.addText([
   {text:'Nu Holdings Q2 2026 results — ',options:{bold:true}},{text:'16M customers, US$5.7B Mexico deposits, 35% loan-to-deposit, ARPAC US$17.10, cost of deposits at 88% of interbank rates, Mexico break-even in Q1 2026.',options:{breakLine:true}},
   {text:'CNBV / SHCP — ',options:{bold:true}},{text:'banking licence authorised 10 July 2026; Nu México operating as a bank from 6 August 2026; SOFIPO conversion completed.',options:{breakLine:true}},
   {text:'IPAB vs. SOFIPO — ',options:{bold:true}},{text:'deposit insurance from roughly US$12,614 to roughly US$201,000 per person.',options:{breakLine:true}},
   {text:'Banco de México — ',options:{bold:true}},{text:'target rate 6.50%; CETES 28-day 6.49% at the auction of 1 September 2026; remittances US$30.76B in H1 2026.',options:{breakLine:true}},
   {text:'INEGI / CNBV ENIF 2024 — ',options:{bold:true}},{text:'76.5% of adults hold a formal product; 63% a savings account; 37.3% access to formal credit (men 28.2%, women 18.3%).',options:{breakLine:true}},
   {text:'INEGI ENOE Q2 2026 — ',options:{bold:true}},{text:'55.1% labour informality, 33.1 million workers. IMSS July 2026 — 22.76 million formal jobs.',options:{breakLine:true}},
   {text:'CONDUSEF / Banxico — ',options:{bold:true}},{text:'portabilidad de nómina: worker-initiated, free of charge, begins within 11 business days, cancellable in 3.',options:{breakLine:true}},
   {text:'Competitive — ',options:{bold:true}},{text:'Stori licensed 2023, Revolut 2024; Mercado Pago and Klar applications pending with CNBV. BBVA México ~26.7% market share, strong in cards and payroll lending.'}],
   {x:M,y:1.95,w:12.1,h:4.3,isTextBox:true,margin:0,fontFace:TEXT,fontSize:12,color:BODY,lineSpacing:19,paraSpaceAfter:6});
  foot(s,'Public sources only. Every figure not attributed above is my assumption and is marked as such in the model.');
}

P.writeFile({fileName:'deck/Core_Mexico_Business_Case.pptx'}).then(f=>console.log('wrote',f));
