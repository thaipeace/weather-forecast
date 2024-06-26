import CurrentCard from "./components/ui/CurrentCard";

export default function Home() {
  const currentCardProps = {
    temp: 23,
    tempUnit: 'C',
    status: 'Cloudy',
    humidity: 70,
    winds: 80,
    windsDirection: 'north',
    visibility: 56
  }

  return (
    <article>
      <CurrentCard {...currentCardProps} />
    </article>
  );
}
