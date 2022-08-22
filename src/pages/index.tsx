import type { NextPage } from "next";
import { Calendar } from "../common/components/calendar/Calendar";
import { trpc } from "../common/utils/trpc";


const Home: NextPage = () => {
  return (
    <div className="flex flex-1 flex-col m-3">
      <Calendar />
    </div>
  );
};

export default Home;
