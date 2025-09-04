//2024.07.28 1.06
var G_track_N = 0;
var RND_Audio = false;
var CONGR_tracks = [];
let urlAudio = "https://informat.name/hb/audio/";


var MIN_tracks = ["hb04.mp3", 
                  "fone.mp3",
                  "jhb01.mp3",
                  "hb00.mp3", 
                  "yhb01.mp3",
                  "mhb01.mp3",
                  "ypaa.mp3",
                  "jhb02.mp3",
                  "hb03.mp3",
                  "hb02.mp3",
                  "fhb01.mp3",
                  "sdrsdrsdr.mp3",
                  "hb_sound.mp3",
"Gena_style_Sabaton.mp3"
                 ];

var EXT_tracks = ["https://informat.name/hb/audio/prezid.mp3", 
                  "https://monfon.org/dl/318397404/The_Beatles_-_Happy_Birthday_(monfon.org).mp3",
                  "https://monfon.org/dl/1495115558/Pesni_na_Den_Rozhdeniya_-_Igor_Nikolaev_-_Den_rozhdeniya_(monfon.org).mp3", 
                  "https://informat.name/hb/audio/yhb02.mp3",

                  "https://monfon.org/dl/217397447/Didyulya_-_Den_rozhdeniya_(monfon.org).mp3",
                  "https://monfon.org/dl/18545590/Gorod_312_-_Neveroyatnyjj_Den_(monfon.org).mp3", 
                  "https://monfon.org/dl/1686367555/Ivanushki_International_-_Den_rozhdeniya_(monfon.org).mp3", 
                  "https://informat.name/hb/audio/Gena_JMKE.mp3",
                  "https://monfon.org/dl/1580097060/Aljona_Apina_-_Den_rozhdeniya_(monfon.org).mp3", 
                  "https://monfon.org/dl/664530215/koretskoFF_-_Happy_birthday_TRAP_REMIX_(monfon.org).mp3", 
                  "https://monfon.org/dl/739185580/Suzy_-_Happy_Birthday_korean_(monfon.org).mp3", 
                  "https://informat.name/hb/audio/Gena_Geramnya.mp3",
                  "https://monfon.org/dl/341639310/KALLYS_Mashup_Cast_Maia_Reficco_Sara_Cobo_KALLYS_Mashup_Cast_feat_Maia_Reficco_Sara_Cobo_-_Happy_Birthday_to_Me_(monfon.org).mp3", 
                  "https://monfon.org/dl/55297934/Kygo_-_Happy_Birthday_(monfon.org).mp3", 
                  "https://monfon.org/dl/1631109506/Sfera_Ebbasta_-_Happy_Birthday_(monfon.org).mp3", 
                  "https://monfon.org/dl/1235691231/Joe_Dassin_-_Happy_Birthday_(monfon.org).mp3", 
                  "https://monfon.org/dl/1584163990/Stevie_Wonder_-_Happy_Birthday_(monfon.org).mp3", 
                  "https://monfon.org/dl/51927130/Bobby_Vee_-_Happy_Happy_Birthday_Baby_(monfon.org).mp3", 
                  "https://monfon.org/dl/411043260/The_Shadows_Cliff_Richard_-_Happy_Birthday_to_You_(monfon.org).mp3", 
                  "https://monfon.org/dl/610273478/The_Celtic_Kitchen_Party_-_Twice_as_Happy_Birthday_Song_(monfon.org).mp3", 
                  "https://monfon.org/dl/2039407039/Happy_Birthday_-_Happy_Birthday_Metal_With_Vocals_(monfon.org).mp3", 
                  "https://monfon.org/dl/1638450078/Gentle_Forest_Jazz_Band_-_HBTY_Happy_Birthday_to_You_(monfon.org).mp3", 
                  "https://monfon.org/dl/653898925/Eddy_Mitchell_-_Happy_Birthday_RockNRoll_(monfon.org).mp3", 
                  "https://monfon.org/dl/1127431756/Bo_Mller_-_Happy_Birthday_Rock-Version_Rock-Version_(monfon.org).mp3", 
                  "https://monfon.org/dl/769931409/Christophe_Petrel_-_Happy_Birthday_in_Japanese_(monfon.org).mp3", 
                  "https://monfon.org/dl/1655977691/Kristina_Orbakajjte_-_Den_rozhdeniya_(monfon.org).mp3",
                  "https://monfon.org/dl/930124163/Bravo_-_Vesennijj_Den_Esli_ty_reshish_chto_mozhesh_vse_mne_rasskazat_Veter_znaet_gde_menya_iskat_(monfon.org).mp3",
                  "https://monfon.org/dl/1980334568/Bobby_McFerrin_-_Dont_Worry_Be_Happy_(monfon.org).mp3",
                  "https://monfon.org/dl/1645226346/Pharrell_Williams_-_Happy_(monfon.org).mp3",
                  "https://monfon.org/dl/668973663/Jimmy_Soul_-_If_You_Wanna_Be_Happy_(monfon.org).mp3",
                  "https://ruf.muzikavsem.org/dl/311234047/Denis_Klyaver_-_Den_rozhdeniya_(ruf.muzikavsem.org).mp3",
                  "https://ruf.muzikavsem.org/dl/1663600213/Dyuna_-_Den_rozhdeniya_(ruf.muzikavsem.org).mp3",
                  "https://ruf.muzikavsem.org/dl/1301184962/Simfonicheskijj_orkestr_Li_Otta_-_Den_rozhdeniya_(ruf.muzikavsem.org).mp3",
                  "https://ruf.muzikavsem.org/dl/761206175/Happy_Birthday_-_S_Dnem_Rozhdeniya_(ruf.muzikavsem.org).mp3",
                  "https://ruf.muzikavsem.org/dl/1352433479/Andre_Rieu_-_Happy_Birthday_To_YouFor_Hes_a_Jolly_Good_Fellow_(ruf.muzikavsem.org).mp3",
                  "https://ruf.muzikavsem.org/dl/1511685055/Christophe_Petrel_-_Happy_Birthday_in_Korean_(ruf.muzikavsem.org).mp3",

                  "https://monfon.org/dl/1593624839/CHapiki_-_Detskaya_pesenka_pro_Den_rozhdeniya_(monfon.org).mp3"
                 ];

document.addEventListener("DOMContentLoaded", 
 function (){  
  InitTracks();
	var IDaudio = document.getElementsByTagName("audio")[0];
        IDaudio.my_track_N = 0;
        IDaudio.src =  HNY_tracks[ IDaudio.my_track_N ];
        IDaudio.volume = 0.4;  
        IDaudio.play();
        console.log("МУЗЫКА старт... "+ IDaudio.src);

        IDaudio.addEventListener("ended", function(){ StepAudio(G_track_N+1); } );
        IDaudio.addEventListener("error", function(){ console.log("Музыка: Ошибка. Пропускаем!!!"); NextAudio(G_track_N+1); } );

	var ID = document.getElementById("audioNext");
        ID.addEventListener("click", function(event){ NextAudio(); }, true);
        ID = document.getElementById("audioRnd");
        ID.addEventListener("click", function(event){ RndAudio(); }, false);
        ID = document.getElementById("audioExt");
        ID.addEventListener("click", function(event){ ExtendTracks(); }, true);
        ID = document.getElementById("audioIni");
        ID.addEventListener("click", function(event){ InitTracks(); }, true);
}
);


function StepAudio(N){
  if ( RND_Audio ) RndAudio(N);
  else NextAudio(N);
}

function NextAudio(N){
    var IDaudio = document.getElementsByTagName("audio")[0];
    if( N == undefined ) {  
      G_track_N = (G_track_N + 1 ) % HNY_tracks.length; 
    }
    else{
       G_track_N = N % HNY_tracks.length;
    }
    var S = HNY_tracks[ G_track_N ];
    if ( S !== undefined ){
      IDaudio.src =  S;
      IDaudio.play();
      console.log("МУЗЫКА: "+G_track_N+") "+ IDaudio.src);
    }
    else
      console.log("МУЗЫКА: "+G_track_N+" неопределено!!!" );
    if( G_track_N == NaN ) G_track_N = 0;
    RND_Audio = false;
 }


function RndAudio(){
    var IDaudio = document.getElementsByTagName("audio")[0];
    var R = Math.round(Math.random()*HNY_tracks.length/4+1);
    G_track_N = (G_track_N + R ) % HNY_tracks.length;
    IDaudio.src =  HNY_tracks[ G_track_N ];
    IDaudio.play();
    console.log("МУЗЫКА: "+G_track_N+") "+ IDaudio.src);
    RND_Audio = true;
 }


function InitTracks(){
    HNY_tracks = [];

    HNY_tracks = MIN_tracks.map( track => urlAudio + track ); 
    //HNY_tracks = HNY_tracks.concat(MIN_tracks); 
    console.log("МУЗЫКА: "+ HNY_tracks);
}

function ExtendTracks(){
   HNY_tracks = HNY_tracks.concat(EXT_tracks); 
    console.log("МУЗЫКА: "+ HNY_tracks);
}

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyN') {
    NextAudio();
  }
  if (event.code == 'KeyR') {
    RndAudio();
  }
  if (event.code == 'KeyE') {
    ExtendTracks();
  }
  if (event.code == 'KeyS') {
    InitTracks();
  }
});

