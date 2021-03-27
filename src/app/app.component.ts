import { Component, OnInit } from '@angular/core';

import { ComparisonService } from './services/comparison.service';
import { AutoCompleteComponent } from './components/select-cell-renderer.component';
declare var $: any;
const material_names = {
  "Beazer Homes MD" : [
    {"material_name_area": "Abstolute Black"},
    {"material_name_area": "Azul Platino"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Bianco Primata"},
    {"material_name_area": "Blanco Arabescato"},
    {"material_name_area": "Blue Pearl GT"},
    {"material_name_area": "Calacatta Alto"},
    {"material_name_area": "Calacatta Classique"},
    {"material_name_area": "Carrara Marmi"},
    {"material_name_area": "Carrara Mist"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Fossil Gray"},
    {"material_name_area": "Gray Lagoon"},
    {"material_name_area": "Iced White"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "New Venetian Gold"},
    {"material_name_area": "Peppercorn"},
    {"material_name_area": "Royal Jade"},
    {"material_name_area": "Salinas White"},
    {"material_name_area": "Soapstone Metropolis"},
    {"material_name_area": "Sparkling Black"},
    {"material_name_area": "Sparkling White"},
    {"material_name_area": "Stellar Gray"},
    {"material_name_area": "Viscon White"},
    {"material_name_area": "Volga Blue"},
    {"material_name_area": "White Ornamental (see White G) 3cm Polished"},
    {"material_name_area": "White G 3cm Polished"},
    {"material_name_area": "White Ice"},
    {"material_name_area": "Beazer Homes MD	Snow White"}
  ],
  "Beazer Homes VA": [
    {"material_name_area": "Absolute Black"},
    {"material_name_area": "Arctic White"},
    {"material_name_area": "Bianco Primata"},
    {"material_name_area": "Bianco Primata"},
    {"material_name_area": "Blanca Arabescato"},
    {"material_name_area": "Blue Pearl"},
    {"material_name_area": "Calacatta Alto"},
    {"material_name_area": "Calacatta Classique"},
    {"material_name_area": "Calacatta Vicenza"},
    {"material_name_area": "Carrara Grigio"},
    {"material_name_area": "Carrara Marmi"},
    {"material_name_area": "Carrara Mist"},
    {"material_name_area": "Carrara Morro"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Delicatus White Ice"},
    {"material_name_area": "Gray Lagoon"},
    {"material_name_area": "Iced White 2cm"},
    {"material_name_area": "Iced White 3cm"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Moon White"},
    {"material_name_area": "New Caledonia 3cm Polished"},
    {"material_name_area": "Ornamental White"},
    {"material_name_area": "Ornamental White"},
    {"material_name_area": "Royal Jade"},
    {"material_name_area": "Salinas White"},
    {"material_name_area": "Soapstone Metropolis"},
    {"material_name_area": "Sparkling Black"},
    {"material_name_area": "Sparkling White"},
    {"material_name_area": "Steel Gray"},
    {"material_name_area": "Steel Gray"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "Volga Blue"},
    {"material_name_area": "White Waves"},
    {"material_name_area": "NEW VENETIAN GOLD 3cm"}
  ],
  "Caruso MD": [
    {"material_name_area": "African Rainbow"},
    {"material_name_area": "Arctic White"},
    {"material_name_area": "Ariel"},
    {"material_name_area": "Azul Platino"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Bianco Primata"},
    {"material_name_area": "Black Galaxy"},
    {"material_name_area": "Blanco Maple"},
    {"material_name_area": "Blue Pearl GT"},
    {"material_name_area": "Calacatta Alto"},
    {"material_name_area": "Calacatta Antarctica (Antartica)"},
    {"material_name_area": "Calacatta Classic 3cm"},
    {"material_name_area": "Calacatta Classique"},
    {"material_name_area": "Carrara Marmi"},
    {"material_name_area": "Carrara Mist"},
    {"material_name_area": "Carrara Morro"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Desert Bloom"},
    {"material_name_area": "Eternal Bella"},
    {"material_name_area": "Fossil Gray"},
    {"material_name_area": "Grey Expo"},
    {"material_name_area": "Iced White 2cm"},
    {"material_name_area": "Lagoon"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Lusso"},
    {"material_name_area": "Lyra"},
    {"material_name_area": "Lyra 3cm Polish"},
    {"material_name_area": "New Venetian Gold"},
    {"material_name_area": "Pearl Jasmine"},
    {"material_name_area": "Peppercorn White"},
    {"material_name_area": "Royal Jade"},
    {"material_name_area": "Salinas White"},
    {"material_name_area": "Sapphire Brown"},
    {"material_name_area": "Soapstone Metropolis"},
    {"material_name_area": "Sparkling White"},
    {"material_name_area": "Steel Gray"},
    {"material_name_area": "Titanium Polished 3cm"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "Viscon White *"},
    {"material_name_area": "White Ice"},
    {"material_name_area": "White Springs"},
    {"material_name_area": "Infinity White Polished 3cm"},
    {"material_name_area": "Swanbridge"},
    {"material_name_area": "Marengo"},
    {"material_name_area": "Ariel"},
    {"material_name_area": "COLONIAL GOLD 3cm"},
    {"material_name_area": "Colonial Gold 3cm Polished"}
  ],
  "Creative Homes": [
    {"material_name_area": "Aspen Calacata Classic"},
    {"material_name_area": "Aspen Catania G043"},
    {"material_name_area": "Aspen Landscape"},
    {"material_name_area": "Aspen Latte"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Black Galaxy"},
    {"material_name_area": "Blue Pearl"},
    {"material_name_area": "Calacatta Alto"},
    {"material_name_area": "Cashmere Carrera"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Dallas White"},
    {"material_name_area": "Delicatus White"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Moon White"},
    {"material_name_area": "New Caledonia"},
    {"material_name_area": "New Venetian Gold"},
    {"material_name_area": "Santa Cecilia Light"},
    {"material_name_area": "Sparkling White"},
    {"material_name_area": "Steel Grey"},
    {"material_name_area": "Tan Brown"},
    {"material_name_area": "Ubatuba"}
  ],
  "Dan Ryan DE": [
    {"material_name_area": "Absolute Black"},
    {"material_name_area": "Ariel"},
    {"material_name_area": "Azul Platino"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Bianco Orion"},
    {"material_name_area": "Bianco Primata"},
    {"material_name_area": "Blanco City"},
    {"material_name_area": "Blanco Maple"},
    {"material_name_area": "Calypso"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Eternal Calacatta"},
    {"material_name_area": "Grey Expo"},
    {"material_name_area": "Grey Expo (HD Grey Slate) 3cm Polish"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Lusso"},
    {"material_name_area": "Lyra"},
    {"material_name_area": "Moon White"},
    {"material_name_area": "Ocean Jasper"},
    {"material_name_area": "Ornamental White"},
    {"material_name_area": "Pearl Jasime"},
    {"material_name_area": "Pietra"},
    {"material_name_area": "Pure White (aka Super White) 3cm"},
    {"material_name_area": "Royal Jade"},
    {"material_name_area": "Royal Reef"},
    {"material_name_area": "Salinas White"},
    {"material_name_area": "Steel Gray"},
    {"material_name_area": "Stellar Snow"},
    {"material_name_area": "Tebas Black"},
    {"material_name_area": "White Ice"},
    {"material_name_area": "White G 3cm Polished"},
    {"material_name_area": "White Zeus"}
  ],
  "Dan Ryan Metro": [
    {"material_name_area": "Absolute Black"},
    {"material_name_area": "Ariel"},
    {"material_name_area": "Aspen Blanco Maple (maybe sub for Silestone Blanco Maple) 3cm"},
    {"material_name_area": "Azul Platino"},
    {"material_name_area": "Bianco Orion"},
    {"material_name_area": "Blanco Orion 3cm Polish"},
    {"material_name_area": "Blanca Primata"},
    {"material_name_area": "Blanco Antico"},
    {"material_name_area": "Blanco City"},
    {"material_name_area": "Blanco Maple"},
    {"material_name_area": "Calypso"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Et Bella"},
    {"material_name_area": "Eternal Calacatta"},
    {"material_name_area": "Grey Expo"},
    {"material_name_area": "Home Depot Color Solaris / Solarius 3cm Polish"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Lusso"},
    {"material_name_area": "Lyra"},
    {"material_name_area": "Miami"},
    {"material_name_area": "Moon White"},
    {"material_name_area": "Ocean Jasper"},
    {"material_name_area": "Ornamental White"},
    {"material_name_area": "Pearl Jasmine"},
    {"material_name_area": "Pietra"},
    {"material_name_area": "Royal Jade"},
    {"material_name_area": "Salinas White"},
    {"material_name_area": "Steel Gray"},
    {"material_name_area": "Stellar Snow"},
    {"material_name_area": "Tebas Black"},
    {"material_name_area": "Ubatube"},
    {"material_name_area": "White Ice"},
    {"material_name_area": "White Zeus"},
    {"material_name_area": "Blanco Orion 3cm Polish"},
    {"material_name_area": "Solaris / Solarius 3cm Polish"},
    {"material_name_area": "Eternal Calacatta Gold (HD Calacatta Glitz) 3cm Polish"}
  ],
  "DELUCA HOMES": [
    {"material_name_area": "Artic White"},
    {"material_name_area": "Azul Platino"},
    {"material_name_area": "Bayshore Sands"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Black Galaxy"},
    {"material_name_area": "Black Pearl"},
    {"material_name_area": "Blue Pearl GT"},
    {"material_name_area": "Calacatta Classique"},
    {"material_name_area": "Calacatta Vicenza"},
    {"material_name_area": "Carrara Grigio"},
    {"material_name_area": "Carrara Marmi"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Desert Bloom"},
    {"material_name_area": "Emerald Pearl"},
    {"material_name_area": "Fossil Grey"},
    {"material_name_area": "Fossil Taupe"},
    {"material_name_area": "Iced Gray"},
    {"material_name_area": "Iced White"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Mont Clair White"},
    {"material_name_area": "Moon White"},
    {"material_name_area": "New Caledonia"},
    {"material_name_area": "New Venetian Gold"},
    {"material_name_area": "Ornamental White"},
    {"material_name_area": "Peppercorn White"},
    {"material_name_area": "Royal Jade"},
    {"material_name_area": "Sahara Beige"},
    {"material_name_area": "Santa Cecilia Light"},
    {"material_name_area": "Sapphire Blue"},
    {"material_name_area": "Snow Fall"},
    {"material_name_area": "Sparkling Black"},
    {"material_name_area": "Sparkling White"},
    {"material_name_area": "Steel Gray"},
    {"material_name_area": "Swan Gray"},
    {"material_name_area": "Viscon White"},
    {"material_name_area": "White Ice"},
    {"material_name_area": "Carrara Morro (Aspen Carrara Morro 3cm)"}
  ],
  "DMR - PDR": [
    {"material_name_area": "Azul Platino"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Moon White"},
    {"material_name_area": "MSI Artic White"},
    {"material_name_area": "MSI Carrara Marmi"},
    {"material_name_area": "MSI Carrara Mist"},
    {"material_name_area": "MSI Iced White"},
    {"material_name_area": "MSI Pebble Rock"},
    {"material_name_area": "Steel Gray"},
    {"material_name_area": "Ubatuba"}
  ],
  "Dr Horton DE": [
    {"material_name_area": "Artic White"},
    {"material_name_area": "Black Pearl"},
    {"material_name_area": "Carrara Caldia"},
    {"material_name_area": "Carrara Marmi"},
    {"material_name_area": "Carrara Morro"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Dallas White"},
    {"material_name_area": "Fossil Gray"},
    {"material_name_area": "Frost White"},
    {"material_name_area": "Giallo Ornamental"},
    {"material_name_area": "Gray Lagoon"},
    {"material_name_area": "Iced White"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Moon White"},
    {"material_name_area": "New Caledonia"},
    {"material_name_area": "Pebble Rock"},
    {"material_name_area": "Santa Cecilia Light"},
    {"material_name_area": "Sparkling Black"},
    {"material_name_area": "Sparkling White (Snow Meadow) 3cm"},
    {"material_name_area": "Steel Grey"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "White G 3cm Polished"}
  ],
  "Gemcraft": [
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Black Galazy"},
    {"material_name_area": "Blue Pearl"},
    {"material_name_area": "Calacatta Classique"},
    {"material_name_area": "Cashmer Carrara"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Dallas White"},
    {"material_name_area": "Delicatus White"},
    {"material_name_area": "Iced Gray"},
    {"material_name_area": "Iced White"},
    {"material_name_area": "Latte (Aspen)"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "New Caledonia"},
    {"material_name_area": "New Venetian Gold"},
    {"material_name_area": "Santa Cecilia Light"},
    {"material_name_area": "Sparklling White"},
    {"material_name_area": "Sparkling White (Snow Meadow) 3cm"},
    {"material_name_area": "Steel Gray"},
    {"material_name_area": "Steel Grey 3cm Dual - Leather / Polish"},
    {"material_name_area": "Tan Brown"},
    {"material_name_area": "Crema Caramel 3cm Polished"}
  ],
  "Grand Villa Homes": [
    {"material_name_area": "	2cm Iced White"},
    {"material_name_area": "	African Rainbow"},
    {"material_name_area": "	Arctic White"},
    {"material_name_area": "	Ariel"},
    {"material_name_area": "	Azul Platino"},
    {"material_name_area": "	Bianca Primata"},
    {"material_name_area": "	Bianco Antico"},
    {"material_name_area": "	Black Galaxy"},
    {"material_name_area": "	Blanca Arabescato"},
    {"material_name_area": "	Blanco Maple"},
    {"material_name_area": "	Calacatta Alto"},
    {"material_name_area": "	Calacatta Class"},
    {"material_name_area": "	Carrara Marmi"},
    {"material_name_area": "	Carrara Mist"},
    {"material_name_area": "	Carrara Morro"},
    {"material_name_area": "	Colonial White"},
    {"material_name_area": "	Crema Caramel"},
    {"material_name_area": "	Fantasy Brown"},
    {"material_name_area": "	Fossil Gray"},
    {"material_name_area": "	Grey Expo"},
    {"material_name_area": "	Grey Lagoon"},
    {"material_name_area": "	Luna Pearl"},
    {"material_name_area": "	Lyra"},
    {"material_name_area": "	New Venetian Gold"},
    {"material_name_area": "	Pearl Jasmine"},
    {"material_name_area": "	Peppercorn White"},
    {"material_name_area": "	Royal Jade"},
    {"material_name_area": "	Salinas White"},
    {"material_name_area": "	Sapphire Brown"},
    {"material_name_area": "	Sparkling White"},
    {"material_name_area": "	Steel Gray"},
    {"material_name_area": "	Ubatuba"},
    {"material_name_area": "	Viscon White *"},
    {"material_name_area": "	Warehouse custom"},
    {"material_name_area": "	White Ice"},
    {"material_name_area": "	White Springs"},
    {"material_name_area": "	White Waves"}
  ],
  "HD": [
    {"material_name_area": "Absolute Black"},
    {"material_name_area": "Airy Concrete - Group C"},
    {"material_name_area": "Airy Concrete - Group D"},
    {"material_name_area": "Alaska White"},
    {"material_name_area": "Alba"},
    {"material_name_area": "Alpina White"},
    {"material_name_area": "Alpine Mist - Group C"},
    {"material_name_area": "Alpine Mist - Group D"},
    {"material_name_area": "Alpine Valley"},
    {"material_name_area": "Amarello Ornamental"},
    {"material_name_area": "Andino White"},
    {"material_name_area": "Arabescus Carrara Marble"},
    {"material_name_area": "Arga"},
    {"material_name_area": "Aria"},
    {"material_name_area": "Artic White"},
    {"material_name_area": "Ashbourne Matte"},
    {"material_name_area": "Aspen White"},
    {"material_name_area": "Atlantic Salt (HD Atlantic Salt) 3cm Polish A"},
    {"material_name_area": "Atlantic Salt"},
    {"material_name_area": "Aura - Dekton"},
    {"material_name_area": "Aura - Viatera"},
    {"material_name_area": "Azul Celeste"},
    {"material_name_area": "Azul Celeste Brushed"},
    {"material_name_area": "Azul Platino"},
    {"material_name_area": "Bamboo"},
    {"material_name_area": "Bellwater"},
    {"material_name_area": "Bergen"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Bianco Calacatta"},
    {"material_name_area": "Bianco Romano"},
    {"material_name_area": "Black Galaxy"},
    {"material_name_area": "Black Pearl"},
    {"material_name_area": "Black Pearl Brushed"},
    {"material_name_area": "Black Soapstone"},
    {"material_name_area": "Blanco City"},
    {"material_name_area": "Blanco Maple"},
    {"material_name_area": "Blaze"},
    {"material_name_area": "Blue Pearl"},
    {"material_name_area": "Brookvale"},
    {"material_name_area": "Calacaata Nuvo"},
    {"material_name_area": "Calacatta Antarctica (Antartica)"},
    {"material_name_area": "Calacatta Arno"},
    {"material_name_area": "Calacatta Botanica"},
    {"material_name_area": "Calacatta Classic 3cm"},
    {"material_name_area": "Calacatta Gold"},
    {"material_name_area": "Calacatta Laza"},
    {"material_name_area": "Calacatta Venice"},
    {"material_name_area": "Calacatta Vicenza Matte"},
    {"material_name_area": "Calico White"},
    {"material_name_area": "Calypso"},
    {"material_name_area": "Cameo Shore"},
    {"material_name_area": "Capri Limestone"},
    {"material_name_area": "Capricorn"},
    {"material_name_area": "Caravelas Gold"},
    {"material_name_area": "Carrara Iris"},
    {"material_name_area": "NEW Carrara Marmi (HD) 3cm"},
    {"material_name_area": "Carrara White Marble"},
    {"material_name_area": "Cemento"},
    {"material_name_area": "Charcoal Soapstone Suede"},
    {"material_name_area": "Chatsworth"},
    {"material_name_area": "Chesapeake Blue (Whisper White)"},
    {"material_name_area": "Clarino"},
    {"material_name_area": "Cloudy Mist"},
    {"material_name_area": "Coastal Grey"},
    {"material_name_area": "Coffee Brown"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Coral City"},
    {"material_name_area": "Cortina"},
    {"material_name_area": "Crema Atlantico"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Crystal Grey"},
    {"material_name_area": "Danae"},
    {"material_name_area": "Domoos"},
    {"material_name_area": "Dovestone"},
    {"material_name_area": "Empira White"},
    {"material_name_area": "Entzo Calacatta"},
    {"material_name_area": "Eternal Marfil"},
    {"material_name_area": "Eternal Noir Suede"},
    {"material_name_area": "Everest"},
    {"material_name_area": "Fairy White"},
    {"material_name_area": "Fantasy Brown Marble"},
    {"material_name_area": "Fantasy Macaubas Quartzite"},
    {"material_name_area": "Fiord"},
    {"material_name_area": "Florida Wave Quartzite"},
    {"material_name_area": "Fossil"},
    {"material_name_area": "Giallo Vitoria"},
    {"material_name_area": "Glacier"},
    {"material_name_area": "Gray Atlantico"},
    {"material_name_area": "Gray Nuevo"},
    {"material_name_area": "Gray Wave"},
    {"material_name_area": "Grey Expo"},
    {"material_name_area": "Halo"},
    {"material_name_area": "Hawkridge"},
    {"material_name_area": "Intermezzo"},
    {"material_name_area": "Jet Black"},
    {"material_name_area": "Karis"},
    {"material_name_area": "Kelya Marble"},
    {"material_name_area": "Keon Concrete"},
    {"material_name_area": "Keranium"},
    {"material_name_area": "Kimbler Mist"},
    {"material_name_area": "Kira"},
    {"material_name_area": "Lento"},
    {"material_name_area": "Lusso 3cm Polish - Level 4"},
    {"material_name_area": "Lusso 3cm Polish - Level 5"},
    {"material_name_area": "Mara Blanca"},
    {"material_name_area": "Marengo"},
    {"material_name_area": "Mirage White 3cm Polish"},
    {"material_name_area": "Moon White"},
    {"material_name_area": "Moorland Fog"},
    {"material_name_area": "Mountain Mist"},
    {"material_name_area": "Muse"},
    {"material_name_area": "Mystic Spring"},
    {"material_name_area": "Nadenbrook"},
    {"material_name_area": "Natura"},
    {"material_name_area": "Nero Mist Honed"},
    {"material_name_area": "Nevasca Mist"},
    {"material_name_area": "New Caledonia"},
    {"material_name_area": "New Venetial Gold"},
    {"material_name_area": "New Venetian Gold 3cm Polish"},
    {"material_name_area": "Nimbus"},
    {"material_name_area": "Noble Grey - Group C"},
    {"material_name_area": "Noble Grey - Group D"},
    {"material_name_area": "Nocturne"},
    {"material_name_area": "Ocean Storm"},
    {"material_name_area": "Olimpo"},
    {"material_name_area": "Opera"},
    {"material_name_area": "Orix"},
    {"material_name_area": "Pearl (Avalon White)"},
    {"material_name_area": "Pearl Jasmine"},
    {"material_name_area": "Pearla White"},
    {"material_name_area": "Pietra"},
    {"material_name_area": "Polaris"},
    {"material_name_area": "Quartet"},
    {"material_name_area": "Ridgegate"},
    {"material_name_area": "Risegate"},
    {"material_name_area": "River White"},
    {"material_name_area": "Rococo"},
    {"material_name_area": "Royal Teak"},
    {"material_name_area": "Rugged Concrete - Group C"},
    {"material_name_area": "Rugged Concrete - Group D"},
    {"material_name_area": "Salinas White"},
    {"material_name_area": "Santa Cecilia"},
    {"material_name_area": "Sapphire Blue"},
    {"material_name_area": "Savannah Gold"},
    {"material_name_area": "Scorpio"},
    {"material_name_area": "Seacourt (HD) 3cm Polish"},
    {"material_name_area": "Seacourt"},
    {"material_name_area": "SF Real"},
    {"material_name_area": "Sherwood"},
    {"material_name_area": "Sienna Ridge"},
    {"material_name_area": "Silken Pearl"},
    {"material_name_area": "Silver Cloud"},
    {"material_name_area": "Silver Falls"},
    {"material_name_area": "Silver Mist"},
    {"material_name_area": "Silver Sands"},
    {"material_name_area": "Sirius"},
    {"material_name_area": "Smoked Pearl"},
    {"material_name_area": "Snowfall"},
    {"material_name_area": "Snowy Ibiza"},
    {"material_name_area": "Sogne"},
    {"material_name_area": "Soke"},
    {"material_name_area": "Solaris"},
    {"material_name_area": "Solaris / Solarius 3cm Polish"},
    {"material_name_area": "Soprano"},
    {"material_name_area": "Statuario"},
    {"material_name_area": "Statuario Nuvo"},
    {"material_name_area": "Steel Grey"},
    {"material_name_area": "Stellar Gray"},
    {"material_name_area": "Stellar Night"},
    {"material_name_area": "Stellar Snow"},
    {"material_name_area": "Stellar White"},
    {"material_name_area": "Summerbrook"},
    {"material_name_area": "Sunset Canyon"},
    {"material_name_area": "Super White"},
    {"material_name_area": "Taga"},
    {"material_name_area": "Taj Mahal Quartzite"},
    {"material_name_area": "Taj Royale"},
    {"material_name_area": "Talus"},
    {"material_name_area": "Tebas Black"},
    {"material_name_area": "Tenor"},
    {"material_name_area": "Trafalgar"},
    {"material_name_area": "Travella"},
    {"material_name_area": "Trilium"},
    {"material_name_area": "Tundra"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "Urban Frost"},
    {"material_name_area": "Valle Nevado - Granite"},
    {"material_name_area": "Valle Nevado - Prefab Granite"},
    {"material_name_area": "Warwick"},
    {"material_name_area": "White Antico"},
    {"material_name_area": "White Arabesque"},
    {"material_name_area": "White Attica - Group C"},
    {"material_name_area": "White Attica - Group D"},
    {"material_name_area": "White Attica 3cm Polish A"},
    {"material_name_area": "White Ice"},
    {"material_name_area": "White Ornamental"},
    {"material_name_area": "White Sparkle"},
    {"material_name_area": "White Spring 3cm Polish"},
    {"material_name_area": "White Springs"},
    {"material_name_area": "White Storm"},
    {"material_name_area": "White Zeus Extreme"},
    {"material_name_area": "Whitemdale"},
    {"material_name_area": "Yukon White"},
    {"material_name_area": "Zermatt Quartzite"},
    {"material_name_area": "Mirage White 3cm Polish"},
    {"material_name_area": "Solaris / Solarius 3cm Polish"},
    {"material_name_area": "Jet Black 3cm Polish A"},
    {"material_name_area": "Ridgegate (HD) 3cm Polish"},
    {"material_name_area": "Perla White (HD Perla White) 3cm"},
    {"material_name_area": "Color Silver Creek 3cm Polish"},
    {"material_name_area": "Color Pearl"},
    {"material_name_area": "Sparkling White (Snow Meadow) 3cm"},
    {"material_name_area": "Quartz Clarino (HD Chorino) 3cm"}
  ],
  "Howmar Homes": [
    {"material_name_area": "Absolute Black"},
    {"material_name_area": "Bianca Primata"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Blue Pearl GT"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Fantasy Brown"},
    {"material_name_area": "Giallo Fiorito"},
    {"material_name_area": "Giallo Ornamental"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Royal Jade"},
    {"material_name_area": "Sapphire Brown"},
    {"material_name_area": "St. Cecilia Classic"},
    {"material_name_area": "St. Cecilia Light"},
    {"material_name_area": "Steel Gray"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "Viscon White"},
    {"material_name_area": "White Ice"},
    {"material_name_area": "White Springs"}
  ],
  "JP ORLEANS": [
    {"material_name_area": "Absolute Black"},
    {"material_name_area": "Artic White"},
    {"material_name_area": "Azul Platino"},
    {"material_name_area": "Babylon Gray"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Blue Pearl"},
    {"material_name_area": "Calacatta Classique"},
    {"material_name_area": "Carrara Grigio"},
    {"material_name_area": "Cashmere Carrara"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Concerto"},
    {"material_name_area": "Coronado"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Desert Bloom"},
    {"material_name_area": "Iced White"},
    {"material_name_area": "Latte (Aspen)"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Lyra"},
    {"material_name_area": "Moon White"},
    {"material_name_area": "New Caledonia"},
    {"material_name_area": "Ornamental White"},
    {"material_name_area": "Peppercorn White"},
    {"material_name_area": "Royal Jade"},
    {"material_name_area": "Santa Cecilia Light"},
    {"material_name_area": "Sapphire Blue"},
    {"material_name_area": "Sparkling White"},
    {"material_name_area": "Steel Grey"},
    {"material_name_area": "Steel Grey Leathered"},
    {"material_name_area": "Stellar Gray"},
    {"material_name_area": "Tan Brown"},
    {"material_name_area": "Toasted Almond"},
    {"material_name_area": "Tropical Brown"},
    {"material_name_area": "Verde Butterfly"},
    {"material_name_area": "Viscon White"},
    {"material_name_area": "Volga Blue"},
    {"material_name_area": "White Ice"},
    {"material_name_area": "Carrara Mist 3cm"}
  ],
  "KETTLER FORLINES": [
    {"material_name_area": "Alpina White"},
    {"material_name_area": "Altair 15"},
    {"material_name_area": "Black Premium"},
    {"material_name_area": "Blanco Maple"},
    {"material_name_area": "Blue Pearl"},
    {"material_name_area": "Calacatta Classique"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Coral Clay"},
    {"material_name_area": "Customer selected at Warehouse- Level 4"},
    {"material_name_area": "Customer selected at Warehouse- Level 5"},
    {"material_name_area": "Giallo Veneziano"},
    {"material_name_area": "Grey Expo"},
    {"material_name_area": "Iced White 2cm"},
    {"material_name_area": "Iron Bark"},
    {"material_name_area": "Lagoon"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Lyra"},
    {"material_name_area": "Marengo"},
    {"material_name_area": "Moon White"},
    {"material_name_area": "New Caledonia"},
    {"material_name_area": "New Venetian Gold"},
    {"material_name_area": "Royal Jade"},
    {"material_name_area": "Santa Cecilia Light"},
    {"material_name_area": "Sapphire Blue"},
    {"material_name_area": "Sienna Ridge"},
    {"material_name_area": "Steel Grey"},
    {"material_name_area": "Stellar Snow"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "Viscon White"},
    {"material_name_area": "Volga Blue"},
    {"material_name_area": "White Storm"},
    {"material_name_area": "White Zeus"},
    {"material_name_area": "Coral White 3cm"},
    {"material_name_area": "Lagoon"}
  ],
  "KHOV HOMES": [
    {"material_name_area": "African Rainbow"},
    {"material_name_area": "Babylon Gray"},
    {"material_name_area": "Baltic Brown"},
    {"material_name_area": "Calacatta Vincenza"},
    {"material_name_area": "Calcatta Vincenza Matte"},
    {"material_name_area": "Calcatta Vincenzo Matte"},
    {"material_name_area": "Carrara Marmi"},
    {"material_name_area": "Carrara Mist"},
    {"material_name_area": "Cedar Grove- Stacked - Package 3A - Q Snow White"},
    {"material_name_area": "Colonial White Brushed"},
    {"material_name_area": "Colonial White 3cm Dual - Leather / Polish"},
    {"material_name_area": "Crema Bordeaux"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Delicatus White Ice"},
    {"material_name_area": "Fantasy Brown Brushed"},
    {"material_name_area": "Fantasy Brown Marble"},
    {"material_name_area": "Fossil Brown"},
    {"material_name_area": "Fossil Gray"},
    {"material_name_area": "Fossil Gray Matte"},
    {"material_name_area": "G Colonial White Brushed"},
    {"material_name_area": "G Fantasy Brown Brushed"},
    {"material_name_area": "G Luna Pearl"},
    {"material_name_area": "G Luna Pearl"},
    {"material_name_area": "G Santa Cecilia"},
    {"material_name_area": "G Silver Cloud Brushed"},
    {"material_name_area": "G Steel Grey (Brushed)"},
    {"material_name_area": "Giallo Ornamental"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Manhattan Gray"},
    {"material_name_area": "Neptuno Bordeaux"},
    {"material_name_area": "New Caledonia"},
    {"material_name_area": "Q Calcatta Vincenza Matte"},
    {"material_name_area": "Q Carrara Mist"},
    {"material_name_area": "Q Carrara Morro"},
    {"material_name_area": "Q Fossil Gray Matte"},
    {"material_name_area": "Q Fossil Grey"},
    {"material_name_area": "Rosewood"},
    {"material_name_area": "Sahara Beige"},
    {"material_name_area": "Santa Cecilia"},
    {"material_name_area": "Santa Cecilia (LC)"},
    {"material_name_area": "Snow White"},
    {"material_name_area": "Sparkling Black"},
    {"material_name_area": "Sparkling White"},
    {"material_name_area": "Steel Grey 3cm Dual - Leather / Polish"},
    {"material_name_area": "Steel Grey Brushed"},
    {"material_name_area": "Tan Brown"},
    {"material_name_area": "Tempest Black"},
    {"material_name_area": "Towns @ Glen Oaks - Elements 2 - Steel Grey Brushed"},
    {"material_name_area": "Towns @ Glen Oaks - Loft - Steel Grey Brushed"},
    {"material_name_area": "Tropical Brown"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "Viscon White"},
    {"material_name_area": "White Springs"},
    {"material_name_area": "White Ice 3cm Polished"}
  ],
  "KOCH HOMES": [
    {"material_name_area": "Absolute Black"},
    {"material_name_area": "African Rainbow"},
    {"material_name_area": "Artic White"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Black Galaxy"},
    {"material_name_area": "Blue Pearl"},
    {"material_name_area": "Carrara Marmi"},
    {"material_name_area": "Carrara Mist"},
    {"material_name_area": "Cashmere Carrara 3cm"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Emeral Pearl"},
    {"material_name_area": "Fossil Gray"},
    {"material_name_area": "GIBSON'S GRANT - Crema Caramel"},
    {"material_name_area": "GIBSON'S GRANT - Giallo Ornamental"},
    {"material_name_area": "GIBSON'S GRANT - Iced Gray"},
    {"material_name_area": "GIBSON'S GRANT - Iced White"},
    {"material_name_area": "GIBSON'S GRANT - Luna Pearl"},
    {"material_name_area": "GIBSON'S GRANT - New Calendonia"},
    {"material_name_area": "GIBSON'S GRANT - New Venetian Gold"},
    {"material_name_area": "GIBSON'S GRANT - Salinas White"},
    {"material_name_area": "GIBSON'S GRANT - Sapphire Brown/Blue"},
    {"material_name_area": "GIBSON'S GRANT - St Cecilia Classic"},
    {"material_name_area": "GIBSON'S GRANT - Stellar Snow 13"},
    {"material_name_area": "GIBSON'S GRANT - Steel Grey"},
    {"material_name_area": "GIBSON'S GRANT - Tan Brown"},
    {"material_name_area": "GIBSON'S GRANT - Ubatuba"},
    {"material_name_area": "GIBSON'S GRANT - Verde Peacock"},
    {"material_name_area": "Iced Gray"},
    {"material_name_area": "Iced White"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Mont Blanc"},
    {"material_name_area": "Moon White"},
    {"material_name_area": "Ornamental White"},
    {"material_name_area": "Royal Jade"},
    {"material_name_area": "Sahara Beige"},
    {"material_name_area": "Solaris"},
    {"material_name_area": "Sparkling Black"},
    {"material_name_area": "Sparkling White"},
    {"material_name_area": "St. Cecilia Light"},
    {"material_name_area": "Steel Gray"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "Viscon White"},
    {"material_name_area": "Peppercorn White"}
  ],
  "Lennar": [
    {"material_name_area": "Brown Fantasy"},
    {"material_name_area": "Butterfly Beige"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Dallas White - Level 1"},
    {"material_name_area": "Dallas White - Level 2"},
    {"material_name_area": "Fantasy Brown 3cm Polished"},
    {"material_name_area": "Lyra"},
    {"material_name_area": "St. Cecilia Gold"},
    {"material_name_area": "White G 3cm Polished"},
    {"material_name_area": "White Ice"},
    {"material_name_area": "NEW VENETIAN GOLD 3cm"}
  ],
  "New Day Construction": [
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "New Caledonia"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "Azul Platino"},
    {"material_name_area": "New Venetial Gold"},
    {"material_name_area": "Santa Cecila Light"},
    {"material_name_area": "Steel Grey"},
    {"material_name_area": "White Ornamental"},
    {"material_name_area": "Absolute Black"},
    {"material_name_area": "Blue Pearl"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Giallo Napolean"},
    {"material_name_area": "Viscon White"},
    {"material_name_area": "Bayshore Sands"},
    {"material_name_area": "Iced Gray"},
    {"material_name_area": "Iced White"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Black Galaxy"},
    {"material_name_area": "Colonial Gold"},
    {"material_name_area": "Royal Jade"},
    {"material_name_area": "White Ice"},
    {"material_name_area": "Alpine"},
    {"material_name_area": "Carrara Marmi"},
    {"material_name_area": "Fossil Grey"},
    {"material_name_area": "Fossil Grey Honed"},
    {"material_name_area": "Fossil Taupe"},
    {"material_name_area": "Pebble Rock"},
    {"material_name_area": "Snow White"},
    {"material_name_area": "Sparkling Black"},
    {"material_name_area": "Sparkling White"},
    {"material_name_area": "Stellar Grey"},
    {"material_name_area": "African Rainbow"},
    {"material_name_area": "Alaska White"},
    {"material_name_area": "Snowfall"},
    {"material_name_area": "White Spring"},
    {"material_name_area": "Calacatta Classique"},
    {"material_name_area": "Calacatta Vicenza"},
    {"material_name_area": "Carrara Grigio"},
    {"material_name_area": "Mont Clair White"},
    {"material_name_area": "Romano White"},
    {"material_name_area": "Sahara Beige"}
  ],
  "NVR- Ryan Homes": [
    {"material_name_area": "Calacatta Classique"},
    {"material_name_area": "Carrara Marmi"},
    {"material_name_area": "Carrara Mist"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Frost White"},
    {"material_name_area": "Iced White"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "New Caledonia"},
    {"material_name_area": "Shell White"}
  ],
  "Pegasus": [
    {"material_name_area": "Luna Pearl"}
  ],
  "POWERS HOMES": [
    {"material_name_area": "Absolute Black"},
    {"material_name_area": "Artic White"},
    {"material_name_area": "Azul Platino"},
    {"material_name_area": "Bianco Primata"},
    {"material_name_area": "Black Galaxy"},
    {"material_name_area": "Blue Pearl GT"},
    {"material_name_area": "Calacatta Classique"},
    {"material_name_area": "Carrara Marmi"},
    {"material_name_area": "Carrara Mist"},
    {"material_name_area": "Carrara Morro"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Dallas White"},
    {"material_name_area": "Desert Bloom"},
    {"material_name_area": "Frost White"},
    {"material_name_area": "Iced White"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Moon White"},
    {"material_name_area": "New Caledonia 3cm Polished"},
    {"material_name_area": "New Venetian Gold"},
    {"material_name_area": "Royal Jade"},
    {"material_name_area": "Sparkling White"},
    {"material_name_area": "Tan Brown"},
    {"material_name_area": "Toasted Almond"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "Viscon White"}
  ],
  "Procopio Homes": [
    {"material_name_area": "ALPINA WHITE"},
    {"material_name_area": "ALTAIR 15"},
    {"material_name_area": "ASPEN CALACATTA CL"},
    {"material_name_area": "BLACK PREMIUM"},
    {"material_name_area": "BLANCO MAPLE"},
    {"material_name_area": "BLUE PEARL"},
    {"material_name_area": "COLONIAL WHITE"},
    {"material_name_area": "CORAL CLAY"},
    {"material_name_area": "CUSTOMER SELECTED AT WAREHOUSE - Level 4"},
    {"material_name_area": "CUSTOMER SELECTED AT WAREHOUSE - Level 5"},
    {"material_name_area": "GIALLO VENEZIANO"},
    {"material_name_area": "GREY EXPO"},
    {"material_name_area": "IRON BARK"},
    {"material_name_area": "LAGOON"},
    {"material_name_area": "LUNA PEARL"},
    {"material_name_area": "LYRA"},
    {"material_name_area": "MARENGO"},
    {"material_name_area": "MOON WHITE"},
    {"material_name_area": "NEW CALEDONIA"},
    {"material_name_area": "NEW VENETIAN GOLD"},
    {"material_name_area": "ROYAL JADE"},
    {"material_name_area": "SANTA CECILIA LIGHT"},
    {"material_name_area": "SAPPHIRE BLUE"},
    {"material_name_area": "SIENNA RIDGE"},
    {"material_name_area": "STEEL GREY"},
    {"material_name_area": "STELLAR SNOW"},
    {"material_name_area": "UBATUBA"},
    {"material_name_area": "VISCON WHITE"},
    {"material_name_area": "VOLGA BLUE"},
    {"material_name_area": "WHITE STORM"},
    {"material_name_area": "WHITE ZEUS"}
  ],
  "Pulte MADC": [
    {"material_name_area": "Absolute Black"},
    {"material_name_area": "Arctic White Qz"},
    {"material_name_area": "Babylon Gray Concrete Qz"},
    {"material_name_area": "Bayshore Sand Qz"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Black Galaxy"},
    {"material_name_area": "Blue Pearl"},
    {"material_name_area": "Calacatta Vicenza Qz"},
    {"material_name_area": "Carrara Marmi Qz"},
    {"material_name_area": "Colonial White 3cm Polished"},
    {"material_name_area": "Crema Caramel 3cm Polished"},
    {"material_name_area": "Dallas White"},
    {"material_name_area": "Desert Bloom Qz"},
    {"material_name_area": "Fossil Grey Qz"},
    {"material_name_area": "Frost White Qz"},
    {"material_name_area": "Giallo Ornamental"},
    {"material_name_area": "Grey Lagoon Qz"},
    {"material_name_area": "Iced White Qz"},
    {"material_name_area": "Landscape - A 3cm"},
    {"material_name_area": "Luna Pearl 3cm Polished"},
    {"material_name_area": "Meridian Grey Qz"},
    {"material_name_area": "Montclair White 3cm"},
    {"material_name_area": "New Caledonia"},
    {"material_name_area": "Pearl Jasmine"},
    {"material_name_area": "Salinas White Qz"},
    {"material_name_area": "Santa Cecilia Light"},
    {"material_name_area": "Snow White 3 cm"},
    {"material_name_area": "Steel Gray"},
    {"material_name_area": "Stellar Gray Qz"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "White (Luna) Pearl"},
    {"material_name_area": "Montclair White"},
    {"material_name_area": "Andromeda White 3cm"},
    {"material_name_area": "Toasted Almond 3cm"}
  ],
  "Pulte NEC": [
    {"material_name_area": "Andromeda White"},
    {"material_name_area": "Artic White"},
    {"material_name_area": "Azul Platino"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Bianco Primata"},
    {"material_name_area": "Black Premium"},
    {"material_name_area": "Blanco Arabescato"},
    {"material_name_area": "Calacatta Alto"},
    {"material_name_area": "Calacatta Classique"},
    {"material_name_area": "Carrara Marmi"},
    {"material_name_area": "Carrara Mist"},
    {"material_name_area": "Cashmere Carrara"},
    {"material_name_area": "Coarse Carrara 3cm"},
    {"material_name_area": "Colonial Gold"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Concerto (HD Concerto) 3cm"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Desert Bloom"},
    {"material_name_area": "Fairy White"},
    {"material_name_area": "Fossil Gray"},
    {"material_name_area": "Giallo Napolean"},
    {"material_name_area": "Gray Lagoon"},
    {"material_name_area": "Iced White"},
    {"material_name_area": "Moonlight White (Moon)"},
    {"material_name_area": "Pebble Rock"},
    {"material_name_area": "Peppercorn White"},
    {"material_name_area": "Pure White (aka Super White) 2cm"},
    {"material_name_area": "Pure White (aka Super White) 3cm"},
    {"material_name_area": "Salinas White"},
    {"material_name_area": "Sapphire Blue"},
    {"material_name_area": "Snow White"},
    {"material_name_area": "Soapstone Metropolis"},
    {"material_name_area": "Sparkling Black"},
    {"material_name_area": "Sparkling White"},
    {"material_name_area": "Toasted Almond"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "White Pearl (Luna)"},
    {"material_name_area": "Montclair White"},
    {"material_name_area": "SANTA CECILIA LIGHT (LC) 3cm"},
    {"material_name_area": "Alpine"},
    {"material_name_area": "Alpine"},
    {"material_name_area": "Pearl Gray"},
    {"material_name_area": "Montclair White 3cm"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Stellar Gray (HD) 3cm"},
    {"material_name_area": "Peacock Green 3cm Polished"},
    {"material_name_area": "ABSOLUTE BLACK"},
    {"material_name_area": "Baltic Brown 3cm Polished"}
  ],
  "Rachuba Group": [
    {"material_name_area": "African Rainbow"},
    {"material_name_area": "Alpina White"},
    {"material_name_area": "Altair 15"},
    {"material_name_area": "Aspen Calacatta Class."},
    {"material_name_area": "Bainbrook Brown"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Black Galaxy"},
    {"material_name_area": "Blanco Maple"},
    {"material_name_area": "Blue Pearl"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Coral Clay"},
    {"material_name_area": "Giallo Napolean"},
    {"material_name_area": "Grey Expo"},
    {"material_name_area": "Ironbark"},
    {"material_name_area": "Lagoon"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Lyra"},
    {"material_name_area": "Marengo"},
    {"material_name_area": "New Caledonia"},
    {"material_name_area": "Royal Jade"},
    {"material_name_area": "Santa Cecilia Light"},
    {"material_name_area": "Sapphire Brown"},
    {"material_name_area": "Sienna Ridge"},
    {"material_name_area": "Steel Gray"},
    {"material_name_area": "Stellar Snow"},
    {"material_name_area": "Sylvestre Gray"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "Viscon White"},
    {"material_name_area": "White Ice"},
    {"material_name_area": "White Springs"},
    {"material_name_area": "White Storm"}
  ],
  "Stanley Martin": [
    {"material_name_area": "Absolute Black"},
    {"material_name_area": "Alaska White"},
    {"material_name_area": "Alpine"},
    {"material_name_area": "Artic White"},
    {"material_name_area": "Ash Gray"},
    {"material_name_area": "Babylon Gray"},
    {"material_name_area": "Babylon Gray Concrete"},
    {"material_name_area": "Bayshore Sand"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Bianco San Francisco"},
    {"material_name_area": "Black Pearl Leathered"},
    {"material_name_area": "Calacatta Vicenza"},
    {"material_name_area": "Carrara Caldia"},
    {"material_name_area": "Carrara Grigio"},
    {"material_name_area": "Carrara Marmi"},
    {"material_name_area": "Concerto"},
    {"material_name_area": "Delicatus White"},
    {"material_name_area": "Fantasy Brown Marble"},
    {"material_name_area": "Frost White"},
    {"material_name_area": "Giallo Ornamental"},
    {"material_name_area": "Iced White"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Meridian Gray"},
    {"material_name_area": "New Caledonia"},
    {"material_name_area": "Pebble Rock"},
    {"material_name_area": "Peppercorn White"},
    {"material_name_area": "Rosa Beta"},
    {"material_name_area": "Shadow Gray"},
    {"material_name_area": "Snow White"},
    {"material_name_area": "St Cecilia Light"},
    {"material_name_area": "Steel Grey"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "White Springs"}
  ],
  "Triumph": [
    {"material_name_area": "Absolute Black"},
    {"material_name_area": "African Rainbow"},
    {"material_name_area": "Arctic White"},
    {"material_name_area": "Azul Platino"},
    {"material_name_area": "Bianco Antico"},
    {"material_name_area": "Bianco Primata"},
    {"material_name_area": "Black Galaxy"},
    {"material_name_area": "Blanca Arabescato"},
    {"material_name_area": "Blue Pearl"},
    {"material_name_area": "Calacatta Alto"},
    {"material_name_area": "Calacatta Classique"},
    {"material_name_area": "Calacatta Vicenza"},
    {"material_name_area": "Carrara Grigio"},
    {"material_name_area": "Carrara Marmi"},
    {"material_name_area": "Carrara Mist"},
    {"material_name_area": "Colonial White"},
    {"material_name_area": "Concerto"},
    {"material_name_area": "Crema Caramel"},
    {"material_name_area": "Emerald Pearl"},
    {"material_name_area": "Fantasy Brown"},
    {"material_name_area": "Fossil Gray"},
    {"material_name_area": "Gray Lagoon"},
    {"material_name_area": "Iced White"},
    {"material_name_area": "Luna Pearl"},
    {"material_name_area": "Mont Clair White"},
    {"material_name_area": "New Venetian Gold"},
    {"material_name_area": "Pebble Rock"},
    {"material_name_area": "Peppercorn White"},
    {"material_name_area": "Royal Jade"},
    {"material_name_area": "Sahara Beige"},
    {"material_name_area": "Snow White"},
    {"material_name_area": "Soapstone Metropolis"},
    {"material_name_area": "Sparkling Black"},
    {"material_name_area": "Sparkling White"},
    {"material_name_area": "Toasted Almond"},
    {"material_name_area": "Ubatuba"},
    {"material_name_area": "Viscon White"},
    {"material_name_area": "White Ice"},
    {"material_name_area": "White Ornamental"}
  ]

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculation-report-app';

  //Dropdowns
  job_status = [
    {'job_status': 'Complete'}, 
    {'job_status': 'Canceled'}, 
    {'job_status': 'Incompleted and Re-scheduled'},
    {'job_status': 'Incomplete (CSR Action Required)'},
    {'job_status': 'On Hold Missing Information'},
    {'job_status': 'Customer Confirmed'}, 
    {'job_status': 'Estimate'},
    {'job_status': 'Service'}  
  ];

  customer_types = [
    {'customer_type': 'HD'},
    {'customer_type': 'Builder'},
    {'customer_type': 'COMMERCIAL GC'},
    {'customer_type': 'COMMERCIAL Millwork'},
    {'customer_type': 'Contractor HOUSE'},
    {'customer_type': 'Contractor MD Showroom'},
    {'customer_type': 'Kitchen & Bath House'},
    {'customer_type': 'Kitchen & Bath MD Showroom'},
    {'customer_type': 'Residential'},
  ]

  material_options = [
    {'material_name': 1},
    {'material_name': 2},
    {'material_name': 3},
    {'material_name': 4},
    {'material_name': 5},
    {'material_name': 6},
  ]

  area_options = [
    {'area_option': 'Bar Top/ Wet Bar'},
    {'area_option': 'BILLABLE Rework Top 1 - sink cutout'},
    {'area_option': "Butler's"},
    {'area_option': 'Coffee Bar'},
    {'area_option': 'Copy/ Print'},
    {'area_option': 'Drop Zone'},
    {'area_option': 'FHBS'},
    {'area_option': 'HovHub'},
    {'area_option': 'Kitchen'},
    {'area_option': 'Kitchen Perimeter'},
    {'area_option': 'Kitchen (Perimeter & Island) - Gourmet'},
    {'area_option': 'Kitchen w/o Cooktop Island'},
    {'area_option': 'Kitchen Island'},
    {'area_option': 'Laundry'},
    {'area_option': 'Leasing Office'},
    {'area_option': 'Morning Room'},
    {'area_option': 'OFFICE'},
    {'area_option': 'Pantry/ Coffee'},
    {'area_option': 'Phase 1'},
    {'area_option': 'Phase 10'},
    {'area_option': 'Phase 11'},
    {'area_option': 'Phase 12'},
    {'area_option': 'Phase 13'},
    {'area_option': 'Phase 14'},
    {'area_option': 'Phase 15'},
    {'area_option': 'Phase 16'},
    {'area_option': 'Phase 17'},
    {'area_option': 'Phase 18'},
    {'area_option': 'Phase 19'},
    {'area_option': 'Phase 19A'},
    {'area_option': 'Phase 19B'},
    {'area_option': 'Phase 2'},
    {'area_option': 'Phase 20'},
    {'area_option': 'Phase 3'},
    {'area_option': 'Phase 4'},
    {'area_option': 'Phase 5'},
    {'area_option': 'Phase 6'},
    {'area_option': 'Phase 7'},
    {'area_option': 'Phase 8'},
    {'area_option': 'Phase 9'},
    {'area_option': 'Pocket Office'},
    {'area_option': 'PPC'},
    {'area_option': 'Reception /Concierge Desk'},
    {'area_option': 'Remake'},
    {'area_option': 'REMAKE PERIMETER'},
    {'area_option': 'Replacement'},
    {'area_option': 'Replacement Kitchen'},
    {'area_option': 'Rework'},
    {'area_option': 'Shower seat'},
    {'area_option': 'Teller Top'},
    {'area_option': 'Valet'},
    {'area_option': 'Vanity'},
    {'area_option': 'Window seat'},
    {'area_option': 'Wine & Bar'},
  ]

  

  columnDefs = [
    { headerName: 'id', field: 'id', pinned: 'left', hide: true, headerClass: 'color-header-1' },
    { headerName: 'Date', field: 'date', pinned: 'left', headerClass: 'color-header-1', cellEditor: 'datePicker' },
    { headerName: 'Job Number', field: 'job_number', pinned: 'left', headerClass: 'color-header-1',
      cellEditorSelector: function(params: any) {
        return {
          component: 'numericCellEditor'
        };
      }},
    { headerName: 'Job Status', field: 'job_status', pinned: 'left', headerClass: 'color-header-1',
      cellEditor: 'selectCellRenderer',
      cellEditorParams: {
        'propertyRendered' : 'job_status',
        'rowData': this.job_status,
        'columnDefs' : [{headerName: 'Job Status', field: 'job_status'}]
      }
    },

    { headerName: 'Customer Type', field: 'customer_type', headerClass: 'color-header-1',
      cellEditor: 'selectCellRenderer',
      cellEditorParams: {
        'propertyRendered' : 'customer_type',
        'rowData': this.customer_types,
        'columnDefs' : [{headerName: 'Customer Type', field: 'customer_type'}]
      }
    },
    { headerName: 'Customer(Builder Name)', field: 'customer_builder_name', headerClass: 'color-header-1',
      cellEditorSelector: function(param) {
        if(param.data.customer_type != 'Residential') {
          return {
            component: 'selectCellRenderer'
          };
        } else {
          return {
            component: ''
          };
        }
      },

      cellEditorParams: function(param) {
        let rowData;
        if(param.data.customer_type == 'HD') {
          rowData = [
            {'customer_builder_name': 'HD'}
          ]
        }

        if(param.data.customer_type == 'Builder') {
          rowData = [
            {'customer_builder_name': 'Beazer Homes MD'},
            {'customer_builder_name': 'Beazer Homes VA'},
            {'customer_builder_name': 'Caruso MD'},
            {'customer_builder_name': 'Creative Homes'},
            {'customer_builder_name': 'Dan Ryan DE'},
            {'customer_builder_name': 'Dan Ryan Metro'},
            {'customer_builder_name': 'DELUCA HOMES'},
            {'customer_builder_name': 'DMR - PDR'},
            {'customer_builder_name': 'Dr Horton DE'},
            {'customer_builder_name': 'Floormax'},
            {'customer_builder_name': 'Gemcraft'},
            {'customer_builder_name': 'Grand Villa Homes'},
            {'customer_builder_name': 'Howmar Homes'},
            {'customer_builder_name': 'JP ORLEANS'},
            {'customer_builder_name': 'KHOV HOMES'},
            {'customer_builder_name': 'Kettler Forlines'},
            {'customer_builder_name': 'Koch Homes'},
            {'customer_builder_name': 'Lennar'},
            {'customer_builder_name': 'New Day Construction'},
            {'customer_builder_name': 'NVR- Ryan Homes'},
            {'customer_builder_name': 'Pegasus'},
            {'customer_builder_name': 'POWERS HOMES'},
            {'customer_builder_name': 'Procopio Homes'},
            {'customer_builder_name': 'Pulte MADC'},
            {'customer_builder_name': 'Pulte NEC'},
            {'customer_builder_name': 'Rachuba Group'},
            {'customer_builder_name': 'Stanley Martin'},
            {'customer_builder_name': 'Triumph'}
          ]
        }

        if(param.data.customer_type == 'COMMERCIAL GC') {
          rowData = [
            {'customer_builder_name': 'ADI Construction Inc.- AIA'},
            {'customer_builder_name': 'AMERICAN REMODELING CORPORATION'},
            {'customer_builder_name': 'Aslin Beer Company'},
            {'customer_builder_name': 'Balfour Beatty Construction-AIA'},
            {'customer_builder_name': 'Brown Contracting Co. Inc.'},
            {'customer_builder_name': 'Camson Construction Inc'},
            {'customer_builder_name': 'CDCI Inc'},
            {'customer_builder_name': 'CJW Contractors, Inc.'},
            {'customer_builder_name': 'Clune Construction Co.-AIA'},
            {'customer_builder_name': 'Constantine Commercial Construction'},
            {'customer_builder_name': 'Costello Construction-AIA'},
            {'customer_builder_name': 'Cutlass Contracting, LLC'},
            {'customer_builder_name': 'Doyle Construction Company-AIA'},
            {'customer_builder_name': 'DPR Construction-AIA'},
            {'customer_builder_name': 'Gilbane Building Company-AIA'},
            {'customer_builder_name': 'Grunley Construction Co. Inc.-AIA'},
            {'customer_builder_name': 'HBW Construction'},
            {'customer_builder_name': 'HITT Contracting, Inc.-AIA'},
            {'customer_builder_name': 'Hubert Construction-AIA'},
            {'customer_builder_name': 'James G. Davis Construction-AIA'},
            {'customer_builder_name': 'K3 Construction Group'},
            {'customer_builder_name': 'Kinsley Construction Inc.'},
            {'customer_builder_name': 'Legacy Builders & Construction'},
            {'customer_builder_name': 'Lend Lease (US) Construction Inc.-AIA'},
            {'customer_builder_name': 'M2 Construction LLC-AIA'},
            {'customer_builder_name': 'Manhattan Construction Company-AIA'},
            {'customer_builder_name': 'May Construction Group-AIA'},
            {'customer_builder_name': 'McCULLOUGH CONSTRUCTION, LLC'},
            {'customer_builder_name': 'Oakland Construction'},
            {'customer_builder_name': 'Pegasus'},
            {'customer_builder_name': 'Plan-Coudon, LLC-AIA'},
            {'customer_builder_name': 'Sordoni Construction Co.-AIA'},
            {'customer_builder_name': 'The Korth Companies, Inc-AIA'},
            {'customer_builder_name': 'Trinity Group Construction-AIA'},
            {'customer_builder_name': 'Walsh Construction Company II, LLC-AIA'},
            {'customer_builder_name': 'WHITING-TURNER CONTRACTING, CO.-AIA'},
            {'customer_builder_name': 'Wilkie Sanderson'},
            {'customer_builder_name': 'Wohlsen Construction'},
            {'customer_builder_name': 'Wohlsen Construction:Essilor Optical'},
            {'customer_builder_name': 'Wohlsen Construction:Solera Reserve'},
            {'customer_builder_name': 'WCS CONSTRUCTION-AIA'},
          ]
        }

        if(param.data.customer_type == 'COMMERCIAL Millwork') {
          rowData = [
            {'customer_builder_name': '777 Millwork & Cabinet LLC-AIA'},
            {'customer_builder_name': 'Blue Mountain Woodworks, Inc'},
            {'customer_builder_name': "Clark's Lumber & Millwork"},
            {'customer_builder_name': 'Gaithersburg Cabinetry & Millwork Co Inc'},
            {'customer_builder_name': 'Hayford Builders'},
            {'customer_builder_name': 'IBS Millwork Corp.'},
            {'customer_builder_name': 'ISEC, Inc-AIA'},
            {'customer_builder_name': 'Mortensen Woodwork-AIA'},
            {'customer_builder_name': 'New Era Custom Design & Cabinet'},
            {'customer_builder_name': 'Potomac Architectural Millwork Corp.'},
            {'customer_builder_name': 'Washington Woodworking CO'}
          ]
        }

        if(param.data.customer_type == 'Contractor HOUSE') {
          rowData = [
            {'customer_builder_name': 'LAND-RON Inc.'},
            {'customer_builder_name': 'Kalmia Construction Company, Inc'},
            {'customer_builder_name': 'JRK Property Holdings - Inigo Crossing'},
            {'customer_builder_name': 'Josh Yoltay'},
            {'customer_builder_name': 'Trinity Group Construction'},
            {'customer_builder_name': 'Artelye: Beltsville'},
            {'customer_builder_name': 'Crimco'},
            {'customer_builder_name': 'WDL Carpentry - COD'},
            {'customer_builder_name': 'JRK Property Holdings - Belmont Station'},
            {'customer_builder_name': 'Brown Contracting Co. Inc.'}
          ]
        }

        if(param.data.customer_type == 'Contractor MD Showroom') {
          rowData = [
            {'customer_builder_name': 'Edgewood Builders, Inc.'},
            {'customer_builder_name': 'Marsoni Home Restoration L.L.C'},
            {'customer_builder_name': 'Rev, Inc.'},
            {'customer_builder_name': 'cre8 Cabinetry Designs'},
            {'customer_builder_name': 'General Repair Services, Inc. - Deposit Required'},
            {'customer_builder_name': 'Renewal Homes - Gene Gamble'},
            {'customer_builder_name': 'Scott The Contractor'},
            {'customer_builder_name': 'Skafte Development Group LLC'},
            {'customer_builder_name': 'dwt Interiors'},
            {'customer_builder_name': 'D.A. McNeely Contracting'},
            {'customer_builder_name': 'Mark Amos Contracting'},
            {'customer_builder_name': "Dusan's Home Improvement LLC"},
            {'customer_builder_name': 'KC Contractors, LLC'},
            {'customer_builder_name': 'Rinker Renovations'},
            {'customer_builder_name': 'Lamy Enterprises'},
            {'customer_builder_name': 'R O Hutchinson LLC'},
            {'customer_builder_name': 'Tropea Restoration, Inc'},
            {'customer_builder_name': 'CRP Contracting, LLC'},
            {'customer_builder_name': 'Allen Sexton - Deposit Required'}
          ]
        }

        if(param.data.customer_type == 'Kitchen & Bath HOUSE') {
          rowData = [
            {'customer_builder_name': 'About Kitchens and Baths'}
          ]
        }

        if(param.data.customer_type == 'Kitchen & Bath MD Showroom') {
          rowData = [
            {'customer_builder_name': 'Phil Lazas Contracting LLC'}
          ]
        }

        if(param.data.customer_type == 'Contractor MD Showroom') {
          rowData = [
            {'customer_builder_name': 'AJ Home Improvement'}
          ]
        }

        if(param.data.customer_type == 'Contractor HOUSE') {
          rowData = [
            {'customer_builder_name': 'New Day Contracting Services'}
          ]
        }

        return {
          'propertyRendered' : 'customer_builder_name',
          'rowData': rowData,
          'columnDefs' : [{headerName: 'Customer(Builder Name)', field: 'customer_builder_name'}]
        }
      }
    },
    { headerName: 'Customer Job Area', field: 'customer_job_area', headerClass: 'color-header-1',
      cellEditorSelector: function(param) {
        if(param.data.customer_type == 'Builder') {
          return {
            component: 'selectCellRenderer'
          };
        } else {
          return {
            component: ''
          };
        }
      },
      cellEditorParams: function(param) {
        let rowData;
        if(param.data.customer_builder_name == 'Beazer Homes MD') {
          rowData = [
            {'customer_job_area': 'Potomac Shores Villas'},
            {'customer_job_area': 'Riverwalk 24 & 20/22 TH (RW)'},
            {'customer_job_area': 'Parkside TH (PST)'},
            {'customer_job_area': 'Main Office'},
            {'customer_job_area': 'Riverwalk Condos'},
            {'customer_job_area': 'River Hill Estates'},
            {'customer_job_area': 'Tuscarora Creek'},
            {'customer_job_area': 'River Hill Estates (RHS)'},
            {'customer_job_area': 'The Ridge (TR)'},
            {'customer_job_area': 'Ballard Green Condos (BGC)'},
            {'customer_job_area': 'Parkside Condos 2/2 (PSC)'},
          ]
        }

        if(param.data.customer_builder_name == 'Beazer Homes VA') {
          rowData = [
            {'customer_job_area': 'Potomac Shores Villas (PTSV)'},
            {'customer_job_area': 'Potomac Shores TH (PTST)'},
            {'customer_job_area': 'Greens at Willowsford (GW)'},
            {'customer_job_area': 'Hunter at Haymarket'},
            {'customer_job_area': 'Potomac Shores'},
            {'customer_job_area': 'Grove North at Willowsford - 15A (GNW)'}
          ]
        }

        if(param.data.customer_builder_name == 'Caruso MD') {
          rowData = [
            {'customer_job_area': 'Amblebrook (AB)'},
            {'customer_job_area': 'Archers Glen (AG)'},
            {'customer_job_area': 'Balmoral'},
            {'customer_job_area': 'Collingbrook Estates (CE)'},
            {'customer_job_area': 'Custom Homes on Your Lot North (CYLN)'},
            {'customer_job_area': 'Custom Homes on Your Lot South (CYLS)'},
            {'customer_job_area': 'Duvall Woods (DW)'},
            {'customer_job_area': 'Hunters Mill (HM)'},
            {'customer_job_area': 'Limekiln Farm (LF)'},
            {'customer_job_area': 'North Calvert Woods'},
            {'customer_job_area': 'Oakmont Estates'},
            {'customer_job_area': 'Seneca Creek (SC)'},
            {'customer_job_area': 'Shelleys Fields'},
            {'customer_job_area': 'Signature Club (SC)'},
            {'customer_job_area': 'Southern Hills (SH)'},
            {'customer_job_area': 'Windsor Manor (WM)'},
            {'customer_job_area': 'Woodburn Estates (WE)'},
            {'customer_job_area': 'Main Office MO'}
          ]
        }

        if(param.data.customer_builder_name == 'Creative Homes') {
          rowData = [
            {'customer_job_area': 'Erickson Residence'},
            {'customer_job_area': 'Academy Square'}
          ]
        }

        if(param.data.customer_builder_name == 'Dan Ryan Metro') {
          rowData = [
            {'customer_job_area': 'Hawthorne'},
            {'customer_job_area': 'Longley Green (4245 - LG)'},
            {'customer_job_area': 'Marshall Groves Estates (4227-MGE)'},
            {'customer_job_area': 'Odenton Station TH (4232-OST)'},
            {'customer_job_area': 'Parkside TH (4212 - PT)'},
            {'customer_job_area': 'Spring Bank (4230 - SB)'},
            {'customer_job_area': 'Timber Ridge (4254 - TR)'},
            {'customer_job_area': 'Tuscarora Creek SF (4250 - TCS)'},
            {'customer_job_area': 'Tuscarora Creek TH (4249 - TCT)'},
            {'customer_job_area': 'Villages of Urbana (4244 - VOU)'},
            {'customer_job_area': 'Vista Gardens West'},
            {'customer_job_area': 'Westridge'},
            {'customer_job_area': 'Glenn Dale SF (4240 - GDS)'}
          ]
        }

        if(param.data.customer_builder_name == 'Dr Horton DE') {
          rowData = [
            {'customer_job_area': 'Beach Club North SF'},
            {'customer_job_area': 'Beach Club North TH'},
            {'customer_job_area': 'Bergmont Woods (BW)'},
            {'customer_job_area': 'Bowers Landing (BL)'},
            {'customer_job_area': 'Country Grove (CG)'},
            {'customer_job_area': 'Forty Nine Pines (49)'},
            {'customer_job_area': 'DE Division HQ'},
            {'customer_job_area': 'Ocean Acres'},
            {'customer_job_area': 'Point Landing (PL)'},
            {'customer_job_area': 'Seacrest Pines'},
            {'customer_job_area': 'The Vines at Sandhill'},
            {'customer_job_area': 'West Shores at New Milford (WS)'},
            {'customer_job_area': 'Willowwood (WW)'},
            {'customer_job_area': 'Windstone'},
            {'customer_job_area': 'Woodfield Preserve (WP)'}
          ]
        }

        if(param.data.customer_builder_name == 'Gemcraft') {
          rowData = [
            {'customer_job_area': 'Briarcliff'},
            {'customer_job_area': 'Brimington Singles'},
            {'customer_job_area': 'Brook Pointe (BP)'},
            {'customer_job_area': 'Crosby Court'},
            {'customer_job_area': 'Cumberland Crossing (CC)'},
            {'customer_job_area': 'Garrison Falls'},
            {'customer_job_area': 'Grays Run Overlook (GR)'},
            {'customer_job_area': 'Harford Countty Offsites (GHI)'},
            {'customer_job_area': 'Long Boat Estates'},
            {'customer_job_area': 'Magnolia Landing'},
            {'customer_job_area': 'Main Office'},
            {'customer_job_area': 'Rolling Hills'},
            {'customer_job_area': 'South Stream'},
            {'customer_job_area': 'Tiller Estates'},
            {'customer_job_area': 'Walnut Hills'},
            {'customer_job_area': 'Winslett'},
            {'customer_job_area': 'Cecil County Offsites (CCO)'},
            {'customer_job_area': 'Sussex Place (SP)'}
          ]
        }

        if(param.data.customer_builder_name == 'HD') {
          rowData = [
            {'customer_job_area': '2562'},
            {'customer_job_area': '2558'},
            {'customer_job_area': '2509'},
            {'customer_job_area': '2503'},
            {'customer_job_area': '8550'},
            {'customer_job_area': '2501'},
            {'customer_job_area': '2571'},
            {'customer_job_area': '2579'},
            {'customer_job_area': '2589'},
            {'customer_job_area': '2582'},
            {'customer_job_area': '2551'},
            {'customer_job_area': '6945'},
            {'customer_job_area': '2505'},
            {'customer_job_area': '2575'},
            {'customer_job_area': '2566'},
            {'customer_job_area': '2751'},
            {'customer_job_area': '2759'},
            {'customer_job_area': '2557'},
            {'customer_job_area': '2550'},
            {'customer_job_area': '2507'},
            {'customer_job_area': '2584'},
            {'customer_job_area': '8548'},
            {'customer_job_area': 'Robert Adams'},
            {'customer_job_area': '2509 Bethesda'},
            {'customer_job_area': '8550 Upper Marlboro'},
            {'customer_job_area': '2566 Ellicott City'}
          ]
        }

        if(param.data.customer_builder_name == 'Howmar Homes') {
          rowData = [
            {'customer_job_area': 'L1507 Lowell Court'}
          ]
        }

        if(param.data.customer_builder_name == 'JP ORLEANS') {
          rowData = [
            {'customer_job_area': 'Spring Oak'},
          ]
        }

        if(param.data.customer_builder_name == 'Kettler Forlines') {
          rowData = [
            {'customer_job_area': 'Kettler Forlines Homes (KFH)'},
          ]
        }

        if(param.data.customer_builder_name == 'KHOV HOMES') {
          rowData = [
            {'customer_job_area': 'Hilltop at Cedar Grove'},
            {'customer_job_area': 'K.Hovnanian - Four Ponds (FP)'},
            {'customer_job_area': 'Residences at Columbia Park'},
            {'customer_job_area': 'Villages at Country View'}
          ]
        }

        if(param.data.customer_builder_name == 'Koch Homes') {
          rowData = [
            {'customer_job_area': "Gibson's Grant (GG)"}
          ]
        }

        if(param.data.customer_builder_name == 'Lennar') {
          rowData = [
            {'customer_job_area': 'Vicroty Square'},
            {'customer_job_area': 'Venue at Longview Farm (VLF)'},
            {'customer_job_area': 'NJ Home Office'},
            {'customer_job_area': 'Venue at Cobblestone Creek (VCC)'}
          ]
        }

        if(param.data.customer_builder_name == 'NVR- Ryan Homes') {
          rowData = [
            {'customer_job_area': 'Bells Hills Terrace (WAP-BT)'}
          ]
        }

        if(param.data.customer_builder_name == 'Pegasus') {
          rowData = [
            {'customer_job_area': 'Trails at Short Pump (TSP)'},
            {'customer_job_area': 'Villages at West Laurel (VWL)'}
          ]
        }

        if(param.data.customer_builder_name == 'POWERS HOMES') {
          rowData = [
            {'customer_job_area': 'Hopewell Point (HP)'}
          ]
        }

        if(param.data.customer_builder_name == 'Pulte MADC') {
          rowData = [
            {'customer_job_area': 'Celebrate VA Premiers III'},
            {'customer_job_area': 'Celebrate Classics III (2536)'},
            {'customer_job_area': "Glen Riddle Farm SF 40' (4334-GRS)"},
            {'customer_job_area': 'Heights at Main Street (3579)'},
            {'customer_job_area': 'Courts of Clarksburg (5539-CC)'},
            {'customer_job_area': 'Mid-Atlantic Division'}
          ]
        }

        if(param.data.customer_builder_name == 'Pulte NEC') {
          rowData = [
            {'customer_job_area': 'Crossings at Radburn'},
            {'customer_job_area': 'Del Webb at Florham Park Flats (6010)'},
            {'customer_job_area': 'Del Webb at Florham Park SIngles (6009)'},
            {'customer_job_area': 'Del Webb at Florham Park Towns (6012)'},
            {'customer_job_area': 'Enclave at Mountain Lakes (6728)'},
            {'customer_job_area': 'Gwynedd Park (7109)'},
            {'customer_job_area': 'Gwynedd Ridge (6432)'},
            {'customer_job_area': 'Heights at Main Street (3579)'},
            {'customer_job_area': 'Hunterdon Creekside Carriages (3276)'},
            {'customer_job_area': 'Hunterdon Creekside Manors (1678)'},
            {'customer_job_area': 'Livingston Square (1113)'},
            {'customer_job_area': 'Northeast Corridor Division'},
            {'customer_job_area': 'Reserve at North Caldwell (6397)'},
            {'customer_job_area': 'Valley Forge Greene'},
            {'customer_job_area': 'Whitehall Estates (6904)'}
          ]
        }

        if(param.data.customer_builder_name == 'Stanley Martin') {
          rowData = [
            {'customer_job_area': 'Marlboro Pointe (MP)'},
            {'customer_job_area': 'Marlboro Riding (MR)'}
          ]
        }

        if(param.data.customer_builder_name == 'AJ Home Improvement ') {
          rowData = [
            {'customer_job_area': 'Alvin Johnson'}
          ]
        }

        if(param.data.customer_builder_name == 'DELUCA HOMES') {
          rowData = [
            {'customer_job_area': 'Enclave at Providence (EP)'},
          ]
        }

        if(param.data.customer_builder_name == 'DMR - PDR') {
          rowData = [
            {'customer_job_area': 'Macallan Crossing (MC)'}
          ]
        }

        return {
          'propertyRendered' : 'customer_job_area',
          'rowData': rowData,
          'columnDefs' : [{headerName: 'Customer Job Area', field: 'customer_job_area'}]
        }
      }
    },
    { headerName: 'Material name', field: 'material_name', headerClass: 'color-header-1',
      cellEditor: 'selectCellRenderer',
      cellEditorParams: {
        'propertyRendered' : 'material_name',
        'rowData': this.material_options,
        'columnDefs' : [{headerName: 'Material name', field: 'material_name'}]
      }
    },

    { headerName: 'AREA 1', field: 'area_1', headerClass: 'color-header-2',
      cellEditor: 'selectCellRenderer',
      cellEditorParams: {
        'propertyRendered' : 'area_option',
        'rowData': this.area_options,
        'columnDefs' : [{headerName: 'AREA 1', field: 'area_option'}]
      } 
    },
    { headerName: 'Material Name Area 1', field: 'material_name_area_1', headerClass: 'color-header-2',
    cellEditor: 'selectCellRenderer',
    cellEditorParams: function(param) {
      return {
        'propertyRendered' : 'material_name_area',
        'rowData': material_names[param.data.customer_builder_name],
        'columnDefs' : [{headerName: 'Material Name', field: 'material_name_area'}]
      }
    }
  },
    { headerName: 'Material', field: 'material_1', headerClass: 'color-header-2' },
    { headerName: 'Brand', field: 'brand_1', headerClass: 'color-header-2' },
    { headerName: 'Level', field: 'level_1', headerClass: 'color-header-2' },
    { headerName: 'Price', field: 'price_1', headerClass: 'color-header-2' },

    { headerName: 'AREA 2', field: 'area_2', headerClass: 'color-header-3' },
    { headerName: 'Material Name Area', field: 'material_name_area_2', headerClass: 'color-header-3' },
    { headerName: 'Material', field: 'material_2', headerClass: 'color-header-3' },
    { headerName: 'Brand', field: 'brand_2', headerClass: 'color-header-3' },
    { headerName: 'Level', field: 'level_2', headerClass: 'color-header-3' },
    { headerName: 'Price', field: 'price_2', headerClass: 'color-header-3' },

    { headerName: 'Other Areas', field: 'area_other', headerClass: 'color-header-4' },
    { headerName: 'Material Name Areas', field: 'material_name_area_other', headerClass: 'color-header-4' },
    { headerName: 'Material', field: 'material_other', headerClass: 'color-header-4' },
    { headerName: 'Brand', field: 'brand_other', headerClass: 'color-header-4' },
    { headerName: 'Level', field: 'level_other', headerClass: 'color-header-4' },
    { headerName: 'Price', field: 'price_other', headerClass: 'color-header-4' },

    { headerName: 'Phases', field: 'phases', headerClass: 'color-header-5' },
    { headerName: 'Material Name Phases', field: 'material_name_phases', headerClass: 'color-header-5' },
    { headerName: 'Material', field: 'material_phases', headerClass: 'color-header-5' },
    { headerName: 'Brand', field: 'brand_phases', headerClass: 'color-header-5' },
    { headerName: 'Level', field: 'level_phases', headerClass: 'color-header-5' },
    { headerName: 'Price', field: 'price_phases', headerClass: 'color-header-5' },

    { headerName: 'Other Areas 2', field: 'area_other_2', headerClass: 'color-header-4' },
    { headerName: 'Material Name Areas 2', field: 'material_name_area_other_2', headerClass: 'color-header-4' },
    { headerName: 'Material', field: 'material_other_2', headerClass: 'color-header-4' },
    { headerName: 'Brand', field: 'brand_other_2', headerClass: 'color-header-4' },
    { headerName: 'Level', field: 'level_other_2', headerClass: 'color-header-4' },
    { headerName: 'Price', field: 'price_other_2', headerClass: 'color-header-4' },

    { headerName: 'Phases 2', field: 'phases_2', headerClass: 'color-header-5' },
    { headerName: 'Material Name Phases 2', field: 'material_name_phases_2', headerClass: 'color-header-5' },
    { headerName: 'Material', field: 'material_phases_2', headerClass: 'color-header-5' },
    { headerName: 'Brand', field: 'brand_phases_2', headerClass: 'color-header-5' },
    { headerName: 'Level', field: 'level_phases_2', headerClass: 'color-header-5' },
    { headerName: 'Price', field: 'price_phases_2', headerClass: 'color-header-5' },

    { headerName: 'STATE', field: 'state', headerClass: 'color-header-1' },
    { headerName: 'Out of State', field: 'oute_of_state', headerClass: 'color-header-1' },
    { headerName: 'Complete Job Pictures', field: 'complete_job_picture', headerClass: 'color-header-1' },
    { headerName: 'Installer', field: 'installer', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(Kitchen)', field: 'mw_cad_sqft_kitchen', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(Kitchen)', field: 'calculated_cad_sqft_kitchen', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(Kitchen)', field: 'mw_sold_sqft_kitchen', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(Kitchen)', field: 'calculated_sold_sqft_kitchen', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(Vanity)', field: 'mw_cad_sqft_vanity', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(Vanity)', field: 'calculated_cad_sqft_vanity', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(Vanity)', field: 'mw_sold_sqft_vanity', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(Vanity)', field: 'calculated_sold_sqft_vanity', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(Laundry)', field: 'mw_cad_sqft_laundry', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(Laundry)', field: 'calculated_cad_sqft_laundry', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(Laundry)', field: 'mw_sold_sqft_laundry', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(Laundry)', field: 'calculated_sold_sqft_laundry', headerClass: 'color-header-1' },

    { headerName: "MW CAD SQFT(Butler's)", field: 'mw_cad_sqft_butlers', headerClass: 'color-header-1' },
    { headerName: "Calculated CAD SQFT(Butler's)", field: 'calculated_cad_sqft_butlers', headerClass: 'color-header-1' },
    { headerName: "MW SOLD SQFT(Butler's)", field: 'mw_sold_sqft_butlers', headerClass: 'color-header-1' },
    { headerName: "Calculated SOLD SQFT(Butler's)", field: 'calculated_sold_sqft_butlers', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(PPC)', field: 'mw_cad_sqft_ppc', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(PPC)', field: 'calculated_cad_sqft_ppc', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(PPC)', field: 'mw_sold_sqft_ppc', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(PPC)', field: 'calculated_sold_sqft_ppc', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(Drop Zone)', field: 'mw_cad_sqft_drop_zone', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(Drop Zone)', field: 'calculated_cad_sqft_drop_zone', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(Drop Zone)', field: 'mw_sold_sqft_drop_zone', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(Drop Zone)', field: 'calculated_sold_sqft_drop_zone', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(BAR TOP/WET BAR)', field: 'mw_cad_sqft_btwb', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(BAR TOP/WET BAR)', field: 'calculated_cad_sqft_btwb', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(BAR TOP/WET BAR)', field: 'mw_sold_sqft_btwb', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(BAR TOP/WET BAR)', field: 'calculated_sold_sqft_btwb', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(FHBS)', field: 'mw_cad_sqft_fhbs', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(FHBS)', field: 'calculated_cad_sqft_fhbs', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(FHBS)', field: 'mw_sold_sqft_fhbs', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(FHBS)', field: 'calculated_sold_sqft_fhbs', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(Copy/Print)', field: 'mw_cad_sqft_copy_print', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(Copy/Print)', field: 'calculated_cad_sqft_copy_print', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(Copy/Print)', field: 'mw_sold_sqft_copy_print', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(Copy/Print)', field: 'calculated_sold_sqft_copy_print', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(Pantry/Coffee)', field: 'mw_cad_sqft_pantry_coffee', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(Pantry/Coffee)', field: 'calculated_cad_sqft_pantry_coffee', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(Pantry/Coffee)', field: 'mw_sold_sqft_pantry_coffee', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(Pantry/Coffee)', field: 'calculated_sold_sqft_pantry_coffee', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(Phase 19A)', field: 'mw_cad_sqft_phase_19a', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(Phase 19A)', field: 'calculated_cad_sqft_phase_19a', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(Phase 19A)', field: 'mw_sold_sqft_phase_19a', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(Phase 19A)', field: 'calculated_sold_sqft_phase_19a', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(Phase 19B)', field: 'mw_cad_sqft_phase_19b', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(Phase 19B)', field: 'calculated_cad_sqft_phase_19b', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(Phase 19B)', field: 'mw_sold_sqft_phase_19b', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(Phase 19B)', field: 'calculated_sold_sqft_phase_19b', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(Remake)', field: 'mw_cad_sqft_remake', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(Remake)', field: 'calculated_cad_sqft_remake', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(Remake)', field: 'mw_sold_sqft_remake', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(Remake)', field: 'calculated_sold_sqft_remake', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(Rework)', field: 'mw_cad_sqft_rework', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(Rework)', field: 'calculated_cad_sqft_rework', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(Rework)', field: 'mw_sold_sqft_rework', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(Rework)', field: 'calculated_sold_sqft_rework', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(Valet)', field: 'mw_cad_sqft_valet', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(Valet)', field: 'calculated_cad_sqft_valet', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(Valet)', field: 'mw_sold_sqft_valet', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(Valet)', field: 'calculated_sold_sqft_valet', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(Morning Room)', field: 'mw_cad_sqft_morning_room', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(Morning Room)', field: 'calculated_cad_sqft_morning_room', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(Morning Room)', field: 'mw_sold_sqft_morning_room', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(Morning Room)', field: 'calculated_sold_sqft_morning_room', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(Wine & Bar)', field: 'mw_cad_sqft_wine_bar', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(Wine & Bar)', field: 'calculated_cad_sqft_wine_bar', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(Wine & Bar)', field: 'mw_sold_sqft_wine_bar', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(Wine & Bar)', field: 'calculated_sold_sqft_wine_bar', headerClass: 'color-header-1' },

    { headerName: 'MW CAD SQFT(Pocket Office)', field: 'mw_cad_sqft_pocket_office', headerClass: 'color-header-1' },
    { headerName: 'Calculated CAD SQFT(Pocket Office)', field: 'calculated_cad_sqft_pocket_office', headerClass: 'color-header-1' },
    { headerName: 'MW SOLD SQFT(Pocket Office)', field: 'mw_sold_sqft_pocket_office', headerClass: 'color-header-1' },
    { headerName: 'Calculated SOLD SQFT(Pocket Office)', field: 'calculated_sold_sqft_pocket_office', headerClass: 'color-header-1' },

    { headerName: 'Notes', field: 'notes', headerClass: 'color-header-6' },
    { headerName: 'Legend', field: 'legend', headerClass: 'color-header-1' }

  ];

  defaultColDef = {
    // flex: 1,
    minWidth: 50,
    editable: true,
    resizable: true
  };

  rowData = [
    {
      id: 1,
      date: '08/12/2020',
      job_number: 73105,
      job_status: 'Completed'
    }
  ];

  components = { 
    datePicker: getDatePicker(),
    numericCellEditor: NumericCellEditor
  };

  frameworkComponents = { 
    selectCellRenderer: AutoCompleteComponent 
  };

  constructor(private comparisonService: ComparisonService) {

  }

  ngOnInit() {
    this.comparisonService.getAll().subscribe((res: any) => {
      console.log(res)
      this.rowData = res['comparisons'];
    })
  }
}

function getCharCodeFromEvent(event: any) {
  event = event || window.event;
  return (typeof event.which == "undefined") ? event.keyCode : event.which;
}

function isCharNumeric(charStr: any) {
  return !!/\d/.test(charStr);
}

function isKeyPressedNumeric(event: any) {
  var charCode = getCharCodeFromEvent(event);
  var charStr = String.fromCharCode(charCode);
  return isCharNumeric(charStr);
}

function NumericCellEditor() {
}

// gets called once before the renderer is used
NumericCellEditor.prototype.init = function(params: any) {
    // create the cell
    this.eInput = document.createElement('input');

    if (isCharNumeric(params.charPress)) {
        this.eInput.value = params.charPress;
    } else {
        if (params.value !== undefined && params.value !== null) {
            this.eInput.value = params.value;
        }
    }

    var that = this;
    this.eInput.addEventListener('keypress', function(event: any) {
        if (!isKeyPressedNumeric(event)) {
            that.eInput.focus();
            if (event.preventDefault) event.preventDefault();
        } else if (that.isKeyPressedNavigation(event)) {
            event.stopPropagation();
        }
    });

    // only start edit if key pressed is a number, not a letter
    var charPressIsNotANumber = params.charPress && ('1234567890'.indexOf(params.charPress) < 0);
    this.cancelBeforeStart = charPressIsNotANumber;
};

NumericCellEditor.prototype.isKeyPressedNavigation = function(event: any) {
    return event.keyCode === 39
        || event.keyCode === 37;
};


// gets called once when grid ready to insert the element
NumericCellEditor.prototype.getGui = function() {
    return this.eInput;
};

// focus and select can be done after the gui is attached
NumericCellEditor.prototype.afterGuiAttached = function() {
    this.eInput.focus();
};

// returns the new value after editing
NumericCellEditor.prototype.isCancelBeforeStart = function() {
    return this.cancelBeforeStart;
};

// example - will reject the number if it contains the value 007
// - not very practical, but demonstrates the method.
NumericCellEditor.prototype.isCancelAfterEnd = function() {
    var value = this.getValue();
    return value.indexOf('007') >= 0;
};

// returns the new value after editing
NumericCellEditor.prototype.getValue = function() {
    return this.eInput.value;
};

// any cleanup we need to be done here
NumericCellEditor.prototype.destroy = function() {
    // but this example is simple, no cleanup, we could  even leave this method out as it's optional
};

// if true, then this editor will appear in a popup
NumericCellEditor.prototype.isPopup = function() {
    // and we could leave this method out also, false is the default
    return false;
};


function getDatePicker() {
  function Datepicker() { }
  Datepicker.prototype.init = function (params:any) {
    this.eInput = document.createElement('input');
    this.eInput.value = params.value;
    this.eInput.classList.add('ag-input');
    this.eInput.style.height = '100%';
    $(this.eInput).datepicker({ dateFormat: 'dd/mm/yy' });
  };
  Datepicker.prototype.getGui = function () {
    return this.eInput;
  };
  Datepicker.prototype.afterGuiAttached = function () {
    this.eInput.focus();
    this.eInput.select();
  };
  Datepicker.prototype.getValue = function () {
    return this.eInput.value;
  };
  Datepicker.prototype.destroy = function () { };
  Datepicker.prototype.isPopup = function () {
    return false;
  };
  return Datepicker;
}