import { getHadiths } from "@/lib/sunnah/get-hadiths";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getHadiths({ searchParams: { chapter: params.id } });
  return (
    <>
      <div>
        <h2 className="my-6 text-center text-3xl font-bold">Hadiths</h2>
        <div className="flex flex-wrap items-center">
          {data?.hadiths.data.map((hadith) => (
            <Card key={hadith.id}>
              <CardHeader>
                <CardTitle>{hadith.chapterId}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{hadith.hadithEnglish}</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
