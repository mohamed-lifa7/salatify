import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllahNames } from "@/lib/get-allah-names";

const page = async () => {
  const data = await getAllahNames();
  const names = data.data;
  return (
    <div className="container">
      <section>
        <h2 className="my-6 text-center text-3xl font-bold">
          99 Names of Allah
        </h2>
        <div className="mb-10 space-y-2 leading-6">
          <p>
            There are <span className="font-bold">99</span> names of Allah.
            Allah&apos;s Names (Asma Al-Husna) are the Names of God. In each of
            these, there is a specific attribute or description of God that is
            represented.
          </p>
          <p>
            <span className="font-bold">The 99 Names of Allah</span>, also known
            as the 99 Attributes of Allah, are a set of Islamic names that
            describe the different attributes and characteristics of Allah.
            These names are mentioned in the Quran, the holy book of Islam, and
            are believed to be a way for Muslims to connect with and understand
            the nature of Allah.
          </p>
          <p>
            <span className="font-bold">The 99 Names of Allah</span> are not
            just simple labels or titles, but they are powerful descriptions of
            the attributes and qualities that Allah possesses. These names
            represent the different aspects of Allah&apos;s being, and they are
            a reminder of His greatness and majesty. Some of the most well-known
            names of Allah include Al-Rahman (The Most Merciful), Al-Rahim (The
            Most Compassionate), Al-Malik (The Sovereign), Al-Quddus (The Holy),
            and Al-Wahid (The One). Other names of Allah include Al-Mujeeb (The
            Responsive), Al-Muhaymin (The Protector), Al-Hakam (The Judge),
            Al-Ra&apos;uf (The Clement), and Al-Hakim (The Wise).
          </p>
          <p>
            Each of the 99 names of Allah has its own unique meaning and
            significance. For example, the name Al-Rahman reminds Muslims of the
            mercy and compassion that Allah has for all of His creation, while
            the name Al-Hakim reminds Muslims of Allah&apos;s wisdom and
            guidance.
          </p>
          <p>
            Overall, <span className="font-bold">The 99 Names of Allah</span>{" "}
            are an important part of Islamic belief and practice. They serve as
            a reminder of the many qualities and attributes that Allah
            possesses. By understanding and contemplating on the 99 Names of
            Allah, Muslims can deepen their connection with Allah and gain a
            greater appreciation for His greatness and majesty.
          </p>
        </div>
      </section>
      <section>
        <Table>
          <TableCaption>A list of 99 Names of Allah.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>English</TableHead>
              <TableHead>Meaning</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {names.map((name) => (
              <TableRow key={name.number}>
                <TableCell className="font-medium">{name.number}</TableCell>
                <TableCell>{name.name}</TableCell>
                <TableCell>{name.transliteration}</TableCell>
                <TableCell>{name.en.meaning}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default page;
