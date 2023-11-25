import { NextPage } from "next";
import Head from "next/head";

export type SeoHeadType = {
  title: string;
  favicon?: string;
  faviconImg?: string;
};

interface Props {
  title: string;
}

const SeoHead: NextPage<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title} | tarotForLove</title>
    </Head>
  );
};

export default SeoHead;

// 사용은 nextjs 에서 제공하는 metadata 로 대체되었지만,
// ts 적용한 페이지별 재사용 헤더 작성 패턴으로
// 참고하기 위해 남겨둠
