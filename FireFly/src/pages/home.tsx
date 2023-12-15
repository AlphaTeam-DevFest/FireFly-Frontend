import Navigation from "../Components/navigation";
import Conflicts from "./Conflicts";
import { useNavigate } from "react-router";
type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <Conflicts />
      <Navigation />
    </>
  );
}
