import { notFound } from 'next/navigation';
import { SubdivisionDetail } from '@/components/DivisionPage';
import { divisions, findDivision } from '@/lib/divisions';

type Params = { params: Promise<{ division: string; sub: string }> };

const lookup = async ({ params }: Params) => {
  const { division, sub } = await params;
  const d = division === 'trading' ? undefined : findDivision(division);
  return { d, s: d?.subs.find(x => x.slug === sub) };
};

export function generateStaticParams() {
  return divisions.filter(d => d.slug !== 'trading').flatMap(d => d.subs.map(s => ({ division: d.slug, sub: s.slug })));
}

export async function generateMetadata(props: Params) {
  const { d, s } = await lookup(props);
  return d && s ? { title: `${s.name} — ${d.name}`, description: s.summary } : {};
}

export default async function Page(props: Params) {
  const { d, s } = await lookup(props);
  if (!d || !s) notFound();
  return <SubdivisionDetail division={d} sub={s} />;
}
