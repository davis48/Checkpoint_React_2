Instructions

Créez un projet à l'aide de create-react-app.

Créez un fichier appelé players.js, qui contiendra un tableau d'objets JSON contenant les détails des joueurs (au moins quatre joueurs).
Faites preuve de créativité dans votre choix de joueurs ! Vous pouvez choisir qui vous voulez !
Les attributs pour chaque joueur sont le nom, l'équipe, la nationalité, le numéro de maillot, l'âge et une URL d'image pour le joueur.
Créez un fichier appelé Player.js qui contient le composant joueur.
Le composant Player doit rendre une carte react-bootstrap. La carte affichera tous les attributs pour chaque joueur défini dans players.js.
Déstructurez tous les attributs pour le composant Player.
Créez un composant appelé PlayersList.js
Importez à l'intérieur de PlayerList.js, le composant Player et les données des joueurs à partir de players.js.
Affichez tous les joueurs à l'intérieur de PlayerList.js, en parcourant tous les éléments du tableau de joueurs (consultez la fonction .map).
Lors du parcours des joueurs, transmettez les props au composant Player (recherchez l'opérateur de propagation si vous souhaitez l'utiliser).
N'oubliez pas de définir des props par défaut pour chaque attribut (n'hésitez pas à définir des props par défaut).
Utilisez un style inline pour le composant Player.
Importez PlayerList.js dans App.js (composant racine) et affichez PlayerList.
