import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { number, z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const AllTypes = z.object({
  userType: z.enum([
    "parent",
    "schoolGraduate",
    "collegeGraduate",
    "abroadGraduate",
  ]),
  studiesType: z.enum(["fullTime", "partTime", "online", "evening"]),
  localizationKmType: z
    .enum(["50", "100", "200", "300", "500"])
    .or(z.undefined()),
  rankingType: z.number(),
  certType: z.number(),
  workType: z.enum(["workWithHumans", "workWithData", "workWithNature"]),
  workDestinationType: z.enum(["office", "science", "manual", "freelancer"]),
  studentType: z.number(),
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
const prisma = new PrismaClient();
export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.input(AllTypes).query(async ({ input, ctx }) => {
    const score = {
      techniczne: 0,
      spoleczne: 0,
      humanistyczne: 0,
      artystyczne: 0,
      scisle: 0,
      przyrodnicze: 0,
      medyczne: 0,
      rolnicze: 0, 
      tryb: input.studiesType,
      dystans: input.localizationKmType,
      ranking: input.rankingType,

    }

    if (input.certType === 0) {
      score.spoleczne += 2;
      score.humanistyczne += 2;
      score.przyrodnicze += 2;
    } else if (input.certType === 1) {
      score.spoleczne += 1;
      score.humanistyczne += 1;
      score.przyrodnicze += 1;
    } else if (input.certType === 3) {
      score.techniczne += 1;
      score.medyczne += 1;
      score.rolnicze += 1;
    } else if (input.certType === 4) {
      score.techniczne += 2;
      score.medyczne += 2;
      score.rolnicze += 2;
    }

    if (input.workType === "workWithHumans") {
      score.spoleczne += 2;
      score.humanistyczne += 2;
      score.medyczne += 2;
    } else if (input.workType === "workWithData") {
      score.techniczne += 2;
      score.scisle += 2;
    } else if (input.workType === "workWithNature") {
      score.przyrodnicze += 2;
      score.rolnicze += 2;
    }

    if (input.workDestinationType === "office") {
      score.techniczne += 1;
      score.spoleczne += 1;
      score.humanistyczne += 1;
    } else if (input.workDestinationType === "science") {
      score.techniczne += 2;
      score.scisle += 2;
    } else if (input.workDestinationType === "manual") {
      score.przyrodnicze += 2;
      score.rolnicze += 2;
    } else if (input.workDestinationType === "freelancer") {
      score.techniczne += 1;
      score.spoleczne += 1;
      score.humanistyczne += 1;
    }

    if (input.studentType === 0) {
      score.techniczne += 2;
      score.medyczne += 1;

    } else if (input.studentType === 1) {
      score.techniczne += 1;
    } else if (input.studentType === 3) {
      score.spoleczne += 1;
      score.humanistyczne += 1;
    } else if (input.studentType === 4) {
      score.spoleczne += 2;
      score.przyrodnicze += 1;
      score.humanistyczne += 2;
    }

    if (input.areYouArtistType === 1) {
      score.artystyczne += 1;
    } else if (input.areYouArtistType === 2) {
      score.artystyczne += 2;
    } else if (input.areYouArtistType === 3) {
      score.artystyczne += 3;
    } else if (input.areYouArtistType === 4) {
      score.artystyczne += 4;
    }

    if (input.sociallyInterestedType === 0) {
      score.techniczne += 2;
      score.scisle += 2;
    } else if (input.sociallyInterestedType === 1) {
      score.spoleczne += 1;
      score.humanistyczne += 1;
    } else if (input.sociallyInterestedType === 3) {
      score.spoleczne += 2;
      score.humanistyczne += 1;
    } else if (input.sociallyInterestedType === 4) {
      score.spoleczne += 3;
      score.humanistyczne += 2;
    }

    if (input.techLoveType === 0) {
      score.techniczne -= 2;
      score.scisle -= 2;
    } else if (input.techLoveType === 1) {
      score.techniczne -= 1;
      score.scisle -= 1;
    } else if (input.techLoveType === 3) {
      score.techniczne += 1;
      score.scisle += 1;
    } else if (input.techLoveType === 4) {
      score.techniczne += 1;
      score.scisle += 1;
    }

    if (input.historyAndCultureType === 0) {
      score.humanistyczne -= 1 ;
    } else if (input.historyAndCultureType === 3) {
      score.humanistyczne -= 1;
    } else if (input.historyAndCultureType === 4) {
      score.humanistyczne -= 2;
    }

    if (input.ecologyType === 0) {
      score.przyrodnicze -= 2;
      score.rolnicze -= 2;
    } else if (input.ecologyType === 1) {
      score.przyrodnicze -= 1;
      score.rolnicze -= 1;
    } else if (input.ecologyType === 3) {
      score.przyrodnicze += 1;
      score.rolnicze += 1;
    } else if (input.ecologyType === 4) {
      score.przyrodnicze += 2;
      score.rolnicze += 2;
    }

    if (input.mediaInterestType === 0) {
      score.humanistyczne -= 1;
    } else if (input.mediaInterestType === 1) {
      score.humanistyczne -= 1;
    } else if (input.mediaInterestType === 3) {
      score.humanistyczne += 2;
      score.spoleczne += 1;
    } else if (input.mediaInterestType === 4) {
      score.humanistyczne += 3;
      score.spoleczne += 2;
    }

    if (input.technologyOrHumanityType === 0) {
      score.techniczne -= 2;
      score.scisle -= 1;
    } else if (input.technologyOrHumanityType === 1) {
      score.techniczne -= 1;
      score.scisle -= 1;
    } else if (input.technologyOrHumanityType === 3) {
      score.techniczne += 1;
      score.scisle += 1;
    } else if (input.technologyOrHumanityType === 4) {
      score.techniczne += 2;
      score.scisle += 2;
    }

    if (input.workForSocietyOrScianceType === 0) {
        score.przyrodnicze -= 2;
        score.medyczne -= 2;
    } else if (input.workForSocietyOrScianceType === 1) {
      score.przyrodnicze -= 1;
      score.medyczne -= 1;
    } else if (input.workForSocietyOrScianceType === 3) {
      score.przyrodnicze += 1;
      score.medyczne += 1;
    } else if (input.workForSocietyOrScianceType === 4) {
      score.przyrodnicze += 2;
      score.medyczne += 2;
    }

    const kierunki = await ctx.db.kierunek.findMany({
      include: {
        university: true
      }
    })
    const matches = []
    let biggest = 0
    for (const i of Object.values(score)) {
      if (typeof i === 'number') {
        console.log(i, biggest)
        if (i > biggest) {
          biggest = i
        }
      }
    }

    const ratio = biggest / 5 

    if (score.humanistyczne <= 0) {
      score.humanistyczne = 0
    }
    if (score.techniczne <= 0) {
      score.techniczne = 0
    }
    if (score.scisle <= 0) {
      score.scisle = 0
    }
    if (score.spoleczne <= 0) {
      score.spoleczne = 0
    }
    if (score.przyrodnicze <= 0) {
      score.przyrodnicze = 0
    }
    if (score.medyczne <= 0) {
      score.medyczne = 0
    }
    if (score.rolnicze <= 0) {
      score.rolnicze = 0
    }
    if (score.artystyczne <= 0) {
      score.artystyczne = 0
    }

    

    for (const i of kierunki) {
      const human = Math.abs((score.humanistyczne /ratio) - i.humanistyczne)
      const tech =  Math.abs((score.techniczne /ratio) - i.techniczne)
      const scisle =Math.abs((score.scisle /ratio) - i.sciscle)
      const spoleczne = Math.abs((score.spoleczne /ratio) - i.spoleczne)
      const przyrodnicze = Math.abs((score.przyrodnicze /ratio) - i.przyrodnicze)
      const medyczne =   Math.abs((score.medyczne /ratio) - i.medyczne)
      const rolnicze = Math.abs((score.rolnicze /ratio) - i.rolnicze)
      const artystyczne = Math.abs((score.artystyczne /ratio) - i.artystyczne)
      matches.push({score: human+tech+scisle+spoleczne+przyrodnicze+medyczne+rolnicze+artystyczne, uni: i.university ,tryb: i.tryb, kierunek: i.name, image: i.university?.image})
    }

    // loop through keys in score and if keys is number, divide by ratio

    const filtered = []

    for (const i of matches) {
        if (i.tryb ===  score.tryb || (i.tryb === "stacjonarne" && score.tryb === "fullTime") || (i.tryb === "niestacjonarne" && score.tryb === "partTime") || i.tryb === "niestacjonarne" && score.tryb === "online" || i.tryb === "niestacjonarne" && score.tryb === "evening") {
            filtered.push(i)
        }
    }
    
    return {
      input: input,
      score: score,
      matches: matches,
      filtered: filtered,

    };
  }),
  uczelnie: publicProcedure.query(async () => {
    const uczelnie = await prisma.university.findMany();
    console.log("aaaaaaa", uczelnie);
    return {
      uczelnie,
    };
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.example.findMany();
  }),
});
