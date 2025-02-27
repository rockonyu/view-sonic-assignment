import { useEffect } from "react";
import { styled } from "styled-components";

import { DEVICE_WIDTH } from "@/constants";
import { Classroom } from "@/features/classroom";
import { JoinClass } from "@/features/join-class";
import { startClass } from "@/features/class";
import { useGetClassQuery } from "@/services/api";

import { useAppDispatch } from "./hooks";

const Container = styled.div`
  min-height: 100vh;

  @media (${DEVICE_WIDTH.MD}) {
    display: flex;
    grid-template-columns: 1fr 1fr;

    align-items: center;
    justify-content: center;
  }
`;

const CLASS_ID = "X58E9647";

export function App() {
  const dispatch = useAppDispatch();

  const { data: currClass, isLoading } = useGetClassQuery(CLASS_ID);

  useEffect(() => {
    if (!currClass) {
      return;
    }

    dispatch(startClass(currClass));
  }, [currClass, dispatch]);

  if (isLoading || !currClass) {
    return null;
  }

  return (
    <Container>
      <JoinClass
        name={currClass.name}
        classId={currClass.id}
        url={currClass.url}
      />

      <Classroom name={currClass.name} classId={currClass.id} />
    </Container>
  );
}

export default App;
