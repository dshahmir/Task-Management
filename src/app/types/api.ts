// API request and response types

export interface PatientContext {
  name: string;
  dateOfBirth: string;
  gender: string;
}

export interface MedicalResponse {
  questionIndex: number;
  question: string;
  answer: string;
}

export interface SubmitResponsesRequest {
  patientContext: PatientContext;
  medicalResponses: MedicalResponse[];
}

export interface ApiResponse {
  success: boolean;
  message: string;
  timestamp?: string;
  error?: string;
}
