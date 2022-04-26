import { whois } from '../.';

// jest.setTimeout(30000);
//
// afterEach(async () => {
//   await new Promise((resolve) => { setTimeout(resolve, 750); });
// });

describe('Whois Handler e2e test', () => {
  // ac
  it('should return unregistered ac domain', async () => {
    const response = await whois('kmedia-is-awesome.ac');
    expect(response.registered).toBe(false);
  });

  // academy
  it('should return unregistered academy domain', async () => {
    const response = await whois('kmedia-is-awesome.academy');
    expect(response.registered).toBe(false);
  });

  // accountant
  it('should return unregistered accountant domain', async () => {
    const response = await whois('kmedia-is-awesome.accountant');
    expect(response.registered).toBe(false);
  });

  // accountants
  it('should return unregistered accountants domain', async () => {
    const response = await whois('kmedia-is-awesome.accountants');
    expect(response.registered).toBe(false);
  });

  // actor
  it('should return unregistered actor domain', async () => {
    const response = await whois('kmedia-is-awesome.actor');
    expect(response.registered).toBe(false);
  });

  // adult
  it('should return unregistered adult domain', async () => {
    const response = await whois('kmedia-is-awesome.adult');
    expect(response.registered).toBe(false);
  });

  // ae
  it('should return unregistered ae domain', async () => {
    const response = await whois('kmedia-is-awesome.ae');
    expect(response.registered).toBe(false);
  });

  // aero
  it('should return unregistered aero domain', async () => {
    const response = await whois('kmedia-is-awesome.aero');
    expect(response.registered).toBe(false);
  });

  // af
  it('should return unregistered af domain', async () => {
    const response = await whois('kmedia-is-awesome.af');
    expect(response.registered).toBe(false);
  });

  // africa
  it('should return unregistered africa domain', async () => {
    const response = await whois('kmedia-is-awesome.africa');
    expect(response.registered).toBe(false);
  });

  // ag
  it('should return unregistered ag domain', async () => {
    const response = await whois('kmedia-is-awesome.ag');
    expect(response.registered).toBe(false);
  });

  // agency
  it('should return unregistered agency domain', async () => {
    const response = await whois('kmedia-is-awesome.agency');
    expect(response.registered).toBe(false);
  });

  // ai
  it('should return unregistered ai domain', async () => {
    const response = await whois('kmedia-is-awesome.ai');
    expect(response.registered).toBe(false);
  });

  // am
  it('should return unregistered am domain', async () => {
    const response = await whois('kmedia-is-awesome.am');
    expect(response.registered).toBe(false);
  });

  // amsterdam
  it('should return unregistered amsterdam domain', async () => {
    const response = await whois('kmedia-is-awesome.amsterdam');
    expect(response.registered).toBe(false);
  });

  // apartments
  it('should return unregistered apartments domain', async () => {
    const response = await whois('kmedia-is-awesome.apartments');
    expect(response.registered).toBe(false);
  });

  // app
  it('should return unregistered app domain', async () => {
    const response = await whois('kmedia-is-awesome.app');
    expect(response.registered).toBe(false);
  });

  // archi
  it('should return unregistered archi domain', async () => {
    const response = await whois('kmedia-is-awesome.archi');
    expect(response.registered).toBe(false);
  });

  // art
  it('should return unregistered art domain', async () => {
    const response = await whois('kmedia-is-awesome.art');
    expect(response.registered).toBe(false);
  });

  // as
  it('should return unregistered as domain', async () => {
    const response = await whois('kmedia-is-awesome.as');
    expect(response.registered).toBe(false);
  });

  // asia
  it('should return unregistered asia domain', async () => {
    const response = await whois('kmedia-is-awesome.asia');
    expect(response.registered).toBe(false);
  });

  // associates
  it('should return unregistered associates domain', async () => {
    const response = await whois('kmedia-is-awesome.associates');
    expect(response.registered).toBe(false);
  });

  // at
  it('should return unregistered at domain', async () => {
    const response = await whois('kmedia-is-awesome.at');
    expect(response.registered).toBe(false);
  });

  // attorney
  it('should return unregistered attorney domain', async () => {
    const response = await whois('kmedia-is-awesome.attorney');
    expect(response.registered).toBe(false);
  });

  // auction
  it('should return unregistered auction domain', async () => {
    const response = await whois('kmedia-is-awesome.auction');
    expect(response.registered).toBe(false);
  });

  // audio
  it('should return unregistered audio domain', async () => {
    const response = await whois('kmedia-is-awesome.audio');
    expect(response.registered).toBe(false);
  });

  // auto
  it('should return unregistered auto domain', async () => {
    const response = await whois('kmedia-is-awesome.auto');
    expect(response.registered).toBe(false);
  });

  // ba
  // Error: No WHOIS server!
  // it('should return unregistered ba domain', async () => {
  //   const response = await whois('kmedia-is-awesome.ba');
  //   expect(response.registered).toBe(false);
  // });

  // baby
  it('should return unregistered baby domain', async () => {
    const response = await whois('kmedia-is-awesome.baby');
    expect(response.registered).toBe(false);
  });

  // band
  it('should return unregistered band domain', async () => {
    const response = await whois('kmedia-is-awesome.band');
    expect(response.registered).toBe(false);
  });

  // bar
  it('should return unregistered bar domain', async () => {
    const response = await whois('kmedia-is-awesome.bar');
    expect(response.registered).toBe(false);
  });

  // barcelona
  it('should return unregistered barcelona domain', async () => {
    const response = await whois('kmedia-is-awesome.barcelona');
    expect(response.registered).toBe(false);
  });

  // bargains
  it('should return unregistered bargains domain', async () => {
    const response = await whois('kmedia-is-awesome.bargains');
    expect(response.registered).toBe(false);
  });

  // bayern
  it('should return unregistered bayern domain', async () => {
    const response = await whois('kmedia-is-awesome.bayern');
    expect(response.registered).toBe(false);
  });

  // be
  it('should return unregistered be domain', async () => {
    const response = await whois('kmedia-is-awesome.be');
    expect(response.registered).toBe(false);
  });

  // beer
  it('should return unregistered beer domain', async () => {
    const response = await whois('kmedia-is-awesome.beer');
    expect(response.registered).toBe(false);
  });

  // berlin
  it('should return unregistered berlin domain', async () => {
    const response = await whois('kmedia-is-awesome.berlin');
    expect(response.registered).toBe(false);
  });

  // best
  it('should return unregistered best domain', async () => {
    const response = await whois('kmedia-is-awesome.best');
    expect(response.registered).toBe(false);
  });

  // bet
  it('should return unregistered bet domain', async () => {
    const response = await whois('kmedia-is-awesome.bet');
    expect(response.registered).toBe(false);
  });

  // bg
  it('should return unregistered bg domain', async () => {
    const response = await whois('kmedia-is-awesome.bg');
    expect(response.registered).toBe(false);
  });

  // bid
  it('should return unregistered bid domain', async () => {
    const response = await whois('kmedia-is-awesome.bid');
    expect(response.registered).toBe(false);
  });

  // bike
  it('should return unregistered bike domain', async () => {
    const response = await whois('kmedia-is-awesome.bike');
    expect(response.registered).toBe(false);
  });

  // bingo
  it('should return unregistered bingo domain', async () => {
    const response = await whois('kmedia-is-awesome.bingo');
    expect(response.registered).toBe(false);
  });

  // bio
  it('should return unregistered bio domain', async () => {
    const response = await whois('kmedia-is-awesome.bio');
    expect(response.registered).toBe(false);
  });

  // biz
  it('should return unregistered biz domain', async () => {
    const response = await whois('kmedia-is-awesome.biz');
    expect(response.registered).toBe(false);
  });

  // black
  it('should return unregistered black domain', async () => {
    const response = await whois('kmedia-is-awesome.black');
    expect(response.registered).toBe(false);
  });

  // blackfriday
  it('should return unregistered blackfriday domain', async () => {
    const response = await whois('kmedia-is-awesome.blackfriday');
    expect(response.registered).toBe(false);
  });

  // blog
  it('should return unregistered blog domain', async () => {
    const response = await whois('kmedia-is-awesome.blog');
    expect(response.registered).toBe(false);
  });

  // blue
  it('should return unregistered blue domain', async () => {
    const response = await whois('kmedia-is-awesome.blue');
    expect(response.registered).toBe(false);
  });

  // boutique
  it('should return unregistered boutique domain', async () => {
    const response = await whois('kmedia-is-awesome.boutique');
    expect(response.registered).toBe(false);
  });

  // broker
  it('should return unregistered broker domain', async () => {
    const response = await whois('kmedia-is-awesome.broker');
    expect(response.registered).toBe(false);
  });

  // brussels
  it('should return unregistered brussels domain', async () => {
    const response = await whois('kmedia-is-awesome.brussels');
    expect(response.registered).toBe(false);
  });

  // build
  it('should return unregistered build domain', async () => {
    const response = await whois('kmedia-is-awesome.build');
    expect(response.registered).toBe(false);
  });

  // builders
  it('should return unregistered builders domain', async () => {
    const response = await whois('kmedia-is-awesome.builders');
    expect(response.registered).toBe(false);
  });

  // business
  it('should return unregistered business domain', async () => {
    const response = await whois('kmedia-is-awesome.business');
    expect(response.registered).toBe(false);
  });

  // buzz
  // Error: No WHOIS server!
  // it('should return unregistered buzz domain', async () => {
  //   const response = await whois('kmedia-is-awesome.buzz');
  //   expect(response.registered).toBe(false);
  // });

  // by
  // Error: Timeout
  // it('should return unregistered by domain', async () => {
  //   const response = await whois('kmedia-is-awesome.by');
  //   expect(response.registered).toBe(false);
  // });

  // bz
  // Error: No WHOIS server!
  // it('should return unregistered bz domain', async () => {
  //   const response = await whois('kmedia-is-awesome.bz');
  //   expect(response.registered).toBe(false);
  // });

  // ca
  it('should return unregistered ca domain', async () => {
    const response = await whois('kmedia-is-awesome.ca');
    expect(response.registered).toBe(false);
  });

  // cab
  it('should return unregistered cab domain', async () => {
    const response = await whois('kmedia-is-awesome.cab');
    expect(response.registered).toBe(false);
  });

  // cafe
  it('should return unregistered cafe domain', async () => {
    const response = await whois('kmedia-is-awesome.cafe');
    expect(response.registered).toBe(false);
  });

  // cam
  it('should return unregistered cam domain', async () => {
    const response = await whois('kmedia-is-awesome.cam');
    expect(response.registered).toBe(false);
  });

  // camera
  it('should return unregistered camera domain', async () => {
    const response = await whois('kmedia-is-awesome.camera');
    expect(response.registered).toBe(false);
  });

  // camp
  it('should return unregistered camp domain', async () => {
    const response = await whois('kmedia-is-awesome.camp');
    expect(response.registered).toBe(false);
  });

  // capetown
  it('should return unregistered capetown domain', async () => {
    const response = await whois('kmedia-is-awesome.capetown');
    expect(response.registered).toBe(false);
  });

  // capital
  it('should return unregistered capital domain', async () => {
    const response = await whois('kmedia-is-awesome.capital');
    expect(response.registered).toBe(false);
  });

  // car
  it('should return unregistered car domain', async () => {
    const response = await whois('kmedia-is-awesome.car');
    expect(response.registered).toBe(false);
  });

  // cards
  it('should return unregistered cards domain', async () => {
    const response = await whois('kmedia-is-awesome.cards');
    expect(response.registered).toBe(false);
  });

  // care
  it('should return unregistered care domain', async () => {
    const response = await whois('kmedia-is-awesome.care');
    expect(response.registered).toBe(false);
  });

  // career
  it('should return unregistered career domain', async () => {
    const response = await whois('kmedia-is-awesome.career');
    expect(response.registered).toBe(false);
  });

  // careers
  it('should return unregistered careers domain', async () => {
    const response = await whois('kmedia-is-awesome.careers');
    expect(response.registered).toBe(false);
  });

  // cars
  it('should return unregistered cars domain', async () => {
    const response = await whois('kmedia-is-awesome.cars');
    expect(response.registered).toBe(false);
  });

  // casa
  it('should return unregistered casa domain', async () => {
    const response = await whois('kmedia-is-awesome.casa');
    expect(response.registered).toBe(false);
  });

  // cash
  it('should return unregistered cash domain', async () => {
    const response = await whois('kmedia-is-awesome.cash');
    expect(response.registered).toBe(false);
  });

  // casino
  it('should return unregistered casino domain', async () => {
    const response = await whois('kmedia-is-awesome.casino');
    expect(response.registered).toBe(false);
  });

  // cat
  it('should return unregistered cat domain', async () => {
    const response = await whois('kmedia-is-awesome.cat');
    expect(response.registered).toBe(false);
  });

  // catering
  it('should return unregistered catering domain', async () => {
    const response = await whois('kmedia-is-awesome.catering');
    expect(response.registered).toBe(false);
  });

  // cc
  it('should return unregistered cc domain', async () => {
    const response = await whois('kmedia-is-awesome.cc');
    expect(response.registered).toBe(false);
  });

  // center
  it('should return unregistered center domain', async () => {
    const response = await whois('kmedia-is-awesome.center');
    expect(response.registered).toBe(false);
  });

  // ceo
  it('should return unregistered ceo domain', async () => {
    const response = await whois('kmedia-is-awesome.ceo');
    expect(response.registered).toBe(false);
  });

  // cfd
  it('should return unregistered cfd domain', async () => {
    const response = await whois('kmedia-is-awesome.cfd');
    expect(response.registered).toBe(false);
  });

  // cg
  // Error: No WHOIS server!
  // it('should return unregistered cg domain', async () => {
  //   const response = await whois('kmedia-is-awesome.cg');
  //   expect(response.registered).toBe(false);
  // });

  // ch
  it('should return unregistered ch domain', async () => {
    const response = await whois('kmedia-is-awesome.ch');
    expect(response.registered).toBe(false);
  });

  // chat
  it('should return unregistered chat domain', async () => {
    const response = await whois('kmedia-is-awesome.chat');
    expect(response.registered).toBe(false);
  });

  // cheap
  it('should return unregistered cheap domain', async () => {
    const response = await whois('kmedia-is-awesome.cheap');
    expect(response.registered).toBe(false);
  });

  // christmas
  it('should return unregistered christmas domain', async () => {
    const response = await whois('kmedia-is-awesome.christmas');
    expect(response.registered).toBe(false);
  });

  // church
  it('should return unregistered church domain', async () => {
    const response = await whois('kmedia-is-awesome.church');
    expect(response.registered).toBe(false);
  });

  // city
  it('should return unregistered city domain', async () => {
    const response = await whois('kmedia-is-awesome.city');
    expect(response.registered).toBe(false);
  });

  // cl
  it('should return unregistered cl domain', async () => {
    const response = await whois('kmedia-is-awesome.cl');
    expect(response.registered).toBe(false);
  });

  // claims
  it('should return unregistered claims domain', async () => {
    const response = await whois('kmedia-is-awesome.claims');
    expect(response.registered).toBe(false);
  });

  // cleaning
  it('should return unregistered cleaning domain', async () => {
    const response = await whois('kmedia-is-awesome.cleaning');
    expect(response.registered).toBe(false);
  });

  // click
  it('should return unregistered click domain', async () => {
    const response = await whois('kmedia-is-awesome.click');
    expect(response.registered).toBe(false);
  });

  // clinic
  it('should return unregistered clinic domain', async () => {
    const response = await whois('kmedia-is-awesome.clinic');
    expect(response.registered).toBe(false);
  });

  // clothing
  it('should return unregistered clothing domain', async () => {
    const response = await whois('kmedia-is-awesome.clothing');
    expect(response.registered).toBe(false);
  });

  // cloud
  it('should return unregistered cloud domain', async () => {
    const response = await whois('kmedia-is-awesome.cloud');
    expect(response.registered).toBe(false);
  });

  // club
  it('should return unregistered club domain', async () => {
    const response = await whois('kmedia-is-awesome.club');
    expect(response.registered).toBe(false);
  });

  // cn
  it('should return unregistered cn domain', async () => {
    const response = await whois('kmedia-is-awesome.cn');
    expect(response.registered).toBe(false);
  });

  // co
  it('should return unregistered co domain', async () => {
    const response = await whois('kmedia-is-awesome.co');
    expect(response.registered).toBe(false);
  });

  // coach
  it('should return unregistered coach domain', async () => {
    const response = await whois('kmedia-is-awesome.coach');
    expect(response.registered).toBe(false);
  });

  // codes
  it('should return unregistered codes domain', async () => {
    const response = await whois('kmedia-is-awesome.codes');
    expect(response.registered).toBe(false);
  });

  // coffee
  it('should return unregistered coffee domain', async () => {
    const response = await whois('kmedia-is-awesome.coffee');
    expect(response.registered).toBe(false);
  });

  // college
  it('should return unregistered college domain', async () => {
    const response = await whois('kmedia-is-awesome.college');
    expect(response.registered).toBe(false);
  });

  // cologne
  it('should return unregistered cologne domain', async () => {
    const response = await whois('kmedia-is-awesome.cologne');
    expect(response.registered).toBe(false);
  });

  // com
  it('should return unregistered com domain', async () => {
    const response = await whois('kmedia-is-awesome.com');
    expect(response.registered).toBe(false);
  });

  // community
  it('should return unregistered community domain', async () => {
    const response = await whois('kmedia-is-awesome.community');
    expect(response.registered).toBe(false);
  });

  // company
  it('should return unregistered company domain', async () => {
    const response = await whois('kmedia-is-awesome.company');
    expect(response.registered).toBe(false);
  });

  // computer
  it('should return unregistered computer domain', async () => {
    const response = await whois('kmedia-is-awesome.computer');
    expect(response.registered).toBe(false);
  });

  // condos
  it('should return unregistered condos domain', async () => {
    const response = await whois('kmedia-is-awesome.condos');
    expect(response.registered).toBe(false);
  });

  // construction
  it('should return unregistered construction domain', async () => {
    const response = await whois('kmedia-is-awesome.construction');
    expect(response.registered).toBe(false);
  });

  // consulting
  it('should return unregistered consulting domain', async () => {
    const response = await whois('kmedia-is-awesome.consulting');
    expect(response.registered).toBe(false);
  });

  // contact
  it('should return unregistered contact domain', async () => {
    const response = await whois('kmedia-is-awesome.contact');
    expect(response.registered).toBe(false);
  });

  // contractors
  it('should return unregistered contractors domain', async () => {
    const response = await whois('kmedia-is-awesome.contractors');
    expect(response.registered).toBe(false);
  });

  // cooking
  it('should return unregistered cooking domain', async () => {
    const response = await whois('kmedia-is-awesome.cooking');
    expect(response.registered).toBe(false);
  });

  // cool
  it('should return unregistered cool domain', async () => {
    const response = await whois('kmedia-is-awesome.cool');
    expect(response.registered).toBe(false);
  });

  // country
  it('should return unregistered country domain', async () => {
    const response = await whois('kmedia-is-awesome.country');
    expect(response.registered).toBe(false);
  });

  // coupons
  it('should return unregistered coupons domain', async () => {
    const response = await whois('kmedia-is-awesome.coupons');
    expect(response.registered).toBe(false);
  });

  // courses
  it('should return unregistered courses domain', async () => {
    const response = await whois('kmedia-is-awesome.courses');
    expect(response.registered).toBe(false);
  });

  // credit
  it('should return unregistered credit domain', async () => {
    const response = await whois('kmedia-is-awesome.credit');
    expect(response.registered).toBe(false);
  });

  // creditcard
  it('should return unregistered creditcard domain', async () => {
    const response = await whois('kmedia-is-awesome.creditcard');
    expect(response.registered).toBe(false);
  });

  // cricket
  it('should return unregistered cricket domain', async () => {
    const response = await whois('kmedia-is-awesome.cricket');
    expect(response.registered).toBe(false);
  });

  // cruises
  it('should return unregistered cruises domain', async () => {
    const response = await whois('kmedia-is-awesome.cruises');
    expect(response.registered).toBe(false);
  });

  // cx
  it('should return unregistered cx domain', async () => {
    const response = await whois('kmedia-is-awesome.cx');
    expect(response.registered).toBe(false);
  });

  // cymru
  it('should return unregistered cymru domain', async () => {
    const response = await whois('kmedia-is-awesome.cymru');
    expect(response.registered).toBe(false);
  });

  // cyou
  it('should return unregistered cyou domain', async () => {
    const response = await whois('kmedia-is-awesome.cyou');
    expect(response.registered).toBe(false);
  });

  // cz
  it('should return unregistered cz domain', async () => {
    const response = await whois('kmedia-is-awesome.cz');
    expect(response.registered).toBe(false);
  });

  // dance
  it('should return unregistered dance domain', async () => {
    const response = await whois('kmedia-is-awesome.dance');
    expect(response.registered).toBe(false);
  });

  // date
  it('should return unregistered date domain', async () => {
    const response = await whois('kmedia-is-awesome.date');
    expect(response.registered).toBe(false);
  });

  // dating
  it('should return unregistered dating domain', async () => {
    const response = await whois('kmedia-is-awesome.dating');
    expect(response.registered).toBe(false);
  });

  // de
  it('should return unregistered de domain', async () => {
    const response = await whois('kmedia-is-awesome.de');
    expect(response.registered).toBe(false);
  });

  // deals
  it('should return unregistered deals domain', async () => {
    const response = await whois('kmedia-is-awesome.deals');
    expect(response.registered).toBe(false);
  });

  // degree
  it('should return unregistered degree domain', async () => {
    const response = await whois('kmedia-is-awesome.degree');
    expect(response.registered).toBe(false);
  });

  // delivery
  it('should return unregistered delivery domain', async () => {
    const response = await whois('kmedia-is-awesome.delivery');
    expect(response.registered).toBe(false);
  });

  // democrat
  it('should return unregistered democrat domain', async () => {
    const response = await whois('kmedia-is-awesome.democrat');
    expect(response.registered).toBe(false);
  });

  // dental
  it('should return unregistered dental domain', async () => {
    const response = await whois('kmedia-is-awesome.dental');
    expect(response.registered).toBe(false);
  });

  // dentist
  it('should return unregistered dentist domain', async () => {
    const response = await whois('kmedia-is-awesome.dentist');
    expect(response.registered).toBe(false);
  });

  // design
  it('should return unregistered design domain', async () => {
    const response = await whois('kmedia-is-awesome.design');
    expect(response.registered).toBe(false);
  });

  // dev
  it('should return unregistered dev domain', async () => {
    const response = await whois('kmedia-is-awesome.dev');
    expect(response.registered).toBe(false);
  });

  // diamonds
  it('should return unregistered diamonds domain', async () => {
    const response = await whois('kmedia-is-awesome.diamonds');
    expect(response.registered).toBe(false);
  });

  // diet
  it('should return unregistered diet domain', async () => {
    const response = await whois('kmedia-is-awesome.diet');
    expect(response.registered).toBe(false);
  });

  // digital
  it('should return unregistered digital domain', async () => {
    const response = await whois('kmedia-is-awesome.digital');
    expect(response.registered).toBe(false);
  });

  // direct
  it('should return unregistered direct domain', async () => {
    const response = await whois('kmedia-is-awesome.direct');
    expect(response.registered).toBe(false);
  });

  // directory
  it('should return unregistered directory domain', async () => {
    const response = await whois('kmedia-is-awesome.directory');
    expect(response.registered).toBe(false);
  });

  // discount
  it('should return unregistered discount domain', async () => {
    const response = await whois('kmedia-is-awesome.discount');
    expect(response.registered).toBe(false);
  });

  // dj
  // Error: No WHOIS server!
  // it('should return unregistered dj domain', async () => {
  //   const response = await whois('kmedia-is-awesome.dj');
  //   expect(response.registered).toBe(false);
  // });

  // dk
  it('should return unregistered dk domain', async () => {
    const response = await whois('kmedia-is-awesome.dk');
    expect(response.registered).toBe(false);
  });

  // do
  it('should return unregistered do domain', async () => {
    const response = await whois('kmedia-is-awesome.do');
    expect(response.registered).toBe(false);
  });

  // dog
  it('should return unregistered dog domain', async () => {
    const response = await whois('kmedia-is-awesome.dog');
    expect(response.registered).toBe(false);
  });

  // domains
  it('should return unregistered domains domain', async () => {
    const response = await whois('kmedia-is-awesome.domains');
    expect(response.registered).toBe(false);
  });

  // download
  it('should return unregistered download domain', async () => {
    const response = await whois('kmedia-is-awesome.download');
    expect(response.registered).toBe(false);
  });

  // durban
  it('should return unregistered durban domain', async () => {
    const response = await whois('kmedia-is-awesome.durban');
    expect(response.registered).toBe(false);
  });

  // dz
  // Error: Timeout
  // it('should return unregistered dz domain', async () => {
  //   const response = await whois('kmedia-is-awesome.dz');
  //   expect(response.registered).toBe(false);
  // });

  // earth
  it('should return unregistered earth domain', async () => {
    const response = await whois('kmedia-is-awesome.earth');
    expect(response.registered).toBe(false);
  });

  // ec
  // Error: Timeout
  // it('should return unregistered ec domain', async () => {
  //   const response = await whois('kmedia-is-awesome.ec');
  //   expect(response.registered).toBe(false);
  // });

  // eco
  it('should return unregistered eco domain', async () => {
    const response = await whois('kmedia-is-awesome.eco');
    expect(response.registered).toBe(false);
  });

  // education
  it('should return unregistered education domain', async () => {
    const response = await whois('kmedia-is-awesome.education');
    expect(response.registered).toBe(false);
  });

  // ee
  // Error: Timeout
  // it('should return unregistered ee domain', async () => {
  //   const response = await whois('kmedia-is-awesome.ee');
  //   expect(response.registered).toBe(false);
  // });

  // email
  it('should return unregistered email domain', async () => {
    const response = await whois('kmedia-is-awesome.email');
    expect(response.registered).toBe(false);
  });

  // energy
  it('should return unregistered energy domain', async () => {
    const response = await whois('kmedia-is-awesome.energy');
    expect(response.registered).toBe(false);
  });

  // engineer
  it('should return unregistered engineer domain', async () => {
    const response = await whois('kmedia-is-awesome.engineer');
    expect(response.registered).toBe(false);
  });

  // engineering
  it('should return unregistered engineering domain', async () => {
    const response = await whois('kmedia-is-awesome.engineering');
    expect(response.registered).toBe(false);
  });

  // enterprises
  it('should return unregistered enterprises domain', async () => {
    const response = await whois('kmedia-is-awesome.enterprises');
    expect(response.registered).toBe(false);
  });

  // equipment
  it('should return unregistered equipment domain', async () => {
    const response = await whois('kmedia-is-awesome.equipment');
    expect(response.registered).toBe(false);
  });

  // es
  it('should return unregistered es domain', async () => {
    const response = await whois('kmedia-is-awesome.es');
    expect(response.registered).toBe(false);
  });

  // estate
  it('should return unregistered estate domain', async () => {
    const response = await whois('kmedia-is-awesome.estate');
    expect(response.registered).toBe(false);
  });

  // eu
  it('should return unregistered eu domain', async () => {
    const response = await whois('kmedia-is-awesome.eu');
    expect(response.registered).toBe(false);
  });

  // events
  it('should return unregistered events domain', async () => {
    const response = await whois('kmedia-is-awesome.events');
    expect(response.registered).toBe(false);
  });

  // exchange
  it('should return unregistered exchange domain', async () => {
    const response = await whois('kmedia-is-awesome.exchange');
    expect(response.registered).toBe(false);
  });

  // expert
  it('should return unregistered expert domain', async () => {
    const response = await whois('kmedia-is-awesome.expert');
    expect(response.registered).toBe(false);
  });

  // exposed
  it('should return unregistered exposed domain', async () => {
    const response = await whois('kmedia-is-awesome.exposed');
    expect(response.registered).toBe(false);
  });

  // express
  it('should return unregistered express domain', async () => {
    const response = await whois('kmedia-is-awesome.express');
    expect(response.registered).toBe(false);
  });

  // fail
  it('should return unregistered fail domain', async () => {
    const response = await whois('kmedia-is-awesome.fail');
    expect(response.registered).toBe(false);
  });

  // faith
  it('should return unregistered faith domain', async () => {
    const response = await whois('kmedia-is-awesome.faith');
    expect(response.registered).toBe(false);
  });

  // family
  it('should return unregistered family domain', async () => {
    const response = await whois('kmedia-is-awesome.family');
    expect(response.registered).toBe(false);
  });

  // fans
  it('should return unregistered fans domain', async () => {
    const response = await whois('kmedia-is-awesome.fans');
    expect(response.registered).toBe(false);
  });

  // farm
  it('should return unregistered farm domain', async () => {
    const response = await whois('kmedia-is-awesome.farm');
    expect(response.registered).toBe(false);
  });

  // fashion
  it('should return unregistered fashion domain', async () => {
    const response = await whois('kmedia-is-awesome.fashion');
    expect(response.registered).toBe(false);
  });

  // fi
  it('should return unregistered fi domain', async () => {
    const response = await whois('kmedia-is-awesome.fi');
    expect(response.registered).toBe(false);
  });

  // film
  it('should return unregistered film domain', async () => {
    const response = await whois('kmedia-is-awesome.film');
    expect(response.registered).toBe(false);
  });

  // finance
  it('should return unregistered finance domain', async () => {
    const response = await whois('kmedia-is-awesome.finance');
    expect(response.registered).toBe(false);
  });

  // financial
  it('should return unregistered financial domain', async () => {
    const response = await whois('kmedia-is-awesome.financial');
    expect(response.registered).toBe(false);
  });

  // fish
  it('should return unregistered fish domain', async () => {
    const response = await whois('kmedia-is-awesome.fish');
    expect(response.registered).toBe(false);
  });

  // fishing
  it('should return unregistered fishing domain', async () => {
    const response = await whois('kmedia-is-awesome.fishing');
    expect(response.registered).toBe(false);
  });

  // fit
  it('should return unregistered fit domain', async () => {
    const response = await whois('kmedia-is-awesome.fit');
    expect(response.registered).toBe(false);
  });

  // fitness
  it('should return unregistered fitness domain', async () => {
    const response = await whois('kmedia-is-awesome.fitness');
    expect(response.registered).toBe(false);
  });

  // flights
  it('should return unregistered flights domain', async () => {
    const response = await whois('kmedia-is-awesome.flights');
    expect(response.registered).toBe(false);
  });

  // florist
  it('should return unregistered florist domain', async () => {
    const response = await whois('kmedia-is-awesome.florist');
    expect(response.registered).toBe(false);
  });

  // flowers
  it('should return unregistered flowers domain', async () => {
    const response = await whois('kmedia-is-awesome.flowers');
    expect(response.registered).toBe(false);
  });

  // fm
  it('should return unregistered fm domain', async () => {
    const response = await whois('kmedia-is-awesome.fm');
    expect(response.registered).toBe(false);
  });

  // football
  it('should return unregistered football domain', async () => {
    const response = await whois('kmedia-is-awesome.football');
    expect(response.registered).toBe(false);
  });

  // forex
  it('should return unregistered forex domain', async () => {
    const response = await whois('kmedia-is-awesome.forex');
    expect(response.registered).toBe(false);
  });

  // forsale
  it('should return unregistered forsale domain', async () => {
    const response = await whois('kmedia-is-awesome.forsale');
    expect(response.registered).toBe(false);
  });

  // foundation
  it('should return unregistered foundation domain', async () => {
    const response = await whois('kmedia-is-awesome.foundation');
    expect(response.registered).toBe(false);
  });

  // fr
  it('should return unregistered fr domain', async () => {
    const response = await whois('kmedia-is-awesome.fr');
    expect(response.registered).toBe(false);
  });

  // frl
  it('should return unregistered frl domain', async () => {
    const response = await whois('kmedia-is-awesome.frl');
    expect(response.registered).toBe(false);
  });

  // fun
  it('should return unregistered fun domain', async () => {
    const response = await whois('kmedia-is-awesome.fun');
    expect(response.registered).toBe(false);
  });

  // fund
  it('should return unregistered fund domain', async () => {
    const response = await whois('kmedia-is-awesome.fund');
    expect(response.registered).toBe(false);
  });

  // furniture
  it('should return unregistered furniture domain', async () => {
    const response = await whois('kmedia-is-awesome.furniture');
    expect(response.registered).toBe(false);
  });

  // futbol
  it('should return unregistered futbol domain', async () => {
    const response = await whois('kmedia-is-awesome.futbol');
    expect(response.registered).toBe(false);
  });

  // fyi
  it('should return unregistered fyi domain', async () => {
    const response = await whois('kmedia-is-awesome.fyi');
    expect(response.registered).toBe(false);
  });

  // gallery
  it('should return unregistered gallery domain', async () => {
    const response = await whois('kmedia-is-awesome.gallery');
    expect(response.registered).toBe(false);
  });

  // game
  it('should return unregistered game domain', async () => {
    const response = await whois('kmedia-is-awesome.game');
    expect(response.registered).toBe(false);
  });

  // games
  it('should return unregistered games domain', async () => {
    const response = await whois('kmedia-is-awesome.games');
    expect(response.registered).toBe(false);
  });

  // garden
  it('should return unregistered garden domain', async () => {
    const response = await whois('kmedia-is-awesome.garden');
    expect(response.registered).toBe(false);
  });

  // gay
  it('should return unregistered gay domain', async () => {
    const response = await whois('kmedia-is-awesome.gay');
    expect(response.registered).toBe(false);
  });

  // gd
  it('should return unregistered gd domain', async () => {
    const response = await whois('kmedia-is-awesome.gd');
    expect(response.registered).toBe(false);
  });

  // gg
  it('should return unregistered gg domain', async () => {
    const response = await whois('kmedia-is-awesome.gg');
    expect(response.registered).toBe(false);
  });

  // gift
  it('should return unregistered gift domain', async () => {
    const response = await whois('kmedia-is-awesome.gift');
    expect(response.registered).toBe(false);
  });

  // gifts
  it('should return unregistered gifts domain', async () => {
    const response = await whois('kmedia-is-awesome.gifts');
    expect(response.registered).toBe(false);
  });

  // gives
  it('should return unregistered gives domain', async () => {
    const response = await whois('kmedia-is-awesome.gives');
    expect(response.registered).toBe(false);
  });

  // gl
  // Error: Timeout
  // it('should return unregistered gl domain', async () => {
  //   const response = await whois('kmedia-is-awesome.gl');
  //   expect(response.registered).toBe(false);
  // });

  // glass
  it('should return unregistered glass domain', async () => {
    const response = await whois('kmedia-is-awesome.glass');
    expect(response.registered).toBe(false);
  });

  // global
  it('should return unregistered global domain', async () => {
    const response = await whois('kmedia-is-awesome.global');
    expect(response.registered).toBe(false);
  });

  // gmbh
  it('should return unregistered gmbh domain', async () => {
    const response = await whois('kmedia-is-awesome.gmbh');
    expect(response.registered).toBe(false);
  });

  // gold
  it('should return unregistered gold domain', async () => {
    const response = await whois('kmedia-is-awesome.gold');
    expect(response.registered).toBe(false);
  });

  // golf
  it('should return unregistered golf domain', async () => {
    const response = await whois('kmedia-is-awesome.golf');
    expect(response.registered).toBe(false);
  });

  // gr
  // Error: No WHOIS server!
  // it('should return unregistered gr domain', async () => {
  //   const response = await whois('kmedia-is-awesome.gr');
  //   expect(response.registered).toBe(false);
  // });

  // graphics
  it('should return unregistered graphics domain', async () => {
    const response = await whois('kmedia-is-awesome.graphics');
    expect(response.registered).toBe(false);
  });

  // gratis
  it('should return unregistered gratis domain', async () => {
    const response = await whois('kmedia-is-awesome.gratis');
    expect(response.registered).toBe(false);
  });

  // green
  it('should return unregistered green domain', async () => {
    const response = await whois('kmedia-is-awesome.green');
    expect(response.registered).toBe(false);
  });

  // gripe
  it('should return unregistered gripe domain', async () => {
    const response = await whois('kmedia-is-awesome.gripe');
    expect(response.registered).toBe(false);
  });

  // group
  it('should return unregistered group domain', async () => {
    const response = await whois('kmedia-is-awesome.group');
    expect(response.registered).toBe(false);
  });

  // gs
  // Error: Timeout
  // it('should return unregistered gs domain', async () => {
  //   const response = await whois('kmedia-is-awesome.gs');
  //   expect(response.registered).toBe(false);
  // });

  // guide
  it('should return unregistered guide domain', async () => {
    const response = await whois('kmedia-is-awesome.guide');
    expect(response.registered).toBe(false);
  });

  // guitars
  it('should return unregistered guitars domain', async () => {
    const response = await whois('kmedia-is-awesome.guitars');
    expect(response.registered).toBe(false);
  });

  // guru
  it('should return unregistered guru domain', async () => {
    const response = await whois('kmedia-is-awesome.guru');
    expect(response.registered).toBe(false);
  });

  // gy
  it('should return unregistered gy domain', async () => {
    const response = await whois('kmedia-is-awesome.gy');
    expect(response.registered).toBe(false);
  });

  // hamburg
  it('should return unregistered hamburg domain', async () => {
    const response = await whois('kmedia-is-awesome.hamburg');
    expect(response.registered).toBe(false);
  });

  // haus
  it('should return unregistered haus domain', async () => {
    const response = await whois('kmedia-is-awesome.haus');
    expect(response.registered).toBe(false);
  });

  // healthcare
  it('should return unregistered healthcare domain', async () => {
    const response = await whois('kmedia-is-awesome.healthcare');
    expect(response.registered).toBe(false);
  });

  // help
  it('should return unregistered help domain', async () => {
    const response = await whois('kmedia-is-awesome.help');
    expect(response.registered).toBe(false);
  });

  // hiphop
  it('should return unregistered hiphop domain', async () => {
    const response = await whois('kmedia-is-awesome.hiphop');
    expect(response.registered).toBe(false);
  });

  // hiv
  it('should return unregistered hiv domain', async () => {
    const response = await whois('kmedia-is-awesome.hiv');
    expect(response.registered).toBe(false);
  });

  // hk
  it('should return unregistered hk domain', async () => {
    const response = await whois('kmedia-is-awesome.hk');
    expect(response.registered).toBe(false);
  });

  // hockey
  it('should return unregistered hockey domain', async () => {
    const response = await whois('kmedia-is-awesome.hockey');
    expect(response.registered).toBe(false);
  });

  // holdings
  it('should return unregistered holdings domain', async () => {
    const response = await whois('kmedia-is-awesome.holdings');
    expect(response.registered).toBe(false);
  });

  // holiday
  it('should return unregistered holiday domain', async () => {
    const response = await whois('kmedia-is-awesome.holiday');
    expect(response.registered).toBe(false);
  });

  // horse
  it('should return unregistered horse domain', async () => {
    const response = await whois('kmedia-is-awesome.horse');
    expect(response.registered).toBe(false);
  });

  // hospital
  it('should return unregistered hospital domain', async () => {
    const response = await whois('kmedia-is-awesome.hospital');
    expect(response.registered).toBe(false);
  });

  // host
  it('should return unregistered host domain', async () => {
    const response = await whois('kmedia-is-awesome.host');
    expect(response.registered).toBe(false);
  });

  // hosting
  it('should return unregistered hosting domain', async () => {
    const response = await whois('kmedia-is-awesome.hosting');
    expect(response.registered).toBe(false);
  });

  // house
  it('should return unregistered house domain', async () => {
    const response = await whois('kmedia-is-awesome.house');
    expect(response.registered).toBe(false);
  });

  // how
  it('should return unregistered how domain', async () => {
    const response = await whois('kmedia-is-awesome.how');
    expect(response.registered).toBe(false);
  });

  // hr
  it('should return unregistered hr domain', async () => {
    const response = await whois('kmedia-is-awesome.hr');
    expect(response.registered).toBe(false);
  });

  // hu
  it('should return unregistered hu domain', async () => {
    const response = await whois('kmedia-is-awesome.hu');
    expect(response.registered).toBe(false);
  });

  // icu
  it('should return unregistered icu domain', async () => {
    const response = await whois('kmedia-is-awesome.icu');
    expect(response.registered).toBe(false);
  });

  // id
  it('should return unregistered id domain', async () => {
    const response = await whois('kmedia-is-awesome.id');
    expect(response.registered).toBe(false);
  });

  // ie
  it('should return unregistered ie domain', async () => {
    const response = await whois('kmedia-is-awesome.ie');
    expect(response.registered).toBe(false);
  });

  // im
  it('should return unregistered im domain', async () => {
    const response = await whois('kmedia-is-awesome.im');
    expect(response.registered).toBe(false);
  });

  // immo
  it('should return unregistered immo domain', async () => {
    const response = await whois('kmedia-is-awesome.immo');
    expect(response.registered).toBe(false);
  });

  // immobilien
  it('should return unregistered immobilien domain', async () => {
    const response = await whois('kmedia-is-awesome.immobilien');
    expect(response.registered).toBe(false);
  });

  // in
  it('should return unregistered in domain', async () => {
    const response = await whois('kmedia-is-awesome.in');
    expect(response.registered).toBe(false);
  });

  // inc
  it('should return unregistered inc domain', async () => {
    const response = await whois('kmedia-is-awesome.inc');
    expect(response.registered).toBe(false);
  });

  // industries
  it('should return unregistered industries domain', async () => {
    const response = await whois('kmedia-is-awesome.industries');
    expect(response.registered).toBe(false);
  });

  // info
  it('should return unregistered info domain', async () => {
    const response = await whois('kmedia-is-awesome.info');
    expect(response.registered).toBe(false);
  });

  // ink
  it('should return unregistered ink domain', async () => {
    const response = await whois('kmedia-is-awesome.ink');
    expect(response.registered).toBe(false);
  });

  // institute
  it('should return unregistered institute domain', async () => {
    const response = await whois('kmedia-is-awesome.institute');
    expect(response.registered).toBe(false);
  });

  // insure
  it('should return unregistered insure domain', async () => {
    const response = await whois('kmedia-is-awesome.insure');
    expect(response.registered).toBe(false);
  });

  // international
  it('should return unregistered international domain', async () => {
    const response = await whois('kmedia-is-awesome.international');
    expect(response.registered).toBe(false);
  });

  // investments
  it('should return unregistered investments domain', async () => {
    const response = await whois('kmedia-is-awesome.investments');
    expect(response.registered).toBe(false);
  });

  // io
  it('should return unregistered io domain', async () => {
    const response = await whois('kmedia-is-awesome.io');
    expect(response.registered).toBe(false);
  });

  // ir
  it('should return unregistered ir domain', async () => {
    const response = await whois('kmedia-is-awesome.ir');
    expect(response.registered).toBe(false);
  });

  // irish
  it('should return unregistered irish domain', async () => {
    const response = await whois('kmedia-is-awesome.irish');
    expect(response.registered).toBe(false);
  });

  // is
  it('should return unregistered is domain', async () => {
    const response = await whois('kmedia-is-awesome.is');
    expect(response.registered).toBe(false);
  });

  // istanbul
  it('should return unregistered istanbul domain', async () => {
    const response = await whois('kmedia-is-awesome.istanbul');
    expect(response.registered).toBe(false);
  });

  // it
  it('should return unregistered it domain', async () => {
    const response = await whois('kmedia-is-awesome.it');
    expect(response.registered).toBe(false);
  });

  // je
  it('should return unregistered je domain', async () => {
    const response = await whois('kmedia-is-awesome.je');
    expect(response.registered).toBe(false);
  });

  // jetzt
  it('should return unregistered jetzt domain', async () => {
    const response = await whois('kmedia-is-awesome.jetzt');
    expect(response.registered).toBe(false);
  });

  // jewelry
  it('should return unregistered jewelry domain', async () => {
    const response = await whois('kmedia-is-awesome.jewelry');
    expect(response.registered).toBe(false);
  });

  // jobs
  it('should return unregistered jobs domain', async () => {
    const response = await whois('kmedia-is-awesome.jobs');
    expect(response.registered).toBe(false);
  });

  // joburg
  it('should return unregistered joburg domain', async () => {
    const response = await whois('kmedia-is-awesome.joburg');
    expect(response.registered).toBe(false);
  });

  // jp
  it('should return unregistered jp domain', async () => {
    const response = await whois('kmedia-is-awesome.jp');
    expect(response.registered).toBe(false);
  });

  // juegos
  it('should return unregistered juegos domain', async () => {
    const response = await whois('kmedia-is-awesome.juegos');
    expect(response.registered).toBe(false);
  });

  // kaufen
  it('should return unregistered kaufen domain', async () => {
    const response = await whois('kmedia-is-awesome.kaufen');
    expect(response.registered).toBe(false);
  });

  // kim
  it('should return unregistered kim domain', async () => {
    const response = await whois('kmedia-is-awesome.kim');
    expect(response.registered).toBe(false);
  });

  // kitchen
  it('should return unregistered kitchen domain', async () => {
    const response = await whois('kmedia-is-awesome.kitchen');
    expect(response.registered).toBe(false);
  });

  // kiwi
  it('should return unregistered kiwi domain', async () => {
    const response = await whois('kmedia-is-awesome.kiwi');
    expect(response.registered).toBe(false);
  });

  // koeln
  it('should return unregistered koeln domain', async () => {
    const response = await whois('kmedia-is-awesome.koeln');
    expect(response.registered).toBe(false);
  });

  // kr
  it('should return unregistered kr domain', async () => {
    const response = await whois('kmedia-is-awesome.kr');
    expect(response.registered).toBe(false);
  });

  // kz
  it('should return unregistered kz domain', async () => {
    const response = await whois('kmedia-is-awesome.kz');
    expect(response.registered).toBe(false);
  });

  // la
  it('should return unregistered la domain', async () => {
    const response = await whois('kmedia-is-awesome.la');
    expect(response.registered).toBe(false);
  });

  // land
  it('should return unregistered land domain', async () => {
    const response = await whois('kmedia-is-awesome.land');
    expect(response.registered).toBe(false);
  });

  // law
  it('should return unregistered law domain', async () => {
    const response = await whois('kmedia-is-awesome.law');
    expect(response.registered).toBe(false);
  });

  // lawyer
  it('should return unregistered lawyer domain', async () => {
    const response = await whois('kmedia-is-awesome.lawyer');
    expect(response.registered).toBe(false);
  });

  // lc
  // Error: No WHOIS server!
  // it('should return unregistered lc domain', async () => {
  //   const response = await whois('kmedia-is-awesome.lc');
  //   expect(response.registered).toBe(false);
  // });

  // lease
  it('should return unregistered lease domain', async () => {
    const response = await whois('kmedia-is-awesome.lease');
    expect(response.registered).toBe(false);
  });

  // legal
  it('should return unregistered legal domain', async () => {
    const response = await whois('kmedia-is-awesome.legal');
    expect(response.registered).toBe(false);
  });

  // lgbt
  it('should return unregistered lgbt domain', async () => {
    const response = await whois('kmedia-is-awesome.lgbt');
    expect(response.registered).toBe(false);
  });

  // li
  it('should return unregistered li domain', async () => {
    const response = await whois('kmedia-is-awesome.li');
    expect(response.registered).toBe(false);
  });

  // life
  it('should return unregistered life domain', async () => {
    const response = await whois('kmedia-is-awesome.life');
    expect(response.registered).toBe(false);
  });

  // lighting
  it('should return unregistered lighting domain', async () => {
    const response = await whois('kmedia-is-awesome.lighting');
    expect(response.registered).toBe(false);
  });

  // limited
  it('should return unregistered limited domain', async () => {
    const response = await whois('kmedia-is-awesome.limited');
    expect(response.registered).toBe(false);
  });

  // limo
  it('should return unregistered limo domain', async () => {
    const response = await whois('kmedia-is-awesome.limo');
    expect(response.registered).toBe(false);
  });

  // link
  it('should return unregistered link domain', async () => {
    const response = await whois('kmedia-is-awesome.link');
    expect(response.registered).toBe(false);
  });

  // live
  it('should return unregistered live domain', async () => {
    const response = await whois('kmedia-is-awesome.live');
    expect(response.registered).toBe(false);
  });

  // loan
  it('should return unregistered loan domain', async () => {
    const response = await whois('kmedia-is-awesome.loan');
    expect(response.registered).toBe(false);
  });

  // loans
  it('should return unregistered loans domain', async () => {
    const response = await whois('kmedia-is-awesome.loans');
    expect(response.registered).toBe(false);
  });

  // lol
  it('should return unregistered lol domain', async () => {
    const response = await whois('kmedia-is-awesome.lol');
    expect(response.registered).toBe(false);
  });

  // london
  it('should return unregistered london domain', async () => {
    const response = await whois('kmedia-is-awesome.london');
    expect(response.registered).toBe(false);
  });

  // lotto
  it('should return unregistered lotto domain', async () => {
    const response = await whois('kmedia-is-awesome.lotto');
    expect(response.registered).toBe(false);
  });

  // love
  it('should return unregistered love domain', async () => {
    const response = await whois('kmedia-is-awesome.love');
    expect(response.registered).toBe(false);
  });

  // lt
  it('should return unregistered lt domain', async () => {
    const response = await whois('kmedia-is-awesome.lt');
    expect(response.registered).toBe(false);
  });

  // ltd
  it('should return unregistered ltd domain', async () => {
    const response = await whois('kmedia-is-awesome.ltd');
    expect(response.registered).toBe(false);
  });

  // lu
  it('should return unregistered lu domain', async () => {
    const response = await whois('kmedia-is-awesome.lu');
    expect(response.registered).toBe(false);
  });

  // luxe
  it('should return unregistered luxe domain', async () => {
    const response = await whois('kmedia-is-awesome.luxe');
    expect(response.registered).toBe(false);
  });

  // luxury
  it('should return unregistered luxury domain', async () => {
    const response = await whois('kmedia-is-awesome.luxury');
    expect(response.registered).toBe(false);
  });

  // lv
  it('should return unregistered lv domain', async () => {
    const response = await whois('kmedia-is-awesome.lv');
    expect(response.registered).toBe(false);
  });

  // ly
  it('should return unregistered ly domain', async () => {
    const response = await whois('kmedia-is-awesome.ly');
    expect(response.registered).toBe(false);
  });

  // ma
  it('should return unregistered ma domain', async () => {
    const response = await whois('kmedia-is-awesome.ma');
    expect(response.registered).toBe(false);
  });

  // maison
  it('should return unregistered maison domain', async () => {
    const response = await whois('kmedia-is-awesome.maison');
    expect(response.registered).toBe(false);
  });

  // management
  it('should return unregistered management domain', async () => {
    const response = await whois('kmedia-is-awesome.management');
    expect(response.registered).toBe(false);
  });

  // market
  it('should return unregistered market domain', async () => {
    const response = await whois('kmedia-is-awesome.market');
    expect(response.registered).toBe(false);
  });

  // marketing
  it('should return unregistered marketing domain', async () => {
    const response = await whois('kmedia-is-awesome.marketing');
    expect(response.registered).toBe(false);
  });

  // markets
  it('should return unregistered markets domain', async () => {
    const response = await whois('kmedia-is-awesome.markets');
    expect(response.registered).toBe(false);
  });

  // mba
  it('should return unregistered mba domain', async () => {
    const response = await whois('kmedia-is-awesome.mba');
    expect(response.registered).toBe(false);
  });

  // md
  it('should return unregistered md domain', async () => {
    const response = await whois('kmedia-is-awesome.md');
    expect(response.registered).toBe(false);
  });

  // me
  it('should return unregistered me domain', async () => {
    const response = await whois('kmedia-is-awesome.me');
    expect(response.registered).toBe(false);
  });

  // media
  it('should return unregistered media domain', async () => {
    const response = await whois('kmedia-is-awesome.media');
    expect(response.registered).toBe(false);
  });

  // melbourne
  it('should return unregistered melbourne domain', async () => {
    const response = await whois('kmedia-is-awesome.melbourne');
    expect(response.registered).toBe(false);
  });

  // memorial
  it('should return unregistered memorial domain', async () => {
    const response = await whois('kmedia-is-awesome.memorial');
    expect(response.registered).toBe(false);
  });

  // men
  it('should return unregistered men domain', async () => {
    const response = await whois('kmedia-is-awesome.men');
    expect(response.registered).toBe(false);
  });

  // menu
  it('should return unregistered menu domain', async () => {
    const response = await whois('kmedia-is-awesome.menu');
    expect(response.registered).toBe(false);
  });

  // miami
  it('should return unregistered miami domain', async () => {
    const response = await whois('kmedia-is-awesome.miami');
    expect(response.registered).toBe(false);
  });

  // ml
  it('should return unregistered ml domain', async () => {
    const response = await whois('kmedia-is-awesome.ml');
    expect(response.registered).toBe(false);
  });

  // mobi
  it('should return unregistered mobi domain', async () => {
    const response = await whois('kmedia-is-awesome.mobi');
    expect(response.registered).toBe(false);
  });

  // moda
  it('should return unregistered moda domain', async () => {
    const response = await whois('kmedia-is-awesome.moda');
    expect(response.registered).toBe(false);
  });

  // moe
  it('should return unregistered moe domain', async () => {
    const response = await whois('kmedia-is-awesome.moe');
    expect(response.registered).toBe(false);
  });

  // mom
  it('should return unregistered mom domain', async () => {
    const response = await whois('kmedia-is-awesome.mom');
    expect(response.registered).toBe(false);
  });

  // money
  it('should return unregistered money domain', async () => {
    const response = await whois('kmedia-is-awesome.money');
    expect(response.registered).toBe(false);
  });

  // monster
  it('should return unregistered monster domain', async () => {
    const response = await whois('kmedia-is-awesome.monster');
    expect(response.registered).toBe(false);
  });

  // mortgage
  it('should return unregistered mortgage domain', async () => {
    const response = await whois('kmedia-is-awesome.mortgage');
    expect(response.registered).toBe(false);
  });

  // moscow
  it('should return unregistered moscow domain', async () => {
    const response = await whois('kmedia-is-awesome.moscow');
    expect(response.registered).toBe(false);
  });

  // movie
  it('should return unregistered movie domain', async () => {
    const response = await whois('kmedia-is-awesome.movie');
    expect(response.registered).toBe(false);
  });

  // ms
  it('should return unregistered ms domain', async () => {
    const response = await whois('kmedia-is-awesome.ms');
    expect(response.registered).toBe(false);
  });

  // mu
  it('should return unregistered mu domain', async () => {
    const response = await whois('kmedia-is-awesome.mu');
    expect(response.registered).toBe(false);
  });

  // mx
  it('should return unregistered mx domain', async () => {
    const response = await whois('kmedia-is-awesome.mx');
    expect(response.registered).toBe(false);
  });

  // my
  // Error: Timeout
  // it('should return unregistered my domain', async () => {
  //   const response = await whois('kmedia-is-awesome.my');
  //   expect(response.registered).toBe(false);
  // });

  // nagoya
  it('should return unregistered nagoya domain', async () => {
    const response = await whois('kmedia-is-awesome.nagoya');
    expect(response.registered).toBe(false);
  });

  // name
  it('should return unregistered name domain', async () => {
    const response = await whois('kmedia-is-awesome.name');
    expect(response.registered).toBe(false);
  });

  // net
  it('should return unregistered net domain', async () => {
    const response = await whois('kmedia-is-awesome.net');
    expect(response.registered).toBe(false);
  });

  // network
  it('should return unregistered network domain', async () => {
    const response = await whois('kmedia-is-awesome.network');
    expect(response.registered).toBe(false);
  });

  // news
  it('should return unregistered news domain', async () => {
    const response = await whois('kmedia-is-awesome.news');
    expect(response.registered).toBe(false);
  });

  // ng
  it('should return unregistered ng domain', async () => {
    const response = await whois('kmedia-is-awesome.ng');
    expect(response.registered).toBe(false);
  });

  // ngo
  it('should return unregistered ngo domain', async () => {
    const response = await whois('kmedia-is-awesome.ngo');
    expect(response.registered).toBe(false);
  });

  // ninja
  it('should return unregistered ninja domain', async () => {
    const response = await whois('kmedia-is-awesome.ninja');
    expect(response.registered).toBe(false);
  });

  // nl
  it('should return unregistered nl domain', async () => {
    const response = await whois('kmedia-is-awesome.nl');
    expect(response.registered).toBe(false);
  });

  // no
  it('should return unregistered no domain', async () => {
    const response = await whois('kmedia-is-awesome.no');
    expect(response.registered).toBe(false);
  });

  // nyc
  // Error: No WHOIS server!
  // it('should return unregistered nyc domain', async () => {
  //   const response = await whois('kmedia-is-awesome.nyc');
  //   expect(response.registered).toBe(false);
  // });

  // okinawa
  it('should return unregistered okinawa domain', async () => {
    const response = await whois('kmedia-is-awesome.okinawa');
    expect(response.registered).toBe(false);
  });

  // one
  it('should return unregistered one domain', async () => {
    const response = await whois('kmedia-is-awesome.one');
    expect(response.registered).toBe(false);
  });

  // onl
  it('should return unregistered onl domain', async () => {
    const response = await whois('kmedia-is-awesome.onl');
    expect(response.registered).toBe(false);
  });

  // online
  it('should return unregistered online domain', async () => {
    const response = await whois('kmedia-is-awesome.online');
    expect(response.registered).toBe(false);
  });

  // org
  it('should return unregistered org domain', async () => {
    const response = await whois('kmedia-is-awesome.org');
    expect(response.registered).toBe(false);
  });

  // osaka
  it('should return unregistered osaka domain', async () => {
    const response = await whois('kmedia-is-awesome.osaka');
    expect(response.registered).toBe(false);
  });

  // page
  it('should return unregistered page domain', async () => {
    const response = await whois('kmedia-is-awesome.page');
    expect(response.registered).toBe(false);
  });

  // paris
  it('should return unregistered paris domain', async () => {
    const response = await whois('kmedia-is-awesome.paris');
    expect(response.registered).toBe(false);
  });

  // partners
  it('should return unregistered partners domain', async () => {
    const response = await whois('kmedia-is-awesome.partners');
    expect(response.registered).toBe(false);
  });

  // parts
  it('should return unregistered parts domain', async () => {
    const response = await whois('kmedia-is-awesome.parts');
    expect(response.registered).toBe(false);
  });

  // party
  it('should return unregistered party domain', async () => {
    const response = await whois('kmedia-is-awesome.party');
    expect(response.registered).toBe(false);
  });

  // pe
  it('should return unregistered pe domain', async () => {
    const response = await whois('kmedia-is-awesome.pe');
    expect(response.registered).toBe(false);
  });

  // pet
  it('should return unregistered pet domain', async () => {
    const response = await whois('kmedia-is-awesome.pet');
    expect(response.registered).toBe(false);
  });

  // ph
  // Error: No WHOIS server!
  // it('should return unregistered ph domain', async () => {
  //   const response = await whois('kmedia-is-awesome.ph');
  //   expect(response.registered).toBe(false);
  // });

  // photo
  it('should return unregistered photo domain', async () => {
    const response = await whois('kmedia-is-awesome.photo');
    expect(response.registered).toBe(false);
  });

  // photography
  it('should return unregistered photography domain', async () => {
    const response = await whois('kmedia-is-awesome.photography');
    expect(response.registered).toBe(false);
  });

  // photos
  it('should return unregistered photos domain', async () => {
    const response = await whois('kmedia-is-awesome.photos');
    expect(response.registered).toBe(false);
  });

  // physio
  it('should return unregistered physio domain', async () => {
    const response = await whois('kmedia-is-awesome.physio');
    expect(response.registered).toBe(false);
  });

  // pics
  it('should return unregistered pics domain', async () => {
    const response = await whois('kmedia-is-awesome.pics');
    expect(response.registered).toBe(false);
  });

  // pictures
  it('should return unregistered pictures domain', async () => {
    const response = await whois('kmedia-is-awesome.pictures');
    expect(response.registered).toBe(false);
  });

  // pink
  it('should return unregistered pink domain', async () => {
    const response = await whois('kmedia-is-awesome.pink');
    expect(response.registered).toBe(false);
  });

  // pizza
  it('should return unregistered pizza domain', async () => {
    const response = await whois('kmedia-is-awesome.pizza');
    expect(response.registered).toBe(false);
  });

  // pl
  it('should return unregistered pl domain', async () => {
    const response = await whois('kmedia-is-awesome.pl');
    expect(response.registered).toBe(false);
  });

  // place
  it('should return unregistered place domain', async () => {
    const response = await whois('kmedia-is-awesome.place');
    expect(response.registered).toBe(false);
  });

  // plumbing
  it('should return unregistered plumbing domain', async () => {
    const response = await whois('kmedia-is-awesome.plumbing');
    expect(response.registered).toBe(false);
  });

  // plus
  it('should return unregistered plus domain', async () => {
    const response = await whois('kmedia-is-awesome.plus');
    expect(response.registered).toBe(false);
  });

  // pm
  it('should return unregistered pm domain', async () => {
    const response = await whois('kmedia-is-awesome.pm');
    expect(response.registered).toBe(false);
  });

  // poker
  it('should return unregistered poker domain', async () => {
    const response = await whois('kmedia-is-awesome.poker');
    expect(response.registered).toBe(false);
  });

  // porn
  it('should return unregistered porn domain', async () => {
    const response = await whois('kmedia-is-awesome.porn');
    expect(response.registered).toBe(false);
  });

  // press
  it('should return unregistered press domain', async () => {
    const response = await whois('kmedia-is-awesome.press');
    expect(response.registered).toBe(false);
  });

  // pro
  it('should return unregistered pro domain', async () => {
    const response = await whois('kmedia-is-awesome.pro');
    expect(response.registered).toBe(false);
  });

  // productions
  it('should return unregistered productions domain', async () => {
    const response = await whois('kmedia-is-awesome.productions');
    expect(response.registered).toBe(false);
  });

  // promo
  it('should return unregistered promo domain', async () => {
    const response = await whois('kmedia-is-awesome.promo');
    expect(response.registered).toBe(false);
  });

  // properties
  it('should return unregistered properties domain', async () => {
    const response = await whois('kmedia-is-awesome.properties');
    expect(response.registered).toBe(false);
  });

  // property
  it('should return unregistered property domain', async () => {
    const response = await whois('kmedia-is-awesome.property');
    expect(response.registered).toBe(false);
  });

  // protection
  it('should return unregistered protection domain', async () => {
    const response = await whois('kmedia-is-awesome.protection');
    expect(response.registered).toBe(false);
  });

  // pt
  it('should return unregistered pt domain', async () => {
    const response = await whois('kmedia-is-awesome.pt');
    expect(response.registered).toBe(false);
  });

  // pub
  it('should return unregistered pub domain', async () => {
    const response = await whois('kmedia-is-awesome.pub');
    expect(response.registered).toBe(false);
  });

  // pw
  it('should return unregistered pw domain', async () => {
    const response = await whois('kmedia-is-awesome.pw');
    expect(response.registered).toBe(false);
  });

  // qa
  it('should return unregistered qa domain', async () => {
    const response = await whois('kmedia-is-awesome.qa');
    expect(response.registered).toBe(false);
  });

  // qpon
  it('should return unregistered qpon domain', async () => {
    const response = await whois('kmedia-is-awesome.qpon');
    expect(response.registered).toBe(false);
  });

  // quebec
  it('should return unregistered quebec domain', async () => {
    const response = await whois('kmedia-is-awesome.quebec');
    expect(response.registered).toBe(false);
  });

  // racing
  it('should return unregistered racing domain', async () => {
    const response = await whois('kmedia-is-awesome.racing');
    expect(response.registered).toBe(false);
  });

  // radio
  it('should return unregistered radio domain', async () => {
    const response = await whois('kmedia-is-awesome.radio');
    expect(response.registered).toBe(false);
  });

  // re
  it('should return unregistered re domain', async () => {
    const response = await whois('kmedia-is-awesome.re');
    expect(response.registered).toBe(false);
  });

  // recipes
  it('should return unregistered recipes domain', async () => {
    const response = await whois('kmedia-is-awesome.recipes');
    expect(response.registered).toBe(false);
  });

  // red
  it('should return unregistered red domain', async () => {
    const response = await whois('kmedia-is-awesome.red');
    expect(response.registered).toBe(false);
  });

  // rehab
  it('should return unregistered rehab domain', async () => {
    const response = await whois('kmedia-is-awesome.rehab');
    expect(response.registered).toBe(false);
  });

  // reise
  it('should return unregistered reise domain', async () => {
    const response = await whois('kmedia-is-awesome.reise');
    expect(response.registered).toBe(false);
  });

  // reisen
  it('should return unregistered reisen domain', async () => {
    const response = await whois('kmedia-is-awesome.reisen');
    expect(response.registered).toBe(false);
  });

  // rent
  it('should return unregistered rent domain', async () => {
    const response = await whois('kmedia-is-awesome.rent');
    expect(response.registered).toBe(false);
  });

  // rentals
  it('should return unregistered rentals domain', async () => {
    const response = await whois('kmedia-is-awesome.rentals');
    expect(response.registered).toBe(false);
  });

  // repair
  it('should return unregistered repair domain', async () => {
    const response = await whois('kmedia-is-awesome.repair');
    expect(response.registered).toBe(false);
  });

  // report
  it('should return unregistered report domain', async () => {
    const response = await whois('kmedia-is-awesome.report');
    expect(response.registered).toBe(false);
  });

  // republican
  it('should return unregistered republican domain', async () => {
    const response = await whois('kmedia-is-awesome.republican');
    expect(response.registered).toBe(false);
  });

  // rest
  it('should return unregistered rest domain', async () => {
    const response = await whois('kmedia-is-awesome.rest');
    expect(response.registered).toBe(false);
  });

  // restaurant
  it('should return unregistered restaurant domain', async () => {
    const response = await whois('kmedia-is-awesome.restaurant');
    expect(response.registered).toBe(false);
  });

  // review
  it('should return unregistered review domain', async () => {
    const response = await whois('kmedia-is-awesome.review');
    expect(response.registered).toBe(false);
  });

  // reviews
  it('should return unregistered reviews domain', async () => {
    const response = await whois('kmedia-is-awesome.reviews');
    expect(response.registered).toBe(false);
  });

  // rip
  it('should return unregistered rip domain', async () => {
    const response = await whois('kmedia-is-awesome.rip');
    expect(response.registered).toBe(false);
  });

  // ro
  it('should return unregistered ro domain', async () => {
    const response = await whois('kmedia-is-awesome.ro');
    expect(response.registered).toBe(false);
  });

  // rocks
  it('should return unregistered rocks domain', async () => {
    const response = await whois('kmedia-is-awesome.rocks');
    expect(response.registered).toBe(false);
  });

  // rodeo
  it('should return unregistered rodeo domain', async () => {
    const response = await whois('kmedia-is-awesome.rodeo');
    expect(response.registered).toBe(false);
  });

  // rs
  it('should return unregistered rs domain', async () => {
    const response = await whois('kmedia-is-awesome.rs');
    expect(response.registered).toBe(false);
  });

  // ru
  it('should return unregistered ru domain', async () => {
    const response = await whois('kmedia-is-awesome.ru');
    expect(response.registered).toBe(false);
  });

  // ruhr
  it('should return unregistered ruhr domain', async () => {
    const response = await whois('kmedia-is-awesome.ruhr');
    expect(response.registered).toBe(false);
  });

  // run
  it('should return unregistered run domain', async () => {
    const response = await whois('kmedia-is-awesome.run');
    expect(response.registered).toBe(false);
  });

  // saarland
  it('should return unregistered saarland domain', async () => {
    const response = await whois('kmedia-is-awesome.saarland');
    expect(response.registered).toBe(false);
  });

  // sale
  it('should return unregistered sale domain', async () => {
    const response = await whois('kmedia-is-awesome.sale');
    expect(response.registered).toBe(false);
  });

  // salon
  it('should return unregistered salon domain', async () => {
    const response = await whois('kmedia-is-awesome.salon');
    expect(response.registered).toBe(false);
  });

  // sarl
  it('should return unregistered sarl domain', async () => {
    const response = await whois('kmedia-is-awesome.sarl');
    expect(response.registered).toBe(false);
  });

  // sc
  it('should return unregistered sc domain', async () => {
    const response = await whois('kmedia-is-awesome.sc');
    expect(response.registered).toBe(false);
  });

  // school
  it('should return unregistered school domain', async () => {
    const response = await whois('kmedia-is-awesome.school');
    expect(response.registered).toBe(false);
  });

  // schule
  it('should return unregistered schule domain', async () => {
    const response = await whois('kmedia-is-awesome.schule');
    expect(response.registered).toBe(false);
  });

  // science
  it('should return unregistered science domain', async () => {
    const response = await whois('kmedia-is-awesome.science');
    expect(response.registered).toBe(false);
  });

  // se
  it('should return unregistered se domain', async () => {
    const response = await whois('kmedia-is-awesome.se');
    expect(response.registered).toBe(false);
  });

  // security
  it('should return unregistered security domain', async () => {
    const response = await whois('kmedia-is-awesome.security');
    expect(response.registered).toBe(false);
  });

  // services
  it('should return unregistered services domain', async () => {
    const response = await whois('kmedia-is-awesome.services');
    expect(response.registered).toBe(false);
  });

  // sex
  it('should return unregistered sex domain', async () => {
    const response = await whois('kmedia-is-awesome.sex');
    expect(response.registered).toBe(false);
  });

  // sexy
  it('should return unregistered sexy domain', async () => {
    const response = await whois('kmedia-is-awesome.sexy');
    expect(response.registered).toBe(false);
  });

  // sg
  it('should return unregistered sg domain', async () => {
    const response = await whois('kmedia-is-awesome.sg');
    expect(response.registered).toBe(false);
  });

  // sh
  it('should return unregistered sh domain', async () => {
    const response = await whois('kmedia-is-awesome.sh');
    expect(response.registered).toBe(false);
  });

  // shiksha
  it('should return unregistered shiksha domain', async () => {
    const response = await whois('kmedia-is-awesome.shiksha');
    expect(response.registered).toBe(false);
  });

  // shoes
  it('should return unregistered shoes domain', async () => {
    const response = await whois('kmedia-is-awesome.shoes');
    expect(response.registered).toBe(false);
  });

  // shop
  it('should return unregistered shop domain', async () => {
    const response = await whois('kmedia-is-awesome.shop');
    expect(response.registered).toBe(false);
  });

  // shopping
  it('should return unregistered shopping domain', async () => {
    const response = await whois('kmedia-is-awesome.shopping');
    expect(response.registered).toBe(false);
  });

  // show
  it('should return unregistered show domain', async () => {
    const response = await whois('kmedia-is-awesome.show');
    expect(response.registered).toBe(false);
  });

  // si
  it('should return unregistered si domain', async () => {
    const response = await whois('kmedia-is-awesome.si');
    expect(response.registered).toBe(false);
  });

  // singles
  it('should return unregistered singles domain', async () => {
    const response = await whois('kmedia-is-awesome.singles');
    expect(response.registered).toBe(false);
  });

  // site
  it('should return unregistered site domain', async () => {
    const response = await whois('kmedia-is-awesome.site');
    expect(response.registered).toBe(false);
  });

  // sk
  it('should return unregistered sk domain', async () => {
    const response = await whois('kmedia-is-awesome.sk');
    expect(response.registered).toBe(false);
  });

  // ski
  it('should return unregistered ski domain', async () => {
    const response = await whois('kmedia-is-awesome.ski');
    expect(response.registered).toBe(false);
  });

  // soccer
  it('should return unregistered soccer domain', async () => {
    const response = await whois('kmedia-is-awesome.soccer');
    expect(response.registered).toBe(false);
  });

  // social
  it('should return unregistered social domain', async () => {
    const response = await whois('kmedia-is-awesome.social');
    expect(response.registered).toBe(false);
  });

  // software
  it('should return unregistered software domain', async () => {
    const response = await whois('kmedia-is-awesome.software');
    expect(response.registered).toBe(false);
  });

  // solar
  it('should return unregistered solar domain', async () => {
    const response = await whois('kmedia-is-awesome.solar');
    expect(response.registered).toBe(false);
  });

  // solutions
  it('should return unregistered solutions domain', async () => {
    const response = await whois('kmedia-is-awesome.solutions');
    expect(response.registered).toBe(false);
  });

  // soy
  it('should return unregistered soy domain', async () => {
    const response = await whois('kmedia-is-awesome.soy');
    expect(response.registered).toBe(false);
  });

  // space
  it('should return unregistered space domain', async () => {
    const response = await whois('kmedia-is-awesome.space');
    expect(response.registered).toBe(false);
  });

  // sport
  it('should return unregistered sport domain', async () => {
    const response = await whois('kmedia-is-awesome.sport');
    expect(response.registered).toBe(false);
  });

  // spreadbetting
  // Error: No WHOIS server!
  // it('should return unregistered spreadbetting domain', async () => {
  //   const response = await whois('kmedia-is-awesome.spreadbetting');
  //   expect(response.registered).toBe(false);
  // });

  // st
  it('should return unregistered st domain', async () => {
    const response = await whois('kmedia-is-awesome.st');
    expect(response.registered).toBe(false);
  });

  // store
  it('should return unregistered store domain', async () => {
    const response = await whois('kmedia-is-awesome.store');
    expect(response.registered).toBe(false);
  });

  // stream
  it('should return unregistered stream domain', async () => {
    const response = await whois('kmedia-is-awesome.stream');
    expect(response.registered).toBe(false);
  });

  // studio
  it('should return unregistered studio domain', async () => {
    const response = await whois('kmedia-is-awesome.studio');
    expect(response.registered).toBe(false);
  });

  // study
  it('should return unregistered study domain', async () => {
    const response = await whois('kmedia-is-awesome.study');
    expect(response.registered).toBe(false);
  });

  // style
  it('should return unregistered style domain', async () => {
    const response = await whois('kmedia-is-awesome.style');
    expect(response.registered).toBe(false);
  });

  // sucks
  it('should return unregistered sucks domain', async () => {
    const response = await whois('kmedia-is-awesome.sucks');
    expect(response.registered).toBe(false);
  });

  // supplies
  it('should return unregistered supplies domain', async () => {
    const response = await whois('kmedia-is-awesome.supplies');
    expect(response.registered).toBe(false);
  });

  // supply
  it('should return unregistered supply domain', async () => {
    const response = await whois('kmedia-is-awesome.supply');
    expect(response.registered).toBe(false);
  });

  // support
  it('should return unregistered support domain', async () => {
    const response = await whois('kmedia-is-awesome.support');
    expect(response.registered).toBe(false);
  });

  // surf
  it('should return unregistered surf domain', async () => {
    const response = await whois('kmedia-is-awesome.surf');
    expect(response.registered).toBe(false);
  });

  // surgery
  it('should return unregistered surgery domain', async () => {
    const response = await whois('kmedia-is-awesome.surgery');
    expect(response.registered).toBe(false);
  });

  // swiss
  it('should return unregistered swiss domain', async () => {
    const response = await whois('kmedia-is-awesome.swiss');
    expect(response.registered).toBe(false);
  });

  // sx
  it('should return unregistered sx domain', async () => {
    const response = await whois('kmedia-is-awesome.sx');
    expect(response.registered).toBe(false);
  });

  // sydney
  it('should return unregistered sydney domain', async () => {
    const response = await whois('kmedia-is-awesome.sydney');
    expect(response.registered).toBe(false);
  });

  // systems
  it('should return unregistered systems domain', async () => {
    const response = await whois('kmedia-is-awesome.systems');
    expect(response.registered).toBe(false);
  });

  // tattoo
  it('should return unregistered tattoo domain', async () => {
    const response = await whois('kmedia-is-awesome.tattoo');
    expect(response.registered).toBe(false);
  });

  // tax
  it('should return unregistered tax domain', async () => {
    const response = await whois('kmedia-is-awesome.tax');
    expect(response.registered).toBe(false);
  });

  // taxi
  it('should return unregistered taxi domain', async () => {
    const response = await whois('kmedia-is-awesome.taxi');
    expect(response.registered).toBe(false);
  });

  // tc
  it('should return unregistered tc domain', async () => {
    const response = await whois('kmedia-is-awesome.tc');
    expect(response.registered).toBe(false);
  });

  // team
  it('should return unregistered team domain', async () => {
    const response = await whois('kmedia-is-awesome.team');
    expect(response.registered).toBe(false);
  });

  // tech
  it('should return unregistered tech domain', async () => {
    const response = await whois('kmedia-is-awesome.tech');
    expect(response.registered).toBe(false);
  });

  // technology
  it('should return unregistered technology domain', async () => {
    const response = await whois('kmedia-is-awesome.technology');
    expect(response.registered).toBe(false);
  });

  // tel
  it('should return unregistered tel domain', async () => {
    const response = await whois('kmedia-is-awesome.tel');
    expect(response.registered).toBe(false);
  });

  // tennis
  it('should return unregistered tennis domain', async () => {
    const response = await whois('kmedia-is-awesome.tennis');
    expect(response.registered).toBe(false);
  });

  // tf
  it('should return unregistered tf domain', async () => {
    const response = await whois('kmedia-is-awesome.tf');
    expect(response.registered).toBe(false);
  });

  // theater
  it('should return unregistered theater domain', async () => {
    const response = await whois('kmedia-is-awesome.theater');
    expect(response.registered).toBe(false);
  });

  // theatre
  it('should return unregistered theatre domain', async () => {
    const response = await whois('kmedia-is-awesome.theatre');
    expect(response.registered).toBe(false);
  });

  // tickets
  it('should return unregistered tickets domain', async () => {
    const response = await whois('kmedia-is-awesome.tickets');
    expect(response.registered).toBe(false);
  });

  // tienda
  it('should return unregistered tienda domain', async () => {
    const response = await whois('kmedia-is-awesome.tienda');
    expect(response.registered).toBe(false);
  });

  // tips
  it('should return unregistered tips domain', async () => {
    const response = await whois('kmedia-is-awesome.tips');
    expect(response.registered).toBe(false);
  });

  // tires
  it('should return unregistered tires domain', async () => {
    const response = await whois('kmedia-is-awesome.tires');
    expect(response.registered).toBe(false);
  });

  // tirol
  it('should return unregistered tirol domain', async () => {
    const response = await whois('kmedia-is-awesome.tirol');
    expect(response.registered).toBe(false);
  });

  // tk
  it('should return unregistered tk domain', async () => {
    const response = await whois('kmedia-is-awesome.tk');
    expect(response.registered).toBe(false);
  });

  // tl
  it('should return unregistered tl domain', async () => {
    const response = await whois('kmedia-is-awesome.tl');
    expect(response.registered).toBe(false);
  });

  // to
  it('should return unregistered to domain', async () => {
    const response = await whois('kmedia-is-awesome.to');
    expect(response.registered).toBe(false);
  });

  // today
  it('should return unregistered today domain', async () => {
    const response = await whois('kmedia-is-awesome.today');
    expect(response.registered).toBe(false);
  });

  // tokyo
  it('should return unregistered tokyo domain', async () => {
    const response = await whois('kmedia-is-awesome.tokyo');
    expect(response.registered).toBe(false);
  });

  // tools
  it('should return unregistered tools domain', async () => {
    const response = await whois('kmedia-is-awesome.tools');
    expect(response.registered).toBe(false);
  });

  // top
  it('should return unregistered top domain', async () => {
    const response = await whois('kmedia-is-awesome.top');
    expect(response.registered).toBe(false);
  });

  // tours
  it('should return unregistered tours domain', async () => {
    const response = await whois('kmedia-is-awesome.tours');
    expect(response.registered).toBe(false);
  });

  // town
  it('should return unregistered town domain', async () => {
    const response = await whois('kmedia-is-awesome.town');
    expect(response.registered).toBe(false);
  });

  // toys
  it('should return unregistered toys domain', async () => {
    const response = await whois('kmedia-is-awesome.toys');
    expect(response.registered).toBe(false);
  });

  // trade
  it('should return unregistered trade domain', async () => {
    const response = await whois('kmedia-is-awesome.trade');
    expect(response.registered).toBe(false);
  });

  // trading
  it('should return unregistered trading domain', async () => {
    const response = await whois('kmedia-is-awesome.trading');
    expect(response.registered).toBe(false);
  });

  // training
  it('should return unregistered training domain', async () => {
    const response = await whois('kmedia-is-awesome.training');
    expect(response.registered).toBe(false);
  });

  // travel
  it('should return unregistered travel domain', async () => {
    const response = await whois('kmedia-is-awesome.travel');
    expect(response.registered).toBe(false);
  });

  // tube
  // Error: No WHOIS server!
  // it('should return unregistered tube domain', async () => {
  //   const response = await whois('kmedia-is-awesome.tube');
  //   expect(response.registered).toBe(false);
  // });

  // tv
  it('should return unregistered tv domain', async () => {
    const response = await whois('kmedia-is-awesome.tv');
    expect(response.registered).toBe(false);
  });

  // tw
  it('should return unregistered tw domain', async () => {
    const response = await whois('kmedia-is-awesome.tw');
    expect(response.registered).toBe(false);
  });

  // ua
  it('should return unregistered ua domain', async () => {
    const response = await whois('kmedia-is-awesome.ua');
    expect(response.registered).toBe(false);
  });

  // ug
  it('should return unregistered ug domain', async () => {
    const response = await whois('kmedia-is-awesome.ug');
    expect(response.registered).toBe(false);
  });

  // uk
  it('should return unregistered uk domain', async () => {
    const response = await whois('kmedia-is-awesome.uk');
    expect(response.registered).toBe(false);
  });

  // university
  it('should return unregistered university domain', async () => {
    const response = await whois('kmedia-is-awesome.university');
    expect(response.registered).toBe(false);
  });

  // uno
  it('should return unregistered uno domain', async () => {
    const response = await whois('kmedia-is-awesome.uno');
    expect(response.registered).toBe(false);
  });

  // us
  it('should return unregistered us domain', async () => {
    const response = await whois('kmedia-is-awesome.us');
    expect(response.registered).toBe(false);
  });

  // uy
  // Error: No WHOIS server!
  // it('should return unregistered uy domain', async () => {
  //   const response = await whois('kmedia-is-awesome.uy');
  //   expect(response.registered).toBe(false);
  // });

  // vacations
  it('should return unregistered vacations domain', async () => {
    const response = await whois('kmedia-is-awesome.vacations');
    expect(response.registered).toBe(false);
  });

  // vc
  it('should return unregistered vc domain', async () => {
    const response = await whois('kmedia-is-awesome.vc');
    expect(response.registered).toBe(false);
  });

  // ventures
  it('should return unregistered ventures domain', async () => {
    const response = await whois('kmedia-is-awesome.ventures');
    expect(response.registered).toBe(false);
  });

  // versicherung
  it('should return unregistered versicherung domain', async () => {
    const response = await whois('kmedia-is-awesome.versicherung');
    expect(response.registered).toBe(false);
  });

  // vet
  it('should return unregistered vet domain', async () => {
    const response = await whois('kmedia-is-awesome.vet');
    expect(response.registered).toBe(false);
  });

  // viajes
  it('should return unregistered viajes domain', async () => {
    const response = await whois('kmedia-is-awesome.viajes');
    expect(response.registered).toBe(false);
  });

  // video
  it('should return unregistered video domain', async () => {
    const response = await whois('kmedia-is-awesome.video');
    expect(response.registered).toBe(false);
  });

  // villas
  it('should return unregistered villas domain', async () => {
    const response = await whois('kmedia-is-awesome.villas');
    expect(response.registered).toBe(false);
  });

  // vin
  it('should return unregistered vin domain', async () => {
    const response = await whois('kmedia-is-awesome.vin');
    expect(response.registered).toBe(false);
  });

  // vip
  it('should return unregistered vip domain', async () => {
    const response = await whois('kmedia-is-awesome.vip');
    expect(response.registered).toBe(false);
  });

  // vision
  it('should return unregistered vision domain', async () => {
    const response = await whois('kmedia-is-awesome.vision');
    expect(response.registered).toBe(false);
  });

  // vlaanderen
  it('should return unregistered vlaanderen domain', async () => {
    const response = await whois('kmedia-is-awesome.vlaanderen');
    expect(response.registered).toBe(false);
  });

  // vn
  // Error: No WHOIS server!
  // it('should return unregistered vn domain', async () => {
  //   const response = await whois('kmedia-is-awesome.vn');
  //   expect(response.registered).toBe(false);
  // });

  // vodka
  it('should return unregistered vodka domain', async () => {
    const response = await whois('kmedia-is-awesome.vodka');
    expect(response.registered).toBe(false);
  });

  // vote
  it('should return unregistered vote domain', async () => {
    const response = await whois('kmedia-is-awesome.vote');
    expect(response.registered).toBe(false);
  });

  // voting
  it('should return unregistered voting domain', async () => {
    const response = await whois('kmedia-is-awesome.voting');
    expect(response.registered).toBe(false);
  });

  // voto
  it('should return unregistered voto domain', async () => {
    const response = await whois('kmedia-is-awesome.voto');
    expect(response.registered).toBe(false);
  });

  // voyage
  it('should return unregistered voyage domain', async () => {
    const response = await whois('kmedia-is-awesome.voyage');
    expect(response.registered).toBe(false);
  });

  // wales
  it('should return unregistered wales domain', async () => {
    const response = await whois('kmedia-is-awesome.wales');
    expect(response.registered).toBe(false);
  });

  // wang
  it('should return unregistered wang domain', async () => {
    const response = await whois('kmedia-is-awesome.wang');
    expect(response.registered).toBe(false);
  });

  // watch
  it('should return unregistered watch domain', async () => {
    const response = await whois('kmedia-is-awesome.watch');
    expect(response.registered).toBe(false);
  });

  // webcam
  it('should return unregistered webcam domain', async () => {
    const response = await whois('kmedia-is-awesome.webcam');
    expect(response.registered).toBe(false);
  });

  // website
  it('should return unregistered website domain', async () => {
    const response = await whois('kmedia-is-awesome.website');
    expect(response.registered).toBe(false);
  });

  // wedding
  it('should return unregistered wedding domain', async () => {
    const response = await whois('kmedia-is-awesome.wedding');
    expect(response.registered).toBe(false);
  });

  // wf
  it('should return unregistered wf domain', async () => {
    const response = await whois('kmedia-is-awesome.wf');
    expect(response.registered).toBe(false);
  });

  // wien
  it('should return unregistered wien domain', async () => {
    const response = await whois('kmedia-is-awesome.wien');
    expect(response.registered).toBe(false);
  });

  // wiki
  it('should return unregistered wiki domain', async () => {
    const response = await whois('kmedia-is-awesome.wiki');
    expect(response.registered).toBe(false);
  });

  // win
  it('should return unregistered win domain', async () => {
    const response = await whois('kmedia-is-awesome.win');
    expect(response.registered).toBe(false);
  });

  // wine
  it('should return unregistered wine domain', async () => {
    const response = await whois('kmedia-is-awesome.wine');
    expect(response.registered).toBe(false);
  });

  // work
  it('should return unregistered work domain', async () => {
    const response = await whois('kmedia-is-awesome.work');
    expect(response.registered).toBe(false);
  });

  // works
  it('should return unregistered works domain', async () => {
    const response = await whois('kmedia-is-awesome.works');
    expect(response.registered).toBe(false);
  });

  // world
  it('should return unregistered world domain', async () => {
    const response = await whois('kmedia-is-awesome.world');
    expect(response.registered).toBe(false);
  });

  // ws
  it('should return unregistered ws domain', async () => {
    const response = await whois('kmedia-is-awesome.ws');
    expect(response.registered).toBe(false);
  });

  // wtf
  it('should return unregistered wtf domain', async () => {
    const response = await whois('kmedia-is-awesome.wtf');
    expect(response.registered).toBe(false);
  });

  // xxx
  it('should return unregistered xxx domain', async () => {
    const response = await whois('kmedia-is-awesome.xxx');
    expect(response.registered).toBe(false);
  });

  // xyz
  it('should return unregistered xyz domain', async () => {
    const response = await whois('kmedia-is-awesome.xyz');
    expect(response.registered).toBe(false);
  });

  // yoga
  it('should return unregistered yoga domain', async () => {
    const response = await whois('kmedia-is-awesome.yoga');
    expect(response.registered).toBe(false);
  });

  // yokohama
  it('should return unregistered yokohama domain', async () => {
    const response = await whois('kmedia-is-awesome.yokohama');
    expect(response.registered).toBe(false);
  });

  // yt
  it('should return unregistered yt domain', async () => {
    const response = await whois('kmedia-is-awesome.yt');
    expect(response.registered).toBe(false);
  });

  // zone
  it('should return unregistered zone domain', async () => {
    const response = await whois('kmedia-is-awesome.zone');
    expect(response.registered).toBe(false);
  });
});
