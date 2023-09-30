import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const AllTypes = z.object({
  userType: z.enum([
    "parent"
   , "schoolGraduate"
   , "collegeGraduate"
   , "abroadGraduate"
 ]),
  studiesType: z.enum([
    "fullTime"
  , "partTime"
  , "online"
  , "evening"
 ]),
  localizationType: z.enum([
    "notImportant"
  , "important"
 ]),
  localizationKmType: z.enum([
    "50"
  , "100"
  , "200"
  , "300"
  , "500"
 ]),
  rankingType: z.enum([
    "important"
  , "notImportant"
 ]),
  certType: z.enum([
    "yesTechnician"
  , "notImportant"
  , "noHumanities"
 ]),
  workType: z.enum([
    "workWithHumans"
  , "workWithData"
  , "workWithNature"
 ]),
  workDestinationType: z.enum([
    "office"
  , "science"
  , "manual"
  , "freelancer"
 ]),
  studentType: z.enum([
    "theoretical"
  , "practical"
  , "notImportant"
 ]),
  exchangeType: z.enum([
    "yes"
  , "notImportant"
 ]),
  innowationType: z.enum([
    "yes"
  , "notImportant"
 ]),
  fieldWorkType: z.enum([
    "field"
  , "office"
 ]),
  areYouArtistType: z.enum([
    "yes"
  , "no"
 ]),
  soloOrTeamType: z.enum([
    "solo"
  , "team"
 ]),
  sociallyInterestedType: z.enum([
    "yes"
  , "no"
 ]),
  techLoveType: z.enum([
    "yes"
  , "no"
 ]),
  historyAndCultureType: z.enum([
    "yes"
  , "no"
 ]),
  ecologyType: z.enum([
    "yes"
  , "no"
 ]),
  mediaInterestType: z.enum([
    "yes"
  , "no"
 ]),
  technologyOrHumanityType: z.enum([
    "technology"
  , "humanity"
 ]),
  workForSocietyOrScianceType: z.enum([
    "society"
  , "science"
 ]),
});

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(AllTypes)
    .query(({ input }) => {
      return {
        input: input,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.example.findMany();
  }),
});
