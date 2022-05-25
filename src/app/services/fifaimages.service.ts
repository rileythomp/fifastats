import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FifaimagesService {

    // correctly sized
    premierLeagueImgMap = {
        'manchesterunited': 'https://logoeps.com/wp-content/uploads/2011/08/manchester-united-logo-vector-200x200.png',
        'liverpool': 'https://logoeps.com/wp-content/uploads/2011/08/liverpool-logo-vector-200x200.png',
        'chelsea': 'https://logoeps.com/wp-content/uploads/2011/08/chelsea-logo-vector-200x200.png',
        'manchestercity': 'https://logoeps.com/wp-content/uploads/2011/08/manchester-city-logo-vector-200x200.png',
        'arsenal': 'https://logoeps.com/wp-content/uploads/2011/05/arsenal-logo-vector-200x200.png',
        'tottenhamhotspur': 'https://logoeps.com/wp-content/uploads/2012/02/tottenham-hotspur-fc-logo-vector.jpg',
        'newcastleunited': 'https://logoeps.com/wp-content/uploads/2011/08/newcastle-united-fc-logo-200x200.jpg',
        'everton': 'https://logoeps.com/wp-content/uploads/2012/02/everton-fc-logo-vector.jpg',
        'astonvilla': 'https://logoeps.com/wp-content/uploads/2011/06/77ab52085ff2cda2808f8aaeedd6b01d-200x200.jpg',
        'sunderland': 'https://logoeps.com/wp-content/uploads/2012/02/sunderland-afc-logo-vector.jpg',
        'fulham': 'https://logoeps.com/wp-content/uploads/2011/06/42ce5edd7b5a0adaa23f54dda3e96efe-200x200.jpg',
        'queensparkrangers': 'https://logoeps.com/wp-content/uploads/2012/04/queen-park-rangers-qpr-vector.png',
        'swanseacity': 'https://logoeps.com/wp-content/uploads/2012/04/swansea-city-vector.gif',
        'westhamunited': 'https://logoeps.com/wp-content/uploads/2012/12/west-ham-united-logo-vector-200x200.png',
        'stokecity': 'https://logoeps.com/wp-content/uploads/2012/04/stoke-city-fc-vector.gif',
        'southampton': 'https://logoeps.com/wp-content/uploads/2012/11/southampton-f.c-logo-vector-200x200.png',
        'westbromwichalbion': 'https://logoeps.com/wp-content/uploads/2012/10/west-brom-logo-vector-200x200.png',
        'wiganathletic': 'https://logoeps.com/wp-content/uploads/2012/04/wigan-athletic-fc-vector.gif',
        'norwichcity': 'https://logoeps.com/wp-content/uploads/2012/12/norwich-logo-vector-200x200.png',
        'reading': 'https://logoeps.com/wp-content/uploads/2012/12/reading-fc-logo-vector-200x200.png'
    }

    // correctly sized
    laLigaImgMap = {
        'realmadrid': 'https://logoeps.com/wp-content/uploads/2012/02/real-madrid-logo-vector-200x200.png',
        'fcbarcelona': 'https://logoeps.com/wp-content/uploads/2011/05/barcelona-logo-vector-200x200.png',
        'valenciacf': 'https://logoeps.com/wp-content/uploads/2012/02/valencia-vector-logo-200x200.png',
        'atléticomadrid': 'https://logoeps.com/wp-content/uploads/2012/04/atletico-madrid-logo-vector-200x200.png',
        'sevillafc': 'https://logoeps.com/wp-content/uploads/2012/03/sevilla-fc-vector-200x200.jpg',
        'málagacf': 'https://logoeps.com/wp-content/uploads/2012/04/malaga-logo-vector-01.png',
        'rccelta': 'https://logoeps.com/wp-content/uploads/2012/12/celta-de-vigo-logo-vector-200x200.png',
        'realsociedad': 'https://logoeps.com/wp-content/uploads/2012/12/real-sociedad-logo-vector-200x200.png',
        'athleticclubdebilbao': 'https://logoeps.com/wp-content/uploads/2012/04/athletic-bilbao-logo-vector-200x200.png',
        'levanteud': 'https://logoeps.com/wp-content/uploads/2012/04/levante-logo-vector-200x200.png',
        'caosasuna': 'https://logoeps.com/wp-content/uploads/2012/04/osasuna-logo-vector-01.png',
        'deportivodelacoruña': 'https://logoeps.com/wp-content/uploads/2012/10/deportivo-de-la-coruna-logo-vector-200x200.png',
        'getafecf': 'https://logoeps.com/wp-content/uploads/2012/04/getafe-logo-vector-01.png',
        'granadacf': 'https://logoeps.com/wp-content/uploads/2011/06/granada-logo-vector-200x200.png',
        'realzaragoza': 'https://logoeps.com/wp-content/uploads/2012/10/real-zaragoza-logo-vector-200x200.png',
        'villarrealcf': 'https://logoeps.com/wp-content/uploads/2012/12/villarreal-logo-vector-200x200.png',
        'realvalladolidcf': 'https://logoeps.com/wp-content/uploads/2012/12/real-valladolid-logo-vector-200x200.png',
        'rayovallecano': 'https://logoeps.com/wp-content/uploads/2012/11/rayo-vallecano-logo-vector-200x200.png',
        'rcdmallorca': 'https://logoeps.com/wp-content/uploads/2012/10/mallorca-logo-vector-200x200.png',
        'realsportingdegijón': 'https://logoeps.com/wp-content/uploads/2012/12/sporting-de-gijon-logo-vector-200x200.png',
        'racingsantander': 'https://logoeps.com/wp-content/uploads/2012/12/racing-de-santander-logo-vector-200x200.png',
    }

    italianImgMap = {
        'milan': 'https://content.sportslogos.net/logos/128/3992/thumbs/nwfgf6g3d2ut2c2q2sopm6sje.gif',
        'roma': 'https://content.sportslogos.net/logos/128/3996/thumbs/eezkjfmm1m7mmg9nm5t0075nh.gif',
        'atalanta': 'https://content.sportslogos.net/logos/128/4008/thumbs/1qr8d2wyepavsp3l50ckehw4u.gif',
        'bologna': 'https://content.sportslogos.net/logos/128/3995/thumbs/fl9hy6j9oy6ird2qtc6rjekfh.gif',
        'cagliari': 'https://content.sportslogos.net/logos/128/4007/thumbs/1ianseq4hpm669hg449dg5ahb.gif',
        'fiorentina': 'https://content.sportslogos.net/logos/128/4011/thumbs/dzte7053fk19cxjbc7sfmgt6h.gif',
        'genoa': 'https://content.sportslogos.net/logos/128/3994/thumbs/luoxh8kjedoif2nyerzxiu00w.gif',
        'hellasverona': 'https://content.sportslogos.net/logos/128/4013/thumbs/f9ctcqmk5a2nlunkp3jfqdvlu.gif',
        'inter': 'https://content.sportslogos.net/logos/128/3993/thumbs/cl833mzfmzejrwq7prvbzugm8.gif',
        'juventus': 'https://content.sportslogos.net/logos/128/3997/thumbs/399744882017.gif',
        'lazio': 'https://content.sportslogos.net/logos/128/4004/thumbs/gj6glhkvsogvtht4eado4h3fl.gif',
        'lecce': 'https://content.sportslogos.net/logos/128/4169/thumbs/0vlk100lc0ge7spztabghd361.gif',
        'livorno': 'https://content.sportslogos.net/logos/128/4014/thumbs/wd3remx36bfxfxhpfd3bov7gq.gif',
        'napoli': 'https://content.sportslogos.net/logos/128/3999/thumbs/ig0qxnu0hsyvb5eugex7k50uh.gif',
        'parma': 'https://content.sportslogos.net/logos/128/4002/thumbs/2pmj9op719we21egqmybehggs.gif',
        'pescara': 'https://content.sportslogos.net/logos/128/4010/thumbs/zt9ifkj9uf7y8mrvleiydkqeh.gif',
        'sampdoria': 'https://content.sportslogos.net/logos/128/4009/thumbs/4hzy4bpfcsjjuhtmd1pt0zmic.gif',
        'sassuolo': 'https://content.sportslogos.net/logos/128/5870/thumbs/587053750.gif',
        'torino': 'https://content.sportslogos.net/logos/128/3998/thumbs/rdgcmhe9zcjh5tuwbu8s0sea4.gif',
        'udinese': 'https://content.sportslogos.net/logos/128/4000/thumbs/3g2fy5sbljbeegc2f8o1qh1nx.gif'
    }

    bundesligaImgMap = {
        'rbleipzig': 'https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg',
        'bayer04leverkusen': 'https://content.sportslogos.net/logos/132/4073/thumbs/kwoonkgpplfjq6wf98gk8ff8f.gif',
        'fcbayernmünchen': 'https://content.sportslogos.net/logos/132/4069/thumbs/rr72mhpas38h85jdw85neas5f.gif',
        'borussiadortmund': 'https://content.sportslogos.net/logos/132/4072/thumbs/yfkihagcptzem3rhhf4h22343.gif',
        'borussiamönchengladbach': 'https://content.sportslogos.net/logos/132/4164/thumbs/mm5fmzi4ogxm6948w4bzerkue.gif',
        'eintrachtfrankfurt': 'https://content.sportslogos.net/logos/132/4077/thumbs/u8wdhb5sjmg0ntnahm5aefzhl.gif',
        'fcaugsburg': 'https://content.sportslogos.net/logos/132/4082/thumbs/408243350.gif',
        '1.fcköln': 'https://content.sportslogos.net/logos/132/4075/thumbs/t7j6qkb8hcplgpqskqhhozyee.gif',
        'fcnürnberg': 'https://content.sportslogos.net/logos/132/5321/thumbs/532151500.gif',
        'fortunadüsseldorf': 'https://content.sportslogos.net/logos/132/4165/thumbs/d4pp7q9gli5gxg2ieqdszcoh8.gif',
        'fsvmainz05': 'https://content.sportslogos.net/logos/132/4079/thumbs/ulym34kee4tbfgo4j1pb8ol2f.gif',
        'hamburgersv': 'https://content.sportslogos.net/logos/132/4074/thumbs/tahrali7e0oqchvpnvg7bgas6.gif',
        'hannover96': 'https://content.sportslogos.net/logos/132/4166/thumbs/f1u93gizvy909um2967cx8oyh.gif',
        'herthabsc': 'https://content.sportslogos.net/logos/132/4071/thumbs/07cm1ieo1tilufl9krfga9p9p.gif',
        'scfreiburg': 'https://content.sportslogos.net/logos/132/4080/thumbs/v4ymltyv9o5g7afvh3v0s7cwu.gif',
        'fcschalke04': 'https://content.sportslogos.net/logos/132/4081/thumbs/13p1uwdmg16hnw8cq4cut4u9z.gif',
        'tsg1899hoffenheim': 'https://content.sportslogos.net/logos/132/4167/thumbs/1rev8mqgfxi5v0ap8hp9nau0d.gif',
        'tsv1860münchen': 'https://content.sportslogos.net/logos/132/4168/thumbs/2sfzziusrwv73rgqu2dsthtt2.gif',
        'vfbstuttgart': 'https://content.sportslogos.net/logos/132/4083/thumbs/yermfwxhbbkyumoogv9pvgqkb.gif',
        'vflwolfsburg': 'https://content.sportslogos.net/logos/132/4070/thumbs/9iux6r2oynq4dk3dfwm0rj3jy.gif',
        'svwerderbremen': 'https://content.sportslogos.net/logos/132/4085/thumbs/xx2xphrkj2iwuooysinxa8fiv.gif'
    }

    frenchLigueImgMap = {
        'acjaccio': 'https://content.sportslogos.net/logos/129/4892/thumbs/2gg1z5f7wy5eeduf2xpp4wk5m.gif',
        'asmonaco': 'https://content.sportslogos.net/logos/129/4041/thumbs/tcet1ae5k3uf8fmwdafgmn8sc.gif',
        'asnancylorraine': 'https://content.sportslogos.net/logos/129/4042/thumbs/qlwbt20e6p8tbpfh5t6bv9mub.gif',
        'ajauxerre': 'https://content.sportslogos.net/logos/129/4040/thumbs/jqzdywpqynhmvla3euec5hw0c.gif',
        'fcgirondinsdebordeaux': 'https://content.sportslogos.net/logos/129/4047/thumbs/db4fgoxpsfbjeao2606hkk6tt.gif',
        'fclorient': 'https://content.sportslogos.net/logos/129/4046/thumbs/cmot0h44p8syflunge1ihfake.gif',
        'fcmetz': 'https://content.sportslogos.net/logos/129/4048/thumbs/ah3p1ojexa59o4qpttvi3h6md.gif',
        'fcnantes': 'https://content.sportslogos.net/logos/129/4160/thumbs/7z6fu6gjk6exjf70iuwu6z0ne.gif',
        'grenoblefoot38': 'https://content.sportslogos.net/logos/129/4056/thumbs/s4306yf50ihzfsfaxkudfnijh.gif',
        'enavantdeguingamp': 'https://content.sportslogos.net/logos/129/4049/thumbs/ntzfhqq4bo4jtheyww8gd3hco.gif',
        'lemansfc': 'https://content.sportslogos.net/logos/129/4050/thumbs/bdmhq6439qs0oz0csqgfggmvp.gif',
        'losclille': 'https://content.sportslogos.net/logos/129/4051/thumbs/gqei1nfowihpqrnqgpifdnn2l.gif',
        'montpellierhsc': 'https://content.sportslogos.net/logos/129/4052/thumbs/cmo65k4qo74nlhjxoq1ooh4fh.gif',
        'ogcnice': 'https://content.sportslogos.net/logos/129/4053/thumbs/ms5rh4j609oqsc3tj9wto0l8k.gif',
        'olympiquedemarseille': 'https://content.sportslogos.net/logos/129/4055/thumbs/k4ikj6pruvdpu8nsh86fc1l96.gif',
        'parissaint-germain': 'https://content.sportslogos.net/logos/129/4159/thumbs/hzgunkh343rdlm9u1479ezime.gif',
        'racingclubdelens': 'https://content.sportslogos.net/logos/129/4058/thumbs/e547f0ce55e7zgfjiev75c56f.gif',
        'stademalherbecaen': 'https://content.sportslogos.net/logos/129/4059/thumbs/sgzltueu2ie15k8s2lfsgi5mm.gif',
        'fcsochaux-montbéliard': 'https://content.sportslogos.net/logos/129/4062/thumbs/68rwwm7y43zsvqj9zzlrp5haw.gif',
        'assaint-étienne': 'https://content.sportslogos.net/logos/129/4043/thumbs/a4i8258ae2oh9tza7h38oetju.gif',
        'stadebrestois29': 'https://content.sportslogos.net/logos/129/4063/thumbs/p222ggtnekduljfpglyu61j5l.gif',
        'stadedereims': 'https://content.sportslogos.net/logos/129/4061/thumbs/6ebeb0v6plo16cuvizx8cedbf.gif',
        'staderennaisfc': 'https://content.sportslogos.net/logos/129/4060/thumbs/n24fu5g7tz5gagmjlx61pbww4.gif',
        'toulousefootballclub': 'https://content.sportslogos.net/logos/129/4064/thumbs/7shszng326awpet96flvcy848.gif',
        'estactroyes': 'https://content.sportslogos.net/logos/129/4065/thumbs/i3cgioegeb8hdcm5p966z8p6u.gif',
        'valenciennesfc': 'https://content.sportslogos.net/logos/129/4066/thumbs/zfzf4unusugde44v3tujuf5o8.gif',
        'olympiquelyonnais': 'https://content.sportslogos.net/logos/129/4054/thumbs/pf8kx23jo9yi1hcoiqe92udhj.gif'
    }

    dutchLeageImgMap = {
     'adodenhaag': 'https://content.sportslogos.net/logos/180/5349/thumbs/534987380.gif',
     'ajax': 'https://content.sportslogos.net/logos/180/5350/thumbs/535062490.gif',
     'azalkmaar': 'https://content.sportslogos.net/logos/180/5351/thumbs/535139150.gif',
     'fcgroningen': 'https://content.sportslogos.net/logos/180/5353/thumbs/535335730.gif',
     'fctwente': 'https://content.sportslogos.net/logos/180/5354/thumbs/535467030.gif',
     'fcutrecht': 'https://content.sportslogos.net/logos/180/5355/thumbs/535535540.gif',
     'feyenoord': 'https://content.sportslogos.net/logos/180/5358/thumbs/535852370.gif',
     'heraclesalmelo': 'https://content.sportslogos.net/logos/180/5359/thumbs/535981010.gif',
     'peczwolle': 'https://content.sportslogos.net/logos/180/5357/thumbs/535725960.gif',
     'psv': 'https://content.sportslogos.net/logos/180/5372/thumbs/537217030.gif',
     'rkcwaalwijk': 'https://content.sportslogos.net/logos/180/5361/thumbs/536167160.gif',
     'scheerenveen': 'https://content.sportslogos.net/logos/180/5363/thumbs/536329830.gif',
     'spartarotterdam': 'https://content.sportslogos.net/logos/180/5365/thumbs/536595170.gif',
     'vitesse': 'https://content.sportslogos.net/logos/180/5364/thumbs/536418420.gif',
     'vvv-venlo': 'https://content.sportslogos.net/logos/180/5369/thumbs/536976530.gif',
     'willemii': 'https://content.sportslogos.net/logos/180/5367/thumbs/536745170.gif'
    }

    portugueseLeagueImgMap = {
     'osbelenenses': 'https://content.sportslogos.net/logos/179/5331/thumbs/533116200.gif',
     'boavistafc': 'https://content.sportslogos.net/logos/179/5333/thumbs/533349180.gif',
     'fcporto': 'https://content.sportslogos.net/logos/179/5342/thumbs/534228680.gif',
     'gilvicentefc': 'https://content.sportslogos.net/logos/179/5336/thumbs/533636530.gif',
     'clubesportmarítimo': 'https://content.sportslogos.net/logos/179/5337/thumbs/533746100.gif',
     'moreirensefc': 'https://content.sportslogos.net/logos/179/5338/thumbs/533849420.gif',
     'fcpaçosdeferreira': 'https://content.sportslogos.net/logos/179/5340/thumbs/534095860.gif',
     'rioavefc': 'https://content.sportslogos.net/logos/179/5343/thumbs/534353580.gif',
     'slbenfica': 'https://content.sportslogos.net/logos/179/5332/thumbs/533288680.gif',
     'scbraga': 'https://content.sportslogos.net/logos/179/5334/thumbs/533496230.gif',
     'sportingcp': 'https://content.sportslogos.net/logos/179/5344/thumbs/534449460.gif',
     'vitóriaguimarães': 'https://content.sportslogos.net/logos/179/5346/thumbs/534666770.gif',
     'vitóriadesetúbal': 'https://content.sportslogos.net/logos/179/5345/thumbs/534574460.gif'
    }

    mlsLeageImgMap = {
     'atlantaunited': 'https://content.sportslogos.net/logos/9/5475/thumbs/547573932017.gif',
     'chicagofire': 'https://content.sportslogos.net/logos/9/323/thumbs/32325092020.gif',
     'coloradorapids': 'https://content.sportslogos.net/logos/9/328/thumbs/rkjf0o1eifa47lh6uhy4oj5qy.gif',
     'columbuscrewsc': 'https://content.sportslogos.net/logos/9/324/thumbs/32410022015.gif',
     'dcunited': 'https://content.sportslogos.net/logos/9/325/thumbs/32590012016.gif',
     'fcdallas': 'https://content.sportslogos.net/logos/9/329/thumbs/97yz6vcggd25lhyswy2fgvhfz.gif',
     'fccincinnati': 'https://content.sportslogos.net/logos/9/6623/thumbs/662385652019.gif',
     'houstondynamo': 'https://content.sportslogos.net/logos/9/1482/thumbs/h8ga63uac257c37js2m47hqke.gif',
     'lagalaxy': 'https://content.sportslogos.net/logos/9/331/thumbs/wcwwzw1ysgmdcgkguwof.gif',
     'minnesotaunitedfc': 'https://content.sportslogos.net/logos/9/6288/thumbs/628827592017.gif',
     'montrealimpact': 'https://content.sportslogos.net/logos/9/2837/thumbs/ugsnhv0oteegw8sjs3e4wivvg.gif',
     'newenglandrevolution': 'https://content.sportslogos.net/logos/9/327/thumbs/32748292009.gif',
     'newyorkredbulls': 'https://content.sportslogos.net/logos/9/1876/thumbs/i9ni847kriagxdlb7xewa6dl8.gif',
     'newyorkcityfc': 'https://content.sportslogos.net/logos/9/5119/thumbs/511960002015.gif',
     'orlandocitysc': 'https://content.sportslogos.net/logos/9/5135/thumbs/513564862015.gif',
     'philadelphiaunion': 'https://content.sportslogos.net/logos/9/2761/thumbs/276142122018.gif',
     'portlandtimbers': 'https://content.sportslogos.net/logos/9/2836/thumbs/283668012019.gif',
     'realsaltlake': 'https://content.sportslogos.net/logos/9/394/thumbs/39489852010.gif',
     'sanjoseearthquakes': 'https://content.sportslogos.net/logos/9/332/thumbs/33279522014.gif',
     'seattlesoundersfc': 'https://content.sportslogos.net/logos/9/2760/thumbs/2xkgg8fsj5zgywdhx5in779ed.gif',
     'sportingkansascity': 'https://content.sportslogos.net/logos/9/2834/thumbs/hzgsk662crxwpeffygd9vazda.gif',
     'torontofc': 'https://content.sportslogos.net/logos/9/1249/thumbs/124929902010.gif',
     'vancouverwhitecapsfc': 'https://content.sportslogos.net/logos/9/2835/thumbs/vk6eh75qeug9nejz5g4k1evlo.gif'
    }

    constructor() { }

    getFlagUrl(country:string):string {
        country = country.toLowerCase();
        if (country == 'england') {
            country = 'united-kingdom';
        }
        else if (country == 'bosnia herzegovina') {
            country = 'bosnia-and-herzegovina';
        }
        else if (country == 'korea republic') {
            country = 'south-korea';
        }
        else if (country == 'china pr') {
          country = 'china';
        }
        else if (country == 'chinese taipei') {
          country = 'taiwan';
        }
        else if (country == 'dr congo') {
          country = 'congo-democratic-republic-of-the'
        }
        else if (country == 'congo') {
          country = 'congo-republic-of-the';
        }
        else if (country == 'fyr macedonia') {
          country = 'macedonia'
        }
        else if (country == 'ivory coast') {
          country = 'cote-d-ivoire';
        }
        else if (country == 'korea dpr') {
          country = 'north-korea';
        }
        else if (country == 'republic of ireland') {
          country = 'ireland';
        }
        else if (country == 'st kitts nevis') {
          country = 'saint-kitts-and-nevis';
        }
        else if (country == 'st lucia') {
          country = 'saint lucia';
        }
        else if (country == 'united states') {
          country = 'united-states-of-america';
        }
        country = country.split(' ').join('-')
        .replace('&', 'and')
        .replace('ã', 'a')
        .replace('é', 'e')
        .replace('í', 'i')
        .replace('rep.', 'republic');
        
        if (country == 'bermuda') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bermuda.svg/255px-Flag_of_Bermuda.svg.png';
        }
        else if (country == 'curacao') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_Cura%C3%A7ao.svg/255px-Flag_of_Cura%C3%A7ao.svg.png';
        }
        else if (country == 'faroe-islands') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_the_Faroe_Islands.svg/255px-Flag_of_the_Faroe_Islands.svg.png';
        }
        else if (country == 'gibraltar') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Flag_of_Gibraltar.svg/255px-Flag_of_Gibraltar.svg.png';
        }
        else if (country == 'guam') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Guam.svg/255px-Flag_of_Guam.svg.png';
        }
        else if (country == 'hong-kong') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/255px-Flag_of_Hong_Kong.svg.png';
        }
        else if (country == 'macau') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/255px-Flag_of_Macau.svg.png';
        }
        else if (country == 'montserrat') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Montserrat.svg/250px-Flag_of_Montserrat.svg.png';
        }
        else if (country == 'new-caledonia') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/New_Caledonia_flags_merged_%282017%29.svg/255px-New_Caledonia_flags_merged_%282017%29.svg.png';
        }
        else if (country == 'northern-ireland') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Ulster_Banner.svg/255px-Ulster_Banner.svg.png';
        }
        else if (country == 'puerto-rico') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/255px-Flag_of_Puerto_Rico.svg.png';
        }
        else if (country == 'scotland') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/255px-Flag_of_Scotland.svg.png';
        }
        else if (country == 'wales') {
          return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Wales_%281959%E2%80%93present%29.svg/255px-Flag_of_Wales_%281959%E2%80%93present%29.svg.png';
        }

        let size = '400';
        if (country == 'sierra-leone' || country == 'united-arab-emirates') {
          size = 'square-250';
        }
        return 'https://cdn.countryflags.com/thumbs/' + country + '/flag-' + size + '.png';
    }

    getClubLogo(club:string):string {
        club = club.split(' ').join('').toLowerCase();

        if (club in this.premierLeagueImgMap) {
            return this.premierLeagueImgMap[club];
        }
        else if (club in this.laLigaImgMap) {
            return this.laLigaImgMap[club]
        }
        else if (club in this.italianImgMap) {
            return this.italianImgMap[club]
        }
        else if (club in this.bundesligaImgMap) {
            return this.bundesligaImgMap[club];
        }
        else if (club in this.frenchLigueImgMap) {
            return this.frenchLigueImgMap[club];
        }
        else if (club in this.dutchLeageImgMap) {
          return this.dutchLeageImgMap[club];
        }
        else if (club in this.portugueseLeagueImgMap) {
          return this.portugueseLeagueImgMap[club];
        }
        else if (club in this.mlsLeageImgMap) {
          return this.mlsLeageImgMap[club];
        }

        return '';
    }

    equalDimensions(club:string):boolean {
        club = club.split(' ').join('').toLowerCase();
        return (club in this.premierLeagueImgMap) || (club in this.laLigaImgMap);
    }
}
