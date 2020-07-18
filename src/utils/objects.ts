import moment from "moment";
//import { IUserInfo } from "@/interfaces/dtos/user/IUserInfo";
//import { USER_ROLES } from "@/utils/constants";
//import { IUserPreview } from "@/interfaces/dtos/user/IUserPreview";
// import {IGroup} from "@/utils/linq";
//
//

export const formatDate = (
  date?: Date | string,
  t?: (text: string) => string,
  format = "MMM DD, YYYY"
) => {
  if (!date) return moment().format(format);
  if (!t) t = o => o;
  // if (!format) format = "DD-MM-YYYY";
  if (!date) return `(${t("Not set")})`;
  return moment(date).format(format);
};

export const getProperties = (o: any): { key: string; value: any }[] => {
  return Object.keys(o).map(key => ({ key, value: o[key] }));
};

export function delay(ms: number) {
  return new Promise<void>(function(resolve) {
    setTimeout(resolve, ms);
  });
}

export function compareArray<T>(a: T[], b: T[]): boolean {
  if (!a.length && !b.length) return true;
  if (!a.length || !b.length) return false;
  return a[0] == b[0] && compareArray<T>(a.slice(1), b.slice(1));
}

//export function havePermissions(user: IUserInfo, roles: USER_ROLES[]): boolean {
//  return user.roles.some(x => roles.some(y => y == x));
//}

//export function getDisplayName(
//  user: IUserInfo | IUserPreview | undefined
//): string {
//  return user ? user.firstName + " " + user.lastName : "";
//}

export function getPercentOf(percentage: number, x: number): number {
  return Math.min(Math.trunc((percentage * x) / 100), 100);
}

export function getPercentage(x: number, y: number): number {
  return y && x < y ? Math.min(Math.trunc((x / y) * 100), 100) : 100;
}

import Vue from "vue";
export type VForm = Vue & {
  validate: () => boolean;
  resetValidation: () => void;
  reset: () => void;
};

export const getBuildPrefix = (prefix: string) => (x: number): string => {
  switch (x) {
    case 0:
      return `${prefix}/state/`;
    case 1:
      return `${prefix}/actions/`;
    case 2:
      return `${prefix}/getters/`;
    case 3:
      return `${prefix}/mutations/`;
    default:
      return `${prefix}`;
  }
};

export const nameof = <T>(name: keyof T) => name;

export const clone = <T>(object: T): T => {
  console.log("clone", object);
  return JSON.parse(JSON.stringify(object));
};

// export const clone = <T>(object: any): T => {
//   //if (typeof object === 'object')
//   //    return Object.assign({}, object) as T;
//   //return object as T;
//
//   let copy: any;
//
//   // Handle the 3 simple types, and null or undefined
//   if (null == object || "object" != typeof object) return object;
//
//   // Handle Date
//   if (object instanceof Date) {
//     copy = new Date();
//     copy.setTime(object.getTime());
//     return copy as T;
//   }
//
//   // Handle Array
//   if (object instanceof Array) {
//     copy = [];
//     for (let i = 0, len = object.length; i < len; i++) {
//       copy[i] = clone(object[i]);
//     }
//     return copy as T;
//   }
//
//   // Handle Object
//   if (object instanceof Object) {
//     copy = {};
//     Object.keys(object).forEach(key => {
//       copy[key] = clone(object[key]);
//     });
//     // for (const attr in object) {
//     //   if (object.hasOwnProperty(attr))
//     //     (copy as any)[attr] = clone(object[attr]);
//     // }
//     return copy as T;
//   }
//
//   throw new Error("Unable to copy obj! Its type isn't supported.");
// };

//
// export const formatDateUtc = (
//   date: Date,
//   t?: (text: string) => string,
//   format?: string
// ) => {
//   if (!t) t = o => o;
//   if (!format) format = "DD-MM-YYYY";
//   if (!date) return `(${t("Not set")})`;
//   return moment(date)
//     .utc()
//     .format(format);
// };
//
// export const formatDecimal = (number: number, options?: any) => {
//   return (number ? number : 0)
//     .toFixed(2)
//     .replace(/\./g, ",")
//     .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// };
//
// export const formatCurrency = (number: number, symbol?: string) => {
//   if (!symbol) symbol = "€";
//   return `${formatDecimal(number, {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2
//   })} ${symbol}`;
// };
//
// export const formatPercent = (number: number) => {
//   return `${formatDecimal(number)}%`;
// };
//
// export const formatBoolean = (value: boolean, t: (text: string) => string) => {
//   return value ? t("Yes") : t("No");
// };
//

// export function isNullOrWhitespace(str: string) {
//   return str === null || str.match(/^ *$/) !== null;
// }
//
// export function unixEpochToDate(epochTime: number): Date {
//   return new Date(epochTime * 1000);
// }
//

// export function lightOrDark(color: any) {
//   // Variables for red, green, blue values
//   let r, g, b, hsp;
//
//   // Check the format of the color, HEX or RGB?
//   if (color.match(/^rgb/)) {
//     // If HEX --> store the red, green, blue values in separate variables
//     color = color.match(
//       /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
//     );
//
//     r = color[1];
//     g = color[2];
//     b = color[3];
//   } else {
//     // If RGB --> Convert it to HEX: http://gist.github.com/983661
//     color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));
//
//     r = color >> 16;
//     g = (color >> 8) & 255;
//     b = color & 255;
//   }
//
//   // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
//   hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
//
//   // Using the HSP value, determine whether the color is light or dark
//   if (hsp > 127.5) {
//     return "light";
//   } else {
//     return "dark";
//   }
// }
