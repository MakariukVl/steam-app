import { TextInputType } from "./input-text-type";

export interface FormModel {
  title: string,
  fields: FormField[],
  buttonText: string
}

export interface FormField {
  title: string,
  type: TextInputType,
  pattern: string,
  placeholder: string
}