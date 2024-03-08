
export enum Region{
  Africa  = 'Africa',
  America = 'Americas',
  Asia    = 'Asia',
  Europe  = 'Europe',
  Oceania = 'Oceania'
}

export interface Country {
  name:         Name;
  cca3:         string;
  cioc?:        string;
  status:       Status;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   string;
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  gini?:        { [key: string]: number };
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currencies {
  ERN?: Aoa;
  LRD?: Aoa;
  UGX?: Aoa;
  EUR?: Aoa;
  SOS?: Aoa;
  ZMW?: Aoa;
  DZD?: Aoa;
  EGP?: Aoa;
  MGA?: Aoa;
  SDG?: Sdg;
  ZAR?: Aoa;
  XAF?: Aoa;
  KES?: Aoa;
  USD?: Aoa;
  XOF?: Aoa;
  MRU?: Aoa;
  GMD?: Aoa;
  SCR?: Aoa;
  GBP?: Aoa;
  SHP?: Aoa;
  STN?: Aoa;
  GHS?: Aoa;
  TZS?: Aoa;
  NGN?: Aoa;
  DJF?: Aoa;
  ETB?: Aoa;
  MAD?: Aoa;
  GNF?: Aoa;
  BWP?: Aoa;
  ZWL?: Aoa;
  LSL?: Aoa;
  NAD?: Aoa;
  MZN?: Aoa;
  CDF?: Aoa;
  CVE?: Aoa;
  BIF?: Aoa;
  RWF?: Aoa;
  MUR?: Aoa;
  LYD?: Aoa;
  MWK?: Aoa;
  TND?: Aoa;
  KMF?: Aoa;
  SZL?: Aoa;
  SSP?: Aoa;
  AOA?: Aoa;
  SLL?: Aoa;
}

export interface Aoa {
  name:   string;
  symbol: string;
}

export interface Sdg {
  name: string;
}

export interface Demonyms {
  eng:  EngClass;
  fra?: EngClass;
}

export interface EngClass {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  ara?: Ara;
  eng?: EngEnum;
  tir?: string;
  swa?: string;
  fra?: Fra;
  som?: string;
  mlg?: string;
  afr?: string;
  nbl?: string;
  nso?: string;
  sot?: string;
  ssw?: string;
  tsn?: string;
  tso?: string;
  ven?: string;
  xho?: string;
  zul?: string;
  kon?: string;
  lin?: string;
  crs?: string;
  por?: string;
  amh?: string;
  ber?: string;
  mey?: string;
  spa?: string;
  sag?: string;
  pov?: string;
  bwg?: string;
  kck?: string;
  khi?: string;
  ndc?: string;
  nde?: string;
  nya?: string;
  sna?: string;
  toi?: string;
  zib?: string;
  deu?: string;
  her?: string;
  hgm?: string;
  kwn?: string;
  loz?: string;
  ndo?: string;
  lua?: string;
  run?: string;
  kin?: string;
  mfe?: string;
  zdj?: string;
}

export enum Ara {
  Arabic = "Arabic",
}

export enum EngEnum {
  English = "English",
}

export enum Fra {
  French = "French",
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}

export enum Subregion {
  EasternAfrica = "Eastern Africa",
  MiddleAfrica = "Middle Africa",
  NorthernAfrica = "Northern Africa",
  SouthernAfrica = "Southern Africa",
  WesternAfrica = "Western Africa",
}
