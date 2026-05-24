const express = require('express');
const app = express();
const EXPRESS_PORT = 8000;

const animals = [
    {id: 1, name: 'Vogels'},
    {id: 2, name: 'Vossen'},
    {id: 3, name: 'Hazen'},
    {id: 4, name: 'Kikkers'},
    {id: 5, name: 'Padden'},
    {id: 6, name: 'Koeien'},
    {id: 7, name: 'Paarden'},
    {id: 8, name: 'Schapen'},
    {id: 9, name: 'Konijnen'},
];

const places = [
    {id: 1, name: 'Oostgaarde-Noord'},
    {id: 2, name: 'Oostgaarde-Zuid'},
    {id: 3, name: 's-Gravenweg'},
    {id: 4, name: 'Schollebos'},
    {id: 5, name: 'Hitland'},
];
const markers = [
    {id: 1, animalId: 1, latitude: 51.94464, longitude: 4.60933, placeId: 5},
    {id: 2, animalId: 1, latitude: 51.94061, longitude: 4.59216, placeId: 4},
    {id: 3, animalId: 2, latitude: 51.94160, longitude: 4.59582, placeId: 3},
    {id: 4, animalId: 2, latitude: 51.94472, longitude: 4.58577, placeId: 4},
    {id: 5, animalId: 2, latitude: 51.94407, longitude: 4.61726, placeId: 5},
    {id: 6, animalId: 3, latitude: 51.93963, longitude: 4.61483, placeId: 5},
    {id: 7, animalId: 3, latitude: 51.93886, longitude: 4.59614, placeId: 1},
    {id: 8, animalId: 4, latitude: 51.94444, longitude: 4.60463, placeId: 5},
    {id: 9, animalId: 5, latitude: 51.94045, longitude: 4.59673, placeId: 1},
    {id: 10, animalId: 6, latitude: 51.93949, longitude: 4.59291, placeId: 3},
    {id: 11, animalId: 7, latitude: 51.93900, longitude: 4.59214, placeId: 3},
    {id: 12, animalId: 8, latitude: 51.93969, longitude: 4.59343, placeId: 3},
    {id: 13, animalId: 9, latitude: 51.92756, longitude: 4.60684, placeId: 2},
]
app.get('/markers', (req, res) => {
    const result = markers.map(marker => ({
        ...marker,
        animalName: animals.find(a => a.id === marker.animalId).name,
        placeName: places.find(a => a.id === marker.placeId).name
    }));
    res.json(result);
});

app.listen(EXPRESS_PORT, () => {
    console.log(`API draait op http://localhost:${EXPRESS_PORT}`);
});