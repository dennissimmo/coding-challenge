import { Employee, Recruiter } from './roles';
import {firestore} from "firebase/app";

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
