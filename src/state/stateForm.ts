import { create } from "zustand";

type UserType =
  | "parent"
  | "schoolGraduate"
  | "collegeGraduate"
  | "abroadGraduate"
  | undefined;
type StudiesType = "fullTime" | "partTime" | "online" | "evening" | undefined;
interface FormState {
  userType: UserType;
  setUserType: (userType: UserType) => void;
  studiesType: StudiesType;
  setStudiesType: (studiesType: StudiesType) => void;
}

export const useFormStore = create<FormState>()((set) => ({
  userType: undefined,
  setUserType: (userType) => set({ userType }),
  studiesType: undefined,
  setStudiesType: (studiesType) => set({ studiesType }),
}));
