import React from "react";
import { MediaCard, PageLayout } from "../../components";
import useFetchData from "../../hooks/useFetchData";
import Spinner from "../../utils/Spinner";

export default function Popular() {
  const { error, loading, data } = useFetchData("movie/popular");
  if (loading) return <Spinner />;
  return (
    <PageLayout heading="Popular" error={error}>
      <div className="d-flex flex-wrap gap-3">
        {data.map((movie) => (
          <MediaCard {...movie} key={movie.id} />
        ))}
      </div>
    </PageLayout>
  );
}
