import { useFetch } from "../hooks/useFetch";

export default function DailyImage() {
  //enter api key below as the key constant (README.md)
  const key = "ENTER_API_KEY";
  const base = "https://api.nasa.gov/planetary/apod?api_key=";
  const url = base + key;
  const { data } = useFetch(url);

  return (
    <div className="daily-image">
      {data && (
        <div>
          <h2>{data.title}</h2>
          <img src={data.url} alt={data.title} />
        </div>
      )}
    </div>
  );
}
