# CustomModal

`CustomModal` est un composant React simple et réutilisable pour afficher des fenêtres modales dans vos applications. Il permet d'afficher du contenu dans une fenêtre modale superposée à l'application principale. Ce composant est conçu pour être léger et facile à intégrer, tout en offrant une personnalisation basique pour le style et le comportement de la modal.

## Table des matières

- [Installation](#installation)
- [Usage](#usage)
- [Propriétés](#propriétés)
- [Styles](#styles)
- [Exemple](#exemple)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Installation

Pour utiliser le composant `CustomModal`, vous devez d'abord l'installer via npm ou yarn, ou l'intégrer directement dans votre projet.

### Via npm

```bash
npm install custom-modal
```

### Via yarn
yarn add custom-modal

### Usage

```import React, { useState } from 'react';
import CustomModal from 'custom-modal';
import './App.css';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="app">
            <button onClick={openModal}>Open Modal</button>
            <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
                <h1>Hello, I am a Modal!</h1>
                <p>This is some content inside the modal.</p>
            </CustomModal>
        </div>
    );
};

export default App;
```

### Propriétés
Le composant CustomModal accepte les propriétés suivantes :

isOpen (boolean): Indique si la modal doit être affichée ou non. Lorsque cette propriété est false, la modal n'est pas rendue.
onRequestClose (function): Fonction de rappel appelée lorsque l'utilisateur demande de fermer la modal, généralement en cliquant sur le bouton de fermeture.
children (ReactNode): Contenu à afficher à l'intérieur de la modal. Cela peut être n'importe quel élément React que vous souhaitez rendre à l'intérieur de la modal.


### Styles
Le composant CustomModal utilise un fichier CSS pour le style. Assurez-vous d'inclure le fichier CSS dans votre projet pour appliquer les styles de la modal.

Exemple de fichier CSS (CustomModal.css)
```
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
}

.modal-close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: transparent;
    font-size: 16px;
    cursor: pointer;
}
```

### Contribuer
Si vous souhaitez contribuer au projet, veuillez suivre les étapes suivantes :

Forker le dépôt.
Créer une nouvelle branche (git checkout -b feature/your-feature).
Commencer à travailler sur votre fonctionnalité ou correction de bug.
Soumettre une pull request avec une description détaillée de vos changements.

### Instructions pour Upload sur GitHub

1. **Créer le fichier** :
   - Ouvrez un éditeur de texte comme Notepad, Visual Studio Code, ou tout autre éditeur Markdown.
   - Collez le contenu ci-dessus dans un nouveau fichier.
   - Enregistrez le fichier sous le nom `README.md`.

2. **Ajouter au Dépôt GitHub** :
   - Si vous avez déjà un dépôt GitHub, vous pouvez simplement ajouter ce fichier à votre dépôt.
   - Utilisez les commandes Git suivantes pour ajouter et commettre le fichier :
     ```bash
     git add README.md
     git commit -m "Add README for CustomModal component"
     git push origin main
     ```
   - Assurez-vous que vous êtes dans le répertoire du dépôt local lorsque vous exécutez ces commandes.

Avec ce README, vous fournirez une documentation claire et utile pour les utilisateurs de votre composant `CustomModal`. Assurez-vous de mettre à jour le chemin de l'image d'exemple et d'ajuster les instructions en fonction de vos besoins spécifiques.
