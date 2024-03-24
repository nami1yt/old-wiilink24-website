declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// This needs to be in sync with ImageMetadata
	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"blog": {
"2020-12-03-issue-01.md": {
  id: "2020-12-03-issue-01.md",
  slug: "2020-12-03-issue-01",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2020-12-14-issue-02.md": {
  id: "2020-12-14-issue-02.md",
  slug: "2020-12-14-issue-02",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2021-01-29-issue-03.md": {
  id: "2021-01-29-issue-03.md",
  slug: "2021-01-29-issue-03",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2021-03-31-issue-04.md": {
  id: "2021-03-31-issue-04.md",
  slug: "2021-03-31-issue-04",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2021-04-01-issue-05.md": {
  id: "2021-04-01-issue-05.md",
  slug: "2021-04-01-issue-05",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2021-05-01-issue-06.md": {
  id: "2021-05-01-issue-06.md",
  slug: "2021-05-01-issue-06",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2021-05-15-issue-07.md": {
  id: "2021-05-15-issue-07.md",
  slug: "2021-05-15-issue-07",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2021-11-23-issue-08.md": {
  id: "2021-11-23-issue-08.md",
  slug: "2021-11-23-issue-08",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2021-12-05-issue-09.md": {
  id: "2021-12-05-issue-09.md",
  slug: "2021-12-05-issue-09",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2022-01-03-issue-10.md": {
  id: "2022-01-03-issue-10.md",
  slug: "2022-01-03-issue-10",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2022-02-19-issue-11.md": {
  id: "2022-02-19-issue-11.md",
  slug: "2022-02-19-issue-11",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2022-08-03-issue-12.md": {
  id: "2022-08-03-issue-12.md",
  slug: "2022-08-03-issue-12",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2022-09-04-issue-13.md": {
  id: "2022-09-04-issue-13.md",
  slug: "2022-09-04-issue-13",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2022-11-08-issue-14.md": {
  id: "2022-11-08-issue-14.md",
  slug: "2022-11-08-issue-14",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2023-02-26-issue-15.md": {
  id: "2023-02-26-issue-15.md",
  slug: "2023-02-26-issue-15",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
},
"core": {
"Demae.md": {
  id: "Demae.md",
  slug: "demae",
  body: string,
  collection: "core",
  data: any
} & { render(): Render[".md"] },
"Digicam.md": {
  id: "Digicam.md",
  slug: "digicam",
  body: string,
  collection: "core",
  data: any
} & { render(): Render[".md"] },
"SPD.md": {
  id: "SPD.md",
  slug: "spd",
  body: string,
  collection: "core",
  data: any
} & { render(): Render[".md"] },
"TVnotomo.md": {
  id: "TVnotomo.md",
  slug: "tvnotomo",
  body: string,
  collection: "core",
  data: any
} & { render(): Render[".md"] },
"WiiRoom.md": {
  id: "WiiRoom.md",
  slug: "wiiroom",
  body: string,
  collection: "core",
  data: any
} & { render(): Render[".md"] },
},
"guide": {
"1welcome.md": {
  id: "1welcome.md",
  slug: "1welcome",
  body: string,
  collection: "guide",
  data: any
} & { render(): Render[".md"] },
"2installation.md": {
  id: "2installation.md",
  slug: "2installation",
  body: string,
  collection: "guide",
  data: any
} & { render(): Render[".md"] },
"3FAQ.md": {
  id: "3FAQ.md",
  slug: "3faq",
  body: string,
  collection: "guide",
  data: any
} & { render(): Render[".md"] },
"board.md": {
  id: "board.md",
  slug: "board",
  body: string,
  collection: "guide",
  data: any
} & { render(): Render[".md"] },
"contest.md": {
  id: "contest.md",
  slug: "contest",
  body: string,
  collection: "guide",
  data: any
} & { render(): Render[".md"] },
"demae.md": {
  id: "demae.md",
  slug: "demae",
  body: string,
  collection: "guide",
  data: any
} & { render(): Render[".md"] },
"digicam.md": {
  id: "digicam.md",
  slug: "digicam",
  body: string,
  collection: "guide",
  data: any
} & { render(): Render[".md"] },
"dokodemo.md": {
  id: "dokodemo.md",
  slug: "dokodemo",
  body: string,
  collection: "guide",
  data: any
} & { render(): Render[".md"] },
"evc.md": {
  id: "evc.md",
  slug: "evc",
  body: string,
  collection: "guide",
  data: any
} & { render(): Render[".md"] },
"forecast.md": {
  id: "forecast.md",
  slug: "forecast",
  body: string,
  collection: "guide",
  data: any
} & { render(): Render[".md"] },
"kirbytv.md": {
  id: "kirbytv.md",
  slug: "kirbytv",
  body: string,
  collection: "guide",
  data: any
} & { render(): Render[".md"] },
"nintendo.md": {
  id: "nintendo.md",
  slug: "nintendo",
  body: string,
  collection: "guide",
  data: any
} & { render(): Render[".md"] },
"tvnotomo.md": {
  id: "tvnotomo.md",
  slug: "tvnotomo",
  body: string,
  collection: "guide",
  data: any
} & { render(): Render[".md"] },
"wiinoma.md": {
  id: "wiinoma.md",
  slug: "wiinoma",
  body: string,
  collection: "guide",
  data: any
} & { render(): Render[".md"] },
},
"members": {
"1Sketch.md": {
  id: "1Sketch.md",
  slug: "1sketch",
  body: string,
  collection: "members",
  data: any
} & { render(): Render[".md"] },
"2Palapeli.md": {
  id: "2Palapeli.md",
  slug: "2palapeli",
  body: string,
  collection: "members",
  data: any
} & { render(): Render[".md"] },
"3Humanoidear.md": {
  id: "3Humanoidear.md",
  slug: "3humanoidear",
  body: string,
  collection: "members",
  data: any
} & { render(): Render[".md"] },
"3nami1.md": {
  id: "3nami1.md",
  slug: "3nami1",
  body: string,
  collection: "members",
  data: any
} & { render(): Render[".md"] },
"4PablosCorner.md": {
  id: "4PablosCorner.md",
  slug: "4pabloscorner",
  body: string,
  collection: "members",
  data: any
} & { render(): Render[".md"] },
"4giustino.md": {
  id: "4giustino.md",
  slug: "4giustino",
  body: string,
  collection: "members",
  data: any
} & { render(): Render[".md"] },
"4oscie.md": {
  id: "4oscie.md",
  slug: "4oscie",
  body: string,
  collection: "members",
  data: any
} & { render(): Render[".md"] },
"5Luna.md": {
  id: "5Luna.md",
  slug: "5luna",
  body: string,
  collection: "members",
  data: any
} & { render(): Render[".md"] },
"6diego.md": {
  id: "6diego.md",
  slug: "6diego",
  body: string,
  collection: "members",
  data: any
} & { render(): Render[".md"] },
},
"video": {
"Dokodemo.md": {
  id: "Dokodemo.md",
  slug: "dokodemo",
  body: string,
  collection: "video",
  data: any
} & { render(): Render[".md"] },
"Kirbytv.md": {
  id: "Kirbytv.md",
  slug: "kirbytv",
  body: string,
  collection: "video",
  data: any
} & { render(): Render[".md"] },
"MetroidPreview.md": {
  id: "MetroidPreview.md",
  slug: "metroidpreview",
  body: string,
  collection: "video",
  data: any
} & { render(): Render[".md"] },
"Minna.md": {
  id: "Minna.md",
  slug: "minna",
  body: string,
  collection: "video",
  data: any
} & { render(): Render[".md"] },
"YouTube.md": {
  id: "YouTube.md",
  slug: "youtube",
  body: string,
  collection: "video",
  data: any
} & { render(): Render[".md"] },
},
"wiicon": {
"Board.md": {
  id: "Board.md",
  slug: "board",
  body: string,
  collection: "wiicon",
  data: any
} & { render(): Render[".md"] },
"Contest.md": {
  id: "Contest.md",
  slug: "contest",
  body: string,
  collection: "wiicon",
  data: any
} & { render(): Render[".md"] },
"Forecast.md": {
  id: "Forecast.md",
  slug: "forecast",
  body: string,
  collection: "wiicon",
  data: any
} & { render(): Render[".md"] },
"News.md": {
  id: "News.md",
  slug: "news",
  body: string,
  collection: "wiicon",
  data: any
} & { render(): Render[".md"] },
"Nintendo.md": {
  id: "Nintendo.md",
  slug: "nintendo",
  body: string,
  collection: "wiicon",
  data: any
} & { render(): Render[".md"] },
"Politics.md": {
  id: "Politics.md",
  slug: "politics",
  body: string,
  collection: "wiicon",
  data: any
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
