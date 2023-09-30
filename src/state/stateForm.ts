import { create } from "zustand";

type UserType =
  | "parent"
  | "schoolGraduate"
  | "collegeGraduate"
  | "abroadGraduate"; //page1
type StudiesType = "fullTime" | "partTime" | "online"; //page2
type LocalizationKmType = "50" | "100" | "200" | "300" | "500" | undefined //page3a
type RankingType = number; //page4
type CertType = number; //page5
type WorkType = "workWithHumans" | "workWithData" | "workWithNature"; //page6
type WorkDestinationType = "office" | "science" | "manual" | "freelancer"; //page7
type StudentType = number; //page8
type ExchangeType = number; //page9
type InnowationType = number; //page10
type AreYouArtistType = number; //page11
type SociallyInterestedType = number; //page12
type TechLoveType = number; //page13
type HistoryAndCultureType = number; //page14
type EcologyType = number; //page15
type MediaInterestType = number; //page16
type TechnologyOrHumanityType = number; //page17
type WorkForSocietyOrScianceType = number; //page18

interface FormState {
  userType: UserType;
  setUserType: (userType: UserType) => void;
  studiesType: StudiesType;
  setStudiesType: (studiesType: StudiesType) => void;
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
  studiesType: "fullTime",
  setStudiesType: (studiesType) => set({ studiesType }),
  localizationKmType: undefined,
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
  technologyOrHumanityType: 0,
  setTechnologyOrHumanityType: (technologyOrHumanityType) =>
    set({ technologyOrHumanityType }),
  workForSocietyOrScianceType: 0,
  setWorkForSocietyOrScianceType: (workForSocietyOrScianceType) =>
    set({ workForSocietyOrScianceType }),
}));
