import { defineCollection , z} from "astro:content";
import { glob } from "astro/loaders"; 

const artwork = defineCollection({
	loader: glob({pattern: '**/*.{md,mdx}' , base: "src/content/gallery"}),
	schema: ({image}) => z.object({
		title: z.string()
		.describe("artwork title"),

		image: image()
			.describe("path to image"),
		imageAlt: z.string()
			.describe("an image alt text"),
		
		imageWip: z.array(z.string())
		.describe("paths to artwork wips").optional(),


		references: z.array(z.string())
		.describe("references inspered from").optional(),

		themes: z.array(z.string()),

		styles: z.array(z.string()),

		unlisted: z.boolean()
		.describe("unlisted/hidden artwork"),

		commission: z.boolean()
		.describe("true if its a commissioned artwork"),

		rating: z.number().gte(0).lte(10).optional()
		.describe("how much is the rating given for the artwork by the public"),

		show_priority: z.number().gte(0).lte(10)
		.describe("The priority of an image showing the first, 0 lowest, 10 highest"),

		tools: z.array(z.enum([
			"krita",
			"ibispaint",
			"photoshop",
			"gimp",
			"blender",
		]))
		.describe("tools list used to create the artwork"),

		price: z.string().optional()
		.describe("A price range of two value numbers"),
	})
})
export const collections = { artwork };
