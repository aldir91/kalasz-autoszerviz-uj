// Minden üzleti adat egy helyen: itt szerkeszthető.
export const site = {
  name: 'Kalász Autószerviz',
  defaultTitle: 'Kalász Autószerviz - Békés',
  description:
    'Autószerviz Békésen és környékén. Fék, futómű, diagnosztika, olajcsere, műszaki felkészítés. Q-Service hálózat tagja, 15+ év tapasztalat.',
  phone: '+36 70 368 3302',
  phoneHref: 'tel:+36703683302',
  email: 'nagy.csavas@gmail.com',
  address: { street: 'Kalász sor 28.', zip: '5630', city: 'Békés' },
  facebook: 'https://www.facebook.com/p/Kal%C3%A1sz-Aut%C3%B3szerviz-61582370366586/',
  // Google Cégprofil "Vélemények" linkje
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=K%C3%A1l%C3%A1sz+Aut%C3%B3szerviz+B%C3%A9k%C3%A9s',
  // valós értékek, ha megvannak (null = nem jelenik meg)
  rating: null as null | { value: string; count: number },
  googleRating: { value: '5,0', label: 'közel 80 vélemény' },
  hours: [
    { days: 'Hétfő – Péntek', time: '08:00 – 17:00' },
    { days: 'Szombat – Vasárnap', time: 'Zárva' },
  ],
  // adatkezelési tájékoztató
  legal: { company: 'Kalász Autószerviz [cégnév / egyéni vállalkozó neve]', taxId: '[adószám]', regId: '[nyilvántartási szám]' },
};

export const services = [
  { title: 'Fékjavítás', text: 'Féktárcsa, fékbetét, fékfolyadék csere – gyorsan és garanciával.' },
  { title: 'Futómű-javítás', text: 'Lengéscsillapító, stabilizátor, futómű geometria beállítás.' },
  { title: 'Motor diagnosztika', text: 'Bosch diagnosztika, hibakód olvasás, pontos hibafeltárás.' },
  { title: 'Olajcsere', text: 'Motorolaj és szűrők cseréje márkafüggetlenül, minőségi alapanyagokkal.' },
  { title: 'Vezérlés és kuplung csere', text: 'Vezérműszíj, vezérműlánc, kuplung szett csere szakszerűen.' },
  { title: 'Elektromos hibák javítása', text: 'Elektromos rendszer diagnosztika és javítás minden márkára.' },
  { title: 'Műszaki vizsgára való felkészítés', text: 'Teljes körű átvizsgálás és felkészítés a műszaki vizsgára.' },
  { title: 'Általános karbantartás', text: 'Időszakos szervizelés, ellenőrzés, megelőző karbantartás.' },
];

export const facts = [
  'Q-Service hálózat tagja',
  '15+ év tapasztalat',
  'Garancia minden javításra',
  'Márkafüggetlen szerviz',
  'Bosch diagnosztika',
  'Békés és környéke',
];

// Google-értékelések. Üres tömb = a szekció csak a gombot mutatja.
export const reviews: { name: string; text: string }[] = [
  { name: 'F. Eszter', text: 'Nagyon segítőkészek, kedvesek és jó szakemberek. Ha kell, azonnal megoldják a felmerülő problémát.' },
  { name: 'K. András', text: 'Több autót is szereltettem már velük, ha gyors beavatkozásra van szükség akkor is számíthatok a segítségükre és műszaki vizsgára is tökéletesen felkészítik az autót. A költségekről folyamatosan adnak tájékoztatást és a végén áttekinthető számlát adnak. Csak javasolni tudom mindenkinek.' },
  { name: 'A. Zsolt', text: 'Kiépített szakmai háttér, itt egy helyen mindent javítathatsz, nem kell szerelőtől- szerelőhöz rohangálni. Gyors, pontos ügyintézés, előzetes ár ajánlat egyeztetés, nincs meglepetés, zsákba macska!!! További sok sikert, sok ügyfelet kívánok!' },
  { name: 'M. Gábor', text: 'Megbízható, precíz munka, folyamatos kommunikáció és dokumentálás mellett! Nagyon ajánlom!' },
];
