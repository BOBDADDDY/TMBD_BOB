import React from 'react'
import { PersonCard, PageLayout } from "../../components";
import { Col, Row } from 'react-bootstrap'
import useFetchData from "../../hooks/useFetchData";
import Spinner from "../../utils/Spinner";
import useInfiniteScroll from '../../hooks/useInfiniteScroll';


export default function Person() {
    const { error, data, setPage, newData } = useFetchData("person/popular");
    const [isFetching, setIsFetching] = useInfiniteScroll(Fetchmore);

    function Fetchmore() {
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setIsFetching(false);
      }, 5000);
    }
    if (!data) return <Spinner />;
  return (
    <PageLayout heading="Trending People" error={error}>
    <Row className="gy-2">
            {[...newData, ...data].map((person) => (
              <Col xs={6} md={3} xl={2} key={person.id}>
               <PersonCard {...person} />
              </Col>
            ))}
          </Row>
          {isFetching && <Spinner />}
        </PageLayout>
  )
}
