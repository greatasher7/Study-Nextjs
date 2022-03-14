import Seo from "../../components/Seo";
import { IParams } from "../../type/interface";

interface IDetailProps extends IParams {}

export default function Detail({ params }: IDetailProps) {
  const title = params[0];
  const id = params[1];

  console.log("titie", title);
  console.log("id", id);

  return (
    <div>
      <Seo title={title} />
      {title || "Loading"}
    </div>
  );
}

interface IServerSideProps {
  params: IParams;
}

// 아래와 같이 하지 않으면 검색 엔진이 query의 내용을 감지하지 못함.
export const getServerSideProps = ({
  params: { params },
}: IServerSideProps) => {
  return {
    props: { params },
  };
};
