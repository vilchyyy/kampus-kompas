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
  localizationType: z.number(),
  localizationKmType: z.enum([
    "50"
  , "100"
  , "200"
  , "300"
  , "500"
 ]),
  rankingType: z.number(),
  certType: z.number(),
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
  exchangeType: z.number(),
  innowationType: z.number(),
  fieldWorkType: z.enum([
    "field"
  , "office"
 ]),
  areYouArtistType: z.number(),
  soloOrTeamType: z.enum([
    "solo"
  , "team"
 ]),
  sociallyInterestedType: z.number(),
  techLoveType: z.number(),
  historyAndCultureType: z.number(),
  ecologyType: z.number(),
  mediaInterestType: z.number(),
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
