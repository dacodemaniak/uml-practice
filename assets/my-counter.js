/**
 * @name my-counter
 * @author C'est moi qui l'ai fait ! avec mes petites mains
 * @version 1.0.0
 * @description Gère un composant de type compteur
 */

 // Gestionnaire d'événement sur le bouton + (id=increase-qty)
 $('#increase-qty').on(
     'click',
     function(event) {
        // Déjà, je vais essayer de lire la valeur du champ de saisie (input)
        const inputField = $('#quantity');

        // Récupérer la valeur max autorisée : data-max=n
        const maxVal = parseInt(inputField.data('max'));

        // Introduire la contrainte fonctionnelle : newVal < maxVal... sinon... NOOP
        if (parseInt(inputField.val()) < maxVal) {
            // Incrémenter la valeur de 1
            let newVal = parseInt(inputField.val()) + 1;

            // Afficher dans l'interface la nouvelle valeur
            inputField.val(newVal);

            // TODO : Ne pas oublier d'activer le bouton -
        }
        // TODO : Afficher un message si maximum atteint
        // TODO : Désactiver le bouton + si maximum atteint

     }
 );

 const counter = function(value, increase = true) {
    return increase ? parseInt(value) + 1 : parseInt(value) - 1;
 }