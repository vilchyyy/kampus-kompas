import { create } from "zustand";

type UserType =
  | "parent"
  | "schoolGraduate"
  | "collegeGraduate"
  | "abroadGraduate"
  ;
type StudiesType = "fullTime" | "partTime" | "online";
type RankingType = number;
type CertType = number; 
type WorkType =
  | "workWithHumans"
  | "workWithData"
  | "workWithNature"
  ;
type WorkDestinationType =
  | "office"
  | "science"
  | "manual"
  | "freelancer"
  ;
type StudentType = number;
type ExchangeType = number;
type InnowationType = number;
type AreYouArtistType = number;
type SociallyInterestedType = number;
type TechLoveType = number;
type HistoryAndCultureType = number;
type EcologyType = number;
type MediaInterestType = number;
type TechnologyOrHumanityType = "technology" | "humanity" ;
type WorkForSocietyOrScianceType = "society" | "science" ;
type LocalizationType = number;
type LocalizationKmType = "50" | "100" | "200" | "300" | "500" ;

interface FormState {
  userType: UserType;
  setUserType: (userType: UserType) => void;
  studiesType: StudiesType;
  setStudiesType: (studiesType: StudiesType) => void;
  localizationType: LocalizationType;
  setLocalizationType: (localizationType: LocalizationType) => void;
  localizationKmType: LocalizationKmType;
  setLocalizationKmType: (localizationKmType: LocalizationKmType) => void;
  rankingType: RankingType;
  setRankingType: (rankingType: RankingType) => void;
  certType: CertType;
  setCertType: (certType: CertType) => void;
  workType: WorkType;
  setWorkType: (workType: WorkType) => void;
  workDestinationType: WorkDestinationType;
  setWorkDestinationType: (workDestinationType: WorkDestinationType) => void;
  studentType: StudentType;
  setStudentType: (studentType: StudentType) => void;
  exchangeType: ExchangeType;
  setExchangeType: (exchangeType: ExchangeType) => void;
  innowationType: InnowationType;
  setInnowationType: (innowationType: InnowationType) => void;
  areYouArtistType: AreYouArtistType;
  setAreYouArtistType: (areYouArtistType: AreYouArtistType) => void;
  sociallyInterestedType: SociallyInterestedType;
  setSociallyInterestedType: (
    sociallyInterestedType: SociallyInterestedType,
  ) => void;
  techLoveType: TechLoveType;
  setTechLoveType: (techLoveType: TechLoveType) => void;
  historyAndCultureType: HistoryAndCultureType;
  setHistoryAndCultureType: (
    historyAndCultureType: HistoryAndCultureType,
  ) => void;
  ecologyType: EcologyType;
  setEcologyType: (ecologyType: EcologyType) => void;
  mediaInterestType: MediaInterestType;
  setMediaInterestType: (mediaInterestType: MediaInterestType) => void;
  technologyOrHumanityType: TechnologyOrHumanityType;
  setTechnologyOrHumanityType: (
    technologyOrHumanityType: TechnologyOrHumanityType,
  ) => void;
  workForSocietyOrScianceType: WorkForSocietyOrScianceType;
  setWorkForSocietyOrScianceType: (
    workForSocietyOrScianceType: WorkForSocietyOrScianceType,
  ) => void;
}

export const useFormStore = create<FormState>()((set) => ({
  userType: "parent",
  setUserType: (userType) => set({ userType }),
  studiesType:"fullTime",
  setStudiesType: (studiesType) => set({ studiesType }),
  localizationType: 0,
  setLocalizationType: (localizationType) => set({ localizationType }),
  localizationKmType: "50",
  setLocalizationKmType: (localizationKmType) => set({ localizationKmType }),
  rankingType: 0,
  setRankingType: (rankingType) => set({ rankingType }),
  certType: 0,
  setCertType: (certType) => set({ certType }),
  workType: "workWithHumans",
  setWorkType: (workType) => set({ workType }),
  workDestinationType: "office",
  setWorkDestinationType: (workDestinationType) => set({ workDestinationType }),
  studentType: 0,
  setStudentType: (studentType) => set({ studentType }),
  exchangeType: 0,
  setExchangeType: (exchangeType) => set({ exchangeType }),
  innowationType: 0,
  setInnowationType: (innowationType) => set({ innowationType }),
  areYouArtistType: 0,
  setAreYouArtistType: (areYouArtistType) => set({ areYouArtistType }),
  sociallyInterestedType: 0,
  setSociallyInterestedType: (sociallyInterestedType) =>
    set({ sociallyInterestedType }),
  techLoveType: 0,
  setTechLoveType: (techLoveType) => set({ techLoveType }),
  historyAndCultureType: 0,
  setHistoryAndCultureType: (historyAndCultureType) =>
    set({ historyAndCultureType }),
  ecologyType: 0,
  setEcologyType: (ecologyType) => set({ ecologyType }),
  mediaInterestType: 0,
  setMediaInterestType: (mediaInterestType) => set({ mediaInterestType }),
  technologyOrHumanityType: "technology",
  setTechnologyOrHumanityType: (technologyOrHumanityType) =>
    set({ technologyOrHumanityType }),
  workForSocietyOrScianceType: "society",
  setWorkForSocietyOrScianceType: (workForSocietyOrScianceType) =>
    set({ workForSocietyOrScianceType }),
}));