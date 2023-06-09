import { ISubscription } from "./models";

export const isSomeEmpty = (form: ISubscription): boolean => {
  return Object.values(form).some((v: string) => v === "");
};

export const validateForm = (form: ISubscription): string => {
  const { email, firstname, lastname, phone } = form;
  if (firstname.length < 3)
    return "El Nombre debe tener una longitud mayor a 3 caracteres";
  if (lastname.length < 3)
    return "El Nombre debe tener una longitud mayor a 3 caracteres";
  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const isValidEmail = emailRegExp.test(email);
  if (!isValidEmail) return "El Email no cumple con el formato correcto";
  if (String(phone).length !== 9) return " El Teléfono debe ser de 9 dígitos";
  return "";
};
