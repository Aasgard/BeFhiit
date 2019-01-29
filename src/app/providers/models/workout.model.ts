import {IExercise} from './exercise.model';

export interface IWorkout {
    id: string;
    name: string;
    description: string;
    creationDate: string;
    updateDate: string;
    isFavorite: boolean;
    difficulty: string;
    warmupTime: number;
    exercises: ISet[];
}

export interface ISet {
    /* Objet exercice */
    exercise: IExercise | boolean;
    /* Durée en secondes de l'exercice : par défaut 30 secondes */
    duration: number;
}
