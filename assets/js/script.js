let itemList = [
    [
        'Numb/Encore',
        'Black Album',
        'Jay-Z',
        '2004',
        '1.jpg'
    ],
    [
        'All The Way UP',
        'Plata O Plomo',
        'Fat Joe',
        '2016',
        '2.jpg'
    ],
    [
        'Me & My Girlsfriend',
        ' The Don Killuminati: The 7 Day Theory',
        '2 Pac',
        '1996',
        '3.jpg'
    ],
    [
        'Runnin (Dying To Live)',
        'Resurrection ',
        '2 Pac',
        '2003',
        '4.jpg'
    ],
    [
        'Break Ya Neck',
        'Genesis',
        'Busta Rhymes',
        '2001',
        '5.jpg'
    ],
    [
        'Easy Skanking',
        'Kaya',
        'Bob Marley',
        '1978',
        '6.jpg'
    ],
    [
        'A Milli',
        'The carter IV',
        'Lil Wayne',
        '2011',
        '7.jpg'
    ]
];
// Je crée une varaible correspondant au noeud <tbody>
let tbody = document.querySelector('tbody');
// Je créé une variable qui correspond au chemin vers les assets
let path = './assets/images/'

for (playlistItem of playlist) {
    // Je crée un jeu de variable plus lisble
    let title = playlistItem[0];
    let album = playlistItem[1];
    let artist = playlistItem[2];
    let year = playlistItem[3];
    let cover = playlistItem[4];
    // Je créé un noeud de type <tr> et je l'assigne à une variable
    let playlistItemRow = document.createElement('tr');
    // j'assigne un contenu html à playlisItemRow (mon <tr>)
    playlistItemRow.innerHTML = `
    <td>${title}</td>
    <td>${album}</td>
    <td>${artist}</td>
    <td>${year}</td>
    <td><img src="${path + cover}" alt="${album}"></td>
    <td><button class="js-btn-delete btn btn-danger">X</button></td>`;
    // J'ajoute plylistItemRow au <tbody>
    tbody.appendChild(playlistItemRow);
}

// On récupère la collection de tous les noeuds ayant la class .js-btn-delete
btnDeleteList = document.querySelectorAll('.js-btn-delete');
// Pour chaque bouton
for (btnDelete of btnDeleteList) {
    btnDelete.onclick = (e) => {
        // Grace à l'objet événement (e), je peux repérer le bouton cliqué (target). Ensuite, je vais chercher le plus proche ancêtre <tr> avec closest et je le supprime (remove).
        e.target.closest('tr').remove()
    };
}