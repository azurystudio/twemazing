/*!
 *  Twemazing 1.1.1 by Azury - https://twemazing.com
 *  License - Apache-2.0
!*/

// emojis
const emojis = [
  {
    name: '1st-place-medal',
    code: '1f947'
  },
  {
    name: '2nd-place-medal',
    code: '1f948'
  },
  {
    name: '3rd-place-medal',
    code: '1f949'
  },
  {
    name: 'a-button-blood-type',
    code: '1f170'
  },
  {
    name: 'ab-button-blood-type',
    code: '1f18e'
  },
  {
    name: 'abacus',
    code: '1f9ee'
  },
  {
    name: 'accordion',
    code: '1fa97'
  },
  {
    name: 'adhesive-bandage',
    code: '1fa79'
  },
  {
    name: 'admission-tickets',
    code: '1f39f'
  },
  {
    name: 'aerial-tramway',
    code: '1f6a1'
  },
  {
    name: 'airplane',
    code: '2708'
  },
  {
    name: 'airplane-arrival',
    code: '1f6ec'
  },
  {
    name: 'airplane-departure',
    code: '1f6eb'
  },
  {
    name: 'alarm-clock',
    code: '23f0'
  },
  {
    name: 'alembic',
    code: '2697'
  },
  {
    name: 'alien',
    code: '1f47d'
  },
  {
    name: 'alien-monster',
    code: '1f47e'
  },
  {
    name: 'ambulance',
    code: '1f691'
  },
  {
    name: 'american-football',
    code: '1f3c8'
  },
  {
    name: 'amphora',
    code: '1f3fa'
  },
  {
    name: 'anatomical-heart',
    code: '1fac0'
  },
  {
    name: 'anchor',
    code: '2693'
  },
  {
    name: 'anger-symbol',
    code: '1f4a2'
  },
  {
    name: 'angry-face',
    code: '1f620'
  },
  {
    name: 'angry-face-with-horns',
    code: '1f47f'
  },
  {
    name: 'anguished-face',
    code: '1f627'
  },
  {
    name: 'ant',
    code: '1f41c'
  },
  {
    name: 'antenna-bars',
    code: '1f4f6'
  },
  {
    name: 'anxious-face-with-sweat',
    code: '1f630'
  },
  {
    name: 'aquarius',
    code: '2652'
  },
  {
    name: 'aries',
    code: '2648'
  },
  {
    name: 'articulated-lorry',
    code: '1f69b'
  },
  {
    name: 'artist',
    code: '1f9d1-200d-1f3a8'
  },
  {
    name: 'artist-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f3a8'
  },
  {
    name: 'artist-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f3a8'
  },
  {
    name: 'artist-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f3a8'
  },
  {
    name: 'artist-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f3a8'
  },
  {
    name: 'artist-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f3a8'
  },
  {
    name: 'artist-palette',
    code: '1f3a8'
  },
  {
    name: 'astonished-face',
    code: '1f632'
  },
  {
    name: 'astronaut',
    code: '1f9d1-200d-1f680'
  },
  {
    name: 'astronaut-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f680'
  },
  {
    name: 'astronaut-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f680'
  },
  {
    name: 'astronaut-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f680'
  },
  {
    name: 'astronaut-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f680'
  },
  {
    name: 'astronaut-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f680'
  },
  {
    name: 'atm-sign',
    code: '1f3e7'
  },
  {
    name: 'atom-symbol',
    code: '269b'
  },
  {
    name: 'auto-rickshaw',
    code: '1f6fa'
  },
  {
    name: 'automobile',
    code: '1f697'
  },
  {
    name: 'avocado',
    code: '1f951'
  },
  {
    name: 'axe',
    code: '1fa93'
  },
  {
    name: 'b-button-blood-type',
    code: '1f171'
  },
  {
    name: 'baby',
    code: '1f476'
  },
  {
    name: 'baby-angel',
    code: '1f47c'
  },
  {
    name: 'baby-angel-dark-skin-tone',
    code: '1f47c-1f3ff'
  },
  {
    name: 'baby-angel-light-skin-tone',
    code: '1f47c-1f3fb'
  },
  {
    name: 'baby-angel-medium-dark-skin-tone',
    code: '1f47c-1f3fe'
  },
  {
    name: 'baby-angel-medium-light-skin-tone',
    code: '1f47c-1f3fc'
  },
  {
    name: 'baby-angel-medium-skin-tone',
    code: '1f47c-1f3fd'
  },
  {
    name: 'baby-bottle',
    code: '1f37c'
  },
  {
    name: 'baby-chick',
    code: '1f424'
  },
  {
    name: 'baby-dark-skin-tone',
    code: '1f476-1f3ff'
  },
  {
    name: 'baby-light-skin-tone',
    code: '1f476-1f3fb'
  },
  {
    name: 'baby-medium-dark-skin-tone',
    code: '1f476-1f3fe'
  },
  {
    name: 'baby-medium-light-skin-tone',
    code: '1f476-1f3fc'
  },
  {
    name: 'baby-medium-skin-tone',
    code: '1f476-1f3fd'
  },
  {
    name: 'baby-symbol',
    code: '1f6bc'
  },
  {
    name: 'back-arrow',
    code: '1f519'
  },
  {
    name: 'backhand-index-pointing-down',
    code: '1f447'
  },
  {
    name: 'backhand-index-pointing-down-dark-skin-tone',
    code: '1f447-1f3ff'
  },
  {
    name: 'backhand-index-pointing-down-light-skin-tone',
    code: '1f447-1f3fb'
  },
  {
    name: 'backhand-index-pointing-down-medium-dark-skin-tone',
    code: '1f447-1f3fe'
  },
  {
    name: 'backhand-index-pointing-down-medium-light-skin-tone',
    code: '1f447-1f3fc'
  },
  {
    name: 'backhand-index-pointing-down-medium-skin-tone',
    code: '1f447-1f3fd'
  },
  {
    name: 'backhand-index-pointing-left',
    code: '1f448'
  },
  {
    name: 'backhand-index-pointing-left-dark-skin-tone',
    code: '1f448-1f3ff'
  },
  {
    name: 'backhand-index-pointing-left-light-skin-tone',
    code: '1f448-1f3fb'
  },
  {
    name: 'backhand-index-pointing-left-medium-dark-skin-tone',
    code: '1f448-1f3fe'
  },
  {
    name: 'backhand-index-pointing-left-medium-light-skin-tone',
    code: '1f448-1f3fc'
  },
  {
    name: 'backhand-index-pointing-left-medium-skin-tone',
    code: '1f448-1f3fd'
  },
  {
    name: 'backhand-index-pointing-right',
    code: '1f449'
  },
  {
    name: 'backhand-index-pointing-right-dark-skin-tone',
    code: '1f449-1f3ff'
  },
  {
    name: 'backhand-index-pointing-right-light-skin-tone',
    code: '1f449-1f3fb'
  },
  {
    name: 'backhand-index-pointing-right-medium-dark-skin-tone',
    code: '1f449-1f3fe'
  },
  {
    name: 'backhand-index-pointing-right-medium-light-skin-tone',
    code: '1f449-1f3fc'
  },
  {
    name: 'backhand-index-pointing-right-medium-skin-tone',
    code: '1f449-1f3fd'
  },
  {
    name: 'backhand-index-pointing-up',
    code: '1f446'
  },
  {
    name: 'backhand-index-pointing-up-dark-skin-tone',
    code: '1f446-1f3ff'
  },
  {
    name: 'backhand-index-pointing-up-light-skin-tone',
    code: '1f446-1f3fb'
  },
  {
    name: 'backhand-index-pointing-up-medium-dark-skin-tone',
    code: '1f446-1f3fe'
  },
  {
    name: 'backhand-index-pointing-up-medium-light-skin-tone',
    code: '1f446-1f3fc'
  },
  {
    name: 'backhand-index-pointing-up-medium-skin-tone',
    code: '1f446-1f3fd'
  },
  {
    name: 'backpack',
    code: '1f392'
  },
  {
    name: 'bacon',
    code: '1f953'
  },
  {
    name: 'badger',
    code: '1f9a1'
  },
  {
    name: 'badminton',
    code: '1f3f8'
  },
  {
    name: 'bagel',
    code: '1f96f'
  },
  {
    name: 'baggage-claim',
    code: '1f6c4'
  },
  {
    name: 'baguette-bread',
    code: '1f956'
  },
  {
    name: 'balance-scale',
    code: '2696'
  },
  {
    name: 'bald',
    code: '1f9b2'
  },
  {
    name: 'ballet-shoes',
    code: '1fa70'
  },
  {
    name: 'balloon',
    code: '1f388'
  },
  {
    name: 'ballot-box-with-ballot',
    code: '1f5f3'
  },
  {
    name: 'banana',
    code: '1f34c'
  },
  {
    name: 'banjo',
    code: '1fa95'
  },
  {
    name: 'bank',
    code: '1f3e6'
  },
  {
    name: 'bar-chart',
    code: '1f4ca'
  },
  {
    name: 'barber-pole',
    code: '1f488'
  },
  {
    name: 'baseball',
    code: '26be'
  },
  {
    name: 'basket',
    code: '1f9fa'
  },
  {
    name: 'basketball',
    code: '1f3c0'
  },
  {
    name: 'bat',
    code: '1f987'
  },
  {
    name: 'bathtub',
    code: '1f6c1'
  },
  {
    name: 'battery',
    code: '1f50b'
  },
  {
    name: 'beach-with-umbrella',
    code: '1f3d6'
  },
  {
    name: 'beaming-face-with-smiling-eyes',
    code: '1f601'
  },
  {
    name: 'bear',
    code: '1f43b'
  },
  {
    name: 'beating-heart',
    code: '1f493'
  },
  {
    name: 'beaver',
    code: '1f9ab'
  },
  {
    name: 'bed',
    code: '1f6cf'
  },
  {
    name: 'beer-mug',
    code: '1f37a'
  },
  {
    name: 'beetle',
    code: '1fab2'
  },
  {
    name: 'bell',
    code: '1f514'
  },
  {
    name: 'bell-pepper',
    code: '1fad1'
  },
  {
    name: 'bell-with-slash',
    code: '1f515'
  },
  {
    name: 'bellhop-bell',
    code: '1f6ce'
  },
  {
    name: 'bento-box',
    code: '1f371'
  },
  {
    name: 'beverage-box',
    code: '1f9c3'
  },
  {
    name: 'bicycle',
    code: '1f6b2'
  },
  {
    name: 'bikini',
    code: '1f459'
  },
  {
    name: 'billed-cap',
    code: '1f9e2'
  },
  {
    name: 'biohazard',
    code: '2623'
  },
  {
    name: 'bird',
    code: '1f426'
  },
  {
    name: 'birthday-cake',
    code: '1f382'
  },
  {
    name: 'bison',
    code: '1f9ac'
  },
  {
    name: 'black-cat',
    code: '1f408-200d-2b1b'
  },
  {
    name: 'black-circle',
    code: '26ab'
  },
  {
    name: 'black-flag',
    code: '1f3f4'
  },
  {
    name: 'black-heart',
    code: '1f5a4'
  },
  {
    name: 'black-large-square',
    code: '2b1b'
  },
  {
    name: 'black-medium-small-square',
    code: '25fe'
  },
  {
    name: 'black-medium-square',
    code: '25fc'
  },
  {
    name: 'black-nib',
    code: '2712'
  },
  {
    name: 'black-small-square',
    code: '25aa'
  },
  {
    name: 'black-square-button',
    code: '1f532'
  },
  {
    name: 'blossom',
    code: '1f33c'
  },
  {
    name: 'blowfish',
    code: '1f421'
  },
  {
    name: 'blue-book',
    code: '1f4d8'
  },
  {
    name: 'blue-circle',
    code: '1f535'
  },
  {
    name: 'blue-heart',
    code: '1f499'
  },
  {
    name: 'blue-square',
    code: '1f7e6'
  },
  {
    name: 'blueberries',
    code: '1fad0'
  },
  {
    name: 'boar',
    code: '1f417'
  },
  {
    name: 'bomb',
    code: '1f4a3'
  },
  {
    name: 'bone',
    code: '1f9b4'
  },
  {
    name: 'bookmark',
    code: '1f516'
  },
  {
    name: 'bookmark-tabs',
    code: '1f4d1'
  },
  {
    name: 'books',
    code: '1f4da'
  },
  {
    name: 'boomerang',
    code: '1fa83'
  },
  {
    name: 'bottle-with-popping-cork',
    code: '1f37e'
  },
  {
    name: 'bouquet',
    code: '1f490'
  },
  {
    name: 'bow-and-arrow',
    code: '1f3f9'
  },
  {
    name: 'bowl-with-spoon',
    code: '1f963'
  },
  {
    name: 'bowling',
    code: '1f3b3'
  },
  {
    name: 'boxing-glove',
    code: '1f94a'
  },
  {
    name: 'boy',
    code: '1f466'
  },
  {
    name: 'boy-dark-skin-tone',
    code: '1f466-1f3ff'
  },
  {
    name: 'boy-light-skin-tone',
    code: '1f466-1f3fb'
  },
  {
    name: 'boy-medium-dark-skin-tone',
    code: '1f466-1f3fe'
  },
  {
    name: 'boy-medium-light-skin-tone',
    code: '1f466-1f3fc'
  },
  {
    name: 'boy-medium-skin-tone',
    code: '1f466-1f3fd'
  },
  {
    name: 'brain',
    code: '1f9e0'
  },
  {
    name: 'bread',
    code: '1f35e'
  },
  {
    name: 'breast-feeding',
    code: '1f931'
  },
  {
    name: 'breast-feeding-dark-skin-tone',
    code: '1f931-1f3ff'
  },
  {
    name: 'breast-feeding-light-skin-tone',
    code: '1f931-1f3fb'
  },
  {
    name: 'breast-feeding-medium-dark-skin-tone',
    code: '1f931-1f3fe'
  },
  {
    name: 'breast-feeding-medium-light-skin-tone',
    code: '1f931-1f3fc'
  },
  {
    name: 'breast-feeding-medium-skin-tone',
    code: '1f931-1f3fd'
  },
  {
    name: 'brick',
    code: '1f9f1'
  },
  {
    name: 'bridge-at-night',
    code: '1f309'
  },
  {
    name: 'briefcase',
    code: '1f4bc'
  },
  {
    name: 'briefs',
    code: '1fa72'
  },
  {
    name: 'bright-button',
    code: '1f506'
  },
  {
    name: 'broccoli',
    code: '1f966'
  },
  {
    name: 'broken-heart',
    code: '1f494'
  },
  {
    name: 'broom',
    code: '1f9f9'
  },
  {
    name: 'brown-circle',
    code: '1f7e4'
  },
  {
    name: 'brown-heart',
    code: '1f90e'
  },
  {
    name: 'brown-square',
    code: '1f7eb'
  },
  {
    name: 'bubble-tea',
    code: '1f9cb'
  },
  {
    name: 'bucket',
    code: '1faa3'
  },
  {
    name: 'bug',
    code: '1f41b'
  },
  {
    name: 'building-construction',
    code: '1f3d7'
  },
  {
    name: 'bullet-train',
    code: '1f685'
  },
  {
    name: 'bullseye',
    code: '1f3af'
  },
  {
    name: 'burrito',
    code: '1f32f'
  },
  {
    name: 'bus',
    code: '1f68c'
  },
  {
    name: 'bus-stop',
    code: '1f68f'
  },
  {
    name: 'bust-in-silhouette',
    code: '1f464'
  },
  {
    name: 'busts-in-silhouette',
    code: '1f465'
  },
  {
    name: 'butter',
    code: '1f9c8'
  },
  {
    name: 'butterfly',
    code: '1f98b'
  },
  {
    name: 'cactus',
    code: '1f335'
  },
  {
    name: 'calendar',
    code: '1f4c5'
  },
  {
    name: 'call-me-hand',
    code: '1f919'
  },
  {
    name: 'call-me-hand-dark-skin-tone',
    code: '1f919-1f3ff'
  },
  {
    name: 'call-me-hand-light-skin-tone',
    code: '1f919-1f3fb'
  },
  {
    name: 'call-me-hand-medium-dark-skin-tone',
    code: '1f919-1f3fe'
  },
  {
    name: 'call-me-hand-medium-light-skin-tone',
    code: '1f919-1f3fc'
  },
  {
    name: 'call-me-hand-medium-skin-tone',
    code: '1f919-1f3fd'
  },
  {
    name: 'camel',
    code: '1f42a'
  },
  {
    name: 'camera',
    code: '1f4f7'
  },
  {
    name: 'camera-with-flash',
    code: '1f4f8'
  },
  {
    name: 'camping',
    code: '1f3d5'
  },
  {
    name: 'cancer',
    code: '264b'
  },
  {
    name: 'candle',
    code: '1f56f'
  },
  {
    name: 'candy',
    code: '1f36c'
  },
  {
    name: 'canned-food',
    code: '1f96b'
  },
  {
    name: 'canoe',
    code: '1f6f6'
  },
  {
    name: 'capricorn',
    code: '2651'
  },
  {
    name: 'card-file-box',
    code: '1f5c3'
  },
  {
    name: 'card-index',
    code: '1f4c7'
  },
  {
    name: 'card-index-dividers',
    code: '1f5c2'
  },
  {
    name: 'carousel-horse',
    code: '1f3a0'
  },
  {
    name: 'carp-streamer',
    code: '1f38f'
  },
  {
    name: 'carpentry-saw',
    code: '1fa9a'
  },
  {
    name: 'carrot',
    code: '1f955'
  },
  {
    name: 'castle',
    code: '1f3f0'
  },
  {
    name: 'cat',
    code: '1f408'
  },
  {
    name: 'cat-face',
    code: '1f431'
  },
  {
    name: 'cat-with-tears-of-joy',
    code: '1f639'
  },
  {
    name: 'cat-with-wry-smile',
    code: '1f63c'
  },
  {
    name: 'chains',
    code: '26d3'
  },
  {
    name: 'chair',
    code: '1fa91'
  },
  {
    name: 'chart-decreasing',
    code: '1f4c9'
  },
  {
    name: 'chart-increasing',
    code: '1f4c8'
  },
  {
    name: 'chart-increasing-with-yen',
    code: '1f4b9'
  },
  {
    name: 'check-box-with-check',
    code: '2611'
  },
  {
    name: 'check-mark',
    code: '2714'
  },
  {
    name: 'check-mark-button',
    code: '2705'
  },
  {
    name: 'cheese-wedge',
    code: '1f9c0'
  },
  {
    name: 'chequered-flag',
    code: '1f3c1'
  },
  {
    name: 'cherries',
    code: '1f352'
  },
  {
    name: 'cherry-blossom',
    code: '1f338'
  },
  {
    name: 'chess-pawn',
    code: '265f'
  },
  {
    name: 'chestnut',
    code: '1f330'
  },
  {
    name: 'chicken',
    code: '1f414'
  },
  {
    name: 'child',
    code: '1f9d2'
  },
  {
    name: 'child-dark-skin-tone',
    code: '1f9d2-1f3ff'
  },
  {
    name: 'child-light-skin-tone',
    code: '1f9d2-1f3fb'
  },
  {
    name: 'child-medium-dark-skin-tone',
    code: '1f9d2-1f3fe'
  },
  {
    name: 'child-medium-light-skin-tone',
    code: '1f9d2-1f3fc'
  },
  {
    name: 'child-medium-skin-tone',
    code: '1f9d2-1f3fd'
  },
  {
    name: 'children-crossing',
    code: '1f6b8'
  },
  {
    name: 'chipmunk',
    code: '1f43f'
  },
  {
    name: 'chocolate-bar',
    code: '1f36b'
  },
  {
    name: 'chopsticks',
    code: '1f962'
  },
  {
    name: 'christmas-tree',
    code: '1f384'
  },
  {
    name: 'church',
    code: '26ea'
  },
  {
    name: 'cigarette',
    code: '1f6ac'
  },
  {
    name: 'cinema',
    code: '1f3a6'
  },
  {
    name: 'circled-m',
    code: '24c2'
  },
  {
    name: 'circus-tent',
    code: '1f3aa'
  },
  {
    name: 'cityscape',
    code: '1f3d9'
  },
  {
    name: 'cityscape-at-dusk',
    code: '1f306'
  },
  {
    name: 'cl-button',
    code: '1f191'
  },
  {
    name: 'clamp',
    code: '1f5dc'
  },
  {
    name: 'clapper-board',
    code: '1f3ac'
  },
  {
    name: 'clapping-hands',
    code: '1f44f'
  },
  {
    name: 'clapping-hands-dark-skin-tone',
    code: '1f44f-1f3ff'
  },
  {
    name: 'clapping-hands-light-skin-tone',
    code: '1f44f-1f3fb'
  },
  {
    name: 'clapping-hands-medium-dark-skin-tone',
    code: '1f44f-1f3fe'
  },
  {
    name: 'clapping-hands-medium-light-skin-tone',
    code: '1f44f-1f3fc'
  },
  {
    name: 'clapping-hands-medium-skin-tone',
    code: '1f44f-1f3fd'
  },
  {
    name: 'classical-building',
    code: '1f3db'
  },
  {
    name: 'clinking-beer-mugs',
    code: '1f37b'
  },
  {
    name: 'clinking-glasses',
    code: '1f942'
  },
  {
    name: 'clipboard',
    code: '1f4cb'
  },
  {
    name: 'clockwise-vertical-arrows',
    code: '1f503'
  },
  {
    name: 'closed-book',
    code: '1f4d5'
  },
  {
    name: 'closed-mailbox-with-lowered-flag',
    code: '1f4ea'
  },
  {
    name: 'closed-mailbox-with-raised-flag',
    code: '1f4eb'
  },
  {
    name: 'closed-umbrella',
    code: '1f302'
  },
  {
    name: 'cloud',
    code: '2601'
  },
  {
    name: 'cloud-with-lightning',
    code: '1f329'
  },
  {
    name: 'cloud-with-lightning-and-rain',
    code: '26c8'
  },
  {
    name: 'cloud-with-rain',
    code: '1f327'
  },
  {
    name: 'cloud-with-snow',
    code: '1f328'
  },
  {
    name: 'clown-face',
    code: '1f921'
  },
  {
    name: 'club-suit',
    code: '2663'
  },
  {
    name: 'clutch-bag',
    code: '1f45d'
  },
  {
    name: 'coat',
    code: '1f9e5'
  },
  {
    name: 'cockroach',
    code: '1fab3'
  },
  {
    name: 'cocktail-glass',
    code: '1f378'
  },
  {
    name: 'coconut',
    code: '1f965'
  },
  {
    name: 'coffin',
    code: '26b0'
  },
  {
    name: 'coin',
    code: '1fa99'
  },
  {
    name: 'cold-face',
    code: '1f976'
  },
  {
    name: 'collision',
    code: '1f4a5'
  },
  {
    name: 'comet',
    code: '2604'
  },
  {
    name: 'compass',
    code: '1f9ed'
  },
  {
    name: 'computer-disk',
    code: '1f4bd'
  },
  {
    name: 'computer-mouse',
    code: '1f5b1'
  },
  {
    name: 'confetti-ball',
    code: '1f38a'
  },
  {
    name: 'confounded-face',
    code: '1f616'
  },
  {
    name: 'confused-face',
    code: '1f615'
  },
  {
    name: 'construction',
    code: '1f6a7'
  },
  {
    name: 'construction-worker',
    code: '1f477'
  },
  {
    name: 'construction-worker-dark-skin-tone',
    code: '1f477-1f3ff'
  },
  {
    name: 'construction-worker-light-skin-tone',
    code: '1f477-1f3fb'
  },
  {
    name: 'construction-worker-medium-dark-skin-tone',
    code: '1f477-1f3fe'
  },
  {
    name: 'construction-worker-medium-light-skin-tone',
    code: '1f477-1f3fc'
  },
  {
    name: 'construction-worker-medium-skin-tone',
    code: '1f477-1f3fd'
  },
  {
    name: 'control-knobs',
    code: '1f39b'
  },
  {
    name: 'convenience-store',
    code: '1f3ea'
  },
  {
    name: 'cook',
    code: '1f9d1-200d-1f373'
  },
  {
    name: 'cook-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f373'
  },
  {
    name: 'cook-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f373'
  },
  {
    name: 'cook-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f373'
  },
  {
    name: 'cook-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f373'
  },
  {
    name: 'cook-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f373'
  },
  {
    name: 'cooked-rice',
    code: '1f35a'
  },
  {
    name: 'cookie',
    code: '1f36a'
  },
  {
    name: 'cooking',
    code: '1f373'
  },
  {
    name: 'cool-button',
    code: '1f192'
  },
  {
    name: 'copyright',
    code: 'a9'
  },
  {
    name: 'couch-and-lamp',
    code: '1f6cb'
  },
  {
    name: 'counterclockwise-arrows-button',
    code: '1f504'
  },
  {
    name: 'couple-with-heart',
    code: '1f491'
  },
  {
    name: 'couple-with-heart-dark-skin-tone',
    code: '1f491-1f3ff'
  },
  {
    name: 'couple-with-heart-light-skin-tone',
    code: '1f491-1f3fb'
  },
  {
    name: 'couple-with-heart-man-man',
    code: '1f468-200d-2764-fe0f-200d-1f468'
  },
  {
    name: 'couple-with-heart-man-man-dark-skin-tone',
    code: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    name: 'couple-with-heart-man-man-dark-skin-tone-light-skin-tone',
    code: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    name: 'couple-with-heart-man-man-dark-skin-tone-medium-dark-skin-tone',
    code: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    name: 'couple-with-heart-man-man-dark-skin-tone-medium-light-skin-tone',
    code: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    name: 'couple-with-heart-man-man-dark-skin-tone-medium-skin-tone',
    code: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    name: 'couple-with-heart-man-man-light-skin-tone',
    code: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    name: 'couple-with-heart-man-man-light-skin-tone-dark-skin-tone',
    code: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    name: 'couple-with-heart-man-man-light-skin-tone-medium-dark-skin-tone',
    code: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    name: 'couple-with-heart-man-man-light-skin-tone-medium-light-skin-tone',
    code: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    name: 'couple-with-heart-man-man-light-skin-tone-medium-skin-tone',
    code: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    name: 'couple-with-heart-man-man-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    name: 'couple-with-heart-man-man-medium-dark-skin-tone-dark-skin-tone',
    code: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    name: 'couple-with-heart-man-man-medium-dark-skin-tone-light-skin-tone',
    code: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    name: 'couple-with-heart-man-man-medium-dark-skin-tone-medium-light-skin-tone',
    code: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    name: 'couple-with-heart-man-man-medium-dark-skin-tone-medium-skin-tone',
    code: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    name: 'couple-with-heart-man-man-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    name: 'couple-with-heart-man-man-medium-light-skin-tone-dark-skin-tone',
    code: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    name: 'couple-with-heart-man-man-medium-light-skin-tone-light-skin-tone',
    code: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    name: 'couple-with-heart-man-man-medium-light-skin-tone-medium-dark-skin-tone',
    code: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    name: 'couple-with-heart-man-man-medium-light-skin-tone-medium-skin-tone',
    code: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    name: 'couple-with-heart-man-man-medium-skin-tone',
    code: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    name: 'couple-with-heart-man-man-medium-skin-tone-dark-skin-tone',
    code: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    name: 'couple-with-heart-man-man-medium-skin-tone-light-skin-tone',
    code: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    name: 'couple-with-heart-man-man-medium-skin-tone-medium-dark-skin-tone',
    code: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    name: 'couple-with-heart-man-man-medium-skin-tone-medium-light-skin-tone',
    code: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    name: 'couple-with-heart-medium-dark-skin-tone',
    code: '1f491-1f3fe'
  },
  {
    name: 'couple-with-heart-medium-light-skin-tone',
    code: '1f491-1f3fc'
  },
  {
    name: 'couple-with-heart-medium-skin-tone',
    code: '1f491-1f3fd'
  },
  {
    name: 'couple-with-heart-person-person-dark-skin-tone-light-skin-tone',
    code: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb'
  },
  {
    name: 'couple-with-heart-person-person-dark-skin-tone-medium-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe'
  },
  {
    name: 'couple-with-heart-person-person-dark-skin-tone-medium-light-skin-tone',
    code: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc'
  },
  {
    name: 'couple-with-heart-person-person-dark-skin-tone-medium-skin-tone',
    code: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd'
  },
  {
    name: 'couple-with-heart-person-person-light-skin-tone-dark-skin-tone',
    code: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff'
  },
  {
    name: 'couple-with-heart-person-person-light-skin-tone-medium-dark-skin-tone',
    code: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe'
  },
  {
    name: 'couple-with-heart-person-person-light-skin-tone-medium-light-skin-tone',
    code: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc'
  },
  {
    name: 'couple-with-heart-person-person-light-skin-tone-medium-skin-tone',
    code: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd'
  },
  {
    name: 'couple-with-heart-person-person-medium-dark-skin-tone-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff'
  },
  {
    name: 'couple-with-heart-person-person-medium-dark-skin-tone-light-skin-tone',
    code: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb'
  },
  {
    name: 'couple-with-heart-person-person-medium-dark-skin-tone-medium-light-skin-tone',
    code: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc'
  },
  {
    name: 'couple-with-heart-person-person-medium-dark-skin-tone-medium-skin-tone',
    code: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd'
  },
  {
    name: 'couple-with-heart-person-person-medium-light-skin-tone-dark-skin-tone',
    code: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff'
  },
  {
    name: 'couple-with-heart-person-person-medium-light-skin-tone-light-skin-tone',
    code: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb'
  },
  {
    name: 'couple-with-heart-person-person-medium-light-skin-tone-medium-dark-skin-tone',
    code: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe'
  },
  {
    name: 'couple-with-heart-person-person-medium-light-skin-tone-medium-skin-tone',
    code: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd'
  },
  {
    name: 'couple-with-heart-person-person-medium-skin-tone-dark-skin-tone',
    code: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff'
  },
  {
    name: 'couple-with-heart-person-person-medium-skin-tone-light-skin-tone',
    code: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb'
  },
  {
    name: 'couple-with-heart-person-person-medium-skin-tone-medium-dark-skin-tone',
    code: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe'
  },
  {
    name: 'couple-with-heart-person-person-medium-skin-tone-medium-light-skin-tone',
    code: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc'
  },
  {
    name: 'couple-with-heart-woman-man',
    code: '1f469-200d-2764-fe0f-200d-1f468'
  },
  {
    name: 'couple-with-heart-woman-man-dark-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    name: 'couple-with-heart-woman-man-dark-skin-tone-light-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    name: 'couple-with-heart-woman-man-dark-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    name: 'couple-with-heart-woman-man-dark-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    name: 'couple-with-heart-woman-man-dark-skin-tone-medium-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    name: 'couple-with-heart-woman-man-light-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    name: 'couple-with-heart-woman-man-light-skin-tone-dark-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    name: 'couple-with-heart-woman-man-light-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    name: 'couple-with-heart-woman-man-light-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    name: 'couple-with-heart-woman-man-light-skin-tone-medium-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    name: 'couple-with-heart-woman-man-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    name: 'couple-with-heart-woman-man-medium-dark-skin-tone-dark-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    name: 'couple-with-heart-woman-man-medium-dark-skin-tone-light-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    name: 'couple-with-heart-woman-man-medium-dark-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    name: 'couple-with-heart-woman-man-medium-dark-skin-tone-medium-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    name: 'couple-with-heart-woman-man-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    name: 'couple-with-heart-woman-man-medium-light-skin-tone-dark-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    name: 'couple-with-heart-woman-man-medium-light-skin-tone-light-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    name: 'couple-with-heart-woman-man-medium-light-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    name: 'couple-with-heart-woman-man-medium-light-skin-tone-medium-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    name: 'couple-with-heart-woman-man-medium-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    name: 'couple-with-heart-woman-man-medium-skin-tone-dark-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    name: 'couple-with-heart-woman-man-medium-skin-tone-light-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    name: 'couple-with-heart-woman-man-medium-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    name: 'couple-with-heart-woman-man-medium-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    name: 'couple-with-heart-woman-woman',
    code: '1f469-200d-2764-fe0f-200d-1f469'
  },
  {
    name: 'couple-with-heart-woman-woman-dark-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff'
  },
  {
    name: 'couple-with-heart-woman-woman-dark-skin-tone-light-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb'
  },
  {
    name: 'couple-with-heart-woman-woman-dark-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe'
  },
  {
    name: 'couple-with-heart-woman-woman-dark-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc'
  },
  {
    name: 'couple-with-heart-woman-woman-dark-skin-tone-medium-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd'
  },
  {
    name: 'couple-with-heart-woman-woman-light-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb'
  },
  {
    name: 'couple-with-heart-woman-woman-light-skin-tone-dark-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff'
  },
  {
    name: 'couple-with-heart-woman-woman-light-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe'
  },
  {
    name: 'couple-with-heart-woman-woman-light-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc'
  },
  {
    name: 'couple-with-heart-woman-woman-light-skin-tone-medium-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-dark-skin-tone-dark-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-dark-skin-tone-light-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-dark-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-dark-skin-tone-medium-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-light-skin-tone-dark-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-light-skin-tone-light-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-light-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-light-skin-tone-medium-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-skin-tone-dark-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-skin-tone-light-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe'
  },
  {
    name: 'couple-with-heart-woman-woman-medium-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc'
  },
  {
    name: 'cow',
    code: '1f404'
  },
  {
    name: 'cow-face',
    code: '1f42e'
  },
  {
    name: 'cowboy-hat-face',
    code: '1f920'
  },
  {
    name: 'crab',
    code: '1f980'
  },
  {
    name: 'crayon',
    code: '1f58d'
  },
  {
    name: 'credit-card',
    code: '1f4b3'
  },
  {
    name: 'crescent-moon',
    code: '1f319'
  },
  {
    name: 'cricket',
    code: '1f997'
  },
  {
    name: 'cricket-game',
    code: '1f3cf'
  },
  {
    name: 'crocodile',
    code: '1f40a'
  },
  {
    name: 'croissant',
    code: '1f950'
  },
  {
    name: 'cross-mark',
    code: '274c'
  },
  {
    name: 'cross-mark-button',
    code: '274e'
  },
  {
    name: 'crossed-fingers',
    code: '1f91e'
  },
  {
    name: 'crossed-fingers-dark-skin-tone',
    code: '1f91e-1f3ff'
  },
  {
    name: 'crossed-fingers-light-skin-tone',
    code: '1f91e-1f3fb'
  },
  {
    name: 'crossed-fingers-medium-dark-skin-tone',
    code: '1f91e-1f3fe'
  },
  {
    name: 'crossed-fingers-medium-light-skin-tone',
    code: '1f91e-1f3fc'
  },
  {
    name: 'crossed-fingers-medium-skin-tone',
    code: '1f91e-1f3fd'
  },
  {
    name: 'crossed-flags',
    code: '1f38c'
  },
  {
    name: 'crossed-swords',
    code: '2694'
  },
  {
    name: 'crown',
    code: '1f451'
  },
  {
    name: 'crying-cat',
    code: '1f63f'
  },
  {
    name: 'crying-face',
    code: '1f622'
  },
  {
    name: 'crystal-ball',
    code: '1f52e'
  },
  {
    name: 'cucumber',
    code: '1f952'
  },
  {
    name: 'cup-with-straw',
    code: '1f964'
  },
  {
    name: 'cupcake',
    code: '1f9c1'
  },
  {
    name: 'curling-stone',
    code: '1f94c'
  },
  {
    name: 'curly-hair',
    code: '1f9b1'
  },
  {
    name: 'curly-loop',
    code: '27b0'
  },
  {
    name: 'currency-exchange',
    code: '1f4b1'
  },
  {
    name: 'curry-rice',
    code: '1f35b'
  },
  {
    name: 'custard',
    code: '1f36e'
  },
  {
    name: 'customs',
    code: '1f6c3'
  },
  {
    name: 'cut-of-meat',
    code: '1f969'
  },
  {
    name: 'cyclone',
    code: '1f300'
  },
  {
    name: 'dagger',
    code: '1f5e1'
  },
  {
    name: 'dango',
    code: '1f361'
  },
  {
    name: 'dark-skin-tone',
    code: '1f3ff'
  },
  {
    name: 'dashing-away',
    code: '1f4a8'
  },
  {
    name: 'deaf-man',
    code: '1f9cf-200d-2642-fe0f'
  },
  {
    name: 'deaf-man-dark-skin-tone',
    code: '1f9cf-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'deaf-man-light-skin-tone',
    code: '1f9cf-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'deaf-man-medium-dark-skin-tone',
    code: '1f9cf-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'deaf-man-medium-light-skin-tone',
    code: '1f9cf-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'deaf-man-medium-skin-tone',
    code: '1f9cf-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'deaf-person',
    code: '1f9cf'
  },
  {
    name: 'deaf-person-dark-skin-tone',
    code: '1f9cf-1f3ff'
  },
  {
    name: 'deaf-person-light-skin-tone',
    code: '1f9cf-1f3fb'
  },
  {
    name: 'deaf-person-medium-dark-skin-tone',
    code: '1f9cf-1f3fe'
  },
  {
    name: 'deaf-person-medium-light-skin-tone',
    code: '1f9cf-1f3fc'
  },
  {
    name: 'deaf-person-medium-skin-tone',
    code: '1f9cf-1f3fd'
  },
  {
    name: 'deaf-woman',
    code: '1f9cf-200d-2640-fe0f'
  },
  {
    name: 'deaf-woman-dark-skin-tone',
    code: '1f9cf-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'deaf-woman-light-skin-tone',
    code: '1f9cf-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'deaf-woman-medium-dark-skin-tone',
    code: '1f9cf-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'deaf-woman-medium-light-skin-tone',
    code: '1f9cf-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'deaf-woman-medium-skin-tone',
    code: '1f9cf-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'deciduous-tree',
    code: '1f333'
  },
  {
    name: 'deer',
    code: '1f98c'
  },
  {
    name: 'delivery-truck',
    code: '1f69a'
  },
  {
    name: 'department-store',
    code: '1f3ec'
  },
  {
    name: 'derelict-house',
    code: '1f3da'
  },
  {
    name: 'desert',
    code: '1f3dc'
  },
  {
    name: 'desert-island',
    code: '1f3dd'
  },
  {
    name: 'desktop-computer',
    code: '1f5a5'
  },
  {
    name: 'detective',
    code: '1f575'
  },
  {
    name: 'detective-dark-skin-tone',
    code: '1f575-1f3ff'
  },
  {
    name: 'detective-light-skin-tone',
    code: '1f575-1f3fb'
  },
  {
    name: 'detective-medium-dark-skin-tone',
    code: '1f575-1f3fe'
  },
  {
    name: 'detective-medium-light-skin-tone',
    code: '1f575-1f3fc'
  },
  {
    name: 'detective-medium-skin-tone',
    code: '1f575-1f3fd'
  },
  {
    name: 'diamond-suit',
    code: '2666'
  },
  {
    name: 'diamond-with-a-dot',
    code: '1f4a0'
  },
  {
    name: 'dim-button',
    code: '1f505'
  },
  {
    name: 'disappointed-face',
    code: '1f61e'
  },
  {
    name: 'disguised-face',
    code: '1f978'
  },
  {
    name: 'divide',
    code: '2797'
  },
  {
    name: 'diving-mask',
    code: '1f93f'
  },
  {
    name: 'diya-lamp',
    code: '1fa94'
  },
  {
    name: 'dizzy',
    code: '1f4ab'
  },
  {
    name: 'dna',
    code: '1f9ec'
  },
  {
    name: 'dodo',
    code: '1f9a4'
  },
  {
    name: 'dog',
    code: '1f415'
  },
  {
    name: 'dog-face',
    code: '1f436'
  },
  {
    name: 'dollar-banknote',
    code: '1f4b5'
  },
  {
    name: 'dolphin',
    code: '1f42c'
  },
  {
    name: 'door',
    code: '1f6aa'
  },
  {
    name: 'dotted-six-pointed-star',
    code: '1f52f'
  },
  {
    name: 'double-curly-loop',
    code: '27bf'
  },
  {
    name: 'double-exclamation-mark',
    code: '203c'
  },
  {
    name: 'doughnut',
    code: '1f369'
  },
  {
    name: 'dove',
    code: '1f54a'
  },
  {
    name: 'down-arrow',
    code: '2b07'
  },
  {
    name: 'down-left-arrow',
    code: '2199'
  },
  {
    name: 'down-right-arrow',
    code: '2198'
  },
  {
    name: 'downcast-face-with-sweat',
    code: '1f613'
  },
  {
    name: 'downwards-button',
    code: '1f53d'
  },
  {
    name: 'dragon',
    code: '1f409'
  },
  {
    name: 'dragon-face',
    code: '1f432'
  },
  {
    name: 'dress',
    code: '1f457'
  },
  {
    name: 'drooling-face',
    code: '1f924'
  },
  {
    name: 'drop-of-blood',
    code: '1fa78'
  },
  {
    name: 'droplet',
    code: '1f4a7'
  },
  {
    name: 'drum',
    code: '1f941'
  },
  {
    name: 'duck',
    code: '1f986'
  },
  {
    name: 'dumpling',
    code: '1f95f'
  },
  {
    name: 'dvd',
    code: '1f4c0'
  },
  {
    name: 'e-mail',
    code: '1f4e7'
  },
  {
    name: 'eagle',
    code: '1f985'
  },
  {
    name: 'ear',
    code: '1f442'
  },
  {
    name: 'ear-dark-skin-tone',
    code: '1f442-1f3ff'
  },
  {
    name: 'ear-light-skin-tone',
    code: '1f442-1f3fb'
  },
  {
    name: 'ear-medium-dark-skin-tone',
    code: '1f442-1f3fe'
  },
  {
    name: 'ear-medium-light-skin-tone',
    code: '1f442-1f3fc'
  },
  {
    name: 'ear-medium-skin-tone',
    code: '1f442-1f3fd'
  },
  {
    name: 'ear-of-corn',
    code: '1f33d'
  },
  {
    name: 'ear-with-hearing-aid',
    code: '1f9bb'
  },
  {
    name: 'ear-with-hearing-aid-dark-skin-tone',
    code: '1f9bb-1f3ff'
  },
  {
    name: 'ear-with-hearing-aid-light-skin-tone',
    code: '1f9bb-1f3fb'
  },
  {
    name: 'ear-with-hearing-aid-medium-dark-skin-tone',
    code: '1f9bb-1f3fe'
  },
  {
    name: 'ear-with-hearing-aid-medium-light-skin-tone',
    code: '1f9bb-1f3fc'
  },
  {
    name: 'ear-with-hearing-aid-medium-skin-tone',
    code: '1f9bb-1f3fd'
  },
  {
    name: 'egg',
    code: '1f95a'
  },
  {
    name: 'eggplant',
    code: '1f346'
  },
  {
    name: 'eight-o-clock',
    code: '1f557'
  },
  {
    name: 'eight-pointed-star',
    code: '2734'
  },
  {
    name: 'eight-spoked-asterisk',
    code: '2733'
  },
  {
    name: 'eight-thirty',
    code: '1f563'
  },
  {
    name: 'eject-button',
    code: '23cf'
  },
  {
    name: 'electric-plug',
    code: '1f50c'
  },
  {
    name: 'elephant',
    code: '1f418'
  },
  {
    name: 'elevator',
    code: '1f6d7'
  },
  {
    name: 'eleven-o-clock',
    code: '1f55a'
  },
  {
    name: 'eleven-thirty',
    code: '1f566'
  },
  {
    name: 'elf',
    code: '1f9dd'
  },
  {
    name: 'elf-dark-skin-tone',
    code: '1f9dd-1f3ff'
  },
  {
    name: 'elf-light-skin-tone',
    code: '1f9dd-1f3fb'
  },
  {
    name: 'elf-medium-dark-skin-tone',
    code: '1f9dd-1f3fe'
  },
  {
    name: 'elf-medium-light-skin-tone',
    code: '1f9dd-1f3fc'
  },
  {
    name: 'elf-medium-skin-tone',
    code: '1f9dd-1f3fd'
  },
  {
    name: 'end-arrow',
    code: '1f51a'
  },
  {
    name: 'envelope',
    code: '2709'
  },
  {
    name: 'envelope-with-arrow',
    code: '1f4e9'
  },
  {
    name: 'euro-banknote',
    code: '1f4b6'
  },
  {
    name: 'evergreen-tree',
    code: '1f332'
  },
  {
    name: 'ewe',
    code: '1f411'
  },
  {
    name: 'exclamation-question-mark',
    code: '2049'
  },
  {
    name: 'exploding-head',
    code: '1f92f'
  },
  {
    name: 'expressionless-face',
    code: '1f611'
  },
  {
    name: 'eye',
    code: '1f441'
  },
  {
    name: 'eye-in-speech-bubble',
    code: '1f441-200d-1f5e8'
  },
  {
    name: 'eyes',
    code: '1f440'
  },
  {
    name: 'face-blowing-a-kiss',
    code: '1f618'
  },
  {
    name: 'face-exhaling',
    code: '1f62e-200d-1f4a8'
  },
  {
    name: 'face-in-clouds',
    code: '1f636-200d-1f32b-fe0f'
  },
  {
    name: 'face-savoring-food',
    code: '1f60b'
  },
  {
    name: 'face-screaming-in-fear',
    code: '1f631'
  },
  {
    name: 'face-vomiting',
    code: '1f92e'
  },
  {
    name: 'face-with-hand-over-mouth',
    code: '1f92d'
  },
  {
    name: 'face-with-head-bandage',
    code: '1f915'
  },
  {
    name: 'face-with-medical-mask',
    code: '1f637'
  },
  {
    name: 'face-with-monocle',
    code: '1f9d0'
  },
  {
    name: 'face-with-open-mouth',
    code: '1f62e'
  },
  {
    name: 'face-with-raised-eyebrow',
    code: '1f928'
  },
  {
    name: 'face-with-rolling-eyes',
    code: '1f644'
  },
  {
    name: 'face-with-spiral-eyes',
    code: '1f635-200d-1f4ab'
  },
  {
    name: 'face-with-steam-from-nose',
    code: '1f624'
  },
  {
    name: 'face-with-symbols-on-mouth',
    code: '1f92c'
  },
  {
    name: 'face-with-tears-of-joy',
    code: '1f602'
  },
  {
    name: 'face-with-thermometer',
    code: '1f912'
  },
  {
    name: 'face-with-tongue',
    code: '1f61b'
  },
  {
    name: 'face-without-mouth',
    code: '1f636'
  },
  {
    name: 'factory',
    code: '1f3ed'
  },
  {
    name: 'factory-worker',
    code: '1f9d1-200d-1f3ed'
  },
  {
    name: 'factory-worker-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f3ed'
  },
  {
    name: 'factory-worker-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f3ed'
  },
  {
    name: 'factory-worker-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f3ed'
  },
  {
    name: 'factory-worker-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f3ed'
  },
  {
    name: 'factory-worker-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f3ed'
  },
  {
    name: 'fairy',
    code: '1f9da'
  },
  {
    name: 'fairy-dark-skin-tone',
    code: '1f9da-1f3ff'
  },
  {
    name: 'fairy-light-skin-tone',
    code: '1f9da-1f3fb'
  },
  {
    name: 'fairy-medium-dark-skin-tone',
    code: '1f9da-1f3fe'
  },
  {
    name: 'fairy-medium-light-skin-tone',
    code: '1f9da-1f3fc'
  },
  {
    name: 'fairy-medium-skin-tone',
    code: '1f9da-1f3fd'
  },
  {
    name: 'falafel',
    code: '1f9c6'
  },
  {
    name: 'fallen-leaf',
    code: '1f342'
  },
  {
    name: 'family',
    code: '1f46a'
  },
  {
    name: 'family-man-boy',
    code: '1f468-200d-1f466'
  },
  {
    name: 'family-man-boy-boy',
    code: '1f468-200d-1f466-200d-1f466'
  },
  {
    name: 'family-man-girl',
    code: '1f468-200d-1f467'
  },
  {
    name: 'family-man-girl-boy',
    code: '1f468-200d-1f467-200d-1f466'
  },
  {
    name: 'family-man-girl-girl',
    code: '1f468-200d-1f467-200d-1f467'
  },
  {
    name: 'family-man-man-boy',
    code: '1f468-200d-1f468-200d-1f466'
  },
  {
    name: 'family-man-man-boy-boy',
    code: '1f468-200d-1f468-200d-1f466-200d-1f466'
  },
  {
    name: 'family-man-man-girl',
    code: '1f468-200d-1f468-200d-1f467'
  },
  {
    name: 'family-man-man-girl-boy',
    code: '1f468-200d-1f468-200d-1f467-200d-1f466'
  },
  {
    name: 'family-man-man-girl-girl',
    code: '1f468-200d-1f468-200d-1f467-200d-1f467'
  },
  {
    name: 'family-man-woman-boy',
    code: '1f468-200d-1f469-200d-1f466'
  },
  {
    name: 'family-man-woman-boy-boy',
    code: '1f468-200d-1f469-200d-1f466-200d-1f466'
  },
  {
    name: 'family-man-woman-girl',
    code: '1f468-200d-1f469-200d-1f467'
  },
  {
    name: 'family-man-woman-girl-boy',
    code: '1f468-200d-1f469-200d-1f467-200d-1f466'
  },
  {
    name: 'family-man-woman-girl-girl',
    code: '1f468-200d-1f469-200d-1f467-200d-1f467'
  },
  {
    name: 'family-woman-boy',
    code: '1f469-200d-1f466'
  },
  {
    name: 'family-woman-boy-boy',
    code: '1f469-200d-1f466-200d-1f466'
  },
  {
    name: 'family-woman-girl',
    code: '1f469-200d-1f467'
  },
  {
    name: 'family-woman-girl-boy',
    code: '1f469-200d-1f467-200d-1f466'
  },
  {
    name: 'family-woman-girl-girl',
    code: '1f469-200d-1f467-200d-1f467'
  },
  {
    name: 'family-woman-woman-boy',
    code: '1f469-200d-1f469-200d-1f466'
  },
  {
    name: 'family-woman-woman-boy-boy',
    code: '1f469-200d-1f469-200d-1f466-200d-1f466'
  },
  {
    name: 'family-woman-woman-girl',
    code: '1f469-200d-1f469-200d-1f467'
  },
  {
    name: 'family-woman-woman-girl-boy',
    code: '1f469-200d-1f469-200d-1f467-200d-1f466'
  },
  {
    name: 'family-woman-woman-girl-girl',
    code: '1f469-200d-1f469-200d-1f467-200d-1f467'
  },
  {
    name: 'farmer',
    code: '1f9d1-200d-1f33e'
  },
  {
    name: 'farmer-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f33e'
  },
  {
    name: 'farmer-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f33e'
  },
  {
    name: 'farmer-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f33e'
  },
  {
    name: 'farmer-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f33e'
  },
  {
    name: 'farmer-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f33e'
  },
  {
    name: 'fast-down-button',
    code: '23ec'
  },
  {
    name: 'fast-forward-button',
    code: '23e9'
  },
  {
    name: 'fast-reverse-button',
    code: '23ea'
  },
  {
    name: 'fast-up-button',
    code: '23eb'
  },
  {
    name: 'fax-machine',
    code: '1f4e0'
  },
  {
    name: 'fearful-face',
    code: '1f628'
  },
  {
    name: 'feather',
    code: '1fab6'
  },
  {
    name: 'female-sign',
    code: '2640'
  },
  {
    name: 'ferris-wheel',
    code: '1f3a1'
  },
  {
    name: 'ferry',
    code: '26f4'
  },
  {
    name: 'field-hockey',
    code: '1f3d1'
  },
  {
    name: 'file-cabinet',
    code: '1f5c4'
  },
  {
    name: 'file-folder',
    code: '1f4c1'
  },
  {
    name: 'film-frames',
    code: '1f39e'
  },
  {
    name: 'film-projector',
    code: '1f4fd'
  },
  {
    name: 'fire',
    code: '1f525'
  },
  {
    name: 'fire-engine',
    code: '1f692'
  },
  {
    name: 'fire-extinguisher',
    code: '1f9ef'
  },
  {
    name: 'firecracker',
    code: '1f9e8'
  },
  {
    name: 'firefighter',
    code: '1f9d1-200d-1f692'
  },
  {
    name: 'firefighter-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f692'
  },
  {
    name: 'firefighter-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f692'
  },
  {
    name: 'firefighter-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f692'
  },
  {
    name: 'firefighter-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f692'
  },
  {
    name: 'firefighter-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f692'
  },
  {
    name: 'fireworks',
    code: '1f386'
  },
  {
    name: 'first-quarter-moon',
    code: '1f313'
  },
  {
    name: 'first-quarter-moon-face',
    code: '1f31b'
  },
  {
    name: 'fish',
    code: '1f41f'
  },
  {
    name: 'fish-cake-with-swirl',
    code: '1f365'
  },
  {
    name: 'fishing-pole',
    code: '1f3a3'
  },
  {
    name: 'five-o-clock',
    code: '1f554'
  },
  {
    name: 'five-thirty',
    code: '1f560'
  },
  {
    name: 'flag-afghanistan',
    code: '1f1e6-1f1eb'
  },
  {
    name: 'flag-albania',
    code: '1f1e6-1f1f1'
  },
  {
    name: 'flag-algeria',
    code: '1f1e9-1f1ff'
  },
  {
    name: 'flag-american-samoa',
    code: '1f1e6-1f1f8'
  },
  {
    name: 'flag-andorra',
    code: '1f1e6-1f1e9'
  },
  {
    name: 'flag-angola',
    code: '1f1e6-1f1f4'
  },
  {
    name: 'flag-anguilla',
    code: '1f1e6-1f1ee'
  },
  {
    name: 'flag-antarctica',
    code: '1f1e6-1f1f6'
  },
  {
    name: 'flag-antigua-barbuda',
    code: '1f1e6-1f1ec'
  },
  {
    name: 'flag-argentina',
    code: '1f1e6-1f1f7'
  },
  {
    name: 'flag-armenia',
    code: '1f1e6-1f1f2'
  },
  {
    name: 'flag-aruba',
    code: '1f1e6-1f1fc'
  },
  {
    name: 'flag-ascension-island',
    code: '1f1e6-1f1e8'
  },
  {
    name: 'flag-australia',
    code: '1f1e6-1f1fa'
  },
  {
    name: 'flag-austria',
    code: '1f1e6-1f1f9'
  },
  {
    name: 'flag-azerbaijan',
    code: '1f1e6-1f1ff'
  },
  {
    name: 'flag-bahamas',
    code: '1f1e7-1f1f8'
  },
  {
    name: 'flag-bahrain',
    code: '1f1e7-1f1ed'
  },
  {
    name: 'flag-bangladesh',
    code: '1f1e7-1f1e9'
  },
  {
    name: 'flag-barbados',
    code: '1f1e7-1f1e7'
  },
  {
    name: 'flag-belarus',
    code: '1f1e7-1f1fe'
  },
  {
    name: 'flag-belgium',
    code: '1f1e7-1f1ea'
  },
  {
    name: 'flag-belize',
    code: '1f1e7-1f1ff'
  },
  {
    name: 'flag-benin',
    code: '1f1e7-1f1ef'
  },
  {
    name: 'flag-bermuda',
    code: '1f1e7-1f1f2'
  },
  {
    name: 'flag-bhutan',
    code: '1f1e7-1f1f9'
  },
  {
    name: 'flag-bolivia',
    code: '1f1e7-1f1f4'
  },
  {
    name: 'flag-bosnia-herzegovina',
    code: '1f1e7-1f1e6'
  },
  {
    name: 'flag-botswana',
    code: '1f1e7-1f1fc'
  },
  {
    name: 'flag-bouvet-island',
    code: '1f1e7-1f1fb'
  },
  {
    name: 'flag-brazil',
    code: '1f1e7-1f1f7'
  },
  {
    name: 'flag-british-indian-ocean-territory',
    code: '1f1ee-1f1f4'
  },
  {
    name: 'flag-british-virgin-islands',
    code: '1f1fb-1f1ec'
  },
  {
    name: 'flag-brunei',
    code: '1f1e7-1f1f3'
  },
  {
    name: 'flag-bulgaria',
    code: '1f1e7-1f1ec'
  },
  {
    name: 'flag-burkina-faso',
    code: '1f1e7-1f1eb'
  },
  {
    name: 'flag-burundi',
    code: '1f1e7-1f1ee'
  },
  {
    name: 'flag-c-te-d-ivoire',
    code: '1f1e8-1f1ee'
  },
  {
    name: 'flag-cambodia',
    code: '1f1f0-1f1ed'
  },
  {
    name: 'flag-cameroon',
    code: '1f1e8-1f1f2'
  },
  {
    name: 'flag-canada',
    code: '1f1e8-1f1e6'
  },
  {
    name: 'flag-canary-islands',
    code: '1f1ee-1f1e8'
  },
  {
    name: 'flag-cape-verde',
    code: '1f1e8-1f1fb'
  },
  {
    name: 'flag-caribbean-netherlands',
    code: '1f1e7-1f1f6'
  },
  {
    name: 'flag-cayman-islands',
    code: '1f1f0-1f1fe'
  },
  {
    name: 'flag-central-african-republic',
    code: '1f1e8-1f1eb'
  },
  {
    name: 'flag-ceuta-melilla',
    code: '1f1ea-1f1e6'
  },
  {
    name: 'flag-chad',
    code: '1f1f9-1f1e9'
  },
  {
    name: 'flag-chile',
    code: '1f1e8-1f1f1'
  },
  {
    name: 'flag-china',
    code: '1f1e8-1f1f3'
  },
  {
    name: 'flag-christmas-island',
    code: '1f1e8-1f1fd'
  },
  {
    name: 'flag-clipperton-island',
    code: '1f1e8-1f1f5'
  },
  {
    name: 'flag-cocos-keeling-islands',
    code: '1f1e8-1f1e8'
  },
  {
    name: 'flag-colombia',
    code: '1f1e8-1f1f4'
  },
  {
    name: 'flag-comoros',
    code: '1f1f0-1f1f2'
  },
  {
    name: 'flag-congo-brazzaville',
    code: '1f1e8-1f1ec'
  },
  {
    name: 'flag-congo-kinshasa',
    code: '1f1e8-1f1e9'
  },
  {
    name: 'flag-cook-islands',
    code: '1f1e8-1f1f0'
  },
  {
    name: 'flag-costa-rica',
    code: '1f1e8-1f1f7'
  },
  {
    name: 'flag-croatia',
    code: '1f1ed-1f1f7'
  },
  {
    name: 'flag-cuba',
    code: '1f1e8-1f1fa'
  },
  {
    name: 'flag-cura-ao',
    code: '1f1e8-1f1fc'
  },
  {
    name: 'flag-cyprus',
    code: '1f1e8-1f1fe'
  },
  {
    name: 'flag-czechia',
    code: '1f1e8-1f1ff'
  },
  {
    name: 'flag-denmark',
    code: '1f1e9-1f1f0'
  },
  {
    name: 'flag-diego-garcia',
    code: '1f1e9-1f1ec'
  },
  {
    name: 'flag-djibouti',
    code: '1f1e9-1f1ef'
  },
  {
    name: 'flag-dominica',
    code: '1f1e9-1f1f2'
  },
  {
    name: 'flag-dominican-republic',
    code: '1f1e9-1f1f4'
  },
  {
    name: 'flag-ecuador',
    code: '1f1ea-1f1e8'
  },
  {
    name: 'flag-egypt',
    code: '1f1ea-1f1ec'
  },
  {
    name: 'flag-el-salvador',
    code: '1f1f8-1f1fb'
  },
  {
    name: 'flag-england',
    code: '1f3f4-e0067-e0062-e0065-e006e-e0067-e007f'
  },
  {
    name: 'flag-equatorial-guinea',
    code: '1f1ec-1f1f6'
  },
  {
    name: 'flag-eritrea',
    code: '1f1ea-1f1f7'
  },
  {
    name: 'flag-estonia',
    code: '1f1ea-1f1ea'
  },
  {
    name: 'flag-eswatini',
    code: '1f1f8-1f1ff'
  },
  {
    name: 'flag-ethiopia',
    code: '1f1ea-1f1f9'
  },
  {
    name: 'flag-european-union',
    code: '1f1ea-1f1fa'
  },
  {
    name: 'flag-falkland-islands',
    code: '1f1eb-1f1f0'
  },
  {
    name: 'flag-faroe-islands',
    code: '1f1eb-1f1f4'
  },
  {
    name: 'flag-fiji',
    code: '1f1eb-1f1ef'
  },
  {
    name: 'flag-finland',
    code: '1f1eb-1f1ee'
  },
  {
    name: 'flag-france',
    code: '1f1eb-1f1f7'
  },
  {
    name: 'flag-french-guiana',
    code: '1f1ec-1f1eb'
  },
  {
    name: 'flag-french-polynesia',
    code: '1f1f5-1f1eb'
  },
  {
    name: 'flag-french-southern-territories',
    code: '1f1f9-1f1eb'
  },
  {
    name: 'flag-gabon',
    code: '1f1ec-1f1e6'
  },
  {
    name: 'flag-gambia',
    code: '1f1ec-1f1f2'
  },
  {
    name: 'flag-georgia',
    code: '1f1ec-1f1ea'
  },
  {
    name: 'flag-germany',
    code: '1f1e9-1f1ea'
  },
  {
    name: 'flag-ghana',
    code: '1f1ec-1f1ed'
  },
  {
    name: 'flag-gibraltar',
    code: '1f1ec-1f1ee'
  },
  {
    name: 'flag-greece',
    code: '1f1ec-1f1f7'
  },
  {
    name: 'flag-greenland',
    code: '1f1ec-1f1f1'
  },
  {
    name: 'flag-grenada',
    code: '1f1ec-1f1e9'
  },
  {
    name: 'flag-guadeloupe',
    code: '1f1ec-1f1f5'
  },
  {
    name: 'flag-guam',
    code: '1f1ec-1f1fa'
  },
  {
    name: 'flag-guatemala',
    code: '1f1ec-1f1f9'
  },
  {
    name: 'flag-guernsey',
    code: '1f1ec-1f1ec'
  },
  {
    name: 'flag-guinea',
    code: '1f1ec-1f1f3'
  },
  {
    name: 'flag-guinea-bissau',
    code: '1f1ec-1f1fc'
  },
  {
    name: 'flag-guyana',
    code: '1f1ec-1f1fe'
  },
  {
    name: 'flag-haiti',
    code: '1f1ed-1f1f9'
  },
  {
    name: 'flag-heard-mcdonald-islands',
    code: '1f1ed-1f1f2'
  },
  {
    name: 'flag-honduras',
    code: '1f1ed-1f1f3'
  },
  {
    name: 'flag-hong-kong-sar-china',
    code: '1f1ed-1f1f0'
  },
  {
    name: 'flag-hungary',
    code: '1f1ed-1f1fa'
  },
  {
    name: 'flag-iceland',
    code: '1f1ee-1f1f8'
  },
  {
    name: 'flag-in-hole',
    code: '26f3'
  },
  {
    name: 'flag-india',
    code: '1f1ee-1f1f3'
  },
  {
    name: 'flag-indonesia',
    code: '1f1ee-1f1e9'
  },
  {
    name: 'flag-iran',
    code: '1f1ee-1f1f7'
  },
  {
    name: 'flag-iraq',
    code: '1f1ee-1f1f6'
  },
  {
    name: 'flag-ireland',
    code: '1f1ee-1f1ea'
  },
  {
    name: 'flag-isle-of-man',
    code: '1f1ee-1f1f2'
  },
  {
    name: 'flag-israel',
    code: '1f1ee-1f1f1'
  },
  {
    name: 'flag-italy',
    code: '1f1ee-1f1f9'
  },
  {
    name: 'flag-jamaica',
    code: '1f1ef-1f1f2'
  },
  {
    name: 'flag-japan',
    code: '1f1ef-1f1f5'
  },
  {
    name: 'flag-jersey',
    code: '1f1ef-1f1ea'
  },
  {
    name: 'flag-jordan',
    code: '1f1ef-1f1f4'
  },
  {
    name: 'flag-kazakhstan',
    code: '1f1f0-1f1ff'
  },
  {
    name: 'flag-kenya',
    code: '1f1f0-1f1ea'
  },
  {
    name: 'flag-kiribati',
    code: '1f1f0-1f1ee'
  },
  {
    name: 'flag-kosovo',
    code: '1f1fd-1f1f0'
  },
  {
    name: 'flag-kuwait',
    code: '1f1f0-1f1fc'
  },
  {
    name: 'flag-kyrgyzstan',
    code: '1f1f0-1f1ec'
  },
  {
    name: 'flag-land-islands',
    code: '1f1e6-1f1fd'
  },
  {
    name: 'flag-laos',
    code: '1f1f1-1f1e6'
  },
  {
    name: 'flag-latvia',
    code: '1f1f1-1f1fb'
  },
  {
    name: 'flag-lebanon',
    code: '1f1f1-1f1e7'
  },
  {
    name: 'flag-lesotho',
    code: '1f1f1-1f1f8'
  },
  {
    name: 'flag-liberia',
    code: '1f1f1-1f1f7'
  },
  {
    name: 'flag-libya',
    code: '1f1f1-1f1fe'
  },
  {
    name: 'flag-liechtenstein',
    code: '1f1f1-1f1ee'
  },
  {
    name: 'flag-lithuania',
    code: '1f1f1-1f1f9'
  },
  {
    name: 'flag-luxembourg',
    code: '1f1f1-1f1fa'
  },
  {
    name: 'flag-macao-sar-china',
    code: '1f1f2-1f1f4'
  },
  {
    name: 'flag-madagascar',
    code: '1f1f2-1f1ec'
  },
  {
    name: 'flag-malawi',
    code: '1f1f2-1f1fc'
  },
  {
    name: 'flag-malaysia',
    code: '1f1f2-1f1fe'
  },
  {
    name: 'flag-maldives',
    code: '1f1f2-1f1fb'
  },
  {
    name: 'flag-mali',
    code: '1f1f2-1f1f1'
  },
  {
    name: 'flag-malta',
    code: '1f1f2-1f1f9'
  },
  {
    name: 'flag-marshall-islands',
    code: '1f1f2-1f1ed'
  },
  {
    name: 'flag-martinique',
    code: '1f1f2-1f1f6'
  },
  {
    name: 'flag-mauritania',
    code: '1f1f2-1f1f7'
  },
  {
    name: 'flag-mauritius',
    code: '1f1f2-1f1fa'
  },
  {
    name: 'flag-mayotte',
    code: '1f1fe-1f1f9'
  },
  {
    name: 'flag-mexico',
    code: '1f1f2-1f1fd'
  },
  {
    name: 'flag-micronesia',
    code: '1f1eb-1f1f2'
  },
  {
    name: 'flag-moldova',
    code: '1f1f2-1f1e9'
  },
  {
    name: 'flag-monaco',
    code: '1f1f2-1f1e8'
  },
  {
    name: 'flag-mongolia',
    code: '1f1f2-1f1f3'
  },
  {
    name: 'flag-montenegro',
    code: '1f1f2-1f1ea'
  },
  {
    name: 'flag-montserrat',
    code: '1f1f2-1f1f8'
  },
  {
    name: 'flag-morocco',
    code: '1f1f2-1f1e6'
  },
  {
    name: 'flag-mozambique',
    code: '1f1f2-1f1ff'
  },
  {
    name: 'flag-myanmar-burma',
    code: '1f1f2-1f1f2'
  },
  {
    name: 'flag-namibia',
    code: '1f1f3-1f1e6'
  },
  {
    name: 'flag-nauru',
    code: '1f1f3-1f1f7'
  },
  {
    name: 'flag-nepal',
    code: '1f1f3-1f1f5'
  },
  {
    name: 'flag-netherlands',
    code: '1f1f3-1f1f1'
  },
  {
    name: 'flag-new-caledonia',
    code: '1f1f3-1f1e8'
  },
  {
    name: 'flag-new-zealand',
    code: '1f1f3-1f1ff'
  },
  {
    name: 'flag-nicaragua',
    code: '1f1f3-1f1ee'
  },
  {
    name: 'flag-niger',
    code: '1f1f3-1f1ea'
  },
  {
    name: 'flag-nigeria',
    code: '1f1f3-1f1ec'
  },
  {
    name: 'flag-niue',
    code: '1f1f3-1f1fa'
  },
  {
    name: 'flag-norfolk-island',
    code: '1f1f3-1f1eb'
  },
  {
    name: 'flag-north-korea',
    code: '1f1f0-1f1f5'
  },
  {
    name: 'flag-north-macedonia',
    code: '1f1f2-1f1f0'
  },
  {
    name: 'flag-northern-mariana-islands',
    code: '1f1f2-1f1f5'
  },
  {
    name: 'flag-norway',
    code: '1f1f3-1f1f4'
  },
  {
    name: 'flag-oman',
    code: '1f1f4-1f1f2'
  },
  {
    name: 'flag-pakistan',
    code: '1f1f5-1f1f0'
  },
  {
    name: 'flag-palau',
    code: '1f1f5-1f1fc'
  },
  {
    name: 'flag-palestinian-territories',
    code: '1f1f5-1f1f8'
  },
  {
    name: 'flag-panama',
    code: '1f1f5-1f1e6'
  },
  {
    name: 'flag-papua-new-guinea',
    code: '1f1f5-1f1ec'
  },
  {
    name: 'flag-paraguay',
    code: '1f1f5-1f1fe'
  },
  {
    name: 'flag-peru',
    code: '1f1f5-1f1ea'
  },
  {
    name: 'flag-philippines',
    code: '1f1f5-1f1ed'
  },
  {
    name: 'flag-pitcairn-islands',
    code: '1f1f5-1f1f3'
  },
  {
    name: 'flag-poland',
    code: '1f1f5-1f1f1'
  },
  {
    name: 'flag-portugal',
    code: '1f1f5-1f1f9'
  },
  {
    name: 'flag-puerto-rico',
    code: '1f1f5-1f1f7'
  },
  {
    name: 'flag-qatar',
    code: '1f1f6-1f1e6'
  },
  {
    name: 'flag-r-union',
    code: '1f1f7-1f1ea'
  },
  {
    name: 'flag-romania',
    code: '1f1f7-1f1f4'
  },
  {
    name: 'flag-russia',
    code: '1f1f7-1f1fa'
  },
  {
    name: 'flag-rwanda',
    code: '1f1f7-1f1fc'
  },
  {
    name: 'flag-s-o-tom-pr-ncipe',
    code: '1f1f8-1f1f9'
  },
  {
    name: 'flag-samoa',
    code: '1f1fc-1f1f8'
  },
  {
    name: 'flag-san-marino',
    code: '1f1f8-1f1f2'
  },
  {
    name: 'flag-saudi-arabia',
    code: '1f1f8-1f1e6'
  },
  {
    name: 'flag-scotland',
    code: '1f3f4-e0067-e0062-e0073-e0063-e0074-e007f'
  },
  {
    name: 'flag-senegal',
    code: '1f1f8-1f1f3'
  },
  {
    name: 'flag-serbia',
    code: '1f1f7-1f1f8'
  },
  {
    name: 'flag-seychelles',
    code: '1f1f8-1f1e8'
  },
  {
    name: 'flag-sierra-leone',
    code: '1f1f8-1f1f1'
  },
  {
    name: 'flag-singapore',
    code: '1f1f8-1f1ec'
  },
  {
    name: 'flag-sint-maarten',
    code: '1f1f8-1f1fd'
  },
  {
    name: 'flag-slovakia',
    code: '1f1f8-1f1f0'
  },
  {
    name: 'flag-slovenia',
    code: '1f1f8-1f1ee'
  },
  {
    name: 'flag-solomon-islands',
    code: '1f1f8-1f1e7'
  },
  {
    name: 'flag-somalia',
    code: '1f1f8-1f1f4'
  },
  {
    name: 'flag-south-africa',
    code: '1f1ff-1f1e6'
  },
  {
    name: 'flag-south-georgia-south-sandwich-islands',
    code: '1f1ec-1f1f8'
  },
  {
    name: 'flag-south-korea',
    code: '1f1f0-1f1f7'
  },
  {
    name: 'flag-south-sudan',
    code: '1f1f8-1f1f8'
  },
  {
    name: 'flag-spain',
    code: '1f1ea-1f1f8'
  },
  {
    name: 'flag-sri-lanka',
    code: '1f1f1-1f1f0'
  },
  {
    name: 'flag-st-barth-lemy',
    code: '1f1e7-1f1f1'
  },
  {
    name: 'flag-st-helena',
    code: '1f1f8-1f1ed'
  },
  {
    name: 'flag-st-kitts-nevis',
    code: '1f1f0-1f1f3'
  },
  {
    name: 'flag-st-lucia',
    code: '1f1f1-1f1e8'
  },
  {
    name: 'flag-st-martin',
    code: '1f1f2-1f1eb'
  },
  {
    name: 'flag-st-pierre-miquelon',
    code: '1f1f5-1f1f2'
  },
  {
    name: 'flag-st-vincent-grenadines',
    code: '1f1fb-1f1e8'
  },
  {
    name: 'flag-sudan',
    code: '1f1f8-1f1e9'
  },
  {
    name: 'flag-suriname',
    code: '1f1f8-1f1f7'
  },
  {
    name: 'flag-svalbard-jan-mayen',
    code: '1f1f8-1f1ef'
  },
  {
    name: 'flag-sweden',
    code: '1f1f8-1f1ea'
  },
  {
    name: 'flag-switzerland',
    code: '1f1e8-1f1ed'
  },
  {
    name: 'flag-syria',
    code: '1f1f8-1f1fe'
  },
  {
    name: 'flag-taiwan',
    code: '1f1f9-1f1fc'
  },
  {
    name: 'flag-tajikistan',
    code: '1f1f9-1f1ef'
  },
  {
    name: 'flag-tanzania',
    code: '1f1f9-1f1ff'
  },
  {
    name: 'flag-thailand',
    code: '1f1f9-1f1ed'
  },
  {
    name: 'flag-timor-leste',
    code: '1f1f9-1f1f1'
  },
  {
    name: 'flag-togo',
    code: '1f1f9-1f1ec'
  },
  {
    name: 'flag-tokelau',
    code: '1f1f9-1f1f0'
  },
  {
    name: 'flag-tonga',
    code: '1f1f9-1f1f4'
  },
  {
    name: 'flag-trinidad-tobago',
    code: '1f1f9-1f1f9'
  },
  {
    name: 'flag-tristan-da-cunha',
    code: '1f1f9-1f1e6'
  },
  {
    name: 'flag-tunisia',
    code: '1f1f9-1f1f3'
  },
  {
    name: 'flag-turkey',
    code: '1f1f9-1f1f7'
  },
  {
    name: 'flag-turkmenistan',
    code: '1f1f9-1f1f2'
  },
  {
    name: 'flag-turks-caicos-islands',
    code: '1f1f9-1f1e8'
  },
  {
    name: 'flag-tuvalu',
    code: '1f1f9-1f1fb'
  },
  {
    name: 'flag-u-s-outlying-islands',
    code: '1f1fa-1f1f2'
  },
  {
    name: 'flag-u-s-virgin-islands',
    code: '1f1fb-1f1ee'
  },
  {
    name: 'flag-uganda',
    code: '1f1fa-1f1ec'
  },
  {
    name: 'flag-ukraine',
    code: '1f1fa-1f1e6'
  },
  {
    name: 'flag-united-arab-emirates',
    code: '1f1e6-1f1ea'
  },
  {
    name: 'flag-united-kingdom',
    code: '1f1ec-1f1e7'
  },
  {
    name: 'flag-united-nations',
    code: '1f1fa-1f1f3'
  },
  {
    name: 'flag-united-states',
    code: '1f1fa-1f1f8'
  },
  {
    name: 'flag-uruguay',
    code: '1f1fa-1f1fe'
  },
  {
    name: 'flag-uzbekistan',
    code: '1f1fa-1f1ff'
  },
  {
    name: 'flag-vanuatu',
    code: '1f1fb-1f1fa'
  },
  {
    name: 'flag-vatican-city',
    code: '1f1fb-1f1e6'
  },
  {
    name: 'flag-venezuela',
    code: '1f1fb-1f1ea'
  },
  {
    name: 'flag-vietnam',
    code: '1f1fb-1f1f3'
  },
  {
    name: 'flag-wales',
    code: '1f3f4-e0067-e0062-e0077-e006c-e0073-e007f'
  },
  {
    name: 'flag-wallis-futuna',
    code: '1f1fc-1f1eb'
  },
  {
    name: 'flag-western-sahara',
    code: '1f1ea-1f1ed'
  },
  {
    name: 'flag-yemen',
    code: '1f1fe-1f1ea'
  },
  {
    name: 'flag-zambia',
    code: '1f1ff-1f1f2'
  },
  {
    name: 'flag-zimbabwe',
    code: '1f1ff-1f1fc'
  },
  {
    name: 'flamingo',
    code: '1f9a9'
  },
  {
    name: 'flashlight',
    code: '1f526'
  },
  {
    name: 'flat-shoe',
    code: '1f97f'
  },
  {
    name: 'flatbread',
    code: '1fad3'
  },
  {
    name: 'fleur-de-lis',
    code: '269c'
  },
  {
    name: 'flexed-biceps',
    code: '1f4aa'
  },
  {
    name: 'flexed-biceps-dark-skin-tone',
    code: '1f4aa-1f3ff'
  },
  {
    name: 'flexed-biceps-light-skin-tone',
    code: '1f4aa-1f3fb'
  },
  {
    name: 'flexed-biceps-medium-dark-skin-tone',
    code: '1f4aa-1f3fe'
  },
  {
    name: 'flexed-biceps-medium-light-skin-tone',
    code: '1f4aa-1f3fc'
  },
  {
    name: 'flexed-biceps-medium-skin-tone',
    code: '1f4aa-1f3fd'
  },
  {
    name: 'floppy-disk',
    code: '1f4be'
  },
  {
    name: 'flower-playing-cards',
    code: '1f3b4'
  },
  {
    name: 'flushed-face',
    code: '1f633'
  },
  {
    name: 'fly',
    code: '1fab0'
  },
  {
    name: 'flying-disc',
    code: '1f94f'
  },
  {
    name: 'flying-saucer',
    code: '1f6f8'
  },
  {
    name: 'fog',
    code: '1f32b'
  },
  {
    name: 'foggy',
    code: '1f301'
  },
  {
    name: 'folded-hands',
    code: '1f64f'
  },
  {
    name: 'folded-hands-dark-skin-tone',
    code: '1f64f-1f3ff'
  },
  {
    name: 'folded-hands-light-skin-tone',
    code: '1f64f-1f3fb'
  },
  {
    name: 'folded-hands-medium-dark-skin-tone',
    code: '1f64f-1f3fe'
  },
  {
    name: 'folded-hands-medium-light-skin-tone',
    code: '1f64f-1f3fc'
  },
  {
    name: 'folded-hands-medium-skin-tone',
    code: '1f64f-1f3fd'
  },
  {
    name: 'fondue',
    code: '1fad5'
  },
  {
    name: 'foot',
    code: '1f9b6'
  },
  {
    name: 'foot-dark-skin-tone',
    code: '1f9b6-1f3ff'
  },
  {
    name: 'foot-light-skin-tone',
    code: '1f9b6-1f3fb'
  },
  {
    name: 'foot-medium-dark-skin-tone',
    code: '1f9b6-1f3fe'
  },
  {
    name: 'foot-medium-light-skin-tone',
    code: '1f9b6-1f3fc'
  },
  {
    name: 'foot-medium-skin-tone',
    code: '1f9b6-1f3fd'
  },
  {
    name: 'footprints',
    code: '1f463'
  },
  {
    name: 'fork-and-knife',
    code: '1f374'
  },
  {
    name: 'fork-and-knife-with-plate',
    code: '1f37d'
  },
  {
    name: 'fortune-cookie',
    code: '1f960'
  },
  {
    name: 'fountain',
    code: '26f2'
  },
  {
    name: 'fountain-pen',
    code: '1f58b'
  },
  {
    name: 'four-leaf-clover',
    code: '1f340'
  },
  {
    name: 'four-o-clock',
    code: '1f553'
  },
  {
    name: 'four-thirty',
    code: '1f55f'
  },
  {
    name: 'fox',
    code: '1f98a'
  },
  {
    name: 'framed-picture',
    code: '1f5bc'
  },
  {
    name: 'free-button',
    code: '1f193'
  },
  {
    name: 'french-fries',
    code: '1f35f'
  },
  {
    name: 'fried-shrimp',
    code: '1f364'
  },
  {
    name: 'frog',
    code: '1f438'
  },
  {
    name: 'front-facing-baby-chick',
    code: '1f425'
  },
  {
    name: 'frowning-face',
    code: '2639'
  },
  {
    name: 'frowning-face-with-open-mouth',
    code: '1f626'
  },
  {
    name: 'fuel-pump',
    code: '26fd'
  },
  {
    name: 'full-moon',
    code: '1f315'
  },
  {
    name: 'full-moon-face',
    code: '1f31d'
  },
  {
    name: 'funeral-urn',
    code: '26b1'
  },
  {
    name: 'game-die',
    code: '1f3b2'
  },
  {
    name: 'garlic',
    code: '1f9c4'
  },
  {
    name: 'gear',
    code: '2699'
  },
  {
    name: 'gem-stone',
    code: '1f48e'
  },
  {
    name: 'gemini',
    code: '264a'
  },
  {
    name: 'genie',
    code: '1f9de'
  },
  {
    name: 'ghost',
    code: '1f47b'
  },
  {
    name: 'giraffe',
    code: '1f992'
  },
  {
    name: 'girl',
    code: '1f467'
  },
  {
    name: 'girl-dark-skin-tone',
    code: '1f467-1f3ff'
  },
  {
    name: 'girl-light-skin-tone',
    code: '1f467-1f3fb'
  },
  {
    name: 'girl-medium-dark-skin-tone',
    code: '1f467-1f3fe'
  },
  {
    name: 'girl-medium-light-skin-tone',
    code: '1f467-1f3fc'
  },
  {
    name: 'girl-medium-skin-tone',
    code: '1f467-1f3fd'
  },
  {
    name: 'glass-of-milk',
    code: '1f95b'
  },
  {
    name: 'glasses',
    code: '1f453'
  },
  {
    name: 'globe-showing-americas',
    code: '1f30e'
  },
  {
    name: 'globe-showing-asia-australia',
    code: '1f30f'
  },
  {
    name: 'globe-showing-europe-africa',
    code: '1f30d'
  },
  {
    name: 'globe-with-meridians',
    code: '1f310'
  },
  {
    name: 'gloves',
    code: '1f9e4'
  },
  {
    name: 'glowing-star',
    code: '1f31f'
  },
  {
    name: 'goal-net',
    code: '1f945'
  },
  {
    name: 'goat',
    code: '1f410'
  },
  {
    name: 'goblin',
    code: '1f47a'
  },
  {
    name: 'goggles',
    code: '1f97d'
  },
  {
    name: 'gorilla',
    code: '1f98d'
  },
  {
    name: 'graduation-cap',
    code: '1f393'
  },
  {
    name: 'grapes',
    code: '1f347'
  },
  {
    name: 'green-apple',
    code: '1f34f'
  },
  {
    name: 'green-book',
    code: '1f4d7'
  },
  {
    name: 'green-circle',
    code: '1f7e2'
  },
  {
    name: 'green-heart',
    code: '1f49a'
  },
  {
    name: 'green-salad',
    code: '1f957'
  },
  {
    name: 'green-square',
    code: '1f7e9'
  },
  {
    name: 'grimacing-face',
    code: '1f62c'
  },
  {
    name: 'grinning-cat',
    code: '1f63a'
  },
  {
    name: 'grinning-cat-with-smiling-eyes',
    code: '1f638'
  },
  {
    name: 'grinning-face',
    code: '1f600'
  },
  {
    name: 'grinning-face-with-big-eyes',
    code: '1f603'
  },
  {
    name: 'grinning-face-with-smiling-eyes',
    code: '1f604'
  },
  {
    name: 'grinning-face-with-sweat',
    code: '1f605'
  },
  {
    name: 'grinning-squinting-face',
    code: '1f606'
  },
  {
    name: 'growing-heart',
    code: '1f497'
  },
  {
    name: 'guard',
    code: '1f482'
  },
  {
    name: 'guard-dark-skin-tone',
    code: '1f482-1f3ff'
  },
  {
    name: 'guard-light-skin-tone',
    code: '1f482-1f3fb'
  },
  {
    name: 'guard-medium-dark-skin-tone',
    code: '1f482-1f3fe'
  },
  {
    name: 'guard-medium-light-skin-tone',
    code: '1f482-1f3fc'
  },
  {
    name: 'guard-medium-skin-tone',
    code: '1f482-1f3fd'
  },
  {
    name: 'guide-dog',
    code: '1f9ae'
  },
  {
    name: 'guitar',
    code: '1f3b8'
  },
  {
    name: 'hamburger',
    code: '1f354'
  },
  {
    name: 'hammer',
    code: '1f528'
  },
  {
    name: 'hammer-and-pick',
    code: '2692'
  },
  {
    name: 'hammer-and-wrench',
    code: '1f6e0'
  },
  {
    name: 'hamster',
    code: '1f439'
  },
  {
    name: 'hand-with-fingers-splayed',
    code: '1f590'
  },
  {
    name: 'hand-with-fingers-splayed-dark-skin-tone',
    code: '1f590-1f3ff'
  },
  {
    name: 'hand-with-fingers-splayed-light-skin-tone',
    code: '1f590-1f3fb'
  },
  {
    name: 'hand-with-fingers-splayed-medium-dark-skin-tone',
    code: '1f590-1f3fe'
  },
  {
    name: 'hand-with-fingers-splayed-medium-light-skin-tone',
    code: '1f590-1f3fc'
  },
  {
    name: 'hand-with-fingers-splayed-medium-skin-tone',
    code: '1f590-1f3fd'
  },
  {
    name: 'handbag',
    code: '1f45c'
  },
  {
    name: 'handshake',
    code: '1f91d'
  },
  {
    name: 'hatching-chick',
    code: '1f423'
  },
  {
    name: 'headphone',
    code: '1f3a7'
  },
  {
    name: 'headstone',
    code: '1faa6'
  },
  {
    name: 'health-worker',
    code: '1f9d1-200d-2695-fe0f'
  },
  {
    name: 'health-worker-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-2695-fe0f'
  },
  {
    name: 'health-worker-light-skin-tone',
    code: '1f9d1-1f3fb-200d-2695-fe0f'
  },
  {
    name: 'health-worker-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-2695-fe0f'
  },
  {
    name: 'health-worker-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-2695-fe0f'
  },
  {
    name: 'health-worker-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-2695-fe0f'
  },
  {
    name: 'hear-no-evil-monkey',
    code: '1f649'
  },
  {
    name: 'heart-decoration',
    code: '1f49f'
  },
  {
    name: 'heart-exclamation',
    code: '2763'
  },
  {
    name: 'heart-on-fire',
    code: '2764-fe0f-200d-1f525'
  },
  {
    name: 'heart-suit',
    code: '2665'
  },
  {
    name: 'heart-with-arrow',
    code: '1f498'
  },
  {
    name: 'heart-with-ribbon',
    code: '1f49d'
  },
  {
    name: 'heavy-dollar-sign',
    code: '1f4b2'
  },
  {
    name: 'hedgehog',
    code: '1f994'
  },
  {
    name: 'helicopter',
    code: '1f681'
  },
  {
    name: 'herb',
    code: '1f33f'
  },
  {
    name: 'hibiscus',
    code: '1f33a'
  },
  {
    name: 'high-heeled-shoe',
    code: '1f460'
  },
  {
    name: 'high-speed-train',
    code: '1f684'
  },
  {
    name: 'high-voltage',
    code: '26a1'
  },
  {
    name: 'hiking-boot',
    code: '1f97e'
  },
  {
    name: 'hindu-temple',
    code: '1f6d5'
  },
  {
    name: 'hippopotamus',
    code: '1f99b'
  },
  {
    name: 'hole',
    code: '1f573'
  },
  {
    name: 'hollow-red-circle',
    code: '2b55'
  },
  {
    name: 'honey-pot',
    code: '1f36f'
  },
  {
    name: 'honeybee',
    code: '1f41d'
  },
  {
    name: 'hook',
    code: '1fa9d'
  },
  {
    name: 'horizontal-traffic-light',
    code: '1f6a5'
  },
  {
    name: 'horse',
    code: '1f40e'
  },
  {
    name: 'horse-face',
    code: '1f434'
  },
  {
    name: 'horse-racing',
    code: '1f3c7'
  },
  {
    name: 'horse-racing-dark-skin-tone',
    code: '1f3c7-1f3ff'
  },
  {
    name: 'horse-racing-light-skin-tone',
    code: '1f3c7-1f3fb'
  },
  {
    name: 'horse-racing-medium-dark-skin-tone',
    code: '1f3c7-1f3fe'
  },
  {
    name: 'horse-racing-medium-light-skin-tone',
    code: '1f3c7-1f3fc'
  },
  {
    name: 'horse-racing-medium-skin-tone',
    code: '1f3c7-1f3fd'
  },
  {
    name: 'hospital',
    code: '1f3e5'
  },
  {
    name: 'hot-beverage',
    code: '2615'
  },
  {
    name: 'hot-dog',
    code: '1f32d'
  },
  {
    name: 'hot-face',
    code: '1f975'
  },
  {
    name: 'hot-pepper',
    code: '1f336'
  },
  {
    name: 'hot-springs',
    code: '2668'
  },
  {
    name: 'hotel',
    code: '1f3e8'
  },
  {
    name: 'hourglass-done',
    code: '231b'
  },
  {
    name: 'hourglass-not-done',
    code: '23f3'
  },
  {
    name: 'house',
    code: '1f3e0'
  },
  {
    name: 'house-with-garden',
    code: '1f3e1'
  },
  {
    name: 'houses',
    code: '1f3d8'
  },
  {
    name: 'hugging-face',
    code: '1f917'
  },
  {
    name: 'hundred-points',
    code: '1f4af'
  },
  {
    name: 'hushed-face',
    code: '1f62f'
  },
  {
    name: 'hut',
    code: '1f6d6'
  },
  {
    name: 'ice',
    code: '1f9ca'
  },
  {
    name: 'ice-cream',
    code: '1f368'
  },
  {
    name: 'ice-hockey',
    code: '1f3d2'
  },
  {
    name: 'ice-skate',
    code: '26f8'
  },
  {
    name: 'id-button',
    code: '1f194'
  },
  {
    name: 'inbox-tray',
    code: '1f4e5'
  },
  {
    name: 'incoming-envelope',
    code: '1f4e8'
  },
  {
    name: 'index-pointing-up',
    code: '261d'
  },
  {
    name: 'index-pointing-up-dark-skin-tone',
    code: '261d-1f3ff'
  },
  {
    name: 'index-pointing-up-light-skin-tone',
    code: '261d-1f3fb'
  },
  {
    name: 'index-pointing-up-medium-dark-skin-tone',
    code: '261d-1f3fe'
  },
  {
    name: 'index-pointing-up-medium-light-skin-tone',
    code: '261d-1f3fc'
  },
  {
    name: 'index-pointing-up-medium-skin-tone',
    code: '261d-1f3fd'
  },
  {
    name: 'infinity',
    code: '267e'
  },
  {
    name: 'information',
    code: '2139'
  },
  {
    name: 'input-latin-letters',
    code: '1f524'
  },
  {
    name: 'input-latin-lowercase',
    code: '1f521'
  },
  {
    name: 'input-latin-uppercase',
    code: '1f520'
  },
  {
    name: 'input-numbers',
    code: '1f522'
  },
  {
    name: 'input-symbols',
    code: '1f523'
  },
  {
    name: 'jack-o-lantern',
    code: '1f383'
  },
  {
    name: 'japanese-acceptable-button',
    code: '1f251'
  },
  {
    name: 'japanese-application-button',
    code: '1f238'
  },
  {
    name: 'japanese-bargain-button',
    code: '1f250'
  },
  {
    name: 'japanese-castle',
    code: '1f3ef'
  },
  {
    name: 'japanese-congratulations-button',
    code: '3297'
  },
  {
    name: 'japanese-discount-button',
    code: '1f239'
  },
  {
    name: 'japanese-dolls',
    code: '1f38e'
  },
  {
    name: 'japanese-free-of-charge-button',
    code: '1f21a'
  },
  {
    name: 'japanese-here-button',
    code: '1f201'
  },
  {
    name: 'japanese-monthly-amount-button',
    code: '1f237'
  },
  {
    name: 'japanese-no-vacancy-button',
    code: '1f235'
  },
  {
    name: 'japanese-not-free-of-charge-button',
    code: '1f236'
  },
  {
    name: 'japanese-open-for-business-button',
    code: '1f23a'
  },
  {
    name: 'japanese-passing-grade-button',
    code: '1f234'
  },
  {
    name: 'japanese-post-office',
    code: '1f3e3'
  },
  {
    name: 'japanese-prohibited-button',
    code: '1f232'
  },
  {
    name: 'japanese-reserved-button',
    code: '1f22f'
  },
  {
    name: 'japanese-secret-button',
    code: '3299'
  },
  {
    name: 'japanese-service-charge-button',
    code: '1f202'
  },
  {
    name: 'japanese-symbol-for-beginner',
    code: '1f530'
  },
  {
    name: 'japanese-vacancy-button',
    code: '1f233'
  },
  {
    name: 'jeans',
    code: '1f456'
  },
  {
    name: 'joker',
    code: '1f0cf'
  },
  {
    name: 'joystick',
    code: '1f579'
  },
  {
    name: 'judge',
    code: '1f9d1-200d-2696-fe0f'
  },
  {
    name: 'judge-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-2696-fe0f'
  },
  {
    name: 'judge-light-skin-tone',
    code: '1f9d1-1f3fb-200d-2696-fe0f'
  },
  {
    name: 'judge-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-2696-fe0f'
  },
  {
    name: 'judge-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-2696-fe0f'
  },
  {
    name: 'judge-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-2696-fe0f'
  },
  {
    name: 'kaaba',
    code: '1f54b'
  },
  {
    name: 'kangaroo',
    code: '1f998'
  },
  {
    name: 'key',
    code: '1f511'
  },
  {
    name: 'keyboard',
    code: '2328'
  },
  {
    name: 'keycap',
    code: '23-20e3'
  },
  {
    name: 'keycap',
    code: '2a-20e3'
  },
  {
    name: 'keycap-0',
    code: '30-20e3'
  },
  {
    name: 'keycap-1',
    code: '31-20e3'
  },
  {
    name: 'keycap-10',
    code: '1f51f'
  },
  {
    name: 'keycap-2',
    code: '32-20e3'
  },
  {
    name: 'keycap-3',
    code: '33-20e3'
  },
  {
    name: 'keycap-4',
    code: '34-20e3'
  },
  {
    name: 'keycap-5',
    code: '35-20e3'
  },
  {
    name: 'keycap-6',
    code: '36-20e3'
  },
  {
    name: 'keycap-7',
    code: '37-20e3'
  },
  {
    name: 'keycap-8',
    code: '38-20e3'
  },
  {
    name: 'keycap-9',
    code: '39-20e3'
  },
  {
    name: 'kick-scooter',
    code: '1f6f4'
  },
  {
    name: 'kimono',
    code: '1f458'
  },
  {
    name: 'kiss',
    code: '1f48f'
  },
  {
    name: 'kiss-dark-skin-tone',
    code: '1f48f-1f3ff'
  },
  {
    name: 'kiss-light-skin-tone',
    code: '1f48f-1f3fb'
  },
  {
    name: 'kiss-man-man',
    code: '1f468-200d-2764-fe0f-200d-1f48b-200d-1f468'
  },
  {
    name: 'kiss-man-man-dark-skin-tone',
    code: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    name: 'kiss-man-man-dark-skin-tone-light-skin-tone',
    code: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    name: 'kiss-man-man-dark-skin-tone-medium-dark-skin-tone',
    code: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    name: 'kiss-man-man-dark-skin-tone-medium-light-skin-tone',
    code: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    name: 'kiss-man-man-dark-skin-tone-medium-skin-tone',
    code: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    name: 'kiss-man-man-light-skin-tone',
    code: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    name: 'kiss-man-man-light-skin-tone-dark-skin-tone',
    code: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    name: 'kiss-man-man-light-skin-tone-medium-dark-skin-tone',
    code: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    name: 'kiss-man-man-light-skin-tone-medium-light-skin-tone',
    code: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    name: 'kiss-man-man-light-skin-tone-medium-skin-tone',
    code: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    name: 'kiss-man-man-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    name: 'kiss-man-man-medium-dark-skin-tone-dark-skin-tone',
    code: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    name: 'kiss-man-man-medium-dark-skin-tone-light-skin-tone',
    code: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    name: 'kiss-man-man-medium-dark-skin-tone-medium-light-skin-tone',
    code: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    name: 'kiss-man-man-medium-dark-skin-tone-medium-skin-tone',
    code: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    name: 'kiss-man-man-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    name: 'kiss-man-man-medium-light-skin-tone-dark-skin-tone',
    code: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    name: 'kiss-man-man-medium-light-skin-tone-light-skin-tone',
    code: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    name: 'kiss-man-man-medium-light-skin-tone-medium-dark-skin-tone',
    code: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    name: 'kiss-man-man-medium-light-skin-tone-medium-skin-tone',
    code: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    name: 'kiss-man-man-medium-skin-tone',
    code: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    name: 'kiss-man-man-medium-skin-tone-dark-skin-tone',
    code: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    name: 'kiss-man-man-medium-skin-tone-light-skin-tone',
    code: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    name: 'kiss-man-man-medium-skin-tone-medium-dark-skin-tone',
    code: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    name: 'kiss-man-man-medium-skin-tone-medium-light-skin-tone',
    code: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    name: 'kiss-mark',
    code: '1f48b'
  },
  {
    name: 'kiss-medium-dark-skin-tone',
    code: '1f48f-1f3fe'
  },
  {
    name: 'kiss-medium-light-skin-tone',
    code: '1f48f-1f3fc'
  },
  {
    name: 'kiss-medium-skin-tone',
    code: '1f48f-1f3fd'
  },
  {
    name: 'kiss-person-person-dark-skin-tone-light-skin-tone',
    code: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb'
  },
  {
    name: 'kiss-person-person-dark-skin-tone-medium-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe'
  },
  {
    name: 'kiss-person-person-dark-skin-tone-medium-light-skin-tone',
    code: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc'
  },
  {
    name: 'kiss-person-person-dark-skin-tone-medium-skin-tone',
    code: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd'
  },
  {
    name: 'kiss-person-person-light-skin-tone-dark-skin-tone',
    code: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff'
  },
  {
    name: 'kiss-person-person-light-skin-tone-medium-dark-skin-tone',
    code: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe'
  },
  {
    name: 'kiss-person-person-light-skin-tone-medium-light-skin-tone',
    code: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc'
  },
  {
    name: 'kiss-person-person-light-skin-tone-medium-skin-tone',
    code: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd'
  },
  {
    name: 'kiss-person-person-medium-dark-skin-tone-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff'
  },
  {
    name: 'kiss-person-person-medium-dark-skin-tone-light-skin-tone',
    code: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb'
  },
  {
    name: 'kiss-person-person-medium-dark-skin-tone-medium-light-skin-tone',
    code: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc'
  },
  {
    name: 'kiss-person-person-medium-dark-skin-tone-medium-skin-tone',
    code: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd'
  },
  {
    name: 'kiss-person-person-medium-light-skin-tone-dark-skin-tone',
    code: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff'
  },
  {
    name: 'kiss-person-person-medium-light-skin-tone-light-skin-tone',
    code: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb'
  },
  {
    name: 'kiss-person-person-medium-light-skin-tone-medium-dark-skin-tone',
    code: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe'
  },
  {
    name: 'kiss-person-person-medium-light-skin-tone-medium-skin-tone',
    code: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd'
  },
  {
    name: 'kiss-person-person-medium-skin-tone-dark-skin-tone',
    code: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff'
  },
  {
    name: 'kiss-person-person-medium-skin-tone-light-skin-tone',
    code: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb'
  },
  {
    name: 'kiss-person-person-medium-skin-tone-medium-dark-skin-tone',
    code: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe'
  },
  {
    name: 'kiss-person-person-medium-skin-tone-medium-light-skin-tone',
    code: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc'
  },
  {
    name: 'kiss-woman-man',
    code: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f468'
  },
  {
    name: 'kiss-woman-man-dark-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    name: 'kiss-woman-man-dark-skin-tone-light-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    name: 'kiss-woman-man-dark-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    name: 'kiss-woman-man-dark-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    name: 'kiss-woman-man-dark-skin-tone-medium-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    name: 'kiss-woman-man-light-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    name: 'kiss-woman-man-light-skin-tone-dark-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    name: 'kiss-woman-man-light-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    name: 'kiss-woman-man-light-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    name: 'kiss-woman-man-light-skin-tone-medium-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    name: 'kiss-woman-man-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    name: 'kiss-woman-man-medium-dark-skin-tone-dark-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    name: 'kiss-woman-man-medium-dark-skin-tone-light-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    name: 'kiss-woman-man-medium-dark-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    name: 'kiss-woman-man-medium-dark-skin-tone-medium-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    name: 'kiss-woman-man-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    name: 'kiss-woman-man-medium-light-skin-tone-dark-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    name: 'kiss-woman-man-medium-light-skin-tone-light-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    name: 'kiss-woman-man-medium-light-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    name: 'kiss-woman-man-medium-light-skin-tone-medium-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    name: 'kiss-woman-man-medium-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    name: 'kiss-woman-man-medium-skin-tone-dark-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    name: 'kiss-woman-man-medium-skin-tone-light-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    name: 'kiss-woman-man-medium-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    name: 'kiss-woman-man-medium-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    name: 'kiss-woman-woman',
    code: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f469'
  },
  {
    name: 'kiss-woman-woman-dark-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff'
  },
  {
    name: 'kiss-woman-woman-dark-skin-tone-light-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb'
  },
  {
    name: 'kiss-woman-woman-dark-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe'
  },
  {
    name: 'kiss-woman-woman-dark-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc'
  },
  {
    name: 'kiss-woman-woman-dark-skin-tone-medium-skin-tone',
    code: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd'
  },
  {
    name: 'kiss-woman-woman-light-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb'
  },
  {
    name: 'kiss-woman-woman-light-skin-tone-dark-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff'
  },
  {
    name: 'kiss-woman-woman-light-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe'
  },
  {
    name: 'kiss-woman-woman-light-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc'
  },
  {
    name: 'kiss-woman-woman-light-skin-tone-medium-skin-tone',
    code: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd'
  },
  {
    name: 'kiss-woman-woman-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe'
  },
  {
    name: 'kiss-woman-woman-medium-dark-skin-tone-dark-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff'
  },
  {
    name: 'kiss-woman-woman-medium-dark-skin-tone-light-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb'
  },
  {
    name: 'kiss-woman-woman-medium-dark-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc'
  },
  {
    name: 'kiss-woman-woman-medium-dark-skin-tone-medium-skin-tone',
    code: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd'
  },
  {
    name: 'kiss-woman-woman-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc'
  },
  {
    name: 'kiss-woman-woman-medium-light-skin-tone-dark-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff'
  },
  {
    name: 'kiss-woman-woman-medium-light-skin-tone-light-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb'
  },
  {
    name: 'kiss-woman-woman-medium-light-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe'
  },
  {
    name: 'kiss-woman-woman-medium-light-skin-tone-medium-skin-tone',
    code: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd'
  },
  {
    name: 'kiss-woman-woman-medium-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd'
  },
  {
    name: 'kiss-woman-woman-medium-skin-tone-dark-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff'
  },
  {
    name: 'kiss-woman-woman-medium-skin-tone-light-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb'
  },
  {
    name: 'kiss-woman-woman-medium-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe'
  },
  {
    name: 'kiss-woman-woman-medium-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc'
  },
  {
    name: 'kissing-cat',
    code: '1f63d'
  },
  {
    name: 'kissing-face',
    code: '1f617'
  },
  {
    name: 'kissing-face-with-closed-eyes',
    code: '1f61a'
  },
  {
    name: 'kissing-face-with-smiling-eyes',
    code: '1f619'
  },
  {
    name: 'kitchen-knife',
    code: '1f52a'
  },
  {
    name: 'kite',
    code: '1fa81'
  },
  {
    name: 'kiwi-fruit',
    code: '1f95d'
  },
  {
    name: 'knocked-out-face',
    code: '1f635'
  },
  {
    name: 'knot',
    code: '1faa2'
  },
  {
    name: 'koala',
    code: '1f428'
  },
  {
    name: 'lab-coat',
    code: '1f97c'
  },
  {
    name: 'label',
    code: '1f3f7'
  },
  {
    name: 'lacrosse',
    code: '1f94d'
  },
  {
    name: 'ladder',
    code: '1fa9c'
  },
  {
    name: 'lady-beetle',
    code: '1f41e'
  },
  {
    name: 'laptop',
    code: '1f4bb'
  },
  {
    name: 'large-blue-diamond',
    code: '1f537'
  },
  {
    name: 'large-orange-diamond',
    code: '1f536'
  },
  {
    name: 'last-quarter-moon',
    code: '1f317'
  },
  {
    name: 'last-quarter-moon-face',
    code: '1f31c'
  },
  {
    name: 'last-track-button',
    code: '23ee'
  },
  {
    name: 'latin-cross',
    code: '271d'
  },
  {
    name: 'leaf-fluttering-in-wind',
    code: '1f343'
  },
  {
    name: 'leafy-green',
    code: '1f96c'
  },
  {
    name: 'ledger',
    code: '1f4d2'
  },
  {
    name: 'left-arrow',
    code: '2b05'
  },
  {
    name: 'left-arrow-curving-right',
    code: '21aa'
  },
  {
    name: 'left-facing-fist',
    code: '1f91b'
  },
  {
    name: 'left-facing-fist-dark-skin-tone',
    code: '1f91b-1f3ff'
  },
  {
    name: 'left-facing-fist-light-skin-tone',
    code: '1f91b-1f3fb'
  },
  {
    name: 'left-facing-fist-medium-dark-skin-tone',
    code: '1f91b-1f3fe'
  },
  {
    name: 'left-facing-fist-medium-light-skin-tone',
    code: '1f91b-1f3fc'
  },
  {
    name: 'left-facing-fist-medium-skin-tone',
    code: '1f91b-1f3fd'
  },
  {
    name: 'left-luggage',
    code: '1f6c5'
  },
  {
    name: 'left-right-arrow',
    code: '2194'
  },
  {
    name: 'left-speech-bubble',
    code: '1f5e8'
  },
  {
    name: 'leg',
    code: '1f9b5'
  },
  {
    name: 'leg-dark-skin-tone',
    code: '1f9b5-1f3ff'
  },
  {
    name: 'leg-light-skin-tone',
    code: '1f9b5-1f3fb'
  },
  {
    name: 'leg-medium-dark-skin-tone',
    code: '1f9b5-1f3fe'
  },
  {
    name: 'leg-medium-light-skin-tone',
    code: '1f9b5-1f3fc'
  },
  {
    name: 'leg-medium-skin-tone',
    code: '1f9b5-1f3fd'
  },
  {
    name: 'lemon',
    code: '1f34b'
  },
  {
    name: 'leo',
    code: '264c'
  },
  {
    name: 'leopard',
    code: '1f406'
  },
  {
    name: 'level-slider',
    code: '1f39a'
  },
  {
    name: 'libra',
    code: '264e'
  },
  {
    name: 'light-bulb',
    code: '1f4a1'
  },
  {
    name: 'light-rail',
    code: '1f688'
  },
  {
    name: 'light-skin-tone',
    code: '1f3fb'
  },
  {
    name: 'link',
    code: '1f517'
  },
  {
    name: 'linked-paperclips',
    code: '1f587'
  },
  {
    name: 'lion',
    code: '1f981'
  },
  {
    name: 'lipstick',
    code: '1f484'
  },
  {
    name: 'litter-in-bin-sign',
    code: '1f6ae'
  },
  {
    name: 'lizard',
    code: '1f98e'
  },
  {
    name: 'llama',
    code: '1f999'
  },
  {
    name: 'lobster',
    code: '1f99e'
  },
  {
    name: 'locked',
    code: '1f512'
  },
  {
    name: 'locked-with-key',
    code: '1f510'
  },
  {
    name: 'locked-with-pen',
    code: '1f50f'
  },
  {
    name: 'locomotive',
    code: '1f682'
  },
  {
    name: 'lollipop',
    code: '1f36d'
  },
  {
    name: 'long-drum',
    code: '1fa98'
  },
  {
    name: 'lotion-bottle',
    code: '1f9f4'
  },
  {
    name: 'loudly-crying-face',
    code: '1f62d'
  },
  {
    name: 'loudspeaker',
    code: '1f4e2'
  },
  {
    name: 'love-hotel',
    code: '1f3e9'
  },
  {
    name: 'love-letter',
    code: '1f48c'
  },
  {
    name: 'love-you-gesture',
    code: '1f91f'
  },
  {
    name: 'love-you-gesture-dark-skin-tone',
    code: '1f91f-1f3ff'
  },
  {
    name: 'love-you-gesture-light-skin-tone',
    code: '1f91f-1f3fb'
  },
  {
    name: 'love-you-gesture-medium-dark-skin-tone',
    code: '1f91f-1f3fe'
  },
  {
    name: 'love-you-gesture-medium-light-skin-tone',
    code: '1f91f-1f3fc'
  },
  {
    name: 'love-you-gesture-medium-skin-tone',
    code: '1f91f-1f3fd'
  },
  {
    name: 'luggage',
    code: '1f9f3'
  },
  {
    name: 'lungs',
    code: '1fac1'
  },
  {
    name: 'lying-face',
    code: '1f925'
  },
  {
    name: 'mage',
    code: '1f9d9'
  },
  {
    name: 'mage-dark-skin-tone',
    code: '1f9d9-1f3ff'
  },
  {
    name: 'mage-light-skin-tone',
    code: '1f9d9-1f3fb'
  },
  {
    name: 'mage-medium-dark-skin-tone',
    code: '1f9d9-1f3fe'
  },
  {
    name: 'mage-medium-light-skin-tone',
    code: '1f9d9-1f3fc'
  },
  {
    name: 'mage-medium-skin-tone',
    code: '1f9d9-1f3fd'
  },
  {
    name: 'magic-wand',
    code: '1fa84'
  },
  {
    name: 'magnet',
    code: '1f9f2'
  },
  {
    name: 'magnifying-glass-tilted-left',
    code: '1f50d'
  },
  {
    name: 'magnifying-glass-tilted-right',
    code: '1f50e'
  },
  {
    name: 'mahjong-red-dragon',
    code: '1f004'
  },
  {
    name: 'male-sign',
    code: '2642'
  },
  {
    name: 'mammoth',
    code: '1f9a3'
  },
  {
    name: 'man',
    code: '1f468'
  },
  {
    name: 'man-artist',
    code: '1f468-200d-1f3a8'
  },
  {
    name: 'man-artist-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f3a8'
  },
  {
    name: 'man-artist-light-skin-tone',
    code: '1f468-1f3fb-200d-1f3a8'
  },
  {
    name: 'man-artist-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f3a8'
  },
  {
    name: 'man-artist-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f3a8'
  },
  {
    name: 'man-artist-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f3a8'
  },
  {
    name: 'man-astronaut',
    code: '1f468-200d-1f680'
  },
  {
    name: 'man-astronaut-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f680'
  },
  {
    name: 'man-astronaut-light-skin-tone',
    code: '1f468-1f3fb-200d-1f680'
  },
  {
    name: 'man-astronaut-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f680'
  },
  {
    name: 'man-astronaut-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f680'
  },
  {
    name: 'man-astronaut-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f680'
  },
  {
    name: 'man-bald',
    code: '1f468-200d-1f9b2'
  },
  {
    name: 'man-beard',
    code: '1f9d4-200d-2642-fe0f'
  },
  {
    name: 'man-biking',
    code: '1f6b4-200d-2642-fe0f'
  },
  {
    name: 'man-biking-dark-skin-tone',
    code: '1f6b4-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-biking-light-skin-tone',
    code: '1f6b4-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-biking-medium-dark-skin-tone',
    code: '1f6b4-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-biking-medium-light-skin-tone',
    code: '1f6b4-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-biking-medium-skin-tone',
    code: '1f6b4-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-blond-hair',
    code: '1f471-200d-2642-fe0f'
  },
  {
    name: 'man-bouncing-ball',
    code: '26f9-fe0f-200d-2642-fe0f'
  },
  {
    name: 'man-bouncing-ball-dark-skin-tone',
    code: '26f9-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-bouncing-ball-light-skin-tone',
    code: '26f9-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-bouncing-ball-medium-dark-skin-tone',
    code: '26f9-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-bouncing-ball-medium-light-skin-tone',
    code: '26f9-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-bouncing-ball-medium-skin-tone',
    code: '26f9-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-bowing',
    code: '1f647-200d-2642-fe0f'
  },
  {
    name: 'man-bowing-dark-skin-tone',
    code: '1f647-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-bowing-light-skin-tone',
    code: '1f647-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-bowing-medium-dark-skin-tone',
    code: '1f647-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-bowing-medium-light-skin-tone',
    code: '1f647-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-bowing-medium-skin-tone',
    code: '1f647-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-cartwheeling',
    code: '1f938-200d-2642-fe0f'
  },
  {
    name: 'man-cartwheeling-dark-skin-tone',
    code: '1f938-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-cartwheeling-light-skin-tone',
    code: '1f938-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-cartwheeling-medium-dark-skin-tone',
    code: '1f938-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-cartwheeling-medium-light-skin-tone',
    code: '1f938-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-cartwheeling-medium-skin-tone',
    code: '1f938-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-christmas',
    code: '1f468-200d-1f384'
  },
  {
    name: 'man-climbing',
    code: '1f9d7-200d-2642-fe0f'
  },
  {
    name: 'man-climbing-dark-skin-tone',
    code: '1f9d7-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-climbing-light-skin-tone',
    code: '1f9d7-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-climbing-medium-dark-skin-tone',
    code: '1f9d7-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-climbing-medium-light-skin-tone',
    code: '1f9d7-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-climbing-medium-skin-tone',
    code: '1f9d7-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-construction-worker',
    code: '1f477-200d-2642-fe0f'
  },
  {
    name: 'man-construction-worker-dark-skin-tone',
    code: '1f477-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-construction-worker-light-skin-tone',
    code: '1f477-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-construction-worker-medium-dark-skin-tone',
    code: '1f477-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-construction-worker-medium-light-skin-tone',
    code: '1f477-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-construction-worker-medium-skin-tone',
    code: '1f477-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-cook',
    code: '1f468-200d-1f373'
  },
  {
    name: 'man-cook-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f373'
  },
  {
    name: 'man-cook-light-skin-tone',
    code: '1f468-1f3fb-200d-1f373'
  },
  {
    name: 'man-cook-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f373'
  },
  {
    name: 'man-cook-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f373'
  },
  {
    name: 'man-cook-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f373'
  },
  {
    name: 'man-curly-hair',
    code: '1f468-200d-1f9b1'
  },
  {
    name: 'man-dancing',
    code: '1f57a'
  },
  {
    name: 'man-dancing-dark-skin-tone',
    code: '1f57a-1f3ff'
  },
  {
    name: 'man-dancing-light-skin-tone',
    code: '1f57a-1f3fb'
  },
  {
    name: 'man-dancing-medium-dark-skin-tone',
    code: '1f57a-1f3fe'
  },
  {
    name: 'man-dancing-medium-light-skin-tone',
    code: '1f57a-1f3fc'
  },
  {
    name: 'man-dancing-medium-skin-tone',
    code: '1f57a-1f3fd'
  },
  {
    name: 'man-dark-skin-tone',
    code: '1f468-1f3ff'
  },
  {
    name: 'man-dark-skin-tone-bald',
    code: '1f468-1f3ff-200d-1f9b2'
  },
  {
    name: 'man-dark-skin-tone-beard',
    code: '1f9d4-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-dark-skin-tone-blond-hair',
    code: '1f471-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-dark-skin-tone-christmas',
    code: '1f468-1f3ff-200d-1f384'
  },
  {
    name: 'man-dark-skin-tone-curly-hair',
    code: '1f468-1f3ff-200d-1f9b1'
  },
  {
    name: 'man-dark-skin-tone-red-hair',
    code: '1f468-1f3ff-200d-1f9b0'
  },
  {
    name: 'man-dark-skin-tone-white-hair',
    code: '1f468-1f3ff-200d-1f9b3'
  },
  {
    name: 'man-detective',
    code: '1f575-fe0f-200d-2642-fe0f'
  },
  {
    name: 'man-detective-dark-skin-tone',
    code: '1f575-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-detective-light-skin-tone',
    code: '1f575-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-detective-medium-dark-skin-tone',
    code: '1f575-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-detective-medium-light-skin-tone',
    code: '1f575-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-detective-medium-skin-tone',
    code: '1f575-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-elf',
    code: '1f9dd-200d-2642-fe0f'
  },
  {
    name: 'man-elf-dark-skin-tone',
    code: '1f9dd-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-elf-light-skin-tone',
    code: '1f9dd-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-elf-medium-dark-skin-tone',
    code: '1f9dd-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-elf-medium-light-skin-tone',
    code: '1f9dd-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-elf-medium-skin-tone',
    code: '1f9dd-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-facepalming',
    code: '1f926-200d-2642-fe0f'
  },
  {
    name: 'man-facepalming-dark-skin-tone',
    code: '1f926-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-facepalming-light-skin-tone',
    code: '1f926-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-facepalming-medium-dark-skin-tone',
    code: '1f926-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-facepalming-medium-light-skin-tone',
    code: '1f926-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-facepalming-medium-skin-tone',
    code: '1f926-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-factory-worker',
    code: '1f468-200d-1f3ed'
  },
  {
    name: 'man-factory-worker-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f3ed'
  },
  {
    name: 'man-factory-worker-light-skin-tone',
    code: '1f468-1f3fb-200d-1f3ed'
  },
  {
    name: 'man-factory-worker-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f3ed'
  },
  {
    name: 'man-factory-worker-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f3ed'
  },
  {
    name: 'man-factory-worker-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f3ed'
  },
  {
    name: 'man-fairy',
    code: '1f9da-200d-2642-fe0f'
  },
  {
    name: 'man-fairy-dark-skin-tone',
    code: '1f9da-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-fairy-light-skin-tone',
    code: '1f9da-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-fairy-medium-dark-skin-tone',
    code: '1f9da-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-fairy-medium-light-skin-tone',
    code: '1f9da-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-fairy-medium-skin-tone',
    code: '1f9da-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-farmer',
    code: '1f468-200d-1f33e'
  },
  {
    name: 'man-farmer-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f33e'
  },
  {
    name: 'man-farmer-light-skin-tone',
    code: '1f468-1f3fb-200d-1f33e'
  },
  {
    name: 'man-farmer-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f33e'
  },
  {
    name: 'man-farmer-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f33e'
  },
  {
    name: 'man-farmer-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f33e'
  },
  {
    name: 'man-feeding-baby',
    code: '1f468-200d-1f37c'
  },
  {
    name: 'man-feeding-baby-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f37c'
  },
  {
    name: 'man-feeding-baby-light-skin-tone',
    code: '1f468-1f3fb-200d-1f37c'
  },
  {
    name: 'man-feeding-baby-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f37c'
  },
  {
    name: 'man-feeding-baby-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f37c'
  },
  {
    name: 'man-feeding-baby-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f37c'
  },
  {
    name: 'man-firefighter',
    code: '1f468-200d-1f692'
  },
  {
    name: 'man-firefighter-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f692'
  },
  {
    name: 'man-firefighter-light-skin-tone',
    code: '1f468-1f3fb-200d-1f692'
  },
  {
    name: 'man-firefighter-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f692'
  },
  {
    name: 'man-firefighter-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f692'
  },
  {
    name: 'man-firefighter-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f692'
  },
  {
    name: 'man-frowning',
    code: '1f64d-200d-2642-fe0f'
  },
  {
    name: 'man-frowning-dark-skin-tone',
    code: '1f64d-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-frowning-light-skin-tone',
    code: '1f64d-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-frowning-medium-dark-skin-tone',
    code: '1f64d-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-frowning-medium-light-skin-tone',
    code: '1f64d-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-frowning-medium-skin-tone',
    code: '1f64d-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-genie',
    code: '1f9de-200d-2642-fe0f'
  },
  {
    name: 'man-gesturing-no',
    code: '1f645-200d-2642-fe0f'
  },
  {
    name: 'man-gesturing-no-dark-skin-tone',
    code: '1f645-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-gesturing-no-light-skin-tone',
    code: '1f645-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-gesturing-no-medium-dark-skin-tone',
    code: '1f645-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-gesturing-no-medium-light-skin-tone',
    code: '1f645-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-gesturing-no-medium-skin-tone',
    code: '1f645-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-gesturing-ok',
    code: '1f646-200d-2642-fe0f'
  },
  {
    name: 'man-gesturing-ok-dark-skin-tone',
    code: '1f646-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-gesturing-ok-light-skin-tone',
    code: '1f646-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-gesturing-ok-medium-dark-skin-tone',
    code: '1f646-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-gesturing-ok-medium-light-skin-tone',
    code: '1f646-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-gesturing-ok-medium-skin-tone',
    code: '1f646-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-getting-haircut',
    code: '1f487-200d-2642-fe0f'
  },
  {
    name: 'man-getting-haircut-dark-skin-tone',
    code: '1f487-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-getting-haircut-light-skin-tone',
    code: '1f487-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-getting-haircut-medium-dark-skin-tone',
    code: '1f487-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-getting-haircut-medium-light-skin-tone',
    code: '1f487-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-getting-haircut-medium-skin-tone',
    code: '1f487-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-getting-massage',
    code: '1f486-200d-2642-fe0f'
  },
  {
    name: 'man-getting-massage-dark-skin-tone',
    code: '1f486-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-getting-massage-light-skin-tone',
    code: '1f486-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-getting-massage-medium-dark-skin-tone',
    code: '1f486-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-getting-massage-medium-light-skin-tone',
    code: '1f486-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-getting-massage-medium-skin-tone',
    code: '1f486-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-golfing',
    code: '1f3cc-fe0f-200d-2642-fe0f'
  },
  {
    name: 'man-golfing-dark-skin-tone',
    code: '1f3cc-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-golfing-light-skin-tone',
    code: '1f3cc-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-golfing-medium-dark-skin-tone',
    code: '1f3cc-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-golfing-medium-light-skin-tone',
    code: '1f3cc-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-golfing-medium-skin-tone',
    code: '1f3cc-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-guard',
    code: '1f482-200d-2642-fe0f'
  },
  {
    name: 'man-guard-dark-skin-tone',
    code: '1f482-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-guard-light-skin-tone',
    code: '1f482-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-guard-medium-dark-skin-tone',
    code: '1f482-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-guard-medium-light-skin-tone',
    code: '1f482-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-guard-medium-skin-tone',
    code: '1f482-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-health-worker',
    code: '1f468-200d-2695-fe0f'
  },
  {
    name: 'man-health-worker-dark-skin-tone',
    code: '1f468-1f3ff-200d-2695-fe0f'
  },
  {
    name: 'man-health-worker-light-skin-tone',
    code: '1f468-1f3fb-200d-2695-fe0f'
  },
  {
    name: 'man-health-worker-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-2695-fe0f'
  },
  {
    name: 'man-health-worker-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-2695-fe0f'
  },
  {
    name: 'man-health-worker-medium-skin-tone',
    code: '1f468-1f3fd-200d-2695-fe0f'
  },
  {
    name: 'man-in-business-suit-levitating-dark-skin-tone-female',
    code: '1f574-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'man-in-business-suit-levitating-dark-skin-tone-male',
    code: '1f574-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-in-business-suit-levitating-female',
    code: '1f574-fe0f-200d-2640-fe0f'
  },
  {
    name: 'man-in-business-suit-levitating-light-skin-tone-female',
    code: '1f574-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'man-in-business-suit-levitating-light-skin-tone-male',
    code: '1f574-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-in-business-suit-levitating-male',
    code: '1f574-fe0f-200d-2642-fe0f'
  },
  {
    name: 'man-in-business-suit-levitating-medium-dark-skin-tone-female',
    code: '1f574-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'man-in-business-suit-levitating-medium-dark-skin-tone-male',
    code: '1f574-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-in-business-suit-levitating-medium-light-skin-tone-female',
    code: '1f574-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'man-in-business-suit-levitating-medium-light-skin-tone-male',
    code: '1f574-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-in-business-suit-levitating-medium-skin-tone-female',
    code: '1f574-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'man-in-business-suit-levitating-medium-skin-tone-male',
    code: '1f574-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-in-lotus-position',
    code: '1f9d8-200d-2642-fe0f'
  },
  {
    name: 'man-in-lotus-position-dark-skin-tone',
    code: '1f9d8-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-in-lotus-position-light-skin-tone',
    code: '1f9d8-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-in-lotus-position-medium-dark-skin-tone',
    code: '1f9d8-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-in-lotus-position-medium-light-skin-tone',
    code: '1f9d8-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-in-lotus-position-medium-skin-tone',
    code: '1f9d8-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-in-manual-wheelchair',
    code: '1f468-200d-1f9bd'
  },
  {
    name: 'man-in-manual-wheelchair-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f9bd'
  },
  {
    name: 'man-in-manual-wheelchair-light-skin-tone',
    code: '1f468-1f3fb-200d-1f9bd'
  },
  {
    name: 'man-in-manual-wheelchair-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f9bd'
  },
  {
    name: 'man-in-manual-wheelchair-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f9bd'
  },
  {
    name: 'man-in-manual-wheelchair-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f9bd'
  },
  {
    name: 'man-in-motorized-wheelchair',
    code: '1f468-200d-1f9bc'
  },
  {
    name: 'man-in-motorized-wheelchair-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f9bc'
  },
  {
    name: 'man-in-motorized-wheelchair-light-skin-tone',
    code: '1f468-1f3fb-200d-1f9bc'
  },
  {
    name: 'man-in-motorized-wheelchair-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f9bc'
  },
  {
    name: 'man-in-motorized-wheelchair-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f9bc'
  },
  {
    name: 'man-in-motorized-wheelchair-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f9bc'
  },
  {
    name: 'man-in-steamy-room',
    code: '1f9d6-200d-2642-fe0f'
  },
  {
    name: 'man-in-steamy-room-dark-skin-tone',
    code: '1f9d6-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-in-steamy-room-light-skin-tone',
    code: '1f9d6-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-in-steamy-room-medium-dark-skin-tone',
    code: '1f9d6-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-in-steamy-room-medium-light-skin-tone',
    code: '1f9d6-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-in-steamy-room-medium-skin-tone',
    code: '1f9d6-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-in-tuxedo',
    code: '1f935-200d-2642-fe0f'
  },
  {
    name: 'man-in-tuxedo-dark-skin-tone',
    code: '1f935-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-in-tuxedo-light-skin-tone',
    code: '1f935-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-in-tuxedo-medium-dark-skin-tone',
    code: '1f935-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-in-tuxedo-medium-light-skin-tone',
    code: '1f935-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-in-tuxedo-medium-skin-tone',
    code: '1f935-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-judge',
    code: '1f468-200d-2696-fe0f'
  },
  {
    name: 'man-judge-dark-skin-tone',
    code: '1f468-1f3ff-200d-2696-fe0f'
  },
  {
    name: 'man-judge-light-skin-tone',
    code: '1f468-1f3fb-200d-2696-fe0f'
  },
  {
    name: 'man-judge-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-2696-fe0f'
  },
  {
    name: 'man-judge-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-2696-fe0f'
  },
  {
    name: 'man-judge-medium-skin-tone',
    code: '1f468-1f3fd-200d-2696-fe0f'
  },
  {
    name: 'man-juggling',
    code: '1f939-200d-2642-fe0f'
  },
  {
    name: 'man-juggling-dark-skin-tone',
    code: '1f939-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-juggling-light-skin-tone',
    code: '1f939-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-juggling-medium-dark-skin-tone',
    code: '1f939-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-juggling-medium-light-skin-tone',
    code: '1f939-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-juggling-medium-skin-tone',
    code: '1f939-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-kneeling',
    code: '1f9ce-200d-2642-fe0f'
  },
  {
    name: 'man-kneeling-dark-skin-tone',
    code: '1f9ce-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-kneeling-light-skin-tone',
    code: '1f9ce-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-kneeling-medium-dark-skin-tone',
    code: '1f9ce-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-kneeling-medium-light-skin-tone',
    code: '1f9ce-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-kneeling-medium-skin-tone',
    code: '1f9ce-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-lifting-weights',
    code: '1f3cb-fe0f-200d-2642-fe0f'
  },
  {
    name: 'man-lifting-weights-dark-skin-tone',
    code: '1f3cb-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-lifting-weights-light-skin-tone',
    code: '1f3cb-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-lifting-weights-medium-dark-skin-tone',
    code: '1f3cb-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-lifting-weights-medium-light-skin-tone',
    code: '1f3cb-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-lifting-weights-medium-skin-tone',
    code: '1f3cb-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-light-skin-tone',
    code: '1f468-1f3fb'
  },
  {
    name: 'man-light-skin-tone-bald',
    code: '1f468-1f3fb-200d-1f9b2'
  },
  {
    name: 'man-light-skin-tone-beard',
    code: '1f9d4-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-light-skin-tone-blond-hair',
    code: '1f471-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-light-skin-tone-christmas',
    code: '1f468-1f3fb-200d-1f384'
  },
  {
    name: 'man-light-skin-tone-curly-hair',
    code: '1f468-1f3fb-200d-1f9b1'
  },
  {
    name: 'man-light-skin-tone-red-hair',
    code: '1f468-1f3fb-200d-1f9b0'
  },
  {
    name: 'man-light-skin-tone-white-hair',
    code: '1f468-1f3fb-200d-1f9b3'
  },
  {
    name: 'man-mage',
    code: '1f9d9-200d-2642-fe0f'
  },
  {
    name: 'man-mage-dark-skin-tone',
    code: '1f9d9-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-mage-light-skin-tone',
    code: '1f9d9-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-mage-medium-dark-skin-tone',
    code: '1f9d9-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-mage-medium-light-skin-tone',
    code: '1f9d9-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-mage-medium-skin-tone',
    code: '1f9d9-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-mechanic',
    code: '1f468-200d-1f527'
  },
  {
    name: 'man-mechanic-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f527'
  },
  {
    name: 'man-mechanic-light-skin-tone',
    code: '1f468-1f3fb-200d-1f527'
  },
  {
    name: 'man-mechanic-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f527'
  },
  {
    name: 'man-mechanic-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f527'
  },
  {
    name: 'man-mechanic-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f527'
  },
  {
    name: 'man-medium-dark-skin-tone',
    code: '1f468-1f3fe'
  },
  {
    name: 'man-medium-dark-skin-tone-bald',
    code: '1f468-1f3fe-200d-1f9b2'
  },
  {
    name: 'man-medium-dark-skin-tone-beard',
    code: '1f9d4-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-medium-dark-skin-tone-blond-hair',
    code: '1f471-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-medium-dark-skin-tone-christmas',
    code: '1f468-1f3fe-200d-1f384'
  },
  {
    name: 'man-medium-dark-skin-tone-curly-hair',
    code: '1f468-1f3fe-200d-1f9b1'
  },
  {
    name: 'man-medium-dark-skin-tone-red-hair',
    code: '1f468-1f3fe-200d-1f9b0'
  },
  {
    name: 'man-medium-dark-skin-tone-white-hair',
    code: '1f468-1f3fe-200d-1f9b3'
  },
  {
    name: 'man-medium-light-skin-tone',
    code: '1f468-1f3fc'
  },
  {
    name: 'man-medium-light-skin-tone-bald',
    code: '1f468-1f3fc-200d-1f9b2'
  },
  {
    name: 'man-medium-light-skin-tone-beard',
    code: '1f9d4-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-medium-light-skin-tone-blond-hair',
    code: '1f471-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-medium-light-skin-tone-christmas',
    code: '1f468-1f3fc-200d-1f384'
  },
  {
    name: 'man-medium-light-skin-tone-curly-hair',
    code: '1f468-1f3fc-200d-1f9b1'
  },
  {
    name: 'man-medium-light-skin-tone-red-hair',
    code: '1f468-1f3fc-200d-1f9b0'
  },
  {
    name: 'man-medium-light-skin-tone-white-hair',
    code: '1f468-1f3fc-200d-1f9b3'
  },
  {
    name: 'man-medium-skin-tone',
    code: '1f468-1f3fd'
  },
  {
    name: 'man-medium-skin-tone-bald',
    code: '1f468-1f3fd-200d-1f9b2'
  },
  {
    name: 'man-medium-skin-tone-beard',
    code: '1f9d4-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-medium-skin-tone-blond-hair',
    code: '1f471-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-medium-skin-tone-christmas',
    code: '1f468-1f3fd-200d-1f384'
  },
  {
    name: 'man-medium-skin-tone-curly-hair',
    code: '1f468-1f3fd-200d-1f9b1'
  },
  {
    name: 'man-medium-skin-tone-red-hair',
    code: '1f468-1f3fd-200d-1f9b0'
  },
  {
    name: 'man-medium-skin-tone-white-hair',
    code: '1f468-1f3fd-200d-1f9b3'
  },
  {
    name: 'man-mountain-biking',
    code: '1f6b5-200d-2642-fe0f'
  },
  {
    name: 'man-mountain-biking-dark-skin-tone',
    code: '1f6b5-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-mountain-biking-light-skin-tone',
    code: '1f6b5-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-mountain-biking-medium-dark-skin-tone',
    code: '1f6b5-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-mountain-biking-medium-light-skin-tone',
    code: '1f6b5-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-mountain-biking-medium-skin-tone',
    code: '1f6b5-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-office-worker',
    code: '1f468-200d-1f4bc'
  },
  {
    name: 'man-office-worker-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f4bc'
  },
  {
    name: 'man-office-worker-light-skin-tone',
    code: '1f468-1f3fb-200d-1f4bc'
  },
  {
    name: 'man-office-worker-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f4bc'
  },
  {
    name: 'man-office-worker-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f4bc'
  },
  {
    name: 'man-office-worker-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f4bc'
  },
  {
    name: 'man-pilot',
    code: '1f468-200d-2708-fe0f'
  },
  {
    name: 'man-pilot-dark-skin-tone',
    code: '1f468-1f3ff-200d-2708-fe0f'
  },
  {
    name: 'man-pilot-light-skin-tone',
    code: '1f468-1f3fb-200d-2708-fe0f'
  },
  {
    name: 'man-pilot-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-2708-fe0f'
  },
  {
    name: 'man-pilot-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-2708-fe0f'
  },
  {
    name: 'man-pilot-medium-skin-tone',
    code: '1f468-1f3fd-200d-2708-fe0f'
  },
  {
    name: 'man-playing-handball',
    code: '1f93e-200d-2642-fe0f'
  },
  {
    name: 'man-playing-handball-dark-skin-tone',
    code: '1f93e-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-playing-handball-light-skin-tone',
    code: '1f93e-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-playing-handball-medium-dark-skin-tone',
    code: '1f93e-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-playing-handball-medium-light-skin-tone',
    code: '1f93e-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-playing-handball-medium-skin-tone',
    code: '1f93e-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-playing-water-polo',
    code: '1f93d-200d-2642-fe0f'
  },
  {
    name: 'man-playing-water-polo-dark-skin-tone',
    code: '1f93d-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-playing-water-polo-light-skin-tone',
    code: '1f93d-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-playing-water-polo-medium-dark-skin-tone',
    code: '1f93d-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-playing-water-polo-medium-light-skin-tone',
    code: '1f93d-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-playing-water-polo-medium-skin-tone',
    code: '1f93d-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-police-officer',
    code: '1f46e-200d-2642-fe0f'
  },
  {
    name: 'man-police-officer-dark-skin-tone',
    code: '1f46e-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-police-officer-light-skin-tone',
    code: '1f46e-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-police-officer-medium-dark-skin-tone',
    code: '1f46e-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-police-officer-medium-light-skin-tone',
    code: '1f46e-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-police-officer-medium-skin-tone',
    code: '1f46e-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-pouting',
    code: '1f64e-200d-2642-fe0f'
  },
  {
    name: 'man-pouting-dark-skin-tone',
    code: '1f64e-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-pouting-light-skin-tone',
    code: '1f64e-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-pouting-medium-dark-skin-tone',
    code: '1f64e-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-pouting-medium-light-skin-tone',
    code: '1f64e-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-pouting-medium-skin-tone',
    code: '1f64e-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-raising-hand',
    code: '1f64b-200d-2642-fe0f'
  },
  {
    name: 'man-raising-hand-dark-skin-tone',
    code: '1f64b-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-raising-hand-light-skin-tone',
    code: '1f64b-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-raising-hand-medium-dark-skin-tone',
    code: '1f64b-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-raising-hand-medium-light-skin-tone',
    code: '1f64b-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-raising-hand-medium-skin-tone',
    code: '1f64b-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-red-hair',
    code: '1f468-200d-1f9b0'
  },
  {
    name: 'man-rowing-boat',
    code: '1f6a3-200d-2642-fe0f'
  },
  {
    name: 'man-rowing-boat-dark-skin-tone',
    code: '1f6a3-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-rowing-boat-light-skin-tone',
    code: '1f6a3-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-rowing-boat-medium-dark-skin-tone',
    code: '1f6a3-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-rowing-boat-medium-light-skin-tone',
    code: '1f6a3-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-rowing-boat-medium-skin-tone',
    code: '1f6a3-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-running',
    code: '1f3c3-200d-2642-fe0f'
  },
  {
    name: 'man-running-dark-skin-tone',
    code: '1f3c3-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-running-light-skin-tone',
    code: '1f3c3-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-running-medium-dark-skin-tone',
    code: '1f3c3-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-running-medium-light-skin-tone',
    code: '1f3c3-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-running-medium-skin-tone',
    code: '1f3c3-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-s-shoe',
    code: '1f45e'
  },
  {
    name: 'man-scientist',
    code: '1f468-200d-1f52c'
  },
  {
    name: 'man-scientist-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f52c'
  },
  {
    name: 'man-scientist-light-skin-tone',
    code: '1f468-1f3fb-200d-1f52c'
  },
  {
    name: 'man-scientist-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f52c'
  },
  {
    name: 'man-scientist-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f52c'
  },
  {
    name: 'man-scientist-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f52c'
  },
  {
    name: 'man-shrugging',
    code: '1f937-200d-2642-fe0f'
  },
  {
    name: 'man-shrugging-dark-skin-tone',
    code: '1f937-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-shrugging-light-skin-tone',
    code: '1f937-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-shrugging-medium-dark-skin-tone',
    code: '1f937-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-shrugging-medium-light-skin-tone',
    code: '1f937-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-shrugging-medium-skin-tone',
    code: '1f937-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-singer',
    code: '1f468-200d-1f3a4'
  },
  {
    name: 'man-singer-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f3a4'
  },
  {
    name: 'man-singer-light-skin-tone',
    code: '1f468-1f3fb-200d-1f3a4'
  },
  {
    name: 'man-singer-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f3a4'
  },
  {
    name: 'man-singer-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f3a4'
  },
  {
    name: 'man-singer-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f3a4'
  },
  {
    name: 'man-standing',
    code: '1f9cd-200d-2642-fe0f'
  },
  {
    name: 'man-standing-dark-skin-tone',
    code: '1f9cd-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-standing-light-skin-tone',
    code: '1f9cd-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-standing-medium-dark-skin-tone',
    code: '1f9cd-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-standing-medium-light-skin-tone',
    code: '1f9cd-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-standing-medium-skin-tone',
    code: '1f9cd-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-student',
    code: '1f468-200d-1f393'
  },
  {
    name: 'man-student-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f393'
  },
  {
    name: 'man-student-light-skin-tone',
    code: '1f468-1f3fb-200d-1f393'
  },
  {
    name: 'man-student-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f393'
  },
  {
    name: 'man-student-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f393'
  },
  {
    name: 'man-student-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f393'
  },
  {
    name: 'man-superhero',
    code: '1f9b8-200d-2642-fe0f'
  },
  {
    name: 'man-superhero-dark-skin-tone',
    code: '1f9b8-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-superhero-light-skin-tone',
    code: '1f9b8-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-superhero-medium-dark-skin-tone',
    code: '1f9b8-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-superhero-medium-light-skin-tone',
    code: '1f9b8-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-superhero-medium-skin-tone',
    code: '1f9b8-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-supervillain',
    code: '1f9b9-200d-2642-fe0f'
  },
  {
    name: 'man-supervillain-dark-skin-tone',
    code: '1f9b9-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-supervillain-light-skin-tone',
    code: '1f9b9-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-supervillain-medium-dark-skin-tone',
    code: '1f9b9-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-supervillain-medium-light-skin-tone',
    code: '1f9b9-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-supervillain-medium-skin-tone',
    code: '1f9b9-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-surfing',
    code: '1f3c4-200d-2642-fe0f'
  },
  {
    name: 'man-surfing-dark-skin-tone',
    code: '1f3c4-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-surfing-light-skin-tone',
    code: '1f3c4-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-surfing-medium-dark-skin-tone',
    code: '1f3c4-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-surfing-medium-light-skin-tone',
    code: '1f3c4-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-surfing-medium-skin-tone',
    code: '1f3c4-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-swimming',
    code: '1f3ca-200d-2642-fe0f'
  },
  {
    name: 'man-swimming-dark-skin-tone',
    code: '1f3ca-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-swimming-light-skin-tone',
    code: '1f3ca-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-swimming-medium-dark-skin-tone',
    code: '1f3ca-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-swimming-medium-light-skin-tone',
    code: '1f3ca-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-swimming-medium-skin-tone',
    code: '1f3ca-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-teacher',
    code: '1f468-200d-1f3eb'
  },
  {
    name: 'man-teacher-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f3eb'
  },
  {
    name: 'man-teacher-light-skin-tone',
    code: '1f468-1f3fb-200d-1f3eb'
  },
  {
    name: 'man-teacher-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f3eb'
  },
  {
    name: 'man-teacher-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f3eb'
  },
  {
    name: 'man-teacher-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f3eb'
  },
  {
    name: 'man-technologist',
    code: '1f468-200d-1f4bb'
  },
  {
    name: 'man-technologist-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f4bb'
  },
  {
    name: 'man-technologist-light-skin-tone',
    code: '1f468-1f3fb-200d-1f4bb'
  },
  {
    name: 'man-technologist-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f4bb'
  },
  {
    name: 'man-technologist-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f4bb'
  },
  {
    name: 'man-technologist-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f4bb'
  },
  {
    name: 'man-tipping-hand',
    code: '1f481-200d-2642-fe0f'
  },
  {
    name: 'man-tipping-hand-dark-skin-tone',
    code: '1f481-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-tipping-hand-light-skin-tone',
    code: '1f481-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-tipping-hand-medium-dark-skin-tone',
    code: '1f481-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-tipping-hand-medium-light-skin-tone',
    code: '1f481-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-tipping-hand-medium-skin-tone',
    code: '1f481-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-vampire',
    code: '1f9db-200d-2642-fe0f'
  },
  {
    name: 'man-vampire-dark-skin-tone',
    code: '1f9db-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-vampire-light-skin-tone',
    code: '1f9db-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-vampire-medium-dark-skin-tone',
    code: '1f9db-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-vampire-medium-light-skin-tone',
    code: '1f9db-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-vampire-medium-skin-tone',
    code: '1f9db-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-walking',
    code: '1f6b6-200d-2642-fe0f'
  },
  {
    name: 'man-walking-dark-skin-tone',
    code: '1f6b6-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-walking-light-skin-tone',
    code: '1f6b6-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-walking-medium-dark-skin-tone',
    code: '1f6b6-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-walking-medium-light-skin-tone',
    code: '1f6b6-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-walking-medium-skin-tone',
    code: '1f6b6-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-wearing-turban',
    code: '1f473-200d-2642-fe0f'
  },
  {
    name: 'man-wearing-turban-dark-skin-tone',
    code: '1f473-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-wearing-turban-light-skin-tone',
    code: '1f473-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-wearing-turban-medium-dark-skin-tone',
    code: '1f473-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-wearing-turban-medium-light-skin-tone',
    code: '1f473-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-wearing-turban-medium-skin-tone',
    code: '1f473-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-white-hair',
    code: '1f468-200d-1f9b3'
  },
  {
    name: 'man-with-veil',
    code: '1f470-200d-2642-fe0f'
  },
  {
    name: 'man-with-veil-dark-skin-tone',
    code: '1f470-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'man-with-veil-light-skin-tone',
    code: '1f470-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'man-with-veil-medium-dark-skin-tone',
    code: '1f470-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'man-with-veil-medium-light-skin-tone',
    code: '1f470-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'man-with-veil-medium-skin-tone',
    code: '1f470-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'man-with-white-cane',
    code: '1f468-200d-1f9af'
  },
  {
    name: 'man-with-white-cane-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f9af'
  },
  {
    name: 'man-with-white-cane-light-skin-tone',
    code: '1f468-1f3fb-200d-1f9af'
  },
  {
    name: 'man-with-white-cane-medium-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f9af'
  },
  {
    name: 'man-with-white-cane-medium-light-skin-tone',
    code: '1f468-1f3fc-200d-1f9af'
  },
  {
    name: 'man-with-white-cane-medium-skin-tone',
    code: '1f468-1f3fd-200d-1f9af'
  },
  {
    name: 'man-zombie',
    code: '1f9df-200d-2642-fe0f'
  },
  {
    name: 'mango',
    code: '1f96d'
  },
  {
    name: 'mantelpiece-clock',
    code: '1f570'
  },
  {
    name: 'manual-wheelchair',
    code: '1f9bd'
  },
  {
    name: 'map-of-japan',
    code: '1f5fe'
  },
  {
    name: 'maple-leaf',
    code: '1f341'
  },
  {
    name: 'martial-arts-uniform',
    code: '1f94b'
  },
  {
    name: 'mate',
    code: '1f9c9'
  },
  {
    name: 'meat-on-bone',
    code: '1f356'
  },
  {
    name: 'mechanic',
    code: '1f9d1-200d-1f527'
  },
  {
    name: 'mechanic-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f527'
  },
  {
    name: 'mechanic-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f527'
  },
  {
    name: 'mechanic-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f527'
  },
  {
    name: 'mechanic-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f527'
  },
  {
    name: 'mechanic-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f527'
  },
  {
    name: 'mechanical-arm',
    code: '1f9be'
  },
  {
    name: 'mechanical-leg',
    code: '1f9bf'
  },
  {
    name: 'medical-symbol',
    code: '2695'
  },
  {
    name: 'medium-dark-skin-tone',
    code: '1f3fe'
  },
  {
    name: 'medium-light-skin-tone',
    code: '1f3fc'
  },
  {
    name: 'medium-skin-tone',
    code: '1f3fd'
  },
  {
    name: 'megaphone',
    code: '1f4e3'
  },
  {
    name: 'melon',
    code: '1f348'
  },
  {
    name: 'memo',
    code: '1f4dd'
  },
  {
    name: 'men-holding-hands',
    code: '1f46c'
  },
  {
    name: 'men-holding-hands-dark-skin-tone',
    code: '1f46c-1f3ff'
  },
  {
    name: 'men-holding-hands-dark-skin-tone-light-skin-tone',
    code: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    name: 'men-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    code: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    name: 'men-holding-hands-dark-skin-tone-medium-light-skin-tone',
    code: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    name: 'men-holding-hands-dark-skin-tone-medium-skin-tone',
    code: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    name: 'men-holding-hands-light-skin-tone',
    code: '1f46c-1f3fb'
  },
  {
    name: 'men-holding-hands-light-skin-tone-dark-skin-tone',
    code: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    name: 'men-holding-hands-light-skin-tone-medium-dark-skin-tone',
    code: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    name: 'men-holding-hands-light-skin-tone-medium-light-skin-tone',
    code: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    name: 'men-holding-hands-light-skin-tone-medium-skin-tone',
    code: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    name: 'men-holding-hands-medium-dark-skin-tone',
    code: '1f46c-1f3fe'
  },
  {
    name: 'men-holding-hands-medium-dark-skin-tone-dark-skin-tone',
    code: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    name: 'men-holding-hands-medium-dark-skin-tone-light-skin-tone',
    code: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    name: 'men-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    code: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    name: 'men-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    code: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    name: 'men-holding-hands-medium-light-skin-tone',
    code: '1f46c-1f3fc'
  },
  {
    name: 'men-holding-hands-medium-light-skin-tone-dark-skin-tone',
    code: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    name: 'men-holding-hands-medium-light-skin-tone-light-skin-tone',
    code: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    name: 'men-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    code: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    name: 'men-holding-hands-medium-light-skin-tone-medium-skin-tone',
    code: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    name: 'men-holding-hands-medium-skin-tone',
    code: '1f46c-1f3fd'
  },
  {
    name: 'men-holding-hands-medium-skin-tone-dark-skin-tone',
    code: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    name: 'men-holding-hands-medium-skin-tone-light-skin-tone',
    code: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    name: 'men-holding-hands-medium-skin-tone-medium-dark-skin-tone',
    code: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    name: 'men-holding-hands-medium-skin-tone-medium-light-skin-tone',
    code: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    name: 'men-s-room',
    code: '1f6b9'
  },
  {
    name: 'men-with-bunny-ears',
    code: '1f46f-200d-2642-fe0f'
  },
  {
    name: 'men-wrestling',
    code: '1f93c-200d-2642-fe0f'
  },
  {
    name: 'mending-heart',
    code: '2764-fe0f-200d-1fa79'
  },
  {
    name: 'menorah',
    code: '1f54e'
  },
  {
    name: 'mermaid',
    code: '1f9dc-200d-2640-fe0f'
  },
  {
    name: 'mermaid-dark-skin-tone',
    code: '1f9dc-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'mermaid-light-skin-tone',
    code: '1f9dc-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'mermaid-medium-dark-skin-tone',
    code: '1f9dc-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'mermaid-medium-light-skin-tone',
    code: '1f9dc-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'mermaid-medium-skin-tone',
    code: '1f9dc-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'merman',
    code: '1f9dc-200d-2642-fe0f'
  },
  {
    name: 'merman-dark-skin-tone',
    code: '1f9dc-1f3ff-200d-2642-fe0f'
  },
  {
    name: 'merman-light-skin-tone',
    code: '1f9dc-1f3fb-200d-2642-fe0f'
  },
  {
    name: 'merman-medium-dark-skin-tone',
    code: '1f9dc-1f3fe-200d-2642-fe0f'
  },
  {
    name: 'merman-medium-light-skin-tone',
    code: '1f9dc-1f3fc-200d-2642-fe0f'
  },
  {
    name: 'merman-medium-skin-tone',
    code: '1f9dc-1f3fd-200d-2642-fe0f'
  },
  {
    name: 'merperson',
    code: '1f9dc'
  },
  {
    name: 'merperson-dark-skin-tone',
    code: '1f9dc-1f3ff'
  },
  {
    name: 'merperson-light-skin-tone',
    code: '1f9dc-1f3fb'
  },
  {
    name: 'merperson-medium-dark-skin-tone',
    code: '1f9dc-1f3fe'
  },
  {
    name: 'merperson-medium-light-skin-tone',
    code: '1f9dc-1f3fc'
  },
  {
    name: 'merperson-medium-skin-tone',
    code: '1f9dc-1f3fd'
  },
  {
    name: 'metro',
    code: '1f687'
  },
  {
    name: 'microbe',
    code: '1f9a0'
  },
  {
    name: 'microphone',
    code: '1f3a4'
  },
  {
    name: 'microscope',
    code: '1f52c'
  },
  {
    name: 'middle-finger',
    code: '1f595'
  },
  {
    name: 'middle-finger-dark-skin-tone',
    code: '1f595-1f3ff'
  },
  {
    name: 'middle-finger-light-skin-tone',
    code: '1f595-1f3fb'
  },
  {
    name: 'middle-finger-medium-dark-skin-tone',
    code: '1f595-1f3fe'
  },
  {
    name: 'middle-finger-medium-light-skin-tone',
    code: '1f595-1f3fc'
  },
  {
    name: 'middle-finger-medium-skin-tone',
    code: '1f595-1f3fd'
  },
  {
    name: 'military-helmet',
    code: '1fa96'
  },
  {
    name: 'military-medal',
    code: '1f396'
  },
  {
    name: 'milky-way',
    code: '1f30c'
  },
  {
    name: 'minibus',
    code: '1f690'
  },
  {
    name: 'minus',
    code: '2796'
  },
  {
    name: 'mirror',
    code: '1fa9e'
  },
  {
    name: 'moai',
    code: '1f5ff'
  },
  {
    name: 'mobile-phone',
    code: '1f4f1'
  },
  {
    name: 'mobile-phone-off',
    code: '1f4f4'
  },
  {
    name: 'mobile-phone-with-arrow',
    code: '1f4f2'
  },
  {
    name: 'money-bag',
    code: '1f4b0'
  },
  {
    name: 'money-mouth-face',
    code: '1f911'
  },
  {
    name: 'money-with-wings',
    code: '1f4b8'
  },
  {
    name: 'monkey',
    code: '1f412'
  },
  {
    name: 'monkey-face',
    code: '1f435'
  },
  {
    name: 'monorail',
    code: '1f69d'
  },
  {
    name: 'moon-cake',
    code: '1f96e'
  },
  {
    name: 'moon-viewing-ceremony',
    code: '1f391'
  },
  {
    name: 'mosque',
    code: '1f54c'
  },
  {
    name: 'mosquito',
    code: '1f99f'
  },
  {
    name: 'motor-boat',
    code: '1f6e5'
  },
  {
    name: 'motor-scooter',
    code: '1f6f5'
  },
  {
    name: 'motorcycle',
    code: '1f3cd'
  },
  {
    name: 'motorized-wheelchair',
    code: '1f9bc'
  },
  {
    name: 'motorway',
    code: '1f6e3'
  },
  {
    name: 'mount-fuji',
    code: '1f5fb'
  },
  {
    name: 'mountain',
    code: '26f0'
  },
  {
    name: 'mountain-cableway',
    code: '1f6a0'
  },
  {
    name: 'mountain-railway',
    code: '1f69e'
  },
  {
    name: 'mouse',
    code: '1f401'
  },
  {
    name: 'mouse-face',
    code: '1f42d'
  },
  {
    name: 'mouse-trap',
    code: '1faa4'
  },
  {
    name: 'mouth',
    code: '1f444'
  },
  {
    name: 'movie-camera',
    code: '1f3a5'
  },
  {
    name: 'mrs-claus',
    code: '1f936'
  },
  {
    name: 'mrs-claus-dark-skin-tone',
    code: '1f936-1f3ff'
  },
  {
    name: 'mrs-claus-light-skin-tone',
    code: '1f936-1f3fb'
  },
  {
    name: 'mrs-claus-medium-dark-skin-tone',
    code: '1f936-1f3fe'
  },
  {
    name: 'mrs-claus-medium-light-skin-tone',
    code: '1f936-1f3fc'
  },
  {
    name: 'mrs-claus-medium-skin-tone',
    code: '1f936-1f3fd'
  },
  {
    name: 'multiply',
    code: '2716'
  },
  {
    name: 'mushroom',
    code: '1f344'
  },
  {
    name: 'musical-keyboard',
    code: '1f3b9'
  },
  {
    name: 'musical-note',
    code: '1f3b5'
  },
  {
    name: 'musical-notes',
    code: '1f3b6'
  },
  {
    name: 'musical-score',
    code: '1f3bc'
  },
  {
    name: 'muted-speaker',
    code: '1f507'
  },
  {
    name: 'mx-claus',
    code: '1f9d1-200d-1f384'
  },
  {
    name: 'mx-claus-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f384'
  },
  {
    name: 'mx-claus-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f384'
  },
  {
    name: 'mx-claus-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f384'
  },
  {
    name: 'mx-claus-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f384'
  },
  {
    name: 'mx-claus-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f384'
  },
  {
    name: 'nail-polish',
    code: '1f485'
  },
  {
    name: 'nail-polish-dark-skin-tone',
    code: '1f485-1f3ff'
  },
  {
    name: 'nail-polish-light-skin-tone',
    code: '1f485-1f3fb'
  },
  {
    name: 'nail-polish-medium-dark-skin-tone',
    code: '1f485-1f3fe'
  },
  {
    name: 'nail-polish-medium-light-skin-tone',
    code: '1f485-1f3fc'
  },
  {
    name: 'nail-polish-medium-skin-tone',
    code: '1f485-1f3fd'
  },
  {
    name: 'name-badge',
    code: '1f4db'
  },
  {
    name: 'national-park',
    code: '1f3de'
  },
  {
    name: 'nauseated-face',
    code: '1f922'
  },
  {
    name: 'nazar-amulet',
    code: '1f9ff'
  },
  {
    name: 'necktie',
    code: '1f454'
  },
  {
    name: 'nerd-face',
    code: '1f913'
  },
  {
    name: 'nesting-dolls',
    code: '1fa86'
  },
  {
    name: 'neutral-face',
    code: '1f610'
  },
  {
    name: 'new-button',
    code: '1f195'
  },
  {
    name: 'new-moon',
    code: '1f311'
  },
  {
    name: 'new-moon-face',
    code: '1f31a'
  },
  {
    name: 'newspaper',
    code: '1f4f0'
  },
  {
    name: 'next-track-button',
    code: '23ed'
  },
  {
    name: 'ng-button',
    code: '1f196'
  },
  {
    name: 'night-with-stars',
    code: '1f303'
  },
  {
    name: 'nine-o-clock',
    code: '1f558'
  },
  {
    name: 'nine-thirty',
    code: '1f564'
  },
  {
    name: 'ninja',
    code: '1f977'
  },
  {
    name: 'ninja-dark-skin-tone',
    code: '1f977-1f3ff'
  },
  {
    name: 'ninja-light-skin-tone',
    code: '1f977-1f3fb'
  },
  {
    name: 'ninja-medium-dark-skin-tone',
    code: '1f977-1f3fe'
  },
  {
    name: 'ninja-medium-light-skin-tone',
    code: '1f977-1f3fc'
  },
  {
    name: 'ninja-medium-skin-tone',
    code: '1f977-1f3fd'
  },
  {
    name: 'no-bicycles',
    code: '1f6b3'
  },
  {
    name: 'no-entry',
    code: '26d4'
  },
  {
    name: 'no-littering',
    code: '1f6af'
  },
  {
    name: 'no-mobile-phones',
    code: '1f4f5'
  },
  {
    name: 'no-one-under-eighteen',
    code: '1f51e'
  },
  {
    name: 'no-pedestrians',
    code: '1f6b7'
  },
  {
    name: 'no-smoking',
    code: '1f6ad'
  },
  {
    name: 'non-potable-water',
    code: '1f6b1'
  },
  {
    name: 'nose',
    code: '1f443'
  },
  {
    name: 'nose-dark-skin-tone',
    code: '1f443-1f3ff'
  },
  {
    name: 'nose-light-skin-tone',
    code: '1f443-1f3fb'
  },
  {
    name: 'nose-medium-dark-skin-tone',
    code: '1f443-1f3fe'
  },
  {
    name: 'nose-medium-light-skin-tone',
    code: '1f443-1f3fc'
  },
  {
    name: 'nose-medium-skin-tone',
    code: '1f443-1f3fd'
  },
  {
    name: 'notebook',
    code: '1f4d3'
  },
  {
    name: 'notebook-with-decorative-cover',
    code: '1f4d4'
  },
  {
    name: 'nut-and-bolt',
    code: '1f529'
  },
  {
    name: 'o-button-blood-type',
    code: '1f17e'
  },
  {
    name: 'octopus',
    code: '1f419'
  },
  {
    name: 'oden',
    code: '1f362'
  },
  {
    name: 'office-building',
    code: '1f3e2'
  },
  {
    name: 'office-worker',
    code: '1f9d1-200d-1f4bc'
  },
  {
    name: 'office-worker-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f4bc'
  },
  {
    name: 'office-worker-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f4bc'
  },
  {
    name: 'office-worker-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f4bc'
  },
  {
    name: 'office-worker-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f4bc'
  },
  {
    name: 'office-worker-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f4bc'
  },
  {
    name: 'ogre',
    code: '1f479'
  },
  {
    name: 'oil-drum',
    code: '1f6e2'
  },
  {
    name: 'ok-button',
    code: '1f197'
  },
  {
    name: 'ok-hand',
    code: '1f44c'
  },
  {
    name: 'ok-hand-dark-skin-tone',
    code: '1f44c-1f3ff'
  },
  {
    name: 'ok-hand-light-skin-tone',
    code: '1f44c-1f3fb'
  },
  {
    name: 'ok-hand-medium-dark-skin-tone',
    code: '1f44c-1f3fe'
  },
  {
    name: 'ok-hand-medium-light-skin-tone',
    code: '1f44c-1f3fc'
  },
  {
    name: 'ok-hand-medium-skin-tone',
    code: '1f44c-1f3fd'
  },
  {
    name: 'old-key',
    code: '1f5dd'
  },
  {
    name: 'old-man',
    code: '1f474'
  },
  {
    name: 'old-man-dark-skin-tone',
    code: '1f474-1f3ff'
  },
  {
    name: 'old-man-light-skin-tone',
    code: '1f474-1f3fb'
  },
  {
    name: 'old-man-medium-dark-skin-tone',
    code: '1f474-1f3fe'
  },
  {
    name: 'old-man-medium-light-skin-tone',
    code: '1f474-1f3fc'
  },
  {
    name: 'old-man-medium-skin-tone',
    code: '1f474-1f3fd'
  },
  {
    name: 'old-woman',
    code: '1f475'
  },
  {
    name: 'old-woman-dark-skin-tone',
    code: '1f475-1f3ff'
  },
  {
    name: 'old-woman-light-skin-tone',
    code: '1f475-1f3fb'
  },
  {
    name: 'old-woman-medium-dark-skin-tone',
    code: '1f475-1f3fe'
  },
  {
    name: 'old-woman-medium-light-skin-tone',
    code: '1f475-1f3fc'
  },
  {
    name: 'old-woman-medium-skin-tone',
    code: '1f475-1f3fd'
  },
  {
    name: 'older-person',
    code: '1f9d3'
  },
  {
    name: 'older-person-dark-skin-tone',
    code: '1f9d3-1f3ff'
  },
  {
    name: 'older-person-light-skin-tone',
    code: '1f9d3-1f3fb'
  },
  {
    name: 'older-person-medium-dark-skin-tone',
    code: '1f9d3-1f3fe'
  },
  {
    name: 'older-person-medium-light-skin-tone',
    code: '1f9d3-1f3fc'
  },
  {
    name: 'older-person-medium-skin-tone',
    code: '1f9d3-1f3fd'
  },
  {
    name: 'olive',
    code: '1fad2'
  },
  {
    name: 'om',
    code: '1f549'
  },
  {
    name: 'on-arrow',
    code: '1f51b'
  },
  {
    name: 'oncoming-automobile',
    code: '1f698'
  },
  {
    name: 'oncoming-bus',
    code: '1f68d'
  },
  {
    name: 'oncoming-fist',
    code: '1f44a'
  },
  {
    name: 'oncoming-fist-dark-skin-tone',
    code: '1f44a-1f3ff'
  },
  {
    name: 'oncoming-fist-light-skin-tone',
    code: '1f44a-1f3fb'
  },
  {
    name: 'oncoming-fist-medium-dark-skin-tone',
    code: '1f44a-1f3fe'
  },
  {
    name: 'oncoming-fist-medium-light-skin-tone',
    code: '1f44a-1f3fc'
  },
  {
    name: 'oncoming-fist-medium-skin-tone',
    code: '1f44a-1f3fd'
  },
  {
    name: 'oncoming-police-car',
    code: '1f694'
  },
  {
    name: 'oncoming-taxi',
    code: '1f696'
  },
  {
    name: 'one-o-clock',
    code: '1f550'
  },
  {
    name: 'one-piece-swimsuit',
    code: '1fa71'
  },
  {
    name: 'one-thirty',
    code: '1f55c'
  },
  {
    name: 'onion',
    code: '1f9c5'
  },
  {
    name: 'open-book',
    code: '1f4d6'
  },
  {
    name: 'open-file-folder',
    code: '1f4c2'
  },
  {
    name: 'open-hands',
    code: '1f450'
  },
  {
    name: 'open-hands-dark-skin-tone',
    code: '1f450-1f3ff'
  },
  {
    name: 'open-hands-light-skin-tone',
    code: '1f450-1f3fb'
  },
  {
    name: 'open-hands-medium-dark-skin-tone',
    code: '1f450-1f3fe'
  },
  {
    name: 'open-hands-medium-light-skin-tone',
    code: '1f450-1f3fc'
  },
  {
    name: 'open-hands-medium-skin-tone',
    code: '1f450-1f3fd'
  },
  {
    name: 'open-mailbox-with-lowered-flag',
    code: '1f4ed'
  },
  {
    name: 'open-mailbox-with-raised-flag',
    code: '1f4ec'
  },
  {
    name: 'ophiuchus',
    code: '26ce'
  },
  {
    name: 'optical-disk',
    code: '1f4bf'
  },
  {
    name: 'orange-book',
    code: '1f4d9'
  },
  {
    name: 'orange-circle',
    code: '1f7e0'
  },
  {
    name: 'orange-heart',
    code: '1f9e1'
  },
  {
    name: 'orange-square',
    code: '1f7e7'
  },
  {
    name: 'orangutan',
    code: '1f9a7'
  },
  {
    name: 'orthodox-cross',
    code: '2626'
  },
  {
    name: 'otter',
    code: '1f9a6'
  },
  {
    name: 'outbox-tray',
    code: '1f4e4'
  },
  {
    name: 'owl',
    code: '1f989'
  },
  {
    name: 'ox',
    code: '1f402'
  },
  {
    name: 'oyster',
    code: '1f9aa'
  },
  {
    name: 'p-button',
    code: '1f17f'
  },
  {
    name: 'package',
    code: '1f4e6'
  },
  {
    name: 'page-facing-up',
    code: '1f4c4'
  },
  {
    name: 'page-with-curl',
    code: '1f4c3'
  },
  {
    name: 'pager',
    code: '1f4df'
  },
  {
    name: 'paintbrush',
    code: '1f58c'
  },
  {
    name: 'palm-tree',
    code: '1f334'
  },
  {
    name: 'palms-up-together',
    code: '1f932'
  },
  {
    name: 'palms-up-together-dark-skin-tone',
    code: '1f932-1f3ff'
  },
  {
    name: 'palms-up-together-light-skin-tone',
    code: '1f932-1f3fb'
  },
  {
    name: 'palms-up-together-medium-dark-skin-tone',
    code: '1f932-1f3fe'
  },
  {
    name: 'palms-up-together-medium-light-skin-tone',
    code: '1f932-1f3fc'
  },
  {
    name: 'palms-up-together-medium-skin-tone',
    code: '1f932-1f3fd'
  },
  {
    name: 'pancakes',
    code: '1f95e'
  },
  {
    name: 'panda',
    code: '1f43c'
  },
  {
    name: 'paperclip',
    code: '1f4ce'
  },
  {
    name: 'parachute',
    code: '1fa82'
  },
  {
    name: 'parrot',
    code: '1f99c'
  },
  {
    name: 'part-alternation-mark',
    code: '303d'
  },
  {
    name: 'party-popper',
    code: '1f389'
  },
  {
    name: 'partying-face',
    code: '1f973'
  },
  {
    name: 'passenger-ship',
    code: '1f6f3'
  },
  {
    name: 'passport-control',
    code: '1f6c2'
  },
  {
    name: 'pause-button',
    code: '23f8'
  },
  {
    name: 'paw-prints',
    code: '1f43e'
  },
  {
    name: 'peace-symbol',
    code: '262e'
  },
  {
    name: 'peach',
    code: '1f351'
  },
  {
    name: 'peacock',
    code: '1f99a'
  },
  {
    name: 'peanuts',
    code: '1f95c'
  },
  {
    name: 'pear',
    code: '1f350'
  },
  {
    name: 'pen',
    code: '1f58a'
  },
  {
    name: 'pencil',
    code: '270f'
  },
  {
    name: 'penguin',
    code: '1f427'
  },
  {
    name: 'pensive-face',
    code: '1f614'
  },
  {
    name: 'people-holding-hands',
    code: '1f9d1-200d-1f91d-200d-1f9d1'
  },
  {
    name: 'people-holding-hands-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff'
  },
  {
    name: 'people-holding-hands-dark-skin-tone-light-skin-tone',
    code: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb'
  },
  {
    name: 'people-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe'
  },
  {
    name: 'people-holding-hands-dark-skin-tone-medium-light-skin-tone',
    code: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc'
  },
  {
    name: 'people-holding-hands-dark-skin-tone-medium-skin-tone',
    code: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd'
  },
  {
    name: 'people-holding-hands-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb'
  },
  {
    name: 'people-holding-hands-light-skin-tone-dark-skin-tone',
    code: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff'
  },
  {
    name: 'people-holding-hands-light-skin-tone-medium-dark-skin-tone',
    code: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe'
  },
  {
    name: 'people-holding-hands-light-skin-tone-medium-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc'
  },
  {
    name: 'people-holding-hands-light-skin-tone-medium-skin-tone',
    code: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd'
  },
  {
    name: 'people-holding-hands-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe'
  },
  {
    name: 'people-holding-hands-medium-dark-skin-tone-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff'
  },
  {
    name: 'people-holding-hands-medium-dark-skin-tone-light-skin-tone',
    code: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb'
  },
  {
    name: 'people-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    code: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc'
  },
  {
    name: 'people-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    code: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd'
  },
  {
    name: 'people-holding-hands-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc'
  },
  {
    name: 'people-holding-hands-medium-light-skin-tone-dark-skin-tone',
    code: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff'
  },
  {
    name: 'people-holding-hands-medium-light-skin-tone-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb'
  },
  {
    name: 'people-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    code: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe'
  },
  {
    name: 'people-holding-hands-medium-light-skin-tone-medium-skin-tone',
    code: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd'
  },
  {
    name: 'people-holding-hands-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd'
  },
  {
    name: 'people-holding-hands-medium-skin-tone-dark-skin-tone',
    code: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff'
  },
  {
    name: 'people-holding-hands-medium-skin-tone-light-skin-tone',
    code: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb'
  },
  {
    name: 'people-holding-hands-medium-skin-tone-medium-dark-skin-tone',
    code: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe'
  },
  {
    name: 'people-holding-hands-medium-skin-tone-medium-light-skin-tone',
    code: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc'
  },
  {
    name: 'people-hugging',
    code: '1fac2'
  },
  {
    name: 'people-with-bunny-ears',
    code: '1f46f'
  },
  {
    name: 'people-wrestling',
    code: '1f93c'
  },
  {
    name: 'performing-arts',
    code: '1f3ad'
  },
  {
    name: 'persevering-face',
    code: '1f623'
  },
  {
    name: 'person',
    code: '1f9d1'
  },
  {
    name: 'person-bald',
    code: '1f9d1-200d-1f9b2'
  },
  {
    name: 'person-beard',
    code: '1f9d4'
  },
  {
    name: 'person-biking',
    code: '1f6b4'
  },
  {
    name: 'person-biking-dark-skin-tone',
    code: '1f6b4-1f3ff'
  },
  {
    name: 'person-biking-light-skin-tone',
    code: '1f6b4-1f3fb'
  },
  {
    name: 'person-biking-medium-dark-skin-tone',
    code: '1f6b4-1f3fe'
  },
  {
    name: 'person-biking-medium-light-skin-tone',
    code: '1f6b4-1f3fc'
  },
  {
    name: 'person-biking-medium-skin-tone',
    code: '1f6b4-1f3fd'
  },
  {
    name: 'person-blond-hair',
    code: '1f471'
  },
  {
    name: 'person-bouncing-ball',
    code: '26f9'
  },
  {
    name: 'person-bouncing-ball-dark-skin-tone',
    code: '26f9-1f3ff'
  },
  {
    name: 'person-bouncing-ball-light-skin-tone',
    code: '26f9-1f3fb'
  },
  {
    name: 'person-bouncing-ball-medium-dark-skin-tone',
    code: '26f9-1f3fe'
  },
  {
    name: 'person-bouncing-ball-medium-light-skin-tone',
    code: '26f9-1f3fc'
  },
  {
    name: 'person-bouncing-ball-medium-skin-tone',
    code: '26f9-1f3fd'
  },
  {
    name: 'person-bowing',
    code: '1f647'
  },
  {
    name: 'person-bowing-dark-skin-tone',
    code: '1f647-1f3ff'
  },
  {
    name: 'person-bowing-light-skin-tone',
    code: '1f647-1f3fb'
  },
  {
    name: 'person-bowing-medium-dark-skin-tone',
    code: '1f647-1f3fe'
  },
  {
    name: 'person-bowing-medium-light-skin-tone',
    code: '1f647-1f3fc'
  },
  {
    name: 'person-bowing-medium-skin-tone',
    code: '1f647-1f3fd'
  },
  {
    name: 'person-cartwheeling',
    code: '1f938'
  },
  {
    name: 'person-cartwheeling-dark-skin-tone',
    code: '1f938-1f3ff'
  },
  {
    name: 'person-cartwheeling-light-skin-tone',
    code: '1f938-1f3fb'
  },
  {
    name: 'person-cartwheeling-medium-dark-skin-tone',
    code: '1f938-1f3fe'
  },
  {
    name: 'person-cartwheeling-medium-light-skin-tone',
    code: '1f938-1f3fc'
  },
  {
    name: 'person-cartwheeling-medium-skin-tone',
    code: '1f938-1f3fd'
  },
  {
    name: 'person-climbing',
    code: '1f9d7'
  },
  {
    name: 'person-climbing-dark-skin-tone',
    code: '1f9d7-1f3ff'
  },
  {
    name: 'person-climbing-light-skin-tone',
    code: '1f9d7-1f3fb'
  },
  {
    name: 'person-climbing-medium-dark-skin-tone',
    code: '1f9d7-1f3fe'
  },
  {
    name: 'person-climbing-medium-light-skin-tone',
    code: '1f9d7-1f3fc'
  },
  {
    name: 'person-climbing-medium-skin-tone',
    code: '1f9d7-1f3fd'
  },
  {
    name: 'person-curly-hair',
    code: '1f9d1-200d-1f9b1'
  },
  {
    name: 'person-dark-skin-tone',
    code: '1f9d1-1f3ff'
  },
  {
    name: 'person-dark-skin-tone-bald',
    code: '1f9d1-1f3ff-200d-1f9b2'
  },
  {
    name: 'person-dark-skin-tone-beard',
    code: '1f9d4-1f3ff'
  },
  {
    name: 'person-dark-skin-tone-blond-hair',
    code: '1f471-1f3ff'
  },
  {
    name: 'person-dark-skin-tone-curly-hair',
    code: '1f9d1-1f3ff-200d-1f9b1'
  },
  {
    name: 'person-dark-skin-tone-red-hair',
    code: '1f9d1-1f3ff-200d-1f9b0'
  },
  {
    name: 'person-dark-skin-tone-white-hair',
    code: '1f9d1-1f3ff-200d-1f9b3'
  },
  {
    name: 'person-facepalming',
    code: '1f926'
  },
  {
    name: 'person-facepalming-dark-skin-tone',
    code: '1f926-1f3ff'
  },
  {
    name: 'person-facepalming-light-skin-tone',
    code: '1f926-1f3fb'
  },
  {
    name: 'person-facepalming-medium-dark-skin-tone',
    code: '1f926-1f3fe'
  },
  {
    name: 'person-facepalming-medium-light-skin-tone',
    code: '1f926-1f3fc'
  },
  {
    name: 'person-facepalming-medium-skin-tone',
    code: '1f926-1f3fd'
  },
  {
    name: 'person-feeding-baby',
    code: '1f9d1-200d-1f37c'
  },
  {
    name: 'person-feeding-baby-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f37c'
  },
  {
    name: 'person-feeding-baby-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f37c'
  },
  {
    name: 'person-feeding-baby-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f37c'
  },
  {
    name: 'person-feeding-baby-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f37c'
  },
  {
    name: 'person-feeding-baby-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f37c'
  },
  {
    name: 'person-fencing',
    code: '1f93a'
  },
  {
    name: 'person-frowning',
    code: '1f64d'
  },
  {
    name: 'person-frowning-dark-skin-tone',
    code: '1f64d-1f3ff'
  },
  {
    name: 'person-frowning-light-skin-tone',
    code: '1f64d-1f3fb'
  },
  {
    name: 'person-frowning-medium-dark-skin-tone',
    code: '1f64d-1f3fe'
  },
  {
    name: 'person-frowning-medium-light-skin-tone',
    code: '1f64d-1f3fc'
  },
  {
    name: 'person-frowning-medium-skin-tone',
    code: '1f64d-1f3fd'
  },
  {
    name: 'person-gesturing-no',
    code: '1f645'
  },
  {
    name: 'person-gesturing-no-dark-skin-tone',
    code: '1f645-1f3ff'
  },
  {
    name: 'person-gesturing-no-light-skin-tone',
    code: '1f645-1f3fb'
  },
  {
    name: 'person-gesturing-no-medium-dark-skin-tone',
    code: '1f645-1f3fe'
  },
  {
    name: 'person-gesturing-no-medium-light-skin-tone',
    code: '1f645-1f3fc'
  },
  {
    name: 'person-gesturing-no-medium-skin-tone',
    code: '1f645-1f3fd'
  },
  {
    name: 'person-gesturing-ok',
    code: '1f646'
  },
  {
    name: 'person-gesturing-ok-dark-skin-tone',
    code: '1f646-1f3ff'
  },
  {
    name: 'person-gesturing-ok-light-skin-tone',
    code: '1f646-1f3fb'
  },
  {
    name: 'person-gesturing-ok-medium-dark-skin-tone',
    code: '1f646-1f3fe'
  },
  {
    name: 'person-gesturing-ok-medium-light-skin-tone',
    code: '1f646-1f3fc'
  },
  {
    name: 'person-gesturing-ok-medium-skin-tone',
    code: '1f646-1f3fd'
  },
  {
    name: 'person-getting-haircut',
    code: '1f487'
  },
  {
    name: 'person-getting-haircut-dark-skin-tone',
    code: '1f487-1f3ff'
  },
  {
    name: 'person-getting-haircut-light-skin-tone',
    code: '1f487-1f3fb'
  },
  {
    name: 'person-getting-haircut-medium-dark-skin-tone',
    code: '1f487-1f3fe'
  },
  {
    name: 'person-getting-haircut-medium-light-skin-tone',
    code: '1f487-1f3fc'
  },
  {
    name: 'person-getting-haircut-medium-skin-tone',
    code: '1f487-1f3fd'
  },
  {
    name: 'person-getting-massage',
    code: '1f486'
  },
  {
    name: 'person-getting-massage-dark-skin-tone',
    code: '1f486-1f3ff'
  },
  {
    name: 'person-getting-massage-light-skin-tone',
    code: '1f486-1f3fb'
  },
  {
    name: 'person-getting-massage-medium-dark-skin-tone',
    code: '1f486-1f3fe'
  },
  {
    name: 'person-getting-massage-medium-light-skin-tone',
    code: '1f486-1f3fc'
  },
  {
    name: 'person-getting-massage-medium-skin-tone',
    code: '1f486-1f3fd'
  },
  {
    name: 'person-golfing',
    code: '1f3cc'
  },
  {
    name: 'person-golfing-dark-skin-tone',
    code: '1f3cc-1f3ff'
  },
  {
    name: 'person-golfing-light-skin-tone',
    code: '1f3cc-1f3fb'
  },
  {
    name: 'person-golfing-medium-dark-skin-tone',
    code: '1f3cc-1f3fe'
  },
  {
    name: 'person-golfing-medium-light-skin-tone',
    code: '1f3cc-1f3fc'
  },
  {
    name: 'person-golfing-medium-skin-tone',
    code: '1f3cc-1f3fd'
  },
  {
    name: 'person-in-bed',
    code: '1f6cc'
  },
  {
    name: 'person-in-bed-dark-skin-tone',
    code: '1f6cc-1f3ff'
  },
  {
    name: 'person-in-bed-light-skin-tone',
    code: '1f6cc-1f3fb'
  },
  {
    name: 'person-in-bed-medium-dark-skin-tone',
    code: '1f6cc-1f3fe'
  },
  {
    name: 'person-in-bed-medium-light-skin-tone',
    code: '1f6cc-1f3fc'
  },
  {
    name: 'person-in-bed-medium-skin-tone',
    code: '1f6cc-1f3fd'
  },
  {
    name: 'person-in-lotus-position',
    code: '1f9d8'
  },
  {
    name: 'person-in-lotus-position-dark-skin-tone',
    code: '1f9d8-1f3ff'
  },
  {
    name: 'person-in-lotus-position-light-skin-tone',
    code: '1f9d8-1f3fb'
  },
  {
    name: 'person-in-lotus-position-medium-dark-skin-tone',
    code: '1f9d8-1f3fe'
  },
  {
    name: 'person-in-lotus-position-medium-light-skin-tone',
    code: '1f9d8-1f3fc'
  },
  {
    name: 'person-in-lotus-position-medium-skin-tone',
    code: '1f9d8-1f3fd'
  },
  {
    name: 'person-in-manual-wheelchair',
    code: '1f9d1-200d-1f9bd'
  },
  {
    name: 'person-in-manual-wheelchair-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f9bd'
  },
  {
    name: 'person-in-manual-wheelchair-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f9bd'
  },
  {
    name: 'person-in-manual-wheelchair-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f9bd'
  },
  {
    name: 'person-in-manual-wheelchair-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f9bd'
  },
  {
    name: 'person-in-manual-wheelchair-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f9bd'
  },
  {
    name: 'person-in-motorized-wheelchair',
    code: '1f9d1-200d-1f9bc'
  },
  {
    name: 'person-in-motorized-wheelchair-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f9bc'
  },
  {
    name: 'person-in-motorized-wheelchair-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f9bc'
  },
  {
    name: 'person-in-motorized-wheelchair-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f9bc'
  },
  {
    name: 'person-in-motorized-wheelchair-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f9bc'
  },
  {
    name: 'person-in-motorized-wheelchair-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f9bc'
  },
  {
    name: 'person-in-steamy-room',
    code: '1f9d6'
  },
  {
    name: 'person-in-steamy-room-dark-skin-tone',
    code: '1f9d6-1f3ff'
  },
  {
    name: 'person-in-steamy-room-light-skin-tone',
    code: '1f9d6-1f3fb'
  },
  {
    name: 'person-in-steamy-room-medium-dark-skin-tone',
    code: '1f9d6-1f3fe'
  },
  {
    name: 'person-in-steamy-room-medium-light-skin-tone',
    code: '1f9d6-1f3fc'
  },
  {
    name: 'person-in-steamy-room-medium-skin-tone',
    code: '1f9d6-1f3fd'
  },
  {
    name: 'person-in-suit-levitating',
    code: '1f574'
  },
  {
    name: 'person-in-suit-levitating-dark-skin-tone',
    code: '1f574-1f3ff'
  },
  {
    name: 'person-in-suit-levitating-light-skin-tone',
    code: '1f574-1f3fb'
  },
  {
    name: 'person-in-suit-levitating-medium-dark-skin-tone',
    code: '1f574-1f3fe'
  },
  {
    name: 'person-in-suit-levitating-medium-light-skin-tone',
    code: '1f574-1f3fc'
  },
  {
    name: 'person-in-suit-levitating-medium-skin-tone',
    code: '1f574-1f3fd'
  },
  {
    name: 'person-in-tuxedo',
    code: '1f935'
  },
  {
    name: 'person-in-tuxedo-dark-skin-tone',
    code: '1f935-1f3ff'
  },
  {
    name: 'person-in-tuxedo-light-skin-tone',
    code: '1f935-1f3fb'
  },
  {
    name: 'person-in-tuxedo-medium-dark-skin-tone',
    code: '1f935-1f3fe'
  },
  {
    name: 'person-in-tuxedo-medium-light-skin-tone',
    code: '1f935-1f3fc'
  },
  {
    name: 'person-in-tuxedo-medium-skin-tone',
    code: '1f935-1f3fd'
  },
  {
    name: 'person-juggling',
    code: '1f939'
  },
  {
    name: 'person-juggling-dark-skin-tone',
    code: '1f939-1f3ff'
  },
  {
    name: 'person-juggling-light-skin-tone',
    code: '1f939-1f3fb'
  },
  {
    name: 'person-juggling-medium-dark-skin-tone',
    code: '1f939-1f3fe'
  },
  {
    name: 'person-juggling-medium-light-skin-tone',
    code: '1f939-1f3fc'
  },
  {
    name: 'person-juggling-medium-skin-tone',
    code: '1f939-1f3fd'
  },
  {
    name: 'person-kneeling',
    code: '1f9ce'
  },
  {
    name: 'person-kneeling-dark-skin-tone',
    code: '1f9ce-1f3ff'
  },
  {
    name: 'person-kneeling-light-skin-tone',
    code: '1f9ce-1f3fb'
  },
  {
    name: 'person-kneeling-medium-dark-skin-tone',
    code: '1f9ce-1f3fe'
  },
  {
    name: 'person-kneeling-medium-light-skin-tone',
    code: '1f9ce-1f3fc'
  },
  {
    name: 'person-kneeling-medium-skin-tone',
    code: '1f9ce-1f3fd'
  },
  {
    name: 'person-lifting-weights',
    code: '1f3cb'
  },
  {
    name: 'person-lifting-weights-dark-skin-tone',
    code: '1f3cb-1f3ff'
  },
  {
    name: 'person-lifting-weights-light-skin-tone',
    code: '1f3cb-1f3fb'
  },
  {
    name: 'person-lifting-weights-medium-dark-skin-tone',
    code: '1f3cb-1f3fe'
  },
  {
    name: 'person-lifting-weights-medium-light-skin-tone',
    code: '1f3cb-1f3fc'
  },
  {
    name: 'person-lifting-weights-medium-skin-tone',
    code: '1f3cb-1f3fd'
  },
  {
    name: 'person-light-skin-tone',
    code: '1f9d1-1f3fb'
  },
  {
    name: 'person-light-skin-tone-bald',
    code: '1f9d1-1f3fb-200d-1f9b2'
  },
  {
    name: 'person-light-skin-tone-beard',
    code: '1f9d4-1f3fb'
  },
  {
    name: 'person-light-skin-tone-blond-hair',
    code: '1f471-1f3fb'
  },
  {
    name: 'person-light-skin-tone-curly-hair',
    code: '1f9d1-1f3fb-200d-1f9b1'
  },
  {
    name: 'person-light-skin-tone-red-hair',
    code: '1f9d1-1f3fb-200d-1f9b0'
  },
  {
    name: 'person-light-skin-tone-white-hair',
    code: '1f9d1-1f3fb-200d-1f9b3'
  },
  {
    name: 'person-medium-dark-skin-tone',
    code: '1f9d1-1f3fe'
  },
  {
    name: 'person-medium-dark-skin-tone-bald',
    code: '1f9d1-1f3fe-200d-1f9b2'
  },
  {
    name: 'person-medium-dark-skin-tone-beard',
    code: '1f9d4-1f3fe'
  },
  {
    name: 'person-medium-dark-skin-tone-blond-hair',
    code: '1f471-1f3fe'
  },
  {
    name: 'person-medium-dark-skin-tone-curly-hair',
    code: '1f9d1-1f3fe-200d-1f9b1'
  },
  {
    name: 'person-medium-dark-skin-tone-red-hair',
    code: '1f9d1-1f3fe-200d-1f9b0'
  },
  {
    name: 'person-medium-dark-skin-tone-white-hair',
    code: '1f9d1-1f3fe-200d-1f9b3'
  },
  {
    name: 'person-medium-light-skin-tone',
    code: '1f9d1-1f3fc'
  },
  {
    name: 'person-medium-light-skin-tone-bald',
    code: '1f9d1-1f3fc-200d-1f9b2'
  },
  {
    name: 'person-medium-light-skin-tone-beard',
    code: '1f9d4-1f3fc'
  },
  {
    name: 'person-medium-light-skin-tone-blond-hair',
    code: '1f471-1f3fc'
  },
  {
    name: 'person-medium-light-skin-tone-curly-hair',
    code: '1f9d1-1f3fc-200d-1f9b1'
  },
  {
    name: 'person-medium-light-skin-tone-red-hair',
    code: '1f9d1-1f3fc-200d-1f9b0'
  },
  {
    name: 'person-medium-light-skin-tone-white-hair',
    code: '1f9d1-1f3fc-200d-1f9b3'
  },
  {
    name: 'person-medium-skin-tone',
    code: '1f9d1-1f3fd'
  },
  {
    name: 'person-medium-skin-tone-bald',
    code: '1f9d1-1f3fd-200d-1f9b2'
  },
  {
    name: 'person-medium-skin-tone-beard',
    code: '1f9d4-1f3fd'
  },
  {
    name: 'person-medium-skin-tone-blond-hair',
    code: '1f471-1f3fd'
  },
  {
    name: 'person-medium-skin-tone-curly-hair',
    code: '1f9d1-1f3fd-200d-1f9b1'
  },
  {
    name: 'person-medium-skin-tone-red-hair',
    code: '1f9d1-1f3fd-200d-1f9b0'
  },
  {
    name: 'person-medium-skin-tone-white-hair',
    code: '1f9d1-1f3fd-200d-1f9b3'
  },
  {
    name: 'person-mountain-biking',
    code: '1f6b5'
  },
  {
    name: 'person-mountain-biking-dark-skin-tone',
    code: '1f6b5-1f3ff'
  },
  {
    name: 'person-mountain-biking-light-skin-tone',
    code: '1f6b5-1f3fb'
  },
  {
    name: 'person-mountain-biking-medium-dark-skin-tone',
    code: '1f6b5-1f3fe'
  },
  {
    name: 'person-mountain-biking-medium-light-skin-tone',
    code: '1f6b5-1f3fc'
  },
  {
    name: 'person-mountain-biking-medium-skin-tone',
    code: '1f6b5-1f3fd'
  },
  {
    name: 'person-playing-handball',
    code: '1f93e'
  },
  {
    name: 'person-playing-handball-dark-skin-tone',
    code: '1f93e-1f3ff'
  },
  {
    name: 'person-playing-handball-light-skin-tone',
    code: '1f93e-1f3fb'
  },
  {
    name: 'person-playing-handball-medium-dark-skin-tone',
    code: '1f93e-1f3fe'
  },
  {
    name: 'person-playing-handball-medium-light-skin-tone',
    code: '1f93e-1f3fc'
  },
  {
    name: 'person-playing-handball-medium-skin-tone',
    code: '1f93e-1f3fd'
  },
  {
    name: 'person-playing-water-polo',
    code: '1f93d'
  },
  {
    name: 'person-playing-water-polo-dark-skin-tone',
    code: '1f93d-1f3ff'
  },
  {
    name: 'person-playing-water-polo-light-skin-tone',
    code: '1f93d-1f3fb'
  },
  {
    name: 'person-playing-water-polo-medium-dark-skin-tone',
    code: '1f93d-1f3fe'
  },
  {
    name: 'person-playing-water-polo-medium-light-skin-tone',
    code: '1f93d-1f3fc'
  },
  {
    name: 'person-playing-water-polo-medium-skin-tone',
    code: '1f93d-1f3fd'
  },
  {
    name: 'person-pouting',
    code: '1f64e'
  },
  {
    name: 'person-pouting-dark-skin-tone',
    code: '1f64e-1f3ff'
  },
  {
    name: 'person-pouting-light-skin-tone',
    code: '1f64e-1f3fb'
  },
  {
    name: 'person-pouting-medium-dark-skin-tone',
    code: '1f64e-1f3fe'
  },
  {
    name: 'person-pouting-medium-light-skin-tone',
    code: '1f64e-1f3fc'
  },
  {
    name: 'person-pouting-medium-skin-tone',
    code: '1f64e-1f3fd'
  },
  {
    name: 'person-raising-hand',
    code: '1f64b'
  },
  {
    name: 'person-raising-hand-dark-skin-tone',
    code: '1f64b-1f3ff'
  },
  {
    name: 'person-raising-hand-light-skin-tone',
    code: '1f64b-1f3fb'
  },
  {
    name: 'person-raising-hand-medium-dark-skin-tone',
    code: '1f64b-1f3fe'
  },
  {
    name: 'person-raising-hand-medium-light-skin-tone',
    code: '1f64b-1f3fc'
  },
  {
    name: 'person-raising-hand-medium-skin-tone',
    code: '1f64b-1f3fd'
  },
  {
    name: 'person-red-hair',
    code: '1f9d1-200d-1f9b0'
  },
  {
    name: 'person-rowing-boat',
    code: '1f6a3'
  },
  {
    name: 'person-rowing-boat-dark-skin-tone',
    code: '1f6a3-1f3ff'
  },
  {
    name: 'person-rowing-boat-light-skin-tone',
    code: '1f6a3-1f3fb'
  },
  {
    name: 'person-rowing-boat-medium-dark-skin-tone',
    code: '1f6a3-1f3fe'
  },
  {
    name: 'person-rowing-boat-medium-light-skin-tone',
    code: '1f6a3-1f3fc'
  },
  {
    name: 'person-rowing-boat-medium-skin-tone',
    code: '1f6a3-1f3fd'
  },
  {
    name: 'person-running',
    code: '1f3c3'
  },
  {
    name: 'person-running-dark-skin-tone',
    code: '1f3c3-1f3ff'
  },
  {
    name: 'person-running-light-skin-tone',
    code: '1f3c3-1f3fb'
  },
  {
    name: 'person-running-medium-dark-skin-tone',
    code: '1f3c3-1f3fe'
  },
  {
    name: 'person-running-medium-light-skin-tone',
    code: '1f3c3-1f3fc'
  },
  {
    name: 'person-running-medium-skin-tone',
    code: '1f3c3-1f3fd'
  },
  {
    name: 'person-shrugging',
    code: '1f937'
  },
  {
    name: 'person-shrugging-dark-skin-tone',
    code: '1f937-1f3ff'
  },
  {
    name: 'person-shrugging-light-skin-tone',
    code: '1f937-1f3fb'
  },
  {
    name: 'person-shrugging-medium-dark-skin-tone',
    code: '1f937-1f3fe'
  },
  {
    name: 'person-shrugging-medium-light-skin-tone',
    code: '1f937-1f3fc'
  },
  {
    name: 'person-shrugging-medium-skin-tone',
    code: '1f937-1f3fd'
  },
  {
    name: 'person-standing',
    code: '1f9cd'
  },
  {
    name: 'person-standing-dark-skin-tone',
    code: '1f9cd-1f3ff'
  },
  {
    name: 'person-standing-light-skin-tone',
    code: '1f9cd-1f3fb'
  },
  {
    name: 'person-standing-medium-dark-skin-tone',
    code: '1f9cd-1f3fe'
  },
  {
    name: 'person-standing-medium-light-skin-tone',
    code: '1f9cd-1f3fc'
  },
  {
    name: 'person-standing-medium-skin-tone',
    code: '1f9cd-1f3fd'
  },
  {
    name: 'person-surfing',
    code: '1f3c4'
  },
  {
    name: 'person-surfing-dark-skin-tone',
    code: '1f3c4-1f3ff'
  },
  {
    name: 'person-surfing-light-skin-tone',
    code: '1f3c4-1f3fb'
  },
  {
    name: 'person-surfing-medium-dark-skin-tone',
    code: '1f3c4-1f3fe'
  },
  {
    name: 'person-surfing-medium-light-skin-tone',
    code: '1f3c4-1f3fc'
  },
  {
    name: 'person-surfing-medium-skin-tone',
    code: '1f3c4-1f3fd'
  },
  {
    name: 'person-swimming',
    code: '1f3ca'
  },
  {
    name: 'person-swimming-dark-skin-tone',
    code: '1f3ca-1f3ff'
  },
  {
    name: 'person-swimming-light-skin-tone',
    code: '1f3ca-1f3fb'
  },
  {
    name: 'person-swimming-medium-dark-skin-tone',
    code: '1f3ca-1f3fe'
  },
  {
    name: 'person-swimming-medium-light-skin-tone',
    code: '1f3ca-1f3fc'
  },
  {
    name: 'person-swimming-medium-skin-tone',
    code: '1f3ca-1f3fd'
  },
  {
    name: 'person-taking-bath',
    code: '1f6c0'
  },
  {
    name: 'person-taking-bath-dark-skin-tone',
    code: '1f6c0-1f3ff'
  },
  {
    name: 'person-taking-bath-light-skin-tone',
    code: '1f6c0-1f3fb'
  },
  {
    name: 'person-taking-bath-medium-dark-skin-tone',
    code: '1f6c0-1f3fe'
  },
  {
    name: 'person-taking-bath-medium-light-skin-tone',
    code: '1f6c0-1f3fc'
  },
  {
    name: 'person-taking-bath-medium-skin-tone',
    code: '1f6c0-1f3fd'
  },
  {
    name: 'person-tipping-hand',
    code: '1f481'
  },
  {
    name: 'person-tipping-hand-dark-skin-tone',
    code: '1f481-1f3ff'
  },
  {
    name: 'person-tipping-hand-light-skin-tone',
    code: '1f481-1f3fb'
  },
  {
    name: 'person-tipping-hand-medium-dark-skin-tone',
    code: '1f481-1f3fe'
  },
  {
    name: 'person-tipping-hand-medium-light-skin-tone',
    code: '1f481-1f3fc'
  },
  {
    name: 'person-tipping-hand-medium-skin-tone',
    code: '1f481-1f3fd'
  },
  {
    name: 'person-walking',
    code: '1f6b6'
  },
  {
    name: 'person-walking-dark-skin-tone',
    code: '1f6b6-1f3ff'
  },
  {
    name: 'person-walking-light-skin-tone',
    code: '1f6b6-1f3fb'
  },
  {
    name: 'person-walking-medium-dark-skin-tone',
    code: '1f6b6-1f3fe'
  },
  {
    name: 'person-walking-medium-light-skin-tone',
    code: '1f6b6-1f3fc'
  },
  {
    name: 'person-walking-medium-skin-tone',
    code: '1f6b6-1f3fd'
  },
  {
    name: 'person-wearing-turban',
    code: '1f473'
  },
  {
    name: 'person-wearing-turban-dark-skin-tone',
    code: '1f473-1f3ff'
  },
  {
    name: 'person-wearing-turban-light-skin-tone',
    code: '1f473-1f3fb'
  },
  {
    name: 'person-wearing-turban-medium-dark-skin-tone',
    code: '1f473-1f3fe'
  },
  {
    name: 'person-wearing-turban-medium-light-skin-tone',
    code: '1f473-1f3fc'
  },
  {
    name: 'person-wearing-turban-medium-skin-tone',
    code: '1f473-1f3fd'
  },
  {
    name: 'person-white-hair',
    code: '1f9d1-200d-1f9b3'
  },
  {
    name: 'person-with-skullcap',
    code: '1f472'
  },
  {
    name: 'person-with-skullcap-dark-skin-tone',
    code: '1f472-1f3ff'
  },
  {
    name: 'person-with-skullcap-light-skin-tone',
    code: '1f472-1f3fb'
  },
  {
    name: 'person-with-skullcap-medium-dark-skin-tone',
    code: '1f472-1f3fe'
  },
  {
    name: 'person-with-skullcap-medium-light-skin-tone',
    code: '1f472-1f3fc'
  },
  {
    name: 'person-with-skullcap-medium-skin-tone',
    code: '1f472-1f3fd'
  },
  {
    name: 'person-with-veil',
    code: '1f470'
  },
  {
    name: 'person-with-veil-dark-skin-tone',
    code: '1f470-1f3ff'
  },
  {
    name: 'person-with-veil-light-skin-tone',
    code: '1f470-1f3fb'
  },
  {
    name: 'person-with-veil-medium-dark-skin-tone',
    code: '1f470-1f3fe'
  },
  {
    name: 'person-with-veil-medium-light-skin-tone',
    code: '1f470-1f3fc'
  },
  {
    name: 'person-with-veil-medium-skin-tone',
    code: '1f470-1f3fd'
  },
  {
    name: 'person-with-white-cane',
    code: '1f9d1-200d-1f9af'
  },
  {
    name: 'person-with-white-cane-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f9af'
  },
  {
    name: 'person-with-white-cane-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f9af'
  },
  {
    name: 'person-with-white-cane-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f9af'
  },
  {
    name: 'person-with-white-cane-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f9af'
  },
  {
    name: 'person-with-white-cane-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f9af'
  },
  {
    name: 'petri-dish',
    code: '1f9eb'
  },
  {
    name: 'pi-ata',
    code: '1fa85'
  },
  {
    name: 'pick',
    code: '26cf'
  },
  {
    name: 'pickup-truck',
    code: '1f6fb'
  },
  {
    name: 'pie',
    code: '1f967'
  },
  {
    name: 'pig',
    code: '1f416'
  },
  {
    name: 'pig-face',
    code: '1f437'
  },
  {
    name: 'pig-nose',
    code: '1f43d'
  },
  {
    name: 'pile-of-poo',
    code: '1f4a9'
  },
  {
    name: 'pill',
    code: '1f48a'
  },
  {
    name: 'pilot',
    code: '1f9d1-200d-2708-fe0f'
  },
  {
    name: 'pilot-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-2708-fe0f'
  },
  {
    name: 'pilot-light-skin-tone',
    code: '1f9d1-1f3fb-200d-2708-fe0f'
  },
  {
    name: 'pilot-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-2708-fe0f'
  },
  {
    name: 'pilot-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-2708-fe0f'
  },
  {
    name: 'pilot-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-2708-fe0f'
  },
  {
    name: 'pinched-fingers',
    code: '1f90c'
  },
  {
    name: 'pinched-fingers-dark-skin-tone',
    code: '1f90c-1f3ff'
  },
  {
    name: 'pinched-fingers-light-skin-tone',
    code: '1f90c-1f3fb'
  },
  {
    name: 'pinched-fingers-medium-dark-skin-tone',
    code: '1f90c-1f3fe'
  },
  {
    name: 'pinched-fingers-medium-light-skin-tone',
    code: '1f90c-1f3fc'
  },
  {
    name: 'pinched-fingers-medium-skin-tone',
    code: '1f90c-1f3fd'
  },
  {
    name: 'pinching-hand',
    code: '1f90f'
  },
  {
    name: 'pinching-hand-dark-skin-tone',
    code: '1f90f-1f3ff'
  },
  {
    name: 'pinching-hand-light-skin-tone',
    code: '1f90f-1f3fb'
  },
  {
    name: 'pinching-hand-medium-dark-skin-tone',
    code: '1f90f-1f3fe'
  },
  {
    name: 'pinching-hand-medium-light-skin-tone',
    code: '1f90f-1f3fc'
  },
  {
    name: 'pinching-hand-medium-skin-tone',
    code: '1f90f-1f3fd'
  },
  {
    name: 'pine-decoration',
    code: '1f38d'
  },
  {
    name: 'pineapple',
    code: '1f34d'
  },
  {
    name: 'ping-pong',
    code: '1f3d3'
  },
  {
    name: 'pirate-flag',
    code: '1f3f4-200d-2620-fe0f'
  },
  {
    name: 'pisces',
    code: '2653'
  },
  {
    name: 'pizza',
    code: '1f355'
  },
  {
    name: 'placard',
    code: '1faa7'
  },
  {
    name: 'place-of-worship',
    code: '1f6d0'
  },
  {
    name: 'play-button',
    code: '25b6'
  },
  {
    name: 'play-or-pause-button',
    code: '23ef'
  },
  {
    name: 'pleading-face',
    code: '1f97a'
  },
  {
    name: 'plunger',
    code: '1faa0'
  },
  {
    name: 'plus',
    code: '2795'
  },
  {
    name: 'polar-bear',
    code: '1f43b-200d-2744-fe0f'
  },
  {
    name: 'police-car',
    code: '1f693'
  },
  {
    name: 'police-car-light',
    code: '1f6a8'
  },
  {
    name: 'police-officer',
    code: '1f46e'
  },
  {
    name: 'police-officer-dark-skin-tone',
    code: '1f46e-1f3ff'
  },
  {
    name: 'police-officer-light-skin-tone',
    code: '1f46e-1f3fb'
  },
  {
    name: 'police-officer-medium-dark-skin-tone',
    code: '1f46e-1f3fe'
  },
  {
    name: 'police-officer-medium-light-skin-tone',
    code: '1f46e-1f3fc'
  },
  {
    name: 'police-officer-medium-skin-tone',
    code: '1f46e-1f3fd'
  },
  {
    name: 'poodle',
    code: '1f429'
  },
  {
    name: 'pool-8-ball',
    code: '1f3b1'
  },
  {
    name: 'popcorn',
    code: '1f37f'
  },
  {
    name: 'post-office',
    code: '1f3e4'
  },
  {
    name: 'postal-horn',
    code: '1f4ef'
  },
  {
    name: 'postbox',
    code: '1f4ee'
  },
  {
    name: 'pot-of-food',
    code: '1f372'
  },
  {
    name: 'potable-water',
    code: '1f6b0'
  },
  {
    name: 'potato',
    code: '1f954'
  },
  {
    name: 'potted-plant',
    code: '1fab4'
  },
  {
    name: 'poultry-leg',
    code: '1f357'
  },
  {
    name: 'pound-banknote',
    code: '1f4b7'
  },
  {
    name: 'pouting-cat',
    code: '1f63e'
  },
  {
    name: 'pouting-face',
    code: '1f621'
  },
  {
    name: 'prayer-beads',
    code: '1f4ff'
  },
  {
    name: 'pregnant-woman',
    code: '1f930'
  },
  {
    name: 'pregnant-woman-dark-skin-tone',
    code: '1f930-1f3ff'
  },
  {
    name: 'pregnant-woman-light-skin-tone',
    code: '1f930-1f3fb'
  },
  {
    name: 'pregnant-woman-medium-dark-skin-tone',
    code: '1f930-1f3fe'
  },
  {
    name: 'pregnant-woman-medium-light-skin-tone',
    code: '1f930-1f3fc'
  },
  {
    name: 'pregnant-woman-medium-skin-tone',
    code: '1f930-1f3fd'
  },
  {
    name: 'pretzel',
    code: '1f968'
  },
  {
    name: 'prince',
    code: '1f934'
  },
  {
    name: 'prince-dark-skin-tone',
    code: '1f934-1f3ff'
  },
  {
    name: 'prince-light-skin-tone',
    code: '1f934-1f3fb'
  },
  {
    name: 'prince-medium-dark-skin-tone',
    code: '1f934-1f3fe'
  },
  {
    name: 'prince-medium-light-skin-tone',
    code: '1f934-1f3fc'
  },
  {
    name: 'prince-medium-skin-tone',
    code: '1f934-1f3fd'
  },
  {
    name: 'princess',
    code: '1f478'
  },
  {
    name: 'princess-dark-skin-tone',
    code: '1f478-1f3ff'
  },
  {
    name: 'princess-light-skin-tone',
    code: '1f478-1f3fb'
  },
  {
    name: 'princess-medium-dark-skin-tone',
    code: '1f478-1f3fe'
  },
  {
    name: 'princess-medium-light-skin-tone',
    code: '1f478-1f3fc'
  },
  {
    name: 'princess-medium-skin-tone',
    code: '1f478-1f3fd'
  },
  {
    name: 'printer',
    code: '1f5a8'
  },
  {
    name: 'prohibited',
    code: '1f6ab'
  },
  {
    name: 'purple-circle',
    code: '1f7e3'
  },
  {
    name: 'purple-heart',
    code: '1f49c'
  },
  {
    name: 'purple-square',
    code: '1f7ea'
  },
  {
    name: 'purse',
    code: '1f45b'
  },
  {
    name: 'pushpin',
    code: '1f4cc'
  },
  {
    name: 'puzzle-piece',
    code: '1f9e9'
  },
  {
    name: 'rabbit',
    code: '1f407'
  },
  {
    name: 'rabbit-face',
    code: '1f430'
  },
  {
    name: 'raccoon',
    code: '1f99d'
  },
  {
    name: 'racing-car',
    code: '1f3ce'
  },
  {
    name: 'radio',
    code: '1f4fb'
  },
  {
    name: 'radio-button',
    code: '1f518'
  },
  {
    name: 'radioactive',
    code: '2622'
  },
  {
    name: 'railway-car',
    code: '1f683'
  },
  {
    name: 'railway-track',
    code: '1f6e4'
  },
  {
    name: 'rainbow',
    code: '1f308'
  },
  {
    name: 'rainbow-flag',
    code: '1f3f3-fe0f-200d-1f308'
  },
  {
    name: 'raised-back-of-hand',
    code: '1f91a'
  },
  {
    name: 'raised-back-of-hand-dark-skin-tone',
    code: '1f91a-1f3ff'
  },
  {
    name: 'raised-back-of-hand-light-skin-tone',
    code: '1f91a-1f3fb'
  },
  {
    name: 'raised-back-of-hand-medium-dark-skin-tone',
    code: '1f91a-1f3fe'
  },
  {
    name: 'raised-back-of-hand-medium-light-skin-tone',
    code: '1f91a-1f3fc'
  },
  {
    name: 'raised-back-of-hand-medium-skin-tone',
    code: '1f91a-1f3fd'
  },
  {
    name: 'raised-fist',
    code: '270a'
  },
  {
    name: 'raised-fist-dark-skin-tone',
    code: '270a-1f3ff'
  },
  {
    name: 'raised-fist-light-skin-tone',
    code: '270a-1f3fb'
  },
  {
    name: 'raised-fist-medium-dark-skin-tone',
    code: '270a-1f3fe'
  },
  {
    name: 'raised-fist-medium-light-skin-tone',
    code: '270a-1f3fc'
  },
  {
    name: 'raised-fist-medium-skin-tone',
    code: '270a-1f3fd'
  },
  {
    name: 'raised-hand',
    code: '270b'
  },
  {
    name: 'raised-hand-dark-skin-tone',
    code: '270b-1f3ff'
  },
  {
    name: 'raised-hand-light-skin-tone',
    code: '270b-1f3fb'
  },
  {
    name: 'raised-hand-medium-dark-skin-tone',
    code: '270b-1f3fe'
  },
  {
    name: 'raised-hand-medium-light-skin-tone',
    code: '270b-1f3fc'
  },
  {
    name: 'raised-hand-medium-skin-tone',
    code: '270b-1f3fd'
  },
  {
    name: 'raising-hands',
    code: '1f64c'
  },
  {
    name: 'raising-hands-dark-skin-tone',
    code: '1f64c-1f3ff'
  },
  {
    name: 'raising-hands-light-skin-tone',
    code: '1f64c-1f3fb'
  },
  {
    name: 'raising-hands-medium-dark-skin-tone',
    code: '1f64c-1f3fe'
  },
  {
    name: 'raising-hands-medium-light-skin-tone',
    code: '1f64c-1f3fc'
  },
  {
    name: 'raising-hands-medium-skin-tone',
    code: '1f64c-1f3fd'
  },
  {
    name: 'ram',
    code: '1f40f'
  },
  {
    name: 'rat',
    code: '1f400'
  },
  {
    name: 'razor',
    code: '1fa92'
  },
  {
    name: 'receipt',
    code: '1f9fe'
  },
  {
    name: 'record-button',
    code: '23fa'
  },
  {
    name: 'recycling-symbol',
    code: '267b'
  },
  {
    name: 'red-apple',
    code: '1f34e'
  },
  {
    name: 'red-circle',
    code: '1f534'
  },
  {
    name: 'red-envelope',
    code: '1f9e7'
  },
  {
    name: 'red-exclamation-mark',
    code: '2757'
  },
  {
    name: 'red-hair',
    code: '1f9b0'
  },
  {
    name: 'red-heart',
    code: '2764'
  },
  {
    name: 'red-paper-lantern',
    code: '1f3ee'
  },
  {
    name: 'red-question-mark',
    code: '2753'
  },
  {
    name: 'red-square',
    code: '1f7e5'
  },
  {
    name: 'red-triangle-pointed-down',
    code: '1f53b'
  },
  {
    name: 'red-triangle-pointed-up',
    code: '1f53a'
  },
  {
    name: 'regional-indicator-symbol-letter-a',
    code: '1f1e6'
  },
  {
    name: 'regional-indicator-symbol-letter-b',
    code: '1f1e7'
  },
  {
    name: 'regional-indicator-symbol-letter-c',
    code: '1f1e8'
  },
  {
    name: 'regional-indicator-symbol-letter-d',
    code: '1f1e9'
  },
  {
    name: 'regional-indicator-symbol-letter-e',
    code: '1f1ea'
  },
  {
    name: 'regional-indicator-symbol-letter-f',
    code: '1f1eb'
  },
  {
    name: 'regional-indicator-symbol-letter-g',
    code: '1f1ec'
  },
  {
    name: 'regional-indicator-symbol-letter-h',
    code: '1f1ed'
  },
  {
    name: 'regional-indicator-symbol-letter-i',
    code: '1f1ee'
  },
  {
    name: 'regional-indicator-symbol-letter-j',
    code: '1f1ef'
  },
  {
    name: 'regional-indicator-symbol-letter-k',
    code: '1f1f0'
  },
  {
    name: 'regional-indicator-symbol-letter-l',
    code: '1f1f1'
  },
  {
    name: 'regional-indicator-symbol-letter-m',
    code: '1f1f2'
  },
  {
    name: 'regional-indicator-symbol-letter-n',
    code: '1f1f3'
  },
  {
    name: 'regional-indicator-symbol-letter-o',
    code: '1f1f4'
  },
  {
    name: 'regional-indicator-symbol-letter-p',
    code: '1f1f5'
  },
  {
    name: 'regional-indicator-symbol-letter-q',
    code: '1f1f6'
  },
  {
    name: 'regional-indicator-symbol-letter-r',
    code: '1f1f7'
  },
  {
    name: 'regional-indicator-symbol-letter-s',
    code: '1f1f8'
  },
  {
    name: 'regional-indicator-symbol-letter-t',
    code: '1f1f9'
  },
  {
    name: 'regional-indicator-symbol-letter-u',
    code: '1f1fa'
  },
  {
    name: 'regional-indicator-symbol-letter-v',
    code: '1f1fb'
  },
  {
    name: 'regional-indicator-symbol-letter-w',
    code: '1f1fc'
  },
  {
    name: 'regional-indicator-symbol-letter-x',
    code: '1f1fd'
  },
  {
    name: 'regional-indicator-symbol-letter-y',
    code: '1f1fe'
  },
  {
    name: 'regional-indicator-symbol-letter-z',
    code: '1f1ff'
  },
  {
    name: 'registered',
    code: 'ae'
  },
  {
    name: 'relieved-face',
    code: '1f60c'
  },
  {
    name: 'reminder-ribbon',
    code: '1f397'
  },
  {
    name: 'repeat-button',
    code: '1f501'
  },
  {
    name: 'repeat-single-button',
    code: '1f502'
  },
  {
    name: 'rescue-worker-s-helmet',
    code: '26d1'
  },
  {
    name: 'restroom',
    code: '1f6bb'
  },
  {
    name: 'reverse-button',
    code: '25c0'
  },
  {
    name: 'revolving-hearts',
    code: '1f49e'
  },
  {
    name: 'rhinoceros',
    code: '1f98f'
  },
  {
    name: 'ribbon',
    code: '1f380'
  },
  {
    name: 'rice-ball',
    code: '1f359'
  },
  {
    name: 'rice-cracker',
    code: '1f358'
  },
  {
    name: 'right-anger-bubble',
    code: '1f5ef'
  },
  {
    name: 'right-arrow',
    code: '27a1'
  },
  {
    name: 'right-arrow-curving-down',
    code: '2935'
  },
  {
    name: 'right-arrow-curving-left',
    code: '21a9'
  },
  {
    name: 'right-arrow-curving-up',
    code: '2934'
  },
  {
    name: 'right-facing-fist',
    code: '1f91c'
  },
  {
    name: 'right-facing-fist-dark-skin-tone',
    code: '1f91c-1f3ff'
  },
  {
    name: 'right-facing-fist-light-skin-tone',
    code: '1f91c-1f3fb'
  },
  {
    name: 'right-facing-fist-medium-dark-skin-tone',
    code: '1f91c-1f3fe'
  },
  {
    name: 'right-facing-fist-medium-light-skin-tone',
    code: '1f91c-1f3fc'
  },
  {
    name: 'right-facing-fist-medium-skin-tone',
    code: '1f91c-1f3fd'
  },
  {
    name: 'ring',
    code: '1f48d'
  },
  {
    name: 'ringed-planet',
    code: '1fa90'
  },
  {
    name: 'roasted-sweet-potato',
    code: '1f360'
  },
  {
    name: 'robot',
    code: '1f916'
  },
  {
    name: 'rock',
    code: '1faa8'
  },
  {
    name: 'rocket',
    code: '1f680'
  },
  {
    name: 'roll-of-paper',
    code: '1f9fb'
  },
  {
    name: 'rolled-up-newspaper',
    code: '1f5de'
  },
  {
    name: 'roller-coaster',
    code: '1f3a2'
  },
  {
    name: 'roller-skate',
    code: '1f6fc'
  },
  {
    name: 'rolling-on-the-floor-laughing',
    code: '1f923'
  },
  {
    name: 'rooster',
    code: '1f413'
  },
  {
    name: 'rose',
    code: '1f339'
  },
  {
    name: 'rosette',
    code: '1f3f5'
  },
  {
    name: 'round-pushpin',
    code: '1f4cd'
  },
  {
    name: 'rugby-football',
    code: '1f3c9'
  },
  {
    name: 'running-shirt',
    code: '1f3bd'
  },
  {
    name: 'running-shoe',
    code: '1f45f'
  },
  {
    name: 'sad-but-relieved-face',
    code: '1f625'
  },
  {
    name: 'safety-pin',
    code: '1f9f7'
  },
  {
    name: 'safety-vest',
    code: '1f9ba'
  },
  {
    name: 'sagittarius',
    code: '2650'
  },
  {
    name: 'sailboat',
    code: '26f5'
  },
  {
    name: 'sake',
    code: '1f376'
  },
  {
    name: 'salt',
    code: '1f9c2'
  },
  {
    name: 'sandwich',
    code: '1f96a'
  },
  {
    name: 'santa-claus',
    code: '1f385'
  },
  {
    name: 'santa-claus-dark-skin-tone',
    code: '1f385-1f3ff'
  },
  {
    name: 'santa-claus-light-skin-tone',
    code: '1f385-1f3fb'
  },
  {
    name: 'santa-claus-medium-dark-skin-tone',
    code: '1f385-1f3fe'
  },
  {
    name: 'santa-claus-medium-light-skin-tone',
    code: '1f385-1f3fc'
  },
  {
    name: 'santa-claus-medium-skin-tone',
    code: '1f385-1f3fd'
  },
  {
    name: 'sari',
    code: '1f97b'
  },
  {
    name: 'satellite',
    code: '1f6f0'
  },
  {
    name: 'satellite-antenna',
    code: '1f4e1'
  },
  {
    name: 'sauropod',
    code: '1f995'
  },
  {
    name: 'saxophone',
    code: '1f3b7'
  },
  {
    name: 'scarf',
    code: '1f9e3'
  },
  {
    name: 'school',
    code: '1f3eb'
  },
  {
    name: 'scientist',
    code: '1f9d1-200d-1f52c'
  },
  {
    name: 'scientist-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f52c'
  },
  {
    name: 'scientist-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f52c'
  },
  {
    name: 'scientist-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f52c'
  },
  {
    name: 'scientist-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f52c'
  },
  {
    name: 'scientist-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f52c'
  },
  {
    name: 'scissors',
    code: '2702'
  },
  {
    name: 'scorpio',
    code: '264f'
  },
  {
    name: 'scorpion',
    code: '1f982'
  },
  {
    name: 'screwdriver',
    code: '1fa9b'
  },
  {
    name: 'scroll',
    code: '1f4dc'
  },
  {
    name: 'seal',
    code: '1f9ad'
  },
  {
    name: 'seat',
    code: '1f4ba'
  },
  {
    name: 'see-no-evil-monkey',
    code: '1f648'
  },
  {
    name: 'seedling',
    code: '1f331'
  },
  {
    name: 'selfie',
    code: '1f933'
  },
  {
    name: 'selfie-dark-skin-tone',
    code: '1f933-1f3ff'
  },
  {
    name: 'selfie-light-skin-tone',
    code: '1f933-1f3fb'
  },
  {
    name: 'selfie-medium-dark-skin-tone',
    code: '1f933-1f3fe'
  },
  {
    name: 'selfie-medium-light-skin-tone',
    code: '1f933-1f3fc'
  },
  {
    name: 'selfie-medium-skin-tone',
    code: '1f933-1f3fd'
  },
  {
    name: 'service-dog',
    code: '1f415-200d-1f9ba'
  },
  {
    name: 'seven-o-clock',
    code: '1f556'
  },
  {
    name: 'seven-thirty',
    code: '1f562'
  },
  {
    name: 'sewing-needle',
    code: '1faa1'
  },
  {
    name: 'shallow-pan-of-food',
    code: '1f958'
  },
  {
    name: 'shamrock',
    code: '2618'
  },
  {
    name: 'shark',
    code: '1f988'
  },
  {
    name: 'shaved-ice',
    code: '1f367'
  },
  {
    name: 'sheaf-of-rice',
    code: '1f33e'
  },
  {
    name: 'shibuya',
    code: 'e50a'
  },
  {
    name: 'shield',
    code: '1f6e1'
  },
  {
    name: 'shinto-shrine',
    code: '26e9'
  },
  {
    name: 'ship',
    code: '1f6a2'
  },
  {
    name: 'shooting-star',
    code: '1f320'
  },
  {
    name: 'shopping-bags',
    code: '1f6cd'
  },
  {
    name: 'shopping-cart',
    code: '1f6d2'
  },
  {
    name: 'shortcake',
    code: '1f370'
  },
  {
    name: 'shorts',
    code: '1fa73'
  },
  {
    name: 'shower',
    code: '1f6bf'
  },
  {
    name: 'shrimp',
    code: '1f990'
  },
  {
    name: 'shuffle-tracks-button',
    code: '1f500'
  },
  {
    name: 'shushing-face',
    code: '1f92b'
  },
  {
    name: 'sign-of-the-horns',
    code: '1f918'
  },
  {
    name: 'sign-of-the-horns-dark-skin-tone',
    code: '1f918-1f3ff'
  },
  {
    name: 'sign-of-the-horns-light-skin-tone',
    code: '1f918-1f3fb'
  },
  {
    name: 'sign-of-the-horns-medium-dark-skin-tone',
    code: '1f918-1f3fe'
  },
  {
    name: 'sign-of-the-horns-medium-light-skin-tone',
    code: '1f918-1f3fc'
  },
  {
    name: 'sign-of-the-horns-medium-skin-tone',
    code: '1f918-1f3fd'
  },
  {
    name: 'singer',
    code: '1f9d1-200d-1f3a4'
  },
  {
    name: 'singer-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f3a4'
  },
  {
    name: 'singer-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f3a4'
  },
  {
    name: 'singer-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f3a4'
  },
  {
    name: 'singer-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f3a4'
  },
  {
    name: 'singer-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f3a4'
  },
  {
    name: 'six-o-clock',
    code: '1f555'
  },
  {
    name: 'six-thirty',
    code: '1f561'
  },
  {
    name: 'skateboard',
    code: '1f6f9'
  },
  {
    name: 'skier',
    code: '26f7'
  },
  {
    name: 'skier-dark-skin-tone',
    code: '26f7-1f3ff'
  },
  {
    name: 'skier-light-skin-tone',
    code: '26f7-1f3fb'
  },
  {
    name: 'skier-medium-dark-skin-tone',
    code: '26f7-1f3fe'
  },
  {
    name: 'skier-medium-light-skin-tone',
    code: '26f7-1f3fc'
  },
  {
    name: 'skier-medium-skin-tone',
    code: '26f7-1f3fd'
  },
  {
    name: 'skis',
    code: '1f3bf'
  },
  {
    name: 'skull',
    code: '1f480'
  },
  {
    name: 'skull-and-crossbones',
    code: '2620'
  },
  {
    name: 'skunk',
    code: '1f9a8'
  },
  {
    name: 'sled',
    code: '1f6f7'
  },
  {
    name: 'sleeping-face',
    code: '1f634'
  },
  {
    name: 'sleepy-face',
    code: '1f62a'
  },
  {
    name: 'slightly-frowning-face',
    code: '1f641'
  },
  {
    name: 'slightly-smiling-face',
    code: '1f642'
  },
  {
    name: 'slot-machine',
    code: '1f3b0'
  },
  {
    name: 'sloth',
    code: '1f9a5'
  },
  {
    name: 'small-airplane',
    code: '1f6e9'
  },
  {
    name: 'small-blue-diamond',
    code: '1f539'
  },
  {
    name: 'small-orange-diamond',
    code: '1f538'
  },
  {
    name: 'smiling-cat-with-heart-eyes',
    code: '1f63b'
  },
  {
    name: 'smiling-face',
    code: '263a'
  },
  {
    name: 'smiling-face-with-halo',
    code: '1f607'
  },
  {
    name: 'smiling-face-with-heart-eyes',
    code: '1f60d'
  },
  {
    name: 'smiling-face-with-hearts',
    code: '1f970'
  },
  {
    name: 'smiling-face-with-horns',
    code: '1f608'
  },
  {
    name: 'smiling-face-with-smiling-eyes',
    code: '1f60a'
  },
  {
    name: 'smiling-face-with-sunglasses',
    code: '1f60e'
  },
  {
    name: 'smiling-face-with-tear',
    code: '1f972'
  },
  {
    name: 'smirking-face',
    code: '1f60f'
  },
  {
    name: 'snail',
    code: '1f40c'
  },
  {
    name: 'snake',
    code: '1f40d'
  },
  {
    name: 'sneezing-face',
    code: '1f927'
  },
  {
    name: 'snow-capped-mountain',
    code: '1f3d4'
  },
  {
    name: 'snowboarder',
    code: '1f3c2'
  },
  {
    name: 'snowboarder-dark-skin-tone',
    code: '1f3c2-1f3ff'
  },
  {
    name: 'snowboarder-light-skin-tone',
    code: '1f3c2-1f3fb'
  },
  {
    name: 'snowboarder-medium-dark-skin-tone',
    code: '1f3c2-1f3fe'
  },
  {
    name: 'snowboarder-medium-light-skin-tone',
    code: '1f3c2-1f3fc'
  },
  {
    name: 'snowboarder-medium-skin-tone',
    code: '1f3c2-1f3fd'
  },
  {
    name: 'snowflake',
    code: '2744'
  },
  {
    name: 'snowman',
    code: '2603'
  },
  {
    name: 'snowman-without-snow',
    code: '26c4'
  },
  {
    name: 'soap',
    code: '1f9fc'
  },
  {
    name: 'soccer-ball',
    code: '26bd'
  },
  {
    name: 'socks',
    code: '1f9e6'
  },
  {
    name: 'soft-ice-cream',
    code: '1f366'
  },
  {
    name: 'softball',
    code: '1f94e'
  },
  {
    name: 'soon-arrow',
    code: '1f51c'
  },
  {
    name: 'sos-button',
    code: '1f198'
  },
  {
    name: 'spade-suit',
    code: '2660'
  },
  {
    name: 'spaghetti',
    code: '1f35d'
  },
  {
    name: 'sparkle',
    code: '2747'
  },
  {
    name: 'sparkler',
    code: '1f387'
  },
  {
    name: 'sparkles',
    code: '2728'
  },
  {
    name: 'sparkling-heart',
    code: '1f496'
  },
  {
    name: 'speak-no-evil-monkey',
    code: '1f64a'
  },
  {
    name: 'speaker-high-volume',
    code: '1f50a'
  },
  {
    name: 'speaker-low-volume',
    code: '1f508'
  },
  {
    name: 'speaker-medium-volume',
    code: '1f509'
  },
  {
    name: 'speaking-head',
    code: '1f5e3'
  },
  {
    name: 'speech-balloon',
    code: '1f4ac'
  },
  {
    name: 'speedboat',
    code: '1f6a4'
  },
  {
    name: 'spider',
    code: '1f577'
  },
  {
    name: 'spider-web',
    code: '1f578'
  },
  {
    name: 'spiral-calendar',
    code: '1f5d3'
  },
  {
    name: 'spiral-notepad',
    code: '1f5d2'
  },
  {
    name: 'spiral-shell',
    code: '1f41a'
  },
  {
    name: 'sponge',
    code: '1f9fd'
  },
  {
    name: 'spoon',
    code: '1f944'
  },
  {
    name: 'sport-utility-vehicle',
    code: '1f699'
  },
  {
    name: 'sports-medal',
    code: '1f3c5'
  },
  {
    name: 'spouting-whale',
    code: '1f433'
  },
  {
    name: 'squid',
    code: '1f991'
  },
  {
    name: 'squinting-face-with-tongue',
    code: '1f61d'
  },
  {
    name: 'stadium',
    code: '1f3df'
  },
  {
    name: 'star',
    code: '2b50'
  },
  {
    name: 'star-and-crescent',
    code: '262a'
  },
  {
    name: 'star-of-david',
    code: '2721'
  },
  {
    name: 'star-struck',
    code: '1f929'
  },
  {
    name: 'station',
    code: '1f689'
  },
  {
    name: 'statue-of-liberty',
    code: '1f5fd'
  },
  {
    name: 'steaming-bowl',
    code: '1f35c'
  },
  {
    name: 'stethoscope',
    code: '1fa7a'
  },
  {
    name: 'stop-button',
    code: '23f9'
  },
  {
    name: 'stop-sign',
    code: '1f6d1'
  },
  {
    name: 'stopwatch',
    code: '23f1'
  },
  {
    name: 'straight-ruler',
    code: '1f4cf'
  },
  {
    name: 'strawberry',
    code: '1f353'
  },
  {
    name: 'student',
    code: '1f9d1-200d-1f393'
  },
  {
    name: 'student-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f393'
  },
  {
    name: 'student-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f393'
  },
  {
    name: 'student-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f393'
  },
  {
    name: 'student-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f393'
  },
  {
    name: 'student-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f393'
  },
  {
    name: 'studio-microphone',
    code: '1f399'
  },
  {
    name: 'stuffed-flatbread',
    code: '1f959'
  },
  {
    name: 'sun',
    code: '2600'
  },
  {
    name: 'sun-behind-cloud',
    code: '26c5'
  },
  {
    name: 'sun-behind-large-cloud',
    code: '1f325'
  },
  {
    name: 'sun-behind-rain-cloud',
    code: '1f326'
  },
  {
    name: 'sun-behind-small-cloud',
    code: '1f324'
  },
  {
    name: 'sun-with-face',
    code: '1f31e'
  },
  {
    name: 'sunflower',
    code: '1f33b'
  },
  {
    name: 'sunglasses',
    code: '1f576'
  },
  {
    name: 'sunrise',
    code: '1f305'
  },
  {
    name: 'sunrise-over-mountains',
    code: '1f304'
  },
  {
    name: 'sunset',
    code: '1f307'
  },
  {
    name: 'superhero',
    code: '1f9b8'
  },
  {
    name: 'superhero-dark-skin-tone',
    code: '1f9b8-1f3ff'
  },
  {
    name: 'superhero-light-skin-tone',
    code: '1f9b8-1f3fb'
  },
  {
    name: 'superhero-medium-dark-skin-tone',
    code: '1f9b8-1f3fe'
  },
  {
    name: 'superhero-medium-light-skin-tone',
    code: '1f9b8-1f3fc'
  },
  {
    name: 'superhero-medium-skin-tone',
    code: '1f9b8-1f3fd'
  },
  {
    name: 'supervillain',
    code: '1f9b9'
  },
  {
    name: 'supervillain-dark-skin-tone',
    code: '1f9b9-1f3ff'
  },
  {
    name: 'supervillain-light-skin-tone',
    code: '1f9b9-1f3fb'
  },
  {
    name: 'supervillain-medium-dark-skin-tone',
    code: '1f9b9-1f3fe'
  },
  {
    name: 'supervillain-medium-light-skin-tone',
    code: '1f9b9-1f3fc'
  },
  {
    name: 'supervillain-medium-skin-tone',
    code: '1f9b9-1f3fd'
  },
  {
    name: 'sushi',
    code: '1f363'
  },
  {
    name: 'suspension-railway',
    code: '1f69f'
  },
  {
    name: 'swan',
    code: '1f9a2'
  },
  {
    name: 'sweat-droplets',
    code: '1f4a6'
  },
  {
    name: 'synagogue',
    code: '1f54d'
  },
  {
    name: 'syringe',
    code: '1f489'
  },
  {
    name: 't-rex',
    code: '1f996'
  },
  {
    name: 't-shirt',
    code: '1f455'
  },
  {
    name: 'taco',
    code: '1f32e'
  },
  {
    name: 'takeout-box',
    code: '1f961'
  },
  {
    name: 'tamale',
    code: '1fad4'
  },
  {
    name: 'tanabata-tree',
    code: '1f38b'
  },
  {
    name: 'tangerine',
    code: '1f34a'
  },
  {
    name: 'taurus',
    code: '2649'
  },
  {
    name: 'taxi',
    code: '1f695'
  },
  {
    name: 'teacher',
    code: '1f9d1-200d-1f3eb'
  },
  {
    name: 'teacher-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f3eb'
  },
  {
    name: 'teacher-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f3eb'
  },
  {
    name: 'teacher-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f3eb'
  },
  {
    name: 'teacher-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f3eb'
  },
  {
    name: 'teacher-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f3eb'
  },
  {
    name: 'teacup-without-handle',
    code: '1f375'
  },
  {
    name: 'teapot',
    code: '1fad6'
  },
  {
    name: 'tear-off-calendar',
    code: '1f4c6'
  },
  {
    name: 'technologist',
    code: '1f9d1-200d-1f4bb'
  },
  {
    name: 'technologist-dark-skin-tone',
    code: '1f9d1-1f3ff-200d-1f4bb'
  },
  {
    name: 'technologist-light-skin-tone',
    code: '1f9d1-1f3fb-200d-1f4bb'
  },
  {
    name: 'technologist-medium-dark-skin-tone',
    code: '1f9d1-1f3fe-200d-1f4bb'
  },
  {
    name: 'technologist-medium-light-skin-tone',
    code: '1f9d1-1f3fc-200d-1f4bb'
  },
  {
    name: 'technologist-medium-skin-tone',
    code: '1f9d1-1f3fd-200d-1f4bb'
  },
  {
    name: 'teddy-bear',
    code: '1f9f8'
  },
  {
    name: 'telephone',
    code: '260e'
  },
  {
    name: 'telephone-receiver',
    code: '1f4de'
  },
  {
    name: 'telescope',
    code: '1f52d'
  },
  {
    name: 'television',
    code: '1f4fa'
  },
  {
    name: 'ten-o-clock',
    code: '1f559'
  },
  {
    name: 'ten-thirty',
    code: '1f565'
  },
  {
    name: 'tennis',
    code: '1f3be'
  },
  {
    name: 'tent',
    code: '26fa'
  },
  {
    name: 'test-tube',
    code: '1f9ea'
  },
  {
    name: 'thermometer',
    code: '1f321'
  },
  {
    name: 'thinking-face',
    code: '1f914'
  },
  {
    name: 'thong-sandal',
    code: '1fa74'
  },
  {
    name: 'thought-balloon',
    code: '1f4ad'
  },
  {
    name: 'thread',
    code: '1f9f5'
  },
  {
    name: 'three-o-clock',
    code: '1f552'
  },
  {
    name: 'three-thirty',
    code: '1f55e'
  },
  {
    name: 'thumbs-down',
    code: '1f44e'
  },
  {
    name: 'thumbs-down-dark-skin-tone',
    code: '1f44e-1f3ff'
  },
  {
    name: 'thumbs-down-light-skin-tone',
    code: '1f44e-1f3fb'
  },
  {
    name: 'thumbs-down-medium-dark-skin-tone',
    code: '1f44e-1f3fe'
  },
  {
    name: 'thumbs-down-medium-light-skin-tone',
    code: '1f44e-1f3fc'
  },
  {
    name: 'thumbs-down-medium-skin-tone',
    code: '1f44e-1f3fd'
  },
  {
    name: 'thumbs-up',
    code: '1f44d'
  },
  {
    name: 'thumbs-up-dark-skin-tone',
    code: '1f44d-1f3ff'
  },
  {
    name: 'thumbs-up-light-skin-tone',
    code: '1f44d-1f3fb'
  },
  {
    name: 'thumbs-up-medium-dark-skin-tone',
    code: '1f44d-1f3fe'
  },
  {
    name: 'thumbs-up-medium-light-skin-tone',
    code: '1f44d-1f3fc'
  },
  {
    name: 'thumbs-up-medium-skin-tone',
    code: '1f44d-1f3fd'
  },
  {
    name: 'ticket',
    code: '1f3ab'
  },
  {
    name: 'tiger',
    code: '1f405'
  },
  {
    name: 'tiger-face',
    code: '1f42f'
  },
  {
    name: 'timer-clock',
    code: '23f2'
  },
  {
    name: 'tired-face',
    code: '1f62b'
  },
  {
    name: 'toilet',
    code: '1f6bd'
  },
  {
    name: 'tokyo-tower',
    code: '1f5fc'
  },
  {
    name: 'tomato',
    code: '1f345'
  },
  {
    name: 'tongue',
    code: '1f445'
  },
  {
    name: 'toolbox',
    code: '1f9f0'
  },
  {
    name: 'tooth',
    code: '1f9b7'
  },
  {
    name: 'toothbrush',
    code: '1faa5'
  },
  {
    name: 'top-arrow',
    code: '1f51d'
  },
  {
    name: 'top-hat',
    code: '1f3a9'
  },
  {
    name: 'tornado',
    code: '1f32a'
  },
  {
    name: 'trackball',
    code: '1f5b2'
  },
  {
    name: 'tractor',
    code: '1f69c'
  },
  {
    name: 'trade-mark',
    code: '2122'
  },
  {
    name: 'train',
    code: '1f686'
  },
  {
    name: 'tram',
    code: '1f68a'
  },
  {
    name: 'tram-car',
    code: '1f68b'
  },
  {
    name: 'transgender-flag',
    code: '1f3f3-fe0f-200d-26a7-fe0f'
  },
  {
    name: 'transgender-symbol',
    code: '26a7'
  },
  {
    name: 'triangular-flag',
    code: '1f6a9'
  },
  {
    name: 'triangular-ruler',
    code: '1f4d0'
  },
  {
    name: 'trident-emblem',
    code: '1f531'
  },
  {
    name: 'trolleybus',
    code: '1f68e'
  },
  {
    name: 'trophy',
    code: '1f3c6'
  },
  {
    name: 'tropical-drink',
    code: '1f379'
  },
  {
    name: 'tropical-fish',
    code: '1f420'
  },
  {
    name: 'trumpet',
    code: '1f3ba'
  },
  {
    name: 'tulip',
    code: '1f337'
  },
  {
    name: 'tumbler-glass',
    code: '1f943'
  },
  {
    name: 'turkey',
    code: '1f983'
  },
  {
    name: 'turtle',
    code: '1f422'
  },
  {
    name: 'twelve-o-clock',
    code: '1f55b'
  },
  {
    name: 'twelve-thirty',
    code: '1f567'
  },
  {
    name: 'two-hearts',
    code: '1f495'
  },
  {
    name: 'two-hump-camel',
    code: '1f42b'
  },
  {
    name: 'two-o-clock',
    code: '1f551'
  },
  {
    name: 'two-thirty',
    code: '1f55d'
  },
  {
    name: 'umbrella',
    code: '2602'
  },
  {
    name: 'umbrella-on-ground',
    code: '26f1'
  },
  {
    name: 'umbrella-with-rain-drops',
    code: '2614'
  },
  {
    name: 'unamused-face',
    code: '1f612'
  },
  {
    name: 'unicorn',
    code: '1f984'
  },
  {
    name: 'unlocked',
    code: '1f513'
  },
  {
    name: 'up-arrow',
    code: '2b06'
  },
  {
    name: 'up-button',
    code: '1f199'
  },
  {
    name: 'up-down-arrow',
    code: '2195'
  },
  {
    name: 'up-left-arrow',
    code: '2196'
  },
  {
    name: 'up-right-arrow',
    code: '2197'
  },
  {
    name: 'upside-down-face',
    code: '1f643'
  },
  {
    name: 'upwards-button',
    code: '1f53c'
  },
  {
    name: 'vampire',
    code: '1f9db'
  },
  {
    name: 'vampire-dark-skin-tone',
    code: '1f9db-1f3ff'
  },
  {
    name: 'vampire-light-skin-tone',
    code: '1f9db-1f3fb'
  },
  {
    name: 'vampire-medium-dark-skin-tone',
    code: '1f9db-1f3fe'
  },
  {
    name: 'vampire-medium-light-skin-tone',
    code: '1f9db-1f3fc'
  },
  {
    name: 'vampire-medium-skin-tone',
    code: '1f9db-1f3fd'
  },
  {
    name: 'vertical-traffic-light',
    code: '1f6a6'
  },
  {
    name: 'vibration-mode',
    code: '1f4f3'
  },
  {
    name: 'victory-hand',
    code: '270c'
  },
  {
    name: 'victory-hand-dark-skin-tone',
    code: '270c-1f3ff'
  },
  {
    name: 'victory-hand-light-skin-tone',
    code: '270c-1f3fb'
  },
  {
    name: 'victory-hand-medium-dark-skin-tone',
    code: '270c-1f3fe'
  },
  {
    name: 'victory-hand-medium-light-skin-tone',
    code: '270c-1f3fc'
  },
  {
    name: 'victory-hand-medium-skin-tone',
    code: '270c-1f3fd'
  },
  {
    name: 'video-camera',
    code: '1f4f9'
  },
  {
    name: 'video-game',
    code: '1f3ae'
  },
  {
    name: 'videocassette',
    code: '1f4fc'
  },
  {
    name: 'violin',
    code: '1f3bb'
  },
  {
    name: 'virgo',
    code: '264d'
  },
  {
    name: 'volcano',
    code: '1f30b'
  },
  {
    name: 'volleyball',
    code: '1f3d0'
  },
  {
    name: 'vs-button',
    code: '1f19a'
  },
  {
    name: 'vulcan-salute',
    code: '1f596'
  },
  {
    name: 'vulcan-salute-dark-skin-tone',
    code: '1f596-1f3ff'
  },
  {
    name: 'vulcan-salute-light-skin-tone',
    code: '1f596-1f3fb'
  },
  {
    name: 'vulcan-salute-medium-dark-skin-tone',
    code: '1f596-1f3fe'
  },
  {
    name: 'vulcan-salute-medium-light-skin-tone',
    code: '1f596-1f3fc'
  },
  {
    name: 'vulcan-salute-medium-skin-tone',
    code: '1f596-1f3fd'
  },
  {
    name: 'waffle',
    code: '1f9c7'
  },
  {
    name: 'waning-crescent-moon',
    code: '1f318'
  },
  {
    name: 'waning-gibbous-moon',
    code: '1f316'
  },
  {
    name: 'warning',
    code: '26a0'
  },
  {
    name: 'wastebasket',
    code: '1f5d1'
  },
  {
    name: 'watch',
    code: '231a'
  },
  {
    name: 'water-buffalo',
    code: '1f403'
  },
  {
    name: 'water-closet',
    code: '1f6be'
  },
  {
    name: 'water-pistol',
    code: '1f52b'
  },
  {
    name: 'water-wave',
    code: '1f30a'
  },
  {
    name: 'watermelon',
    code: '1f349'
  },
  {
    name: 'waving-hand',
    code: '1f44b'
  },
  {
    name: 'waving-hand-dark-skin-tone',
    code: '1f44b-1f3ff'
  },
  {
    name: 'waving-hand-light-skin-tone',
    code: '1f44b-1f3fb'
  },
  {
    name: 'waving-hand-medium-dark-skin-tone',
    code: '1f44b-1f3fe'
  },
  {
    name: 'waving-hand-medium-light-skin-tone',
    code: '1f44b-1f3fc'
  },
  {
    name: 'waving-hand-medium-skin-tone',
    code: '1f44b-1f3fd'
  },
  {
    name: 'wavy-dash',
    code: '3030'
  },
  {
    name: 'waxing-crescent-moon',
    code: '1f312'
  },
  {
    name: 'waxing-gibbous-moon',
    code: '1f314'
  },
  {
    name: 'weary-cat',
    code: '1f640'
  },
  {
    name: 'weary-face',
    code: '1f629'
  },
  {
    name: 'wedding',
    code: '1f492'
  },
  {
    name: 'whale',
    code: '1f40b'
  },
  {
    name: 'wheel-of-dharma',
    code: '2638'
  },
  {
    name: 'wheelchair-symbol',
    code: '267f'
  },
  {
    name: 'white-cane',
    code: '1f9af'
  },
  {
    name: 'white-circle',
    code: '26aa'
  },
  {
    name: 'white-exclamation-mark',
    code: '2755'
  },
  {
    name: 'white-flag',
    code: '1f3f3'
  },
  {
    name: 'white-flower',
    code: '1f4ae'
  },
  {
    name: 'white-hair',
    code: '1f9b3'
  },
  {
    name: 'white-heart',
    code: '1f90d'
  },
  {
    name: 'white-large-square',
    code: '2b1c'
  },
  {
    name: 'white-medium-small-square',
    code: '25fd'
  },
  {
    name: 'white-medium-square',
    code: '25fb'
  },
  {
    name: 'white-question-mark',
    code: '2754'
  },
  {
    name: 'white-small-square',
    code: '25ab'
  },
  {
    name: 'white-square-button',
    code: '1f533'
  },
  {
    name: 'wilted-flower',
    code: '1f940'
  },
  {
    name: 'wind-chime',
    code: '1f390'
  },
  {
    name: 'wind-face',
    code: '1f32c'
  },
  {
    name: 'window',
    code: '1fa9f'
  },
  {
    name: 'wine-glass',
    code: '1f377'
  },
  {
    name: 'winking-face',
    code: '1f609'
  },
  {
    name: 'winking-face-with-tongue',
    code: '1f61c'
  },
  {
    name: 'wolf',
    code: '1f43a'
  },
  {
    name: 'woman',
    code: '1f469'
  },
  {
    name: 'woman-and-man-holding-hands',
    code: '1f46b'
  },
  {
    name: 'woman-and-man-holding-hands-dark-skin-tone',
    code: '1f46b-1f3ff'
  },
  {
    name: 'woman-and-man-holding-hands-dark-skin-tone-light-skin-tone',
    code: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    name: 'woman-and-man-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    name: 'woman-and-man-holding-hands-dark-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    name: 'woman-and-man-holding-hands-dark-skin-tone-medium-skin-tone',
    code: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    name: 'woman-and-man-holding-hands-light-skin-tone',
    code: '1f46b-1f3fb'
  },
  {
    name: 'woman-and-man-holding-hands-light-skin-tone-dark-skin-tone',
    code: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    name: 'woman-and-man-holding-hands-light-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    name: 'woman-and-man-holding-hands-light-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    name: 'woman-and-man-holding-hands-light-skin-tone-medium-skin-tone',
    code: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    name: 'woman-and-man-holding-hands-medium-dark-skin-tone',
    code: '1f46b-1f3fe'
  },
  {
    name: 'woman-and-man-holding-hands-medium-dark-skin-tone-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    name: 'woman-and-man-holding-hands-medium-dark-skin-tone-light-skin-tone',
    code: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    name: 'woman-and-man-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    name: 'woman-and-man-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    code: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    name: 'woman-and-man-holding-hands-medium-light-skin-tone',
    code: '1f46b-1f3fc'
  },
  {
    name: 'woman-and-man-holding-hands-medium-light-skin-tone-dark-skin-tone',
    code: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    name: 'woman-and-man-holding-hands-medium-light-skin-tone-light-skin-tone',
    code: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    name: 'woman-and-man-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    name: 'woman-and-man-holding-hands-medium-light-skin-tone-medium-skin-tone',
    code: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    name: 'woman-and-man-holding-hands-medium-skin-tone',
    code: '1f46b-1f3fd'
  },
  {
    name: 'woman-and-man-holding-hands-medium-skin-tone-dark-skin-tone',
    code: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    name: 'woman-and-man-holding-hands-medium-skin-tone-light-skin-tone',
    code: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    name: 'woman-and-man-holding-hands-medium-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    name: 'woman-and-man-holding-hands-medium-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    name: 'woman-artist',
    code: '1f469-200d-1f3a8'
  },
  {
    name: 'woman-artist-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f3a8'
  },
  {
    name: 'woman-artist-light-skin-tone',
    code: '1f469-1f3fb-200d-1f3a8'
  },
  {
    name: 'woman-artist-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f3a8'
  },
  {
    name: 'woman-artist-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f3a8'
  },
  {
    name: 'woman-artist-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f3a8'
  },
  {
    name: 'woman-astronaut',
    code: '1f469-200d-1f680'
  },
  {
    name: 'woman-astronaut-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f680'
  },
  {
    name: 'woman-astronaut-light-skin-tone',
    code: '1f469-1f3fb-200d-1f680'
  },
  {
    name: 'woman-astronaut-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f680'
  },
  {
    name: 'woman-astronaut-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f680'
  },
  {
    name: 'woman-astronaut-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f680'
  },
  {
    name: 'woman-bald',
    code: '1f469-200d-1f9b2'
  },
  {
    name: 'woman-beard',
    code: '1f9d4-200d-2640-fe0f'
  },
  {
    name: 'woman-biking',
    code: '1f6b4-200d-2640-fe0f'
  },
  {
    name: 'woman-biking-dark-skin-tone',
    code: '1f6b4-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-biking-light-skin-tone',
    code: '1f6b4-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-biking-medium-dark-skin-tone',
    code: '1f6b4-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-biking-medium-light-skin-tone',
    code: '1f6b4-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-biking-medium-skin-tone',
    code: '1f6b4-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-blond-hair',
    code: '1f471-200d-2640-fe0f'
  },
  {
    name: 'woman-bouncing-ball',
    code: '26f9-fe0f-200d-2640-fe0f'
  },
  {
    name: 'woman-bouncing-ball-dark-skin-tone',
    code: '26f9-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-bouncing-ball-light-skin-tone',
    code: '26f9-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-bouncing-ball-medium-dark-skin-tone',
    code: '26f9-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-bouncing-ball-medium-light-skin-tone',
    code: '26f9-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-bouncing-ball-medium-skin-tone',
    code: '26f9-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-bowing',
    code: '1f647-200d-2640-fe0f'
  },
  {
    name: 'woman-bowing-dark-skin-tone',
    code: '1f647-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-bowing-light-skin-tone',
    code: '1f647-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-bowing-medium-dark-skin-tone',
    code: '1f647-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-bowing-medium-light-skin-tone',
    code: '1f647-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-bowing-medium-skin-tone',
    code: '1f647-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-cartwheeling',
    code: '1f938-200d-2640-fe0f'
  },
  {
    name: 'woman-cartwheeling-dark-skin-tone',
    code: '1f938-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-cartwheeling-light-skin-tone',
    code: '1f938-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-cartwheeling-medium-dark-skin-tone',
    code: '1f938-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-cartwheeling-medium-light-skin-tone',
    code: '1f938-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-cartwheeling-medium-skin-tone',
    code: '1f938-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-christmas',
    code: '1f469-200d-1f384'
  },
  {
    name: 'woman-climbing',
    code: '1f9d7-200d-2640-fe0f'
  },
  {
    name: 'woman-climbing-dark-skin-tone',
    code: '1f9d7-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-climbing-light-skin-tone',
    code: '1f9d7-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-climbing-medium-dark-skin-tone',
    code: '1f9d7-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-climbing-medium-light-skin-tone',
    code: '1f9d7-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-climbing-medium-skin-tone',
    code: '1f9d7-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-construction-worker',
    code: '1f477-200d-2640-fe0f'
  },
  {
    name: 'woman-construction-worker-dark-skin-tone',
    code: '1f477-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-construction-worker-light-skin-tone',
    code: '1f477-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-construction-worker-medium-dark-skin-tone',
    code: '1f477-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-construction-worker-medium-light-skin-tone',
    code: '1f477-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-construction-worker-medium-skin-tone',
    code: '1f477-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-cook',
    code: '1f469-200d-1f373'
  },
  {
    name: 'woman-cook-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f373'
  },
  {
    name: 'woman-cook-light-skin-tone',
    code: '1f469-1f3fb-200d-1f373'
  },
  {
    name: 'woman-cook-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f373'
  },
  {
    name: 'woman-cook-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f373'
  },
  {
    name: 'woman-cook-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f373'
  },
  {
    name: 'woman-curly-hair',
    code: '1f469-200d-1f9b1'
  },
  {
    name: 'woman-dancing',
    code: '1f483'
  },
  {
    name: 'woman-dancing-dark-skin-tone',
    code: '1f483-1f3ff'
  },
  {
    name: 'woman-dancing-light-skin-tone',
    code: '1f483-1f3fb'
  },
  {
    name: 'woman-dancing-medium-dark-skin-tone',
    code: '1f483-1f3fe'
  },
  {
    name: 'woman-dancing-medium-light-skin-tone',
    code: '1f483-1f3fc'
  },
  {
    name: 'woman-dancing-medium-skin-tone',
    code: '1f483-1f3fd'
  },
  {
    name: 'woman-dark-skin-tone',
    code: '1f469-1f3ff'
  },
  {
    name: 'woman-dark-skin-tone-bald',
    code: '1f469-1f3ff-200d-1f9b2'
  },
  {
    name: 'woman-dark-skin-tone-beard',
    code: '1f9d4-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-dark-skin-tone-blond-hair',
    code: '1f471-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-dark-skin-tone-christmas',
    code: '1f469-1f3ff-200d-1f384'
  },
  {
    name: 'woman-dark-skin-tone-curly-hair',
    code: '1f469-1f3ff-200d-1f9b1'
  },
  {
    name: 'woman-dark-skin-tone-red-hair',
    code: '1f469-1f3ff-200d-1f9b0'
  },
  {
    name: 'woman-dark-skin-tone-white-hair',
    code: '1f469-1f3ff-200d-1f9b3'
  },
  {
    name: 'woman-detective',
    code: '1f575-fe0f-200d-2640-fe0f'
  },
  {
    name: 'woman-detective-dark-skin-tone',
    code: '1f575-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-detective-light-skin-tone',
    code: '1f575-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-detective-medium-dark-skin-tone',
    code: '1f575-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-detective-medium-light-skin-tone',
    code: '1f575-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-detective-medium-skin-tone',
    code: '1f575-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-elf',
    code: '1f9dd-200d-2640-fe0f'
  },
  {
    name: 'woman-elf-dark-skin-tone',
    code: '1f9dd-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-elf-light-skin-tone',
    code: '1f9dd-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-elf-medium-dark-skin-tone',
    code: '1f9dd-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-elf-medium-light-skin-tone',
    code: '1f9dd-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-elf-medium-skin-tone',
    code: '1f9dd-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-facepalming',
    code: '1f926-200d-2640-fe0f'
  },
  {
    name: 'woman-facepalming-dark-skin-tone',
    code: '1f926-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-facepalming-light-skin-tone',
    code: '1f926-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-facepalming-medium-dark-skin-tone',
    code: '1f926-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-facepalming-medium-light-skin-tone',
    code: '1f926-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-facepalming-medium-skin-tone',
    code: '1f926-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-factory-worker',
    code: '1f469-200d-1f3ed'
  },
  {
    name: 'woman-factory-worker-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f3ed'
  },
  {
    name: 'woman-factory-worker-light-skin-tone',
    code: '1f469-1f3fb-200d-1f3ed'
  },
  {
    name: 'woman-factory-worker-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f3ed'
  },
  {
    name: 'woman-factory-worker-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f3ed'
  },
  {
    name: 'woman-factory-worker-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f3ed'
  },
  {
    name: 'woman-fairy',
    code: '1f9da-200d-2640-fe0f'
  },
  {
    name: 'woman-fairy-dark-skin-tone',
    code: '1f9da-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-fairy-light-skin-tone',
    code: '1f9da-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-fairy-medium-dark-skin-tone',
    code: '1f9da-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-fairy-medium-light-skin-tone',
    code: '1f9da-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-fairy-medium-skin-tone',
    code: '1f9da-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-farmer',
    code: '1f469-200d-1f33e'
  },
  {
    name: 'woman-farmer-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f33e'
  },
  {
    name: 'woman-farmer-light-skin-tone',
    code: '1f469-1f3fb-200d-1f33e'
  },
  {
    name: 'woman-farmer-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f33e'
  },
  {
    name: 'woman-farmer-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f33e'
  },
  {
    name: 'woman-farmer-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f33e'
  },
  {
    name: 'woman-feeding-baby',
    code: '1f469-200d-1f37c'
  },
  {
    name: 'woman-feeding-baby-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f37c'
  },
  {
    name: 'woman-feeding-baby-light-skin-tone',
    code: '1f469-1f3fb-200d-1f37c'
  },
  {
    name: 'woman-feeding-baby-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f37c'
  },
  {
    name: 'woman-feeding-baby-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f37c'
  },
  {
    name: 'woman-feeding-baby-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f37c'
  },
  {
    name: 'woman-firefighter',
    code: '1f469-200d-1f692'
  },
  {
    name: 'woman-firefighter-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f692'
  },
  {
    name: 'woman-firefighter-light-skin-tone',
    code: '1f469-1f3fb-200d-1f692'
  },
  {
    name: 'woman-firefighter-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f692'
  },
  {
    name: 'woman-firefighter-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f692'
  },
  {
    name: 'woman-firefighter-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f692'
  },
  {
    name: 'woman-frowning',
    code: '1f64d-200d-2640-fe0f'
  },
  {
    name: 'woman-frowning-dark-skin-tone',
    code: '1f64d-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-frowning-light-skin-tone',
    code: '1f64d-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-frowning-medium-dark-skin-tone',
    code: '1f64d-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-frowning-medium-light-skin-tone',
    code: '1f64d-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-frowning-medium-skin-tone',
    code: '1f64d-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-genie',
    code: '1f9de-200d-2640-fe0f'
  },
  {
    name: 'woman-gesturing-no',
    code: '1f645-200d-2640-fe0f'
  },
  {
    name: 'woman-gesturing-no-dark-skin-tone',
    code: '1f645-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-gesturing-no-light-skin-tone',
    code: '1f645-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-gesturing-no-medium-dark-skin-tone',
    code: '1f645-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-gesturing-no-medium-light-skin-tone',
    code: '1f645-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-gesturing-no-medium-skin-tone',
    code: '1f645-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-gesturing-ok',
    code: '1f646-200d-2640-fe0f'
  },
  {
    name: 'woman-gesturing-ok-dark-skin-tone',
    code: '1f646-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-gesturing-ok-light-skin-tone',
    code: '1f646-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-gesturing-ok-medium-dark-skin-tone',
    code: '1f646-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-gesturing-ok-medium-light-skin-tone',
    code: '1f646-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-gesturing-ok-medium-skin-tone',
    code: '1f646-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-getting-haircut',
    code: '1f487-200d-2640-fe0f'
  },
  {
    name: 'woman-getting-haircut-dark-skin-tone',
    code: '1f487-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-getting-haircut-light-skin-tone',
    code: '1f487-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-getting-haircut-medium-dark-skin-tone',
    code: '1f487-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-getting-haircut-medium-light-skin-tone',
    code: '1f487-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-getting-haircut-medium-skin-tone',
    code: '1f487-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-getting-massage',
    code: '1f486-200d-2640-fe0f'
  },
  {
    name: 'woman-getting-massage-dark-skin-tone',
    code: '1f486-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-getting-massage-light-skin-tone',
    code: '1f486-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-getting-massage-medium-dark-skin-tone',
    code: '1f486-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-getting-massage-medium-light-skin-tone',
    code: '1f486-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-getting-massage-medium-skin-tone',
    code: '1f486-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-golfing',
    code: '1f3cc-fe0f-200d-2640-fe0f'
  },
  {
    name: 'woman-golfing-dark-skin-tone',
    code: '1f3cc-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-golfing-light-skin-tone',
    code: '1f3cc-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-golfing-medium-dark-skin-tone',
    code: '1f3cc-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-golfing-medium-light-skin-tone',
    code: '1f3cc-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-golfing-medium-skin-tone',
    code: '1f3cc-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-guard',
    code: '1f482-200d-2640-fe0f'
  },
  {
    name: 'woman-guard-dark-skin-tone',
    code: '1f482-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-guard-light-skin-tone',
    code: '1f482-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-guard-medium-dark-skin-tone',
    code: '1f482-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-guard-medium-light-skin-tone',
    code: '1f482-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-guard-medium-skin-tone',
    code: '1f482-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-health-worker',
    code: '1f469-200d-2695-fe0f'
  },
  {
    name: 'woman-health-worker-dark-skin-tone',
    code: '1f469-1f3ff-200d-2695-fe0f'
  },
  {
    name: 'woman-health-worker-light-skin-tone',
    code: '1f469-1f3fb-200d-2695-fe0f'
  },
  {
    name: 'woman-health-worker-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-2695-fe0f'
  },
  {
    name: 'woman-health-worker-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-2695-fe0f'
  },
  {
    name: 'woman-health-worker-medium-skin-tone',
    code: '1f469-1f3fd-200d-2695-fe0f'
  },
  {
    name: 'woman-in-lotus-position',
    code: '1f9d8-200d-2640-fe0f'
  },
  {
    name: 'woman-in-lotus-position-dark-skin-tone',
    code: '1f9d8-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-in-lotus-position-light-skin-tone',
    code: '1f9d8-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-in-lotus-position-medium-dark-skin-tone',
    code: '1f9d8-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-in-lotus-position-medium-light-skin-tone',
    code: '1f9d8-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-in-lotus-position-medium-skin-tone',
    code: '1f9d8-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-in-manual-wheelchair',
    code: '1f469-200d-1f9bd'
  },
  {
    name: 'woman-in-manual-wheelchair-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f9bd'
  },
  {
    name: 'woman-in-manual-wheelchair-light-skin-tone',
    code: '1f469-1f3fb-200d-1f9bd'
  },
  {
    name: 'woman-in-manual-wheelchair-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f9bd'
  },
  {
    name: 'woman-in-manual-wheelchair-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f9bd'
  },
  {
    name: 'woman-in-manual-wheelchair-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f9bd'
  },
  {
    name: 'woman-in-motorized-wheelchair',
    code: '1f469-200d-1f9bc'
  },
  {
    name: 'woman-in-motorized-wheelchair-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f9bc'
  },
  {
    name: 'woman-in-motorized-wheelchair-light-skin-tone',
    code: '1f469-1f3fb-200d-1f9bc'
  },
  {
    name: 'woman-in-motorized-wheelchair-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f9bc'
  },
  {
    name: 'woman-in-motorized-wheelchair-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f9bc'
  },
  {
    name: 'woman-in-motorized-wheelchair-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f9bc'
  },
  {
    name: 'woman-in-steamy-room',
    code: '1f9d6-200d-2640-fe0f'
  },
  {
    name: 'woman-in-steamy-room-dark-skin-tone',
    code: '1f9d6-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-in-steamy-room-light-skin-tone',
    code: '1f9d6-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-in-steamy-room-medium-dark-skin-tone',
    code: '1f9d6-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-in-steamy-room-medium-light-skin-tone',
    code: '1f9d6-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-in-steamy-room-medium-skin-tone',
    code: '1f9d6-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-in-tuxedo',
    code: '1f935-200d-2640-fe0f'
  },
  {
    name: 'woman-in-tuxedo-dark-skin-tone',
    code: '1f935-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-in-tuxedo-light-skin-tone',
    code: '1f935-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-in-tuxedo-medium-dark-skin-tone',
    code: '1f935-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-in-tuxedo-medium-light-skin-tone',
    code: '1f935-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-in-tuxedo-medium-skin-tone',
    code: '1f935-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-judge',
    code: '1f469-200d-2696-fe0f'
  },
  {
    name: 'woman-judge-dark-skin-tone',
    code: '1f469-1f3ff-200d-2696-fe0f'
  },
  {
    name: 'woman-judge-light-skin-tone',
    code: '1f469-1f3fb-200d-2696-fe0f'
  },
  {
    name: 'woman-judge-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-2696-fe0f'
  },
  {
    name: 'woman-judge-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-2696-fe0f'
  },
  {
    name: 'woman-judge-medium-skin-tone',
    code: '1f469-1f3fd-200d-2696-fe0f'
  },
  {
    name: 'woman-juggling',
    code: '1f939-200d-2640-fe0f'
  },
  {
    name: 'woman-juggling-dark-skin-tone',
    code: '1f939-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-juggling-light-skin-tone',
    code: '1f939-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-juggling-medium-dark-skin-tone',
    code: '1f939-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-juggling-medium-light-skin-tone',
    code: '1f939-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-juggling-medium-skin-tone',
    code: '1f939-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-kneeling',
    code: '1f9ce-200d-2640-fe0f'
  },
  {
    name: 'woman-kneeling-dark-skin-tone',
    code: '1f9ce-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-kneeling-light-skin-tone',
    code: '1f9ce-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-kneeling-medium-dark-skin-tone',
    code: '1f9ce-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-kneeling-medium-light-skin-tone',
    code: '1f9ce-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-kneeling-medium-skin-tone',
    code: '1f9ce-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-lifting-weights',
    code: '1f3cb-fe0f-200d-2640-fe0f'
  },
  {
    name: 'woman-lifting-weights-dark-skin-tone',
    code: '1f3cb-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-lifting-weights-light-skin-tone',
    code: '1f3cb-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-lifting-weights-medium-dark-skin-tone',
    code: '1f3cb-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-lifting-weights-medium-light-skin-tone',
    code: '1f3cb-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-lifting-weights-medium-skin-tone',
    code: '1f3cb-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-light-skin-tone',
    code: '1f469-1f3fb'
  },
  {
    name: 'woman-light-skin-tone-bald',
    code: '1f469-1f3fb-200d-1f9b2'
  },
  {
    name: 'woman-light-skin-tone-beard',
    code: '1f9d4-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-light-skin-tone-blond-hair',
    code: '1f471-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-light-skin-tone-christmas',
    code: '1f469-1f3fb-200d-1f384'
  },
  {
    name: 'woman-light-skin-tone-curly-hair',
    code: '1f469-1f3fb-200d-1f9b1'
  },
  {
    name: 'woman-light-skin-tone-red-hair',
    code: '1f469-1f3fb-200d-1f9b0'
  },
  {
    name: 'woman-light-skin-tone-white-hair',
    code: '1f469-1f3fb-200d-1f9b3'
  },
  {
    name: 'woman-mage',
    code: '1f9d9-200d-2640-fe0f'
  },
  {
    name: 'woman-mage-dark-skin-tone',
    code: '1f9d9-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-mage-light-skin-tone',
    code: '1f9d9-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-mage-medium-dark-skin-tone',
    code: '1f9d9-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-mage-medium-light-skin-tone',
    code: '1f9d9-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-mage-medium-skin-tone',
    code: '1f9d9-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-mechanic',
    code: '1f469-200d-1f527'
  },
  {
    name: 'woman-mechanic-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f527'
  },
  {
    name: 'woman-mechanic-light-skin-tone',
    code: '1f469-1f3fb-200d-1f527'
  },
  {
    name: 'woman-mechanic-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f527'
  },
  {
    name: 'woman-mechanic-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f527'
  },
  {
    name: 'woman-mechanic-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f527'
  },
  {
    name: 'woman-medium-dark-skin-tone',
    code: '1f469-1f3fe'
  },
  {
    name: 'woman-medium-dark-skin-tone-bald',
    code: '1f469-1f3fe-200d-1f9b2'
  },
  {
    name: 'woman-medium-dark-skin-tone-beard',
    code: '1f9d4-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-medium-dark-skin-tone-blond-hair',
    code: '1f471-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-medium-dark-skin-tone-christmas',
    code: '1f469-1f3fe-200d-1f384'
  },
  {
    name: 'woman-medium-dark-skin-tone-curly-hair',
    code: '1f469-1f3fe-200d-1f9b1'
  },
  {
    name: 'woman-medium-dark-skin-tone-red-hair',
    code: '1f469-1f3fe-200d-1f9b0'
  },
  {
    name: 'woman-medium-dark-skin-tone-white-hair',
    code: '1f469-1f3fe-200d-1f9b3'
  },
  {
    name: 'woman-medium-light-skin-tone',
    code: '1f469-1f3fc'
  },
  {
    name: 'woman-medium-light-skin-tone-bald',
    code: '1f469-1f3fc-200d-1f9b2'
  },
  {
    name: 'woman-medium-light-skin-tone-beard',
    code: '1f9d4-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-medium-light-skin-tone-blond-hair',
    code: '1f471-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-medium-light-skin-tone-christmas',
    code: '1f469-1f3fc-200d-1f384'
  },
  {
    name: 'woman-medium-light-skin-tone-curly-hair',
    code: '1f469-1f3fc-200d-1f9b1'
  },
  {
    name: 'woman-medium-light-skin-tone-red-hair',
    code: '1f469-1f3fc-200d-1f9b0'
  },
  {
    name: 'woman-medium-light-skin-tone-white-hair',
    code: '1f469-1f3fc-200d-1f9b3'
  },
  {
    name: 'woman-medium-skin-tone',
    code: '1f469-1f3fd'
  },
  {
    name: 'woman-medium-skin-tone-bald',
    code: '1f469-1f3fd-200d-1f9b2'
  },
  {
    name: 'woman-medium-skin-tone-beard',
    code: '1f9d4-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-medium-skin-tone-blond-hair',
    code: '1f471-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-medium-skin-tone-christmas',
    code: '1f469-1f3fd-200d-1f384'
  },
  {
    name: 'woman-medium-skin-tone-curly-hair',
    code: '1f469-1f3fd-200d-1f9b1'
  },
  {
    name: 'woman-medium-skin-tone-red-hair',
    code: '1f469-1f3fd-200d-1f9b0'
  },
  {
    name: 'woman-medium-skin-tone-white-hair',
    code: '1f469-1f3fd-200d-1f9b3'
  },
  {
    name: 'woman-mountain-biking',
    code: '1f6b5-200d-2640-fe0f'
  },
  {
    name: 'woman-mountain-biking-dark-skin-tone',
    code: '1f6b5-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-mountain-biking-light-skin-tone',
    code: '1f6b5-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-mountain-biking-medium-dark-skin-tone',
    code: '1f6b5-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-mountain-biking-medium-light-skin-tone',
    code: '1f6b5-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-mountain-biking-medium-skin-tone',
    code: '1f6b5-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-office-worker',
    code: '1f469-200d-1f4bc'
  },
  {
    name: 'woman-office-worker-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f4bc'
  },
  {
    name: 'woman-office-worker-light-skin-tone',
    code: '1f469-1f3fb-200d-1f4bc'
  },
  {
    name: 'woman-office-worker-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f4bc'
  },
  {
    name: 'woman-office-worker-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f4bc'
  },
  {
    name: 'woman-office-worker-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f4bc'
  },
  {
    name: 'woman-pilot',
    code: '1f469-200d-2708-fe0f'
  },
  {
    name: 'woman-pilot-dark-skin-tone',
    code: '1f469-1f3ff-200d-2708-fe0f'
  },
  {
    name: 'woman-pilot-light-skin-tone',
    code: '1f469-1f3fb-200d-2708-fe0f'
  },
  {
    name: 'woman-pilot-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-2708-fe0f'
  },
  {
    name: 'woman-pilot-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-2708-fe0f'
  },
  {
    name: 'woman-pilot-medium-skin-tone',
    code: '1f469-1f3fd-200d-2708-fe0f'
  },
  {
    name: 'woman-playing-handball',
    code: '1f93e-200d-2640-fe0f'
  },
  {
    name: 'woman-playing-handball-dark-skin-tone',
    code: '1f93e-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-playing-handball-light-skin-tone',
    code: '1f93e-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-playing-handball-medium-dark-skin-tone',
    code: '1f93e-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-playing-handball-medium-light-skin-tone',
    code: '1f93e-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-playing-handball-medium-skin-tone',
    code: '1f93e-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-playing-water-polo',
    code: '1f93d-200d-2640-fe0f'
  },
  {
    name: 'woman-playing-water-polo-dark-skin-tone',
    code: '1f93d-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-playing-water-polo-light-skin-tone',
    code: '1f93d-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-playing-water-polo-medium-dark-skin-tone',
    code: '1f93d-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-playing-water-polo-medium-light-skin-tone',
    code: '1f93d-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-playing-water-polo-medium-skin-tone',
    code: '1f93d-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-police-officer',
    code: '1f46e-200d-2640-fe0f'
  },
  {
    name: 'woman-police-officer-dark-skin-tone',
    code: '1f46e-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-police-officer-light-skin-tone',
    code: '1f46e-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-police-officer-medium-dark-skin-tone',
    code: '1f46e-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-police-officer-medium-light-skin-tone',
    code: '1f46e-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-police-officer-medium-skin-tone',
    code: '1f46e-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-pouting',
    code: '1f64e-200d-2640-fe0f'
  },
  {
    name: 'woman-pouting-dark-skin-tone',
    code: '1f64e-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-pouting-light-skin-tone',
    code: '1f64e-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-pouting-medium-dark-skin-tone',
    code: '1f64e-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-pouting-medium-light-skin-tone',
    code: '1f64e-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-pouting-medium-skin-tone',
    code: '1f64e-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-raising-hand',
    code: '1f64b-200d-2640-fe0f'
  },
  {
    name: 'woman-raising-hand-dark-skin-tone',
    code: '1f64b-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-raising-hand-light-skin-tone',
    code: '1f64b-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-raising-hand-medium-dark-skin-tone',
    code: '1f64b-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-raising-hand-medium-light-skin-tone',
    code: '1f64b-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-raising-hand-medium-skin-tone',
    code: '1f64b-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-red-hair',
    code: '1f469-200d-1f9b0'
  },
  {
    name: 'woman-rowing-boat',
    code: '1f6a3-200d-2640-fe0f'
  },
  {
    name: 'woman-rowing-boat-dark-skin-tone',
    code: '1f6a3-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-rowing-boat-light-skin-tone',
    code: '1f6a3-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-rowing-boat-medium-dark-skin-tone',
    code: '1f6a3-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-rowing-boat-medium-light-skin-tone',
    code: '1f6a3-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-rowing-boat-medium-skin-tone',
    code: '1f6a3-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-running',
    code: '1f3c3-200d-2640-fe0f'
  },
  {
    name: 'woman-running-dark-skin-tone',
    code: '1f3c3-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-running-light-skin-tone',
    code: '1f3c3-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-running-medium-dark-skin-tone',
    code: '1f3c3-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-running-medium-light-skin-tone',
    code: '1f3c3-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-running-medium-skin-tone',
    code: '1f3c3-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-s-boot',
    code: '1f462'
  },
  {
    name: 'woman-s-clothes',
    code: '1f45a'
  },
  {
    name: 'woman-s-hat',
    code: '1f452'
  },
  {
    name: 'woman-s-sandal',
    code: '1f461'
  },
  {
    name: 'woman-scientist',
    code: '1f469-200d-1f52c'
  },
  {
    name: 'woman-scientist-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f52c'
  },
  {
    name: 'woman-scientist-light-skin-tone',
    code: '1f469-1f3fb-200d-1f52c'
  },
  {
    name: 'woman-scientist-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f52c'
  },
  {
    name: 'woman-scientist-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f52c'
  },
  {
    name: 'woman-scientist-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f52c'
  },
  {
    name: 'woman-shrugging',
    code: '1f937-200d-2640-fe0f'
  },
  {
    name: 'woman-shrugging-dark-skin-tone',
    code: '1f937-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-shrugging-light-skin-tone',
    code: '1f937-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-shrugging-medium-dark-skin-tone',
    code: '1f937-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-shrugging-medium-light-skin-tone',
    code: '1f937-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-shrugging-medium-skin-tone',
    code: '1f937-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-singer',
    code: '1f469-200d-1f3a4'
  },
  {
    name: 'woman-singer-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f3a4'
  },
  {
    name: 'woman-singer-light-skin-tone',
    code: '1f469-1f3fb-200d-1f3a4'
  },
  {
    name: 'woman-singer-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f3a4'
  },
  {
    name: 'woman-singer-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f3a4'
  },
  {
    name: 'woman-singer-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f3a4'
  },
  {
    name: 'woman-standing',
    code: '1f9cd-200d-2640-fe0f'
  },
  {
    name: 'woman-standing-dark-skin-tone',
    code: '1f9cd-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-standing-light-skin-tone',
    code: '1f9cd-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-standing-medium-dark-skin-tone',
    code: '1f9cd-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-standing-medium-light-skin-tone',
    code: '1f9cd-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-standing-medium-skin-tone',
    code: '1f9cd-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-student',
    code: '1f469-200d-1f393'
  },
  {
    name: 'woman-student-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f393'
  },
  {
    name: 'woman-student-light-skin-tone',
    code: '1f469-1f3fb-200d-1f393'
  },
  {
    name: 'woman-student-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f393'
  },
  {
    name: 'woman-student-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f393'
  },
  {
    name: 'woman-student-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f393'
  },
  {
    name: 'woman-superhero',
    code: '1f9b8-200d-2640-fe0f'
  },
  {
    name: 'woman-superhero-dark-skin-tone',
    code: '1f9b8-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-superhero-light-skin-tone',
    code: '1f9b8-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-superhero-medium-dark-skin-tone',
    code: '1f9b8-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-superhero-medium-light-skin-tone',
    code: '1f9b8-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-superhero-medium-skin-tone',
    code: '1f9b8-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-supervillain',
    code: '1f9b9-200d-2640-fe0f'
  },
  {
    name: 'woman-supervillain-dark-skin-tone',
    code: '1f9b9-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-supervillain-light-skin-tone',
    code: '1f9b9-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-supervillain-medium-dark-skin-tone',
    code: '1f9b9-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-supervillain-medium-light-skin-tone',
    code: '1f9b9-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-supervillain-medium-skin-tone',
    code: '1f9b9-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-surfing',
    code: '1f3c4-200d-2640-fe0f'
  },
  {
    name: 'woman-surfing-dark-skin-tone',
    code: '1f3c4-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-surfing-light-skin-tone',
    code: '1f3c4-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-surfing-medium-dark-skin-tone',
    code: '1f3c4-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-surfing-medium-light-skin-tone',
    code: '1f3c4-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-surfing-medium-skin-tone',
    code: '1f3c4-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-swimming',
    code: '1f3ca-200d-2640-fe0f'
  },
  {
    name: 'woman-swimming-dark-skin-tone',
    code: '1f3ca-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-swimming-light-skin-tone',
    code: '1f3ca-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-swimming-medium-dark-skin-tone',
    code: '1f3ca-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-swimming-medium-light-skin-tone',
    code: '1f3ca-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-swimming-medium-skin-tone',
    code: '1f3ca-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-teacher',
    code: '1f469-200d-1f3eb'
  },
  {
    name: 'woman-teacher-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f3eb'
  },
  {
    name: 'woman-teacher-light-skin-tone',
    code: '1f469-1f3fb-200d-1f3eb'
  },
  {
    name: 'woman-teacher-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f3eb'
  },
  {
    name: 'woman-teacher-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f3eb'
  },
  {
    name: 'woman-teacher-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f3eb'
  },
  {
    name: 'woman-technologist',
    code: '1f469-200d-1f4bb'
  },
  {
    name: 'woman-technologist-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f4bb'
  },
  {
    name: 'woman-technologist-light-skin-tone',
    code: '1f469-1f3fb-200d-1f4bb'
  },
  {
    name: 'woman-technologist-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f4bb'
  },
  {
    name: 'woman-technologist-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f4bb'
  },
  {
    name: 'woman-technologist-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f4bb'
  },
  {
    name: 'woman-tipping-hand',
    code: '1f481-200d-2640-fe0f'
  },
  {
    name: 'woman-tipping-hand-dark-skin-tone',
    code: '1f481-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-tipping-hand-light-skin-tone',
    code: '1f481-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-tipping-hand-medium-dark-skin-tone',
    code: '1f481-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-tipping-hand-medium-light-skin-tone',
    code: '1f481-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-tipping-hand-medium-skin-tone',
    code: '1f481-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-vampire',
    code: '1f9db-200d-2640-fe0f'
  },
  {
    name: 'woman-vampire-dark-skin-tone',
    code: '1f9db-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-vampire-light-skin-tone',
    code: '1f9db-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-vampire-medium-dark-skin-tone',
    code: '1f9db-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-vampire-medium-light-skin-tone',
    code: '1f9db-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-vampire-medium-skin-tone',
    code: '1f9db-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-walking',
    code: '1f6b6-200d-2640-fe0f'
  },
  {
    name: 'woman-walking-dark-skin-tone',
    code: '1f6b6-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-walking-light-skin-tone',
    code: '1f6b6-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-walking-medium-dark-skin-tone',
    code: '1f6b6-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-walking-medium-light-skin-tone',
    code: '1f6b6-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-walking-medium-skin-tone',
    code: '1f6b6-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-wearing-turban',
    code: '1f473-200d-2640-fe0f'
  },
  {
    name: 'woman-wearing-turban-dark-skin-tone',
    code: '1f473-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-wearing-turban-light-skin-tone',
    code: '1f473-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-wearing-turban-medium-dark-skin-tone',
    code: '1f473-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-wearing-turban-medium-light-skin-tone',
    code: '1f473-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-wearing-turban-medium-skin-tone',
    code: '1f473-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-white-hair',
    code: '1f469-200d-1f9b3'
  },
  {
    name: 'woman-with-headscarf',
    code: '1f9d5'
  },
  {
    name: 'woman-with-headscarf-dark-skin-tone',
    code: '1f9d5-1f3ff'
  },
  {
    name: 'woman-with-headscarf-light-skin-tone',
    code: '1f9d5-1f3fb'
  },
  {
    name: 'woman-with-headscarf-medium-dark-skin-tone',
    code: '1f9d5-1f3fe'
  },
  {
    name: 'woman-with-headscarf-medium-light-skin-tone',
    code: '1f9d5-1f3fc'
  },
  {
    name: 'woman-with-headscarf-medium-skin-tone',
    code: '1f9d5-1f3fd'
  },
  {
    name: 'woman-with-veil',
    code: '1f470-200d-2640-fe0f'
  },
  {
    name: 'woman-with-veil-dark-skin-tone',
    code: '1f470-1f3ff-200d-2640-fe0f'
  },
  {
    name: 'woman-with-veil-light-skin-tone',
    code: '1f470-1f3fb-200d-2640-fe0f'
  },
  {
    name: 'woman-with-veil-medium-dark-skin-tone',
    code: '1f470-1f3fe-200d-2640-fe0f'
  },
  {
    name: 'woman-with-veil-medium-light-skin-tone',
    code: '1f470-1f3fc-200d-2640-fe0f'
  },
  {
    name: 'woman-with-veil-medium-skin-tone',
    code: '1f470-1f3fd-200d-2640-fe0f'
  },
  {
    name: 'woman-with-white-cane',
    code: '1f469-200d-1f9af'
  },
  {
    name: 'woman-with-white-cane-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f9af'
  },
  {
    name: 'woman-with-white-cane-light-skin-tone',
    code: '1f469-1f3fb-200d-1f9af'
  },
  {
    name: 'woman-with-white-cane-medium-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f9af'
  },
  {
    name: 'woman-with-white-cane-medium-light-skin-tone',
    code: '1f469-1f3fc-200d-1f9af'
  },
  {
    name: 'woman-with-white-cane-medium-skin-tone',
    code: '1f469-1f3fd-200d-1f9af'
  },
  {
    name: 'woman-zombie',
    code: '1f9df-200d-2640-fe0f'
  },
  {
    name: 'women-holding-hands',
    code: '1f46d'
  },
  {
    name: 'women-holding-hands-dark-skin-tone',
    code: '1f46d-1f3ff'
  },
  {
    name: 'women-holding-hands-dark-skin-tone-light-skin-tone',
    code: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb'
  },
  {
    name: 'women-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe'
  },
  {
    name: 'women-holding-hands-dark-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc'
  },
  {
    name: 'women-holding-hands-dark-skin-tone-medium-skin-tone',
    code: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd'
  },
  {
    name: 'women-holding-hands-light-skin-tone',
    code: '1f46d-1f3fb'
  },
  {
    name: 'women-holding-hands-light-skin-tone-dark-skin-tone',
    code: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff'
  },
  {
    name: 'women-holding-hands-light-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe'
  },
  {
    name: 'women-holding-hands-light-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc'
  },
  {
    name: 'women-holding-hands-light-skin-tone-medium-skin-tone',
    code: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd'
  },
  {
    name: 'women-holding-hands-medium-dark-skin-tone',
    code: '1f46d-1f3fe'
  },
  {
    name: 'women-holding-hands-medium-dark-skin-tone-dark-skin-tone',
    code: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff'
  },
  {
    name: 'women-holding-hands-medium-dark-skin-tone-light-skin-tone',
    code: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb'
  },
  {
    name: 'women-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc'
  },
  {
    name: 'women-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    code: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd'
  },
  {
    name: 'women-holding-hands-medium-light-skin-tone',
    code: '1f46d-1f3fc'
  },
  {
    name: 'women-holding-hands-medium-light-skin-tone-dark-skin-tone',
    code: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff'
  },
  {
    name: 'women-holding-hands-medium-light-skin-tone-light-skin-tone',
    code: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb'
  },
  {
    name: 'women-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe'
  },
  {
    name: 'women-holding-hands-medium-light-skin-tone-medium-skin-tone',
    code: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd'
  },
  {
    name: 'women-holding-hands-medium-skin-tone',
    code: '1f46d-1f3fd'
  },
  {
    name: 'women-holding-hands-medium-skin-tone-dark-skin-tone',
    code: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff'
  },
  {
    name: 'women-holding-hands-medium-skin-tone-light-skin-tone',
    code: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb'
  },
  {
    name: 'women-holding-hands-medium-skin-tone-medium-dark-skin-tone',
    code: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe'
  },
  {
    name: 'women-holding-hands-medium-skin-tone-medium-light-skin-tone',
    code: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc'
  },
  {
    name: 'women-s-room',
    code: '1f6ba'
  },
  {
    name: 'women-with-bunny-ears',
    code: '1f46f-200d-2640-fe0f'
  },
  {
    name: 'women-wrestling',
    code: '1f93c-200d-2640-fe0f'
  },
  {
    name: 'wood',
    code: '1fab5'
  },
  {
    name: 'woozy-face',
    code: '1f974'
  },
  {
    name: 'world-map',
    code: '1f5fa'
  },
  {
    name: 'worm',
    code: '1fab1'
  },
  {
    name: 'worried-face',
    code: '1f61f'
  },
  {
    name: 'wrapped-gift',
    code: '1f381'
  },
  {
    name: 'wrench',
    code: '1f527'
  },
  {
    name: 'writing-hand',
    code: '270d'
  },
  {
    name: 'writing-hand-dark-skin-tone',
    code: '270d-1f3ff'
  },
  {
    name: 'writing-hand-light-skin-tone',
    code: '270d-1f3fb'
  },
  {
    name: 'writing-hand-medium-dark-skin-tone',
    code: '270d-1f3fe'
  },
  {
    name: 'writing-hand-medium-light-skin-tone',
    code: '270d-1f3fc'
  },
  {
    name: 'writing-hand-medium-skin-tone',
    code: '270d-1f3fd'
  },
  {
    name: 'yarn',
    code: '1f9f6'
  },
  {
    name: 'yawning-face',
    code: '1f971'
  },
  {
    name: 'yellow-circle',
    code: '1f7e1'
  },
  {
    name: 'yellow-heart',
    code: '1f49b'
  },
  {
    name: 'yellow-square',
    code: '1f7e8'
  },
  {
    name: 'yen-banknote',
    code: '1f4b4'
  },
  {
    name: 'yin-yang',
    code: '262f'
  },
  {
    name: 'yo-yo',
    code: '1fa80'
  },
  {
    name: 'zany-face',
    code: '1f92a'
  },
  {
    name: 'zebra',
    code: '1f993'
  },
  {
    name: 'zipper-mouth-face',
    code: '1f910'
  },
  {
    name: 'zombie',
    code: '1f9df'
  },
  {
    name: 'zzz',
    code: '1f4a4'
  }
]

// get all emojis
const twe = document.querySelectorAll('.twe')

// get amount of emojis
let amountOfEmojis = twe.length

// loop through all and add default style
while (amountOfEmojis--) {
  twe[amountOfEmojis].style.display = 'inline-block'
  twe[amountOfEmojis].style.height = '1em'
  twe[amountOfEmojis].style.width = '1em'
  twe[amountOfEmojis].style.margin = '0 .05em 0 .1em'
  twe[amountOfEmojis].style.verticalAlign = '-0.1em'
  twe[amountOfEmojis].style.backgroundRepeat = 'no-repeat'
  twe[amountOfEmojis].style.backgroundPosition = 'center center'
  twe[amountOfEmojis].style.backgroundSize = '1em 1em'

  const name = twe[amountOfEmojis].classList[1].replace('twe-', '')
  const emoji = emojis.find(emoji => emoji.name == name)

  twe[amountOfEmojis].style.background = `url(https://cdn.jsdelivr.net/npm/@twemoji/cdn/${emoji.code}.svg)`
}