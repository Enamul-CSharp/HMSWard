import { Patient } from "./patient";


export class Followups {
  followupId!: Number ;
  patientID!: Number  ;
  reason!: string;

  notes!: string;
  status!: string;

  patient!: Patient;
}
