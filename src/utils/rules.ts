const required = (value: string) => !!value || "Required";

const charactersLength = (min?: number, max?: number) => {
  return (v: string) => {
    if (!!min && !!v && v.length < min) return `Min ${min} characters`;
    if (!!max && !!v && v.length > max) return `Max ${max} characters`;
    return true;
  };
};
const emailValid = (v: string) => /.+@.+/.test(v) || "Email must be valid";

const alphaNumeric = (v: string) =>
  /^[a-zA-Z0-9]+$/.test(v) || "Only Alphanumeric characters are allowed";

const alpha = (v: string) =>
  /^[A-Za-z][A-Za-z ]*$/.test(v) || "Only letters are allowed";

const numeric = (v: string) => /^[0-9]+$/.test(v) || "Only digits are allowed";

const regexPhone = /(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?/;
const isPhoneNumber = (v: string) => regexPhone.test(v) || "Only phone formats";

const isInValues = <T>(values: T[]) => {
  const res = (v: T) => !!values.find(x => x == v) || "Not is a valid option";
  return res;
};

const notMatch = (match: string) => {
  return (value: string) => value == match || "Not match";
};

const isGmail = (email: string) =>
  /^.+@gmail\.com$/.test(email) || "Only gmail are allowed";

const isFormatNumber = (value: string) =>
  /((\$ |\$)(\d+\.\d+|\d+))|((\d+\.\d+|\d+)(( \$)|(\$))?)/.test(value);

const isValidSizeInput = (size: 0.5 | 1 | 2) => (v: any) =>
  !v || v.size < size * Math.pow(10,6) || "Invalid size .";

export {
  required,
  charactersLength,
  emailValid,
  alphaNumeric,
  alpha,
  numeric,
  isInValues,
  notMatch,
  isGmail,
  isPhoneNumber,
  isFormatNumber,
  isValidSizeInput
};
export default {
  required,
  charactersLength,
  emailValid,
  alphaNumeric,
  alpha,
  numeric,
  isInValues,
  notMatch,
  isGmail,
  isPhoneNumber,
  isFormatNumber,
  isValidSizeInput
};
