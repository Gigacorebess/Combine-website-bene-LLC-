import { notFound, redirect } from 'next/navigation';
import { DivisionAboutPage } from '@/components/DivisionContextPages';
import { divisionContent, findDivisionContent } from '@/lib/division-content';
import { divisions, findDivision } from '@/lib/divisions';

type Params = { params: Promise<{ division: string }> };

export function generateStaticParams() {
  return divisions.filter(d => divisionContent[d.slug]).map(d => ({ division: d.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { division } = await params;
  const d = findDivision(division);
  const c = findDivisionContent(division);
  return d && c ? { title: `About ${d.name}`, description: c.about.lede } : {};
}

export default async function Page({ params }: Params) {
  const { division } = await params;
  // Trading is the root site and keeps its own About page.
  if (division === 'trading') redirect('/about');
  const d = findDivision(division);
  const c = findDivisionContent(division);
  if (!d || !c) notFound();
  return <DivisionAboutPage division={d} about={c.about} />;
}
