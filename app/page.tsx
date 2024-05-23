"use client";
import Weather from "@/components/sections/Weather";
import WeatherSkeleton from "@/components/ui/skeleton";
import { useLocationContext } from "@/context/ContextProvider";
import {
  getWeatherByLocationService,
} from "@/services";
import { useEffect, Suspense } from "react";

export default function Home() {
  const { weather, setWeather } = useLocationContext();

  useEffect(() => {
    const firstFunction = async () => {
      const weather = await getWeatherByLocationService("london");
      setWeather(weather);
    };
    firstFunction();
  }, []);

  return (
    <Suspense fallback={<WeatherSkeleton />}>
      <Weather data={weather} />
    </Suspense>
  );
}