import { CompanyModel } from './models/company.model';
import { ToHtml } from './utils/to-html';

/**
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
 */

 // Créer une instance de la classe CompanyModel
 const aelion: CompanyModel = new CompanyModel();
 aelion.setName('Aélion');
 aelion.setAddress('95 chemin de Gabardie');
 aelion.setZipCode('31000');
 aelion.setCity('Toulouse');

 // Création d'une autre instance de classe
 const cap: CompanyModel = new CompanyModel();
 cap.setName('Cap\'Gemini');
 cap.setAddress('rue de la Mort qui Tue');
 cap.setZipCode('31600');
 cap.setCity('Blagnac');

 // Pour contrôle
 console.log('Objet aelion : ' + aelion.getName() + ' ' + aelion.getAddress());
 console.log('Objet cap : ' + cap.getName() + ' ' + cap.getAddress());

 // Envoyer les informations vers la page web
 const toHtml = new ToHtml();
 toHtml.toPage(aelion);
 toHtml.toPage(cap);