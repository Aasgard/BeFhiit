import {Component, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {ISet, IWorkout} from '../../providers/models/workout.model';
import {IExercise} from '../../providers/models/exercise.model';

@Component({
    selector: 'app-workouts',
    templateUrl: './workouts.page.html',
    styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {

    workoutsData: IWorkout[] = [{
        id: '187-198a7-1481984za1e-a14ez987e1a',
        name: 'Majin Vegeta',
        description: 'Workout de la mort, si tu le passes, tu gères !',
        creationDate: new Date().toString(),
        isFavorite: true,
        difficulty: 'Difficile',
        updateDate: null,
        warmupTime: 60,
        cooldownInterset: 60,
        exercises: [{
            exercise: {
                id: '04692273-7374-4692-9f8d-23a4a7b569d0',
                name: 'JR Double unders',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo dolor non eros iaculis luctus. Morbi ullamcorper justo ut turpis luctus dapibus.',
                creationDate: '2019-01-27T23:06:47+01:00',
                updateDate: '2019-01-28T23:06:47+01:00',
                isFavorite: false,
                difficulty: 'Difficile'
            },
            duration: 30,
            order: 5
        }, {
            exercise: false,
            duration: 15,
            order: 4
        }, {
            exercise: {
                id: '04692273-7374-4692-9f8d-23a4a7b569d0',
                name: 'JR Double unders',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo dolor non eros iaculis luctus. Morbi ullamcorper justo ut turpis luctus dapibus.',
                creationDate: '2019-01-27T23:06:47+01:00',
                updateDate: '2019-01-28T23:06:47+01:00',
                isFavorite: false,
                difficulty: 'Difficile'
            },
            duration: 30,
            order: 1
        }, {
            exercise: false,
            duration: 15,
            order: 2
        }, {
            exercise: {
                id: '04692273-7374-4692-9f8d-23a4a7b569d0',
                name: 'JR Double unders',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo dolor non eros iaculis luctus. Morbi ullamcorper justo ut turpis luctus dapibus.',
                creationDate: '2019-01-27T23:06:47+01:00',
                updateDate: '2019-01-28T23:06:47+01:00',
                isFavorite: false,
                difficulty: 'Difficile'
            },
            duration: 30,
            order: 3
        }]
    }];

    constructor(private actionSheetController: ActionSheetController) {

    }

    ngOnInit() {
        // Tri du tableau d'exercices par ordre de passage
        this.workoutsData[0].exercises = this.workoutsData[0].exercises.sort((a, b) => {
            return a.order - b.order;
        });
        // Détecter les pauses (i.e. leur nombre)
        // console.log(this.workoutsData[0].exercises.filter(item => {
        //     return item.exercise === false;
        // }));
        for (let i = 0; i < this.workoutsData[0].exercises.length; i++) {
            const exercices: ISet[] = this.workoutsData[0].exercises;
            setTimeout(() => {
                console.log(this.workoutsData[0].exercises[i].exercise);
            }, exercices[i].duration * 1000);
        }
    }

    async onWorkoutClicked(clickedWorkout: IWorkout) {
        const actionSheet = await this.actionSheetController.create({
            buttons: [{
                text: 'Voir',
                handler: () => {
                    console.log(clickedWorkout);
                }
            }, {
                text: 'Modifier',
                handler: () => {
                    console.log('Modification ID : ' + clickedWorkout.id);
                }
            }, {
                text: clickedWorkout.isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris',
                handler: () => {
                    if (clickedWorkout.isFavorite) {
                        console.log('Retiré aux favoris');
                    } else {
                        console.log('Ajouté aux favoris');
                    }
                    clickedWorkout.isFavorite = !clickedWorkout.isFavorite;
                }
            }, {
                text: 'Supprimer',
                role: 'destructive',
                handler: () => {
                    console.log('Suppression ID : ' + clickedWorkout.id);
                }
            }, {
                text: 'Annuler',
                role: 'cancel',
                handler: () => {
                    console.log('Annulation');
                }
            }]
        });
        await actionSheet.present();
    }

}
