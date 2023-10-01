import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const AllTypes = z.object({
  userType: z.enum([
    "parent",
    "schoolGraduate",
    "collegeGraduate",
    "abroadGraduate",
  ]),
  studiesType: z.enum(["fullTime", "partTime", "online", "evening"]),
  localizationKmType: z.enum(["50", "100", "200", "300", "500"]).or(z.undefined()),
  rankingType: z.number(),
  certType: z.number(),
  workType: z.enum(["workWithHumans", "workWithData", "workWithNature"]),
  workDestinationType: z.enum(["office", "science", "manual", "freelancer"]),
  studentType: z.number(),
  setSkills:z.enum(["dataAnalyze", "communication", "creativity", "technologyUnderstanding"]),
  exchangeType: z.number(),
  areYouArtistType: z.number(),
  sociallyInterestedType: z.number(),
  techLoveType: z.number(),
  historyAndCultureType: z.number(),
  ecologyType: z.number(),
  mediaInterestType: z.number(),
  technologyOrHumanityType: z.number(),
  workForSocietyOrScianceType: z.number(),
});

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.input(AllTypes).query(({ input }) => {
    return {
      input: input,
    };
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.example.findMany();
  }),
});
