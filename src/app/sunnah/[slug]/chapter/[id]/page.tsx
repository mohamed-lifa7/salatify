import { getHadiths } from "@/lib/sunnah/get-hadiths";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page({
  params,
}: {
  params: { slug: string; id: string };
}) {
  console.log("params: ", params);

  const data = await getHadiths({
    searchParams: { chapter: params.id, book: params.slug },
  });
  return (
    <>
      <div>
        <h2 className="my-6 text-center text-3xl font-bold">Hadiths</h2>
        <div className="flex flex-wrap items-center space-y-4">
          {data?.hadiths.data.map((hadith) => (
            <Card key={hadith.id}>
              <CardHeader>
                <CardTitle>Hadith no. {hadith.id}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{hadith.hadithEnglish}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
