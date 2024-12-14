// Liste des matières
const subjects = [
    { id: 'math', name: 'Mathématiques', coef: 6 },
    { id: 'phy', name: 'Physique', coef: 4 },
    { id: 'svt', name: 'SVT', coef: 2 },
    { id: 'lit', name: 'Littérature', coef: 2 },
    { id: 'fr', name: 'Langue Française', coef: 2 },
    { id: 'eng', name: 'Anglais', coef: 3 },
    { id: 'chem', name: 'Chimie', coef: 2 },
    { id: 'philo', name: 'Philosophie', coef: 1 },
    { id: 'eps', name: 'Éducation Physique et Sportive', coef: 1 },
    { id: 'hg', name: 'Histoire-Géographie', coef: 4 },
    { id: 'ecm', name: 'Éducation à la Citoyenneté et Morale', coef: 1 },
    { id: 'it', name: 'Informatique', coef: 2 }
];

// Calcul de la moyenne pondérée
document.getElementById('calculateBtn').addEventListener('click', function () {
    let totalPoints = 0;
    let totalCoef = 0;

    subjects.forEach(subject => {
        let s1 = parseFloat(document.getElementById(`${subject.id}S1`).value) || 0;
        let s2 = parseFloat(document.getElementById(`${subject.id}S2`).value) || 0;
        let coef = parseFloat(document.getElementById(`${subject.id}Coef`).value) || 0;

        let moyenne = (s1 + s2) / 2;
        totalPoints += moyenne * coef;
        totalCoef += coef;
    });

    let moyennePonderee = totalPoints / totalCoef;
    document.getElementById('result').innerHTML =
        `Moyenne Pondérée : <span>${moyennePonderee.toFixed(2)}</span>`;
});
