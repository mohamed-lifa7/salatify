import type { ChapterProps, HadithsProps } from "@/types";

export async function getChapters({
  params,
}: {
  params: {
    books?: boolean;
    chapters?: string;
    hadiths?: string;
  };
}) {
  try {
    let apiUrl = "https://hadithapi.com/api";
    apiUrl += `/${params.chapters}/chapters`;

    apiUrl += `?apiKey=$2y$10$W3TkNt2U2wlTVZXhew4g7utt6J26CPhYmwkr1N0yUYf4jBdh3`;
    const response = await fetch(apiUrl);
    const result = (await response.json()) as Promise<ChapterProps>;
    return result;
  } catch (error) {
    if (error instanceof Error)
      console.error("can't fetch hadiths ", error.message);
  }
}

export async function getHadiths({
  searchParams,
}: {
  searchParams?: {
    pagination?: string;
    chapter?: string;
    hadithNumber?: number;
  };
}) {
  try {
    let apiUrl = "https://hadithapi.com/api/hadiths";

    apiUrl += `${
      searchParams?.chapter ? "&chapter=" + searchParams?.chapter : ""
    }${
      searchParams?.hadithNumber
        ? "&hadithNumber=" + searchParams?.hadithNumber
        : ""
    }${
      searchParams?.pagination ? "&pagination=" + searchParams?.pagination : ""
    }?apiKey=$2y$10$W3TkNt2U2wlTVZXhew4g7utt6J26CPhYmwkr1N0yUYf4jBdh3`;
    const response = await fetch(apiUrl);
    const result = (await response.json()) as Promise<HadithsProps>;
    return result;
  } catch (error) {
    if (error instanceof Error)
      console.error("can't fetch hadiths ", error.message);
  }
}
