import { getChapters } from "@/lib/sunnah/get-hadiths";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
export default async function Page({ params }: { params: { slug: string } }) {
  console.log("params: ", params);
  const data = await getChapters({
    params: {
      books: true,
      chapters: params.slug,
      hadiths: undefined,
    },
  });
  return (
    <div>
      <h2 className="my-6 text-center text-3xl font-bold">Chapters</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>English</TableHead>
            <TableHead>Arabic</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.chapters.map((chapter) => (
            <TableRow key={chapter.id}>
              <TableCell className="font-medium">
                {chapter.chapterNumber}
              </TableCell>
              <TableCell className="underline-offset-4 hover:underline">
                <Link
                  href={`/sunnah/${chapter.bookSlug}/chapter/${chapter.chapterNumber}`}
                >
                  {chapter.chapterEnglish}
                </Link>
              </TableCell>
              <TableCell>{chapter.chapterArabic}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell>{data?.chapters.length} chapters</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
