const heroesData = {
    "Prabhas": {
        image: 'photos/prabhas.jpeg',
        songs: [
            { file: "songs/prabhas/billa.mp3", answer: "Billa", hint: "A stylish action thriller featuring the hero in a dual role." },
            { file: "songs/prabhas/baahubali.mp3", answer: "Baahubali", hint: "An epic historical fiction film directed by S.S. Rajamouli." },
            { file: "songs/prabhas/saaho.mp3", answer: "Saaho", hint: "A high-budget action thriller also starring Shraddha Kapoor." },
            { file: "songs/prabhas/radheshyam.mp3", answer: "Radhe Shyam", hint: "A period romantic drama set in Europe, focusing on palmistry." },
            { file: "songs/prabhas/varsham.mp3", answer: "Varsham", hint: "A classic romantic action film involving a love triangle." },
            { file: "songs/prabhas/darling.mp3", answer: "Darling", hint: "A romantic comedy where childhood friends reunite." },
            { file: "songs/prabhas/mirchi.mp3", answer: "Mirchi", hint: "An action-packed story about changing a rival family's mindset." },
            { file: "songs/prabhas/mrperfect.mp3", answer: "Mr. Perfect", hint: "A man who seeks a flawless partner learns about compromise in love." },
            { file: "songs/prabhas/chatrapathi.mp3", answer: "Chatrapathi", hint: "A story about a refugee who rises to become a leader for his people." },
            { file: "songs/prabhas/salaar.mp3", answer: "Salaar", hint: "An action film set in the fictional city of Khansaar, directed by Prashanth Neel." }
        ]
    },
    "Mahesh Babu": {
        image: 'photos/mahesh.jpeg',
        songs: [
            { file: "songs/mahesh/pokiri.mp3", answer: "Pokiri", hint: "A Puri Jagannadh blockbuster about a ruthless gangster with a hidden identity." },
            { file: "songs/mahesh/srimanthudu.mp3", answer: "Srimanthudu", hint: "The protagonist adopts a village to develop it." },
            { file: "songs/mahesh/Nenokkadine.mp3", answer: "Nenokkadine", hint: "A psychological thriller where a rockstar seeks revenge for his parents' death." },
            { file: "songs/mahesh/businessman.mp3", answer: "Businessman", hint: "The hero arrives in Mumbai with the goal of becoming a mafia don." },
            { file: "songs/mahesh/kaleja.mp3", answer: "Khaleja", hint: "A fantasy action film where a taxi driver is believed to be a god." },
            { file: "songs/mahesh/athadu.mp3", answer: "Athadu", hint: "A story of a hitman who assumes another man's identity." },
            { file: "songs/mahesh/nani.mp3", answer: "Nani", hint: "A young boy is magically transformed into a 28-year-old man." },
            { file: "songs/mahesh/spyder.mp3", answer: "Spyder", hint: "An intelligence officer tries to stop a sadistic terrorist who wants to create chaos." },
            { file: "songs/mahesh/svsc.mp3", answer: "SVSC", hint: "A family drama that explores the relationship between two brothers." },
            { file: "songs/mahesh/gunturkaram.mp3", answer: "Guntur Karam", hint: "An action film about the king of the underworld of Guntur." }
        ]
    },
    "Allu Arjun": {
        image: 'photos/alluarjun.jpeg',
        songs: [
            { file: "songs/alluarjun/pushpa.mp3", answer: "Pushpa", hint: "Famous for the tagline: 'Thaggede Le!'" },
            { file: "songs/alluarjun/alavaikunthapurramuloo.mp3", answer: "Ala Vaikunthapurramuloo", hint: "A Trivikram directorial where the hero discovers he was swapped at birth." },
            { file: "songs/alluarjun/arya.mp3", answer: "Arya", hint: "A story about a man with a one-sided love philosophy." },
            { file: "songs/alluarjun/racegurram.mp3", answer: "Race Gurram", hint: "Two brothers, one a cop and one a happy-go-lucky guy, team up." },
            { file: "songs/alluarjun/naaperusuryanaaliiuindia.mp3", answer: "NaaPeruSuryaNaaIlluIndia", hint: "A soldier with anger issues must get a psychologist's approval to return to the border." },
            { file: "songs/alluarjun/sarrainodu.mp3", answer: "Sarrainodu", hint: "An ex-military man fights against a corrupt politician's son." },
            { file: "songs/alluarjun/julayi.mp3", answer: "Julayi", hint: "A story about a man who believes in earning money the easy way." },
            { file: "songs/alluarjun/sonofsatyamurthy.mp3", answer: "S/O Satyamurthy", hint: "A son works to uphold his late father's values." },
            { file: "songs/alluarjun/Iddarammayilatho.mp3", answer: "Iddarammayilatho", hint: "A musician in Barcelona gets entangled in a diary that reveals a dark past." },
            { file: "songs/alluarjun/gangotri.mp3", answer: "Gangotri", hint: "The hero's debut film, a love story about the daughter of a powerful factionist." }
        ]
    },
    "Ram Charan": {
        image: 'photos/ramcharan.jpeg',
        songs: [
            { file: "songs/ramcharan/magadheera.mp3", answer: "Magadheera", hint: "A historical reincarnation drama." },
            { file: "songs/ramcharan/rrr.mp3", answer: "RRR", hint: "Plays the role of the fiery revolutionary, Alluri Sitarama Raju." },
            { file: "songs/ramcharan/rangasthalam.mp3", answer: "Rangasthalam", hint: "A partially deaf man fights against a corrupt village president." },
            { file: "songs/ramcharan/dhruva.mp3", answer: "Dhruva", hint: "A remake of 'Thani Oruvan' where a cop targets a powerful scientist." },
            { file: "songs/ramcharan/chirutha.mp3", answer: "Chirutha", hint: "The hero's debut film, directed by Puri Jagannadh." },
            { file: "songs/ramcharan/yevadu.mp3", answer: "Yevadu", hint: "A man gets a face transplant and seeks revenge." },
            { file: "songs/ramcharan/govinduduandarivadele.mp3", answer: "Govindudu Andarivadele", hint: "An NRI comes to India to reunite his estranged family." },
            { file: "songs/ramcharan/naayak.mp3", answer: "Naayak", hint: "Features the hero in a double role, one in Kolkata and one in Hyderabad." },
            { file: "songs/ramcharan/orange.mp3", answer: "Orange", hint: "A film that explores the concept of loving someone forever." },
            { file: "songs/ramcharan/brucelee.mp3", answer: "Bruce Lee", hint: "A stuntman poses as a cop to help his sister." }
        ]
    },
    "Nani": {
        image: 'photos/nani.jpeg',
        songs: [
            { file: "songs/nani/jersey.mp3", answer: "Jersey", hint: "A touching story about a father's cricket comeback." },
            { file: "songs/nani/dasara.mp3", answer: "Dasara", hint: "Set against the backdrop of Telangana's coal mines." },
            { file: "songs/nani/eega.mp3", answer: "Eega", hint: "The hero is reincarnated as a housefly to seek revenge." },
            { file: "songs/nani/bhalebhale.mp3", answer: "Bhale Bhale Magadivoy", hint: "A romantic comedy about a man with memory loss." },
            { file: "songs/nani/ashtachamma.mp3", answer: "Ashta Chamma", hint: "The hero's debut film, a romantic comedy based on Oscar Wilde's 'The Importance of Being Earnest'." },
            { file: "songs/nani/shyam.mp3", answer: "Shyam Singha Roy", hint: "A film director discovers his connection to a past life." },
            { file: "songs/nani/mca.mp3", answer: "MCA", hint: "The hero has to protect his sister-in-law from a gangster." },
            { file: "songs/nani/gangleader.mp3", answer: "Gang Leader", hint: "A crime writer teams up with a group of women to plot revenge." },
            { file: "songs/nani/ninnukori.mp3", answer: "Ninnu Kori", hint: "A complex love triangle involving a man, a woman, and her husband." },
            { file: "songs/nani/hinanna.mp3", answer: "Hi Nanna", hint: "A heartwarming story about a single father and his daughter." }
        ]
    },
    "Jr. NTR": {
        image: 'photos/ntr.jpeg',
        songs: [
            { file: "songs/jrntr/aravindasametha.mp3", answer: "Aravinda Sametha", hint: "A faction-based drama directed by Trivikram Srinivas." },
            { file: "songs/jrntr/janathagarage.mp3", answer: "Janatha Garage", hint: "An environmentalist joins forces with a local mechanic." },
            { file: "songs/jrntr/rrr.mp3", answer: "RRR", hint: "Plays the role of Komaram Bheem." },
            { file: "songs/jrntr/temper.mp3", answer: "Temper", hint: "A corrupt cop has a change of heart and takes on a powerful gangster." },
            { file: "songs/jrntr/nannakuprematho.mp3", answer: "Nannaku Prematho", hint: "A son plots to take down the businessman who cheated his father." },
            { file: "songs/jrntr/simhadri.mp3", answer: "Simhadri", hint: "An early blockbuster directed by S.S. Rajamouli." },
            { file: "songs/jrntr/yamadonga.mp3", answer: "Yamadonga", hint: "A thief argues with the god of death, Yama." },
            { file: "songs/jrntr/jailavakusa.mp3", answer: "Jai Lava Kusa", hint: "The hero plays a triple role with distinct personalities." },
            { file: "songs/jrntr/adurs.mp3", answer: "Adurs", hint: "The hero plays a dual role, a Brahmin priest and an undercover agent." },
            { file: "songs/jrntr/brindavanam.mp3", answer: "Brindavanam", hint: "A man pretends to be his friend's lover to help his family." }
        ]
    },
    "Pawan Kalyan": {
        image: 'photos/pk.jpeg',
        songs: [
            { file: "songs/pawankalyan/sardaargabbarsingh.mp3", answer: "Sardaar Gabbar Singh", hint: "A sequel where the maverick cop is transferred to the fictional town of Rattanpur." },
            { file: "songs/pawankalyan/gabbarsingh.mp3", answer: "Gabbar Singh", hint: "A remake of the Bollywood blockbuster Dabangg." },
            { file: "songs/pawankalyan/jalsa.mp3", answer: "Jalsa", hint: "Directed by Trivikram, a story about a man with a Naxalite past." },
            { file: "songs/pawankalyan/kushi.mp3", answer: "Kushi", hint: "A classic romantic film involving two egos in love." },
            { file: "songs/pawankalyan/thammudu.mp3", answer: "Thammudu", hint: "A remake of 'Jo Jeeta Wohi Sikandar'." },
            { file: "songs/pawankalyan/badri.mp3", answer: "Badri", hint: "Directed by Puri Jagannadh, a complex love story." },
            { file: "songs/pawankalyan/gopalagopala.mp3", answer: "Gopala Gopala", hint: "A comedy-drama about a man who meets Lord Krishna." },
            { file: "songs/pawankalyan/vakeelsaab.mp3", answer: "Vakeel Saab", hint: "A remake of the Hindi film 'Pink'." },
            { file: "songs/pawankalyan/gudumbashankar.mp3", answer: "Gudumbashankar", hint: "A small-time thief pretends to be a soft-spoken man to win over a police commissioner's daughter." },
            { file: "songs/pawankalyan/attarintikidaredi.mp3", answer: "Attarintiki Daredi", hint: "A grandson's mission to reunite his family." }
        ]
    },
    "Chiranjeevi": {
        image: 'photos/chiru.jpeg',
        songs: [
            { file: "songs/chiranjeevi/indra.mp3", answer: "Indra", hint: "A blockbuster faction film from the early 2000s." },
            { file: "songs/chiranjeevi/khaidino150.mp3", answer: "Khaidi No. 150", hint: "Marked the Megastar's comeback film." },
            { file: "songs/chiranjeevi/stalin.mp3", answer: "Stalin", hint: "An ex-army major starts a chain reaction of helping others to bring about social change." },
            { file: "songs/chiranjeevi/jagadekaveerudu.mp3", answer: "Jagadeka Veerudu Atiloka Sundari", hint: "A fantasy film co-starring Sridevi." },
            { file: "songs/chiranjeevi/godfather.mp3", answer: "Godfather", hint: "A mysterious man steps in to thwart the plans of a deceased political leader's greedy family." },
            { file: "songs/chiranjeevi/tagore.mp3", answer: "Tagore", hint: "A professor forms a vigilante group to fight corruption." },
            { file: "songs/chiranjeevi/shankardadambbs.mp3", answer: "Shankar Dada M.B.B.S.", hint: "A remake of 'Munna Bhai M.B.B.S.'" },
            { file: "songs/chiranjeevi/aacharya.mp3", answer: "Aacharya", hint: "A Naxalite enters a temple town to protect its resources and traditions." },
            { file: "songs/chiranjeevi/waltairveerayya.mp3", answer: "Waltair Veerayya", hint: "A recent film featuring Ravi Teja in a key role." },
            { file: "songs/chiranjeevi/snehamkosam.mp3", answer: "Sneham Kosam", hint: "A story of a deep friendship between a landlord's son and his loyal servant." }
        ]
    },
    "Nagarjuna": {
        image: 'photos/nag.jpeg',
        songs: [
            { file: "songs/nagarjuna/manmadhudu.mp3", answer: "Manmadhudu", hint: "A romantic comedy where the protagonist dislikes women." },
            { file: "songs/nagarjuna/oopiri.mp3", answer: "Oopiri", hint: "An adaptation of the French film 'The Intouchables'." },
            { file: "songs/nagarjuna/geethanjali.mp3", answer: "Geethanjali", hint: "A tragic romantic classic directed by Mani Ratnam." },
            { file: "songs/nagarjuna/shiva.mp3", answer: "Shiva", hint: "A trendsetting action film directed by Ram Gopal Varma." },
            { file: "songs/nagarjuna/annamayya.mp3", answer: "Annamayya", hint: "A devotional film where the hero plays a famous saint-composer." },
            { file: "songs/nagarjuna/santosham.mp3", answer: "Santosham", hint: "A family entertainer about a man trying to win back his love." },
            { file: "songs/nagarjuna/ninnepelladatha.mp3", answer: "Ninne Pelladatha", hint: "A family-friendly romantic blockbuster." },
            { file: "songs/nagarjuna/mass.mp3", answer: "Mass", hint: "An action film about a man avenging his friend's death." },
            { file: "songs/nagarjuna/soggadechinninayana.mp3", answer: "Soggade Chinni Nayana", hint: "The hero plays a dual role of father and son." },
            { file: "songs/nagarjuna/manam.mp3", answer: "Manam", hint: "A film featuring three generations of the Akkineni family." }
        ]
    },
    "Venkatesh": {
        image: 'photos/venky.jpeg',
        songs: [
            { file: "songs/venkatesh/f2.mp3", answer: "F2", hint: "A comedy about marital woes, also starring Varun Tej." },
            { file: "songs/venkatesh/f3.mp3", answer: "F3", hint: "A sequel to F2, where the protagonists' get into more trouble due to their greed for money." },
            { file: "songs/venkatesh/nuvvunaakunachav.mp3", answer: "Nuvvu Naaku Nachav", hint: "A classic romantic comedy known for its witty dialogues." },
            { file: "songs/venkatesh/guru.mp3", answer: "Guru", hint: "The hero plays a boxing coach." },
            { file: "songs/venkatesh/sankranthi.mp3", answer: "Sankranthi", hint: "A family drama centered around the festival of Sankranti." },
            { file: "songs/venkatesh/Deviputrudu.mp3", answer: "Deviputrudu", hint: "A fantasy adventure film involving a lost underwater city, Dwaraka." },
            { file: "songs/venkatesh/raja.mp3", answer: "Raja", hint: "A romantic drama where the hero is a small-time thief." },
            { file: "songs/venkatesh/malleswari.mp3", answer: "Malleswari", hint: "A romantic comedy co-starring Katrina Kaif." },
            { file: "songs/venkatesh/garshana.mp3", answer: "Gharshana", hint: "A remake of 'Kaakha Kaakha', where an encounter specialist is hunted by a vengeful gangster." },
            { file: "songs/venkatesh/Venkymama.mp3", answer: "Venky Mama", hint: "A story about the bond between an uncle and his nephew, also starring Naga Chaitanya." }
        ]
    },
    "Vijay Deverakonda": {
        image: 'photos/vijay.jpeg',
        songs: [
            { file: "songs/vijaydeverakonda/arjunreddy.mp3", answer: "Arjun Reddy", hint: "A controversial film about a surgeon with anger issues." },
            { file: "songs/vijaydeverakonda/geethagovindam.mp3", answer: "Geetha Govindam", hint: "A popular romantic comedy with Rashmika Mandanna." },
            { file: "songs/vijaydeverakonda/pellichoopulu.mp3", answer: "Pelli Choopulu", hint: "A romantic comedy centered around a food truck business." },
            { file: "songs/vijaydeverakonda/taxiwala.mp3", answer: "Taxiwala", hint: "A supernatural comedy thriller involving a haunted car." },
            { file: "songs/vijaydeverakonda/dearcomrade.mp3", answer: "Dear Comrade", hint: "An intense love story about a student leader." },
            { file: "songs/vijaydeverakonda/kushi.mp3", answer: "Kushi", hint: "A recent romantic film co-starring Samantha." },
            { file: "songs/vijaydeverakonda/liger.mp3", answer: "Liger", hint: "A sports action film where the hero is an MMA fighter." },
            { file: "songs/vijaydeverakonda/nota.mp3", answer: "NOTA", hint: "A political thriller where a young man becomes the Chief Minister." },
            { file: "songs/vijaydeverakonda/worldfamouslover.mp3", answer: "World Famous Lover", hint: "An anthology film exploring different love stories." },
            { file: "songs/vijaydeverakonda/familystar.mp3", answer: "Family Star", hint: "A family drama about a middle-class man." }
        ]
    },
    "Ravi Teja": {
        image: 'photos/raviteja.jpeg',
        songs: [
            { file: "songs/raviteja/discoraja.mp3", answer: "Disco Raja", hint: "A sci-fi action film where a man frozen for decades is brought back to life." },
            { file: "songs/raviteja/krack.mp3", answer: "Krack", hint: "A cop story that was a major hit during the pandemic." },
            { file: "songs/raviteja/vikramarkudu.mp3", answer: "Vikramarkudu", hint: "Directed by S.S. Rajamouli, hero in a dual role." },
            { file: "songs/raviteja/idiot.mp3", answer: "Idiot", hint: "A breakthrough film directed by Puri Jagannadh." },
            { file: "songs/raviteja/naaautograph.mp3", answer: "Naa Autograph", hint: "The hero recounts his past loves while traveling for his wedding invitation." },
            { file: "songs/raviteja/rajathegreat.mp3", answer: "Raja The Great", hint: "The hero is a blind but specially trained man." },
            { file: "songs/raviteja/bengaltiger.mp3", answer: "Bengal Tiger", hint: "A man who dreams of becoming a don." },
            { file: "songs/raviteja/balupu.mp3", answer: "Balupu", hint: "An action-comedy about a man with a violent past." },
            { file: "songs/raviteja/dhamaka.mp3", answer: "Dhamaka", hint: "A recent blockbuster featuring the hero in a dual role." },
            { file: "songs/raviteja/ammanannaotamilaammayi.mp3", answer: "Amma Nanna O Tamila Ammayi", hint: "A story about a kickboxer and his relationship with his parents." }
        ]
    },
    "Ram Pothineni": {
        image: 'photos/ram.jpeg',
        songs: [
            { file: "songs/rampothineni/ismartshankar.mp3", answer: "iSmart Shankar", hint: "A sci-fi action film directed by Puri Jagannadh." },
            { file: "songs/rampothineni/EndukantePremanta!.mp3", answer: "Endukante Premanta!", hint: "A love story involving two spirits who have escaped from their comatose bodies." },
            { file: "songs/rampothineni/devadasu.mp3", answer: "Devadasu", hint: "The hero's debut film, a love story between a rich boy from the US and a poor girl from a village." },
            { file: "songs/rampothineni/Hyper.mp3", answer: "Hyper", hint: "A young man is extremely attached to his government-officer father." },
            { file: "songs/rampothineni/nenusailaja.mp3", answer: "Nenu Sailaja", hint: "A romantic film about a DJ and a girl who rejects him." },
            { file: "songs/rampothineni/red.mp3", answer: "Red", hint: "The hero plays a dual role in this remake of 'Thadam'." },
            { file: "songs/rampothineni/pandagachesko.mp3", answer: "Pandaga Chesko", hint: "A millionaire returns to India to unite his family." },
            { file: "songs/rampothineni/hellogurupremakosame.mp3", answer: "Hello Guru Prema Kosame", hint: "A romantic comedy co-starring Anupama Parameswaran." },
            { file: "songs/rampothineni/vunnadhiokatezindagi.mp3", answer: "Vunnadhi Okate Zindagi", hint: "A story about friendship and love." },
            { file: "songs/rampothineni/skanda.mp3", answer: "Skanda", hint: "A recent high-voltage action entertainer." }
        ]
    },
    "Nithin": {
        image: 'photos/nithin.jpeg',
        songs: [
            { file: "songs/nithin/aa.mp3", answer: "A Aa", hint: "A family drama directed by Trivikram." },
            { file: "songs/nithin/bheeshma.mp3", answer: "Bheeshma", hint: "A romantic comedy centered around organic farming." },
            { file: "songs/nithin/jayam.mp3", answer: "Jayam", hint: "The hero's blockbuster debut film." },
            { file: "songs/nithin/sye.mp3", answer: "Sye", hint: "A film about college rugby directed by S.S. Rajamouli." },
            { file: "songs/nithin/ishq.mp3", answer: "Ishq", hint: "A successful comeback film, a romantic entertainer." },
            { file: "songs/nithin/gundejaarigallanthayyinde.mp3", answer: "Gunde Jaari Gallanthayyinde", hint: "A romantic comedy with a case of mistaken identity." },
            { file: "songs/nithin/dil.mp3", answer: "Dil", hint: "An early hit that earned him the nickname 'Dil'." },
            { file: "songs/nithin/maestro.mp3", answer: "Maestro", hint: "A remake of the Hindi film 'Andhadhun'." },
            { file: "songs/nithin/lie.mp3", answer: "LIE", hint: "A stylish spy thriller set in the USA." },
            { file: "songs/nithin/rangde.mp3", answer: "Rang De", hint: "A romantic drama about two childhood friends." }
        ]
    },
    "Varun Tej": {
        image: 'photos/varun.jpeg',
        songs: [
            { file: "songs/varuntej/fidaa.mp3", answer: "Fidaa", hint: "A love story between an NRI and a Telangana girl." },
            { file: "songs/varuntej/gaddalakondaganesh.mp3", answer: "Gaddalakonda Ganesh", hint: "He plays a menacing gangster in this remake." },
            { file: "songs/varuntej/tholiprema.mp3", answer: "Tholi Prema", hint: "A mature love story about a couple's journey over several years." },
            { file: "songs/varuntej/kanche.mp3", answer: "Kanche", hint: "A historical war drama set during World War II." },
            { file: "songs/varuntej/f3.mp3", answer: "F3", hint: "A comedy sequel about the frustrations of money." },
            { file: "songs/varuntej/ghani.mp3", answer: "Ghani", hint: "A sports drama where the hero is a boxer." },
            { file: "songs/varuntej/loafer.mp3", answer: "Loafer", hint: "Directed by Puri Jagannadh, a story about a mother and son." },
            { file: "songs/varuntej/antariksham.mp3", answer: "Antariksham 9000 KMPH", hint: "A science fiction adventure film set in space." },
            { file: "songs/varuntej/mister.mp3", answer: "Mister", hint: "A romantic triangle set in Spain and India." },
            { file: "songs/varuntej/operationvalentine.mp3", answer: "Operation Valentine", hint: "A patriotic film based on the Indian Air Force." }
        ]
    },
    "Naga Chaitanya": {
        image: 'photos/chey.jpeg',
        songs: [
            { file: "songs/nagachaitanya/majili.mp3", answer: "Majili", hint: "A poignant love story also starring Samantha." },
            { file: "songs/nagachaitanya/premam.mp3", answer: "Premam", hint: "A remake showing three stages of love." },
            { file: "songs/nagachaitanya/yemaayachesave.mp3", answer: "Ye Maaya Chesave", hint: "A classic romantic film directed by Gautham Menon." },
            { file: "songs/nagachaitanya/100percentlove.mp3", answer: "100% Love", hint: "A story about two competitive cousins in college." },
            { file: "songs/nagachaitanya/manan.mp3", answer: "Manam", hint: "Features three generations of the Akkineni family." },
            { file: "songs/nagachaitanya/lovestory.mp3", answer: "Love Story", hint: "A dance-based romantic drama directed by Sekhar Kammula." },
            { file: "songs/nagachaitanya/bangarraju.mp3", answer: "Bangarraju", hint: "A fantasy drama sequel also starring his father, Nagarjuna." },
            { file: "songs/nagachaitanya/savyasachi.mp3", answer: "Savyasachi", hint: "A film about a man whose left hand is controlled by his absorbed twin." },
            { file: "songs/nagachaitanya/rarandoivedukachudham.mp3", answer: "Rarandoi Veduka Chudham", hint: "A family entertainer about navigating love and family disputes during wedding celebrations." },
            { file: "songs/nagachaitanya/thandel.mp3", answer: "Thandel", hint: "Based on real events about a fisherman from Srikakulam captured by the Pakistani navy." }
        ]
    },
    "Siddharth": {
        image: 'photos/Siddharth.jpeg',
        songs: [
            { file: "songs/siddharth/bommarillu.mp3", answer: "Bommarillu", hint: "A classic film about a father-son relationship." },
            { file: "songs/siddharth/nuvvostanante.mp3", answer: "Nuvvostanante Nenoddantana", hint: "The hero must prove his love by farming." },
            { file: "songs/siddharth/boys.mp3", answer: "Boys", hint: "A coming-of-age film about a group of friends forming a band." },
            { file: "songs/siddharth/aata.mp3", answer: "Aata", hint: "A story about a film projectionist and a girl on the run." },
            { file: "songs/siddharth/ohmyfriend.mp3", answer: "Oh My Friend", hint: "Explores the fine line between friendship and love." },
            { file: "songs/siddharth/konchemishtam.mp3", answer: "Konchem Ishtam Konchem Kashtam", hint: "A love story hampered by family disapproval." },
            { file: "songs/siddharth/lovefailure.mp3", answer: "Love Failure", hint: "A romantic comedy that looks back at a failed relationship." },
            { file: "songs/siddharth/Indian2.mp3", answer: "Indian2", hint: "A horror film where a couple's new house is haunted." },
            { file: "songs/siddharth/chukkallo.mp3", answer: "Chukkallo Chandrudu", hint: "An NRI comes to a village to choose a bride." },
            { file: "songs/siddharth/oy.mp3", answer: "Oye!", hint: "A poignant love story about a man who fulfills a girl's wishes." }
        ]
    },
    "Sharwanand": {
        image: 'photos/sharwanand.jpeg',
        songs: [
            { file: "songs/sharwanand/mahanubhavudu.mp3", answer: "Mahanubhavudu", hint: "The protagonist has an extreme case of OCD." },
            { file: "songs/sharwanand/runrararun.mp3", answer: "Run Raja Run", hint: "A stylish romantic thriller that was a breakout hit." },
            { file: "songs/sharwanand/expressraja.mp3", answer: "Express Raja", hint: "A comedy of errors involving a man, a dog, and a diamond." },
            { file: "songs/sharwanand/sathamanambhavati.mp3", answer: "Sathamanam Bhavati", hint: "A national award-winning film about family values." },
            { file: "songs/sharwanand/jaanu.mp3", answer: "Jaanu", hint: "A remake of the Tamil classic '96'." },
            { file: "songs/sharwanand/Ranarangam.mp3", answer: "Ranarangam", hint: "A stylish action drama with a gripping storyline." },
            { file: "songs/sharwanand/mahasamudram.mp3", answer: "Maha Samudram", hint: "A multi-starrer action drama with a gripping storyline." },
            { file: "songs/sharwanand/okeokajeevitham.mp3", answer: "Oke Oka Jeevitham", hint: "A sci-fi film about traveling back in time to change the past." },
            { file: "songs/sharwanand/sreekaram.mp3", answer: "Sreekaram", hint: "A software engineer returns to his village to take up farming." },
            { file: "songs/sharwanand/padi.mp3", answer: "Padi Padi Leche Manasu", hint: "A love story set in Kolkata with a memory-loss twist." }
        ]
    },
    "Gopichand": {
        image: 'photos/gopi.jpeg',
        songs: [
            { file: "songs/gopichand/loukyam.mp3", answer: "Loukyam", hint: "A successful comedy entertainer where the hero is known for his wit." },
            { file: "songs/gopichand/gouthamnanda.mp3", answer: "Goutham Nanda", hint: "A billionaire swaps his life with a poor lookalike to understand its value." },
            { file: "songs/gopichand/golimaar.mp3", answer: "Golimaar", hint: "Based on the life of encounter specialist Daya Nayak, directed by Puri Jagannadh." },
            { file: "songs/gopichand/yagnam.mp3", answer: "Yagnam", hint: "The hero is a loyal henchman to a faction leader." },
            { file: "songs/gopichand/souryam.mp3", answer: "Souryam", hint: "A man pretends to be a coward to hide his past as a cop." },
            { file: "songs/gopichand/jil.mp3", answer: "Jil", hint: "A stylish action film where a fire officer takes on a don." },
            { file: "songs/gopichand/seetimaarr.mp3", answer: "Seetimaarr", hint: "A sports action film where he plays a Kabaddi coach." },
            { file: "songs/gopichand/ranam.mp3", answer: "Ranam", hint: "A love story set in a village with factional disputes." },
            { file: "songs/gopichand/Oxygen.mp3", answer: "Oxygen", hint: "An army officer in disguise seeks revenge on a corporate company for his family's demise." },
            { file: "songs/gopichand/chanakya.mp3", answer: "Chanakya", hint: "The hero plays an undercover RAW agent on a mission to capture a terrorist." }
        ]
    },
    "Akhil Akkineni": {
        image: 'photos/akhil.jpeg',
        songs: [
            { file: "songs/akhilakkineni/mosteligiblebachelor.mp3", answer: "Most Eligible Bachelor", hint: "A romantic comedy co-starring Pooja Hegde." },
            { file: "songs/akhilakkineni/hello.mp3", answer: "Hello!", hint: "An action-romance about finding a childhood soulmate." },
            { file: "songs/akhilakkineni/akhil.mp3", answer: "Akhil", hint: "The hero's debut film, a fantasy action adventure." },
            { file: "songs/akhilakkineni/mrmajnu.mp3", answer: "Mr. Majnu", hint: "A charming playboy tries to prove he can commit to a relationship." },
            { file: "songs/akhilakkineni/agent.mp3", answer: "Agent", hint: "A high-octane spy thriller." }
        ]
    },
    "Rajinikanth": {
        image: 'photos/rajni.jpeg',
        songs: [
            { file: "songs/rajinikanth/DARBAR.mp3", answer: "DARBAR", hint: "A sci-fi blockbuster where he plays a scientist and his android creation." },
            { file: "songs/rajinikanth/jailer.mp3", answer: "Jailer", hint: "A recent blockbuster where he plays a retired jailer." },
            { file: "songs/rajinikanth/baasha.mp3", answer: "Baasha", hint: "A classic film about an auto driver with a secret past as a don." },
            { file: "songs/rajinikanth/Coolie.mp3", answer: "Coolie", hint: "A commercial entertainer about a loyal servant and his master." },
            { file: "songs/rajinikanth/Narasimha.mp3", answer: "Narasimha", hint: "A story of family rivalry also starring Ramya Krishnan." },
            { file: "songs/rajinikanth/sivaji.mp3", answer: "Sivaji", hint: "Directed by Shankar, a film about fighting corruption with black money." },
            { file: "songs/rajinikanth/kabali.mp3", answer: "Kabali", hint: "The hero plays an aged gangster in Malaysia." },
            { file: "songs/rajinikanth/2point0.mp3", answer: "2.0", hint: "The sequel to Enthiran, featuring a villain obsessed with birds." },
            { file: "songs/rajinikanth/petta.mp3", answer: "Petta", hint: "A stylish action film where the hero works as a hostel warden." },
            { file: "songs/rajinikanth/chandramukhi.mp3", answer: "Chandramukhi", hint: "A horror-comedy remake about a haunted palace." }
        ]
    },
    "Vishwak Sen": {
        image: 'photos/viswak.jpeg',
        songs: [
            { file: "songs/vishwaksen/falaknumadas.mp3", answer: "Falaknuma Das", hint: "A remake set in Hyderabad's old city." },
            { file: "songs/vishwaksen/daskadhamki.mp3", answer: "Das Ka Dhamki", hint: "He plays a dual role in this action-comedy that he also directed." },
            { file: "songs/vishwaksen/hit.mp3", answer: "HIT: The First Case", hint: "Plays a police officer in the Homicide Intervention Team." },
            { file: "songs/vishwaksen/paagal.mp3", answer: "Paagal", hint: "A man proposes to every girl he meets in search of true love." },
            { file: "songs/vishwaksen/eenagaraniki.mp3", answer: "Ee Nagaraniki Emaindi", hint: "A buddy comedy about four friends who want to make a short film." },
            { file: "songs/vishwaksen/ashokavanamlo.mp3", answer: "Ashoka Vanamlo Arjuna Kalyanam", hint: "A quirky romantic drama about a delayed wedding." },
            { file: "songs/vishwaksen/gaami.mp3", answer: "Gaami", hint: "An Aghora's journey to the Himalayas to find a cure." },
            { file: "songs/vishwaksen/oridevuda.mp3", answer: "Ori Devuda", hint: "A remake of 'Oh My Kadavule', a fantasy romantic comedy." }
        ]
    },
    "Kiran Abbavaram": {
        image: 'photos/kiran.jpeg',
        songs: [
            { file: "songs/kiranabbavaram/srkalyanamandapam.mp3", answer: "SR Kalyanamandapam", hint: "A commercial entertainer centered around a family's cinema hall." },
            { file: "songs/kiranabbavaram/vinarobhagyamu.mp3", answer: "Vinaro Bhagyamu Vishnu Katha", hint: "A story about a man helping people through a 'number-neighbor' concept." },
            { file: "songs/kiranabbavaram/rajavaaruranigaaru.mp3", answer: "Raja Vaaru Rani Gaaru", hint: "A simple, nostalgic love story set in a village." },
            { file: "songs/kiranabbavaram/sammathame.mp3", answer: "Sammathame", hint: "A man who wants a traditional wife falls for a modern girl." },
            { file: "songs/kiranabbavaram/sebastian.mp3", answer: "Sebastian P.C. 524", hint: "The hero is a police constable with night blindness." },
            { file: "songs/kiranabbavaram/nenumeeku.mp3", answer: "Nenu Meeku Baaga Kavalsinavaadini", hint: "A cab driver helps a girl with a troubled past." },
            { file: "songs/kiranabbavaram/meter.mp3", answer: "Meter", hint: "An aspiring police officer's story." },
            { file: "songs/kiranabbavaram/rulesranjann.mp3", answer: "Rules Ranjann", hint: "A romantic comedy about a man who strictly follows rules." }
        ]
    },
    "Suriya": {
        image: 'photos/surya.jpeg',
        songs: [
            { file: "songs/suriya/sooraraipottru.mp3", answer: "Soorarai Pottru", hint: "An award-winning film about starting a low-cost airline." },
            { file: "songs/suriya/kaakhakaakha.mp3", answer: "Kaakha Kaakha", hint: "A classic Gautham Menon film where he plays an encounter specialist." },
            { file: "songs/suriya/ghajini.mp3", answer: "Ghajini", hint: "A man with short-term memory loss seeks revenge." },
            { file: "songs/suriya/singam.mp3", answer: "Singam", hint: "A popular franchise where he plays a righteous and fiery cop." },
            { file: "songs/suriya/vaaranamaayiram.mp3", answer: "Vaaranam Aayiram", hint: "A son recounts his life and relationship with his father." },
            { file: "songs/suriya/24.mp3", answer: "24", hint: "A sci-fi thriller involving a time-traveling watch." },
            { file: "songs/suriya/jaibhim.mp3", answer: "Jai Bhim", hint: "A lawyer fights for the rights of a tribal woman." },
            { file: "songs/suriya/ayan.mp3", answer: "Ayan", hint: "A story about a man involved in diamond smuggling." },
            { file: "songs/suriya/pithamagan.mp3", answer: "Pithamagan", hint: "A critically acclaimed film where he plays a cheerful conman." },
            { file: "songs/suriya/ngk.mp3", answer: "NGK", hint: "A man with a master's degree gets involved in politics." }
        ]
    },
    "Karthi": {
        image: 'photos/karthi.jpeg',
        songs: [
            { file: "songs/karthi/kaithi.mp3", answer: "Kaithi", hint: "An action thriller by Lokesh Kanagaraj that takes place over a single night." },
            { file: "songs/karthi/paruthiveeran.mp3", answer: "Paruthiveeran", hint: "His debut film, a rural drama for which he received critical acclaim." },
            { file: "songs/karthi/awaras.mp3", answer: "Aawara", hint: "A romantic road trip movie known for its chartbuster songs." },
            { file: "songs/karthi/oopiri.mp3", answer: "Oopiri", hint: "Plays the role of a caretaker for a quadriplegic billionaire." },
            { file: "songs/karthi/naaperusiva.mp3", answer: "Naa Peru Siva", hint: "A story of a common man taking on a local gangster." },
            { file: "songs/karthi/yuganikiokkadu.mp3", answer: "Yuganiki Okkadu", hint: "An adventure film about a search for a lost Chola prince." },
            { file: "songs/karthi/khakee.mp3", answer: "Khakee", hint: "A realistic cop drama based on true events." },
            { file: "songs/karthi/sardar.mp3", answer: "Sardar", hint: "A spy action thriller where he plays a dual role." },
            { file: "songs/karthi/ponniyinselvan.mp3", answer: "Ponniyin Selvan", hint: "A historical epic directed by Mani Ratnam where he plays Vallavaraiyan." },
            { file: "songs/karthi/sulthan.mp3", answer: "Sulthan", hint: "An action film where a man has to manage 100 goons." }
        ]
    },
    "Balakrishna": {
        image: 'photos/balakrishna.jpeg',
        songs: [
            { file: "songs/balakrishna/simha.mp3", answer: "Simha", hint: "A powerful comeback film directed by Boyapati Srinu." },
            { file: "songs/balakrishna/legend.mp3", answer: "Legend", hint: "Famous for its powerful dialogues and action sequences." },
            { file: "songs/balakrishna/narasimhanaidu.mp3", answer: "Narasimha Naidu", hint: "A blockbuster faction film from the early 2000s that won him a Nandi Award for Best Actor." },
            { file: "songs/balakrishna/samarasimhareddy.mp3", answer: "Samarasimha Reddy", hint: "A trendsetting faction film that became an industry hit." },
            { file: "songs/balakrishna/akhanda.mp3", answer: "Akhanda", hint: "A recent spiritual action-thriller featuring a dual role as an Aghora." },
            { file: "songs/balakrishna/aditya369.mp3", answer: "Aditya 369", hint: "A classic science-fiction film involving a time machine." },
            { file: "songs/balakrishna/bhairavadweepam.mp3", answer: "Bhairava Dweepam", hint: "A high-fantasy film where a prince fights magical forces to rescue a princess." },
            { file: "songs/balakrishna/gautamiputrasatakarni.mp3", answer: "Gautamiputra Satakarni", hint: "The actor's 100th film, a historical epic about a Satavahana ruler." },
            { file: "songs/balakrishna/muddulamavayya.mp3", answer: "Muddula Mavayya", hint: "A classic action-drama where a brother seeks revenge for his sister's death." },
            { file: "songs/balakrishna/lorrydriver.mp3", answer: "Lorry Driver", hint: "An action film where the hero stands up for the rights of fellow drivers." }
        ]
    },
    "Dhanush": {
        image: 'photos/dhanush.jpeg',
        songs: [
            { file: "songs/dhanush/raghuvaranbtech.mp3", answer: "Raghuvaran B.Tech", hint: "The story of an unemployed civil engineering graduate." },
            { file: "songs/dhanush/sir.mp3", answer: "SIR", hint: "A bilingual film where he plays a junior lecturer fighting for education." },
            { file: "songs/dhanush/karnan.mp3", answer: "Karnan", hint: "A raw drama about a man fighting for the rights of his oppressed village." },
            { file: "songs/dhanush/maari.mp3", answer: "Maari", hint: "Known for the catchphrase 'Senjiruven'." },
            { file: "songs/dhanush/asuran.mp3", answer: "Asuran", hint: "A critically acclaimed revenge drama directed by Vetrimaaran." }
        ]
    },
    "Vijay": {
        image: 'photos/vijaytala.jpeg',
        songs: [
            { file: "songs/vijay/master.mp3", answer: "Master", hint: "A professor is sent to a juvenile correctional facility." },
            { file: "songs/vijay/leo.mp3", answer: "Leo", hint: "A cafe owner with a violent past is hunted by a drug cartel." },
            { file: "songs/vijay/bigil.mp3", answer: "Bigil", hint: "A football player turned gangster coaches a women's football team." },
            { file: "songs/vijay/mersal.mp3", answer: "Mersal", hint: "He plays a triple role, including a doctor and a magician." },
            { file: "songs/vijay/thuppakki.mp3", answer: "Thuppakki", hint: "An army captain on leave hunts down a terrorist network in Mumbai." }
        ]
    },
    "Kamal Haasan": {
        image: 'photos/kamal.jpeg',
        songs: [
            { file: "songs/kamalhaasan/vikram.mp3", answer: "Vikram", hint: "A blockbuster action film that's part of the Lokesh Kanagaraj Cinematic Universe." },
            { file: "songs/kamalhaasan/dasavatharam.mp3", answer: "Dasavatharam", hint: "A film where he plays ten distinct roles." },
            { file: "songs/kamalhaasan/bharateeyudu.mp3", answer: "Bharateeyudu", hint: "An ex-freedom fighter targets corrupt officials." },
            { file: "songs/kamalhaasan/nayakudu.mp3", answer: "Nayakudu", hint: "A Mani Ratnam classic about a man who becomes a powerful Mumbai don." },
            { file: "songs/kamalhaasan/panchathanthiram.mp3", answer: "Panchathanthiram", hint: "A classic comedy of errors involving four friends." }
        ]
    },
    "Adivi Sesh": {
        image: 'photos/adivisesh.jpeg',
        songs: [
            { file: "songs/adivisesh/major.mp3", answer: "Major", hint: "A biographical film based on the life of Major Sandeep Unnikrishnan." },
            { file: "songs/adivisesh/goodachari.mp3", answer: "Goodachari", hint: "A spy thriller where the protagonist is framed for a crime." },
            { file: "songs/adivisesh/evaru.mp3", answer: "Evaru", hint: "A remake of 'The Invisible Guest', a gripping crime thriller." },
            { file: "songs/adivisesh/kshanam.mp3", answer: "Kshanam", hint: "A man searches for his ex-girlfriend's missing daughter." },
            { file: "songs/adivisesh/hit2.mp3", answer: "HIT: The Second Case", hint: "A cool-headed cop hunts down a brutal serial killer." }
        ]
    },
    "Rana Daggubati": {
        image: 'photos/rana.jpeg',
        songs: [
            { file: "songs/rana/baahubali.mp3", answer: "Baahubali", hint: "Plays the iconic antagonist Bhallaladeva in this epic." },
            { file: "songs/rana/leader.mp3", answer: "Leader", hint: "His debut film, a political drama directed by Sekhar Kammula." },
            { file: "songs/rana/ghazi.mp3", answer: "Ghazi", hint: "India's first underwater war film, based on the sinking of PNS Ghazi." },
            { file: "songs/rana/nenerajunenemantri.mp3", answer: "Nene Raju Nene Mantri", hint: "A political thriller where his character's name is Jogendra." },
            { file: "songs/rana/bheemlanayak.mp3", answer: "Bheemla Nayak", hint: "Co-starred with Pawan Kalyan in this remake of 'Ayyappanum Koshiyum'." },
            { file: "songs/rana/kvj.mp3", answer: "Krishnam Vande Jagadgurum", hint: "An action-drama where he plays a theatre artist from Surabhi." }
        ]
    },
    "Suhas": {
        image: 'photos/suhas.jpeg',
        songs: [
            { file: "songs/suhas/colourphoto.mp3", answer: "Colour Photo", hint: "A period romantic drama that won the National Film Award for Best Feature Film in Telugu." },
            { file: "songs/suhas/writerpadmabhushan.mp3", answer: "Writer Padmabhushan", hint: "A comedy-drama about a struggling writer from Vijayawada." },
            { file: "songs/suhas/ambajipeta.mp3", answer: "Ambajipeta Marriage Band", hint: "A recent blockbuster where he plays a barber and a band member." },
            { file: "songs/suhas/hit2.mp3", answer: "HIT: The Second Case", hint: "He played an unexpected and chilling antagonist role in this crime thriller." },
            { file: "songs/suhas/JanakaAitheGanaka.mp3", answer: "Janaka Aithe Ganaka", hint: "A dark thriller where he and his brother have sinister intentions." },
            { file: "songs/suhas/prasannavadanam.mp3", answer: "Prasanna Vadanam", hint: "A recent thriller where the protagonist suffers from face blindness." }
        ]
    },
    "Manchu Manoj": {
        image: 'photos/manoj.jpg',
        songs: [
            { file: "songs/manchumanoj/donga_dongadi.mp3", answer: "Donga Dongadi", hint: "His debut film as a lead, a remake of the Tamil film 'Thiruda Thirudi'." },
            { file: "songs/manchumanoj/bindaas.mp3", answer: "Bindaas", hint: "An action-comedy where the hero must live in his rival's house for a challenge." },
            { file: "songs/manchumanoj/potugadu.mp3", answer: "Potugadu", hint: "A comedy-entertainer known for its chartbuster songs, a remake of a Kannada film." },
            { file: "songs/manchumanoj/current_theega.mp3", answer: "Current Theega", hint: "An action-romance film also featuring Sunny Leone in a prominent role." },
            { file: "songs/manchumanoj/nenu_meeku_telusa.mp3", answer: "Nenu Meeku Telusa?", hint: "A stylish thriller about a man who wakes up with no memory of his past." },
            { file: "songs/manchumanoj/prayanam.mp3", answer: "Prayanam", hint: "A unique romantic film that takes place entirely within an airport." },
            { file: "songs/manchumanoj/mr_nookayya.mp3", answer: "Mr. Nookayya", hint: "The hero, known as 'Nokia', gets entangled in a bank robbery and a kidnapping." },
            { file: "songs/manchumanoj/uu_kodathara_ulikki_padathara.mp3", answer: "Uu Kodathara? Ulikki Padathara?", hint: "A fantasy action film set in the Gandharva Mahal, also featuring Balakrishna." }
        ]
    },
    "Manchu Vishnu": {
        image: 'photos/vishnu.jpg',
        songs: [
            { file: "songs/manchuvishnu/dhee.mp3", answer: "Dhee", hint: "A blockbuster action-comedy where he challenges a gangster to win his sister's love." },
            { file: "songs/manchuvishnu/denikaina_ready.mp3", answer: "Denikaina Ready", hint: "A comedy entertainer full of mistaken identities, centered around a family feud." },
            { file: "songs/manchuvishnu/doosukeltha.mp3", answer: "Doosukeltha", hint: "An action-comedy where he protects a girl who is a key witness." },
            { file: "songs/manchuvishnu/eedo_rakam_aado_rakam.mp3", answer: "Eedo Rakam Aado Rakam", hint: "A comedy of errors where two friends get entangled in a web of lies." },
            { file: "songs/manchuvishnu/pandavulu_pandavulu_tummeda.mp3", answer: "Pandavulu Pandavulu Tummeda", hint: "A multi-starrer featuring the Manchu family in a story of love and reunion." },
            { file: "songs/manchuvishnu/mosagallu.mp3", answer: "Mosagallu", hint: "Based on the true story of one of the biggest IT scams in the world." },
            { file: "songs/manchuvishnu/ginna.mp3", answer: "Ginna", hint: "A recent horror-comedy entertainer set in a small town." }
        ]
    },
    "Raj Tarun": {
        image: 'photos/rajtharun.jpg',
        songs: [
            { file: "songs/rajtharun/uyyala_jampala.mp3", answer: "Uyyala Jampala", hint: "His debut hit, a charming love story between childhood sweethearts in a village." },
            { file: "songs/rajtharun/cinema_choopistha_mava.mp3", answer: "Cinema Choopistha Mava", hint: "The hero takes on a challenge to impress his lover's strict father." },
            { file: "songs/rajtharun/kumari_21f.mp3", answer: "Kumari 21F", hint: "A bold romantic drama about a young couple dealing with trust issues, story by Sukumar." },
            { file: "songs/rajtharun/eedo_rakam_aado_rakam.mp3", answer: "Eedo Rakam Aado Rakam", hint: "Co-starred with Manchu Vishnu in this hilarious comedy of errors." },
            { file: "songs/rajtharun/andhhagadu.mp3", answer: "Andhhagadu", hint: "The hero, who pretends to be blind, gets entangled with a gangster." },
            { file: "songs/rajtharun/lover.mp3", answer: "Lover", hint: "A romantic drama where the hero is a custom bike builder." },
            { file: "songs/rajtharun/orey_bujjiga.mp3", answer: "Orey Bujjiga", hint: "A comedy of errors where a man and a woman, mistaken to have eloped, meet on the run." },
            { file: "songs/rajtharun/anubhavinchu_raja.mp3", answer: "Anubhavinchu Raja", hint: "A comedy about a happy-go-lucky man who loves his village and cockfights." }
        ]
    },

};

