import { CompanyModel } from './models/company.model';
import { ToHtml } from './utils/to-html';

import * as $ from 'jquery'
import { HomeModule } from './modules/home/home-module';
import { CompanyRepository } from './models/company-repository';
import { NameStrategy } from './models/strategies/name-strategy';
import { NameAndZipStrategy } from './models/strategies/nameandzip-strategy';
import { AllStrategy } from './models/strategies/all-strategy';
import { Carre } from './geometrie/carre';
import { Cercle } from './geometrie/cercle';
import { Triangle } from './geometrie/triangle';

/**
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
 */

 // Instancier un "repository" de CompanyModel
 const companyRepository: CompanyRepository = new CompanyRepository();

 // Créer une instance de la classe CompanyModel
 const aelion: CompanyModel = new CompanyModel(1);
 aelion.setStrategy(new AllStrategy());
 aelion.setName('Aélion');
 aelion.setAddress('95 chemin de Gabardie');
 aelion.setZipCode('31000');
 aelion.setCity('Toulouse');

 // Ajoute aelion dans le repo...
 companyRepository.add(aelion);

 // Création d'une autre instance de classe
 const cap: CompanyModel = new CompanyModel(2);
 cap.setStrategy(new AllStrategy());
 cap.setName('Cap\'Gemini');
 cap.setAddress('rue de la Mort qui Tue');
 cap.setZipCode('31600');
 cap.setCity('Blagnac');

 // Ajoute cap dans le repo
 companyRepository.add(cap);

 // Essaye de changer la valeur de l'ID d'Aélion : impossible, contrôlé par le setId()
 aelion.setId(1);

 companyRepository.add(aelion);

 // Pour contrôle
console.log('Nombre de sociétés : ' + companyRepository.getSize());

 // Envoyer les informations vers la page web
 const toHtml = new ToHtml();

 toHtml.appendToPage(aelion.useOutputStrategy());
 toHtml.appendToPage(cap.useOutputStrategy());

 // Illustration des classes, héritages et interfaces
 const grandCarre: Carre = new Carre();
 grandCarre.dessiner();

 const petitCarre: Carre = new Carre();
 // Demande à Robert de recalibrer la machine à 50
 petitCarre.setSideLength(50);
 petitCarre.dessiner();

 const jeSuisUnCercle: Carre = new Carre();
 // Demande à Robert de refaire des carrés à 100
 jeSuisUnCercle.setSideLength(100);
 jeSuisUnCercle.dessiner();

 // Je demande à Robert de produire des dalles circulaire de 75
 const dalleCirculaire75: Cercle = new Cercle();
 dalleCirculaire75.setDiametre(75);
 dalleCirculaire75.dessiner();

 // C'est bon Robert, tu peux lancer la prod de triangles
 const dalleTriangulaire: Triangle = new Triangle();
 dalleTriangulaire.setKind('Equilateral');
 dalleTriangulaire.dessiner();