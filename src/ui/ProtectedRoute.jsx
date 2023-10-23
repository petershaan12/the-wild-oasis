import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const FullPage = styled.div`    
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. Load the aunthiteced route
  const { isLoading, isAunthenticated } = useUser();

  //3. if there is noaunthiced user, redirect to login
  useEffect(
    function () {
      if (!isAunthenticated && !isLoading) navigate("/login");
    },
    [isAunthenticated, isLoading, navigate]
  );

  //2. While Loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. if there is user, render the app
  if(isAunthenticated) return children;
}

export default ProtectedRoute;
