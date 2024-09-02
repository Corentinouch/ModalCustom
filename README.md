# custom-modal-library

CustomModal est un composant React simple et réutilisable pour afficher des fenêtres modales dans vos applications. Il permet d'afficher du contenu dans une fenêtre modale superposée à l'application principale. Ce composant est conçu pour être léger et facile à intégrer, tout en offrant une personnalisation basique pour le style et le comportement de la modal.

## Table des matières

- [Installation](#installation)
- [Usage](#usage)
- [Propriétés](#propriétés)
- [Styles](#styles)
- [Exemple](#exemple)

### Installation

Run the following command to install the library:

```npm install custom-modal-library-corentin```

### Usage

```javascript
import { CustomModal } from 'custom-modal-library';

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <CustomModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <h1>Modal Content</h1>
      </CustomModal>
    </>
  );
};
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
### Exemple
```
            <div className="form_footer">
                <button onClick={saveEmployee} className="btn-save">Save</button>
                <CustomModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <h2>Employee Created!</h2>
                </CustomModal>
            </div>
            ```