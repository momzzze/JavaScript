const storage=require('./storage');



storage.put('name','Nikola');
storage.put('familyName','Ninov');
storage.put('age','25');
storage.put('hobbies',{
    games:[
        'League Of Legends',
        'World of Warcraft',
        'Fifa 18',
        'NBA 2k18'
    ],
    sport:[
        'basketball',
        'football',
        'fitness'
    ],
    movies:[
        'interstellar',
        'Word of the rings',
        'The Hobbit'
    ]
});
//console.log(storage.get('age'));
storage.save();
storage.clear();
storage.load();
storage.get('age');
//storage.put('xaxa','xaxaxaxaaxaxxaax')
