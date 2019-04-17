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
        _makeMessageDisapear();

        // Récupérer la valeur max autorisée : data-max=n
        const maxVal = parseInt($(this).parent().prev('input').data('max'));

        // Introduire la contrainte fonctionnelle : newVal < maxVal... sinon... NOOP
        if (_getValue() < maxVal) {
            // Incrémenter la valeur de 1
            let newVal = counter(_getValue());

            // Afficher dans l'interface la nouvelle valeur
            $(this).parent().prev('input').val(newVal);

            // Enlever l'attribut disabled du bouton -
            _manageBtn($('#decrease-qty'), false);

            // La valeur est-elle égale au maximum ?
            if (newVal === maxVal) {
                _manageBtn($(this));

                // Affichage du message
                _manageMessage('Vous avez atteint la limite maximum');
            }
        }
     }
 );

 // Gestionnaire d'événement sur le bouton + (id=increase-qty)
 $('#decrease-qty').on(
    'click',
    function(event) {
        _makeMessageDisapear();

       // Le minimum autorisé est par défaut = à 1
       const minVal = 1;

       // Introduire la contrainte fonctionnelle : newVal < maxVal... sinon... NOOP
       if (_getValue() > minVal) {
           // Décrémenter la valeur de 1
           let newVal = counter(_getValue(), false);

           // Afficher dans l'interface la nouvelle valeur
           $(this).parent().next('input').val(newVal);

           // Enlever l'attribut disabled du bouton +
           _manageBtn($('#increase-qty'), false);

           // La valeur est-elle égale au minimum ?
           if (newVal === minVal) {
               _manageBtn($(this));

               // Affichage du message
               _manageMessage('Vous avez atteint la limite minimum');
           }
       }
    }
);

// Intercepte l'événement "close" de l'alerte Bootstrap
//  et n'exécute pas l'action par défaut... mais ma propre méthode
$('[role="alert"]').on(
    'close.bs.alert',
    function(event) {
        event.preventDefault();
        _makeMessageDisapear();
    }
);

const _getValue = function() {
    return parseInt($('#quantity').val());
}

const counter = function(value, increase = true) {
    return increase ? parseInt(value) + 1 : parseInt(value) - 1;
}

 const _manageBtn = function(button, doDisable = true) {
     if (doDisable) {
         button.attr('disabled', 'disabled');
     } else {
         button.removeAttr('disabled');
     }
 }

 const _manageMessage = function(message) {
    const alert = $('[role="alert"]');
    alert.children('span.message').html(message);

    alert
        .removeClass('no-display')
        .addClass('animated')
        .addClass('bounceIn');
 }

 const _makeMessageDisapear = function() {
    const alert = $('[role="alert"]');
    if (!alert.hasClass('no-display')) {
        alert.removeClass('bounceIn')
         .addClass('bounceOut');

        setTimeout(
            () => { 
                alert
                    .addClass('no-display')
                    .removeClass('animated')
                    .removeClass('bounceOut')
            },
            1500
        );
    }

 }

