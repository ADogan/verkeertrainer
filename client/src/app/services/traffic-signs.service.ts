import { Injectable } from '@angular/core';
import { ITrafficSign } from './traffic-sign.model';

@Injectable()
export class TrafficSignsService {
    images_url_base = 'assets/img/traffic_signs/';
    trafficSignsSourceUrl = 'https://wetten.overheid.nl/BWBR0004825/2018-07-01';

    getTrafficSignsImagesUrlBase() {
        return this.images_url_base;
    }
    getTrafficSigns(): ITrafficSign[] {
        return TRAFFIC_SIGNS;
    }

    getTrafficSignsSourceUrl() {
        return this.trafficSignsSourceUrl;
    }

    getRandomTrafficSign() {
        const random_number = Math.floor(Math.random() * (TRAFFIC_SIGNS.length));
        console.log(random_number);
        return TRAFFIC_SIGNS[random_number];
    }

    getTrafficSignAmount(): number {
        return TRAFFIC_SIGNS.length;
    }
}

const TRAFFIC_SIGNS: ITrafficSign[] = [
    {
    code: 'A1',
        image: {
        filename: '27593'
    },
    description: 'Maximumsnelheid',
    category: 'Snelheid'
    },
    {
    code: 'A2',
        image: {
        filename: '27594'
    },
    description: 'Einde maximumsnelheid',
    category: 'Snelheid'
    },
    {
    code: 'A3',
        image: {
        filename: '27596'
    },
    description: 'Maximumsnelheid op een electronisch signaleringsbord',
    category: 'Snelheid'
    },
    {
    code: 'A4',
        image: {
        filename: '27597'
    },
    description: 'Adviessnelheid',
    category: 'Snelheid'
    },
    {
    code: 'A5',
        image: {
        filename: '27598'
    },
    description: 'Einde adviessnelheid',
    category: 'Snelheid'
    },
    {
    code: 'B1',
        image: {
        filename: '27599'
    },
    description: 'Voorrangsweg',
    category: 'Voorrang'
    },
    {
    code: 'B2',
        image: {
        filename: '27600'
    },
    description: 'Einde voorrangsweg',
    category: 'Voorrang'
    },
    {
    code: 'B3',
        image: {
        filename: '27601'
    },
    description: 'Voorrangskruispunt',
    category: 'Voorrang'
    },
    {
    code: 'B4',
        image: {
        filename: '27602'
    },
    description: 'Voorrangskruispunt Zijweg links',
    category: 'Voorrang'
    },
    {
    code: 'B5',
        image: {
        filename: '27603'
    },
    description: 'Voorrangskruispunt Zijweg rechts',
    category: 'Voorrang'
    },
    {
    code: 'B6',
        image: {
        filename: '27604'
    },
    description: 'Verleen voorrang aan bestuurders op de kruisende weg',
    category: 'Voorrang'
    },
    {
    code: 'B7',
        image: {
        filename: '27605'
    },
    description: 'Stop; verleen voorrang aan bestuurders op de kruisende weg',
    category: 'Voorrang'
    },
    {
    code: 'C1',
        image: {
        filename: '27606'
    },
    description: 'Gesloten in beide richtingen voor voertuigen, ruiters en geleiders van rij- of trekdieren of vee',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C2',
        image: {
        filename: '27607'
    },
    description: 'Eenrichtingsweg, in deze richting gesloten voor voertuigen, ruiters en geleiders van rij- of trekdieren of vee',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C3',
        image: {
        filename: '27608'
    },
    description: 'Eenrichtingsweg',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C4',
        image: {
        filename: '27609'
    },
    description: 'Eenrichtingsweg',
    category: ''
    },
    {
    code: 'C5',
        image: {
        filename: '27610'
    },
    description: 'Inrijden toegestaan',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C6',
        image: {
        filename: '27611'
    },
    description: 'Gesloten voor motorvoertuigen op meer dan twee wielen',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C7',
        image: {
        filename: '27612'
    },
    description: 'Gesloten voor vrachtauto\'s',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C7a',
        image: {
        filename: '246891'
    },
    description: 'Gesloten voor autobussen',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C7b',
        image: {
        filename: '246892'
    },
    description: 'Gesloten voor autobussen en vrachtauto’s',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C8',
        image: {
        filename: '27613'
    },
    description: 'Gesloten voor motorvoertuigen die niet sneller kunnen of mogen rijden dan 25 km/h',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C9',
        image: {
        filename: '27614'
    },
    description: 'Gesloten voor ruiters, vee, wagens, motorvoertuigen die niet sneller kunnen of mogen rijden dan 25 km/h en brommobielen alsmede fietsen, bromfietsen en gehandicaptenvoertuigen',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C10',
        image: {
        filename: '27615'
    },
    description: 'Gesloten voor motorvoertuigen met aanhangwagen',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C11',
        image: {
        filename: '27616'
    },
    description: 'Gesloten voor motorfietsen',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C12',
        image: {
        filename: '27617'
    },
    description: 'Gesloten voor alle motorvoertuigen',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C13',
        image: {
        filename: '27618'
    },
    description: 'Gesloten voor bromfietsen, snorfietsen en gehandicaptenvoertuigen, met in werking zijnde motor',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C14',
        image: {
        filename: '27619'
    },
    description: 'Gesloten voor fietsen en voor gehandicaptenvoertuigen zonder motor',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C15',
        image: {
        filename: '27620'
    },
    description: 'Gesloten voor fietsen, bromfietsen en gehandicaptenvoertuigen',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C16',
        image: {
        filename: '27621'
    },
    description: 'Gesloten voor voetgangers',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C17',
        image: {
        filename: '27622'
    },
    description: 'Gesloten voor voertuigen en samenstellen van voertuigen die, met inbegrip van de lading, langer zijn dan op het bord is aangegeven',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C18',
        image: {
        filename: '27623'
    },
    description: 'Gesloten voor voertuigen die, met inbegrip van de lading, breder zijn dan op het bord is aangegeven',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C19',
        image: {
        filename: '27624'
    },
    description: 'Gesloten voor voertuigen die, met inbegrip van de lading, hoger zijn dan op het bord is aangegeven',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C20',
        image: {
        filename: '27625'
    },
    description: 'Gesloten voor voertuigen waarvan de aslast hoger is dan op het bord is aangegeven',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C21',
        image: {
        filename: '27626'
    },
    description: 'Gesloten voor voertuigen en samenstellen van voertuigen, waarvan de totaalmassa hoger is dan op het bord is aangegeven',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C22',
        image: {
        filename: '27627'
    },
    description: 'Gesloten voor voertuigen met bepaalde gevaarlijke stoffen',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C22a',
        image: {
        filename: '244282'
    },
    description: ' Gesloten voor vrachtauto’s die niet voldoen aan de eisen, genoemd in artikel 86d',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C22b',
        image: {
        filename: '244283'
    },
    description: 'Einde geslotenverklaring voor vrachtauto’s die niet voldoen aan de eisen, genoemd in artikel 86d',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C23-01',
        image: {
        filename: '53250'
    },
    description: 'Spitsstrook open',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C23-02',
        image: {
        filename: '53251'
    },
    description: 'Spitsstrook vrijmaken ',
    category: 'Geslotenverklaring'
    },
    {
    code: 'C23-03',
        image: {
        filename: '53252'
    },
    description: 'Einde spitsstrook ',
    category: 'Geslotenverklaring'
    },
    {
    code: 'D1',
        image: {
        filename: '27628'
    },
    description: 'Rotonde; verplichte rijrichting',
    category: 'Rijrichting'
    },
    {
    code: 'D2',
        image: {
        filename: '27629'
    },
    description: 'Gebod voor alle bestuurders het bord voorbij te gaan aan de zijde die de pijl aangeeft',
    category: 'Rijrichting'
    },
    {
    code: 'D3',
        image: {
        filename: '27630'
    },
    description: 'Bord mag aan beide zijden worden voorbijgegaan',
    category: 'Rijrichting'
    },
    {
    code: 'D4',
        image: {
        filename: '27631'
    },
    description: 'Gebod tot het volgen van de rijrichting die op het bord is aangegeven',
    category: 'Rijrichting'
    },
    {
    code: 'D5',
        image: {
        filename: '27632'
    },
    description: 'Gebod tot het volgen van de rijrichting die op het bord is aangegeven',
    category: 'Rijrichting'
    },
    {
    code: 'D6',
        image: {
        filename: '27633'
    },
    description: 'Gebod tot het volgen van één van de rijrichtingen die op het bord zijn aangegeven',
    category: 'Rijrichting'
    },
    {
    code: 'D7',
        image: {
        filename: '27634'
    },
    description: 'Gebod tot het volgen van één van de rijrichtingen die op het bord zijn aangegeven',
    category: 'Rijrichting'
    },
    {
    code: 'E1',
        image: {
        filename: '27635'
    },
    description: 'Parkeerverbod',
    category: 'Parkeren en stilstaan'
    },
    {
    code: 'E2',
        image: {
        filename: '27636'
    },
    description: 'Verbod stil te staan',
    category: 'Parkeren en stilstaan'
    },
    {
    code: 'E3',
        image: {
        filename: '27637'
    },
    description: 'Verbod fietsen en bromfietsen te plaatsen',
    category: 'Parkeren en stilstaan'
    },
    {
    code: 'E4',
        image: {
        filename: '27638'
    },
    description: 'Parkeergelegenheid',
    category: 'Parkeren en stilstaan'
    },
    {
    code: 'E5',
        image: {
        filename: '27639'
    },
    description: 'Taxistandplaats',
    category: 'Parkeren en stilstaan'
    },
    {
    code: 'E6',
        image: {
        filename: '27640'
    },
    description: 'Gehandicaptenparkeerplaats',
    category: 'Parkeren en stilstaan'
    },
    {
    code: 'E7',
        image: {
        filename: '27641'
    },
    description: 'Gelegenheid bestemd voor het onmiddellijk laden en lossen van goederen',
    category: 'Parkeren en stilstaan'
    },
    {
    code: 'E8',
        image: {
        filename: '27642'
    },
    description: 'Parkeergelegenheid alleen bestemd voor de voertuigcategorie of groep voertuigen die op het bord is aangegeven',
    category: 'Parkeren en stilstaan'
    },
    {
    code: 'E9',
        image: {
        filename: '27643'
    },
    description: 'Parkeergelegenheid alleen bestemd voor vergunninghouders',
    category: 'Parkeren en stilstaan'
    },
    {
    code: 'E10',
        image: {
        filename: '27644'
    },
    description: 'Parkeerschijf-zone met verplicht gebruik van parkeerschijf, tevens parkeerverbod indien er langer wordt geparkeerd dan de parkeerduur die op het bord is aangegeven',
    category: 'Parkeren en stilstaan'
    },
    {
    code: 'E11',
        image: {
        filename: '27645'
    },
    description: 'Einde parkeerschijf-zone met verplicht gebruik van parkeerschijf',
    category: 'Parkeren en stilstaan'
    },
    {
    code: 'E12',
        image: {
        filename: '27646'
    },
    description: 'Parkeergelegenheid ten behoeve van overstappers op het openbaar vervoer',
    category: 'Parkeren en stilstaan'
    },
    {
    code: 'E13',
        image: {
        filename: '27647'
    },
    description: 'Parkeergelegenheid ten behoeve van carpoolers',
    category: 'Parkeren en stilstaan'
    },
    {
    code: 'F1',
        image: {
        filename: '27654'
    },
    description: 'Verbod voor motorvoertuigen om elkaar onderling in te halen',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F2',
        image: {
        filename: '27655'
    },
    description: 'Einde verbod voor motorvoertuigen om elkaar onderling in te halen',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F3',
        image: {
        filename: '27656'
    },
    description: 'Verbod voor vrachtauto\'s om motorvoertuigen in te halen',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F4',
        image: {
        filename: '27657'
    },
    description: 'Einde verbod voor vrachtauto\'s om motorvoertuigen in te halen',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F5',
        image: {
        filename: '27658'
    },
    description: 'Verbod voor bestuurders door te gaan bij nadering van verkeer uit tegengestelde richting',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F6',
        image: {
        filename: '27659'
    },
    description: 'Bestuurders uit tegengestelde richting moeten verkeer dat van deze richting nadert voor laten gaan',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F7',
        image: {
        filename: '27660'
    },
    description: 'Keerverbod',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F8',
        image: {
        filename: '27661'
    },
    description: 'Einde van alle door verkeersborden aangegeven verboden',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F9',
        image: {
        filename: '27663'
    },
    description: 'Einde van alle op een elektronisch signaleringsbord aangegeven verboden',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F10',
        image: {
        filename: '27664'
    },
    description: 'Stop. In het bord kan worden aangegeven door wie of waarom het bord wordt toegepast',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F11',
        image: {
        filename: '258559'
    },
    description: 'Verplicht gebruik passeerbaan of passeerstrook (rijbaan of -strook om ingehaald te kunnen worden), uitsluitend bestemd voor motorvoertuigen die niet sneller kunnen of mogen rijden dan 25 km/h',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F12',
        image: {
        filename: '258560'
    },
    description: 'Einde verplicht gebruik passeerbaan of passeerstrook voor motorvoertuigen die niet sneller kunnen of mogen rijden dan 25 km/h',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F13',
        image: {
        filename: '258561'
    },
    description: 'Rijbaan of -strook uitsluitend ten behoeve van lijnbussen',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F14',
        image: {
        filename: '258562'
    },
    description: 'Einde busbaan of -strook',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F15',
        image: {
        filename: '258563'
    },
    description: 'Rijbaan of -strook uitsluitend ten behoeve van trams',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F16',
        image: {
        filename: '258564'
    },
    description: 'Einde trambaan of -strook',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F17',
        image: {
        filename: '258565'
    },
    description: 'Rijbaan of -strook uitsluitend ten behoeve van lijnbussen en trams',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F18',
        image: {
        filename: '258566'
    },
    description: 'Einde bus- en trambaan of -strook',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F19',
        image: {
        filename: '258567'
    },
    description: 'Rijbaan of -strook uitsluitend ten behoeve van vrachtauto’s en lijnbussen',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F20',
        image: {
        filename: '258568'
    },
    description: 'Einde rijbaan of -strook voor vrachtauto’s en lijnbussen',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F21',
        image: {
        filename: '258569'
    },
    description: 'Rijbaan of -strook uitsluitend ten behoeve van vrachtauto’s',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'F22',
        image: {
        filename: '258570'
    },
    description: 'Einde rijbaan of -strook voor vrachtauto’s',
    category: 'Overige geboden en verboden'
    },
    {
    code: 'G1',
        image: {
        filename: '27666'
    },
    description: 'Autosnelweg',
    category: 'Verkeersregels'
    },
    {
    code: 'G2',
        image: {
        filename: '27667'
    },
    description: 'Einde Autosnelweg',
    category: 'Verkeersregels'
    },
    {
    code: 'G3',
        image: {
        filename: '27668'
    },
    description: 'Autoweg',
    category: 'Verkeersregels'
    },
    {
    code: 'G4',
        image: {
        filename: '27670'
    },
    description: 'Einde autoweg',
    category: 'Verkeersregels'
    },
    {
    code: 'G5',
        image: {
        filename: '27672'
    },
    description: 'Erf',
    category: 'Verkeersregels'
    },
    {
    code: 'G6',
        image: {
        filename: '27673'
    },
    description: 'Einde erf',
    category: 'Verkeersregels'
    },
    {
    code: 'G7',
        image: {
        filename: '27675'
    },
    description: 'Voetpad',
    category: 'Verkeersregels'
    },
    {
    code: 'G8',
        image: {
        filename: '27677'
    },
    description: 'Einde voetpad',
    category: 'Verkeersregels'
    },
    {
    code: 'G9',
        image: {
        filename: '27678'
    },
    description: 'Ruiterpad',
    category: 'Verkeersregels'
    },
    {
    code: 'G10',
        image: {
        filename: '27679'
    },
    description: 'Einde ruiterpad',
    category: 'Verkeersregels'
    },
    {
    code: 'G11',
        image: {
        filename: '27680'
    },
    description: 'Verplicht fietspad',
    category: 'Verkeersregels'
    },
    {
    code: 'G12',
        image: {
        filename: '27681'
    },
    description: 'Einde verplicht fietspad',
    category: 'Verkeersregels'
    },
    {
    code: 'G12a',
        image: {
        filename: '29586'
    },
    description: 'Fiets/bromfietspad',
    category: 'Verkeersregels'
    },
    {
    code: 'G12b',
        image: {
        filename: '29587'
    },
    description: 'Einde fiets/bromfietspad',
    category: 'Verkeersregels'
    },
    {
    code: 'G13',
        image: {
        filename: '27682'
    },
    description: 'Onverplicht fietspad',
    category: 'Verkeersregels'
    },
    {
    code: 'G14',
        image: {
        filename: '27684'
    },
    description: 'Einde onverplicht fietspad',
    category: 'Verkeersregels'
    },
    {
    code: 'H1',
        image: {
        filename: '27685'
    },
    description: 'Bebouwde kom',
    category: 'Bebouwde kom'
    },
    {
    code: 'H2',
        image: {
        filename: '27686'
    },
    description: 'Einde bebouwde kom',
    category: 'Bebouwde kom'
    },
    {
    code: 'J1',
        image: {
        filename: '27688'
    },
    description: 'Slecht wegdek',
    category: 'Waarschuwing'
    },
    {
    code: 'J2',
        image: {
        filename: '27689'
    },
    description: 'Bocht naar rechts',
    category: 'Waarschuwing'
    },
    {
    code: 'J3',
        image: {
        filename: '27690'
    },
    description: 'Bocht naar links',
    category: 'Waarschuwing'
    },
    {
    code: 'J4',
        image: {
        filename: '27691'
    },
    description: 'S-bocht(en), eerst naar rechts',
    category: 'Waarschuwing'
    },
    {
    code: 'J5',
        image: {
        filename: '27692'
    },
    description: 'S-bocht(en), eerst naar links',
    category: 'Waarschuwing'
    },
    {
    code: 'J6',
        image: {
        filename: '27693'
    },
    description: 'Steile helling',
    category: 'Waarschuwing'
    },
    {
    code: 'J7',
        image: {
        filename: '27694'
    },
    description: 'Gevaarlijke daling',
    category: 'Waarschuwing'
    },
    {
    code: 'J8',
        image: {
        filename: '27695'
    },
    description: 'Gevaarlijk kruispunt',
    category: 'Waarschuwing'
    },
    {
    code: 'J9',
        image: {
        filename: '27697'
    },
    description: 'Rotonde',
    category: 'Waarschuwing'
    },
    {
    code: 'J10',
        image: {
        filename: '27698'
    },
    description: 'Overweg met slagbomen',
    category: 'Waarschuwing'
    },
    {
    code: 'J11',
        image: {
        filename: '27701'
    },
    description: 'Overweg zonder slagbomen',
    category: 'Waarschuwing'
    },
    {
    code: 'J12',
        image: {
        filename: '27702'
    },
    description: 'Overweg met enkel spoor',
    category: 'Waarschuwing'
    },
    {
    code: 'J13',
        image: {
        filename: '27703'
    },
    description: 'Overweg met twee of meer sporen',
    category: 'Waarschuwing'
    },
    {
    code: 'J14',
        image: {
        filename: '27704'
    },
    description: 'Tram(kruising)',
    category: 'Waarschuwing'
    },
    {
    code: 'J15',
        image: {
        filename: '27705'
    },
    description: 'Beweegbare brug',
    category: 'Waarschuwing'
    },
    {
    code: 'J16',
        image: {
        filename: '27707'
    },
    description: 'Werk in uitvoering',
    category: 'Waarschuwing'
    },
    {
    code: 'J17',
        image: {
        filename: '27708'
    },
    description: 'Rijbaanversmalling',
    category: 'Waarschuwing'
    },
    {
    code: 'J18',
        image: {
        filename: '27709'
    },
    description: 'Rijbaanversmalling rechts',
    category: 'Waarschuwing'
    },
    {
    code: 'J19',
        image: {
        filename: '27710'
    },
    description: 'Rijbaanversmalling links',
    category: 'Waarschuwing'
    },
    {
    code: 'J20',
        image: {
        filename: '27712'
    },
    description: 'Slipgevaar',
    category: 'Waarschuwing'
    },
    {
    code: 'J21',
        image: {
        filename: '27713'
    },
    description: 'Kinderen',
    category: 'Waarschuwing'
    },
    {
    code: 'J22',
        image: {
        filename: '27715'
    },
    description: 'Voetgangersoversteekplaats',
    category: 'Waarschuwing'
    },
    {
    code: 'J23',
        image: {
        filename: '27716'
    },
    description: 'Voetgangers',
    category: 'Waarschuwing'
    },
    {
    code: 'J24',
        image: {
        filename: '27718'
    },
    description: 'Fietsers en bromfietsers',
    category: 'Waarschuwing'
    },
    {
    code: 'J25',
        image: {
        filename: '27719'
    },
    description: 'Losliggende stenen',
    category: 'Waarschuwing'
    },
    {
    code: 'J26',
        image: {
        filename: '27720'
    },
    description: 'Kade of rivieroever',
    category: 'Waarschuwing'
    },
    {
    code: 'J27',
        image: {
        filename: '27721'
    },
    description: 'Groot wild',
    category: 'Waarschuwing'
    },
    {
    code: 'J28',
        image: {
        filename: '27722'
    },
    description: 'Vee',
    category: 'Waarschuwing'
    },
    {
    code: 'J29',
        image: {
        filename: '27723'
    },
    description: 'Tegenliggers',
    category: 'Waarschuwing'
    },
    {
    code: 'J30',
        image: {
        filename: '27725'
    },
    description: 'Laagvliegende vliegtuigen',
    category: 'Waarschuwing'
    },
    {
    code: 'J31',
        image: {
        filename: '27726'
    },
    description: 'Zijwind',
    category: 'Waarschuwing'
    },
    {
    code: 'J32',
        image: {
        filename: '27727'
    },
    description: 'Verkeerslichten',
    category: 'Waarschuwing'
    },
    {
    code: 'J33',
        image: {
        filename: '27728'
    },
    description: 'File',
    category: 'Waarschuwing'
    },
    {
    code: 'J34',
        image: {
        filename: '53258'
    },
    description: 'Ongeval',
    category: 'Waarschuwing'
    },
    {
    code: 'J35',
        image: {
        filename: '27729'
    },
    description: 'Slecht zicht door sneeuw, regen of mist',
    category: 'Waarschuwing'
    },
    {
    code: 'J36',
        image: {
        filename: '27730'
    },
    description: 'IJzel of sneeuw',
    category: 'Waarschuwing'
    },
    {
    code: 'J37',
        image: {
        filename: '27731'
    },
    description: 'Gevaar (de aard van het gevaar is aangegeven op het onderbord',
    category: 'Waarschuwing'
    },
    {
    code: 'J38',
        image: {
        filename: '69760'
    },
    description: 'Verkeersdrempel',
    category: 'Waarschuwing'
    },
    {
    code: 'J39',
        image: {
        filename: '250761'
    },
    description: 'Waarschuwing voor elektrische in- en uitschuifbare paal in de rijbaan (poller) waarmee toegankelijkheid van straten en gebieden kan worden geregeld.',
    category: 'Waarschuwing'
    },
    {
    code: 'K1',
        image: {
        filename: '27732'
    },
    description: 'Lage beslissingwegwijzer langs autosnelweg voor de doorgaande richting, met interlokale doelen en routenummer autosnelweg',
    category: 'Bewegwijzering'
    },
    {
    code: 'K2',
        image: {
        filename: '27733'
    },
    description: 'Voorwegwijzer langs autosnelweg voor de afgaande richting, met afstandaanduiding, afritnummer, interlokale doelen (bovenste doel = afritnaam), verwijzing naar vliegveld/luchthaven en routenummer niet-autosnelweg',
    category: 'Bewegwijzering'
    },
    {
    code: 'K3',
        image: {
        filename: '27734'
    },
    description: 'Beslissingswegwijzer langs autosnelweg voor de afgaande richting naar een verzorginsgsplaats, met de naam van de parkeerplaats en symbolen die de aard van de voorzieningen aangeven',
    category: 'Bewegwijzering'
    },
    {
    code: 'K4',
        image: {
        filename: '27735'
    },
    description: 'Hoge beslissingswegwijzer langs autosnelweg met rijstrookpaneel voor de doorgaande richting en aftakkingspaneel voor de afgaande richting, met interlokale doelen, routenummers autosnelwegen en Europese hoofdroutes',
    category: 'Bewegwijzering'
    },
    {
    code: 'K5',
        image: {
        filename: '27736'
    },
    description: 'Voorwegwijzer langs niet-autosnelweg, met interlokale doelen, routenummers, viaductsymbool en aanduiding industrieterrein',
    category: 'Bewegwijzering'
    },
    {
    code: 'K6',
        image: {
        filename: '27737'
    },
    description: 'Beslissingswegwijzer langs niet-autosnelweg met interlokale doelen en routenummer niet-autosnelweg',
    category: 'Bewegwijzering'
    },
    {
    code: 'K7',
        image: {
        filename: '27738'
    },
    description: 'Wegwijzer voor fietsers en bromfietsers (handwijzer), met lokaal doel, interlokaal doel, stedelijk fietsroutenummer (boven), en met interlokale doelen en interlokaal fietsroutenummer (onder)',
    category: 'Bewegwijzering'
    },
    {
    code: 'K8',
        image: {
        filename: '27739'
    },
    description: 'Wegwijzer voor fietsers en bromfietsers (stapelbord), met interlokale doelen en een via een alternatieve route te bereiken doel (cursief)',
    category: 'Bewegwijzering'
    },
    {
    code: 'K9',
        image: {
        filename: '27740'
    },
    description: 'Omleiding. Maatregel op voorwegwijzer langs niet-autosnelweg',
    category: 'Bewegwijzering'
    },
    {
    code: 'K10',
        image: {
        filename: '27741'
    },
    description: 'Voorwegwijzer binnen de bebouwde kom met interlokaal doel, lokaal doel, een dagrecreatiecentrum, objecten en stadsroutenummers',
    category: 'Bewegwijzering'
    },
    {
    code: 'K11',
        image: {
        filename: '27742'
    },
    description: 'Voorsorteren op niet-autosnelweg. Bord met interlokale doelen, routenummers en verwijzing naar autosnelweg',
    category: 'Bewegwijzering'
    },
    {
    code: 'K12',
        image: {
        filename: '27743'
    },
    description: 'Wijkwegwijzer binnen de bebouwde kom, met wijknamen (in verkeersgebieden)',
    category: 'Bewegwijzering'
    },
    {
    code: 'K13',
        image: {
        filename: '27744'
    },
    description: 'Wijkwegwijzer binnen de bebouwde kom, met wijknummers (in verkeersgebieden)',
    category: 'Bewegwijzering'
    },
    {
    code: 'K14',
        image: {
        filename: '27745'
    },
    description: 'Route voor het vervoer van bepaalde gevaarlijke stoffen',
    category: 'Bewegwijzering'
    },
    {
    code: 'L1',
        image: {
        filename: '27746'
    },
    description: 'Hoogte onderdoorgang',
    category: 'Informatie'
    },
    {
    code: 'L2',
        image: {
        filename: '27747'
    },
    description: 'Voetgangersoversteekplaats',
    category: 'Informatie'
    },
    {
    code: 'L3',
        image: {
        filename: '250762'
    },
    description: 'Bushalte / tramhalte',
    category: 'Informatie'
    },
    {
    code: 'L3',
        image: {
        filename: '250763'
    },
    description: 'Bushalte / tramhalte',
    category: 'Informatie'
    },
    {
    code: 'L3',
        image: {
        filename: '250764'
    },
    description: 'Bushalte / tramhalte',
    category: 'Informatie'
    },
    {
    code: 'L4',
        image: {
        filename: '27749'
    },
    description: 'Voorsorteren',
    category: 'Informatie'
    },
    {
    code: 'L5',
        image: {
        filename: '27750'
    },
    description: 'Einde rijstrook',
    category: 'Informatie'
    },
    {
    code: 'L6',
        image: {
        filename: '27751'
    },
    description: 'Splitsing',
    category: 'Informatie'
    },
    {
    code: 'L7',
        image: {
        filename: '27752'
    },
    description: 'Aantal doorgaande rijstroken',
    category: 'Informatie'
    },
    {
    code: 'L8',
        image: {
        filename: '27753'
    },
    description: 'Doodlopende weg',
    category: 'Informatie'
    },
    {
    code: 'L9',
        image: {
        filename: '27754'
    },
    description: 'Vooraanduiding doodlopende weg',
    category: 'Informatie'
    },
    {
    code: 'L10',
        image: {
        filename: '27755'
    },
    description: 'Vooraanduiding verkeersmaatregel voor de aangegeven richting',
    category: 'Informatie'
    },
    {
    code: 'L11',
        image: {
        filename: '27756'
    },
    description: 'Verkeersbord geldt alleen voor de aangegeven rijstrook/rijstroken',
    category: 'Informatie'
    },
    {
    code: 'L12',
        image: {
        filename: '27757'
    },
    description: 'Verkeersbord geldt alleen voor de aangegeven rijstrook',
    category: 'Informatie'
    },
    {
    code: 'L13',
        image: {
        filename: '239092'
    },
    description: 'Verkeerstunnel',
    category: 'Informatie'
    },
    {
    code: 'L14',
        image: {
        filename: '239093'
    },
    description: ' Vluchthaven',
    category: 'Informatie'
    },
    {
    code: 'L15',
        image: {
        filename: '239094'
    },
    description: ' Vluchthaven voorzien van een noodtelefoon en brandblusapparaat',
    category: 'Informatie'
    },
    {
    code: 'L16',
        image: {
        filename: '239095'
    },
    description: ' Noodtelefoon',
    category: 'Informatie'
    },
    {
    code: 'L17',
        image: {
        filename: '239096'
    },
    description: 'Brandblusapparaat',
    category: 'Informatie'
    },
    {
    code: 'L18',
        image: {
        filename: '239097'
    },
    description: 'Noodtelefoon en brandblusapparaat',
    category: 'Informatie'
    },
    {
    code: 'L19',
        image: {
        filename: '239098'
    },
    description: 'Dichtstbijzijnde uitgang of twee dichtstbijzijnde uitgangen in de op het bord aangegeven richting en afstand',
    category: 'Informatie'
    },
    {
    code: 'L20',
        image: {
        filename: '258571'
    },
    description: 'Uitwijkplaats rechts van de weg',
    category: 'Informatie'
    },
    {
    code: 'L21',
        image: {
        filename: '258572'
    },
    description: 'Uitwijkplaats links van de weg',
    category: 'Informatie'
    },
];
