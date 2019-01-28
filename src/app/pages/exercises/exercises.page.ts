import {Component, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
    selector: 'app-exercises',
    templateUrl: './exercises.page.html',
    styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

    constructor(private actionSheetController: ActionSheetController) {
    }

    ngOnInit() {
    }

    async onExerciseClicked() {
        const actionSheet = await this.actionSheetController.create({
            buttons: [{
                    text: 'Voir',
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                }, {
                    text: 'Modifier',
                    handler: () => {
                        console.log('Share clicked');
                    }
                }, {
                    text: 'Ajouter aux favoris',
                    handler: () => {
                        console.log('Favorite clicked');
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
