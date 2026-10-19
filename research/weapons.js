/* Understanding WWII — Weapons & equipment data
   Same entry fields as the Into Europe weapons section (ie_weapons.html):
   id, cat, name, nick, inuse, tl, vb, svg, co, cap, specs, desc, pros, cons, versions, story, lugares
   tl rows: [label, [[start, end, 1 = general use | 2 = few units / first or last deliveries]], [[month, "key moment"]]]
   Timeline axis = months from September 1939: Sep 1939 = 0, Jan 1940 = 4, Jan 1941 = 16, Jan 1942 = 28,
   Jan 1943 = 40, Jan 1944 = 52, Jan 1945 = 64, May 1945 = 68 (8 May 1945 = 68.25). */

var CATS = [
  ["all","All"],["rifle","Rifles & SMGs"],["mg","Machine guns"],["at","Anti-tank & mortars"],
  ["art","Artillery & rockets"],["arm","Armour"],["air","Aircraft"],["sea","Sea war"],["vw","V-weapons & secret war"]
];

var W = [
/* ======================= RIFLES & SMGs ======================= */
{
  id:"garand", cat:"rifle", name:"M1 Garand rifle", nick:"The American infantryman's semi-automatic rifle; Patton called it “the greatest battle implement ever devised”",
  inuse:"US standard rifle since 1936 · in Europe from Sicily (July 1943) to the German surrender",
  tl:[["M1 Garand",[[46.3,68.25,1]],[[57.17,"Normandy"],[63.5,"Bastogne"]]]],
  vb:"0 0 600 150",
  svg:'<path class="sl" d="M100,104 Q280,140 460,92"/>'+
  '<path class="w" d="M14,60 L150,70 L196,72 L196,96 L182,102 L164,104 L152,98 L60,108 L14,116 Z"/>'+
  '<path class="s" d="M8,60 H16 V116 H8 Z"/>'+
  '<path class="w" d="M196,78 L470,82 L470,92 L300,96 L196,96 Z"/>'+
  '<path class="s" d="M192,62 H300 V80 H192 Z"/>'+
  '<path class="s" d="M190,50 H206 V62 H190 Z"/><circle class="h" cx="198" cy="56" r="3"/>'+
  '<path class="br" d="M226,64 H266 V72 H226 Z"/>'+
  '<path class="s" d="M296,76 H320 V84 H296 Z"/>'+
  '<path class="w" d="M300,66 L462,70 L462,78 L300,77 Z"/>'+
  '<path class="s" d="M462,70 H592 V78 H462 Z"/>'+
  '<path class="s" d="M540,68 H580 V86 H540 Z"/><path class="s" d="M572,58 H580 V68 H572 Z"/>'+
  '<path class="s" d="M548,86 H560 V92 H548 Z"/>'+
  '<path class="l" d="M206,96 Q214,114 234,98"/><path class="s" d="M218,96 L221,108 L225,96 Z"/>',
  co:[[80,90,"Wooden stock"],[198,34,"Aperture rear sight"],[246,46,"8-round clip, pushed in from the top and thrown out when empty"],[308,106,"Operating rod handle: gas from the barrel works the action"],[400,56,"Wooden handguards"],[560,108,"Gas cylinder and bayonet lug"],[380,134,"Sling"]],
  cap:"Length 1.10 m",
  specs:[["Calibre",".30-06 Springfield (7.62 × 63 mm)"],["Action","Gas-operated, semi-automatic"],["Magazine","8-round en-bloc clip"],["Weight","about 4.3 kg (9.5 lb) empty"],["Length","1.10 m"],["Effective range","about 450 m (500 yd)"],["Rate of fire","40–50 aimed shots a minute"],["Built","about 5.4 million (1936–57)"]],
  desc:"The standard rifle of American infantry from Sicily and Normandy to the Elbe, and the first semi-automatic rifle to become the standard rifle of a major army. Every pull of the trigger fired a shot and loaded the next, so a squad of riflemen armed with Garands could put down far more fire than one with bolt-action rifles. Eight rounds came packed in a steel clip that was pushed into the top of the rifle; when the last shot was fired, the empty clip flew out with a distinctive “ping”.",
  pros:["Semi-automatic: as fast as the soldier could aim and pull the trigger","Powerful, accurate cartridge, the same as the BAR and the Browning machine guns","Rugged and reliable in dust, mud and the Ardennes cold","Quick to reload with a fresh clip"],
  cons:["Heavy: over 4 kg before sling and bayonet","Hard to top up: men usually fired a part-used clip empty before reloading","The empty-clip “ping” was said to warn the enemy — veterans still argue whether it mattered","Long and awkward for fighting in houses and ruins"],
  versions:[["1936","Adopted as the US Army's standard rifle."],["1943","M7 launcher clips onto the muzzle to fire rifle grenades."],["1944","M1C sniper version with a telescopic sight, in small numbers."]],
  story:"In the woods of the Bois Jacques, north-east of Bastogne, men of the 101st Airborne Division dug in during the encirclement of December 1944 and held their foxholes through snow and shellfire until the town was relieved on 26 December. Their Garands kept working in temperatures well below freezing, though men had to keep the actions free of ice and frozen oil. The shallow foxholes can still be seen among the trees near Foy.",
  lugares:["Bois Jacques foxholes, Foy","Bastogne","Omaha Beach","Sainte-Mère-Église","Remagen"]
},
{
  id:"enfield", cat:"rifle", name:"Lee-Enfield rifles No. 4 Mk I and No. 1 Mk III*", nick:"The bolt-action rifle of the British and Commonwealth soldier",
  inuse:"Whole war · the older No. 1 Mk III* served alongside the No. 4, which became the commoner rifle from 1942–43",
  tl:[["Lee-Enfield No. 1 Mk III*",[[0,68.25,1]],[[8.83,"Dunkirk"]]],["Lee-Enfield No. 4 Mk I",[[22,32,2],[32,68.25,1]],[[57.17,"D-Day"],[60.53,"Arnhem"]]]],
  vb:"0 0 600 160",
  svg:'<path class="sl" d="M90,104 Q280,142 460,92"/>'+
  '<path class="w" d="M14,60 L150,70 L200,72 L200,92 L186,100 L168,102 L156,96 L60,108 L14,116 Z"/>'+
  '<path class="s" d="M8,60 H16 V116 H8 Z"/>'+
  '<path class="w" d="M200,74 L520,78 L520,90 L290,94 L200,92 Z"/>'+
  '<path class="w" d="M290,68 L516,72 L516,78 L290,77 Z"/>'+
  '<path class="s" d="M516,72 H592 V80 H516 Z"/>'+
  '<path class="s" d="M572,60 H586 V72 H572 Z"/>'+
  '<path class="s" d="M508,68 H520 V92 H508 Z"/>'+
  '<path class="s" d="M196,62 H292 V78 H196 Z"/>'+
  '<path class="s" d="M232,62 L238,50 L246,50 L244,62 Z"/><circle class="s" cx="243" cy="47" r="6"/>'+
  '<path class="s" d="M270,48 H284 V62 H270 Z"/><circle class="h" cx="277" cy="54" r="3"/>'+
  '<path class="s" d="M236,92 H270 L268,120 H238 Z"/>'+
  '<path class="l" d="M204,92 Q212,112 232,94"/><path class="s" d="M216,92 L219,104 L223,92 Z"/>'+
  '<path class="s" d="M400,134 H420 V148 H400 Z"/><path class="s" d="M420,138 H560 L592,141 L560,144 H420 Z"/>',
  co:[[80,88,"Wooden butt"],[222,30,"Bolt (Lee action): fast and smooth"],[296,34,"No. 4: aperture sight on the receiver"],[254,134,"10-round magazine, filled with two 5-round chargers"],[556,98,"No. 4: barrel sticks out beyond the wood"],[500,141,"No. 4 spike bayonet — the “pigsticker”"],[340,128,"Sling"]],
  cap:"No. 4 Mk I · length 1.13 m",
  specs:[["Calibre",".303 British (7.7 × 56 mm R)"],["Action","Bolt action (Lee system)"],["Magazine","10 rounds, loaded with two 5-round chargers"],["Weight","No. 4: about 4.1 kg"],["Length","No. 4: 1.13 m"],["Effective range","about 500 m"],["Rate of fire","15 or more aimed shots a minute for a trained rifleman"]],
  desc:"British, Canadian, Australian, New Zealand, South African and Indian troops all fought with the Lee-Enfield, and so did the Free French, Polish, Czechoslovak, Dutch, Belgian and Norwegian forces re-equipped in Britain. The British Expeditionary Force of 1940 carried the First World War SMLE (No. 1 Mk III*). The No. 4 Mk I, a simpler, heavier and sturdier version designed for mass production, was adopted in 1941; its barrel sticks out beyond the wooden fore-end and it has an aperture sight on the receiver. The two were used side by side to the end.",
  pros:["Fast, smooth bolt and a 10-round magazine — twice the German rifle's 5","Rugged and accurate","The No. 4's aperture sight was quick and precise","Same .303 round as the Bren gun"],
  cons:["Bolt action: slower than the American semi-automatic Garand","The spike bayonet was useless as a tool","Long and awkward in house fighting","Refilling with 5-round chargers was slow in the middle of a fight"],
  versions:[["1939–40","The BEF goes to France with the No. 1 Mk III*, little changed since 1918."],["1941","No. 4 Mk I officially adopted; mass production in Britain, Canada (Long Branch) and the United States (Savage)."],["1942","Mk I*: simplified for faster production in North America."],["1944","No. 4 (T) sniper rifle with a No. 32 telescope serves in Normandy and the Low Countries."]],
  story:"In the Oosterbeek perimeter at Arnhem, from 19 to 25 September 1944, the men of the British 1st Airborne Division defended houses, gardens and woods with rifles, Brens, PIATs and a few anti-tank guns against tanks, self-propelled guns and constant mortar fire. Many of their rifles were the new No. 4 with its spike bayonet. Of about 10,000 men who landed by air, some 2,400 got back across the Rhine on the night of 25–26 September (figures vary slightly between sources).",
  lugares:["Dunkirk","Pegasus Bridge","Juno Beach Centre","Airborne Museum Hartenstein, Oosterbeek","Arnhem Oosterbeek War Cemetery"]
},
{
  id:"k98", cat:"rifle", name:"Karabiner 98k rifle", nick:"The standard German rifle, from the first day of the war to the last",
  inuse:"Whole war · German standard rifle since 1935",
  tl:[["Karabiner 98k",[[0,68.25,1]],[[0.03,"Westerplatte"],[38.6,"Stalingrad"]]]],
  vb:"0 0 600 150",
  svg:'<path class="sl" d="M96,104 Q300,140 452,90"/>'+
  '<path class="w" d="M12,58 L150,68 L196,70 L196,92 L184,100 L166,102 L154,96 L58,108 L12,116 Z"/>'+
  '<path class="s" d="M6,58 H14 V116 H6 Z"/>'+
  '<path class="h" d="M96,82 H114 V90 H96 Z"/>'+
  '<path class="w" d="M196,72 L500,76 L500,88 L196,92 Z"/>'+
  '<path class="w" d="M300,66 L470,68 L470,76 L300,75 Z"/>'+
  '<path class="s" d="M470,70 H580 V76 H470 Z"/>'+
  '<path class="s" d="M566,58 H580 V70 H566 Z"/>'+
  '<path class="s" d="M192,60 H300 V76 H192 Z"/>'+
  '<path class="s" d="M224,64 L232,64 L240,88 L232,90 Z"/><circle class="s" cx="238" cy="93" r="6"/>'+
  '<path class="s" d="M304,58 H340 V66 H304 Z"/>'+
  '<path class="s" d="M250,92 H290 V98 H250 Z"/>'+
  '<path class="s" d="M440,64 H452 V91 H440 Z"/><path class="s" d="M496,68 H506 V89 H496 Z"/>'+
  '<path class="s" d="M506,78 H540 V83 H506 Z"/>'+
  '<path class="l" d="M202,92 Q210,112 222,96"/>',
  co:[[56,90,"Stock of walnut or laminated wood"],[106,62,"Sling slot through the butt"],[214,112,"Bolt with turned-down handle"],[322,44,"Tangent rear sight"],[272,82,"5-round internal magazine, filled from a stripper clip"],[573,40,"Hooded front sight"],[524,98,"Bayonet lug"]],
  cap:"Length 1.11 m",
  specs:[["Calibre","7.92 × 57 mm Mauser"],["Action","Bolt action (Mauser)"],["Magazine","5 rounds, internal; loaded with a stripper clip"],["Weight","about 3.7–4.1 kg, depending on the wood"],["Length","1.11 m"],["Effective range","about 500 m with iron sights; more with a telescopic sight"],["Built","over 14 million (1935–45)"]],
  desc:"A shortened version of the First World War Mauser rifle, carried by most German soldiers in every campaign from Poland in 1939 to Berlin in 1945, and by the Waffen-SS, paratroopers, the navy and the Luftwaffe's ground troops. It was accurate and extremely strong, but held only five rounds and had to be worked by hand after every shot. The German army relied on its machine guns for firepower: much of the riflemen's job was to protect the section's MG 34 or MG 42 and carry its ammunition.",
  pros:["Very accurate, with a powerful cartridge","Extremely strong, reliable Mauser bolt","With a telescopic sight, a fine sniper's rifle","Shared its ammunition with the MG 34 and MG 42"],
  cons:["Only 5 rounds before reloading","Slower to fire than the Garand, and slower to work than the Lee-Enfield","Long for fighting in houses and rubble","Late-war rifles were more roughly finished"],
  versions:[["1935","Adopted by the German armed forces."],["1937 on","Laminated wooden stocks begin to replace solid walnut."],["1943–44","Gewehr 43 and the Sturmgewehr 44 appear, but never replace the 98k."],["1944–45","Simplified wartime rifles with fewer machined parts; many go to the Volkssturm."]],
  story:"The first shots of the war in Europe were fired at Westerplatte, the Polish ammunition depot in the harbour of Danzig (Gdańsk), at about 4:45 on 1 September 1939. A garrison of some 180–240 Polish soldiers (sources differ) held out for seven days against German marines, SS and police, the battleship Schleswig-Holstein and, on 2 September, about 60 Stuka dive-bombers. On both sides most men carried Mauser-type rifles firing the same 7.92 mm round — the Polish army's rifles were derived from the same Mauser design. Major Sucharski surrendered on 7 September.",
  lugares:["Westerplatte, Gdańsk","Polish Post Office, Gdańsk","Pointe du Hoc","Seelow Heights","La Cambe German war cemetery"]
},
{
  id:"mosin", cat:"rifle", name:"Mosin–Nagant rifle M1891/30", nick:"The Red Army's rifle — and the weapon of the Stalingrad snipers",
  inuse:"Whole war · Red Army standard rifle; also Finland's rifle in the Winter War (1939–40)",
  tl:[["Mosin–Nagant",[[0,68.25,1]],[[2.97,"Winter War"],[38.6,"Stalingrad"]]]],
  vb:"0 0 600 150",
  svg:'<path class="sl" d="M100,104 Q290,140 470,92"/>'+
  '<path class="w" d="M10,62 L150,70 L190,72 L190,94 L176,100 L160,100 L150,96 L56,108 L10,114 Z"/>'+
  '<path class="s" d="M4,62 H12 V114 H4 Z"/>'+
  '<path class="w" d="M190,74 L500,78 L500,90 L190,94 Z"/>'+
  '<path class="w" d="M300,68 L480,71 L480,78 L300,77 Z"/>'+
  '<path class="s" d="M480,71 H562 V78 H480 Z"/>'+
  '<path class="s" d="M548,62 H558 V71 H548 Z"/>'+
  '<path class="s" d="M380,66 H390 V92 H380 Z"/><path class="s" d="M490,68 H500 V90 H490 Z"/>'+
  '<path class="s" d="M186,60 H300 V76 H186 Z"/>'+
  '<path class="s" d="M206,66 H212 V96 H206 Z"/><circle class="s" cx="209" cy="100" r="6"/>'+
  '<path class="s" d="M304,60 H344 V68 H304 Z"/>'+
  '<path class="s" d="M232,92 H286 L282,106 H236 Z"/>'+
  '<path class="l" d="M196,94 Q206,112 222,96"/>'+
  '<path class="s" d="M560,70 H572 V80 H560 Z"/><path class="s" d="M572,73 H594 L600,75 L594,77 H572 Z"/>',
  co:[[80,88,"Wooden stock with a straight wrist"],[209,126,"Straight bolt handle (turned down on sniper rifles)"],[259,128,"5-round magazine, loaded with a stripper clip"],[324,44,"Rear sight"],[430,56,"Wooden handguard"],[540,44,"Hooded front sight"],[586,98,"Spike bayonet: the rifle was sighted with it fixed"]],
  cap:"M1891/30 · length 1.23 m without bayonet",
  specs:[["Calibre","7.62 × 54 mm R"],["Action","Bolt action"],["Magazine","5 rounds, internal; loaded with a stripper clip"],["Weight","about 4 kg"],["Length","1.23 m (M1938 and M1944 carbines about 1.0 m)"],["Effective range","about 500 m; about 800 m with a telescopic sight"],["Muzzle velocity","about 865 m/s"],["Built","about 37 million of all types since 1891; about 19.8 million by 1945"]],
  desc:"Designed in the 1890s and modernised in 1930, the Mosin–Nagant was simple, crude to look at and almost indestructible. Millions were made in the factories at Tula and Izhevsk, and it armed the Soviet infantry from the invasion of Poland in 1939 to the storming of Berlin. With a PU telescopic sight it became the weapon of the Red Army's many snipers, men and women alike. Finland, which had inherited the rifle from Imperial Russia, used its own versions against the Soviets in the Winter War of 1939–40 and again from 1941.",
  pros:["Simple, robust and reliable in mud, dust and extreme cold","Powerful, long-range cartridge","Cheap and quick to make in huge numbers","With a PU sight, an accurate sniper's rifle"],
  cons:["Long and heavy, especially with the bayonet fixed","Stiff bolt, slower to work than the Lee-Enfield","Only 5 rounds","Rimmed cartridge needed careful loading to avoid jams"],
  versions:[["1930","M1891/30: the modernised infantry rifle."],["1938","M1938 carbine for artillery, signals and other troops."],["1942","Sniper rifles fitted with the simpler PU telescopic sight."],["1944","M1944 carbine, with a folding bayonet, issued to infantry from February 1944."]],
  story:"At Stalingrad, in the ruins of factories and houses along the Volga, Soviet snipers became heroes of the press. Vasily Zaitsev of the 284th Rifle Division is credited by Soviet sources with 265 kills between 22 September and 17 December 1942. His duel with a German sniper-school chief, “Major König”, made famous by the film Enemy at the Gates, is doubted by historians: Antony Beevor found nothing to support it in the Russian archives. Zaitsev was reburied on Mamayev Kurgan in 2006.",
  lugares:["Panorama Museum and Gerhardt's Mill, Volgograd","Mamayev Kurgan, Volgograd","Pavlov's House, Volgograd","Brest Fortress","Victory Museum, Poklonnaya Hill"]
},
{
  id:"smg", cat:"rifle", name:"Sub-machine guns: Thompson, Sten, MP 40 and PPSh-41", nick:"Short-range automatic weapons for close fighting — and the favourite of resistance fighters and partisans",
  inuse:"Whole war · Sten from 1941, PPSh-41 from late 1941 · Stens dropped to resistance movements across Europe",
  tl:[["Thompson",[[9,68.25,1]],[]],["Sten",[[21,68.25,1]],[[32.87,"Anthropoid"],[59,"Warsaw"]]],["MP 38 / MP 40",[[0,68.25,1]],[]],["PPSh-41",[[26.5,30,2],[30,68.25,1]],[[38.6,"Stalingrad"],[67.5,"Berlin"]]]],
  vb:"0 0 600 340",
  svg:'<path class="w" d="M20,40 L130,50 L130,74 L20,90 Z"/><path class="s" d="M14,40 H22 V90 H14 Z"/>'+
  '<path class="w" d="M150,66 L176,66 L170,100 L148,100 Z"/><path class="l" d="M176,66 Q184,82 200,68"/>'+
  '<path class="s" d="M206,66 H226 L230,112 H210 Z"/>'+
  '<path class="s" d="M130,44 H262 V66 H130 Z"/><path class="s" d="M140,36 H152 V44 H140 Z"/><path class="s" d="M232,50 H244 V56 H232 Z"/>'+
  '<path class="w" d="M262,58 H340 V70 H262 Z"/>'+
  '<path class="s" d="M262,50 H392 V58 H262 Z"/><path class="s" d="M380,42 H386 V50 H380 Z"/>'+
  '<path class="l" d="M26,166 L100,176 M26,200 L100,184"/><path class="s" d="M18,160 H28 V206 H18 Z"/>'+
  '<path class="s" d="M160,186 L176,186 L150,236 L134,236 Z"/>'+
  '<path class="s" d="M100,168 H232 V188 H100 Z"/><path class="s" d="M168,160 H178 V168 H168 Z"/>'+
  '<path class="s" d="M104,188 H134 V200 H104 Z"/><path class="l" d="M134,194 Q140,208 152,190"/>'+
  '<path class="s" d="M232,174 H292 V182 H232 Z"/><path class="s" d="M284,166 H290 V174 H284 Z"/>'+
  '<path class="l" d="M340,172 L330,196"/><path class="s" d="M330,194 H440 V200 H330 Z"/><path class="s" d="M322,188 H332 V206 H322 Z"/>'+
  '<path class="g" d="M396,178 L418,178 L414,214 L394,214 Z"/><path class="l" d="M418,178 Q424,194 440,180"/>'+
  '<path class="s" d="M466,178 H484 L486,240 H468 Z"/>'+
  '<path class="s" d="M340,158 H500 V178 H340 Z"/><path class="s" d="M430,152 H442 V158 H430 Z"/>'+
  '<path class="s" d="M500,164 H572 V172 H500 Z"/><path class="s" d="M548,172 H560 V180 H548 Z"/><path class="s" d="M562,152 H570 V164 H562 Z"/>'+
  '<path class="w" d="M20,262 L120,270 L170,272 L170,294 L150,300 L130,300 L120,296 L20,310 Z"/><path class="s" d="M14,262 H22 V310 H14 Z"/>'+
  '<path class="s" d="M170,264 H290 V288 H170 Z"/><path class="s" d="M196,256 H208 V264 H196 Z"/>'+
  '<path class="l" d="M176,288 Q188,306 204,290"/>'+
  '<path class="s" d="M290,268 H430 V284 H290 Z"/>'+
  '<g class="h"><rect x="302" y="273" width="18" height="6" rx="3"/><rect x="330" y="273" width="18" height="6" rx="3"/><rect x="358" y="273" width="18" height="6" rx="3"/><rect x="386" y="273" width="18" height="6" rx="3"/></g>'+
  '<path class="s" d="M430,266 L448,270 V284 H430 Z"/><path class="s" d="M420,260 H426 V268 H420 Z"/>'+
  '<circle class="s" cx="240" cy="308" r="24"/><circle class="h" cx="240" cy="308" r="8"/>',
  co:[[76,64,"Thompson M1A1: wooden butt, heavy machined steel"],[220,94,"20- or 30-round box magazine (.45)"],[300,64,"Plain barrel of the simplified M1A1"],[60,184,"Sten Mk II: skeleton stock and a simple steel tube"],[150,218,"32-round magazine, fitted sideways on the left (drawn in perspective)"],[372,197,"MP 40: folding steel stock (shown folded)"],[476,220,"32-round magazine (9 mm)"],[554,190,"Bar under the barrel, for resting on vehicle sides"],[80,286,"PPSh-41: wooden stock, like a rifle"],[288,322,"71-round drum (a 35-round curved box from 1942)"],[360,296,"Slotted barrel jacket; the sloping front end acts as a muzzle brake"]],
  cap:"Thompson (top) · Sten (left) · MP 40 (right) · PPSh-41 (bottom) · not to scale",
  specs:[["Thompson M1A1",".45 ACP; 20- or 30-round box; about 4.5 kg empty; 700–800 rounds a minute"],["Sten Mk II","9 mm; 32-round side magazine; 3.2 kg; 500–600 rounds a minute"],["MP 40","9 mm; 32-round magazine; about 4 kg; 500–550 rounds a minute"],["PPSh-41","7.62 × 25 mm Tokarev; 71-round drum or 35-round box; 3.6 kg empty, about 5.4 kg with a loaded drum; about 1,000–1,250 rounds a minute"],["Effective range","best under 100 m; about 60–200 m depending on weapon and source"],["Built","Thompson about 1.7 million; Sten about 4 million; MP 40 about 1.1 million; PPSh-41 about 6 million (over 5 million by 1945)"]],
  desc:"Sub-machine guns fired pistol cartridges automatically: no use at long range, but ideal in streets, houses, woods and trenches. The American Thompson was heavy and beautifully made. The British Sten was the opposite — a steel tube, a spring and a magazine that cost only a few pounds — and thousands were parachuted to resistance groups. The German MP 40, all steel and plastic with a folding stock, was carried by section leaders and paratroopers; Allied soldiers called it the “Schmeisser”, although Hugo Schmeisser did not design it. The Soviet PPSh-41, stamped from sheet steel with a wooden stock, was made in such numbers that whole Red Army companies carried it.",
  pros:["Automatic fire at close quarters, in houses and ruins","Short and handy","Sten and PPSh: cheap, simple and quick to make in huge numbers","Sten and MP 40 used the same 9 mm round, so captured ammunition could be used"],
  cons:["Short range and poor accuracy beyond it","Thompson: heavy, and so was its ammunition","Sten: could jam, and early ones could fire if dropped","PPSh drum: slow to load and prone to misfeeds if filled right up"],
  versions:[["1938–40","MP 38, then the simplified MP 40, enter German service."],["1941","Sten Mk I in production in Britain; PPSh-41 enters production in the Soviet Union in the autumn."],["1942","Sten Mk II becomes the commonest version; PPSh gets a 35-round box magazine; Thompson M1A1 simplified."],["1942–43","PPS-43, an even simpler Soviet design, is made during the siege of Leningrad."]],
  story:"On 27 May 1942, on a bend in the road at Prague-Libeň, the Czechoslovak parachutist Jozef Gabčík stepped in front of Reinhard Heydrich's open Mercedes and pulled the trigger of his Sten. It jammed. His comrade Jan Kubiš threw a modified anti-tank grenade that wounded Heydrich, who died on 4 June. The parachutists were betrayed and died on 18 June in the crypt of the Church of Saints Cyril and Methodius, and the Nazis took savage revenge, destroying the villages of Lidice and Ležáky.",
  lugares:["Operation Anthropoid memorial, Prague-Libeň","National Memorial to the Heroes of the Heydrich Terror (crypt), Prague","Lidice Memorial","Warsaw Rising Museum","Pavlov's House, Volgograd"]
},

/* ======================= MACHINE GUNS ======================= */
{
  id:"bren", cat:"mg", name:"Bren light machine gun", nick:"The backbone of every British and Commonwealth infantry section",
  inuse:"Whole war",
  tl:[["Bren",[[0,68.25,1]],[[8.83,"Dunkirk"],[60.53,"Arnhem"]]]],
  vb:"0 0 600 190",
  svg:'<path class="lt" d="M470,98 L440,176 M470,98 L500,176"/>'+
  '<path class="s" d="M20,70 L150,78 L150,100 L20,118 Z"/><path class="s" d="M14,68 H22 V120 H14 Z"/>'+
  '<path class="w" d="M186,102 L210,102 L204,140 L184,140 Z"/><path class="l" d="M210,102 Q218,120 234,104"/>'+
  '<path class="s" d="M150,70 H300 V102 H150 Z"/>'+
  '<path class="s" d="M232,70 L240,20 Q262,14 282,22 L276,70 Z"/>'+
  '<path class="s" d="M300,88 H440 V96 H300 Z"/>'+
  '<path class="s" d="M300,76 H520 V88 H300 Z"/>'+
  '<path class="l" d="M330,76 Q340,48 370,48 L380,72"/>'+
  '<path class="s" d="M520,74 L560,72 L560,92 L520,90 Z"/>'+
  '<path class="s" d="M512,60 H522 V76 H512 Z"/>'+
  '<circle class="s" cx="168" cy="64" r="8"/>',
  co:[[80,94,"Butt"],[258,44,"Curved 30-round magazine on top (rimmed .303 rounds)"],[356,34,"Carrying handle, also used for a quick barrel change"],[196,124,"Pistol grip and trigger"],[410,82,"Barrel, with the gas cylinder below it"],[470,152,"Bipod"],[562,82,"Conical flash hider"]],
  cap:"Length 1.16 m · about 10.3 kg",
  specs:[["Calibre",".303 British"],["Action","Gas-operated, automatic, air-cooled"],["Feed","30-round curved box on top (usually loaded with 27–28)"],["Weight","about 10.3 kg"],["Length","1.16 m"],["Rate of fire","500–520 rounds a minute; about 120 a minute in practice"],["Effective range","about 550 m (600 yd)"],["Crew","2: gunner, and a No. 2 with spare barrel and magazines"]],
  desc:"A British version of the Czechoslovak ZB vz. 26 — the name joins Brno, where it was designed, and Enfield, where it was made. Light enough for one man to carry, very accurate and easy to keep working, it gave every section its own machine gun: the riflemen's task was largely to move and protect it. When the barrel got hot it could be changed in seconds using the carrying handle. It also rode on the tracked Universal Carrier, often called the “Bren carrier”, and was dropped to resistance fighters.",
  pros:["Very accurate: often used like a rapid-fire rifle","Reliable and simple to strip and clean","Quick barrel change","Same .303 ammunition as the rifle"],
  cons:["Small magazine: only about 28 rounds before changing","Much lower rate of fire than the German MG 42","Magazines were heavy for the section to carry","The top magazine meant the sights had to be offset to the left"],
  versions:[["1937","Bren Mk I in production at Enfield; the John Inglis plant in Toronto receives a Canadian contract in 1938."],["1940","Thousands are lost in France; production is hurried up to replace them."],["1941","Mk II: simpler and cheaper to make."],["1944–45","In north-west Europe the infantry section fights around a single Bren; every man carries magazines for it."]],
  story:"In the last days of May 1940, as the British Expeditionary Force fell back on Dunkirk, rearguards of infantry with Brens and rifles held the canal lines and the perimeter while more than 338,000 Allied soldiers were taken off the beaches and the East Mole between 26 May and 4 June. Almost all their heavy equipment was left behind, including thousands of Bren guns, and for months afterwards the army in Britain was short of them.",
  lugares:["Dunkirk 1940 Museum (Bastion 32)","Malo-les-Bains evacuation beach, Dunkirk","East Mole, Dunkirk","Airborne Museum Hartenstein, Oosterbeek","Overloon War Museum"]
},
{
  id:"mg42", cat:"mg", name:"MG 42 machine gun (and MG 34)", nick:"“Hitler's buzzsaw”: the fastest-firing machine gun of the war",
  inuse:"MG 34 whole war · MG 42 from 1942, alongside the older MG 34",
  tl:[["MG 34",[[0,68.25,1]],[]],["MG 42",[[32,34,2],[34,68.25,1]],[[57.17,"Omaha"],[62,"Hürtgen"]]]],
  vb:"0 0 600 175",
  svg:'<path class="lt" d="M470,88 L440,156 M470,88 L500,156"/>'+
  '<path class="b" d="M206,92 Q212,124 246,146"/>'+
  '<rect class="o" x="244" y="136" width="58" height="32" rx="8"/>'+
  '<path class="g" d="M14,62 L130,70 L130,92 L14,108 Z"/><path class="s" d="M8,60 H16 V110 H8 Z"/>'+
  '<path class="g" d="M150,92 L172,92 L166,128 L146,128 Z"/><path class="l" d="M172,92 Q178,106 192,94"/>'+
  '<path class="s" d="M130,62 H250 V92 H130 Z"/><path class="s" d="M170,54 H242 V62 H170 Z"/>'+
  '<path class="s" d="M250,62 H520 V88 H250 Z"/>'+
  '<g class="h"><rect x="316" y="68" width="22" height="7" rx="3"/><rect x="348" y="68" width="22" height="7" rx="3"/><rect x="380" y="68" width="22" height="7" rx="3"/><rect x="412" y="68" width="22" height="7" rx="3"/><rect x="444" y="68" width="22" height="7" rx="3"/><rect x="476" y="68" width="22" height="7" rx="3"/></g>'+
  '<path class="dl" d="M258,66 H300 V84 H258 Z"/>'+
  '<path class="s" d="M520,66 H560 V84 H520 Z"/><path class="s" d="M510,50 H518 V62 H510 Z"/>',
  co:[[70,86,"Butt"],[206,40,"Feed cover: the belt runs through here"],[400,80,"Square barrel jacket with cooling slots"],[279,75,"Hatch for changing the barrel in seconds"],[273,152,"50-round belt drum (or long belts from boxes)"],[486,142,"Bipod (a tripod could be fitted for long range)"]],
  cap:"MG 42 · length 1.22 m · 11.6 kg on its bipod",
  specs:[["Calibre","7.92 × 57 mm Mauser"],["Action","Recoil-operated, automatic, air-cooled"],["Feed","50-round belts, linked into longer belts; 50-round drum"],["Weight","11.6 kg; Lafette 42 tripod 20.5 kg"],["Length","1.22 m"],["Rate of fire","about 1,200 rounds a minute (900–1,500 depending on the bolt); MG 34 about 800–900"],["Barrel change","under 10 seconds"],["Built","MG 42 about 424,000 (1942–45)"]],
  desc:"The MG 34 of 1934 was the first “general-purpose” machine gun: light enough to go forward with the section on its bipod, steady enough on a tripod to fire at long range, and also fitted to tanks and vehicles. It was superb but slow and costly to make. Its successor, the MG 42, was designed for mass production from stamped steel; its extraordinary rate of fire made a sound like tearing cloth. A hot barrel was swapped in seconds through a hatch in the side of the jacket. The two served side by side until the end of the war.",
  pros:["Enormous rate of fire","Very fast barrel change","MG 42: cheap and quick to make","Light enough for one man, steady enough on a tripod for long-range fire"],
  cons:["Used ammunition at a huge rate: heavy loads for the crew","Barrels overheated quickly and had to be changed often","Hard to hold on target in long bursts from the bipod","Its distinctive sound gave away its position"],
  versions:[["1934","MG 34: the first general-purpose machine gun, used in Poland and France and to the end of the war."],["May 1942","MG 42 first used in action, in North Africa."],["1942–45","The Lafette 42 tripod turns it into a long-range heavy machine gun."],["1944","MG 42s form the backbone of the Atlantic Wall's beach defences."]],
  story:"On Omaha Beach on 6 June 1944, machine guns in the resistance nests on the bluffs above the beach, among them Widerstandsnest 62 near Colleville, swept the sand and the tide flats as the first waves of the US 1st and 29th Divisions came ashore. A gunner at WN 62, Heinrich Severloh, later claimed to have fired some 12,000–13,500 rounds and to have hit more than 1,000 men; historians reject those figures, since total American casualties on Omaha were about 2,400, but the machine guns made it the bloodiest of the landing beaches.",
  lugares:["Omaha Beach: Les Braves memorial","Normandy American Cemetery, Colleville-sur-Mer","Overlord Museum, Colleville","La Cambe German war cemetery","Hürtgen Forest: Museum Hürtgenwald 1944"]
},

/* ======================= ANTI-TANK & MORTARS ======================= */
{
  id:"at", cat:"at", name:"Anti-tank weapons: bazooka, PIAT, Panzerschreck and Panzerfaust", nick:"The infantryman's answer to a tank — at very short range",
  inuse:"Bazooka from 1942 · PIAT from 1943 · Panzerschreck and Panzerfaust from late 1943 to the end",
  tl:[["Bazooka",[[38.2,46,2],[46,68.25,1]],[[63.5,"Bastogne"]]],["PIAT",[[42,68.25,1]],[[60.53,"Arnhem"]]],["Panzerschreck",[[49,53,2],[53,68.25,1]],[]],["Panzerfaust",[[47,53,2],[53,68.25,1]],[[67.5,"Berlin"]]]],
  vb:"0 0 600 300",
  svg:'<path class="s" d="M40,40 H440 V56 H40 Z"/>'+
  '<path class="w" d="M140,56 L220,56 L220,70 L150,70 Z"/><path class="w" d="M250,56 L268,56 L262,86 L246,86 Z"/><path class="w" d="M320,56 L336,56 L332,80 L318,80 Z"/>'+
  '<path class="s" d="M280,30 H292 V40 H280 Z"/>'+
  '<path class="g" d="M476,40 H520 Q560,40 575,48 Q560,56 520,56 H476 Z"/><path class="l" d="M476,42 L462,34 M476,54 L462,62"/>'+
  '<path class="k" d="M40,104 H62 V146 H40 Z"/>'+
  '<path class="s" d="M60,110 H330 V138 H60 Z"/>'+
  '<path class="s" d="M330,114 H404 V120 H330 Z"/><path class="l" d="M330,136 H404"/>'+
  '<path class="g" d="M342,94 Q376,84 404,98 L404,114 L342,114 Z"/>'+
  '<path class="s" d="M230,98 H240 V110 H230 Z"/>'+
  '<path class="l" d="M160,138 Q170,158 190,140"/>'+
  '<path class="lt" d="M300,138 L312,176"/>'+
  '<path class="s" d="M60,192 H520 V208 H60 Z"/>'+
  '<path class="k" d="M220,164 H272 V192 H220 Z"/><path class="h" d="M232,170 H248 V180 H232 Z"/>'+
  '<path class="w" d="M300,208 L316,208 L312,234 L296,234 Z"/><path class="s" d="M120,208 H160 V216 H120 Z"/>'+
  '<path class="s" d="M60,266 H400 V278 H60 Z"/>'+
  '<path class="s" d="M318,254 H328 V266 H318 Z"/><path class="s" d="M300,278 H312 V286 H300 Z"/>'+
  '<path class="g" d="M400,256 Q450,250 494,262 Q516,272 494,282 Q450,294 400,288 Z"/><path class="l" d="M396,262 V284"/>',
  co:[[100,48,"Bazooka M1A1 (US): 60 mm rocket from an open tube"],[522,48,"Rocket with shaped-charge warhead"],[186,124,"PIAT (British): spring-and-cartridge launcher, no back-blast"],[372,106,"Open trough that holds the bomb"],[51,125,"Padded butt: the recoil was fierce"],[246,178,"Panzerschreck (German): 88 mm, with a blast shield"],[420,200,"Tube, open at both ends"],[180,272,"Panzerfaust: a throw-away tube, fired once from under the arm"],[350,250,"Flip-up sight and firing lever"],[456,272,"Warhead wider than the tube"]],
  cap:"Bazooka · PIAT · Panzerschreck · Panzerfaust (top to bottom) · not to scale",
  specs:[["Bazooka M1A1","60 mm rocket; launcher about 5.8 kg, 1.38 m; about 76 mm of armour; about 140 m (150 yd) claimed range"],["PIAT","bomb about 1.1 kg (2.5 lb); launcher about 14.5 kg, 0.99 m; about 105 m against tanks, about 320 m against buildings; up to about 100 mm of armour in theory"],["Panzerschreck","88 mm rocket; about 11 kg with shield, 1.64 m; about 150 m; roughly 160–230 mm of armour (sources differ)"],["Panzerfaust","single shot; Panzerfaust 30: 30 m, about 200 mm of armour, about 5 kg; Panzerfaust 60: 60 m, 6–7 kg; Panzerfaust 100: 100 m; about 8.25 million made"],["Crew","Bazooka, PIAT and Panzerschreck: 2 (firer and loader) · Panzerfaust: 1"]],
  desc:"All four used a shaped-charge warhead, which focuses its blast into a jet that punches through armour. The American bazooka fired a small rocket from an open tube. The British PIAT worked differently: a powerful spring threw the bomb forward and a small cartridge in its tail finished the job, so there was no back-blast and it could be fired from a room — but the spring was very hard to cock. The German Panzerschreck, a larger copy of captured bazookas, hit much harder. The Panzerfaust was simpler still: a tube with a charge and a large warhead, aimed by one man, fired once and thrown away. Millions were made, and by 1945 they were handed even to old men of the Volkssturm and boys of the Hitler Youth.",
  pros:["Let infantry fight tanks at close range","PIAT: no back-blast, so it could be fired from buildings","Panzerschreck and Panzerfaust: enough penetration for any Allied tank","Panzerfaust: cheap, light, needed almost no training"],
  cons:["Very short range: the firer had to let the tank come close","Bazooka, Panzerschreck and Panzerfaust back-blast gave away the position and made firing indoors dangerous","PIAT: heavy, hard to cock, and its bomb did not always go off","Hard to hit a moving tank with a slow projectile"],
  versions:[["Nov 1942","Bazooka first in action in North Africa; the improved M1A1 fights in Sicily and Normandy."],["Mar 1943","PIAT first used, in Tunisia."],["Aug 1943","First Panzerfausts (the small “Faustpatrone”) delivered; Panzerschreck enters service soon after."],["Sep–Nov 1944","Panzerfaust 60 and 100 in full production; bazooka M9 with a two-piece tube."]],
  story:"At Oosterbeek, during the Battle of Arnhem, Major Robert Cain of the 2nd South Staffords stalked German tanks and self-propelled guns with a PIAT, holding his fire until one was about 20 yards away on 20 September 1944 and driving off more the next morning, until a bomb burst in his launcher and temporarily blinded him. He received the Victoria Cross. Seven months later, in Berlin, the roles were reversed: Soviet tank crews fighting through the streets faced Panzerfausts fired from cellars and windows, and hung bedsprings and sandbags on their tanks in an attempt to keep them off.",
  lugares:["Airborne Museum Hartenstein, Oosterbeek","Old Church and Kate ter Horst house, Oosterbeek","Bastogne War Museum","Seelow Heights Memorial","Reichstag, Berlin"]
},
{
  id:"mines", cat:"at", name:"Mines: Teller, S-mine and Schü-mine", nick:"Hidden in beaches, roads, verges, woods and doorways across Europe",
  inuse:"Whole war · above all on the Eastern Front, the Atlantic Wall and in every German withdrawal",
  tl:[["Mines",[[0,68.25,1]],[[46.13,"Kursk"],[57.17,"Atlantic Wall"],[62,"Hürtgen"]]]],
  vb:"0 0 600 200",
  svg:'<path class="dl" d="M0,112 H600"/>'+
  '<path class="o" d="M40,120 H220 Q226,120 226,130 V156 Q226,164 216,164 H44 Q34,164 34,156 V130 Q34,120 40,120 Z"/>'+
  '<path class="s" d="M90,108 H170 V120 H90 Z"/><path class="l" d="M226,132 Q244,142 226,154"/>'+
  '<rect class="g" x="280" y="118" width="80" height="78" rx="8"/>'+
  '<path class="dl" d="M292,130 H348 V186 H292 Z"/>'+
  '<g class="h"><circle cx="302" cy="142" r="4"/><circle cx="316" cy="142" r="4"/><circle cx="330" cy="142" r="4"/><circle cx="302" cy="156" r="4"/><circle cx="316" cy="156" r="4"/><circle cx="302" cy="170" r="4"/><circle cx="316" cy="170" r="4"/><circle cx="330" cy="170" r="4"/></g>'+
  '<path class="s" d="M314,98 H326 V118 H314 Z"/><path class="l" d="M320,98 L310,84 M320,98 L320,82 M320,98 L330,84"/>'+
  '<path class="w" d="M430,120 H560 V170 H430 Z"/><path class="w" d="M424,112 H566 V122 H424 Z"/>'+
  '<path class="dl" d="M450,132 H500 V160 H450 Z"/><path class="s" d="M500,140 H540 V148 H500 Z"/>',
  co:[[130,146,"Teller mine: about 5.5 kg of TNT, against vehicles"],[130,94,"Pressure plate: needs a vehicle's weight to fire"],[350,84,"S-mine: only the three-pronged fuze shows above the ground"],[340,158,"Inner canister packed with steel balls"],[495,117,"Schü-mine: a wooden box that detectors could barely find"],[475,146,"200 g charge"],[586,112,"Ground level"]],
  cap:"Tellermine (left) · S-mine (centre) · Schü-mine 42 (right) · not to scale",
  specs:[["Tellermine 42","anti-tank; 9.1 kg; 5.5 kg of TNT or amatol; 100–180 kg of pressure to fire; wells for anti-handling fuzes"],["S-mine","anti-personnel “bounding” mine; about 4.1 kg; about 360 steel balls; jumps 0.9–1.5 m before bursting; lethal to about 20 m"],["Schü-mine 42","anti-personnel; wooden box; 200 g of TNT; almost no metal"],["Atlantic Wall","almost 6 million mines laid in northern France by June 1944 (figure usually given)"],["Kursk, 1943","Soviet engineers laid about 500,000 anti-tank and 440,000 anti-personnel mines"]],
  desc:"Every army laid mines, and every advance in Europe had to get through them. German engineers sowed them in beaches, fields and road verges, at river crossings, in woods and ruined buildings, often linked to booby traps; the Red Army used them on a vast scale in its defence lines. Anti-tank mines stopped vehicles; anti-personnel mines killed and maimed infantry. Americans called the S-mine the “Bouncing Betty”. Engineers cleared paths by hand, often at night and under fire, prodding the ground with bayonets; detectors could hardly find the wooden Schü-mine. On D-Day, flail tanks of the British 79th Armoured Division beat paths through the minefields with chains.",
  pros:["Cheap and quick to lay","Slowed attackers and funnelled them into killing zones","The S-mine and Schü-mine were very hard to find","Anti-handling devices made clearance dangerous"],
  cons:["Big minefields needed time and engineers to lay","Could hamper the defenders' own counter-attacks","Determined engineers and flail tanks could clear a path","Left a deadly legacy for civilians long after the war"],
  versions:[["1935","Tellermine and S-mine enter German service."],["1942","Schü-mine 42 and Tellermine 42."],["1943","Kursk: the Soviets lay about 2,200 anti-tank and 2,500 anti-personnel mines per kilometre of front."],["1944","Rommel takes over the Atlantic Wall and multiplies its minefields and beach obstacles."]],
  story:"Before the German attack at Kursk on 5 July 1943, the Red Army built defences up to 300 km deep, with belts of minefields that channelled the panzers into anti-tank guns and artillery; most tanks lost in the great battle, including at Prokhorovka, were knocked out by guns and mines rather than by other tanks. A year later, along the Channel coast, Rommel's engineers planted mines on beaches, behind the dunes and on obstacles below the tide line. In the Hürtgen Forest that autumn, mines and booby traps in the dense woods helped make the battle one of the longest and costliest the US Army fought.",
  lugares:["Prokhorovka battlefield","Kursk Arc memorial complex","Utah Beach Museum","Batterie Todt (Atlantic Wall Museum)","Hürtgen Forest: Museum Hürtgenwald 1944"]
},

/* ======================= ARTILLERY & ROCKETS ======================= */
{
  id:"g25", cat:"art", name:"Ordnance QF 25-pounder", nick:"The field gun of British and Commonwealth artillery",
  inuse:"Whole war · the first 25-pounders, on old 18-pounder carriages, served in France in 1940",
  tl:[["25-pounder",[[0,8,2],[8,68.25,1]],[[57.17,"D-Day"],[65.23,"Veritable"]]]],
  vb:"0 0 600 230",
  svg:'<ellipse class="s" cx="300" cy="214" rx="110" ry="10"/>'+
  '<path class="s" d="M40,196 L250,140 L262,156 L60,206 Z"/><path class="s" d="M30,190 H48 V212 H30 Z"/>'+
  '<path class="s" d="M318,36 H332 V132 H318 Z"/>'+
  '<circle class="g" cx="300" cy="156" r="50"/><circle class="h" cx="300" cy="156" r="36"/><circle class="s" cx="300" cy="156" r="10"/>'+
  '<path class="s" d="M226,86 H450 V100 H226 Z"/>'+
  '<path class="s" d="M232,72 H500 V86 H232 Z"/><path class="s" d="M500,66 H526 V92 H500 Z"/>'+
  '<path class="s" d="M198,70 H232 V104 H198 Z"/><path class="s" d="M252,58 H266 V72 H252 Z"/>'+
  '<path class="br" d="M436,188 H476 V206 H436 Z"/><path class="g" d="M476,188 H526 Q548,197 526,206 H476 Z"/>',
  co:[[513,79,"Muzzle brake"],[400,79,"87.6 mm barrel"],[325,52,"Shield"],[300,156,"Wheel"],[140,172,"Box trail"],[228,214,"Round firing platform: the gun could be swung right round"],[488,197,"Shell and brass cartridge, loaded separately"],[215,87,"Breech"]],
  cap:"Calibre 87.6 mm · not to scale",
  specs:[["Calibre","87.6 mm (3.45 in)"],["Shell","about 11.3–11.5 kg (25 lb) high explosive; also smoke and armour-piercing"],["Range","about 12,250 m"],["Rate of fire","6–8 rounds a minute at the fastest rate"],["Weight","about 1.6 t"],["Crew","6"],["Built","over 13,000"]],
  desc:"Towed by a “Quad” tractor, the 25-pounder could fire like a field gun, with a flat trajectory, or lob its shells high like a howitzer. Its round firing platform, lowered under the wheels, let the crew swing it quickly in any direction. British, Canadian, Polish and other Commonwealth and Allied field regiments fired huge barrages with it to open each offensive and answered calls for fire from the infantry day and night. Self-propelled versions, the Sexton and the Bishop, carried the same gun on a tank chassis.",
  pros:["Versatile: gun and howitzer in one","Quick into action, and quick to turn on its platform","Rugged, reliable and accurate","Good rate of fire"],
  cons:["Lighter shell than the American 105 mm or the German 10.5 cm","Limited effect on concrete bunkers","Heavy to manhandle in mud","Barrels wore out under constant firing"],
  versions:[["1938–40","Mk I: 25-pounder barrels on converted 18-pounder carriages; many lost in France in 1940."],["1940","The 25-pounder Mk II on its purpose-built carriage becomes standard."],["1942 on","Muzzle brake added so it could fire armour-piercing shot with a “super” charge."],["1943–44","Sexton self-propelled gun (Canadian-built) lands in Normandy."]],
  story:"At 5 a.m. on 8 February 1945 more than 1,000 guns — 1,034 by the figure usually given, many of them 25-pounders — opened fire on the German defences of the Reichswald, between the Maas and the Rhine. It was the start of Operation Veritable, the First Canadian Army's attack from the Nijmegen–Groesbeek area into Germany. The bombardment, one of the heaviest of the war on the Western Front, lasted until the infantry moved off at 10:30, and men near the guns were deafened for hours.",
  lugares:["Freedom Museum, Groesbeek","Groesbeek Canadian War Cemetery","Juno Beach Centre","Hill 112","Dunkirk"]
},
{
  id:"flak88", cat:"art", name:"8.8 cm Flak 18/36/37 — “the 88”", nick:"An anti-aircraft gun that became the most feared anti-tank gun of the war",
  inuse:"Whole war · against aircraft over Germany and against tanks on every front",
  tl:[["88 mm Flak",[[0,68.25,1]],[[8.67,"Arras"],[58.57,"Goodwood"]]]],
  vb:"0 0 600 230",
  svg:'<path class="s" d="M60,196 H540 V206 H60 Z"/><path class="s" d="M50,190 H74 V212 H50 Z"/><path class="s" d="M526,190 H550 V212 H526 Z"/>'+
  '<path class="s" d="M250,150 H330 V196 H250 Z"/>'+
  '<g transform="rotate(-10 300 130)"><rect class="s" x="210" y="120" width="380" height="12"/><rect class="s" x="210" y="110" width="170" height="32"/><rect class="s" x="176" y="112" width="34" height="30"/><rect class="s" x="586" y="116" width="12" height="20"/></g>'+
  '<path class="s" d="M338,66 H374 V160 H338 Z"/>'+
  '<path class="br" d="M40,40 H120 V56 H40 Z"/><path class="g" d="M120,40 Q150,48 120,56 Z"/>',
  co:[[480,96,"8.8 cm barrel (L/56)"],[356,86,"Shield"],[290,176,"Pedestal: it could turn a full circle"],[130,201,"Cross-shaped platform, levelled on jacks"],[192,146,"Breech"],[80,48,"Round: shell of about 9–9.4 kg"]],
  cap:"Flak 36 in firing position · not to scale",
  specs:[["Calibre","88 mm"],["Shell","about 9–9.4 kg (high explosive)"],["Muzzle velocity","about 820–840 m/s"],["Rate of fire","15–20 rounds a minute"],["Range","about 14,800 m against ground targets; effective ceiling about 8,000 m"],["Weight in action","about 5–7.4 t, depending on model and source"],["Crew","up to 10"]],
  desc:"Designed to shoot down aircraft, the 88 fired a heavy shell very fast and very flat — which made it deadly against tanks at ranges where they could barely reply. Thousands defended German cities against the bomber offensive, many manned by teenage Luftwaffe auxiliaries; others were used in the front line. It was a big, tall gun and hard to hide. The dedicated Pak 43 anti-tank gun and the Tiger's gun used the same calibre, and Allied soldiers tended to call any German high-velocity gun “an 88”.",
  pros:["Flat trajectory and long reach against tanks","Two roles: aircraft and ground targets","Fast-firing for its size","Heavy, effective high-explosive shell"],
  cons:["Tall and hard to conceal","Heavy: needed a tractor and time to set up","Crew exposed behind a thin shield","Vulnerable to artillery once spotted"],
  versions:[["1933","Flak 18 enters service; tried against ground targets in the Spanish Civil War."],["1936–37","Flak 36 and Flak 37: improved carriage and fire control."],["May 1940","At Arras, 88s help stop the British counter-attack against Rommel's division."],["1943–45","The Pak 43 anti-tank gun and the Tiger's KwK 36 use the same 88 mm calibre; the more powerful Flak 41 defends the Reich."]],
  story:"On 18 July 1944, in Operation Goodwood, three British armoured divisions attacked south-east of Caen after a huge air bombardment. At Cagny, a battery of four Luftwaffe 88 mm flak guns survived the bombing and, with anti-tank guns, knocked out at least a dozen tanks of the Fife and Forfar Yeomanry in a few minutes; more 88s and anti-tank guns waited on Bourguébus Ridge. Estimates of British tank losses in the three days range from about 250 to over 400, many of them later repaired.",
  lugares:["Caen Memorial","Museum of the Battle of Normandy, Bayeux","Hill 112","St Nikolai Memorial, Hamburg","Topography of Terror, Berlin"]
},
{
  id:"nebel", cat:"art", name:"Rocket launchers: Nebelwerfer and Katyusha", nick:"“Moaning Minnie” to the British, “Screaming Mimi” to the Americans — and “Stalin's organ” to the Germans",
  inuse:"Nebelwerfer from 1941 · Katyusha from July 1941 · both to the end of the war",
  tl:[["Nebelwerfer",[[21.7,68.25,1]],[[57.17,"Normandy"]]],["Katyusha",[[22.43,25,2],[25,68.25,1]],[[22.43,"first salvo"],[67.5,"Seelow"]]]],
  vb:"0 0 600 336",
  svg:'<path class="dl" d="M262,152 Q180,120 30,122"/>'+
  '<path class="lt" d="M280,170 L60,198"/>'+
  '<g transform="rotate(-28 330 130)"><rect class="s" x="250" y="84" width="260" height="20"/><rect class="s" x="250" y="104" width="260" height="20"/><rect class="s" x="250" y="124" width="260" height="20"/><path class="s" d="M500,80 H514 V148 H500 Z"/><path class="s" d="M250,80 H262 V148 H250 Z"/></g>'+
  '<circle class="g" cx="300" cy="172" r="36"/><circle class="h" cx="300" cy="172" r="25"/><circle class="s" cx="300" cy="172" r="7"/>'+
  '<path class="g" d="M430,190 H530 Q560,190 572,198 Q560,206 530,206 H430 Z"/><path class="br" d="M486,188 H496 V208 H486 Z"/><path class="l" d="M430,192 L418,186 M430,204 L418,210"/>'+
  '<path class="s" d="M60,294 H570 V302 H60 Z"/>'+
  '<path class="o" d="M440,258 H496 L516,278 V296 H440 Z"/><path class="k" d="M474,264 H494 L508,278 H474 Z"/>'+
  '<path class="o" d="M516,276 H566 V296 H516 Z"/>'+
  '<path class="s" d="M296,246 L314,294 H278 Z"/>'+
  '<g transform="rotate(-12 80 290)"><rect class="s" x="80" y="262" width="320" height="7"/><rect class="s" x="80" y="272" width="320" height="7"/><rect class="s" x="80" y="282" width="320" height="7"/></g>'+
  '<g class="g"><circle cx="110" cy="310" r="16"/><circle cx="150" cy="310" r="16"/><circle cx="530" cy="310" r="16"/></g>'+
  '<g class="h"><circle cx="110" cy="310" r="6"/><circle cx="150" cy="310" r="6"/><circle cx="530" cy="310" r="6"/></g>',
  co:[[372,110,"Nebelwerfer 41: six launch tubes, fired one after another"],[300,172,"Two-wheeled carriage"],[150,186,"Trail"],[40,122,"Fired electrically, with the crew under cover"],[530,198,"15 cm rocket: motor in front, warhead behind"],[200,252,"Katyusha (BM-13): rails for 16 rockets of 132 mm"],[490,318,"Truck: ZiS-6, and from 1942 the US Studebaker"]],
  cap:"15 cm Nebelwerfer 41 (top) · BM-13 Katyusha (bottom) · not to scale",
  specs:[["Nebelwerfer","15 cm Nebelwerfer 41 (six tubes); also the five-tube 21 cm Nebelwerfer 42"],["Nebelwerfer rocket","15 cm: about 32 kg (high explosive), 2.5 kg of explosive; range up to 6,900 m (21 cm: 7,850 m)"],["Nebelwerfer crew","5; launcher about 770 kg loaded"],["Katyusha BM-13","16 rails on a truck; M-13 rocket 132 mm, about 42 kg, warhead about 4.9 kg"],["Katyusha range","up to about 8.5 km"],["Katyusha salvo","a battery of four launchers fired in 7–10 seconds; reloading took several minutes"],["Built","Katyusha launchers of all types: about 10,000 by 1945 (sources differ widely)"]],
  desc:"Rockets were less accurate than shells, but a single launcher could put a whole salvo in the air in seconds, drenching an area with blast before anyone could take cover. “Nebelwerfer” means “smoke launcher” — a cover name from the days when German rockets were officially for smoke screens. The Soviet Katyusha, carried on a truck, could fire its 16 rockets, drive away before the enemy replied, and come back to fire again. Massed by the hundred, Katyushas opened every great Soviet offensive from 1942 to Berlin. Both weapons howled in flight, which gave them their nicknames.",
  pros:["Sudden, concentrated blast over a wide area","Cheaper and lighter than guns of similar effect","Katyusha: mobile — fire and drive away","Terrifying noise"],
  cons:["Less accurate than artillery","Smoke trails and dust revealed the launch site","Slow to reload","Rockets were bulky to supply"],
  versions:[["1941","15 cm Nebelwerfer 41 enters service; Katyusha's first salvo, 14 July 1941."],["1942","21 cm Nebelwerfer 42; Katyusha guards mortar regiments formed."],["1943","Studebaker trucks become the standard Katyusha mount (BM-13N)."],["1944–45","Nebelwerfer brigades in Normandy; Katyushas massed in hundreds for the Vistula–Oder and Berlin offensives."]],
  story:"On 14 July 1941, three weeks into the German invasion, an experimental battery of seven launchers under Captain Ivan Flyorov fired the first Katyusha salvoes of the war near Orsha and Rudnya (sources differ on the exact targets). Three and a half years later, before dawn on 16 April 1945, thousands of guns, mortars and Katyushas opened the Soviet attack on the Seelow Heights, the last German defence line on the road to Berlin. The heights fell after three days of fighting.",
  lugares:["Seelow Heights Memorial","Victory Museum, Poklonnaya Hill","Museum Berlin-Karlshorst","Hill 112","Bastogne War Museum"]
},

/* ======================= ARMOUR ======================= */
{
  id:"sherman", cat:"arm", name:"M4 Sherman medium tank", nick:"The tank of the Western Allies, built in tens of thousands",
  inuse:"In Europe from Sicily (July 1943) to the end · 17-pounder Firefly from June 1944",
  tl:[["Sherman",[[46.3,68.25,1]],[[57.17,"D-Day"],[63.83,"Bastogne"]]],["Sherman Firefly",[[57.17,68.25,1]],[[61,"Overloon"]]]],
  vb:"0 0 600 230",
  svg:'<path class="g" d="M40,172 Q34,206 64,212 H524 Q560,208 558,172 Q546,150 520,150 H70 Q44,152 40,172 Z"/>'+
  '<g class="h"><circle cx="112" cy="194" r="15"/><circle cx="150" cy="194" r="15"/><circle cx="252" cy="194" r="15"/><circle cx="290" cy="194" r="15"/><circle cx="392" cy="194" r="15"/><circle cx="430" cy="194" r="15"/></g>'+
  '<g class="s"><path d="M112,172 H150 V182 H112 Z"/><path d="M252,172 H290 V182 H252 Z"/><path d="M392,172 H430 V182 H392 Z"/></g>'+
  '<circle class="s" cx="522" cy="172" r="18"/><circle class="s" cx="62" cy="178" r="14"/>'+
  '<path class="o" d="M60,152 L72,100 H400 L522,142 L522,154 H60 Z"/>'+
  '<path class="o" d="M200,100 Q205,58 260,54 H330 Q360,56 368,100 Z"/>'+
  '<path class="s" d="M240,42 H280 V56 H240 Z"/>'+
  '<path class="s" d="M364,64 H386 V94 H364 Z"/><path class="s" d="M386,74 H560 V82 H386 Z"/>'+
  '<path class="s" d="M466,114 H496 V122 H466 Z"/>',
  co:[[480,78,"75 mm gun (76 mm or British 17-pounder on later versions)"],[290,80,"Turret: armour up to about 76 mm at the front"],[430,132,"Sloped front armour"],[522,172,"Drive sprocket at the front"],[131,172,"Bogie with two road wheels"],[260,30,"Commander's hatch"],[120,126,"Engine at the back"]],
  cap:"M4 with 75 mm gun · about 5.8 m long (hull)",
  specs:[["Weight","about 30 t"],["Crew","5"],["Main gun","75 mm M3; later 76 mm; British Firefly: 17-pounder"],["Armour","about 51 mm on the sloped front hull; about 76 mm on the turret front"],["Engine","several types, petrol or diesel (e.g. radial petrol, twin diesels)"],["Speed","about 38–40 km/h on roads"],["Built","about 49,000 (1942–45)"]],
  desc:"Reliable, easy to repair and built in enormous numbers, the Sherman equipped American, British, Canadian, Free French and Polish armoured divisions in north-west Europe, and several thousand went to the Red Army under Lend-Lease. Its 75 mm gun could not easily knock out a Tiger or Panther from the front, and early models caught fire easily when hit, a problem later reduced by armoured and “wet” ammunition stowage. The British answer was the Firefly, a Sherman with the powerful 17-pounder gun: usually one in each troop of four in 1944. Special versions swam ashore on D-Day (the DD tank) or beat paths through minefields with flails (the Crab).",
  pros:["Reliable, and easy to maintain and repair in the field","Good high-explosive shell for supporting the infantry","Fast turret traverse: it often got the first shot","Built in huge numbers, so losses were quickly replaced"],
  cons:["75 mm gun too weak against Tiger and Panther front armour","Tall, and early models caught fire easily","Thinner armour than the German heavy tanks","Narrow tracks bogged down in mud and snow"],
  versions:[["1942","Shermans in action with the British at El Alamein."],["Jun 1944","Firefly with the 17-pounder, and DD swimming Shermans, land in Normandy."],["1944","Versions with the 76 mm gun and “wet” ammunition stowage arrive."],["1945","M4A3E8 “Easy Eight” with wider tracks and better suspension."]],
  story:"On 26 December 1944 the leading Shermans of the 37th Tank Battalion, 4th Armored Division, broke through to the encircled garrison of Bastogne, ending the siege. A Sherman of the 11th Armored Division, knocked out near Renuamont on 30 December 1944, now stands in McAuliffe Square in the town. At Overloon, in October 1944, British Shermans and Churchills fought one of the biggest tank battles fought on Dutch soil; the museum there grew from the wrecks left on the battlefield.",
  lugares:["Bastogne (Sherman in McAuliffe Square) and Bastogne Barracks","Overloon War Museum","Juno Beach Centre","Utah Beach Museum","National Museum of Military History, Diekirch"]
},
{
  id:"t34", cat:"arm", name:"T-34 medium tank", nick:"The Soviet tank that shocked the Germans in 1941 and rolled into Berlin in 1945",
  inuse:"T-34/76 from 1940 · T-34-85 from early 1944 · to the end of the war",
  tl:[["T-34/76",[[12.5,21.7,2],[21.7,68.25,1]],[[27.13,"Moscow"],[46.37,"Prokhorovka"]]],["T-34-85",[[52.5,56,2],[56,68.25,1]],[[67.5,"Berlin"]]]],
  vb:"0 0 600 230",
  svg:'<path class="g" d="M40,170 Q34,208 66,212 H526 Q560,208 556,170 Q546,150 520,150 H70 Q46,152 40,170 Z"/>'+
  '<g class="h"><circle cx="110" cy="186" r="25"/><circle cx="200" cy="186" r="25"/><circle cx="290" cy="186" r="25"/><circle cx="380" cy="186" r="25"/><circle cx="470" cy="186" r="25"/></g>'+
  '<g class="s"><circle cx="110" cy="186" r="8"/><circle cx="200" cy="186" r="8"/><circle cx="290" cy="186" r="8"/><circle cx="380" cy="186" r="8"/><circle cx="470" cy="186" r="8"/></g>'+
  '<circle class="s" cx="58" cy="170" r="16"/><circle class="s" cx="536" cy="170" r="16"/>'+
  '<path class="o" d="M40,152 L70,104 H420 L540,146 L540,154 Z"/>'+
  '<path class="s" d="M48,124 H62 V138 H48 Z"/>'+
  '<path class="s" d="M452,112 L480,122 L476,132 L448,122 Z"/><circle class="s" cx="504" cy="134" r="5"/>'+
  '<path class="o" d="M230,104 L240,66 Q244,56 262,56 H360 Q378,58 386,74 L392,104 Z"/>'+
  '<path class="s" d="M266,44 H300 V56 H266 Z"/>'+
  '<path class="s" d="M386,70 H406 V96 H386 Z"/><path class="s" d="M406,78 H586 V87 H406 Z"/>',
  co:[[500,66,"85 mm gun (76.2 mm on the T-34/76)"],[316,84,"Turret: three men in the T-34-85, only two in the T-34/76"],[494,112,"Sloped front armour: 45 mm at 60°"],[290,186,"Five large road wheels on Christie-type coil springs"],[58,170,"Drive sprocket at the rear"],[130,126,"V-2 diesel engine at the back"],[200,222,"Wide tracks for mud and snow"]],
  cap:"T-34-85 · about 6.1 m long (hull) · not to scale",
  specs:[["Weight","T-34/76 (1941): about 26.5 t · T-34-85: about 32 t"],["Crew","4 (T-34/76) · 5 (T-34-85)"],["Main gun","76.2 mm F-34 · 85 mm ZiS-S-53 on the T-34-85"],["Armour","hull front 45 mm sloped at 60°; turret front 45–90 mm depending on version"],["Engine","V-2 V-12 diesel, 500 hp"],["Speed","about 50 km/h on roads"],["Built","about 84,000 of all versions by 1946 (figures vary between sources)"]],
  desc:"When the Germans met the T-34 in the summer of 1941 they had nothing that could easily stop it: its sloped armour deflected their shells, its gun outranged theirs, and its wide tracks and diesel engine carried it through mud and snow. Early T-34s had poor radios, poor visibility and a two-man turret in which the commander also had to aim and fire the gun. The Soviet answer was to simplify it and build it in astonishing numbers, in factories moved east beyond the Urals. From 1944 the T-34-85, with a bigger turret and gun, could take on the Panther and Tiger at a reasonable range.",
  pros:["Sloped armour: hard to penetrate in 1941","Wide tracks: excellent in mud and snow","Reliable diesel engine, less likely to burn than petrol","Simple, cheap and built in enormous numbers"],
  cons:["Two-man turret on the T-34/76: the commander was overloaded","Few radios early on, and poor vision from inside","Cramped, with rough finish and a hard gearbox","Outgunned by the Tiger and Panther in 1943"],
  versions:[["1940","First production T-34s completed in September."],["1941–42","Factories evacuated east; production simplified and expanded (Kharkov, Stalingrad, Nizhny Tagil)."],["1942–43","Hexagonal turret; commander's cupola added in 1943."],["Jan 1944","T-34-85 enters production: three-man turret, 85 mm gun."]],
  story:"On 12 July 1943, near the village of Prokhorovka on the southern face of the Kursk salient, the 5th Guards Tank Army — about two-thirds T-34s, most of the rest light T-70s — charged the tanks of the II SS Panzer Corps. Soviet losses that day are estimated at 300–400 tanks and assault guns, German losses at 60–80 damaged and only a handful destroyed; but the Germans did not break through, and within days Hitler called off the offensive. Two T-34s now flank the Soviet War Memorial in Berlin's Tiergarten, a few hundred metres from the Reichstag.",
  lugares:["Prokhorovka battlefield","Kursk Arc memorial complex","Soviet War Memorial, Tiergarten","Seelow Heights Memorial","Overloon War Museum (running T-34)"]
},
{
  id:"panzer4", cat:"arm", name:"Panzer IV medium tank (and the Panther)", nick:"The German army's workhorse, the only German tank built all through the war",
  inuse:"Panzer IV whole war · Panther from Kursk (July 1943) to the end",
  tl:[["Panzer IV",[[0,68.25,1]],[[8.4,"Sedan"],[57.17,"Normandy"]]],["Panther",[[46.13,48,2],[48,68.25,1]],[[46.13,"Kursk"],[63.5,"Ardennes"]]]],
  vb:"0 0 600 230",
  svg:'<path class="g" d="M40,172 Q34,208 66,212 H524 Q560,208 556,172 Q546,152 520,152 H70 Q44,154 40,172 Z"/>'+
  '<g class="h"><circle cx="104" cy="196" r="14"/><circle cx="134" cy="196" r="14"/><circle cx="204" cy="196" r="14"/><circle cx="234" cy="196" r="14"/><circle cx="304" cy="196" r="14"/><circle cx="334" cy="196" r="14"/><circle cx="404" cy="196" r="14"/><circle cx="434" cy="196" r="14"/></g>'+
  '<g class="s"><circle cx="160" cy="160" r="5"/><circle cx="260" cy="160" r="5"/><circle cx="360" cy="160" r="5"/><circle cx="460" cy="160" r="5"/></g>'+
  '<circle class="s" cx="528" cy="170" r="17"/><circle class="s" cx="60" cy="172" r="15"/>'+
  '<path class="o" d="M44,152 V112 H76 V100 H470 L530,110 L540,130 V152 Z"/>'+
  '<path class="s" d="M470,104 H484 V112 H470 Z"/>'+
  '<path class="dl" d="M84,110 H500 V156 H84 Z"/>'+
  '<path class="o" d="M196,100 L206,62 H340 L356,78 L360,100 Z"/>'+
  '<path class="s" d="M214,48 H246 V62 H214 Z"/>'+
  '<path class="s" d="M356,70 H372 V92 H356 Z"/><path class="s" d="M372,77 H560 V85 H372 Z"/><path class="s" d="M560,73 H580 V89 H560 Z"/>',
  co:[[470,62,"7.5 cm gun: short L/24 until 1942, then the long L/43 and L/48"],[570,104,"Muzzle brake"],[280,82,"Turret, with the commander's cupola at the back"],[230,30,"Commander's cupola"],[150,132,"Armour skirts (dashed), fitted from 1943 against anti-tank rifles"],[270,212,"Eight small road wheels on leaf springs"],[528,170,"Drive sprocket at the front"]],
  cap:"Panzer IV Ausf. H with skirts · about 5.9 m long (hull) · not to scale",
  specs:[["Weight","about 25 t (Ausf. H)"],["Crew","5"],["Main gun","7.5 cm KwK 37 L/24 (to 1942); KwK 40 L/43, then L/48 (from 1943)"],["Armour","80 mm on the hull front (Ausf. H)"],["Engine","Maybach HL 120 V-12 petrol, 300 PS"],["Speed","about 38–42 km/h on roads"],["Built","about 8,550 (1936–45)"],["Panther","44.8 t; 7.5 cm KwK 42 L/70; 80 mm front plate sloped at 55°; 700 PS; about 6,000 built"]],
  desc:"Planned in the 1930s as a support tank with a short gun for firing high explosive, the Panzer IV was rearmed in 1942 with a long 75 mm gun and became the backbone of the panzer divisions — the only German tank in production from the first day of the war to the last. In 1943 it was joined by the Panther, a heavier tank with sloped armour inspired by the T-34 and a very long, high-velocity 75 mm gun. Once its early mechanical troubles were overcome the Panther was one of the best tanks of the war, but it was costly and complex, and fewer than 6,000 were built.",
  pros:["Panzer IV: reliable, well understood, easy to upgrade","Long 75 mm gun could knock out a Sherman or T-34 at normal ranges","Panther: heavy sloped front armour and a superb gun","Good optics and radios in both"],
  cons:["Panzer IV: flat armour, vulnerable from the side","Panzer IV: overloaded by its upgrades, with a slow turret","Panther: complex and costly, with fragile final drives","Panther: thinner side armour, and first used before it was ready"],
  versions:[["1936","First Panzer IVs built, with the short 75 mm gun."],["Spring 1942","Ausf. F2/G: long 75 mm gun, now a match for the T-34."],["Jul 1943","Panther in action at Kursk: of 184 ready on 5 July, only 40 still running two days later."],["1944–45","Panthers make up about half the tanks of many panzer divisions in Normandy and the Ardennes."]],
  story:"At Houffalize, in the Belgian Ardennes, a Panther of the 116th Panzer Division ended up upside-down in the River Ourthe in the centre of the town during the Battle of the Bulge, probably in December 1944 or January 1945; accounts differ on whether it slid off the road or a damaged bridge gave way. Belgian army engineers pulled it out in 1948 and it now stands as a memorial by the river. Another Panther, knocked out in the fighting at Overloon in October 1944, is displayed in the Overloon War Museum.",
  lugares:["Houffalize and its Panther tank","Overloon War Museum","Prokhorovka battlefield","Sedan","Hill 112"]
},
{
  id:"tiger", cat:"arm", name:"Tiger I and Tiger II (King Tiger) heavy tanks", nick:"Few in number, but the most feared German tanks of the war",
  inuse:"Tiger I from late summer 1942 to 1945 · Tiger II from mid-1944",
  tl:[["Tiger I",[[35.9,68.25,2]],[[46.13,"Kursk"],[57.4,"Villers-Bocage"]]],["Tiger II",[[58,68.25,2]],[[63.7,"La Gleize"]]]],
  vb:"0 0 600 230",
  svg:'<path class="g" d="M36,168 Q30,208 64,212 H530 Q566,208 562,168 Q550,146 526,146 H64 Q40,148 36,168 Z"/>'+
  '<g class="h"><circle cx="86" cy="190" r="21"/><circle cx="130" cy="190" r="21"/><circle cx="174" cy="190" r="21"/><circle cx="218" cy="190" r="21"/><circle cx="262" cy="190" r="21"/><circle cx="306" cy="190" r="21"/><circle cx="350" cy="190" r="21"/><circle cx="394" cy="190" r="21"/><circle cx="438" cy="190" r="21"/><circle cx="482" cy="190" r="21"/></g>'+
  '<circle class="s" cx="530" cy="168" r="18"/><circle class="s" cx="56" cy="166" r="15"/>'+
  '<path class="o" d="M40,148 V104 H470 L540,118 V150 Z"/>'+
  '<path class="o" d="M170,104 V64 Q172,54 190,54 H380 Q394,56 396,68 V104 Z"/>'+
  '<path class="s" d="M210,42 H250 V54 H210 Z"/>'+
  '<path class="s" d="M392,60 H416 V100 H392 Z"/><path class="s" d="M416,74 H570 V82 H416 Z"/><path class="s" d="M570,68 H590 V88 H570 Z"/>',
  co:[[500,78,"8.8 cm gun, from the same family as the “88”"],[290,80,"Turret: 100 mm of frontal armour"],[100,126,"Thick, flat, almost vertical armour plates"],[284,190,"Large overlapping road wheels"],[530,168,"Drive sprocket at the front"],[230,30,"Commander's cupola"]],
  cap:"Tiger I · about 6.3 m long (hull)",
  specs:[["Weight","Tiger I 54–57 t · Tiger II about 68–70 t"],["Crew","5"],["Main gun","Tiger I: 8.8 cm KwK 36 L/56 · Tiger II: 8.8 cm KwK 43 L/71"],["Armour","Tiger I: 100 mm on the hull and turret front · Tiger II: 150 mm sloped hull front, 180 mm turret front"],["Engine","Maybach V-12 petrol, about 700 PS"],["Speed","Tiger I about 38–45 km/h on roads; 20–25 km/h cross-country"],["Built","Tiger I 1,347 (1942–44) · Tiger II 492 (1943–45)"]],
  desc:"Tigers served in independent heavy tank battalions, sent wherever the crisis was worst. Their thick armour and powerful 88 mm guns meant they could knock out a Sherman or T-34 at long range and shrug off most return fire from the front. They were heavy for bridges and roads, used a great deal of fuel and broke down often: many were lost to breakdowns, or blown up by their own crews during retreats, rather than to enemy fire. The Tiger II or King Tiger of 1944, with sloped armour and an even longer gun, was almost invulnerable from the front but even more fragile mechanically.",
  pros:["Powerful, accurate 88 mm gun","Very thick front armour","Excellent sights","Huge effect on Allied morale: “Tiger fear”"],
  cons:["Mechanically unreliable and hard to recover","Too heavy for many bridges and roads","Very thirsty","Slow turret traverse; expensive and few in number"],
  versions:[["Aug–Sep 1942","Tiger I first in action near Mga, south-east of Leningrad: several break down or bog in the marshes."],["Jul 1943","Kursk: Tiger battalions and the Tiger companies of the SS panzer divisions."],["Jun–Jul 1944","Normandy: s.SS-Pz.Abt. 101 at Villers-Bocage; first Tiger IIs in action."],["Dec 1944","Tiger IIs with Kampfgruppe Peiper and s.SS-Pz.Abt. 501 in the Ardennes."]],
  story:"On 13 June 1944, a week after D-Day, Michael Wittmann's Tigers of the 101st SS Heavy Panzer Battalion ambushed the British 7th Armoured Division at Villers-Bocage, destroying 23–27 tanks and many other vehicles in one of the most famous tank actions of the war. In the Ardennes six months later, Kampfgruppe Peiper ran out of fuel at La Gleize and abandoned its vehicles. King Tiger 213, its gun barrel broken by an American shell on 22 December 1944, was left in a meadow; local people asked the Americans to leave it in the village, where it still stands beside the December 44 Museum.",
  lugares:["December 44 Historical Museum and King Tiger 213, La Gleize","Museum of the Battle of Normandy, Bayeux","Hill 112","Prokhorovka battlefield","Kursk Arc memorial complex"]
},

/* ======================= AIRCRAFT ======================= */
{
  id:"spitfire", cat:"air", name:"Supermarine Spitfire (and Hawker Hurricane)", nick:"The fighters of the Battle of Britain",
  inuse:"Whole war · Spitfire in RAF service from August 1938 · Hurricane from December 1937",
  tl:[["Spitfire",[[0,68.25,1]],[[8.83,"Dunkirk"],[12.47,"15 Sep 1940"]]],["Hurricane",[[0,44,1],[44,68.25,2]],[[10.3,"Battle of Britain"]]]],
  vb:"0 0 600 210",
  svg:'<path class="o" d="M30,98 Q60,92 120,90 L440,84 Q500,82 540,92 L548,100 Q520,112 470,112 L140,108 Q70,106 30,104 Z"/>'+
  '<path class="o" d="M40,96 Q36,40 70,36 Q100,40 112,92 Z"/>'+
  '<path class="o" d="M24,98 Q60,94 116,98 L116,104 Q60,106 24,102 Z"/>'+
  '<path class="k" d="M330,84 Q340,62 372,60 Q400,62 412,84 Z"/><path class="l" d="M396,62 L412,84"/>'+
  '<path class="o" d="M280,102 Q330,96 470,100 L460,112 L290,112 Z"/>'+
  '<path class="s" d="M330,112 H388 L384,126 H334 Z"/>'+
  '<path class="s" d="M440,102 H500 V105 H440 Z"/>'+
  '<g class="s"><rect x="460" y="88" width="8" height="5"/><rect x="474" y="88" width="8" height="5"/><rect x="488" y="88" width="8" height="5"/></g>'+
  '<circle class="h" cx="220" cy="98" r="9"/><circle class="s" cx="220" cy="98" r="4"/>'+
  '<path class="s" d="M548,92 Q574,98 548,106 Z"/><path class="s" d="M560,40 H566 V158 H560 Z"/>'+
  '<path class="o" d="M150,176 Q300,140 450,176 Q300,206 150,176 Z"/><path class="o" d="M290,150 Q300,144 310,150 V204 H290 Z"/>',
  co:[[372,40,"Bubble canopy over the single pilot"],[506,70,"Rolls-Royce Merlin V-12 engine"],[470,126,"Mk I: eight .303 Browning machine guns in the wings"],[358,140,"Radiator under the wing"],[76,62,"Rounded tail fin"],[220,98,"RAF roundel"],[200,186,"Inset, seen from above: the thin elliptical wing"]],
  cap:"Spitfire Mk I · span 11.23 m · not to scale",
  specs:[["Crew","1"],["Engine","Rolls-Royce Merlin (Mk I about 1,030 hp); later Griffon, up to about 2,000 hp and more"],["Top speed","Mk I about 350–360 mph (560–580 km/h); later marks over 440 mph"],["Armament","Mk I: eight .303 Browning machine guns · later: two 20 mm cannon plus machine guns"],["Span","11.23 m"],["Built","20,351 of all marks"],["Hurricane","eight .303 Brownings; Mk I about 315 mph (507 km/h); 14,487 built (with Sea Hurricanes)"]],
  desc:"The Spitfire's thin elliptical wing and Merlin engine made it one of the fastest and most agile fighters of 1940, and it was steadily developed until the end of the war. In the Battle of Britain, however, the more numerous Hawker Hurricane — older, simpler and easier to repair — shot down more German aircraft: Fighter Command credited it with about 55 per cent of German losses, against 42 per cent for the Spitfire. The usual tactic was for Spitfires to take on the escorting fighters while Hurricanes went for the bombers.",
  pros:["Spitfire: fast, agile, with a tight turn","Room to grow: from about 1,000 hp in 1938 to over 2,000 hp","Hurricane: steady gun platform, tough and easy to repair","Both linked to radar and ground control through the “Dowding system”"],
  cons:["Mk I's carburettor engine cut out in a sudden dive, unlike the fuel-injected Bf 109","Eight .303 guns lacked hitting power against armoured bombers","Short range: little use as a bomber escort deep into Germany","Spitfire: complex and slow to build at first"],
  versions:[["Aug 1938","No. 19 Squadron at Duxford receives the first Spitfires."],["1940","Spitfire Mk I and II, Hurricane Mk I in the Battle of Britain."],["1942","Spitfire Mk IX, with a two-stage Merlin, answers the Focke-Wulf Fw 190."],["1943–45","Griffon-engined Spitfires; Spitfire XIVs shoot down V-1 flying bombs."]],
  story:"On 15 September 1940, now marked as Battle of Britain Day, the Luftwaffe sent two great raids against London. Directed by radar and by the controllers in the bunker at Uxbridge, where Churchill watched the plotting table, Fighter Command met them with every squadron of No. 11 Group and the “Big Wing” from Duxford. German losses were far heavier than the RAF's, though much lower than the 185 claimed at the time, and two days later Hitler postponed the invasion of Britain indefinitely.",
  lugares:["IWM Duxford","Battle of Britain Bunker, Uxbridge","RAF Manston Spitfire & Hurricane Memorial Museum","Biggin Hill Memorial Museum","Battle of Britain Memorial, Capel-le-Ferne","Lascaris War Rooms, Valletta"]
},
{
  id:"bf109", cat:"air", name:"Messerschmitt Bf 109", nick:"The Luftwaffe's standard fighter, from Poland to the fall of Berlin",
  inuse:"Whole war · Bf 109E in 1939–41, Bf 109F and G from 1941, K in 1944–45",
  tl:[["Bf 109",[[0,68.25,1]],[[11.57,"18 Aug 1940"],[53.63,"Big Week"]]]],
  vb:"0 0 600 210",
  svg:'<path class="o" d="M30,96 L120,88 L440,80 Q500,78 540,88 L546,100 Q520,110 470,112 L130,106 L30,102 Z"/>'+
  '<path class="o" d="M38,94 L50,46 Q60,38 80,40 L100,88 Z"/>'+
  '<path class="o" d="M20,84 H104 V90 H20 Z"/><path class="l" d="M64,90 L80,100"/>'+
  '<path class="k" d="M320,82 L332,62 H400 L420,80 Z"/><path class="l" d="M350,62 V82 M384,62 V81"/>'+
  '<path class="o" d="M290,100 Q330,96 460,98 L450,110 L296,110 Z"/>'+
  '<path class="s" d="M340,110 H390 L386,120 H344 Z"/>'+
  '<path class="s" d="M480,108 H520 L514,118 H484 Z"/>'+
  '<path class="s" d="M440,96 H460 V104 H440 Z"/>'+
  '<g class="s"><rect x="470" y="86" width="8" height="5"/><rect x="484" y="86" width="8" height="5"/><rect x="498" y="86" width="8" height="5"/></g>'+
  '<path class="h" d="M206,90 H228 V104 H206 Z"/><path class="s" d="M213,90 H221 V104 H213 Z M206,94 H228 V100 H206 Z"/>'+
  '<path class="s" d="M546,90 Q568,96 546,104 Z"/><path class="s" d="M556,40 H562 V158 H556 Z"/>'+
  '<path class="o" d="M150,172 L290,156 H310 L450,172 L450,184 L310,192 H290 L150,184 Z"/>',
  co:[[366,44,"Heavily framed canopy"],[504,64,"Daimler-Benz inverted V-12 with fuel injection"],[500,128,"Oil cooler under the nose"],[364,134,"Radiators under the wings"],[62,64,"Tail fin; on the E, a strut braces the tailplane"],[216,74,"Balkenkreuz"],[196,196,"Inset, seen from above: straight, tapered wing with square tips (E)"]],
  cap:"Bf 109E · span 9.9 m · not to scale",
  specs:[["Crew","1"],["Engine","Daimler-Benz DB 601 (E, about 1,100 PS); DB 605 (G, about 1,475 PS)"],["Top speed","E: about 560–570 km/h; G-6: about 630–640 km/h at altitude"],["Armament","E: two 7.92 mm machine guns and two 20 mm cannon · G-6: two 13 mm machine guns and one 20 mm or 30 mm cannon"],["Range","E: about 660 km — about an hour's flying, leaving only minutes over London"],["Built","about 34,000 (1936–45), more than any other fighter of the war"]],
  desc:"The Bf 109 was a small, light fighter built around the most powerful engine available, and it was continually upgraded from the Spanish Civil War to 1945. Its fuel-injected engine kept running in a sudden dive, where the early Merlin coughed. Over Britain in 1940 its short range was its great weakness: escorting bombers to London, German pilots had only a few minutes before they had to turn for home. Later it fought the American bomber streams over Germany, and on the Eastern Front pilots such as Erich Hartmann, credited with 352 victories, flew it to the highest scores in history.",
  pros:["Fast-climbing, with a powerful, fuel-injected engine","Cannon armament from the E model on","Small and hard to see","Built in huge numbers, and constantly improved"],
  cons:["Short range: barely reached London from France","Narrow undercarriage: thousands damaged in take-off and landing accidents","Cramped cockpit with poor rearward view","Later versions heavier and harder to handle"],
  versions:[["1939–40","Bf 109E (“Emil”) in Poland, France and the Battle of Britain."],["1941","Bf 109F: more streamlined, faster."],["1942–44","Bf 109G (“Gustav”): the most numerous version; the G-6 fights the US bombers."],["1944–45","Bf 109K, the last wartime version."]],
  story:"During the Battle of Britain a Bf 109E with engine trouble made a belly landing in a field in Sussex; and its pilot was captured. Today it is displayed at IWM Duxford, set out as it lay in the field, under guard — one of the very few Bf 109s that flew in the Battle of Britain to survive. Duxford's airfield was itself a Fighter Command station in 1940, home of the “Big Wing”.",
  lugares:["IWM Duxford","Battle of Britain Memorial, Capel-le-Ferne","Battle of Britain Bunker, Uxbridge","Biggin Hill Memorial Museum","Lascaris War Rooms, Valletta","Maleme, Crete"]
},
{
  id:"stuka", cat:"air", name:"Junkers Ju 87 “Stuka” dive-bomber", nick:"The screaming dive-bomber of the Blitzkrieg",
  inuse:"From the first minutes of the war · withdrawn from daylight attacks over Britain in August 1940 · anti-tank Ju 87G from 1943",
  tl:[["Ju 87 Stuka",[[0,48,1],[48,68.25,2]],[[0.03,"Westerplatte"],[8.4,"Sedan"],[11.57,"Britain: withdrawn"]]]],
  vb:"0 0 600 220",
  svg:'<path class="o" d="M60,92 L100,86 L470,78 Q520,76 548,86 L556,98 Q540,112 500,112 L120,108 L60,100 Z"/>'+
  '<path class="o" d="M40,40 L72,40 L104,88 L60,92 Z"/>'+
  '<path class="o" d="M30,96 H120 V102 H30 Z"/>'+
  '<path class="k" d="M300,78 L316,58 H420 L440,78 Z"/><path class="l" d="M340,58 V78 M370,58 V78 M400,58 V78"/>'+
  '<path class="s" d="M290,64 L270,56 L272,52 L292,60 Z"/>'+
  '<path class="o" d="M300,104 Q340,96 430,100 L430,112 L300,112 Z"/>'+
  '<path class="s" d="M330,120 H400 V126 H330 Z"/><path class="l" d="M340,112 V120 M390,112 V120"/>'+
  '<path class="s" d="M490,110 H534 L528,128 H496 Z"/>'+
  '<path class="l" d="M380,112 L370,140 M400,112 L392,140"/>'+
  '<path class="g" d="M330,140 H420 Q446,146 420,152 H330 Z"/><path class="l" d="M330,142 L316,134 M330,150 L316,158"/>'+
  '<circle class="g" cx="454" cy="184" r="12"/>'+
  '<path class="o" d="M440,108 L460,108 L476,176 Q470,190 450,190 Q432,188 434,176 Z"/>'+
  '<circle class="s" cx="460" cy="140" r="7"/>'+
  '<path class="s" d="M556,90 Q572,94 556,100 Z"/><path class="s" d="M564,40 H570 V150 H564 Z"/>',
  co:[[372,40,"Long glazed canopy: pilot in front, gunner facing back"],[262,40,"Rear machine gun"],[580,30,"Junkers Jumo 211 engine"],[512,140,"Radiator under the nose"],[496,186,"Fixed undercarriage in streamlined “trousers”"],[460,140,"Wind-driven siren on the leg (B models)"],[375,166,"Bomb on a swinging crutch that threw it clear of the propeller"],[364,132,"Dive brakes under the wings"]],
  cap:"Ju 87 B · span 13.8 m · not to scale",
  specs:[["Crew","2: pilot and rear gunner/radio operator"],["Engine","Junkers Jumo 211, about 1,200 PS"],["Top speed","about 340–390 km/h (sources and versions differ)"],["Bomb load","Ju 87B: typically one 500 kg bomb, or 250 kg plus four 50 kg · Ju 87D: up to 1,800 kg"],["Armament","two 7.92 mm machine guns in the wings, one for the gunner · Ju 87G: two 37 mm cannon"],["Dive","dive brakes held it at about 500–600 km/h; an automatic system pulled it out of the dive"],["Built","about 6,000–6,500 (1936–44)"]],
  desc:"With its bent “gull” wings, fixed undercarriage and wailing sirens, the Stuka (short for Sturzkampfflugzeug, dive-bomber) became the symbol of the Blitzkrieg. Diving almost vertically, it could place a bomb far more accurately than a level bomber, and in Poland, France, the Balkans and Crete it worked as flying artillery for the panzers. But it was slow and poorly armed, and where the enemy had modern fighters it was shot down in large numbers. Over Britain in August 1940 losses were so heavy that it was withdrawn. On the Eastern Front it served until 1944, latterly as the cannon-armed Ju 87G tank-buster.",
  pros:["Very accurate dive-bombing","Tough, simple and able to use rough airfields","Terrifying sirens: a powerful effect on morale","Ju 87G: effective against tanks in skilled hands"],
  cons:["Slow and lightly armed","Helpless against modern fighters without a strong escort","Predictable as it pulled out of its dive","Obsolete by 1942, but kept in service for lack of a replacement"],
  versions:[["1 Sep 1939","Stukas attack the Vistula bridges at Dirschau (Tczew) minutes before the war officially begins; the town of Wieluń is bombed."],["May 1940","Stukas support the Meuse crossing at Sedan."],["18 Aug 1940","Heavy losses over southern England; withdrawn from attacks on Britain."],["1943","Ju 87G with two 37 mm cannon, flown by Hans-Ulrich Rudel at Kursk."]],
  story:"On the evening of 2 September 1939 about 60 Ju 87s attacked the Polish garrison at Westerplatte in two waves, dropping some 26 tonnes of bombs. They destroyed a guardhouse, knocked out the mortars, wrecked the only radio and buried much of the food, killing at least eight defenders. The Poles still held out for five more days. Eight months later, on 13 May 1940, waves of Stukas pounded the French positions on the Meuse at Sedan before German infantry crossed the river — the breakthrough that decided the Battle of France.",
  lugares:["Westerplatte, Gdańsk","Sedan","Dunkirk","Lascaris War Rooms, Valletta","Maleme, Crete","Kursk Arc memorial complex"]
},
{
  id:"lancaster", cat:"air", name:"Heavy bombers: Avro Lancaster and Boeing B-17 Flying Fortress", nick:"The RAF bombed by night, the Americans by day",
  inuse:"Lancaster from March 1942 · B-17 with the US Eighth Air Force from August 1942 · both to the end",
  tl:[["Lancaster",[[30.05,68.25,1]],[[44.53,"Dams raid"],[65.4,"Dresden"]]],["B-17 Flying Fortress",[[22.23,25,2],[35.53,68.25,1]],[[47.53,"Schweinfurt"]]]],
  vb:"0 0 600 200",
  svg:'<path class="o" d="M110,50 L130,10 Q148,8 172,46 Z"/>'+
  '<path class="o" d="M120,50 L160,44 H330 Q352,46 360,54 Q352,62 330,62 H160 L120,58 Z"/>'+
  '<path class="o" d="M102,50 H150 V54 H102 Z"/>'+
  '<path class="o" d="M220,54 H300 L296,60 H222 Z"/><path class="g" d="M270,50 H322 Q332,54 322,58 H270 Z"/>'+
  '<path class="k" d="M290,44 Q296,34 306,44 Z"/><path class="k" d="M340,46 Q356,48 362,54 L340,54 Z"/>'+
  '<circle class="s" cx="230" cy="66" r="7"/><circle class="s" cx="354" cy="64" r="5"/>'+
  '<ellipse class="o" cx="52" cy="112" rx="18" ry="38"/>'+
  '<path class="o" d="M40,128 L80,118 H470 Q520,118 548,128 L556,140 Q540,152 500,152 L90,148 L40,140 Z"/>'+
  '<path class="o" d="M30,128 H120 V134 H30 Z"/>'+
  '<path class="k" d="M24,124 Q14,132 24,142 L40,140 L40,126 Z"/><path class="l" d="M20,130 H4 M20,136 H4"/>'+
  '<path class="k" d="M170,118 Q176,100 196,100 Q214,102 218,118 Z"/>'+
  '<path class="k" d="M420,118 L436,100 H480 L496,118 Z"/>'+
  '<path class="k" d="M548,128 Q568,126 572,136 Q568,146 552,146 Z"/><path class="l" d="M568,132 H590 M568,138 H590"/>'+
  '<path class="k" d="M526,150 Q544,162 556,144 Z"/>'+
  '<path class="o" d="M300,128 Q360,120 470,124 L460,138 L300,138 Z"/>'+
  '<path class="g" d="M370,110 H480 Q500,114 480,122 H370 Z"/><path class="g" d="M360,130 H470 Q492,134 470,142 H360 Z"/>'+
  '<path class="s" d="M492,96 H496 V136 H492 Z"/><path class="s" d="M480,118 H484 V160 H480 Z"/>'+
  '<circle class="h" cx="250" cy="134" r="8"/><circle class="s" cx="250" cy="134" r="3"/>'+
  '<path class="dl" d="M220,152 H420"/>'+
  '<rect class="g" x="250" y="160" width="84" height="22" rx="4"/><path class="g" d="M350,166 H400 Q408,170 400,174 H350 Z"/>',
  co:[[52,80,"Twin oval fins"],[194,90,"Mid-upper turret"],[458,92,"Cockpit: pilot and flight engineer"],[584,120,"Nose turret, with the bomb-aimer's blister below"],[14,154,"Rear turret: four .303 machine guns"],[420,108,"Four Rolls-Royce Merlin engines"],[292,192,"Long bomb bay: a 4,000 lb “Cookie” and incendiaries"],[200,28,"B-17 (inset): 13 heavy machine guns, ball turret under the belly"]],
  cap:"Avro Lancaster (main) · B-17G (inset) · span 31.1 m and 31.6 m · not to scale",
  specs:[["Lancaster crew","7"],["Lancaster engines","4 × Rolls-Royce Merlin"],["Lancaster bomb load","usually about 4–6 t; up to 6.4 t (14,000 lb) of standard bombs; one 10 t “Grand Slam” in modified aircraft"],["Lancaster armament","eight to ten .303 machine guns in three turrets"],["Lancaster","7,377 built; about 156,000 sorties; 3,249 lost in action"],["B-17G","crew 10; 4 × Wright Cyclone radials; 13 × .50 machine guns; typical load about 2–2.7 t on long missions; 12,731 B-17s built"],["Bombs dropped","B-17s dropped about 640,000 tons, over 40 per cent of the US and British tonnage on Germany and occupied Europe"]],
  desc:"The RAF's Bomber Command attacked by night, when its bombers were hard to find but also hard to aim; from 1942, under Arthur Harris, it set out to destroy German cities. The Lancaster, with its huge unobstructed bomb bay, became its main weapon, and specialist squadrons used it for the Dams raid and to drop the 12,000 lb Tallboy on U-boat pens, V-weapon bunkers and the battleship Tirpitz. The US Eighth Air Force flew by day in tight formations of B-17s and B-24s, aiming at factories and oil, and suffered terrible losses until long-range escort fighters arrived in 1944. Both forces lost tens of thousands of airmen, and hundreds of thousands of civilians died under their bombs.",
  pros:["Lancaster: huge bomb bay that took the largest bombs of the war","Lancaster: good handling for a heavy bomber","B-17: very tough, often brought its crew home badly damaged","B-17: formations bristling with heavy machine guns"],
  cons:["Heavy losses to night fighters and flak","Lancaster: escape from the aircraft was difficult","B-17: smaller bomb load than the Lancaster on long missions","Bombing accuracy was poor, especially early in the war"],
  versions:[["Jul 1941","RAF Fortress I (B-17C) in small numbers; disappointing."],["Mar 1942","First Lancaster operations; the first B-17 raid of the Eighth Air Force follows on 17 August (Rouen)."],["1943","Dams raid (16–17 May); Hamburg firestorm (July); Schweinfurt–Regensburg (17 August): 60 B-17s lost in a day."],["1944–45","Tallboy and Grand Slam bombs; Dresden (13–15 February 1945)."]],
  story:"On 17 July 1944 three Lancasters of No. 617 Squadron dropped Tallboy “earthquake” bombs on the V-2 site at Wizernes, in the Pas-de-Calais. They did not break the great concrete dome, but they undermined the ground around it and blocked the entrances, and the Germans gave up the site. Today it is La Coupole museum, and the dome still sits on the old chalk quarry. A few miles away, the Blockhaus at Éperlecques also shows the scars of heavy-bomber attacks.",
  lugares:["La Coupole V-2 site, Helfaut","Blockhaus d'Éperlecques","IWM Duxford (B-17s)","Dresden Frauenkirche","St Nikolai Memorial, Hamburg","Peenemünde"]
},

/* ======================= SEA WAR ======================= */
{
  id:"uboat", cat:"sea", name:"Type VII U-boat", nick:"The submarine that fought the Battle of the Atlantic",
  inuse:"Whole war · the most numerous submarine class in history",
  tl:[["Type VII U-boat",[[0,68.25,1]],[[1.43,"Scapa Flow"],[44,"Black May"]]]],
  vb:"0 0 600 180",
  svg:'<path class="wv" d="M0,98 H600"/>'+
  '<path class="o" d="M20,96 Q40,92 80,90 H500 Q560,90 590,96 L584,104 Q560,120 500,122 H90 Q40,120 20,104 Z"/>'+
  '<path class="g" d="M180,104 Q300,128 420,104 L420,112 Q300,132 180,112 Z"/>'+
  '<path class="g" d="M40,90 L60,82 H540 L570,90 Z"/>'+
  '<path class="o" d="M250,82 L258,52 H330 L352,62 L346,82 Z"/>'+
  '<path class="s" d="M226,72 H258 V82 H226 Z"/><path class="s" d="M240,64 L222,58 L224,55 L242,61 Z"/>'+
  '<path class="s" d="M296,20 H300 V52 H296 Z M312,28 H316 V52 H312 Z"/>'+
  '<path class="s" d="M410,70 H426 V82 H410 Z"/><path class="s" d="M420,72 L470,66 L471,70 L422,76 Z"/>'+
  '<path class="h" d="M560,100 H580 V104 H560 Z"/><path class="h" d="M24,100 H40 V104 H24 Z"/>'+
  '<path class="s" d="M10,100 H18 V118 H10 Z"/>'+
  '<path class="g" d="M180,150 H380 Q392,156 380,162 H180 Z"/><path class="l" d="M180,152 L168,148 M180,160 L168,164"/>',
  co:[[300,70,"Conning tower (the “bridge”)"],[446,50,"8.8 cm deck gun, removed from most boats in 1943"],[330,16,"Periscopes"],[214,46,"20 mm anti-aircraft guns, multiplied from 1943"],[574,120,"Four bow torpedo tubes"],[28,130,"One stern tube; twin propellers"],[300,112,"Saddle tanks along the sides"],[276,156,"Torpedo: 14 carried"],[120,98,"Waterline: most attacks were made on the surface at night"]],
  cap:"Type VIIC · 67 m long · not to scale",
  specs:[["Displacement","769 t surfaced, 871 t submerged (VIIC)"],["Length","67.1 m"],["Crew","44–52"],["Torpedoes","14; five 53.3 cm tubes (four bow, one stern)"],["Speed","17.7 knots surfaced; 7.6 knots submerged"],["Range","about 8,500 nautical miles at 10 knots on the surface; about 80 under water at 4 knots"],["Diving depth","test depth about 150 m; crush depth about 250 m"],["Built","709 Type VII commissioned, 577 of them VIIC"]],
  desc:"The Type VII was a medium-sized, fairly cramped submarine, quick to dive and simple to build. It was really a surface torpedo boat that could hide under water: it travelled and usually attacked on the surface, at night, diving only to escape. From 1940, operating from bases on the French Atlantic coast, packs of U-boats directed by radio from shore attacked the convoys on which Britain depended. Radar, long-range aircraft, escort carriers, better tactics and the reading of their Enigma signals turned the battle in 1943, and from then on the U-boats suffered appalling losses.",
  pros:["Quick to dive and very manoeuvrable","Cheap and simple to build in numbers","Long range from the French Atlantic bases","Deadly in packs against poorly escorted convoys"],
  cons:["Slow under water, with a short underwater endurance","Had to surface to recharge its batteries: vulnerable to radar-equipped aircraft","Radio-controlled “wolf pack” tactics produced signals the Allies could locate and read","Cramped and unhealthy for the crew on long patrols"],
  versions:[["1936","First Type VIIs commissioned."],["1940","After the fall of France, U-boats operate from Lorient, Brest, Saint-Nazaire, La Pallice and Bordeaux."],["May 1943","“Black May”: 43 U-boats lost in a month; Dönitz withdraws from the North Atlantic."],["1944","Schnorchel lets boats run their diesels just below the surface."]],
  story:"On the night of 13–14 October 1939, Günther Prien's U-47, a Type VIIB, slipped into the Home Fleet's anchorage at Scapa Flow and sank the battleship Royal Oak with the loss of 835 lives. The U-boat war that followed lasted until the last day of the war. About 3,500 Allied merchant ships were sunk, and some 36,000 merchant seamen and 36,000 naval personnel died; of about 40,000 men who served in U-boats, around 30,000 did not come back. The huge concrete pens built to protect the boats still stand at Lorient, Brest and Saint-Nazaire.",
  lugares:["Keroman submarine base, Lorient","Brest: the U-boat base","Saint-Nazaire submarine base","Western Approaches HQ museum, Liverpool","Bletchley Park"]
},

/* ======================= V-WEAPONS & SECRET WAR ======================= */
{
  id:"radar", cat:"vw", name:"Chain Home radar", nick:"The early-warning chain that let Fighter Command see the raids coming",
  inuse:"Whole war · first stations operational in 1938, 21 by September 1939",
  tl:[["Chain Home",[[0,68.25,1]],[[11.37,"Ventnor bombed"],[12.47,"15 Sep 1940"]]]],
  vb:"0 0 600 230",
  svg:'<path class="l" d="M0,220 H600"/>'+
  '<path class="s" d="M54,220 L64,14 H76 L86,220 Z"/><path class="l" d="M58,200 L84,160 L60,120 L80,80 L64,40"/>'+
  '<path class="s" d="M154,220 L164,14 H176 L186,220 Z"/><path class="l" d="M158,200 L184,160 L160,120 L180,80 L164,40"/>'+
  '<path class="s" d="M254,220 L264,14 H276 L286,220 Z"/><path class="l" d="M258,200 L284,160 L260,120 L280,80 L264,40"/>'+
  '<path class="dl" d="M76,40 Q120,46 164,40 M76,70 Q120,76 164,70 M76,100 Q120,106 164,100 M176,40 Q220,46 264,40 M176,70 Q220,76 264,70 M176,100 Q220,106 264,100"/>'+
  '<path class="w" d="M386,220 L392,80 H404 L410,220 Z"/><path class="l" d="M390,200 L408,160 L392,120 L406,90"/>'+
  '<path class="w" d="M456,220 L462,80 H474 L480,220 Z"/><path class="l" d="M460,200 L478,160 L462,120 L476,90"/>'+
  '<path class="w" d="M526,220 L532,80 H544 L550,220 Z"/><path class="l" d="M530,200 L548,160 L532,120 L546,90"/>'+
  '<path class="l" d="M398,84 H538"/>'+
  '<path class="k" d="M420,186 H516 V220 H420 Z"/><path class="g" d="M414,178 H522 L516,186 H420 Z"/>'+
  '<circle class="l" cx="580" cy="200" r="3"/><path class="l" d="M580,203 V212 M580,212 L577,220 M580,212 L583,220 M580,206 L576,210 M580,206 L584,210"/>',
  co:[[170,18,"Steel transmitter towers, 360 ft (110 m)"],[120,86,"Transmitting aerials hung between the towers like curtains"],[468,64,"Wooden receiver towers, 240 ft (73 m)"],[468,203,"Receiver block: operators read range and bearing off a cathode-ray screen"],[580,180,"A man, for scale (roughly)"]],
  cap:"A Chain Home station (simplified) · not to scale",
  specs:[["Wavelength","about 10–13 m (20–30 MHz)"],["Transmitter towers","3–4 steel towers, 360 ft (110 m)"],["Receiver towers","4 wooden towers, 240 ft (73 m)"],["Range","typically about 190 km (120 miles) against aircraft at height"],["Coverage","fixed, looking out to sea; blind behind and to low-flying aircraft (Chain Home Low added from 1939–40)"],["Stations","21 in September 1939; over 40 by the end of the war"]],
  desc:"Chain Home was crude by later standards — long radio waves, fixed aerials looking out to sea — but it worked, and it was built in time. Radio-location (the word “radar” came later from the Americans) was demonstrated in February 1935 and a chain of stations covered the east and south coasts by 1939. Their reports went by telephone to a filter room at Fighter Command's headquarters at Bentley Priory, and from there to the group and sector operations rooms, which sent fighters up to meet the raids. This “Dowding system” meant fighters did not have to waste fuel and pilots on standing patrols.",
  pros:["Early warning: raids detected forming up over France","Range and height estimates, good enough to aim the fighters","Linked to a complete command-and-control system","Open steel towers were hard to knock down by bombing"],
  cons:["Could not see low-flying aircraft","Looked only out to sea: inland, the Observer Corps had to track the raids","Height readings were often inaccurate","Easy to spot from the air: the masts were landmarks"],
  versions:[["Feb 1935","The Daventry experiment: a Heyford bomber is detected by reflected radio waves."],["1938","First Chain Home stations declared operational."],["Aug 1940","Luftwaffe attacks radar stations (12–18 August); Ventnor is put out of action, but the others are soon working again."],["1941–45","Centimetric radar, invented in Britain, goes into night fighters, ships and bombers."]],
  story:"On 12 August 1940, the day before the Luftwaffe's planned “Eagle Day”, German bombers attacked radar stations along the south coast. Several were hit, and Ventnor on the Isle of Wight was badly damaged, but the open lattice towers mostly survived and the stations were soon transmitting again. German intelligence concluded that the radar chain was not worth further attack — one of the most important mistakes of the battle.",
  lugares:["Bentley Priory Museum, Stanmore","Battle of Britain Bunker, Uxbridge","Dover Castle Secret Wartime Tunnels","IWM Duxford","Battle of Britain Memorial, Capel-le-Ferne"]
},
{
  id:"enigma", cat:"vw", name:"The Enigma machine and the Bombe", nick:"Germany's cipher machine — and the British machine built to break it",
  inuse:"Enigma: whole war, in all the German services · Bombes at Bletchley Park from March 1940",
  tl:[["Enigma (German)",[[0,68.25,1]],[[29,"4-rotor M4"]]],["Bombe (British)",[[6.57,12,2],[12,68.25,1]],[[6.57,"“Victory”"],[20.27,"U-110"],[39.4,"Shark broken"]]]],
  vb:"0 0 600 230",
  svg:'<path class="w" d="M30,30 H330 V222 H30 Z"/>'+
  '<path class="s" d="M44,40 H316 V188 H44 Z"/>'+
  '<path class="s" d="M130,44 H230 V70 H130 Z"/>'+
  '<g class="h"><rect x="144" y="50" width="16" height="14"/><rect x="172" y="50" width="16" height="14"/><rect x="200" y="50" width="16" height="14"/></g>'+
  '<g class="br"><rect x="162" y="46" width="6" height="22"/><rect x="190" y="46" width="6" height="22"/><rect x="218" y="46" width="6" height="22"/></g>'+
  '<g class="h"><circle cx="68" cy="84" r="6"/><circle cx="96" cy="84" r="6"/><circle cx="124" cy="84" r="6"/><circle cx="152" cy="84" r="6"/><circle cx="180" cy="84" r="6"/><circle cx="208" cy="84" r="6"/><circle cx="236" cy="84" r="6"/><circle cx="264" cy="84" r="6"/><circle cx="292" cy="84" r="6"/><circle cx="82" cy="100" r="6"/><circle cx="110" cy="100" r="6"/><circle cx="138" cy="100" r="6"/><circle cx="166" cy="100" r="6"/><circle cx="194" cy="100" r="6"/><circle cx="222" cy="100" r="6"/><circle cx="250" cy="100" r="6"/><circle cx="278" cy="100" r="6"/><circle cx="68" cy="116" r="6"/><circle cx="96" cy="116" r="6"/><circle cx="124" cy="116" r="6"/><circle cx="152" cy="116" r="6"/><circle cx="180" cy="116" r="6"/><circle cx="208" cy="116" r="6"/><circle cx="236" cy="116" r="6"/><circle cx="264" cy="116" r="6"/><circle cx="292" cy="116" r="6"/></g>'+
  '<g class="g"><circle cx="68" cy="140" r="8"/><circle cx="96" cy="140" r="8"/><circle cx="124" cy="140" r="8"/><circle cx="152" cy="140" r="8"/><circle cx="180" cy="140" r="8"/><circle cx="208" cy="140" r="8"/><circle cx="236" cy="140" r="8"/><circle cx="264" cy="140" r="8"/><circle cx="292" cy="140" r="8"/><circle cx="82" cy="158" r="8"/><circle cx="110" cy="158" r="8"/><circle cx="138" cy="158" r="8"/><circle cx="166" cy="158" r="8"/><circle cx="194" cy="158" r="8"/><circle cx="222" cy="158" r="8"/><circle cx="250" cy="158" r="8"/><circle cx="278" cy="158" r="8"/><circle cx="68" cy="176" r="8"/><circle cx="96" cy="176" r="8"/><circle cx="124" cy="176" r="8"/><circle cx="152" cy="176" r="8"/><circle cx="180" cy="176" r="8"/><circle cx="208" cy="176" r="8"/><circle cx="236" cy="176" r="8"/><circle cx="264" cy="176" r="8"/><circle cx="292" cy="176" r="8"/></g>'+
  '<path class="k" d="M44,194 H316 V216 H44 Z"/>'+
  '<g class="s"><circle cx="60" cy="200" r="2.5"/><circle cx="80" cy="200" r="2.5"/><circle cx="100" cy="200" r="2.5"/><circle cx="120" cy="200" r="2.5"/><circle cx="140" cy="200" r="2.5"/><circle cx="160" cy="200" r="2.5"/><circle cx="180" cy="200" r="2.5"/><circle cx="200" cy="200" r="2.5"/><circle cx="220" cy="200" r="2.5"/><circle cx="240" cy="200" r="2.5"/><circle cx="260" cy="200" r="2.5"/><circle cx="280" cy="200" r="2.5"/><circle cx="300" cy="200" r="2.5"/><circle cx="60" cy="210" r="2.5"/><circle cx="80" cy="210" r="2.5"/><circle cx="100" cy="210" r="2.5"/><circle cx="120" cy="210" r="2.5"/><circle cx="140" cy="210" r="2.5"/><circle cx="160" cy="210" r="2.5"/><circle cx="180" cy="210" r="2.5"/><circle cx="200" cy="210" r="2.5"/><circle cx="220" cy="210" r="2.5"/><circle cx="240" cy="210" r="2.5"/><circle cx="260" cy="210" r="2.5"/><circle cx="280" cy="210" r="2.5"/><circle cx="300" cy="210" r="2.5"/></g>'+
  '<path class="l" d="M100,200 Q120,226 160,210 M220,210 Q250,228 280,200"/>'+
  '<path class="o" d="M380,20 H580 V220 H380 Z"/>'+
  '<g class="g"><circle cx="396" cy="36" r="6"/><circle cx="411" cy="36" r="6"/><circle cx="426" cy="36" r="6"/><circle cx="441" cy="36" r="6"/><circle cx="456" cy="36" r="6"/><circle cx="471" cy="36" r="6"/><circle cx="486" cy="36" r="6"/><circle cx="501" cy="36" r="6"/><circle cx="516" cy="36" r="6"/><circle cx="531" cy="36" r="6"/><circle cx="546" cy="36" r="6"/><circle cx="561" cy="36" r="6"/><circle cx="396" cy="52" r="6"/><circle cx="411" cy="52" r="6"/><circle cx="426" cy="52" r="6"/><circle cx="441" cy="52" r="6"/><circle cx="456" cy="52" r="6"/><circle cx="471" cy="52" r="6"/><circle cx="486" cy="52" r="6"/><circle cx="501" cy="52" r="6"/><circle cx="516" cy="52" r="6"/><circle cx="531" cy="52" r="6"/><circle cx="546" cy="52" r="6"/><circle cx="561" cy="52" r="6"/><circle cx="396" cy="68" r="6"/><circle cx="411" cy="68" r="6"/><circle cx="426" cy="68" r="6"/><circle cx="441" cy="68" r="6"/><circle cx="456" cy="68" r="6"/><circle cx="471" cy="68" r="6"/><circle cx="486" cy="68" r="6"/><circle cx="501" cy="68" r="6"/><circle cx="516" cy="68" r="6"/><circle cx="531" cy="68" r="6"/><circle cx="546" cy="68" r="6"/><circle cx="561" cy="68" r="6"/><circle cx="396" cy="84" r="6"/><circle cx="411" cy="84" r="6"/><circle cx="426" cy="84" r="6"/><circle cx="441" cy="84" r="6"/><circle cx="456" cy="84" r="6"/><circle cx="471" cy="84" r="6"/><circle cx="486" cy="84" r="6"/><circle cx="501" cy="84" r="6"/><circle cx="516" cy="84" r="6"/><circle cx="531" cy="84" r="6"/><circle cx="546" cy="84" r="6"/><circle cx="561" cy="84" r="6"/><circle cx="396" cy="100" r="6"/><circle cx="411" cy="100" r="6"/><circle cx="426" cy="100" r="6"/><circle cx="441" cy="100" r="6"/><circle cx="456" cy="100" r="6"/><circle cx="471" cy="100" r="6"/><circle cx="486" cy="100" r="6"/><circle cx="501" cy="100" r="6"/><circle cx="516" cy="100" r="6"/><circle cx="531" cy="100" r="6"/><circle cx="546" cy="100" r="6"/><circle cx="561" cy="100" r="6"/><circle cx="396" cy="116" r="6"/><circle cx="411" cy="116" r="6"/><circle cx="426" cy="116" r="6"/><circle cx="441" cy="116" r="6"/><circle cx="456" cy="116" r="6"/><circle cx="471" cy="116" r="6"/><circle cx="486" cy="116" r="6"/><circle cx="501" cy="116" r="6"/><circle cx="516" cy="116" r="6"/><circle cx="531" cy="116" r="6"/><circle cx="546" cy="116" r="6"/><circle cx="561" cy="116" r="6"/><circle cx="396" cy="132" r="6"/><circle cx="411" cy="132" r="6"/><circle cx="426" cy="132" r="6"/><circle cx="441" cy="132" r="6"/><circle cx="456" cy="132" r="6"/><circle cx="471" cy="132" r="6"/><circle cx="486" cy="132" r="6"/><circle cx="501" cy="132" r="6"/><circle cx="516" cy="132" r="6"/><circle cx="531" cy="132" r="6"/><circle cx="546" cy="132" r="6"/><circle cx="561" cy="132" r="6"/><circle cx="396" cy="148" r="6"/><circle cx="411" cy="148" r="6"/><circle cx="426" cy="148" r="6"/><circle cx="441" cy="148" r="6"/><circle cx="456" cy="148" r="6"/><circle cx="471" cy="148" r="6"/><circle cx="486" cy="148" r="6"/><circle cx="501" cy="148" r="6"/><circle cx="516" cy="148" r="6"/><circle cx="531" cy="148" r="6"/><circle cx="546" cy="148" r="6"/><circle cx="561" cy="148" r="6"/><circle cx="396" cy="164" r="6"/><circle cx="411" cy="164" r="6"/><circle cx="426" cy="164" r="6"/><circle cx="441" cy="164" r="6"/><circle cx="456" cy="164" r="6"/><circle cx="471" cy="164" r="6"/><circle cx="486" cy="164" r="6"/><circle cx="501" cy="164" r="6"/><circle cx="516" cy="164" r="6"/><circle cx="531" cy="164" r="6"/><circle cx="546" cy="164" r="6"/><circle cx="561" cy="164" r="6"/></g>'+
  '<path class="s" d="M380,184 H580 V220 H380 Z"/><path class="l" d="M392,194 H568 M392,202 H568 M392,210 H568"/>',
  co:[[180,30,"Rotor windows: three rotors chosen from five (four in the naval M4)"],[300,100,"Lampboard: the coded letter lights up"],[300,158,"Keyboard"],[180,222,"Plugboard: cables swap pairs of letters"],[480,104,"Bombe: rows of drums, each imitating an Enigma rotor"],[480,202,"About a ton of relays and wiring"]],
  cap:"Enigma I seen from above (left) · British Bombe (right) · not to scale",
  specs:[["Enigma I","about 34 × 28 × 15 cm; about 12 kg; battery-powered"],["Rotors","Army and Air Force: 3 chosen from 5 (from December 1938) · Navy M4: 4 rotors from 1 February 1942"],["Plugboard","up to 13 pairs of letters swapped, usually 10"],["Possible settings","about 159 million million million"],["Built","about 40,000 Enigma machines"],["British Bombe","about 2 m × 2.1 m × 0.6 m; about 1 t; 36 Enigma equivalents; over 200 built"],["Bletchley Park","8,995 staff at its peak (January 1945), about three-quarters of them women"]],
  desc:"Enigma looked like a typewriter in a wooden box. Each key pressed sent a current through a plugboard and a set of turning rotors, so that a different letter lit up — and because the rotors moved with every key, the same letter came out differently each time. Polish mathematicians led by Marian Rejewski broke it in the 1930s and gave their methods to Britain and France in July 1939. At Bletchley Park, Alan Turing and Gordon Welchman designed the Bombe, an electro-mechanical machine that tested thousands of rotor settings to find the day's key. The intelligence that came from it, codenamed Ultra, helped win the Battle of the Atlantic and was used in almost every campaign.",
  pros:["Enigma: portable, robust and simple to use in the field","Enigma: an enormous number of possible settings","Bombe: found daily keys in hours rather than weeks","Bombe: made reading German signals routine on many networks"],
  cons:["Enigma: a letter could never be encrypted as itself — a flaw the codebreakers exploited","Enigma: careless operators and stereotyped messages gave away “cribs”","Bombe: needed a good guess at part of the message to start","Bombe: blind when a new network or a fourth rotor appeared, as in 1942"],
  versions:[["Dec 1932","Rejewski breaks the military Enigma in Warsaw."],["Jul 1939","At Pyry, near Warsaw, the Poles hand over their work to Britain and France."],["Mar 1940","The first British Bombe, “Victory”, is installed at Bletchley Park."],["Feb–Dec 1942","Four-rotor naval Enigma (“Shark”) blacks out U-boat traffic for about ten months."]],
  story:"On 30 October 1942, in the eastern Mediterranean, the destroyer HMS Petard forced U-559 to the surface. Lieutenant Anthony Fasson and Able Seaman Colin Grazier swam to the sinking boat and passed out code books and documents before it went down with them; 16-year-old canteen assistant Tommy Brown survived. The material helped Bletchley Park break the four-rotor U-boat key in December 1942, after ten months of darkness. Fasson and Grazier were awarded the George Cross after their deaths.",
  lugares:["Bletchley Park","Western Approaches HQ museum, Liverpool","Churchill War Rooms, London","Museum of the Second World War, Gdańsk"]
},
{
  id:"v1v2", cat:"vw", name:"V-1 flying bomb and V-2 rocket", nick:"Hitler's “vengeance weapons”: the first cruise missile and the first long-range ballistic missile",
  inuse:"V-1 from 13 June 1944 · V-2 from 8 September 1944 · both until the end of March 1945",
  tl:[["V-1 flying bomb",[[57.4,66.95,1]],[[57.4,"London"]]],["V-2 rocket",[[60.23,66.87,1]],[[47.55,"Peenemünde raid"],[60.23,"London"]]]],
  vb:"0 0 600 230",
  svg:'<path class="o" d="M40,48 L54,30 H76 L80,48 Z"/>'+
  '<path class="o" d="M40,60 Q40,50 60,48 H300 Q360,48 380,58 Q360,70 300,72 H60 Q40,70 40,60 Z"/>'+
  '<path class="s" d="M6,32 H200 V44 H6 Z"/><path class="s" d="M200,30 H232 V46 H200 Z"/><path class="s" d="M206,46 H222 V50 H206 Z"/>'+
  '<path class="o" d="M168,58 H252 L248,66 H172 Z"/>'+
  '<path class="o" d="M26,58 H92 V63 H26 Z"/>'+
  '<path class="s" d="M380,57 H392 V60 H380 Z"/><path class="s" d="M392,51 L397,58 L392,65 Z"/>'+
  '<path class="o" d="M30,104 L56,104 L120,132 L80,132 Z"/><path class="o" d="M30,216 L56,216 L120,188 L80,188 Z"/>'+
  '<path class="o" d="M70,140 Q90,128 140,128 H420 Q520,128 590,160 Q520,192 420,192 H140 Q90,192 70,180 Z"/>'+
  '<path class="o" d="M26,156 H112 V164 H26 Z"/>'+
  '<path class="s" d="M54,146 L70,140 V180 L54,174 Z"/>'+
  '<path class="dl" d="M200,130 V190 M330,130 V190"/><path class="l" d="M470,131 Q478,160 470,189"/>',
  co:[[110,18,"V-1: Argus pulse-jet — its buzz gave it the name “doodlebug”"],[210,80,"Short, straight wings"],[330,60,"850 kg warhead in the nose"],[410,40,"Nose propeller counted off the distance, then the bomb dived"],[536,160,"V-2: warhead of about 1 tonne"],[265,160,"Alcohol and liquid-oxygen tanks"],[96,110,"Four fins; vanes in the exhaust steered it"],[40,160,"Rocket motor"]],
  cap:"V-1 (top) about 8.3 m · V-2 (bottom) 14 m · not to scale",
  specs:[["V-1 (Fieseler Fi 103)","8.3 m long; 850 kg warhead; about 550–640 km/h; range about 250 km; launched from ramps or from He 111 bombers"],["V-1 numbers","about 9,500–10,500 fired at Britain, 2,419 reached London; about 2,450 at Antwerp"],["V-1 casualties","6,184 killed and 17,981 seriously injured in the London region"],["V-2 (A-4)","14 m long; about 12.5 t at launch; about 1 t warhead; range about 320 km; peak about 80–90 km; reached about 5,700 km/h"],["V-2 numbers","about 3,170 launched: about 1,360 at London, 1,610 at Antwerp"],["V-2 deaths","about 9,000 killed by the attacks; about 12,000 or more forced labourers and prisoners died building them"]],
  desc:"The V-1 was a small pilotless aircraft with a pulse-jet engine: it flew straight at about 600 km/h until a counter in the nose stopped the engine, and then it dived. Londoners learned to dread the moment its buzz cut out. Fighters, anti-aircraft guns with new proximity fuzes, and balloons shot down more and more of them. The V-2, developed at Peenemünde under Wernher von Braun, was a liquid-fuelled rocket that climbed to the edge of space and fell faster than sound: there was no warning and no defence. Both were aimed at cities, and both were too inaccurate for anything else. The V-2s were built underground at Mittelbau-Dora by concentration-camp prisoners, thousands of whom died.",
  pros:["V-1: cheap, simple and quick to build","V-1: no aircrew at risk","V-2: impossible to intercept, with no warning","Both tied down huge Allied resources in bombing and defence"],
  cons:["Very inaccurate: useful only against whole cities","V-1: flew straight and level, so fighters and guns could learn to shoot it down","V-1 launch sites were easy to find and bomb","V-2: enormously expensive for a warhead of one tonne"],
  versions:[["Oct 1942","First successful V-2 test launch at Peenemünde (3 October)."],["Aug 1943","RAF raid on Peenemünde (17–18 August); production moves underground to the Mittelwerk."],["Jun 1944","V-1 offensive against London begins (13 June); a V-2 test reaches space (20 June)."],["Sep 1944–Mar 1945","V-2s fall on London, Antwerp and other cities; the last on 27 March 1945."]],
  story:"Near Saint-Omer, the Germans built two enormous concrete bunkers to launch V-2s at London: the Blockhaus at Éperlecques and the dome at Wizernes, now La Coupole. Repeated heavy-bomber raids, including Tallboy bombs dropped by Lancasters in the summer of 1944, wrecked them before they could be used, and the V-2 was finally fired from mobile launchers instead, from Holland. The first to hit London fell on Staveley Road, Chiswick, on the evening of 8 September 1944, killing three people.",
  lugares:["Peenemünde Historical-Technical Museum","La Coupole V-2 site, Helfaut","Blockhaus d'Éperlecques","Buchenwald Memorial (Mittelbau-Dora began as its sub-camp)","Imperial War Museum London"]
}
];

/* Ammunition table rows: [ammunition, fired by, types, how carried, notes] — cells may contain simple HTML */
var AMMO_ROWS = [
  [".30-06 Springfield<br><span class=\"muted\">7.62 × 63 mm</span>","M1 Garand, BAR, Browning M1919","M2 ball<br>M2 armour-piercing<br>M1 tracer","Garand: 8-round clips in a 10-pocket cartridge belt (80 rounds), plus cloth bandoliers.<br>BAR: 20-round magazines in a belt.<br>M1919: 250-round cloth belts in steel boxes.","A powerful, long-range round shared by the whole US rifle squad and its machine guns."],
  [".303 British<br><span class=\"muted\">7.7 × 56 mm R</span>","Lee-Enfield rifles, Bren, Vickers; Browning guns of the Spitfire, Hurricane and Lancaster","Mk VII ball<br>Tracer, armour-piercing and incendiary","Rifle: 5-round chargers in cloth bandoliers of 50.<br>Bren: 30-round magazines, usually loaded with 27–28 rounds, in webbing pouches — every man in the section carried some.","A rimmed cartridge, the reason for the Bren's curved magazine. Used by all British and Commonwealth forces and the Allied armies equipped in Britain."],
  ["7.92 × 57 mm Mauser<br><span class=\"muted\">“8 mm Mauser”</span>","Karabiner 98k, MG 34, MG 42; also Polish and Czechoslovak rifles and machine guns","s.S. ball<br>SmK armour-piercing<br>Tracer","Rifle: 5-round stripper clips in leather pouches on the belt.<br>MG: belts of 50, linked into long belts, in steel boxes; 50-round drums for the assault.","The MG 42's enormous rate of fire meant the whole section carried ammunition for it. In 1939 Polish soldiers fired the same calibre as the Germans."],
  ["7.62 × 54 mm R<br><span class=\"muted\">Soviet rifle cartridge</span>","Mosin–Nagant rifles and carbines, SVT-40, DP light machine gun, Maxim M1910 and SG-43 machine guns; Finnish rifles","Light ball (L) and heavy ball (D)<br>B-32 armour-piercing incendiary<br>Tracer","Rifle: 5-round stripper clips in pouches and cloth bandoliers.<br>DP: 47-round flat pan magazines.<br>Maxim: 250-round cloth belts in boxes.","Rimmed, like the British .303 — a design of the 1890s still in service today. The Red Army's rifles and machine guns shared it."],
  ["9 × 19 mm Parabellum<br><span class=\"muted\">“9 mm”</span>","MP 40, Sten, Luger and Walther P38 pistols, Browning Hi-Power","Ball","32-round box magazines in pouches.","Common to the Sten and the MP 40: Allied soldiers and resistance fighters could use captured German ammunition."],
  [".45 ACP<br><span class=\"muted\">11.43 × 23 mm</span>","Thompson, M3 “grease gun”, M1911A1 pistol","Ball","Thompson: 20- or 30-round box magazines in canvas pouches.","Heavy, slow bullet: hard-hitting close up, weak beyond about 100 m."],
  ["7.62 × 25 mm Tokarev<br><span class=\"muted\">Soviet pistol cartridge</span>","PPSh-41, PPS-43, TT-33 pistol","Ball<br>Tracer<br>Armour-piercing incendiary","PPSh: 71-round drums or 35-round curved boxes in pouches.<br>Pistol: 8-round magazines.","A small, fast bottle-necked bullet with good penetration. Close to the German 7.63 mm Mauser pistol round; the Germans converted captured PPShs to fire 9 mm."],
  ["Anti-tank rockets and bombs","Bazooka, PIAT, Panzerschreck, Panzerfaust","Bazooka: 60 mm rocket (M6A1)<br>PIAT: bomb of about 1.1 kg<br>Panzerschreck: 88 mm rocket<br>Panzerfaust: warhead fixed to its throw-away tube","In tubes or cases carried by the loader and other men of the team; PIAT bombs in three-round carriers. Each Panzerfaust was its own round.","All used a shaped-charge warhead, which punches a jet of metal through armour. Also used against houses and bunkers."],
  ["Artillery shells","25-pounder, 88 mm, US 105 mm, Soviet 76 mm and 122 mm","High explosive<br>Smoke<br>Armour-piercing","25-pounder: shell and cartridge loaded separately.<br>105 mm: “semi-fixed” — shell in a brass case whose propellant bags could be removed.<br>88 mm: one-piece rounds.","For Operation Veritable on 8 February 1945, more than 1,000 guns fired from 5 a.m. to 10:30 before the infantry advanced."],
  ["Rockets","Nebelwerfer, Katyusha","15 cm and 21 cm high explosive and smoke (Nebelwerfer)<br>M-8 82 mm and M-13 132 mm (Katyusha)","By truck to the launch site; each 15 cm Nebelwerfer rocket weighed some 32–36 kg, each M-13 about 42 kg.","The 15 cm Nebelwerfer rocket had its motor at the front and its warhead behind, so the warhead burst above the ground."],
  ["Aircraft guns and bombs","Spitfire, Hurricane, Bf 109, Ju 87, Lancaster, B-17","Machine-gun rounds (.303, .50, 7.92 mm)<br>20 mm and 30 mm cannon shells<br>Bombs from 50 kg to the 12,000 lb Tallboy and 22,000 lb Grand Slam","Belts in the wings or fuselage: a Spitfire Mk I carried 300 rounds a gun, enough for about 15 seconds of firing.","From 1941 most fighters added 20 mm cannon: one hit from an explosive shell did more damage than many rifle-calibre bullets."]
];
