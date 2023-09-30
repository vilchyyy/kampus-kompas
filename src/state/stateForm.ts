import { create } from "zustand";

type UserType =
  | "parent"
  | "schoolGraduate"
  | "collegeGraduate"
  | "abroadGraduate"
  | undefined;
type StudiesType = "fullTime" | "partTime" | "online" | "evening" | undefined;
type RankingType = "important" | "notImportant" | undefined;
type CertType = "yesTechnician" | "notImportant" | "noHumanities" | undefined;
type WorkType = "workWithHumans" | "workWithData" | "workWithNature" | undefined;
type WorkDestinationType = "office" | "science" | "manual" | "freelancer" | undefined;
type StudentType = "theoretical" | "practical" | "notImportant" | undefined;
type ExchangeType = "yes" | "notImportant" | undefined;
type InnowationType = "yes" | "notImportant" | undefined;
type FieldWorkType = "field" | "office" | undefined;
type AreYouArtistType = "yes" | "no" | undefined;
type SoloOrTeamType = "solo" | "team" | undefined;
type SociallyInterestedType = "yes" | "no" | undefined;
type TechLoveType = "yes" | "no" | undefined;
type HistoryAndCultureType = "yes" | "no" | undefined;
type EcologyType = "yes" | "no" | undefined;
type MediaInterestType = "yes" | "no" | undefined;
type TechnologyOrHumanityType = "technology" | "humanity" | undefined;
type WorkForSocietyOrScianceType = "society" | "science" | undefined;

interface FormState {
  userType: UserType;
  setUserType: (userType: UserType) => void;
  studiesType: StudiesType;
  setStudiesType: (studiesType: StudiesType) => void;
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
  setSociallyInterestedType: (sociallyInterestedType: SociallyInterestedType) => void;
  techLoveType: TechLoveType;
  setTechLoveType: (techLoveType: TechLoveType) => void;
  historyAndCultureType: HistoryAndCultureType;
  setHistoryAndCultureType: (historyAndCultureType: HistoryAndCultureType) => void;
  ecologyType: EcologyType;
  setEcologyType: (ecologyType: EcologyType) => void;
  mediaInterestType: MediaInterestType;
  setMediaInterestType: (mediaInterestType: MediaInterestType) => void;
  technologyOrHumanityType: TechnologyOrHumanityType;
  setTechnologyOrHumanityType: (technologyOrHumanityType: TechnologyOrHumanityType) => void;
  workForSocietyOrScianceType: WorkForSocietyOrScianceType;
  setWorkForSocietyOrScianceType: (workForSocietyOrScianceType: WorkForSocietyOrScianceType) => void;
}

export const useFormStore = create<FormState>()((set) => ({
  userType: undefined,
  setUserType: (userType) => set({ userType }),
  studiesType: undefined,
  setStudiesType: (studiesType) => set({ studiesType }),
  rankingType: undefined,
  setRankingType: (rankingType) => set({ rankingType }),
  certType: undefined,
  setCertType: (certType) => set({ certType }),
  workType: undefined,
  setWorkType: (workType) => set({ workType }),
  workDestinationType: undefined,
  setWorkDestinationType: (workDestinationType) => set({ workDestinationType }),
  studentType: undefined,
  setStudentType: (studentType) => set({ studentType }),
  exchangeType: undefined,
  setExchangeType: (exchangeType) => set({ exchangeType }),
  innowationType: undefined,
  setInnowationType: (innowationType) => set({ innowationType }),
  fieldWorkType: undefined,
  setFieldWorkType: (fieldWorkType) => set({ fieldWorkType }),
  areYouArtistType: undefined,
  setAreYouArtistType: (areYouArtistType) => set({ areYouArtistType }),
  soloOrTeamType: undefined,
  setSoloOrTeamType: (soloOrTeamType) => set({ soloOrTeamType }),
  sociallyInterestedType: undefined,
  setSociallyInterestedType: (sociallyInterestedType) => set({ sociallyInterestedType }),
  techLoveType: undefined,
  setTechLoveType: (techLoveType) => set({ techLoveType }),
  historyAndCultureType: undefined,
  setHistoryAndCultureType: (historyAndCultureType) => set({ historyAndCultureType }),
  ecologyType: undefined,
  setEcologyType: (ecologyType) => set({ ecologyType }),
  mediaInterestType: undefined,
  setMediaInterestType: (mediaInterestType) => set({ mediaInterestType }),
  technologyOrHumanityType: undefined,
  setTechnologyOrHumanityType: (technologyOrHumanityType) => set({ technologyOrHumanityType }),
  workForSocietyOrScianceType: undefined,
  setWorkForSocietyOrScianceType: (workForSocietyOrScianceType) => set({ workForSocietyOrScianceType }),
}));
