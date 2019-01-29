import {Component, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {IExercise} from '../../providers/models/exercise.model';

@Component({
    selector: 'app-exercises',
    templateUrl: './exercises.page.html',
    styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

    public exercisesData: IExercise[] = [{
        id: '04692273-7353-4692-9f8d-23a4a7b569d0',
        name: 'JR Normal jumps',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo dolor non eros iaculis luctus. Morbi ullamcorper justo ut turpis luctus dapibus.',
        creationDate: '2019-01-28T23:06:47+01:00',
        updateDate: null,
        isFavorite: true,
        difficulty: 'Facile'
    }, {
        id: '04692273-7374-4692-9f8d-23a4a7b569d0',
        name: 'JR Double unders',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo dolor non eros iaculis luctus. Morbi ullamcorper justo ut turpis luctus dapibus.',
        creationDate: '2019-01-27T23:06:47+01:00',
        updateDate: '2019-01-28T23:06:47+01:00',
        isFavorite: false,
        difficulty: 'Difficile'
    }, {
        id: '04692273-7374-4692-9f8d-23a4a7azead0',
        name: 'JR Freestyle',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo dolor non eros iaculis luctus. Morbi ullamcorper justo ut turpis luctus dapibus.',
        creationDate: '2019-01-15T23:06:47+01:00',
        updateDate: '2019-01-21T23:06:47+01:00',
        isFavorite: true,
        difficulty: 'Moyen'
    }, {
        id: '827987929-7374-4178-9f8d-23a4a7azead0',
        name: 'Squats PDC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo dolor non eros iaculis luctus. Morbi ullamcorper justo ut turpis luctus dapibus.',
        creationDate: '2019-01-17T23:06:47+01:00',
        updateDate: '2019-01-18T23:06:47+01:00',
        isFavorite: false,
        difficulty: 'Facile'
    }, {
        id: '04692273-7374-4692-9f8d-23a4a7azead0',
        name: 'Pompes classiques',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo dolor non eros iaculis luctus. Morbi ullamcorper justo ut turpis luctus dapibus.',
        creationDate: '2019-01-19T23:06:47+01:00',
        updateDate: null,
        isFavorite: false,
        difficulty: 'Moyen'
    }];

    constructor(private actionSheetController: ActionSheetController) {
    }

    ngOnInit() {
        // TODO : récupérer les exercices côté serveur (FB)
    }

    async onExerciseClicked(clickedExercise: IExercise) {
        const actionSheet = await this.actionSheetController.create({
            buttons: [{
                text: 'Voir',
                handler: () => {
                    console.log(clickedExercise);
                }
            }, {
                text: 'Modifier',
                handler: () => {
                    console.log('Share clicked');
                }
            }, {
                text: clickedExercise.isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris',
                handler: () => {
                    if (clickedExercise.isFavorite) {
                        console.log('Retiré aux favoris');
                    } else {
                        console.log('Ajouté aux favoris');
                    }
                    clickedExercise.isFavorite = !clickedExercise.isFavorite;
                }
            }, {
                text: 'Supprimer',
                role: 'destructive',
                handler: () => {
                    console.log('Delete clicked');
                }
            }, {
                text: 'Annuler',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();
    }

}
