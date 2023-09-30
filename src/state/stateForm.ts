import { create } from "zustand";

type UserType =
  | "parent"
  | "schoolGraduate"
  | "collegeGraduate"
  | "abroadGraduate"
  ;
type StudiesType = "fullTime" | "partTime" | "online" | "evening" ;
type RankingType = "important" | "notImportant" ;
type CertType = "yesTechnician" | "notImportant" | "noHumanities" ;
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
type StudentType = "theoretical" | "practical" | "notImportant" ;
type ExchangeType = "yes" | "notImportant" ;
type InnowationType = "yes" | "notImportant" ;
type FieldWorkType = "field" | "office" ;
type AreYouArtistType = "yes" | "no" ;
type SoloOrTeamType = "solo" | "team" ;
type SociallyInterestedType = "yes" | "no" ;
type TechLoveType = "yes" | "no" ;
type HistoryAndCultureType = "yes" | "no" ;
type EcologyType = "yes" | "no" ;
type MediaInterestType = "yes" | "no" ;
type TechnologyOrHumanityType = "technology" | "humanity" ;
type WorkForSocietyOrScianceType = "society" | "science" ;
type LocalizationType = "notImportant" | "important" ;
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
  fieldWorkType: FieldWorkType;
  setFieldWorkType: (fieldWorkType: FieldWorkType) => void;
  areYouArtistType: AreYouArtistType;
  setAreYouArtistType: (areYouArtistType: AreYouArtistType) => void;
  soloOrTeamType: SoloOrTeamType;
  setSoloOrTeamType: (soloOrTeamType: SoloOrTeamType) => void;
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
  localizationType: "important",
  setLocalizationType: (localizationType) => set({ localizationType }),
  localizationKmType: "50",
  setLocalizationKmType: (localizationKmType) => set({ localizationKmType }),
  rankingType: "notImportant",
  setRankingType: (rankingType) => set({ rankingType }),
  certType: "yesTechnician",
  setCertType: (certType) => set({ certType }),
  workType: "workWithHumans",
  setWorkType: (workType) => set({ workType }),
  workDestinationType: "office",
  setWorkDestinationType: (workDestinationType) => set({ workDestinationType }),
  studentType: "theoretical",
  setStudentType: (studentType) => set({ studentType }),
  exchangeType: "yes",
  setExchangeType: (exchangeType) => set({ exchangeType }),
  innowationType: "yes",
  setInnowationType: (innowationType) => set({ innowationType }),
  fieldWorkType: "field",
  setFieldWorkType: (fieldWorkType) => set({ fieldWorkType }),
  areYouArtistType: "yes",
  setAreYouArtistType: (areYouArtistType) => set({ areYouArtistType }),
  soloOrTeamType: "solo",
  setSoloOrTeamType: (soloOrTeamType) => set({ soloOrTeamType }),
  sociallyInterestedType: "yes",
  setSociallyInterestedType: (sociallyInterestedType) =>
    set({ sociallyInterestedType }),
  techLoveType: "yes",
  setTechLoveType: (techLoveType) => set({ techLoveType }),
  historyAndCultureType: "yes",
  setHistoryAndCultureType: (historyAndCultureType) =>
    set({ historyAndCultureType }),
  ecologyType: "yes",
  setEcologyType: (ecologyType) => set({ ecologyType }),
  mediaInterestType: "yes",
  setMediaInterestType: (mediaInterestType) => set({ mediaInterestType }),
  technologyOrHumanityType: "technology",
  setTechnologyOrHumanityType: (technologyOrHumanityType) =>
    set({ technologyOrHumanityType }),
  workForSocietyOrScianceType: "society",
  setWorkForSocietyOrScianceType: (workForSocietyOrScianceType) =>
    set({ workForSocietyOrScianceType }),
}));
