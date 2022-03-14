import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const [title, id] = params || [];

  console.log("titie", title);
  console.log("id", id);

  return (
    <div>
      <Seo title={title} />
      {title || "Loading"}
    </div>
  );
}

// 아래와 같이 하지 않으면 검색 엔진이 query의 내용을 감지하지 못함.
export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
