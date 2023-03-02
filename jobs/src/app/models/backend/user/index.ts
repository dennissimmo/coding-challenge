import { Employee, Recruiter } from './roles';
import firebase from "firebase/compat";
import firestore = firebase.firestore;

export * from './roles';

export interface User {
    uid: string;
    name: string;
    photoURL: string;
    email:string;
    country:string;
    roleId: string;
    role: Employee | Recruiter;
    created: firestore.FieldValue;
    updated?: firestore.FieldValue;
}
