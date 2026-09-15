import { notFound, redirect } from 'next/navigation';
import { DivisionOverview } from '@/components/DivisionPage';
import { divisions, findDivision } from '@/lib/divisions';

type Params = { params: Promise<{ division: string }> };

export function generateStaticParams() {
  return divisions.filter(d => d.slug !== 'trading').map(d => ({ division: d.slug }));
}

export async function generateMetadata({ params }: Params) {
  const d = findDivision((await params).division);
  return d ? { title: `${d.name} — ${d.headline.join(' ')}`, description: d.intro } : {};
}

export default async function Page({ params }: Params) {
  const { division } = await params;
  if (division === 'trading') redirect('/');
  const d = findDivision(division);
  if (!d) notFound();
  return <DivisionOverview division={d} />;
}
