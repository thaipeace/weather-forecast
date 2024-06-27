import CurrentCard from "./components/ui/CurrentCard";
import DateCard from "./components/ui/DateCard";

export default function Home() {
  const currentCardData = {
    temp: 23,
    tempUnit: 'C',
    status: 'Cloudy',
    humidity: '70 %',
    winds: '80 m/s',
    windsDirection: 'north',
    visibility: '56 km'
  }

  const dateCardData = {
    title: '5-day Forecast (3 Hours)',
    dateCollecion: [
      {
        date: 'Today',
        status: [
          {
            time: '08:00',
            descripton: 'moderate rain',
            temp: '25.35/25.22',
          },
          {
            time: '11:00',
            descripton: 'heavy intensity rain',
            temp: '25.35/25.22',
          }
        ]
      },
      {
        date: '25 January',
        status: [
          {
            time: '02:00',
            descripton: 'overcast clouds',
            temp: '24.8/24.8',
          }
        ]
      }
    ]
  }

  return (
    <article className="flex flex-col gap-y-3">
      <CurrentCard {...currentCardData} />
      <DateCard {...dateCardData} />
    </article>
  );
}
